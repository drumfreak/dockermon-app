import { ActivityLogService } from './activity-logs.service';
export declare class ActivityLogController {
    private readonly activityLogService;
    constructor(activityLogService: ActivityLogService);
    getActivityLogs(body: any): Promise<{
        status: string;
        data: import("./activity-logs.entity").ActivityLog[];
        totalCount: number;
        message?: undefined;
    } | {
        status: string;
        data: any[];
        totalCount: number;
        message: any;
    }>;
    getActivityLog(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: string;
    }>;
}
