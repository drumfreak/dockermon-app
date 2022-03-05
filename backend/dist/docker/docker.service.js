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
var DockerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const util_1 = require("util");
const child_process_1 = require("child_process");
const rxjs_1 = require("rxjs");
const containers_service_1 = require("../containers/containers.service");
const docker_images_service_1 = require("../docker-images/docker-images.service");
const docker_volumes_service_1 = require("../docker-volumes/docker-volumes.service");
const stream_1 = require("stream");
const docker_networks_service_1 = require("../docker-networks/docker-networks.service");
const docker_hosts_service_1 = require("../docker-hosts/docker-hosts.service");
let DockerService = DockerService_1 = class DockerService {
    constructor(http, containersService, dockerImagesService, dockerVolumesService, dockerNetworkService, dockerHostService) {
        this.http = http;
        this.containersService = containersService;
        this.dockerImagesService = dockerImagesService;
        this.dockerVolumesService = dockerVolumesService;
        this.dockerNetworkService = dockerNetworkService;
        this.dockerHostService = dockerHostService;
        this.logger = new common_1.Logger(DockerService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async handleData(data) {
        switch (data.command) {
            case 'dockerInfo':
                return await this.dockerInfo(data.hostId);
            case 'dockerVersion':
                return await this.dockerVersion(data.hostId);
            case 'dockerPing':
                return await this.dockerPing(data.hostId);
            case 'dockerUsage':
                return await this.dockerUsage(data.hostId);
            case 'inspect':
                return await this.inspectContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'pause':
                return this.pauseContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'unpause':
                return this.unpauseContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'stop':
                return this.stopContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'start':
                return this.startContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'restart':
                return this.restartContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'kill':
                return this.killContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'remove':
                return this.removeContainer({ containerId: data.containerId, hostId: data.hostId });
            case 'listContainers':
                return this.listContainers(data);
            case 'containerLogs':
                return this.containerLogs(data);
            case 'execContainer':
                return this.execContainer(data);
            case 'renameContainer':
                return this.renameContainer(data);
            case 'createContainer':
                return this.createContainer(data.data, data.hostId);
            case 'containerStats':
                return await this.containerStats({ containerId: data.containerId, hostId: data.hostId }, data.hostId);
            case 'containerProcesses':
                return this.containerProcesses(data);
            case 'containerFiles':
                return this.containerFiles(data);
            case 'updateContainer':
                return await this.updateContainer(data);
            case 'listImages':
                return this.listImages(data);
            case 'searchDockerHub':
                return this.searchDockerHub(data);
            case 'createImage':
                return this.createImage(data);
            case 'pullImage':
                return this.pullImage(data);
            case 'removeImage':
                return this.removeImage({ imageId: data.imageId, hostId: data.hostId });
            case 'inspectImage':
                return await this.inspectImage({ imageId: data.imageId, hostId: data.hostId });
            case 'listVolumes':
                return this.listVolumes(data);
            case 'createVolume':
                return this.createVolume(data);
            case 'removeVolume':
                return this.removeVolume({ volumeId: data.volumeId, hostId: data.hostId });
            case 'inspectVolume':
                return await this.inspectVolume({ volumeId: data.volumeId, hostId: data.hostId });
            case 'listNetworks':
                return this.listNetworks(data);
            case 'createNetwork':
                return this.createNetwork(data);
            case 'removeNetwork':
                return this.removeNetwork({ networkId: data.networkId, hostId: data.hostId });
            case 'inspectNetwork':
                return await this.inspectNetwork({ networkId: data.networkId, hostId: data.hostId });
            case 'connectContainerNetwork':
                return this.connectContainerNetwork(data);
            case 'disconnectContainerNetwork':
                return this.disconnectContainerNetwork(data);
        }
    }
    async dockerInfo(host = 1) {
        this.logger.verbose('running dockerInfo on hostId: ' + host);
        const url = await this.dockerHostService.getUrl(host);
        try {
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/info'));
            if (c.data) {
                const h = await this.dockerHostService.getHostById(host);
                if (h) {
                    h.info = c.data;
                    await this.dockerHostService.save({ id: h.id, info: h.info });
                }
            }
            return c.data;
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async dockerPing(host = 1) {
        this.logger.verbose('running dockerPing on hostId: ' + host);
        const url = await this.dockerHostService.getUrl(host);
        try {
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/_ping'));
            if (c.data) {
                const h = await this.dockerHostService.getHostById(host);
                if (h) {
                    h.ping = c.data === 'OK' ? true : false;
                    await this.dockerHostService.save({ id: h.id, ping: h.ping });
                }
            }
            return c.data;
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async dockerVersion(host = 1) {
        this.logger.verbose('running dockerVersion on hostId: ' + host);
        const url = await this.dockerHostService.getUrl(host);
        try {
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/version'));
            if (c.data) {
                const h = await this.dockerHostService.getHostById(host);
                if (h) {
                    h.version = c.data;
                    await this.dockerHostService.save({ id: h.id, version: h.DockerVersion });
                }
            }
            return c.data;
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async dockerUsage(host = 1) {
        this.logger.verbose('running dockerUsage on hostId: ' + host);
        const url = await this.dockerHostService.getUrl(host);
        try {
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/system/df'));
            delete c.data.BuildCache;
            const containers = c.data.Containers || [];
            const volumes = c.data.Volumes || [];
            const images = c.data.Images || [];
            const returnObj = await (0, rxjs_1.firstValueFrom)((0, rxjs_1.forkJoin)({
                volumes: this.processVoumes(volumes, host),
                containers: this.processContainers(containers, host),
                images: this.processImages(images, host),
            }));
            return returnObj;
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async processVoumes(volumes, hostId) {
        const processVolume = async (v) => {
            const data = await this.dockerVolumesService.findOrCreate({
                volumeId: v.Name,
                hostId: hostId,
                name: v.Name,
            });
            if (data) {
                const volume = data;
                volume.fileSize = v.UsageData.Size;
                volume.usageData = v.UsageData;
                volume.host = hostId;
                volume.name = v.Name;
                const f = await this.dockerVolumesService.save(volume);
                return f;
            }
        };
        const promises = volumes.map(async (volume) => {
            return await processVolume(volume);
        });
        const returnObj = await (0, rxjs_1.firstValueFrom)((0, rxjs_1.forkJoin)(promises));
        return returnObj;
    }
    async processContainers(containers, hostId) {
        const processContainer = async (ct) => {
            const data = await this.containersService.findOrCreate({
                containerId: ct.Id.substring(0, 12),
                hostId: hostId,
                name: ct.Names[0].slice(1),
            });
            if (data) {
                const container = data;
                container.fileSize = ct.SizeRw;
                container.fileSizeRoot = ct.SizeRootFs;
                container.labels = ct.Labels;
                container.command = ct.Command;
                container.ports = ct.Ports;
                container.mounts = ct.Mounts;
                container.networks = ct.NetworkSettings;
                container.state = ct.State;
                container.status = ct.Status;
                container.usageData = ct;
                container.host = hostId;
                container.name = ct.Names[0].slice(1);
                if (ct.Labels['com.docker.compose.project']) {
                    container.project = ct.Labels['com.docker.compose.project'];
                }
                else {
                    container.project = 'root';
                }
                const f = await this.containersService.save(container);
                return f;
            }
        };
        const promises = containers.map(async (container) => {
            return await processContainer(container);
        });
        const returnObj = await (0, rxjs_1.firstValueFrom)((0, rxjs_1.forkJoin)(promises));
        return returnObj;
    }
    async processImages(images, hostId) {
        const processImage = async (img) => {
            const data = await this.dockerImagesService.findOrCreate({
                imageId: img.Id,
                hostId: hostId,
            });
            if (data) {
                const image = data;
                image.fileSize = img.Size;
                image.virtualSize = img.VirtualSize;
                image.sharedSize = img.sharedSize;
                image.labels = img.Labels;
                image.parentImage = img.Parent;
                image.repoTags = img.RepoTags;
                image.usageData = img;
                image.host = hostId;
                const f = await this.dockerImagesService.save(image);
                return f;
            }
        };
        const promises = images.map(async (image) => {
            return await processImage(image);
        });
        const returnObj = await (0, rxjs_1.firstValueFrom)((0, rxjs_1.forkJoin)(promises));
        return returnObj;
    }
    async inspectContainer(container, broadcast = false) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!container) {
            return null;
        }
        if (broadcast) {
            console.log('Broadcast');
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            let c;
            try {
                c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/containers/' + container.containerId + '/json'));
            }
            catch (error) {
                container.dead = true;
                try {
                    const c1 = await this.containersService.findOrCreate({
                        containerId: container.containerId,
                        hostId: hostId,
                    });
                    const c2 = await this.containersService.save({ id: c1.id, dead: true });
                    console.log('Marking ' + c2.name + ' - ' + c2.containerId + ' as dead ', c2.dead);
                    return c2;
                }
                catch (err) {
                    console.log(err);
                }
                throw error;
            }
            if (c.data.Config.Labels['com.docker.compose.project']) {
                container.project = c.data.Config.Labels['com.docker.compose.project'];
            }
            container.dockerImage = ((_b = (_a = c.data) === null || _a === void 0 ? void 0 : _a.Config) === null || _b === void 0 ? void 0 : _b.Image) ? c.data.Config.Image : null;
            const data = await this.containersService.findOrCreate({
                containerId: container.containerId,
                hostId: hostId,
            });
            if (data) {
                container = data;
                container.details = c.data;
                container.name = c.data.Name.slice(1);
                container.paused = c.data.State.Paused ? true : false;
                container.dead = c.data.State.Dead ? true : false;
                container.running = c.data.State.Running ? true : false;
                container.restarting = c.data.State.Restarting ? true : false;
                container.createdAt = c.data.Created ? new Date(c.data.Created) : container.createdAt;
                container.exitCode = c.data.State.ExitCode ? c.data.State.ExitCode : null;
                container.error = c.data.State.Error ? c.data.State.Error : null;
                container.state = c.data.State.Status ? c.data.State.Status : null;
                container.status = c.data.State.Status ? c.data.State.Status : container.status;
                container.host = hostId;
                container.volumes = [];
                if ((_d = (_c = c.data) === null || _c === void 0 ? void 0 : _c.Config) === null || _d === void 0 ? void 0 : _d.Labels['com.docker.compose.project']) {
                    container.project = (_e = c.data) === null || _e === void 0 ? void 0 : _e.Config.Labels['com.docker.compose.project'];
                }
                if (!container.volumes) {
                    container.volumes = [];
                }
                if (((_g = (_f = c.data) === null || _f === void 0 ? void 0 : _f.Mounts) === null || _g === void 0 ? void 0 : _g.length) > 0) {
                    c.data.Mounts.forEach(async (mount) => {
                        if (mount.Type === 'volume') {
                            const v = await this.dockerVolumesService.findOrCreate({ volumeId: mount.Name, hostId: hostId });
                            if (v) {
                                container.volumes.push(v);
                            }
                        }
                    });
                }
                if (c.data.Image) {
                    const img = await this.dockerImagesService.findOrCreate({ imageId: c.data.Image, hostId: hostId });
                    container.image = img;
                }
                const s = await this.containerStats(container, hostId);
                if (s) {
                    container.stats = s;
                }
                try {
                    const sc = await this.containersService.save(container);
                    if (sc) {
                        return sc;
                    }
                }
                catch (e) {
                    console.log('Error', e);
                }
                container = data;
            }
            else {
                container.details = c.data;
            }
            return container;
        }
        catch (error) {
            this.logger.warn('inspectContainer', error);
            return null;
        }
    }
    async containerStats(container, hostId) {
        if (!container) {
            return null;
        }
        try {
            let returnData;
            const stopSignal$ = new rxjs_1.Subject();
            const inoutStream = new stream_1.Transform({
                transform(chunk, encoding, callback) {
                    this.push(chunk);
                    callback();
                },
            });
            inoutStream.on('data', (chunk) => {
                const decoder = new TextDecoder('utf-8');
                const data = decoder.decode(chunk);
                stopButton(data);
            });
            const stopButton = (input) => {
                returnData = input;
                stopSignal$.next(input);
            };
            const url = await this.dockerHostService.getUrl(hostId);
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/containers/' + container.containerId + '/stats?stream=false&one-shot=false ', {
                responseType: 'stream',
                timeout: 300000000,
            }));
            if (c) {
                await c.data.pipe(inoutStream);
                await (0, rxjs_1.firstValueFrom)(stopSignal$);
                let skip = false;
                try {
                    returnData = JSON.parse(returnData);
                    skip = false;
                }
                catch (error) {
                    console.log('Issue parsing JSON on dockerPullResults');
                    skip = true;
                }
                if (skip)
                    return;
                return returnData;
            }
        }
        catch (error) {
            this.logger.debug('containerStats', error);
            this.logger.debug('containerStats', error.response);
            return null;
        }
    }
    async pauseContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/pause'));
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async execContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            const body = {
                AttachStdin: false,
                AttachStdout: false,
                AttachStderr: false,
                Tty: false,
                Cmd: container.execCommand.split(' '),
                Privileged: true,
            };
            const b = await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/exec', body));
            setTimeout(async () => {
                try {
                    await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/exec/' + b.data.Id + '/start', { Detach: true, Tty: false }));
                }
                catch (error) {
                    console.log('Couldn not launch exec container');
                }
            }, 500);
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            this.logger.debug('execContainer', error);
            return null;
        }
    }
    async containerProcesses(container) {
        if (!container) {
            return null;
        }
        try {
            const url = await this.dockerHostService.getUrl(container.hostId);
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/containers/' + container.containerId + '/top?ps_args=aux'));
            if (c && c.status === 200) {
                const processDate = new Date();
                if (!container.saveProcesses) {
                    return c.data;
                }
                else {
                    let c1;
                    if (container.cid) {
                        c1 = await this.containersService.getContainerById(container.cid);
                    }
                    else if (container.containerId) {
                        c1 = await this.containersService.findOrCreate({ hostId: container.hostId, containerId: container.containerId });
                    }
                    if (c1) {
                        const procs = c.data.Processes.map((p) => {
                            const r = {};
                            c.data.Titles.forEach((t, x) => {
                                r[t] = p[x];
                            });
                            return r;
                        });
                        c1.processes = { data: c.data, proccessed: procs };
                        c1.processes.date = processDate;
                        c1.processesDate = processDate;
                        this.containersService.save(c1);
                    }
                    return { data: c.data, date: processDate };
                }
            }
            return null;
        }
        catch (error) {
            this.logger.debug('containerProcesses', error);
            return null;
        }
    }
    async containerFiles(container) {
        if (!container) {
            return null;
        }
        try {
            const url = await this.dockerHostService.getUrl(container.hostId);
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/containers/' + container.containerId + '/changes'));
            if (c && c.status === 200) {
                const processDate = new Date();
                if (!container.saveFiles) {
                    return c.data;
                }
                else {
                    let c1;
                    if (container.cid) {
                        c1 = await this.containersService.getContainerById(container.cid);
                    }
                    else if (container.containerId) {
                        c1 = await this.containersService.findOrCreate({ hostId: container.hostId, containerId: container.containerId });
                    }
                    if (c1) {
                    }
                    return { data: c.data, date: processDate };
                }
            }
            return null;
        }
        catch (error) {
            this.logger.debug('containerFiles', error);
            return null;
        }
    }
    async renameContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            const body = {
                name: container.name.trim(),
            };
            try {
                await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/rename?name=' + body.name));
            }
            catch (error) {
                console.log(error);
            }
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            this.logger.debug('renameContainer', error);
            return null;
        }
    }
    async updateContainer(container) {
        console.warn('updateContainer', container);
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            const body = container.data;
            try {
                await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/update', body));
            }
            catch (error) {
                console.debug('updateContainer', error.response.data.message);
                throw new Error(error.response.data.message);
            }
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            this.logger.debug('updateContainer', error);
            throw error;
        }
    }
    async unpauseContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/unpause'));
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async stopContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/stop'));
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async startContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/start'));
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            throw new Error(error.response.data.message);
        }
    }
    async restartContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/restart'));
            const c = await this.inspectContainer(container);
            return c;
        }
        catch (error) {
            throw new Error(error.response.data.message);
        }
    }
    async createContainer(container, hostId = 1) {
        var _a;
        console.log('createContainer', container);
        if (!container) {
            return null;
        }
        try {
            const url = await this.dockerHostService.getUrl(hostId);
            const f = await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/create?name=' + container.name, container));
            if (f.status === 201) {
                if ((_a = f.data) === null || _a === void 0 ? void 0 : _a.Id) {
                    const tmpContainer = { containerId: f.data.Id.substring(0, 12), hostId: hostId };
                    const c = await this.inspectContainer(tmpContainer);
                    if (c) {
                        const c2 = c;
                        c2.dockerTemplate = container;
                        await this.containersService.save(c);
                        return c2;
                    }
                    return null;
                }
                else {
                    throw Error('Could not create container');
                }
            }
        }
        catch (error) {
            throw new Error(error.response.data.message);
        }
    }
    async killContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            const f = await (0, rxjs_1.firstValueFrom)(this.http.post(url + '/containers/' + container.containerId + '/kill'));
            if (f.status === 204) {
                const c = await this.inspectContainer(container);
                return c;
            }
            else {
                throw Error('Could not remove create container');
            }
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async removeContainer(container) {
        if (!container) {
            return null;
        }
        try {
            const hostId = this.getHostId(container);
            const url = await this.dockerHostService.getUrl(hostId);
            const f = await (0, rxjs_1.firstValueFrom)(this.http.delete(url + '/containers/' + container.containerId));
            if (f.status === 204 || f.status === 404 || f.status === 200) {
                await this.containersService.removeContainer({
                    containerId: container.containerId,
                });
                return container;
            }
            else {
                throw Error('Could not create container');
            }
        }
        catch (error) {
            this.logger.warn(error);
            await this.containersService.removeContainer({
                containerId: container.containerId,
            });
            throw new Error(error.response.data.message);
        }
    }
    async listContainers(body) {
        this.logger.log('listContainers');
        try {
            const listAll = body.all ? body.all : true;
            const hostId = this.getHostId(body);
            const url = await this.dockerHostService.getUrl(hostId);
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/containers/json?all=' + listAll));
            let data;
            if (c && c.status === 200) {
                data = [];
                for (const container of c.data) {
                    const c2 = await this.inspectContainer({ containerId: container.Id.substring(0, 12), hostId });
                    if (c2) {
                        data.push(c2);
                    }
                }
            }
            return data;
        }
        catch (error) {
            this.logger.warn(error.response.data);
            throw new Error(error.response.data.message);
        }
    }
    async containerLogs(body) {
        try {
            const hostId = this.getHostId(body);
            let url = await this.dockerHostService.getUrl(hostId);
            url += '/containers/' + body.containerId + '/logs?stdout=true&stderr=true&since=0&timestamps=false&follow=true&tail=100';
            return this.http.get(url, {
                responseType: 'stream',
                timeout: 0,
            });
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async listImages(body) {
        if (body) {
        }
        try {
            const hostId = this.getHostId(body);
            const url = await this.dockerHostService.getUrl(hostId);
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/images/json?all=true'));
            let data;
            if (c && c.status === 200) {
                data = [];
                for (const image of c.data) {
                    const c2 = await this.inspectImage({ imageId: image.Id, hostId });
                    if (c2) {
                        data.push(c2);
                    }
                }
            }
            return data;
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async inspectImage(image) {
        var _a, _b;
        if (!image) {
            return null;
        }
        try {
            const hostId = this.getHostId(image);
            const url = await this.dockerHostService.getUrl(hostId);
            try {
                const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/images/' + image.imageId + '/json'));
                const data = await this.dockerImagesService.findOrCreate({
                    imageId: image.imageId,
                    hostId: hostId,
                });
                if (data) {
                    image = data;
                    image.details = c.data;
                    image.author = c.data.Author;
                    image.containerDockerId = c.data.Container;
                    image.dockerVersion = c.data.DockerVersion;
                    image.parentImage = c.data.Parent;
                    image.comment = c.data.Comment;
                    image.fileSize = ((_a = c.data) === null || _a === void 0 ? void 0 : _a.Size) ? Number(c.data.Size) : 0;
                    image.virtualSize = ((_b = c.data) === null || _b === void 0 ? void 0 : _b.VirtualSize) ? Number(c.data.VirtualSize) : 0;
                    image.os = c.data.Os;
                    image.architecture = c.data.Architecture;
                    image.host = hostId;
                    if (c.data.RepoTags.length > 0) {
                        const t = c.data.RepoTags[0].split(':');
                        if (t.length > 0) {
                            image.tag = t[1];
                            image.name = t[0];
                        }
                    }
                    image.pullTag = c.data.RepoTags.length > 0 ? c.data.RepoTags[0] : image.imageId;
                    image.createdDate = c.data.Created ? new Date(c.data.Created) : image.createdDate;
                    image.createdAt = c.data.Created ? new Date(c.data.Created) : image.createdAt;
                    const sv = await this.dockerImagesService.save(image);
                    if (sv) {
                        return sv;
                    }
                    else {
                        return null;
                    }
                }
                else {
                    image.details = c.data;
                    return image;
                }
            }
            catch (error) {
                image.dead = true;
                try {
                    const c1 = await this.dockerImagesService.findOrCreate({
                        imageId: image.imageId,
                        hostId: hostId,
                    });
                    const c2 = await this.dockerImagesService.save({ id: c1.id, dead: true });
                    console.log('Marking Image ' + c2.name + ' - ' + c2.imageId + ' as dead ', c2.dead);
                    return null;
                }
                catch (err) {
                    console.log(err);
                }
                throw error;
            }
        }
        catch (error) {
            this.logger.warn(error.response.data.message);
            return null;
        }
    }
    async pullImage(data) {
        try {
            const hostId = this.getHostId(data);
            let url = await this.dockerHostService.getUrl(hostId);
            url += '/images/create?fromImage=' + data.body.tag;
            return this.http.post(url, {}, {
                responseType: 'stream',
                timeout: 0,
            });
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async createImage(data, hostId = 1) {
        try {
            let url = await this.dockerHostService.getUrl(hostId);
            url +=
                '/commit?container=' +
                    data.data.container +
                    '&repo=' +
                    data.data.repo +
                    '&tag=' +
                    data.data.tag +
                    '&author=' +
                    data.data.author +
                    '&comment=' +
                    data.data.message;
            try {
                const c = await (0, rxjs_1.firstValueFrom)(this.http.post(url, {}));
                if (c.data) {
                    const c2 = await this.inspectImage({ imageId: c.data.Id, hostId });
                    if (c2) {
                        return c2;
                    }
                }
                return null;
            }
            catch (err) {
                throw err;
            }
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async removeImage(image) {
        if (!image) {
            return null;
        }
        try {
            const hostId = this.getHostId(image);
            const url = await this.dockerHostService.getUrl(hostId);
            const f = await (0, rxjs_1.firstValueFrom)(this.http.delete(url + '/images/' + image.imageId));
            if (f.status === 204 || f.status === 404 || f.status === 200) {
                await this.dockerImagesService.removeImage({
                    imageId: image.imageId,
                });
                return image;
            }
            else {
                throw Error('Could not remove image');
            }
        }
        catch (error) {
            await this.dockerImagesService.removeImage({
                imageId: image.imageId,
            });
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async listVolumes(body) {
        try {
            const hostId = this.getHostId(body);
            const url = await this.dockerHostService.getUrl(hostId);
            const dangling = body.dangling ? body.dangling : false;
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/volumes?dangling=' + dangling));
            let data;
            if (c && c.status === 200) {
                data = [];
                for (const volume of c.data.Volumes) {
                    const c2 = await this.inspectVolume({ volumeId: volume.Name, hostId });
                    if (c2) {
                        data.push(c2);
                    }
                }
            }
            return data;
        }
        catch (error) {
            this.logger.debug('listVolumes', error);
            throw new Error(error.response.data.message);
        }
    }
    async inspectVolume(volume) {
        if (!volume) {
            return null;
        }
        try {
            const hostId = this.getHostId(volume);
            const url = await this.dockerHostService.getUrl(hostId);
            try {
                const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/volumes/' + volume.volumeId + ''));
                const data = await this.dockerVolumesService.findOrCreate({
                    volumeId: volume.volumeId,
                    hostId: hostId,
                });
                if (data) {
                    volume = data;
                    volume.details = c.data;
                    volume.createdDate = c.data.CreatedAt ? new Date(c.data.CreatedAt) : volume.createdAt;
                    volume.createdAt = c.data.CreatedAt ? new Date(c.data.CreatedAt) : volume.createdAt;
                    volume.name = c.data.Name;
                    volume.mountpoint = c.data.Mountpoint;
                    volume.host = hostId;
                    const sv = await this.dockerVolumesService.save(volume);
                    if (sv) {
                        return sv;
                    }
                }
                else {
                    volume.details = c.data;
                    return volume;
                }
            }
            catch (error) {
                volume.dead = true;
                try {
                    const c1 = await this.dockerVolumesService.findOrCreate({
                        volumeId: volume.volumeId,
                        hostId: hostId,
                    });
                    const c2 = await this.dockerVolumesService.save({ id: c1.id, dead: true });
                    console.log('Marking  Volume ' + c2.name + ' - ' + c2.volumeId + ' as dead ', c2.dead);
                    return null;
                }
                catch (err) {
                    console.log(err);
                }
                throw error;
            }
        }
        catch (error) {
            this.logger.warn(error.response.data.message);
            return null;
        }
    }
    async createVolume(data) {
        try {
            const hostId = this.getHostId(data);
            let url = await this.dockerHostService.getUrl(hostId);
            url += '/volumes/create';
            const c = await (0, rxjs_1.firstValueFrom)(this.http.post(url, data.data));
            if (c.data) {
                const c2 = await this.inspectVolume({ volumeId: c.data.Name, hostId });
                if (c2) {
                    return c2;
                }
            }
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async removeVolume(volume) {
        if (!volume) {
            return null;
        }
        try {
            const hostId = this.getHostId(volume);
            const url = await this.dockerHostService.getUrl(hostId);
            const f = await (0, rxjs_1.firstValueFrom)(this.http.delete(url + '/volumes/' + volume.volumeId));
            if (f.status === 204 || f.status === 404 || f.status === 200) {
                await this.dockerVolumesService.removeVolume({
                    volumeId: volume.volumeId,
                });
                return volume;
            }
            else {
                throw Error('Could not remove volume');
            }
        }
        catch (error) {
            await this.dockerVolumesService.removeVolume({
                volumeId: volume.volumeId,
            });
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async listNetworks(body) {
        try {
            const hostId = this.getHostId(body);
            const url = await this.dockerHostService.getUrl(hostId);
            const dangling = body.dangling ? body.dangling : false;
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/networks?dangling=' + dangling));
            let data;
            if (c && c.status === 200) {
                data = [];
                for (const network of c.data) {
                    const c2 = await this.inspectNetwork({ networkId: network.Id, hostId });
                    if (c2) {
                        data.push(c2);
                    }
                }
            }
            return data;
        }
        catch (error) {
            this.logger.debug('listNetworks', error);
            return new Error(error.response.data.message);
        }
    }
    async inspectNetwork(network) {
        var _a;
        if (!network) {
            return null;
        }
        try {
            const hostId = this.getHostId(network);
            const url = await this.dockerHostService.getUrl(hostId);
            try {
                const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/networks/' + network.networkId + ''));
                const data = await this.dockerNetworkService.findOrCreate({
                    networkId: network.networkId,
                    hostId: hostId,
                });
                if (data) {
                    network = data;
                    network.details = c.data;
                    network.createdDate = c.data.Created ? new Date(c.data.Created) : network.created;
                    network.createdAt = c.data.CreatedAt ? new Date(c.data.CreatedAt) : network.createdAt;
                    network.name = c.data.Name;
                    network.driver = c.data.Driver;
                    network.scope = c.data.Scope;
                    network.host = hostId;
                    network.containers = [];
                    Object.keys((_a = c.data) === null || _a === void 0 ? void 0 : _a.Containers).map(async (containerId) => {
                        const v = await this.containersService.findOrCreate({ containerId: containerId.substring(0, 12), hostId: hostId });
                        if (v) {
                            network.containers.push(v);
                        }
                    });
                    const sv = await this.dockerNetworkService.save(network);
                    if (sv) {
                        return sv;
                    }
                }
                else {
                    network.details = c.data;
                    return network;
                }
            }
            catch (error) {
                network.dead = true;
                try {
                    const c1 = await this.dockerNetworkService.findOrCreate({
                        networkId: network.networkId,
                        hostId: hostId,
                    });
                    const c2 = await this.dockerNetworkService.save({ id: c1.id, dead: true });
                    console.log('Marking  Network ' + c2.name + ' - ' + c2.volumeId + ' as dead ', c2.dead);
                    return null;
                }
                catch (err) {
                    console.log(err);
                }
                throw error;
            }
        }
        catch (error) {
            this.logger.warn(error.response.data.message);
            return null;
        }
    }
    async createNetwork(data) {
        try {
            const hostId = this.getHostId(data);
            let url = await this.dockerHostService.getUrl(hostId);
            url += '/networks/create';
            const c = await (0, rxjs_1.firstValueFrom)(this.http.post(url, data.data));
            if (c.data) {
                const c2 = await this.inspectNetwork({ networkId: c.data.Id, hostId });
                if (c2) {
                    return c2;
                }
            }
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async removeNetwork(network) {
        if (!network) {
            return null;
        }
        try {
            const hostId = this.getHostId(network);
            const url = await this.dockerHostService.getUrl(hostId);
            const f = await (0, rxjs_1.firstValueFrom)(this.http.delete(url + '/networks/' + network.networkId));
            if (f.status === 204 || f.status === 404 || f.status === 200) {
                await this.dockerNetworkService.removeNetwork({
                    networkId: network.networkId,
                });
                return network;
            }
            else {
                throw Error('Could not remove network');
            }
        }
        catch (error) {
            await this.dockerNetworkService.removeNetwork({
                networkId: network.networkId,
            });
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async connectContainerNetwork(network) {
        try {
            const hostId = this.getHostId(network);
            let url = await this.dockerHostService.getUrl(hostId);
            url += '/networks/' + network.networkId + '/connect';
            const c = await (0, rxjs_1.firstValueFrom)(this.http.post(url, network.data));
            if (c.status === 204 || c.status === 404 || c.status === 200) {
                const c2 = await this.inspectNetwork({ networkId: network.networkId, hostId });
                if (c2) {
                    return c2;
                }
            }
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async disconnectContainerNetwork(network) {
        try {
            const hostId = this.getHostId(network);
            let url = await this.dockerHostService.getUrl(hostId);
            url += '/networks/' + network.networkId + '/disconnect';
            const c = await (0, rxjs_1.firstValueFrom)(this.http.post(url, network.data));
            if (c.status === 204 || c.status === 404 || c.status === 200) {
                const c2 = await this.inspectNetwork({ networkId: network.networkId, hostId });
                if (c2) {
                    return c2;
                }
            }
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async searchDockerHub(body) {
        try {
            const hostId = this.getHostId(body);
            const url = await this.dockerHostService.getUrl(hostId);
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/images/search?term=' + body.data.query));
            return { hook: 'searchDockerHub', data: c.data };
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    async dockerHubImage(body) {
        try {
            const hostId = this.getHostId(body);
            const url = await this.dockerHostService.getUrl(hostId);
            const repository = body.repository.includes('/') ? body.repository : '/library/' + body.repository;
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/repositiories/' + repository));
            return { hook: 'dockerHubImage', data: c.data };
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.response.data.message);
        }
    }
    getHostId(item) {
        var _a;
        if ((_a = item.host) === null || _a === void 0 ? void 0 : _a.id) {
            return item.host.id;
        }
        if (item.hostId) {
            return item.hostId;
        }
        return null;
    }
};
DockerService = DockerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        containers_service_1.ContainersService,
        docker_images_service_1.DockerImagesService,
        docker_volumes_service_1.DockerVolumesService,
        docker_networks_service_1.DockerNetworksService,
        docker_hosts_service_1.DockerHostsService])
], DockerService);
exports.DockerService = DockerService;
//# sourceMappingURL=docker.service.js.map