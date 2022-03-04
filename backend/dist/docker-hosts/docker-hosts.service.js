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
var DockerHostsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerHostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docker_hosts_entity_1 = require("./docker-hosts.entity");
const util_1 = require("util");
const child_process_1 = require("child_process");
const typeorm_2 = require("typeorm");
let DockerHostsService = DockerHostsService_1 = class DockerHostsService {
    constructor(hostRepository) {
        this.hostRepository = hostRepository;
        this.logger = new common_1.Logger(DockerHostsService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getHostById(id) {
        const f = await this.hostRepository.createQueryBuilder('hosts').leftJoinAndSelect('hosts.containers', 'containers').where({ id: id }).getOne();
        if (f) {
            return f;
        }
        else {
            return null;
        }
    }
    async getUrl(id) {
        const f = await this.hostRepository.createQueryBuilder('hosts').where({ id: id }).getOne();
        if (f) {
            if (f.ipAddress === 'localhost' || f.ipAddress === '127.0.0.1') {
                f.ipAddress = process.env.DOCKERMON_WORKER_HOST_ADDRESS;
            }
            return f.connectionType + '://' + f.ipAddress + ':' + f.port;
        }
    }
    async getHosts(body) {
        try {
            const where = {};
            if (body.active) {
                where.active = body.active ? true : false;
            }
            const take = body.limit || 10;
            const skip = body.skip || 0;
            const order = {};
            const f = await this.hostRepository
                .createQueryBuilder('hosts')
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
    async save(host) {
        try {
            const c = await this.hostRepository.save(host);
            if (c) {
                const f = await this.getHostById(host.id);
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
    async removeHost(where) {
        try {
            const c = await this.hostRepository.findOne(where);
            if (c) {
                if (c.protected) {
                    throw new Error('Host is protected, cannot delete');
                }
                const f = await this.hostRepository.delete(where);
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
            const q = { host: c2.hostId };
            const f = await this.hostRepository.createQueryBuilder('hosts').leftJoinAndSelect('hosts.containers', 'containers').where(q).getOne();
            if (f) {
                return f;
            }
            else {
                const f2 = await this.hostRepository.save(c2);
                const f = await this.getHostById(f2.id);
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
DockerHostsService = DockerHostsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docker_hosts_entity_1.DockerHost)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DockerHostsService);
exports.DockerHostsService = DockerHostsService;
//# sourceMappingURL=docker-hosts.service.js.map