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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const ms = require("ms");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../users/user.entity");
const typeorm_2 = require("typeorm");
require("dotenv/config");
const loginErrorObject = {
    status: 'fail',
    message: 'credentials failed',
};
let AuthService = AuthService_1 = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.jwtSecret = process.env.JWT_SECRET;
        this.jwtExpires = process.env.JWT_EXPIRES;
        this.ms = ms;
        this.logger = new common_1.Logger(AuthService_1.name);
        this.sanitizeUser = (user) => {
            delete user.password;
            delete user.passwordTemporary;
            return user;
        };
    }
    async getLoggedIn(req) {
        try {
            if (!req.user) {
                return {
                    status: 'success',
                    user: {},
                };
            }
            try {
                const c = await this.usersRepository.findOne({
                    where: { email: req.user.userEmail },
                });
                if (c) {
                    const token = this.jwtService.sign({
                        userId: c.id,
                        userEmail: c.email,
                        role: c.userRole,
                    });
                    return {
                        status: 'success',
                        user: this.sanitizeUser(c),
                        token,
                        tokenExpires: this.ms(this.jwtExpires),
                    };
                }
                else {
                    return loginErrorObject;
                }
            }
            catch (err) {
                this.logger.debug(err);
                return {
                    status: 'fail',
                    message: err.message,
                };
            }
        }
        catch (err) {
            return {
                status: 'fail',
                user: {},
            };
        }
    }
    async validateUser(username, password) {
        return null;
    }
    async login(postData) {
        try {
            const c = await this.usersRepository.findOne({
                where: { email: postData.email },
            });
            if (c) {
                if (!bcrypt.compareSync(postData.password, c.password)) {
                    return loginErrorObject;
                }
                const token = this.jwtService.sign({
                    userId: c.id,
                    userEmail: c.email,
                    role: c.userRole,
                });
                return {
                    status: 'success',
                    user: this.sanitizeUser(c),
                    token,
                    tokenExpires: this.ms(this.jwtExpires),
                };
            }
            else {
                return loginErrorObject;
            }
        }
        catch (err) {
            this.logger.debug(err);
            return {
                status: 'fail',
                message: err.message,
            };
        }
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map