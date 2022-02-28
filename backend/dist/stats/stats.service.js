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
var StatsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const containers_service_1 = require("../containers/containers.service");
const typeorm_2 = require("typeorm");
const stat_entity_1 = require("./stat.entity");
const typeorm_3 = require("typeorm");
let StatsService = StatsService_1 = class StatsService {
    constructor(statsRepository, containersService) {
        this.statsRepository = statsRepository;
        this.containersService = containersService;
        this.logger = new common_1.Logger(StatsService_1.name);
        this.memoryToBytes = (memory) => {
            let m;
            if (memory.includes('MiB')) {
                m = Number(memory.replace('MiB', ''));
                return m * 1000000;
            }
            if (memory.includes('GiB')) {
                m = Number(memory.replace('GiB', ''));
                return m * 1000000000;
            }
            return 0;
        };
        this.networkToBytes = (memory) => {
            let m;
            if (memory.includes('MB')) {
                m = Number(memory.replace('MB', ''));
                return m * 1000000;
            }
            if (memory.includes('GB')) {
                m = Number(memory.replace('GB', ''));
                return m * 1000000000;
            }
            return 0;
        };
        this.blocksToBytes = (memory) => {
            let m;
            if (memory.includes('MB')) {
                m = Number(memory.replace('MB', ''));
                return m * 1000000;
            }
            if (memory.includes('GB')) {
                m = Number(memory.replace('GB', ''));
                return m * 1000000000;
            }
            return 0;
        };
    }
    async getStats(body) {
        try {
            const where = { containerId: body.containerId };
            let take = body.limit;
            let order = {};
            where.profiling = body.profiling ? body.profiling : false;
            if (body.startDate && body.endDate) {
                where.createdAt = (0, typeorm_3.Between)(new Date(body.startDate), new Date(body.endDate));
                take = 10000000;
            }
            if (body.sortKey) {
                order[body.sortKey] = body.sortType;
            }
            else {
                order = { createdAt: 'DESC' };
            }
            const q = {
                order,
                skip: 0,
                take,
                where,
            };
            const f = await this.statsRepository.find(q);
            return {
                status: 'success',
                data: f ? f.reverse() : [],
            };
        }
        catch (error) {
            console.warn(error);
            return {
                status: 'fail',
                data: [],
                message: error.message,
            };
        }
    }
    async removeStats(where) {
        try {
            const f = await this.statsRepository.delete(where);
            if (f) {
                return f;
            }
            else {
                return null;
            }
        }
        catch (err) {
            this.logger.warn(err);
            return err;
        }
    }
    async saveStats(stats) {
        try {
            const saveStats = stats;
            await this.statsRepository.createQueryBuilder().insert().into('stats').values(saveStats).execute();
        }
        catch (err) {
            this.logger.warn(err);
            this.logger.warn(`ERROR RETRIEVING Stats, YO.`);
            return {
                status: 'fail',
                data: null,
                message: `No Stats Found`,
            };
        }
    }
};
StatsService = StatsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(stat_entity_1.Stat)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        containers_service_1.ContainersService])
], StatsService);
exports.StatsService = StatsService;
//# sourceMappingURL=stats.service.js.map