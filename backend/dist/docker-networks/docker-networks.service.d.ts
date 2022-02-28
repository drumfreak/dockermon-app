/// <reference types="node" />
import { DockerNetwork } from './docker-networks.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
export declare class DockerNetworksService {
    private readonly networkRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(networkRepository: Repository<DockerNetwork>);
    getNetworkById(id: any): Promise<any>;
    getNetworks(body: any): Promise<{
        status: string;
        data: DockerNetwork[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(network: any): Promise<any>;
    removeNetwork(where: any): Promise<any>;
    networkDetails(c: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
