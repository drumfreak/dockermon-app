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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EventsGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const containers_service_1 = require("../containers/containers.service");
const stats_service_1 = require("../stats/stats.service");
const docker_service_1 = require("../docker/docker.service");
const docker_hub_service_1 = require("../docker/docker-hub.service");
const docker_images_service_1 = require("../docker-images/docker-images.service");
const util_1 = require("util");
const child_process_1 = require("child_process");
const WebSocket = require("ws");
const stream_1 = require("stream");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const bull_1 = require("@nestjs/bull");
const docker_hosts_service_1 = require("../docker-hosts/docker-hosts.service");
const site_data_service_1 = require("../docker/site-data.service");
const events_guard_1 = require("./events.guard");
require("dotenv/config");
let EventsGateway = EventsGateway_1 = class EventsGateway {
    constructor(containerService, dockerImageService, statsService, dockerService, dockerHubService, http, dockerHostService, siteDataService, eventsQueue) {
        this.containerService = containerService;
        this.dockerImageService = dockerImageService;
        this.statsService = statsService;
        this.dockerService = dockerService;
        this.dockerHubService = dockerHubService;
        this.http = http;
        this.dockerHostService = dockerHostService;
        this.siteDataService = siteDataService;
        this.eventsQueue = eventsQueue;
        this.containerSockets = {};
        this.containerLogSockets = {};
        this.containerMonitorSockets = {};
        this.connectedSockets = {};
        this.exec = (0, util_1.promisify)(child_process_1.exec);
        this.logger = new common_1.Logger(EventsGateway_1.name);
    }
    dockerReceiver(data) {
        this.server.emit('dockerEventsReceiver', data);
    }
    async containerInspectRelay(data) {
        this.server.emit('dockerEventsReceiver', data);
    }
    async pingReceiver(data, client) {
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            this.logger.log('------> Ping <------ ', ' Hello ', client.id);
        }
    }
    async getContainers(data, client) {
        const c = await this.containerService.getContainers(data);
        const emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'containers' : data.callback;
        this.server.to(client.id).emit(emitTo, c);
        return c;
    }
    async hostsList(data, client) {
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            this.logger.log('Get Hosts List', data);
        }
        let results;
        let c;
        let emitTo;
        try {
            switch (data.command) {
                default:
                    if (data.command === 'createHost') {
                        const b = await this.dockerHostService.save(data.data);
                        if (b)
                            c = { data: b };
                    }
                    else if (data.command === 'editHost') {
                        const host = await this.dockerHostService.getHostById(data.data.id);
                        if (!host) {
                            throw new Error('Host not found');
                        }
                        host.name = data.data.name;
                        host.ipAddress = data.data.ipAddress;
                        host.active = data.data.active;
                        host.port = data.data.port;
                        host.connectionType = data.data.connectionType;
                        host.protected = data.data.protected;
                        host.windowsHost = data.data.windowsHost;
                        const b = await this.dockerHostService.save(host);
                        if (b)
                            c = { data: b };
                    }
                    else if (data.command === 'disableHost') {
                        const host = await this.dockerHostService.getHostById(data.host.id);
                        if (!host) {
                            throw new Error('Host not found');
                        }
                        host.active = false;
                        const b = await this.dockerHostService.save(host);
                        if (b)
                            c = { data: b };
                    }
                    else if (data.command === 'enableHost') {
                        const host = await this.dockerHostService.getHostById(data.host.id);
                        if (!host) {
                            throw new Error('Host not found');
                        }
                        host.active = true;
                        const b = await this.dockerHostService.save(host);
                        if (b)
                            c = { data: b };
                    }
                    else if (data.command === 'removeHost') {
                        const b = await this.dockerHostService.removeHost({ id: data.host.id });
                        if (b)
                            c = { data: b };
                    }
                    else {
                        c = await this.dockerHostService.getHosts({ limit: 1000 });
                    }
                    if (!c) {
                        return;
                    }
                    results = { status: 'success', data: c.data };
                    if (data.hook) {
                        results.hook = data.hook;
                    }
                    emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerHostResults' : data.callback;
                    this.server.to(client.id).emit(emitTo, results);
                    break;
            }
        }
        catch (error) {
            this.logger.debug('createHost Caught error... Error', data);
            emitTo = !(data === null || data === void 0 ? void 0 : data.errorHandler) ? 'errorHandler' : data.errorHandler;
            results = { status: 'fail', data, hook: data.hook, error: error.message };
            this.server.emit(emitTo, results);
        }
    }
    async siteData(data, client) {
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            this.logger.log('Get Site Data List', data);
        }
        let results;
        let c;
        let emitTo;
        try {
            switch (data.command) {
                default:
                    c = await this.siteDataService.getSiteData();
                    if (!c) {
                        return;
                    }
                    results = { status: 'success', data: c.data };
                    if (data.hook) {
                        results.hook = data.hook;
                    }
                    emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerHostResults' : data.callback;
                    this.server.to(client.id).emit(emitTo, results);
                    break;
            }
        }
        catch (error) {
            this.logger.debug('siteData Caught error... Error', data);
            emitTo = !(data === null || data === void 0 ? void 0 : data.errorHandler) ? 'errorHandler' : data.errorHandler;
            results = { status: 'fail', data, hook: data.hook, error: error.message };
            this.server.emit(emitTo, results);
        }
    }
    async dockerCommand(data, client) {
        var _a, _b;
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            this.logger.log('Docker Command', data);
        }
        let results;
        let c;
        let c2;
        let emitTo;
        let retData;
        try {
            switch (data.command) {
                case 'dockerHubRepositoryDetails':
                    c = await this.dockerHubService.repositoryDetails(data.repository);
                    retData = c.data;
                    if (c2) {
                        retData.tags = c2.data.results;
                    }
                    results = { status: 'success', type: 'dockerHub', action: 'details', data: retData };
                    emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerHubRepositoryResults' : data.callback;
                    this.server.to(client.id).emit(emitTo, results);
                    break;
                case 'dockerHubRepositoryTags':
                    c2 = await this.dockerHubService.repositoryTags(data.repository, data.options);
                    retData = {};
                    if (c2) {
                        retData.hook = c2.hook;
                        retData.tags = c2.data.results;
                        retData.count = c2.data.count;
                        if ((_a = c2.data) === null || _a === void 0 ? void 0 : _a.next) {
                            retData.next = c2.data.next;
                        }
                        if ((_b = c2.data) === null || _b === void 0 ? void 0 : _b.previous) {
                            retData.previous = c2.data.previous;
                        }
                        else {
                            retData.previous = null;
                        }
                    }
                    results = { status: 'success', type: 'dockerHub', action: 'tags', data: retData };
                    emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerHubRepositoryTagResults' : data.callback;
                    this.server.to(client.id).emit(emitTo, results);
                    break;
                default:
                    c = await this.dockerService.handleData(data);
                    if (data.callback === 'dockerUsage') {
                    }
                    if (!c) {
                        return;
                    }
                    results = { status: 'success', data: c };
                    if (data.hook) {
                        results.hook = data.hook;
                    }
                    if (c.data) {
                        if (data.command === 'searchDockerHub') {
                            results = { status: 'success', data: c.data, hook: c.hook };
                        }
                    }
                    emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerResults' : data.callback;
                    this.server.to(client.id).emit(emitTo, results);
                    if (data.command === 'inspect') {
                        const results = { status: 'success', type: 'container', action: 'update', data: c };
                        this.server.emit('dockerEventsReceiver', results);
                    }
                    break;
            }
        }
        catch (error) {
            this.logger.debug('docker Caught error... Error', data);
            emitTo = !(data === null || data === void 0 ? void 0 : data.errorHandler) ? 'errorHandler' : data.errorHandler;
            results = { status: 'fail', data, hook: data.hook, error: error.message };
            this.server.emit(emitTo, results);
        }
    }
    async dockerPullImage(data, client) {
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            this.logger.log('Docker pullImage', data);
        }
        const inoutStream = new stream_1.Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk);
                callback();
            },
        });
        (await this.dockerService.pullImage(data)).subscribe((res) => {
            res.data.pipe(inoutStream);
        });
        const emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerPullResults' : data.callback;
        inoutStream.on('data', (chunk) => {
            const decoder = new TextDecoder('utf-8');
            const data = decoder.decode(chunk);
            let returnData;
            let skip = false;
            try {
                returnData = JSON.parse(data);
                skip = false;
            }
            catch (error) {
                skip = true;
            }
            if (skip)
                return;
            let status = 'success';
            let message;
            if (returnData.error) {
                status = 'fail';
                message = returnData.error || null;
            }
            this.server.to(client.id).emit(emitTo, { status: status, data: returnData, message });
        });
        return {};
    }
    async dockerCreateImage(data, client) {
        const emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerResults' : data.callback;
        const hostId = data.hostId;
        try {
            if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
                this.logger.log('Docker createImage', data);
            }
            const inoutStream = new stream_1.Transform({
                transform(chunk, encoding, callback) {
                    this.push(chunk);
                    callback();
                },
            });
            try {
                (await this.dockerService.createImage(data)).subscribe((res) => {
                    res.data.pipe(inoutStream);
                });
            }
            catch (error) {
                console.log('Error', error);
            }
            inoutStream.on('data', async (chunk) => {
                const decoder = new TextDecoder('utf-8');
                const data = decoder.decode(chunk);
                const tmpData = JSON.parse(data);
                let returnData = tmpData;
                let status = 'success';
                let message;
                if (tmpData.error) {
                    status = 'fail';
                    message = tmpData.error || null;
                }
                if (returnData.Id) {
                    const image = await this.dockerImageService.findOrCreate({
                        imageId: tmpData.Id,
                        hostId: hostId,
                    });
                    returnData = image;
                    returnData.details = tmpData;
                }
                this.server.to(client.id).emit(emitTo, { status: status, data: returnData, message });
            });
        }
        catch (error) {
            this.logger.debug('Caught error... Error', error);
            const results = { status: 'fail', data, hook: data.hook, error: error.message };
            this.server.emit(emitTo, results);
            this.server.to(client.id).emit(emitTo, { status: status, data: null, error: error.message });
        }
    }
    async dockerCreateVolume(data, client) {
        const emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerResults' : data.callback;
        try {
            if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
                this.logger.log('Docker createVolume', data);
            }
            const c = await this.dockerService.createVolume(data);
            this.server.to(client.id).emit(emitTo, { status: 'success', hook: data.hook, callback: data.callback, data: c });
        }
        catch (error) {
            this.logger.debug('dockerCreateVolume Caught error... Error', error);
            const results = { status: 'fail', data, hook: data.hook, error: error.message };
            this.server.emit(emitTo, results);
            this.server.to(client.id).emit(emitTo, { status: status, data: null, error: error.message });
        }
    }
    async dockerCreateContainer(data, client) {
        let emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerResults' : data.callback;
        try {
            if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
                this.logger.log('Docker CreateContainer', data);
            }
            const c = await this.dockerService.handleData(data);
            const results = { status: 'success', data: c };
            if (data.hook) {
                results.hook = data.hook;
            }
            emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerResults' : data.callback;
            this.server.to(client.id).emit(emitTo, results);
        }
        catch (error) {
            this.logger.debug('dockerCreateContainer Caught error... Error', error);
            const results = { status: 'fail', data, hook: data.hook, error: error.message };
            this.server.emit(emitTo, results);
            this.server.to(client.id).emit(emitTo, { status: status, data: null, error: error.message });
        }
    }
    async dockerContainerLogs(data, client) {
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            this.logger.log('Docker Container Logs', data);
        }
        this.containerLogSockets[client.id] = {};
        this.containerLogSockets[client.id].stopSignal$ = new rxjs_1.Subject();
        this.containerLogSockets[client.id].inoutStream = new stream_1.Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk);
                callback();
            },
        });
        try {
            this.containerLogSockets[client.id].inoutStream.on('data', (chunk) => {
                const decoder = new TextDecoder('utf-8');
                const returnData = decoder.decode(chunk);
                const status = 'success';
                const message = null;
                const rt = returnData.substring(8);
                const emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'dockerContainerLogs' : data.callback;
                this.server.to(client.id).emit(emitTo, { status: status, data: rt, message });
            });
            const containerId = data.containerLongId ? data.containerLongId : data.containerId;
            let url = await this.dockerHostService.getUrl(data.hostId);
            url += '/containers/' + containerId + '/logs?stdout=true&stderr=true&since=0&timestamps=false&follow=true&tail=100';
            this.http
                .get(url, { responseType: 'stream', timeout: 300 })
                .pipe((0, rxjs_1.map)((res) => res.data.pipe(this.containerLogSockets[client.id].inoutStream)), (0, rxjs_1.takeUntil)(this.containerLogSockets[client.id].stopSignal$))
                .subscribe(() => {
            });
        }
        catch (error) {
            console.log('dockerContainerLogs', error);
        }
    }
    async dockerContainerLogsClose(data, client) {
        if (this.containerLogSockets[client.id]) {
            this.containerLogSockets[client.id].stopSignal$.next();
            delete this.containerLogSockets[client.id];
        }
    }
    async cleanJobs(jobQueueId = '') {
        const jobs3 = await this.eventsQueue.getJobs([]);
        jobs3.map(async (job) => {
            if (job) {
                await job.moveToCompleted(jobQueueId, true);
            }
        });
        await this.eventsQueue.clean(0);
        return jobs3;
    }
    async dockerContainerMonitor(data, client) {
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            this.logger.debug('Docker Container Monitor', data);
        }
        try {
            data.clientId = client.id;
            await this.cleanJobs(client.id);
            this.eventsQueue.add('containerMonitor', data);
            return;
        }
        catch (error) {
            console.log(error);
        }
    }
    async dockerContainerMonitorClose(data, client) {
        await this.cleanJobs(client.id);
    }
    async dockerContainerMonitorRelay(data) {
        if (!data) {
            return;
        }
        this.server.to(data.clientId).emit(data.emitTo, data.data);
    }
    async dockerAttachCommand(data, client) {
        if (data.action === 'close') {
            if (this.containerSockets[client.id]) {
                if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
                    console.log('Closing Connection');
                }
                this.containerSockets[client.id].close();
                delete this.containerSockets[client.id];
            }
            return;
        }
        if (data.action === 'command') {
            if (this.containerSockets[client.id]) {
                this.containerSockets[client.id].send('ps aux\r\n');
            }
            return;
        }
        let url = await this.dockerHostService.getUrl(data.hostId);
        const containerId = data.containerLongId ? data.containerLongId : data.containerId;
        this.containerSockets[client.id] = new WebSocket((url += '/containers/' + containerId + '/attach/ws?stdout=true&stdin=true&stderr=true&stream=true&logs=true'));
        this.containerSockets[client.id].binaryType = 'arraybuffer';
        this.containerSockets[client.id].on('open', () => {
            if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
                console.log('Connected to Docker Websocket');
            }
            this.containerSockets[client.id].send('ps aux\n');
        });
        this.containerSockets[client.id].on('message', function (message) {
            const decoder = new TextDecoder('utf-8');
            const data = decoder.decode(message);
            sendData(data + '\r');
        });
        this.containerSockets[client.id].on('error', function (error) {
            console.log(error);
            sendData(error + '\r');
        });
        const sendData = (data) => {
            this.server.to(client.id).emit('dockerReceiver', data);
        };
    }
    async stats(data, client) {
        const c = await this.statsService.getStats(data.body);
        const callback = data.callback ? data.callback : 'stats';
        this.server.to(client.id).emit(callback, c);
        return c;
    }
    async identity(data) {
        return data;
    }
    async openTerminal(data) {
        if (!data.containerId) {
            return;
        }
        const cmd = `osascript -e 'tell app "Terminal" to do script "docker exec -it ${data.containerId} /bin/sh"' && osascript -e 'tell application "Terminal" to activate'`;
        await this.exec(cmd);
        return null;
    }
    async openFinderPath(data) {
        if (!data.filePath) {
            return;
        }
        const cmd = `open ${data.filePath}`;
        await this.exec(cmd);
        return null;
    }
    async openVSCodePath(data) {
        if (!data.filePath) {
            return;
        }
        const cmd = `osascript -e 'tell app "VS Code" to open ${data.filePath} && osascript -e 'tell application "VS Code" to activate'`;
        await this.exec(cmd);
        return null;
    }
    async tailLogs(data) {
        if (!data.containerId) {
            return;
        }
        const cmd = `osascript -e 'tell app "Terminal" to do script "docker logs ${data.containerId} --details --follow --tail=all"' && osascript -e 'tell application "Terminal" to activate'`;
        await this.exec(cmd);
        return null;
    }
    async updateContainersList(containers) {
        const results = { status: 'success', data: containers, hook: 'listContainers' };
        this.server.emit('containersList', results);
    }
    async updateImagesList(images) {
        const results = { status: 'success', data: images, hook: 'listImages' };
        this.server.emit('imagesList', results);
    }
    async updateVolumesList(volumes) {
        const results = { status: 'success', data: volumes, hook: 'listVolumes' };
        this.server.emit('volumesList', results);
    }
    async updateDockerUsage(dockerUsage) {
        this.updateContainersList(dockerUsage.containers);
        this.updateVolumesList(dockerUsage.volumes);
        this.updateImagesList(dockerUsage.images);
    }
    async handleConnection(client, req) {
        try {
            if (req) {
            }
            if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
                this.logger.log(`Client connected: ${client.id}`);
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
    handleDisconnect(client) {
        if (process.env.DOCKERMON_CURRENT_ENV === 'dev') {
            console.log('------> See ya ', client.id);
        }
        this.cleanJobs(client.id);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('containerInspectRelay'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "containerInspectRelay", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('ping'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "pingReceiver", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('getContainers'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "getContainers", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('hosts'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "hostsList", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('siteData'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "siteData", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('docker'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerCommand", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerPullImage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerPullImage", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerCreateImage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerCreateImage", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerCreateVolume'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerCreateVolume", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerCreateContainer'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerCreateContainer", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerContainerLogs'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerContainerLogs", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerContainerLogsClose'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerContainerLogsClose", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerContainerMonitor'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerContainerMonitor", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerContainerMonitorClose'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerContainerMonitorClose", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('dockerContainerMonitorRelay'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerContainerMonitorRelay", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('dockerAttach'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "dockerAttachCommand", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('stats'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "stats", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('identity'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "identity", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('openTerminal'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "openTerminal", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('openFinderPath'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "openFinderPath", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('openVSCodePath'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "openVSCodePath", null);
__decorate([
    (0, common_1.UseGuards)(events_guard_1.default),
    (0, websockets_1.SubscribeMessage)('tailLogs'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "tailLogs", null);
EventsGateway = EventsGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)(3811, {
        cors: true,
        namespace: 'events',
        timeout: 2147483647,
        pingTimeout: 999999999,
    }),
    __param(8, (0, bull_1.InjectQueue)('eventsProcessor')),
    __metadata("design:paramtypes", [containers_service_1.ContainersService,
        docker_images_service_1.DockerImagesService,
        stats_service_1.StatsService,
        docker_service_1.DockerService,
        docker_hub_service_1.DockerHubService,
        axios_1.HttpService,
        docker_hosts_service_1.DockerHostsService,
        site_data_service_1.SiteDataService, Object])
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map