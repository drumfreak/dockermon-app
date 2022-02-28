import { HttpService } from '@nestjs/axios';
export declare class DockerHubService {
    private readonly http;
    private readonly logger;
    private readonly exec;
    dockerHubUrl: string;
    constructor(http: HttpService);
    searchRepositories(searchTerm: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        message: any;
        data?: undefined;
    }>;
    repositoryDetails(repository: any): Promise<{
        status: string;
        data: any;
        hook: string;
        message?: undefined;
    } | {
        status: string;
        message: any;
        hook: string;
        data?: undefined;
    }>;
    repositoryTags(repository: any, options?: any): Promise<{
        status: string;
        data: any;
        hook: string;
        message?: undefined;
    } | {
        status: string;
        message: any;
        hook: string;
        data?: undefined;
    }>;
}
