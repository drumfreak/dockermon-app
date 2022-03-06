"use strict";
exports.id = 9686;
exports.ids = [9686];
exports.modules = {

/***/ 1078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ContainerCPULineChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9318);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

/* eslint-disable react/display-name */ 





chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerCPULineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref4)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref4, ()=>{
        return {
            async updateChart () {
                var ref;
                if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
                    const opts = getLightTheme(props1).basicOptions;
                    opts.animation = {
                        duration: 400
                    };
                    setOptions(opts);
                    await processData(props1);
                    setTimeout(()=>{
                        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
                            chartRef.current.update();
                        }
                    }, 100);
                }
            }
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        site === null || site === void 0 ? void 0 : (ref1 = site.userSettings) === null || ref1 === void 0 ? void 0 : ref1.chartColors
    ]);
    const processData = (props)=>{
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsDates),
            datasets: [
                {
                    label: 'CPU Data',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsCPU),
                    borderColor: '#' + site.userSettings.chartColors.cpu || 0,
                    backgroundColor: '#' + site.userSettings.chartColors.cpu,
                    hoverBackgroundColor: site.userSettings.chartColors.cpuHover || '#3380FF',
                    fill: site.userSettings.chartColors.fill,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                }, 
            ]
        };
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#' + site.userSettings.chartColors.labels
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    min: props.startDate,
                    max: props.endDate,
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksX
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridX
                    }
                },
                y: {
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksY
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridY
                    }
                }
            }
        };
        return {
            basicOptions
        };
    };
    if (!chartData) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading"
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chart-foreground2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "chart-foreground",
                        style: {
                            background: '#' + ((ref2 = site.userSettings) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.chartColors) === null || ref3 === void 0 ? void 0 : ref3.background)
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {
                            ref: chartRef,
                            width: 100,
                            height: 200,
                            data: chartData,
                            options: options
                        })
                    }),
                    ' '
                ]
            })
        })
    }));
});


/***/ }),

/***/ 1085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ContainerMemoryLineChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9318);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7191);

/* eslint-disable react/display-name */ 






chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerMemoryLineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref4)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref4, ()=>{
        return {
            async updateChart () {
                var ref;
                if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
                    const opts = getLightTheme(props1).basicOptions;
                    opts.animation = {
                        duration: 400
                    };
                    setOptions(opts);
                    await processData(props1);
                    setTimeout(()=>{
                        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
                            chartRef.current.update();
                        }
                    }, 100);
                }
            }
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        site === null || site === void 0 ? void 0 : (ref1 = site.userSettings) === null || ref1 === void 0 ? void 0 : ref1.chartColors
    ]);
    const processData = (props)=>{
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsDates),
            datasets: [
                {
                    label: 'Memory Usage',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsMemory),
                    backgroundColor: '#' + site.userSettings.chartColors.memoryUsage,
                    borderColor: '#' + site.userSettings.chartColors.memoryUsage || 0,
                    hoverBackgroundColor: site.userSettings.chartColors.memoryUsageHover || '#3380FF',
                    fill: site.userSettings.chartColors.fill,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                }, 
            ]
        };
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#' + site.userSettings.chartColors.labels
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    min: props.startDate,
                    max: props.endDate,
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksX
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridX
                    }
                },
                y: {
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksY,
                        callback: function(value) {
                            if (value > 0) {
                                return helpers_format_bytes__WEBPACK_IMPORTED_MODULE_7__/* .formatBytes.bytes */ .t.bytes(value);
                            } else {
                                return '0';
                            }
                        }
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridY
                    }
                }
            }
        };
        return {
            basicOptions
        };
    };
    if (!chartData) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading"
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chart-foreground2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "chart-foreground",
                        style: {
                            background: '#' + ((ref2 = site.userSettings) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.chartColors) === null || ref3 === void 0 ? void 0 : ref3.background)
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {
                            ref: chartRef,
                            width: 100,
                            height: 200,
                            data: chartData,
                            options: options
                        })
                    }),
                    ' '
                ]
            })
        })
    }));
});


/***/ }),

/***/ 6989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ContainerNetworkLineChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9318);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7191);

/* eslint-disable react/display-name */ 






chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerNetworkLineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref4)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref4, ()=>{
        return {
            async updateChart () {
                var ref;
                if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
                    const opts = getLightTheme(props1).basicOptions;
                    opts.animation = {
                        duration: 400
                    };
                    setOptions(opts);
                    await processData(props1);
                    setTimeout(()=>{
                        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
                            chartRef.current.update();
                        }
                    }, 100);
                }
            }
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        site === null || site === void 0 ? void 0 : (ref1 = site.userSettings) === null || ref1 === void 0 ? void 0 : ref1.chartColors
    ]);
    const processData = (props)=>{
        // console.log('props.statsNetworkIn', props.statsNetworkIn);
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsDates),
            datasets: [
                {
                    label: 'Network In',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsNetworkIn),
                    borderColor: '#' + site.userSettings.chartColors.networkRx || 0,
                    backgroundColor: '#' + site.userSettings.chartColors.networkRx || 0,
                    hoverBackgroundColor: site.userSettings.chartColors.networkRxHover || '#3380FF',
                    fill: site.userSettings.chartColors.fillMulti || false,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                },
                {
                    label: 'Network Out',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsNetworkOut),
                    borderColor: '#' + site.userSettings.chartColors.networkTx || 0,
                    backgroundColor: '#' + site.userSettings.chartColors.networkTx || 0,
                    hoverBackgroundColor: site.userSettings.chartColors.networkTxHover || '#3380FF',
                    fill: site.userSettings.chartColors.fillMulti || false,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                }, 
            ]
        };
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#' + site.userSettings.chartColors.labels
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    min: props.startDate,
                    max: props.endDate,
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksX
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridX
                    }
                },
                y: {
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksY,
                        autoSkip: true,
                        maxTicksLimit: 5,
                        callback: function(value) {
                            // console.log('Value', value);
                            if (!value || value === undefined) {
                                return 0;
                            }
                            if (value > 0) {
                                return helpers_format_bytes__WEBPACK_IMPORTED_MODULE_7__/* .formatBytes.bytes */ .t.bytes(value) || 0;
                            } else {
                                return 0;
                            }
                        }
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridY
                    }
                }
            }
        };
        return {
            basicOptions
        };
    };
    if (!chartData) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading"
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chart-foreground2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "chart-foreground",
                        style: {
                            background: '#' + ((ref2 = site.userSettings) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.chartColors) === null || ref3 === void 0 ? void 0 : ref3.background)
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {
                            ref: chartRef,
                            width: 100,
                            height: 200,
                            data: chartData,
                            options: options
                        })
                    }),
                    ' '
                ]
            })
        })
    }));
});


/***/ }),

/***/ 4781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ ContainerProcessesBarChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9318);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

/* eslint-disable react/display-name */ 





chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerProcessesBarChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref4)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref4, ()=>{
        return {
            async updateChart () {
                var ref;
                if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
                    const opts = getLightTheme(props1).basicOptions;
                    opts.animation = {
                        duration: 400
                    };
                    setOptions(opts);
                    await processData(props1);
                    setTimeout(()=>{
                        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
                            chartRef.current.update();
                        }
                    }, 100);
                }
            }
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        if ((ref = site.userSettings) === null || ref === void 0 ? void 0 : ref.chartColors) {
            setOptions(getLightTheme(props1).basicOptions);
            processData(props1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        site === null || site === void 0 ? void 0 : (ref1 = site.userSettings) === null || ref1 === void 0 ? void 0 : ref1.chartColors
    ]);
    const processData = (props)=>{
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsDates),
            datasets: [
                {
                    label: 'Processes',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props.statsProcesses),
                    backgroundColor: '#' + site.userSettings.chartColors.processes,
                    hoverBackgroundColor: site.userSettings.chartColors.processesHover || '#3380FF',
                    fill: site.userSettings.chartColors.fill,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                }, 
            ]
        };
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#' + site.userSettings.chartColors.labels
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    min: props.startDate,
                    max: props.endDate,
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksX
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridX
                    }
                },
                y: {
                    ticks: {
                        color: '#' + site.userSettings.chartColors.ticksY
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridY
                    }
                }
            }
        };
        return {
            basicOptions
        };
    };
    if (!chartData) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading"
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "chart-foreground2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "chart-foreground",
                        style: {
                            background: '#' + ((ref2 = site.userSettings) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.chartColors) === null || ref3 === void 0 ? void 0 : ref3.background)
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {
                            ref: chartRef,
                            width: 100,
                            height: 200,
                            data: chartData,
                            options: options
                        })
                    }),
                    ' '
                ]
            })
        })
    }));
});


/***/ }),

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ statsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);



const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const statsService = {
    results: resultSubject.asObservable(),
    getStats
};
function getStats(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/stats`, postBody).then((result)=>{
        if (result.status === 'success') {
            resultSubject.next(result);
            return result;
        } else {
            throw Error(result.message);
        }
    }).catch((error)=>{
        resultSubject.next(null);
        console.log(error);
    });
}


/***/ })

};
;