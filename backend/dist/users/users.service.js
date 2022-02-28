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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const util_1 = require("util");
const child_process_1 = require("child_process");
const typeorm_2 = require("typeorm");
let UsersService = UsersService_1 = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(UsersService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getUserById(id) {
        const f = await this.userRepository
            .createQueryBuilder('users')
            .select('users.id')
            .addSelect('users.createdAt')
            .addSelect('users.updatedAt')
            .addSelect('users.deleted')
            .addSelect('users.email')
            .addSelect('users.firstName')
            .addSelect('users.lastName')
            .addSelect('users.userSettings')
            .addSelect('users.forcePasswordChange')
            .where({ id: id })
            .getOne();
        if (f) {
            return f;
        }
        else {
            return null;
        }
    }
    async getUsers(body) {
        try {
            const where = {};
            const take = body.limit || 10;
            const skip = body.skip || 0;
            let order = {};
            if (body.sortKey) {
                order[body.sortKey] = body.sortType;
            }
            else {
                order = { createdAt: 'DESC' };
            }
            const f = await this.userRepository
                .createQueryBuilder('users')
                .select('users.id')
                .addSelect('users.createdAt')
                .addSelect('users.updatedAt')
                .addSelect('users.firstName')
                .addSelect('users.deleted')
                .addSelect('users.lastName')
                .addSelect('users.forcePasswordChange')
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
    async save(user) {
        try {
            const c = await this.userRepository.save(user);
            if (c) {
                const f = await this.getUserById(user.id);
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
    async removeUser(where) {
        try {
            const c = await this.userRepository.findOne(where);
            if (c) {
                const f = await this.userRepository.delete(where);
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
            const q = { email: c2.email };
            const f = await this.userRepository
                .createQueryBuilder('users')
                .where(q)
                .getOne();
            if (f) {
                return f;
            }
            else {
                const f2 = await this.userRepository.save({ email: c2.email });
                const f = await this.getUserById(f2.id);
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
UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map