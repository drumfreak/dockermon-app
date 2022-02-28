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
var EventsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
require("dotenv/config");
const axios_1 = require("@nestjs/axios");
const axios_2 = require("axios");
const rxjs_1 = require("rxjs");
const stream_1 = require("stream");
const docker_hosts_service_1 = require("../docker-hosts/docker-hosts.service");
let EventsService = EventsService_1 = class EventsService {
    constructor(http, dockerHostService) {
        this.http = http;
        this.dockerHostService = dockerHostService;
        this.logger = new common_1.Logger(EventsService_1.name);
        this.containerMonitorSockets = {};
        this.containerMonitorJobs = {};
    }
    async containerMonitor(data, job) {
        try {
            const clientId = data.clientId;
            const jobId = job.queue.token;
            this.logger.log('Running docker containerMonitor...');
            this.logger.debug('Docker Container Monitor', data);
            this.containerMonitorSockets[clientId] = {};
            this.containerMonitorJobs[jobId] = { client: clientId };
            this.containerMonitorSockets[clientId].stopSignal$ = new rxjs_1.Subject();
            this.containerMonitorSockets[clientId].ct = axios_2.default.CancelToken.source();
            let inoutStream = new stream_1.Transform({
                transform(chunk, encoding, callback) {
                    this.push(chunk);
                    callback();
                },
            });
            try {
                let url = await this.dockerHostService.getUrl(data.hostId);
                inoutStream.on('data', (chunk) => {
                    this.logger.verbose(new Date().toISOString() + ' -----> tick ' + process.pid);
                });
                inoutStream.on('end', () => {
                    console.log('closing pipe');
                });
                inoutStream.on('destroy', () => {
                    console.log('destroy pipe');
                });
                url += '/containers/' + data.containerId + '/stats?stream=true';
                const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url, {
                    responseType: 'stream',
                    timeout: 0,
                    cancelToken: this.containerMonitorSockets[clientId].ct.token,
                }));
                if (c) {
                    c.data.pipe(inoutStream);
                    await (0, rxjs_1.firstValueFrom)(this.containerMonitorSockets[clientId].stopSignal$);
                    c.data.unpipe();
                    c.data = null;
                    inoutStream = null;
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
    async stopContainerMonitor(jobId, result) {
        let clientId = result;
        console.log('Found jobId', jobId);
        if (clientId !== undefined) {
            clientId = JSON.parse(clientId);
            console.log('Found clientId', clientId);
            if (this.containerMonitorSockets[clientId]) {
                this.containerMonitorSockets[clientId].stopSignal$.next();
                this.containerMonitorSockets[clientId].ct.cancel('I am done');
                delete this.containerMonitorSockets[clientId];
                delete this.containerMonitorJobs[jobId];
            }
        }
    }
};
EventsService = EventsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        docker_hosts_service_1.DockerHostsService])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map