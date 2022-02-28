/// <reference types="node" />
import { DockerVolume } from './docker-volumes.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
export declare class DockerVolumesService {
    private readonly volumeRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(volumeRepository: Repository<DockerVolume>);
    getVolumeById(id: any): Promise<any>;
    getVolumes(body: any): Promise<{
        status: string;
        data: DockerVolume[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(volume: any): Promise<any>;
    removeVolume(where: any): Promise<any>;
    volumeDetails(c: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
