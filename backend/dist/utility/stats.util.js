"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsUtility = void 0;
const common_1 = require("@nestjs/common");
let StatsUtility = class StatsUtility {
    constructor() {
        this.processStats = (stats) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            if (!stats)
                return null;
            const d = new Date(stats.read);
            const statsData = { date: d };
            const statsSummary = {};
            const cpu_delta = ((_b = (_a = stats.cpu_stats) === null || _a === void 0 ? void 0 : _a.cpu_usage) === null || _b === void 0 ? void 0 : _b.total_usage) - stats.precpu_stats.cpu_usage.total_usage;
            const system_cpu_delta = ((_c = stats.cpu_stats) === null || _c === void 0 ? void 0 : _c.system_cpu_usage) - stats.precpu_stats.system_cpu_usage;
            const number_cpus = (_d = stats.cpu_stats) === null || _d === void 0 ? void 0 : _d.online_cpus;
            const cpuUsage = Number((cpu_delta / system_cpu_delta) * number_cpus * 100.0) | 0;
            statsData.cpu = cpuUsage;
            const memoryCache = ((_f = (_e = stats.memory_stats) === null || _e === void 0 ? void 0 : _e.stats) === null || _f === void 0 ? void 0 : _f.inactive_file) ? stats.memory_stats.stats.inactive_file : 0;
            const memoryUsage = ((_g = stats.memory_stats) === null || _g === void 0 ? void 0 : _g.usage) - memoryCache;
            const memoryLimit = stats.memory_stats.limit;
            statsData.memoryPercent = memoryUsage;
            let diskReadBytes = 0;
            let diskWriteBytes = 0;
            if (((_j = (_h = stats === null || stats === void 0 ? void 0 : stats.blkio_stats) === null || _h === void 0 ? void 0 : _h.io_service_bytes_recursive) === null || _j === void 0 ? void 0 : _j.length) > 0) {
                diskReadBytes = stats.blkio_stats.io_service_bytes_recursive[0].value;
                diskWriteBytes = stats.blkio_stats.io_service_bytes_recursive[1].value;
            }
            statsData.diskRead = diskReadBytes;
            statsData.diskWrite = diskWriteBytes;
            const rxBytes = ((_l = (_k = stats === null || stats === void 0 ? void 0 : stats.networks) === null || _k === void 0 ? void 0 : _k.eth0) === null || _l === void 0 ? void 0 : _l.rx_bytes) ? (_o = (_m = stats === null || stats === void 0 ? void 0 : stats.networks) === null || _m === void 0 ? void 0 : _m.eth0) === null || _o === void 0 ? void 0 : _o.rx_bytes : 0;
            const txBytes = ((_q = (_p = stats === null || stats === void 0 ? void 0 : stats.networks) === null || _p === void 0 ? void 0 : _p.eth0) === null || _q === void 0 ? void 0 : _q.tx_bytes) ? (_s = (_r = stats === null || stats === void 0 ? void 0 : stats.networks) === null || _r === void 0 ? void 0 : _r.eth0) === null || _s === void 0 ? void 0 : _s.tx_bytes : 0;
            statsData.networkRx = rxBytes;
            statsData.networkTx = txBytes;
            const processes = ((_t = stats === null || stats === void 0 ? void 0 : stats.pids_stats) === null || _t === void 0 ? void 0 : _t.current) || 0;
            statsData.processes = processes;
            statsSummary.cpuUsage = cpuUsage || 0;
            statsSummary.memoryUsage = memoryUsage || 0;
            statsSummary.memoryLimit = memoryLimit || 0;
            statsSummary.networkRx = rxBytes || 0;
            statsSummary.networkTx = txBytes || 0;
            statsSummary.diskRead = diskReadBytes || 0;
            statsSummary.diskWrite = diskWriteBytes || 0;
            statsSummary.processes = processes || 0;
            return { statsData, statsSummary, stats };
        };
    }
};
StatsUtility = __decorate([
    (0, common_1.Controller)()
], StatsUtility);
exports.StatsUtility = StatsUtility;
//# sourceMappingURL=stats.util.js.map