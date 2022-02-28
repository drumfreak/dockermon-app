import { Repository } from 'typeorm';
import { Role } from './role.entity';
export declare class RolesService {
    private readonly roleRepository;
    private readonly logger;
    constructor(roleRepository: Repository<Role>);
    getRoles(body: any): Promise<{
        status: string;
        data: Role[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(role: any): Promise<import("typeorm").UpdateResult>;
    findOrCreate(c2: any): Promise<any>;
}
