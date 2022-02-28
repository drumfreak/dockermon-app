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
var WorkerProfilerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerProfilerService = void 0;
const common_1 = require("@nestjs/common");
require("dotenv/config");
const axios_1 = require("@nestjs/axios");
const axios_2 = require("axios");
const rxjs_1 = require("rxjs");
const stream_1 = require("stream");
const workers_socket_io_client_proxy_service_1 = require("../socket/workers.socket-io-client.proxy.service");
const containers_service_1 = require("../../containers/containers.service");
const profiling_service_1 = require("../../profiling/profiling.service");
const docker_hosts_service_1 = require("../../docker-hosts/docker-hosts.service");
const stats_util_1 = require("../../utility/stats.util");
const stats_service_1 = require("../../stats/stats.service");
let WorkerProfilerService = WorkerProfilerService_1 = class WorkerProfilerService {
    constructor(http, socketClientService, containersService, profilerService, dockerHostService, statsUtility, statsService) {
        this.http = http;
        this.socketClientService = socketClientService;
        this.containersService = containersService;
        this.profilerService = profilerService;
        this.dockerHostService = dockerHostService;
        this.statsUtility = statsUtility;
        this.statsService = statsService;
        this.logger = new common_1.Logger(WorkerProfilerService_1.name);
        this.containerMonitorSockets = {};
        this.containerMonitorJobs = {};
        this.socketClient = this.socketClientService.connect();
    }
    async containerMonitor(data, job) {
        try {
            const clientId = data.clientId;
            const jobId = job.queue.token;
            let ticks = 0;
            const containerBefore = await this.containersService.getContainerById(data.cid);
            let url = await this.dockerHostService.getUrl(data.hostId);
            const collection = {
                job: jobId,
                name: containerBefore.name + ' Profiling ' + new Date().toISOString(),
                input: data,
                containerId: data.cid,
                containerDockerId: data.containerId,
                containerSnapshot: containerBefore,
                containerSnapshotAfter: {},
                statsCpu: [],
                statsDates: [],
                statsMemoryPercent: [],
                statsDiskRead: [],
                statsDiskWrite: [],
                statsNetworkRx: [],
                statsNetworkTx: [],
                statsProcesses: [],
                statsSummary: [],
                data: [],
                chartData: { dates: [], cpu: [], memoryPercent: [], diskRead: [], diskWrite: [], networkTx: [], networkRx: [], processes: [], summary: [] },
                samples: 0,
                startDate: new Date(),
                endDate: new Date(),
            };
            let saveGroup = [];
            this.logger.log('Running docker containerMonitor...');
            this.logger.debug('Docker Container Monitor', data);
            this.containerMonitorSockets[clientId] = {};
            this.containerMonitorSockets[clientId].data = data;
            this.containerMonitorSockets[clientId].job = job;
            this.containerMonitorJobs[jobId] = { client: clientId };
            this.containerMonitorSockets[clientId].stopSignal$ = new rxjs_1.Subject();
            this.containerMonitorSockets[clientId].ct = axios_2.default.CancelToken.source();
            this.containerMonitorSockets[clientId].collection = collection;
            this.containerMonitorSockets[clientId].profling = null;
            const inoutStream = new stream_1.Transform({
                transform(chunk, encoding, callback) {
                    this.push(chunk);
                    callback();
                },
            });
            try {
                inoutStream.on('data', async (chunk) => {
                    const decoder = new TextDecoder('utf-8');
                    const returnData = decoder.decode(chunk);
                    const status = 'success';
                    const message = null;
                    let rt;
                    let skip = false;
                    try {
                        rt = JSON.parse(returnData);
                        skip = false;
                    }
                    catch (error) {
                        console.log('Error PaRSING JSON ON containerMonitor');
                        skip = true;
                    }
                    if (skip)
                        return;
                    const emitTo = !(data === null || data === void 0 ? void 0 : data.callback) ? 'containerMonitor' : data.callback;
                    const stats = await this.statsUtility.processStats(rt);
                    saveGroup.push(stats);
                    this.containerMonitorSockets[clientId].collection.samples++;
                    this.containerMonitorSockets[clientId].collection.chartData.dates.push(stats.statsData.date);
                    this.containerMonitorSockets[clientId].collection.chartData.cpu.push(stats.statsData.cpu);
                    this.containerMonitorSockets[clientId].collection.chartData.memoryPercent.push(stats.statsData.memoryPercent);
                    this.containerMonitorSockets[clientId].collection.chartData.diskRead.push(stats.statsData.diskRead);
                    this.containerMonitorSockets[clientId].collection.chartData.diskWrite.push(stats.statsData.diskWrite);
                    this.containerMonitorSockets[clientId].collection.chartData.networkRx.push(stats.statsData.networkRx);
                    this.containerMonitorSockets[clientId].collection.chartData.networkTx.push(stats.statsData.networkTx);
                    this.containerMonitorSockets[clientId].collection.chartData.processes.push(stats.statsData.processes);
                    this.containerMonitorSockets[clientId].collection.statsDates = collection.chartData.dates;
                    this.containerMonitorSockets[clientId].collection.statsSummary.push(stats.statsSummary);
                    this.containerMonitorSockets[clientId].collection.data.push(rt);
                    this.containerMonitorSockets[clientId].collection.endDate = new Date(rt.read);
                    const processedData = {
                        chartData: this.containerMonitorSockets[clientId].collection.chartData,
                        statsSummary: stats.statsSummary,
                        sample: stats.stats,
                        startDate: this.containerMonitorSockets[clientId].collection.startDate,
                        endDate: this.containerMonitorSockets[clientId].collection.endDate,
                        sampleIndex: ticks,
                    };
                    this.socketClientService.emit('dockerContainerMonitorRelay', { clientId, emitTo, data: { status: status, data: processedData, message } });
                    saveGroup.push(stats);
                    if (ticks % 2 === 1) {
                        try {
                        }
                        catch (error) {
                            console.log('Error', error);
                        }
                    }
                    if (ticks % 10 === 1) {
                        this.containerMonitorSockets[clientId].profiling = await this.saveProfiling(clientId);
                        try {
                            this.saveStatsGroup({ id: data.cid, hostId: data.hostId }, saveGroup, this.containerMonitorSockets[clientId].profiling.id);
                            const container = { id: data.cid, statsSummary: stats.statsSummary };
                            this.containersService.save(container);
                            saveGroup = [];
                        }
                        catch (error) {
                            this.logger.warn('Error in worker.profiler.service 147');
                            this.logger.debug(error);
                        }
                    }
                    this.logger.verbose(' -----> tick ' + ticks);
                    ticks++;
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
                this.saveProfiling(clientId);
                delete this.containerMonitorSockets[clientId];
                delete this.containerMonitorJobs[jobId];
            }
        }
    }
    async saveStatsGroup(container, stats, profilingId) {
        const savestats = stats.map((processStats) => {
            return {
                containerId: container.id,
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
                profiling: true,
                profilingId: profilingId,
                hostId: container.hostId,
            };
        });
        this.statsService.saveStats(savestats);
    }
    async saveProfiling(clientId) {
        const data = this.containerMonitorSockets[clientId].data;
        let profiling;
        if (!this.containerMonitorSockets[clientId].profiling) {
            profiling = this.containerMonitorSockets[clientId].collection;
        }
        else {
            const tmpId = this.containerMonitorSockets[clientId].profiling.id;
            profiling = this.containerMonitorSockets[clientId].collection;
            profiling.id = tmpId;
        }
        profiling.notes = data.containerName + ' Profiling Auto Save';
        profiling.jobData = { request: data, job: this.containerMonitorSockets[clientId].jobData };
        const containerAfter = await this.containersService.getContainerById(profiling.containerId);
        profiling.containerSnapshotAfter = containerAfter;
        const p = await this.profilerService.save(profiling);
        return p;
    }
};
WorkerProfilerService = WorkerProfilerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(workers_socket_io_client_proxy_service_1.WorkersSocketIoClientProxyService)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        workers_socket_io_client_proxy_service_1.WorkersSocketIoClientProxyService,
        containers_service_1.ContainersService,
        profiling_service_1.ProfilingService,
        docker_hosts_service_1.DockerHostsService,
        stats_util_1.StatsUtility,
        stats_service_1.StatsService])
], WorkerProfilerService);
exports.WorkerProfilerService = WorkerProfilerService;
//# sourceMappingURL=worker.profiler.service.js.map