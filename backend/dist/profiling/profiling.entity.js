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
exports.Profiling = void 0;
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const typeorm_1 = require("typeorm");
let Profiling = class Profiling {
    constructor() {
        this.data = {};
        this.containerSnapshot = {};
        this.containerSnapshotAfter = {};
        this.statsDates = {};
        this.statsCpu = {};
        this.statsMemoryPercent = {};
        this.statsDiskRead = {};
        this.statsDiskWrite = {};
        this.statsNetworkTx = {};
        this.statsNetworkRx = {};
        this.statsProcesses = {};
        this.statsSummary = {};
        this.chartData = {};
        this.dates = {};
        this.jobData = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Profiling.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], Profiling.prototype, "containerDockerId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Number)
], Profiling.prototype, "containerId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Profiling.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "containerSnapshot", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "containerSnapshotAfter", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsDates", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsCpu", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsMemoryPercent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsDiskRead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsDiskWrite", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsNetworkTx", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsNetworkRx", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsProcesses", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "statsSummary", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "chartData", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "dates", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Profiling.prototype, "jobData", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Profiling.prototype, "samples", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Profiling.prototype, "protected", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Profiling.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Profiling.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Profiling.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Profiling.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Profiling.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Profiling.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_logs_entity_1.ActivityLog, (activityLog) => activityLog.profiling, { eager: false }),
    __metadata("design:type", Array)
], Profiling.prototype, "activityLogs", void 0);
Profiling = __decorate([
    (0, typeorm_1.Entity)()
], Profiling);
exports.Profiling = Profiling;
//# sourceMappingURL=profiling.entity.js.map