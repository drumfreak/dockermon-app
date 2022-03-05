import { ActivityLog } from 'src/activity-logs/activity-logs.entity';
import { Container } from 'src/containers/container.entity';
import { DockerHost } from 'src/docker-hosts/docker-hosts.entity';
export declare class DockerNetwork {
    id: number;
    networkId: string;
    name: string;
    details: any;
    usageData: any;
    active: boolean;
    dead: boolean;
    status: string;
    driver: string;
    protected: boolean;
    scope: string;
    error: string;
    createdDate: Date;
    createdAt: Date;
    updatedAt: Date;
    deleted: Date;
    containers: Container[];
    host: DockerHost;
    activityLogs: ActivityLog[];
}
