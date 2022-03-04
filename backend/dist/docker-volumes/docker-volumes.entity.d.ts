import { ActivityLog } from 'src/activity-logs/activity-logs.entity';
import { Container } from 'src/containers/container.entity';
import { DockerHost } from 'src/docker-hosts/docker-hosts.entity';
export declare class DockerVolume {
    id: number;
    volumeId: string;
    name: string;
    driver: string;
    mountpoint: string;
    details: any;
    usageData: any;
    fileSize: number;
    virtualSize: number;
    active: boolean;
    protected: boolean;
    status: string;
    error: string;
    host: DockerHost;
    createdDate: Date;
    createdAt: Date;
    updatedAt: Date;
    deleted: Date;
    containers: Container[];
    volumes: DockerHost;
    activityLogs: ActivityLog[];
}
