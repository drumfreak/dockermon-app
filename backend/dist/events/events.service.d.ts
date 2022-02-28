import 'dotenv/config';
import { HttpService } from '@nestjs/axios';
import { DockerHostsService } from 'src/docker-hosts/docker-hosts.service';
export declare class EventsService {
    private readonly http;
    private readonly dockerHostService;
    private readonly logger;
    constructor(http: HttpService, dockerHostService: DockerHostsService);
    containerMonitorSockets: {};
    containerMonitorJobs: {};
    containerMonitor(data: any, job: any): Promise<void>;
    stopContainerMonitor(jobId: any, result: any): Promise<void>;
}
