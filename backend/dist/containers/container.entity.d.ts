import { ActivityLog } from 'src/activity-logs/activity-logs.entity';
import { DockerHost } from 'src/docker-hosts/docker-hosts.entity';
import { DockerImage } from 'src/docker-images/docker-images.entity';
import { DockerNetwork } from 'src/docker-networks/docker-networks.entity';
import { DockerVolume } from 'src/docker-volumes/docker-volumes.entity';
export declare class Container {
    id: number;
    containerId: string;
    project: string;
    name: string;
    dockerImage: string;
    running: boolean;
    paused: boolean;
    dead: boolean;
    restarting: boolean;
    status: string;
    statusMessage: string;
    state: string;
    error: string;
    command: string;
    exitCode: number;
    fileSize: number;
    fileSizeRoot: number;
    startedAt: Date;
    endedAt: Date;
    createdDate: Date;
    processes: any;
    processesDate: Date;
    changedFiles: any;
    changedFilesDate: Date;
    details: any;
    stats: any;
    statsSummary: any;
    mounts: any;
    labels: any;
    ports: any;
    portsInUse: any;
    usageData: any;
    dockerTemplate: any;
    protected: boolean;
    createdAt: Date;
    updatedAt: Date;
    deleted: Date;
    volumes: DockerVolume;
    image: DockerImage;
    host: DockerHost;
    networks: DockerNetwork;
    activityLogs: ActivityLog[];
}
