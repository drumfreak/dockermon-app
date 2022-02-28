/// <reference types="node" />
import { User } from './user.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(userRepository: Repository<User>);
    getUserById(id: any): Promise<any>;
    getUsers(body: any): Promise<{
        status: string;
        data: User[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(user: any): Promise<any>;
    removeUser(where: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
