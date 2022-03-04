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
var EventsGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
require("dotenv/config");
let EventsGuard = EventsGuard_1 = class EventsGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(EventsGuard_1.name);
    }
    canActivate(context) {
        var _a, _b, _c;
        let bearerToken;
        if ((_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.args[0]) === null || _a === void 0 ? void 0 : _a.handshake) === null || _b === void 0 ? void 0 : _b.headers) === null || _c === void 0 ? void 0 : _c.authorization) {
            bearerToken = context.args[0].handshake.headers.authorization.split(' ')[1];
        }
        else {
            this.logger.warn('Not Authorized');
            return new Promise((resolve, reject) => {
                reject(false);
            });
        }
        try {
            const decoded = this.jwtService.verify(bearerToken);
            return new Promise((resolve, reject) => {
                if (decoded.userId && decoded.userEmail) {
                    resolve(true);
                }
                else {
                    reject(false);
                }
            });
        }
        catch (ex) {
            this.logger.debug(ex);
            return false;
        }
    }
};
EventsGuard = EventsGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], EventsGuard);
exports.default = EventsGuard;
//# sourceMappingURL=events.guard.js.map