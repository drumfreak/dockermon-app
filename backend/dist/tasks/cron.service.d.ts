/// <reference types="node" />
import { exec } from 'child_process';
import { StatsService } from 'src/stats/stats.service';
import { ContainersService } from 'src/containers/containers.service';
import { DockerService } from 'src/docker/docker.service';
import 'dotenv/config';
import { EventsGateway } from 'src/events/events.gateway';
export declare class CronService {
    private readonly statsService;
    private readonly containersService;
    private readonly dockerService;
    private readonly eventGateway;
    private readonly logger;
    constructor(statsService: StatsService, containersService: ContainersService, dockerService: DockerService, eventGateway: EventsGateway);
    exec: typeof exec.__promisify__;
    statsCron(): Promise<void>;
    dockerUsage(): Promise<void>;
}
