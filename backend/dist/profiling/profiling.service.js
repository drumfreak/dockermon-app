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
var ProfilingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profiling_entity_1 = require("./profiling.entity");
const util_1 = require("util");
const child_process_1 = require("child_process");
const typeorm_2 = require("typeorm");
let ProfilingService = ProfilingService_1 = class ProfilingService {
    constructor(profilingRepository) {
        this.profilingRepository = profilingRepository;
        this.logger = new common_1.Logger(ProfilingService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getProfilingById(id) {
        const f = await this.profilingRepository
            .createQueryBuilder('volumes')
            .where({ id: id })
            .getOne();
        if (f) {
            return f;
        }
        else {
            return null;
        }
    }
    async getProfilings(body) {
        try {
            const where = {};
            this.logger.debug(body);
            const take = body.limit || 10;
            const skip = body.skip || 0;
            let order = {};
            if (body.sortKey) {
                order[body.sortKey] = body.sortType;
            }
            else {
                order = { createdAt: 'DESC' };
            }
            const q = {};
            this.logger.debug(q);
            const f = await this.profilingRepository
                .createQueryBuilder('profilings')
                .select('profilings.id')
                .addSelect('profilings.createdAt')
                .addSelect('profilings.startDate')
                .addSelect('profilings.endDate')
                .addSelect('profilings.samples')
                .addSelect('profilings.name')
                .addSelect('profilings.containerId')
                .addSelect('profilings.notes')
                .take(take)
                .skip(skip)
                .orderBy(order)
                .where(q)
                .getMany();
            return {
                status: 'success',
                data: f ? f : [],
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
    async save(profiling) {
        try {
            const c = await this.profilingRepository.save(profiling);
            if (c) {
                const f = await this.getProfilingById(profiling.id);
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
    async removeProfiling(where) {
        try {
            const c = await this.profilingRepository.findOne(where);
            if (c) {
                const f = await this.profilingRepository.delete(where);
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
            const q = { profilingId: c2.profilingId };
            const f = await this.profilingRepository
                .createQueryBuilder('profilings')
                .where(q)
                .getOne();
            if (f) {
                return f;
            }
            else {
                const f2 = await this.profilingRepository.save({ containerId: c2.containerId, name: c2.name });
                const f = await this.getProfilings(f2.id);
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
ProfilingService = ProfilingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profiling_entity_1.Profiling)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfilingService);
exports.ProfilingService = ProfilingService;
//# sourceMappingURL=profiling.service.js.map