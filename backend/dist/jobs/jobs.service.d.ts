/// <reference types="node" />
import { exec } from 'child_process';
import { DockerService } from 'src/docker/docker.service';
import 'dotenv/config';
import { DockerEventsService } from 'src/docker/docker-events.service';
import { DockerHostsService } from 'src/docker-hosts/docker-hosts.service';
import { EventsGateway } from 'src/events/events.gateway';
export declare class JobsService {
    private readonly dockerHostService;
    private readonly dockerService;
    private readonly dockerEventsService;
    private readonly eventGateway;
    private readonly logger;
    constructor(dockerHostService: DockerHostsService, dockerService: DockerService, dockerEventsService: DockerEventsService, eventGateway: EventsGateway);
    exec: typeof exec.__promisify__;
    dockerUsage(): Promise<void>;
    startup(): Promise<boolean>;
    dockerEventsListener(): Promise<boolean>;
}
