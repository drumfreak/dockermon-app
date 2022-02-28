/// <reference types="node" />
import { Profiling } from './profiling.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
export declare class ProfilingService {
    private readonly profilingRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(profilingRepository: Repository<Profiling>);
    getProfilingById(id: any): Promise<any>;
    getProfilings(body: any): Promise<{
        status: string;
        data: Profiling[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(profiling: any): Promise<any>;
    removeProfiling(where: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
