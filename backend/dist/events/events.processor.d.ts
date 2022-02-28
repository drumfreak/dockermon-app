import { Job } from 'bull';
import { EventsService } from './events.service';
export declare class EventsProcessor {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    private readonly logger;
    onActive(job: Job): void;
    onError(job: Job): void;
    onRemoved(job: Job): void;
    onFailed(job: Job): void;
    onComplete(job: Job): void;
    handleContainerMonitor(job: Job): Promise<any>;
    onGlobalQueue(job: any, result: any): Promise<void>;
}
