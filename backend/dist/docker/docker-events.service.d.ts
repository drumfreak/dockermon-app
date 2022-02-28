/// <reference types="node" />
import { HttpService } from '@nestjs/axios';
import { Transform } from 'stream';
import { DockerService } from './docker.service';
import { EventsGateway } from '../events/events.gateway';
import { DockerHostsService } from 'src/docker-hosts/docker-hosts.service';
import { ActivityLogService } from 'src/activity-logs/activity-logs.service';
export declare class DockerEventsService {
    private readonly http;
    private readonly dockerService;
    private readonly eventsGateway;
    private readonly hostService;
    private readonly activityLogService;
    private readonly logger;
    private readonly exec;
    private dockerEventObservable;
    dockerHubUrl: string;
    dockerEventObservables: any;
    dockerEventStreams: any;
    constructor(http: HttpService, dockerService: DockerService, eventsGateway: EventsGateway, hostService: DockerHostsService, activityLogService: ActivityLogService);
    inoutStream: Transform;
    dockerEvents(): Promise<void>;
    subscribeDockerEvents(): void;
    handleEvent(event: any, hostId: number): void;
    unsubscribeDockerEvents(): void;
    handleContainerEvent(event: any, hostId: number): Promise<void>;
    handleVolumeEvent(event: any, hostId: number): Promise<void>;
    handleImageEvent(event: any, hostId: number): Promise<void>;
    handleNetworkEvent(event: any, hostId: number): Promise<void>;
}
