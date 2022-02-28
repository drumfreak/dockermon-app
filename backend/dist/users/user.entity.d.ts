import { ActivityLog } from 'src/activity-logs/activity-logs.entity';
export declare class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    passwordTemporary: string;
    passwordTemporarySet: boolean;
    forcePasswordChange: boolean;
    userResetToken: string;
    lastPasswordResetDate: Date;
    userRole: number;
    userSettings: any;
    createdAt: Date;
    updatedAt: Date;
    deleted: Date;
    activityLogs: ActivityLog[];
}
