import { Request } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loggedIn(req: Request): Promise<{
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
    logout(): string;
    login(body: any): Promise<{
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
