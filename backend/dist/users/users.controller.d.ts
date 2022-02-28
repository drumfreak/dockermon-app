import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(body: any): Promise<{
        status: string;
        data: {
            status: string;
            data: import("./user.entity").User[];
            message?: undefined;
        } | {
            status: string;
            data: any[];
            message: any;
        };
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: any;
    }>;
    getUserById(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: any;
    }>;
    updateUserSettings(body: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: any;
    }>;
}
