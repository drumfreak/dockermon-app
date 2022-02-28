import { CronService } from './cron.service';
export declare class CronProcessor {
    private readonly cronService;
    constructor(cronService: CronService);
    private readonly logger;
    handlePoller(): void;
    handleDockerUsage(): void;
}
