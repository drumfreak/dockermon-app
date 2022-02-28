import { WorkerCronjobsService } from './worker.cronjobs.service';
export declare class WorkerCronjobsProcessor {
    private readonly cronService;
    constructor(cronService: WorkerCronjobsService);
    private readonly logger;
    handlePoller(): void;
    handleDockerUsage(): void;
    handleInspectCron(): void;
}
