import { CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';
export default class EventsGuard implements CanActivate {
    private jwtService;
    private readonly logger;
    constructor(jwtService: JwtService);
    canActivate(context: any): boolean | any | Promise<boolean | any> | Observable<boolean | any>;
}
