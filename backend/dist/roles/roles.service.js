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
var RolesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./role.entity");
let RolesService = RolesService_1 = class RolesService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
        this.logger = new common_1.Logger(RolesService_1.name);
    }
    async getRoles(body) {
        try {
            const f = await this.roleRepository.find({
                order: { name: 'ASC' },
                skip: 0,
                take: 100,
                where: {},
            });
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
    async save(role) {
        try {
            const c = await this.roleRepository.createQueryBuilder('roles').update(role_entity_1.Role).set(role).where({ id: role.id }).execute();
            if (c) {
                return c;
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
    async findOrCreate(c2) {
        try {
            const f = await this.roleRepository.findOne(c2.id);
            if (f) {
                return f;
            }
            else {
                const f2 = await this.roleRepository
                    .createQueryBuilder()
                    .insert()
                    .into(role_entity_1.Role)
                    .values([{ name: c2.name }])
                    .execute();
                const f = await this.roleRepository.findOne(f2.raw.insertId);
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
RolesService = RolesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map