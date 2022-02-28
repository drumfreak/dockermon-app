/// <reference types="node" />
import { DockerHost } from './docker-hosts.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
export declare class DockerHostsService {
    private readonly hostRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(hostRepository: Repository<DockerHost>);
    getHostById(id: any): Promise<any>;
    getUrl(id: any): Promise<string>;
    getHosts(body: any): Promise<{
        status: string;
        data: DockerHost[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(host: any): Promise<any>;
    removeHost(where: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
