/// <reference types="node" />
import { ActivityLog } from './activity-logs.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
export declare class ActivityLogService {
    private readonly activityLogRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(activityLogRepository: Repository<ActivityLog>);
    getActivityLogById(id: any): Promise<any>;
    getActivityLogs(body: any): Promise<{
        status: string;
        data: ActivityLog[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(activityLog: any): Promise<any>;
    removeActivityLog(where: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
