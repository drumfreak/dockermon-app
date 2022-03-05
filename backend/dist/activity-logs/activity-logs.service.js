"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ActivityLogService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const activity_logs_entity_1 = require("./activity-logs.entity");
const util_1 = require("util");
const child_process_1 = require("child_process");
const typeorm_2 = require("typeorm");
let ActivityLogService = ActivityLogService_1 = class ActivityLogService {
    constructor(activityLogRepository) {
        this.activityLogRepository = activityLogRepository;
        this.logger = new common_1.Logger(ActivityLogService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getActivityLogById(id) {
        const f = await this.activityLogRepository
            .createQueryBuilder('activityLogs')
            .leftJoinAndSelect('activityLogs.container', 'container')
            .leftJoinAndSelect('activityLogs.host', 'host')
            .leftJoinAndSelect('activityLogs.volume', 'volume')
            .leftJoinAndSelect('activityLogs.image', 'image')
            .leftJoinAndSelect('activityLogs.network', 'network')
            .leftJoinAndSelect('activityLogs.user', 'user')
            .where({ id: id })
            .getOne();
        if (f) {
            return f;
        }
        else {
            return null;
        }
    }
    async getActivityLogs(body) {
        try {
            console.log('getActivityLogs body', body);
            const where = {};
            if (body.running) {
                where.running = body.running ? true : false;
            }
            if (body.contentId) {
                where.contentId = body.contentId;
            }
            if (body.contentType) {
                where.contentType = body.contentType;
            }
            const take = body.limit || 10;
            const skip = body.skip || 0;
            let order = {};
            if (body.sortKey) {
                order[body.sortKey] = body.sortType;
            }
            else {
                order = { updatedAt: 'DESC' };
            }
            console.log('activityLogs Where', where);
            console.log('activityLogs Order', order);
            const [f, count] = await this.activityLogRepository.findAndCount({
                skip: skip,
                take: take,
                where: where,
                order: order,
                relations: ['host'],
            });
            return {
                status: 'success',
                data: f ? f : [],
                totalCount: count,
            };
        }
        catch (error) {
            console.warn(error);
            return {
                status: 'fail',
                data: [],
                totalCount: 0,
                message: error.message,
            };
        }
    }
    async save(activityLog) {
        try {
            const c = await this.activityLogRepository.save(activityLog);
            if (c) {
                const f = await this.getActivityLogById(activityLog.id);
                if (f) {
                    return f;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
    async removeActivityLog(where) {
        try {
            const c = await this.activityLogRepository.findOne(where);
            if (c) {
                const f = await this.activityLogRepository.delete(where);
                if (f) {
                    return f;
                }
                else {
                    return null;
                }
            }
        }
        catch (err) {
            this.logger.warn(err);
            return err;
        }
    }
    async findOrCreate(c2) {
        try {
            const q = { id: c2.id };
            const f = await this.activityLogRepository
                .createQueryBuilder('activityLogs')
                .where(q)
                .getOne();
            if (f) {
                return f;
            }
            else {
                const f2 = await this.activityLogRepository.save({ id: c2.id, name: c2.name });
                const f = await this.getActivityLogs(f2.id);
                if (f) {
                    return f;
                }
                else {
                    return null;
                }
            }
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
};
ActivityLogService = ActivityLogService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(activity_logs_entity_1.ActivityLog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActivityLogService);
exports.ActivityLogService = ActivityLogService;
//# sourceMappingURL=activity-logs.service.js.map