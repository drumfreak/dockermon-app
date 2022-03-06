import 'dotenv/config';
import { HttpService } from '@nestjs/axios';
import { WorkersSocketIoClientProxyService } from '../socket/workers.socket-io-client.proxy.service';
import { ContainersService } from 'src/containers/containers.service';
import { ProfilingService } from 'src/profiling/profiling.service';
import { DockerHostsService } from 'src/docker-hosts/docker-hosts.service';
import { StatsUtility } from 'src/utility/stats.util';
import { StatsService } from 'src/stats/stats.service';
import { DockerService } from 'src/docker/docker.service';
export declare class WorkerProfilerService {
    private readonly http;
    private readonly socketClientService;
    private readonly containersService;
    private readonly profilerService;
    private readonly dockerHostService;
    private readonly dockerService;
    private readonly statsUtility;
    private readonly statsService;
    private readonly logger;
    private readonly socketClient;
    constructor(http: HttpService, socketClientService: WorkersSocketIoClientProxyService, containersService: ContainersService, profilerService: ProfilingService, dockerHostService: DockerHostsService, dockerService: DockerService, statsUtility: StatsUtility, statsService: StatsService);
    containerMonitorSockets: {};
    containerMonitorJobs: {};
    containerMonitor(data: any, job: any): Promise<void>;
    stopContainerMonitor(jobId: any, result: any): Promise<void>;
    saveStatsGroup(container: any, stats: any, profilingId: any): Promise<void>;
    saveProfiling(clientId: any): Promise<any>;
}
