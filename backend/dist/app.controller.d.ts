import { AppService } from './app.service';
import { Queue } from 'bull';
import 'dotenv/config';
export declare class AppController {
    private readonly appService;
    private readonly jobsQueue;
    constructor(appService: AppService, jobsQueue: Queue);
    startup(): Promise<void>;
    getIndex(): string;
}
