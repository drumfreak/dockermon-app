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
var WorkerCronjobsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerCronjobsService = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("util");
const child_process_1 = require("child_process");
const stats_service_1 = require("../../stats/stats.service");
const containers_service_1 = require("../../containers/containers.service");
const docker_service_1 = require("../../docker/docker.service");
require("dotenv/config");
const workers_socket_io_client_proxy_service_1 = require("../socket/workers.socket-io-client.proxy.service");
const docker_hosts_service_1 = require("../../docker-hosts/docker-hosts.service");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const stats_util_1 = require("../../utility/stats.util");
let WorkerCronjobsService = WorkerCronjobsService_1 = class WorkerCronjobsService {
    constructor(statsService, containersService, dockerService, dockerHostService, http, hostService, statsUtility, socketClientService) {
        this.statsService = statsService;
        this.containersService = containersService;
        this.dockerService = dockerService;
        this.dockerHostService = dockerHostService;
        this.http = http;
        this.hostService = hostService;
        this.statsUtility = statsUtility;
        this.socketClientService = socketClientService;
        this.logger = new common_1.Logger(WorkerCronjobsService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
        this.socketClient = this.socketClientService.connect();
    }
    async statsCron() {
        try {
            this.logger.log('Running Docker Poller');
            const f = await this.hostService.getHosts({ active: true });
            if ((f === null || f === void 0 ? void 0 : f.status) === 'success') {
                f.data.forEach(async (host) => {
                    this.getContainersStats(host);
                });
            }
            this.logger.log('Poller Done');
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
    async inspectCron() {
        this.logger.log('Running inspect cron');
        const c = await this.containersService.getContainers({ limit: 1000, dead: false });
        if ((c === null || c === void 0 ? void 0 : c.status) === 'success') {
            const promises = c.data.map(async (container) => {
                return this.dockerService.inspectContainer(container);
            });
            (0, rxjs_1.forkJoin)(promises);
        }
        this.logger.log('Poller Done');
    }
    async getContainersStats(host) {
        try {
            if (host.ipAddress === 'localhost' || host.ipAddress === '127.0.0.1') {
                host.ipAddress = process.env.WORKER_HOST_ADDRESS;
            }
            const url = host.connectionType + '://' + host.ipAddress + ':' + host.port;
            const c = await (0, rxjs_1.firstValueFrom)(this.http.get(url + '/containers/json?all=false'));
            if (c && c.status === 200) {
                const promises = c.data.map(async (container) => {
                    return await this.getContainerStats(host, container);
                });
                (0, rxjs_1.forkJoin)(promises);
            }
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
    async getContainerStats(host, container) {
        try {
            const saveStats = [];
            const c = await this.containersService.findOrCreate({ containerId: container.Id.substring(0, 12), hostId: host.id });
            const c3 = { containerId: container.Id.substring(0, 12), hostId: host.id };
            const stats = await this.dockerService.containerStats(c3, host.id);
            if (stats) {
                const processStats = this.statsUtility.processStats(stats);
                const r = {
                    containerId: c.id,
                    name: processStats.stats.name.substring(1),
                    cpu: processStats.statsSummary.cpuUsage,
                    memory: processStats.statsSummary.memoryUsage,
                    memoryLimit: processStats.statsSummary.memoryLimit,
                    memoryPercent: processStats.statsSummary.memoryPercent,
                    networkIn: processStats.statsSummary.networkRx,
                    networkOut: processStats.statsSummary.networkTx,
                    blockRead: processStats.statsSummary.diskRead,
                    blockWrite: processStats.statsSummary.diskWrite,
                    pids: processStats.statsSummary.processes,
                    statsData: processStats,
                    hostId: host.id,
                };
                saveStats.push(r);
                this.statsService.saveStats(saveStats);
                c.statsSummary = processStats.statsSummary;
                const c1 = await this.containersService.save(c);
                this.socketClientService.emit('containerInspectRelay', { status: 'success', type: 'container', action: 'update', data: c1, message: null });
                return saveStats[0];
            }
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
    async dockerUsage() {
        try {
            const f = await this.dockerHostService.getHosts({ active: true });
            if ((f === null || f === void 0 ? void 0 : f.status) === 'success') {
                f.data.forEach(async (host) => {
                    this.logger.log('Running docker usage... on host ', host.id);
                    const results = await this.dockerService.dockerUsage(host.id);
                    if (results) {
                        this.socketClientService.emit('updateDockerUsage', results);
                    }
                });
            }
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
};
WorkerCronjobsService = WorkerCronjobsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(7, (0, common_1.Inject)(workers_socket_io_client_proxy_service_1.WorkersSocketIoClientProxyService)),
    __metadata("design:paramtypes", [stats_service_1.StatsService,
        containers_service_1.ContainersService,
        docker_service_1.DockerService,
        docker_hosts_service_1.DockerHostsService,
        axios_1.HttpService,
        docker_hosts_service_1.DockerHostsService,
        stats_util_1.StatsUtility,
        workers_socket_io_client_proxy_service_1.WorkersSocketIoClientProxyService])
], WorkerCronjobsService);
exports.WorkerCronjobsService = WorkerCronjobsService;
//# sourceMappingURL=worker.cronjobs.service.js.map