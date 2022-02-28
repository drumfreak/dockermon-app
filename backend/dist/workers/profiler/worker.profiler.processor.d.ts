import { Job } from 'bull';
import { WorkerProfilerService } from './worker.profiler.service';
export declare class WorkerProfilerProcessor {
    private readonly workerService;
    constructor(workerService: WorkerProfilerService);
    private readonly logger;
    onActive(job: Job): void;
    onError(job: Job): void;
    onRemoved(job: Job): void;
    onFailed(job: Job): void;
    onComplete(job: Job): void;
    handleContainerMonitor(job: Job): Promise<any>;
    onGlobalQueue(job: any, result: any): Promise<void>;
}
