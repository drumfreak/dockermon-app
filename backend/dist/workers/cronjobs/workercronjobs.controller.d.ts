import { Queue } from 'bull';
import 'dotenv/config';
export declare class WorkerCronjobsController {
    private readonly cronQueue;
    private readonly logger;
    constructor(cronQueue: Queue);
    startup(): Promise<void>;
}
