import { StatsService } from './stats.service';
export declare class StatsController {
    private readonly statsService;
    constructor(statsService: StatsService);
    getContainerStats(body: any): Promise<{
        status: string;
        data: import("./stat.entity").Stat[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
}
