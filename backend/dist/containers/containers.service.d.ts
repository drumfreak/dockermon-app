/// <reference types="node" />
import { Container } from './container.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
import { Stat } from 'src/stats/stat.entity';
export declare class ContainersService {
    private readonly containerRepository;
    private readonly statsRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(containerRepository: Repository<Container>, statsRepository: Repository<Stat>);
    getContainerById(id: any): Promise<any>;
    getContainers(body: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(container: any): Promise<any>;
    resetContainersRunning(): Promise<void>;
    removeContainer(where: any): Promise<any>;
    containerDetails(c: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
