import { Job } from 'bull';
import { JobsService } from './jobs.service';
export declare class JobsProcessor {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    private readonly logger;
    handlePoller(job: Job): void;
    handleDockerUsage(job: Job): void;
    handleDockerEventsListener(job: Job): void;
}
