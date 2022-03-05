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
var DockerVolumesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerVolumesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docker_volumes_entity_1 = require("./docker-volumes.entity");
const util_1 = require("util");
const child_process_1 = require("child_process");
const typeorm_2 = require("typeorm");
let DockerVolumesService = DockerVolumesService_1 = class DockerVolumesService {
    constructor(volumeRepository) {
        this.volumeRepository = volumeRepository;
        this.logger = new common_1.Logger(DockerVolumesService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getVolumeById(id) {
        const f = await this.volumeRepository
            .createQueryBuilder('volumes')
            .leftJoinAndSelect('volumes.containers', 'containers')
            .leftJoinAndSelect('volumes.host', 'host')
            .where({ id: id })
            .getOne();
        if (f) {
            return f;
        }
        else {
            return null;
        }
    }
    async getVolumes(body) {
        try {
            const where = {};
            if (body.running) {
                where.running = body.running ? true : false;
            }
            where.dead = false;
            const take = body.limit || 10;
            const skip = body.skip || 0;
            const order = {};
            const f = await this.volumeRepository
                .createQueryBuilder('volumes')
                .leftJoinAndSelect('volumes.containers', 'containers')
                .leftJoinAndSelect('volumes.host', 'host')
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
    async save(volume) {
        try {
            const c = await this.volumeRepository.save(volume);
            if (c) {
                const f = await this.getVolumeById(volume.id);
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
    async removeVolume(where) {
        try {
            const c = await this.volumeRepository.findOne(where);
            if (c) {
                const f = await this.volumeRepository.delete(where);
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
    async volumeDetails(c) {
        const output = await this.exec('docker inspect ' + c.volumeId);
        const volume = { id: c.id };
        const details = JSON.parse(output.stdout);
        volume.details = details.length > 0 ? details[0] : {};
        try {
            const f = await this.save(volume);
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
            const q = { volumeId: c2.volumeId, host: c2.hostId };
            const f = await this.volumeRepository
                .createQueryBuilder('volumes')
                .leftJoinAndSelect('volumes.containers', 'containers')
                .leftJoinAndSelect('volumes.host', 'host')
                .where(q)
                .getOne();
            if (f) {
                return f;
            }
            else {
                const saveObj = { host: c2.hostId, volumeId: c2.volumeId, name: c2.name };
                const f2 = await this.volumeRepository.save(saveObj);
                const f = await this.getVolumeById(f2.id);
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
DockerVolumesService = DockerVolumesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docker_volumes_entity_1.DockerVolume)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DockerVolumesService);
exports.DockerVolumesService = DockerVolumesService;
//# sourceMappingURL=docker-volumes.service.js.map