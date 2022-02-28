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
exports.Stat = void 0;
const typeorm_1 = require("typeorm");
let Stat = class Stat {
    constructor() {
        this.statsData = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Stat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'int', default: 0, nullable: true }),
    __metadata("design:type", Number)
], Stat.prototype, "containerId", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'int', default: 0, nullable: true }),
    __metadata("design:type", Number)
], Stat.prototype, "hostId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "cpu", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "memory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "memoryLimit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "memoryPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "networkIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "networkOut", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "blockRead", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "blockWrite", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], Stat.prototype, "pids", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Stat.prototype, "statsData", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Stat.prototype, "processed", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Stat.prototype, "profiling", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'int', default: 0, nullable: true }),
    __metadata("design:type", Number)
], Stat.prototype, "profilingId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Stat.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Stat.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Stat.prototype, "deleted", void 0);
Stat = __decorate([
    (0, typeorm_1.Entity)('stats')
], Stat);
exports.Stat = Stat;
//# sourceMappingURL=stat.entity.js.map