"use strict";
exports.id = 3656;
exports.ids = [3656];
exports.modules = {

/***/ 4033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ ContainerProfilerCPULineChart)
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

const ContainerProfilerCPULineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref5)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(options);
    optionsRef.current = options;
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const chartDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartData);
    chartDataRef.current = chartData;
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: chartLoaded , 1: setChartLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const chartLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartLoaded);
    chartLoadedRef.current = chartLoaded;
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref5, ()=>({
            async updateChart () {
                updateData();
            }
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref, ref4;
        if ((ref4 = (ref = chartDataRef.current) === null || ref === void 0 ? void 0 : ref.datasets[0]) === null || ref4 === void 0 ? void 0 : ref4.data) {
            updateData();
        } else {
            if (!chartLoadedRef.current) {
                processData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1.statsCPU.length
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
    const updateData = ()=>{
        processData();
        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
            chartRef.current.update();
        }
    };
    const processData = ()=>{
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsDates),
            datasets: [
                {
                    label: 'CPU Data',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_5__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsCPU),
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
        if (!chartLoadedRef.current === false) {
            setChartLoaded(true);
        }
        setOptions(getLightTheme(props1).basicOptions);
        setChartData(basicData);
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: props.animationTime || 0
            },
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
                        autoSkip: true,
                        maxTicksLimit: 20,
                        color: '#' + site.userSettings.chartColors.ticksX
                    },
                    grid: {
                        color: '#' + site.userSettings.chartColors.gridX
                    }
                },
                y: {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 5,
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
    if (!chartDataRef.current) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading"
        }));
    }
    // console.log('Process Data', chartData);
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

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ ContainerProfilerDiskIOLineChart)
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
/* harmony import */ var _helpers_format_bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7191);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9318);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);

/* eslint-disable react/display-name */ 






chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerProfilerDiskIOLineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref5)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(options);
    optionsRef.current = options;
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const chartDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartData);
    chartDataRef.current = chartData;
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: chartLoaded , 1: setChartLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const chartLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartLoaded);
    chartLoadedRef.current = chartLoaded;
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref5, ()=>({
            async updateChart () {
                updateData();
            }
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref, ref4;
        if ((ref4 = (ref = chartDataRef.current) === null || ref === void 0 ? void 0 : ref.datasets[0]) === null || ref4 === void 0 ? void 0 : ref4.data) {
            updateData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref, ref6;
        if ((ref6 = (ref = chartDataRef.current) === null || ref === void 0 ? void 0 : ref.datasets[0]) === null || ref6 === void 0 ? void 0 : ref6.data) {
            updateData();
        } else {
            if (!chartLoadedRef.current) {
                processData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1.statsDiskInput.length
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // if (site.userSettings?.chartColors) {
        processData();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        site === null || site === void 0 ? void 0 : (ref1 = site.userSettings) === null || ref1 === void 0 ? void 0 : ref1.chartColors
    ]);
    const updateData = ()=>{
        processData();
        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
            chartRef.current.update();
        }
    };
    const processData = ()=>{
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsDates),
            datasets: [
                {
                    label: 'Disk Read',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsDiskOutput),
                    backgroundColor: '#' + site.userSettings.chartColors.diskRead,
                    borderColor: '#' + site.userSettings.chartColors.diskRead || 0,
                    hoverBackgroundColor: site.userSettings.chartColors.diskReadHover || '#3380FF',
                    fill: site.userSettings.chartColors.fillMulti,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                },
                {
                    label: 'Disk Write',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsDiskInput),
                    backgroundColor: '#' + site.userSettings.chartColors.diskWrite,
                    borderColor: '#' + site.userSettings.chartColors.diskWrite || 0,
                    hoverBackgroundColor: site.userSettings.chartColors.diskWriteHover || '#3380FF',
                    fill: site.userSettings.chartColors.fillMulti,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                }, 
            ]
        };
        if (!chartLoadedRef.current === false) {
            setChartLoaded(true);
        }
        setOptions(getLightTheme(props1).basicOptions);
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: props.animationTime || 0
            },
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
                        autoSkip: true,
                        maxTicksLimit: 20,
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
                            if (value > 0) {
                                return _helpers_format_bytes__WEBPACK_IMPORTED_MODULE_5__/* .formatBytes.bytes */ .t.bytes(value);
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
    if (!chartDataRef.current) {
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
                            data: chartDataRef.current,
                            options: optionsRef.current
                        })
                    }),
                    ' '
                ]
            })
        })
    }));
});


/***/ }),

/***/ 7225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ContainerProfilerDiskPieChart)
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
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7077);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_dataview__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7191);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);

/* eslint-disable react/display-name */ 








chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerProfilerDiskPieChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref)=>{
    var ref1, ref2;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: layout1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('list');
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, ()=>{
        return {
            async updateChart () {
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
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOptions(getLightTheme(props1).basicOptions);
        processData(props1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1
    ]);
    const processData = (props)=>{
        const basicData = {
            labels: props.statsDiskLabels,
            datasets: [
                {
                    label: 'Disks',
                    data: props.statsDiskUsage,
                    color: '#cc0000',
                    hoverBackgroundColor: '#3380FF',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }, 
            ]
        };
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = ()=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false
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
    const renderListItem = (data)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 m-0 datatable-hover",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-1 text-wrap",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faHardDrive
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-11 text-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 p-0 m-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm",
                                    children: data.label
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 p-0 m-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: helpers_format_bytes__WEBPACK_IMPORTED_MODULE_6__/* .formatBytes.bytes */ .t.bytes(data.usage)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 p-0 m-0",
                                children: data.type
                            })
                        ]
                    })
                ]
            })
        }));
    };
    const renderGridItem = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 md:col-4"
        }));
    };
    const itemTemplate = (product, layout)=>{
        if (!product) {
            return;
        }
        if (layout === 'list') return renderListItem(product);
        else if (layout === 'grid') return renderGridItem(product);
    };
    // const renderHeader = () => {
    //   return (
    //     <div className="col-12 p-0 m-0"></div>
    //     // <div className="grid grid-nogutter">
    //     //   <div className="col-6" style={{ textAlign: 'left' }}></div>
    //     //   <div className="col-6" style={{ textAlign: 'right' }}>
    //     //   </div>
    //     // </div>
    //   );
    // };
    // const header = renderHeader();
    const items = props1.statsDiskLabels.map((d, i)=>{
        return {
            label: props1.statsDiskLabels[i],
            usage: props1.statsDiskUsage[i],
            type: props1.statsDiskType[i],
            other: props1.statsDiskOther[i]
        };
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "surface",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid chart-",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "chart-foreground2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "chart-foreground",
                                    style: {
                                        background: '#' + ((ref1 = site.userSettings) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.chartColors) === null || ref2 === void 0 ? void 0 : ref2.background)
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {
                                        ref: chartRef,
                                        data: chartData,
                                        options: options
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-8 card",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dataview__WEBPACK_IMPORTED_MODULE_5__.DataView, {
                                className: "height-100",
                                value: items,
                                layout: layout1,
                                renderHeader: false,
                                itemTemplate: itemTemplate
                            })
                        })
                    ]
                })
            })
        })
    }));
});


/***/ }),

/***/ 9731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ContainerProfilerMemoryLineChart)
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
/* harmony import */ var _helpers_format_bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7191);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9318);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);

/* eslint-disable react/display-name */ 






chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerProfilerMemoryLineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref5)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(options);
    optionsRef.current = options;
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const chartDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartData);
    chartDataRef.current = chartData;
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: chartLoaded , 1: setChartLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const chartLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartLoaded);
    chartLoadedRef.current = chartLoaded;
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref5, ()=>({
            async updateChart () {
                updateData();
            }
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref, ref4;
        if ((ref4 = (ref = chartDataRef.current) === null || ref === void 0 ? void 0 : ref.datasets[0]) === null || ref4 === void 0 ? void 0 : ref4.data) {
            updateData();
        } else {
            if (!chartLoadedRef.current) {
                processData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1.statsMemory.length
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
    const updateData = ()=>{
        processData();
        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
            chartRef.current.update();
        }
    };
    const processData = ()=>{
        // console.log('Process Data');
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsDates),
            datasets: [
                {
                    label: 'Memory Data',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsMemory),
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
        if (!chartLoadedRef.current === false) {
            setChartLoaded(true);
        }
        setOptions(getLightTheme(props1).basicOptions);
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: props.animationTime || 2500
            },
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
                        autoSkip: true,
                        maxTicksLimit: 20,
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
                            if (value > 0) {
                                return _helpers_format_bytes__WEBPACK_IMPORTED_MODULE_5__/* .formatBytes.bytes */ .t.bytes(value);
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
    if (!chartDataRef.current) {
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
                            data: chartDataRef.current,
                            options: optionsRef.current
                        })
                    }),
                    ' '
                ]
            })
        })
    }));
});


/***/ }),

/***/ 9646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ContainerProfilerNetworkLineChart)
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
/* harmony import */ var _helpers_format_bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7191);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9318);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);

/* eslint-disable react/display-name */ 






chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerProfilerNetworkLineChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref5)=>{
    var ref1, ref2, ref3;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(options);
    optionsRef.current = options;
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const chartDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartData);
    chartDataRef.current = chartData;
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: chartLoaded , 1: setChartLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const chartLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartLoaded);
    chartLoadedRef.current = chartLoaded;
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>{
        return state.site;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref5, ()=>({
            async updateChart () {
                updateData();
            }
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref, ref4;
        if ((ref4 = (ref = chartDataRef.current) === null || ref === void 0 ? void 0 : ref.datasets[0]) === null || ref4 === void 0 ? void 0 : ref4.data) {
            updateData();
        } else {
            if (!chartLoadedRef.current) {
                processData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1.statsNetworkRx.length
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
    const updateData = ()=>{
        processData();
        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
            chartRef.current.update();
        }
    };
    const processData = ()=>{
        // console.log('Process Data');
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsDates),
            datasets: [
                {
                    label: 'RX',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsNetworkRx),
                    backgroundColor: '#' + site.userSettings.chartColors.networkRx,
                    borderColor: '#' + site.userSettings.chartColors.networkRx || 0,
                    hoverBackgroundColor: site.userSettings.chartColors.networkRxHover || '#3380FF',
                    fill: site.userSettings.chartColors.fillMulti,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                },
                {
                    label: 'TX',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsNetworkTx),
                    backgroundColor: '#' + site.userSettings.chartColors.networkTx,
                    borderColor: '#' + site.userSettings.chartColors.networkTx || 0,
                    hoverBackgroundColor: site.userSettings.chartColors.networkRxHover || '#3380FF',
                    fill: site.userSettings.chartColors.fillMulti,
                    lineTension: site.userSettings.chartColors.lineTension || 0.1,
                    pointRadius: site.userSettings.chartColors.pointRadius || 0,
                    hoverOffset: site.userSettings.chartColors.hoverOffset || 4
                }, 
            ]
        };
        if (!chartLoadedRef.current === false) {
            setChartLoaded(true);
        }
        setOptions(getLightTheme(props1).basicOptions);
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: props.animationTime || 0
            },
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
                        autoSkip: true,
                        maxTicksLimit: 20,
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
                            if (value > 0) {
                                return _helpers_format_bytes__WEBPACK_IMPORTED_MODULE_5__/* .formatBytes.bytes */ .t.bytes(value);
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
    if (!chartDataRef.current) {
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
                            data: chartDataRef.current,
                            options: optionsRef.current
                        })
                    }),
                    ' '
                ]
            })
        })
    }));
});


/***/ }),

/***/ 2337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ ContainerProfilerProcessesBarChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4467);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9318);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__);

/* eslint-disable react/display-name */ 




chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);

const ContainerProfilerProcessesBarChart = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props1, ref2)=>{
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(options);
    optionsRef.current = options;
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const chartDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartData);
    chartDataRef.current = chartData;
    const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: chartLoaded , 1: setChartLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const chartLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartLoaded);
    chartLoadedRef.current = chartLoaded;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref2, ()=>({
            async updateChart () {
                updateData();
            }
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref, ref1;
        if ((ref1 = (ref = chartDataRef.current) === null || ref === void 0 ? void 0 : ref.datasets[0]) === null || ref1 === void 0 ? void 0 : ref1.data) {
            updateData();
        } else {
            if (!chartLoadedRef.current) {
                processData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props1.statsProcesses.length
    ]);
    const updateData = ()=>{
        processData();
        if (chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) {
            chartRef.current.update();
        }
    };
    const processData = async ()=>{
        // console.log('Process Data');
        const basicData = {
            labels: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_4__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsDates),
            datasets: [
                {
                    label: 'Processes',
                    data: helpers_stats_helper__WEBPACK_IMPORTED_MODULE_4__/* .statsHelper.reduceStats */ .Q.reduceStats(props1.statsProcesses) || [],
                    backgroundColor: props1.chartColor || 'green',
                    color: '#cc0000',
                    hoverBackgroundColor: '#3380FF',
                    borderColor: props1.chartColor || 'green',
                    fill: props1.fill || false,
                    lineTension: props1.lineTension || 0.1,
                    pointRadius: 1,
                    hoverOffset: 4
                }, 
            ]
        };
        if (!chartLoadedRef.current === false) {
            setChartLoaded(true);
        }
        const theme = getLightTheme(props1).basicOptions;
        setOptions(theme);
        setChartData(basicData);
    // this.chartReference.chartInstance.update();
    };
    const getLightTheme = (props)=>{
        let basicOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: props.animationTime || 0
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    type: 'time',
                    min: props.startDate,
                    max: props.endDate,
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef',
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 5
                        }
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        };
        return {
            basicOptions
        };
    };
    if (!chartDataRef.current) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading"
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "chart-foreground2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "chart-foreground",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Bar, {
                        className: "chart-foreground",
                        ref: chartRef,
                        width: 100,
                        height: 200,
                        data: chartData,
                        options: options
                    })
                })
            })
        })
    }));
});


/***/ })

};
;