/// <reference types="node" />
import { exec } from 'child_process';
import { StatsService } from 'src/stats/stats.service';
import { ContainersService } from 'src/containers/containers.service';
import { DockerService } from 'src/docker/docker.service';
import 'dotenv/config';
import { WorkersSocketIoClientProxyService } from '../socket/workers.socket-io-client.proxy.service';
import { DockerHostsService } from 'src/docker-hosts/docker-hosts.service';
import { HttpService } from '@nestjs/axios';
import { StatsUtility } from 'src/utility/stats.util';
export declare class WorkerCronjobsService {
    private readonly statsService;
    private readonly containersService;
    private readonly dockerService;
    private readonly dockerHostService;
    private readonly http;
    private readonly hostService;
    private readonly statsUtility;
    private readonly socketClientService;
    private readonly logger;
    private readonly socketClient;
    constructor(statsService: StatsService, containersService: ContainersService, dockerService: DockerService, dockerHostService: DockerHostsService, http: HttpService, hostService: DockerHostsService, statsUtility: StatsUtility, socketClientService: WorkersSocketIoClientProxyService);
    exec: typeof exec.__promisify__;
    statsCron(): Promise<void>;
    inspectCron(): Promise<void>;
    getContainersStats(host: any): Promise<void>;
    getContainerStats(host: any, container: any): Promise<any>;
    dockerUsage(): Promise<void>;
}
