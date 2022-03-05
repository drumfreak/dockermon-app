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
var DockerNetworksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerNetworksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docker_networks_entity_1 = require("./docker-networks.entity");
const util_1 = require("util");
const child_process_1 = require("child_process");
const typeorm_2 = require("typeorm");
let DockerNetworksService = DockerNetworksService_1 = class DockerNetworksService {
    constructor(networkRepository) {
        this.networkRepository = networkRepository;
        this.logger = new common_1.Logger(DockerNetworksService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getNetworkById(id) {
        const f = await this.networkRepository
            .createQueryBuilder('networks')
            .leftJoinAndSelect('networks.containers', 'containers')
            .leftJoinAndSelect('networks.host', 'host')
            .where({ id: id })
            .getOne();
        if (f) {
            return f;
        }
        else {
            return null;
        }
    }
    async getNetworks(body) {
        try {
            const where = {};
            if (body.running) {
                where.running = body.running ? true : false;
            }
            where.dead = false;
            const take = body.limit || 10;
            const skip = body.skip || 0;
            const order = {};
            const f = await this.networkRepository
                .createQueryBuilder('networks')
                .leftJoinAndSelect('networks.containers', 'containers')
                .leftJoinAndSelect('networks.host', 'host')
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
    async save(network) {
        try {
            const c = await this.networkRepository.save(network);
            if (c) {
                const f = await this.getNetworkById(network.id);
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
    async removeNetwork(where) {
        try {
            const c = await this.networkRepository.findOne(where);
            if (c) {
                const f = await this.networkRepository.delete(where);
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
    async networkDetails(c) {
        const output = await this.exec('docker inspect ' + c.networkId);
        const network = { id: c.id };
        const details = JSON.parse(output.stdout);
        network.details = details.length > 0 ? details[0] : {};
        try {
            const f = await this.save(network);
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
            const q = { networkId: c2.networkId, host: c2.hostId };
            const f = await this.networkRepository
                .createQueryBuilder('networks')
                .leftJoinAndSelect('networks.containers', 'containers')
                .leftJoinAndSelect('networks.host', 'host')
                .where(q)
                .getOne();
            if (f) {
                return f;
            }
            else {
                const f2 = await this.networkRepository.save({ host: c2.hostId, networkId: c2.networkId, name: c2.name });
                const f = await this.getNetworkById(f2.id);
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
DockerNetworksService = DockerNetworksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docker_networks_entity_1.DockerNetwork)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DockerNetworksService);
exports.DockerNetworksService = DockerNetworksService;
//# sourceMappingURL=docker-networks.service.js.map