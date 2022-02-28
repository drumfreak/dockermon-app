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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const typeorm_1 = require("typeorm");
let User = class User {
    constructor() {
        this.userSettings = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "passwordTemporary", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Boolean)
], User.prototype, "passwordTemporarySet", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Boolean)
], User.prototype, "forcePasswordChange", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "userResetToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "lastPasswordResetDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "userRole", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "userSettings", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], User.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_logs_entity_1.ActivityLog, (activityLog) => activityLog.user, { eager: false }),
    __metadata("design:type", Array)
], User.prototype, "activityLogs", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map