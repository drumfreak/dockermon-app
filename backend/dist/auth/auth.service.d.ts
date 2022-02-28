import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import 'dotenv/config';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    jwtSecret: string;
    jwtExpires: string;
    ms: any;
    private readonly logger;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    getLoggedIn(req: any): Promise<{
        status: string;
        user: {};
        token?: undefined;
        tokenExpires?: undefined;
        message?: undefined;
    } | {
        status: string;
        user: any;
        token: string;
        tokenExpires: any;
        message?: undefined;
    } | {
        status: string;
        message: any;
        user?: undefined;
        token?: undefined;
        tokenExpires?: undefined;
    }>;
    sanitizeUser: (user: any) => any;
    validateUser(username: string, password: string): Promise<any>;
    login(postData: any): Promise<{
        status: string;
        user: any;
        token: string;
        tokenExpires: any;
        message?: undefined;
    } | {
        status: string;
        message: any;
        user?: undefined;
        token?: undefined;
        tokenExpires?: undefined;
    }>;
}
