import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly roleService;
    constructor(roleService: RolesService);
    getRoles(body: any): Promise<{
        status: string;
        data: import("./role.entity").Role[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
}
