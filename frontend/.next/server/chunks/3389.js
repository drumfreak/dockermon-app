"use strict";
exports.id = 3389;
exports.ids = [3389];
exports.modules = {

/***/ 7191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ formatBytes)
/* harmony export */ });
const formatBytes = {
    bytes
};
function bytes(bytes1, decimals = 2) {
    if (bytes1 === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        'Bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB'
    ];
    const i = Math.floor(Math.log(bytes1) / Math.log(k));
    return parseFloat((bytes1 / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


/***/ }),

/***/ 9318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ statsHelper)
/* harmony export */ });
const statsHelper = {
    reduceStats,
    progressBarCPUClasses,
    getIconColor,
    progressBarMemoryClasses
};
function reduceStats(data, skip = false) {
    if (!data) return [];
    if (skip) return data;
    var reducedDataPoints = [];
    let reducer = 1;
    if (data.length < 200) {
        return data;
    }
    reducer = Math.round(data.length / 100) - 1;
    let end = data[data.length - 1];
    let useEnd = true;
    // if (data.length > 200 && data.length < 500) {
    //   reducer = 2;
    // }
    // if (data.length > 500 && data.length < 1000) {
    //   reducer = 5;
    // }
    // if (data.length > 1000 && data.length < 2000) {
    //   reducer = 20;
    // }
    // console.log('Reducer is', reducer);
    data.forEach((item, index)=>{
        if (index % reducer === 0) {
            reducedDataPoints.push(item);
            if (index === end) {
                useEnd = false;
            }
        }
    });
    if (useEnd) {
        reducedDataPoints.push(data[end]);
    }
    return reducedDataPoints;
}
function progressBarCPUClasses(container) {
    var ref;
    if ((ref = container.statsSummary) === null || ref === void 0 ? void 0 : ref.cpuUsage) {
        switch(true){
            case container.statsSummary.cpuUsage > 60 && container.statsSummary.cpuUsage < 80:
                return 'p-progress-bar-yellow';
            case container.statsSummary.cpuUsage > 80 && container.statsSummary.cpuUsage < 90:
                return 'p-progress-bar-orange';
            case container.statsSummary.cpuUsage > 90 && container.statsSummary.cpuUsage < 100:
                return 'p-progress-bar-red';
            case container.statsSummary.cpuUsage > 100:
                return 'p-progress-bar-darkred';
            default:
                return 'p-progress-bar';
        }
    }
}
function progressBarMemoryClasses(memoryPercent) {
    if (memoryPercent) {
        switch(true){
            case memoryPercent > 60 && memoryPercent < 80:
                return 'p-progress-bar-yellow';
            case memoryPercent > 80 && memoryPercent < 90:
                return 'p-progress-bar-orange';
            case memoryPercent > 90 && memoryPercent < 100:
                return 'p-progress-bar-red';
            case memoryPercent > 100:
                return 'p-progress-bar-darkred';
            default:
                return 'p-progress-bar';
        }
    }
}
function getIconColor(container) {
    if (container.state) {
        switch(container.state){
            case 'paused':
                return 'text-yellow-500';
            case 'running':
                return 'text-green-500';
            case 'stopped':
            case 'exited':
                return 'info';
            default:
                return 'info';
        }
    }
}


/***/ })

};
;