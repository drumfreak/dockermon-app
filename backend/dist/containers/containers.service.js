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
var ContainersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const container_entity_1 = require("./container.entity");
const util_1 = require("util");
const child_process_1 = require("child_process");
const typeorm_2 = require("typeorm");
const stat_entity_1 = require("../stats/stat.entity");
let ContainersService = ContainersService_1 = class ContainersService {
    constructor(containerRepository, statsRepository) {
        this.containerRepository = containerRepository;
        this.statsRepository = statsRepository;
        this.logger = new common_1.Logger(ContainersService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getContainerById(id) {
        const f = await this.containerRepository
            .createQueryBuilder('containers')
            .leftJoinAndSelect('containers.volumes', 'dockerVolumes')
            .leftJoinAndSelect('containers.image', 'dockerImages')
            .leftJoinAndSelect('containers.host', 'dockerHost')
            .leftJoinAndSelect('containers.networks', 'dockerNetworks')
            .where({ id: id })
            .getOne();
        if (f) {
            return f;
        }
        else {
            return null;
        }
    }
    async getContainers(body) {
        try {
            const where = {};
            if (body.running) {
                where.running = body.running ? true : false;
            }
            const take = body.limit || 10;
            const skip = body.skip || 0;
            where.dead = false;
            const order = {};
            const f = await this.containerRepository
                .createQueryBuilder('containers')
                .leftJoinAndSelect('containers.volumes', 'dockerVolumes')
                .leftJoinAndSelect('containers.image', 'dockerImages')
                .leftJoinAndSelect('containers.host', 'dockerHost')
                .leftJoinAndSelect('containers.networks', 'dockerNetworks')
                .take(take)
                .skip(skip)
                .orderBy(order)
                .where(where)
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
    async save(container) {
        try {
            delete container.containerId;
            const c = await this.containerRepository.save(container);
            if (c) {
                const c2 = await this.getContainerById(c.id);
                return c2;
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
    async resetContainersRunning() {
    }
    async removeContainer(where) {
        try {
            const c = await this.containerRepository.findOne(where);
            const f = await this.containerRepository.delete(where);
            await this.statsRepository.delete({ containerId: c.id });
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
    async containerDetails(c) {
        var _a, _b, _c, _d;
        const output = await this.exec('docker inspect ' + c.containerId);
        const container = { id: c.id };
        const details = JSON.parse(output.stdout);
        container.details = details.length > 0 ? details[0] : {};
        container.running = true;
        if ((_b = (_a = container.details) === null || _a === void 0 ? void 0 : _a.Config) === null || _b === void 0 ? void 0 : _b.Labels['com.docker.compose.project']) {
            container.project = container.details.Config.Labels['com.docker.compose.project'];
        }
        container.dockerImage = ((_d = (_c = container.details) === null || _c === void 0 ? void 0 : _c.Config) === null || _d === void 0 ? void 0 : _d.Image) ? container.details.Config.Image : null;
        try {
            const f = await this.save(container);
            if (f) {
                return f;
            }
        }
        catch (error) {
            this.logger.warn(error);
        }
    }
    async findOrCreate(c2) {
        try {
            const q = { containerId: c2.containerId, host: c2.hostId };
            const f = await this.containerRepository
                .createQueryBuilder('containers')
                .leftJoinAndSelect('containers.volumes', 'dockerVolumes')
                .leftJoinAndSelect('containers.image', 'dockerImages')
                .leftJoinAndSelect('containers.host', 'dockerHost')
                .leftJoinAndSelect('containers.networks', 'dockerNetworks')
                .where(q)
                .getOne();
            if (f) {
                return f;
            }
            else {
                const saveObj = { containerId: c2.containerId, host: c2.hostId, name: c2.name, running: true };
                const f2 = await this.containerRepository.save(saveObj);
                if (f2) {
                    const f = await this.getContainerById(f2.id);
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
        }
        catch (error) {
            this.logger.warn(error);
            return null;
        }
    }
};
ContainersService = ContainersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(container_entity_1.Container)),
    __param(1, (0, typeorm_1.InjectRepository)(stat_entity_1.Stat)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ContainersService);
exports.ContainersService = ContainersService;
//# sourceMappingURL=containers.service.js.map