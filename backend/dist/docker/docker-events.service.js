"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DockerEventsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerEventsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const util_1 = require("util");
const child_process_1 = require("child_process");
const rxjs_1 = require("rxjs");
const stream_1 = require("stream");
const docker_service_1 = require("./docker.service");
const events_gateway_1 = require("../events/events.gateway");
const docker_hosts_service_1 = require("../docker-hosts/docker-hosts.service");
const activity_logs_service_1 = require("../activity-logs/activity-logs.service");
let DockerEventsService = DockerEventsService_1 = class DockerEventsService {
    constructor(http, dockerService, eventsGateway, hostService, activityLogService) {
        this.http = http;
        this.dockerService = dockerService;
        this.eventsGateway = eventsGateway;
        this.hostService = hostService;
        this.activityLogService = activityLogService;
        this.logger = new common_1.Logger(DockerEventsService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
        this.dockerHubUrl = 'http://hub.docker.com/v2/';
        this.dockerEventObservables = [rxjs_1.Subscription];
        this.dockerEventStreams = [];
        this.inoutStream = new stream_1.Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk);
                callback();
            },
        });
    }
    async dockerEvents() {
        this.logger.log('Connecting to http events');
        const f = await this.hostService.getHosts({ active: true });
        if ((f === null || f === void 0 ? void 0 : f.status) === 'success') {
            f.data.forEach((host) => {
                const inoutStream = new stream_1.Transform({
                    transform(chunk, encoding, callback) {
                        this.push(chunk);
                        callback();
                    },
                });
                if (host.ipAddress === 'localhost' || host.ipAddress === '127.0.0.1') {
                    host.ipAddress = process.env.WORKER_HOST_ADDRESS;
                }
                const url = host.connectionType + '://' + host.ipAddress + ':' + host.port;
                const dockerEventObservable = this.http
                    .get(url + '/events', {
                    responseType: 'stream',
                    timeout: 0,
                })
                    .subscribe((res) => {
                    res.data.pipe(inoutStream);
                });
                inoutStream.on('data', (chunk) => {
                    const decoder = new TextDecoder('utf-8');
                    const data = decoder.decode(chunk);
                    let parsedData;
                    try {
                        parsedData = JSON.parse(data);
                    }
                    catch (err) {
                        console.warn('dockerEvents could not parse JSON data from event', err.message);
                        parsedData = data;
                    }
                    this.handleEvent(parsedData, host.id);
                });
                this.dockerEventObservables.push(dockerEventObservable);
                this.dockerEventStreams.push(inoutStream);
            });
        }
    }
    subscribeDockerEvents() {
        this.dockerEvents();
    }
    handleEvent(event, hostId) {
        this.logger.warn('Event');
        switch (event.Type) {
            case 'container':
                this.handleContainerEvent(event, hostId);
                break;
            case 'volume':
                this.handleVolumeEvent(event, hostId);
                break;
            case 'image':
                this.handleImageEvent(event, hostId);
                break;
            case 'network':
                this.handleNetworkEvent(event, hostId);
                break;
        }
    }
    unsubscribeDockerEvents() {
        if (this.dockerEventObservables.length > 0) {
            this.dockerEventObservables.foreach((observable) => {
                observable.unsubscribe();
            });
            this.dockerEventObservable.unsubscribe();
        }
    }
    async handleContainerEvent(event, hostId) {
        const container = { containerId: event.Actor.ID.substring(0, 12), hostId: hostId };
        const action = event.Action;
        const excluded = ['top'];
        console.log('Action', event.Action);
        switch (event.Action) {
            default:
                this.logger.log('Container Event');
                if (event.Action === 'create') {
                    await this.dockerService.dockerUsage(hostId);
                }
                setTimeout(async () => {
                    const c = await this.dockerService.inspectContainer(container);
                    this.eventsGateway.dockerReceiver({
                        type: 'container',
                        action,
                        event,
                        hostId: hostId,
                        data: c,
                    });
                    if (!excluded.includes(event.Action)) {
                        const activityLog = {
                            container: c.id,
                            host: hostId,
                            contentType: 'containers',
                            action: event.Action,
                            notes: 'dockerEventsReceiver',
                            contentName: c.name,
                            dockerId: event.Actor.ID,
                            contentId: c.id,
                            data: event,
                            createdAt: new Date(event.time),
                            containerSnapshotAfter: c,
                        };
                        try {
                            this.activityLogService.save(activityLog);
                        }
                        catch (error) {
                            console.log('Activity Log Container Event Failed', error);
                        }
                    }
                }, 500);
                break;
        }
    }
    async handleVolumeEvent(event, hostId) {
        const volume = { volumeId: event.Actor.ID, hostId: hostId };
        const action = event.Action;
        switch (event.Action) {
            default:
                switch (event.status) {
                    case 'delete':
                        this.eventsGateway.dockerReceiver({
                            type: 'volume',
                            action,
                            event,
                            hostId: hostId,
                            data: null,
                        });
                        break;
                    default:
                        setTimeout(async () => {
                            const c = await this.dockerService.inspectVolume(volume);
                            this.eventsGateway.dockerReceiver({
                                type: 'volume',
                                action,
                                event,
                                hostId: hostId,
                                data: c,
                            });
                            try {
                                const activityLog = {
                                    volume: c.id,
                                    host: hostId,
                                    contentType: 'volumes',
                                    action: event.Action,
                                    notes: 'dockerEventsReceiver',
                                    dockerId: event.Actor.ID,
                                    contentName: c.name,
                                    contentId: c.id,
                                    data: event,
                                    createdAt: new Date(event.time),
                                };
                                this.activityLogService.save(activityLog);
                            }
                            catch (error) {
                                console.log('Activity Log Volume Event Failed', error);
                            }
                        }, 500);
                        break;
                }
                break;
        }
    }
    async handleImageEvent(event, hostId) {
        const image = { imageId: event.Actor.ID, hostId: hostId };
        const action = event.Action;
        switch (event.Action) {
            default:
                switch (event.status) {
                    case 'delete':
                        this.eventsGateway.dockerReceiver({
                            type: 'image',
                            action,
                            event,
                            hostId: hostId,
                            data: null,
                        });
                        break;
                    default:
                        setTimeout(async () => {
                            const c = await this.dockerService.inspectImage(image);
                            this.eventsGateway.dockerReceiver({
                                type: 'image',
                                action,
                                event,
                                hostId: hostId,
                                data: c,
                            });
                            try {
                                const activityLog = {
                                    image: c.id,
                                    host: hostId,
                                    contentType: 'images',
                                    action: event.Action,
                                    contentName: c.name,
                                    contentId: c.id,
                                    notes: 'dockerEventsReceiver',
                                    dockerId: event.Actor.ID,
                                    data: event,
                                    createdAt: new Date(event.time),
                                };
                                this.activityLogService.save(activityLog);
                            }
                            catch (error) {
                                console.log('Activity Log Image Event Failed', error);
                            }
                        }, 500);
                        break;
                }
                break;
        }
    }
    async handleNetworkEvent(event, hostId) {
        const network = { networkId: event.Actor.ID, hostId: hostId };
        const action = event.Action;
        switch (event.Action) {
            default:
                switch (event.status) {
                    case 'delete':
                        this.eventsGateway.dockerReceiver({
                            type: 'network',
                            action,
                            event,
                            hostId: hostId,
                            data: null,
                        });
                        break;
                    default:
                        setTimeout(async () => {
                            const c = await this.dockerService.inspectNetwork(network);
                            this.eventsGateway.dockerReceiver({
                                type: 'network',
                                action,
                                event,
                                hostId: hostId,
                                data: c,
                            });
                            const activityLog = {
                                network: c.id,
                                host: hostId,
                                contentType: 'networks',
                                action: event.Action,
                                contentName: c.name,
                                contentId: c.id,
                                dockerId: event.Actor.ID,
                                notes: 'dockerEventsReceiver',
                                createdAt: new Date(event.time),
                                data: event,
                            };
                            try {
                                this.activityLogService.save(activityLog);
                            }
                            catch (error) {
                                console.log('Activity Log Network Event Failed', error);
                            }
                        }, 500);
                        break;
                }
                break;
        }
    }
};
DockerEventsService = DockerEventsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        docker_service_1.DockerService,
        events_gateway_1.EventsGateway,
        docker_hosts_service_1.DockerHostsService,
        activity_logs_service_1.ActivityLogService])
], DockerEventsService);
exports.DockerEventsService = DockerEventsService;
//# sourceMappingURL=docker-events.service.js.map