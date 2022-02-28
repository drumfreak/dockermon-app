import { Queue } from 'bull';
export declare class TasksController {
    private readonly statsQueue;
    constructor(statsQueue: Queue);
    processStats(): Promise<void>;
}
