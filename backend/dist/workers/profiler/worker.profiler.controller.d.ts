import { Queue } from 'bull';
import 'dotenv/config';
export declare class WorkerProfilerController {
    private readonly eventsQueue;
    private readonly logger;
    constructor(eventsQueue: Queue);
    startup(): Promise<void>;
}
