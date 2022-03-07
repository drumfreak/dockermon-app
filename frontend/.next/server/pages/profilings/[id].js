"use strict";
(() => {
var exports = {};
exports.id = 4166;
exports.ids = [4166];
exports.modules = {

/***/ 2670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5767);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_1__);



function Spinner() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 text-center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_1__.ProgressSpinner, {})
        })
    }));
}


/***/ }),

/***/ 8090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilingView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_JSONDataView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6345);
/* harmony import */ var services_profilings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1577);
/* harmony import */ var components_containers_charts_profiler_container_profiler_cpu_line_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4033);
/* harmony import */ var components_containers_charts_profiler_container_profiler_memory_line_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9731);
/* harmony import */ var components_containers_charts_profiler_container_profiler_disk_io_line_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(178);
/* harmony import */ var components_containers_charts_profiler_container_profiler_network_line_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9646);
/* harmony import */ var components_containers_charts_profiler_container_profiler_processes_bar_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2337);
/* harmony import */ var components_containers_charts_profiler_container_profiler_disk_pie_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7225);

/* eslint-disable no-unused-vars */ 




// import { useSelector } from 'react-redux';
// import _ from 'lodash';


// import { socketService } from '../../services/socket.service';







// import DockerProfilingView from './details';
function ProfilingView() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // const profilings = useSelector((state) => {
    //   return state.profilings;
    // });
    // const dispatch = useDispatch();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: showDetails , 1: setShowDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const showDetailsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showDetails);
    showDetailsRef.current = showDetails;
    const { 0: profilingId , 1: setProfilingId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const profilingIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(profilingId);
    profilingIdRef.current = profilingId;
    const { 0: profiling1 , 1: setProfiling  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const profilingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(profiling1);
    profilingRef.current = profiling1;
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const cpuChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const memoryChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const processesChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const networkChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const { 0: gridOption , 1: setGridOption  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('Grid');
    const gridOptions = [
        'Grid',
        'List'
    ];
    const { 0: chartAnimationTime , 1: setChartAnimationTime  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1100);
    const chartAnimationTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(chartAnimationTime);
    chartAnimationTimeRef.current = chartAnimationTime;
    const { 0: chartLineTension , 1: setChartLineTension  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0.038);
    const chartLineTensionRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(chartLineTension);
    chartLineTensionRef.current = chartLineTension;
    const _chartColors = {
        diskInput: 'purple',
        diskOutput: 'blue',
        cpu: 'cyan',
        memory: 'green',
        networkTx: 'orange',
        networkRx: 'red',
        processes: 'purple'
    };
    const { 0: chartColors  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_chartColors);
    const chartColorsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(chartColors);
    chartColorsRef.current = chartColors;
    const { 0: showCPUChart , 1: setShowCPUChart  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const showCPUChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showCPUChart);
    showCPUChartRef.current = showCPUChart;
    const { 0: showMemoryChart , 1: setShowMemoryChart  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const showMemoryChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showMemoryChart);
    showMemoryChartRef.current = showMemoryChart;
    const { 0: showDiskIOChart , 1: setShowDiskIOChart  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const showDiskIOChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showDiskIOChart);
    showDiskIOChartRef.current = showDiskIOChart;
    const { 0: showNetworkChart , 1: setShowNetworkChart  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const showNetworkChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showNetworkChart);
    showNetworkChartRef.current = showNetworkChart;
    const { 0: showProcessesChart , 1: setShowProcessesChart  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const showProcessesChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showProcessesChart);
    showProcessesChartRef.current = showProcessesChart;
    const { 0: showDiskSpaceChart , 1: setShowDiskSpaceChart  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const showDiskSpaceChartRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showDiskSpaceChart);
    showDiskSpaceChartRef.current = showDiskSpaceChart;
    const { 0: showChartOptions , 1: setShowChartOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const showChartOptionsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showChartOptions);
    showChartOptionsRef.current = showChartOptions;
    const { 0: sliderValue , 1: setSliderValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([
        0,
        1
    ]);
    const { 0: sliderRange , 1: setSliderRange  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([
        0,
        1
    ]);
    const { 0: dateRange , 1: setDateRange  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        starteDate: new Date(),
        endDate: new Date()
    });
    const dateRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(dateRange);
    dateRangeRef.current = dateRange;
    const chartData = {
        dates: [],
        cpu: [],
        memoryPercent: [],
        processes: [],
        diskRead: [],
        diskWrite: [],
        networkTx: [],
        networkRx: [],
        diskUsed: [],
        diskImage: [],
        diskLabels: [],
        diskUsage: []
    };
    const statsSummary = {
        diskRead: 0,
        diskWrite: 0,
        diskTotal: 0,
        diskTmpFSizes: 0,
        diskVolumeSize: 0,
        networkRx: 0,
        networkTx: 0,
        processes: 0,
        memoryLimit: 0,
        memoryUsage: 0,
        cpuUsage: 0,
        startDate: dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD HH:mm:ss'),
        endDate: dayjs__WEBPACK_IMPORTED_MODULE_6___default()().format('YYYY-MM-DD HH:mm:ss'),
        intervalCount: 0
    };
    // const [statsSummary, setStatsSummary] = useState(_statsSummary);
    const { 0: stats , 1: setStats  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        statsSummary: statsSummary,
        chartData: chartData,
        sample: {}
    });
    const statsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(stats);
    statsRef.current = stats;
    // const [socket, setSocket] = useState();
    // const socketRef = useRef(socket);
    // socketRef.current = socket;
    // const [socketLoaded, setSocketLoaded] = useState(false);
    // const usePrevious = (value) => {
    //   const ref = useRef();
    //   useEffect(() => {
    //     ref.current = value;
    //   });
    //   return ref.current;
    // };
    // const previousProfiling = usePrevious(profiling);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{
        if (router.query.id) {
            await setProfilingId(router.query.id);
            loadData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.query.id
    ]);
    async function loadData() {
        if (isLoadingRef.current) {
            setIsLoading(true);
        }
        if (!profilingRef.current) {
            const c = await services_profilings_service__WEBPACK_IMPORTED_MODULE_8__/* .profilingsService.getProfilingById */ .A.getProfilingById(profilingIdRef.current);
            // console.log(c);
            if ((c === null || c === void 0 ? void 0 : c.status) === 'success') {
                setProfiling(c.data);
                changeSliderRange([
                    0,
                    c.data.samples
                ]);
            // console.log('profilings', c.data);
            }
            setIsLoading(false);
        } else {
            buildMenuItems(profilingRef);
            if (isLoadingRef.current) {
                setIsLoading(false);
            }
        }
    }
    function buildMenuItems(c) {
        const menuItems = [];
        let profiling;
        if (c.current) {
            profiling = c.current;
        } else {
            profiling = c;
        }
        menuItems.push({
            label: 'Inspect',
            icon: 'fa fa-fw fa-eye',
            command: ()=>{
                inspectProfiling();
            }
        });
        if (!profiling.active) {
            menuItems.push({
                label: 'Remove',
                icon: 'fa fa-fw fa-power-off',
                command: (e)=>{
                    confirm('removeProfiling', 'Remove Profiling?', e);
                }
            });
        }
        setMenuItems(menuItems);
    }
    const confirm = (action, title, target = null)=>{
        var ref;
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            target: ((ref = target.originalEvent) === null || ref === void 0 ? void 0 : ref.currentTarget) ? target.originalEvent.currentTarget : null,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>{
                switch(action){
                    case 'removeProfiling':
                        removeProfiling();
                        break;
                }
            }
        });
    };
    function inspectProfiling() {
        setShowDetails(true);
        if (profilingRef === null || profilingRef === void 0 ? void 0 : profilingRef.current) {
        // socketRef.current.emit('docker', {
        //   command: 'inspectProfiling',
        //   profilingId: profilingRef.current.profilingId,
        //   callback: 'dockerResulsProfilings_' + profilingRef.current.id,
        //   hook: 'inspectProfiling',
        // });
        }
    }
    function removeProfiling() {
    // socketRef.current.emit('docker', {
    //   command: 'removeProfiling',
    //   profilingId: profilingRef.current.details.Id,
    //   callback: 'dockerResulsProfilings_' + profilingRef.current.id,
    //   hook: 'removeProfiling',
    // });
    }
    const toggleChart = (chart)=>{
        switch(chart){
            case 'cpu':
                setShowCPUChart(!showCPUChartRef.current);
                break;
            case 'memory':
                setShowMemoryChart(!showMemoryChartRef.current);
                break;
            case 'disk':
                setShowDiskIOChart(!showDiskIOChartRef.current);
                break;
            case 'network':
                setShowNetworkChart(!showNetworkChartRef.current);
                break;
            case 'processes':
                setShowProcessesChart(!showProcessesChartRef.current);
                break;
            case 'diskspace':
                setShowDiskSpaceChart(!showDiskSpaceChartRef.current);
                break;
            default:
                break;
        }
    };
    const updateCharts = async ()=>{
        if (cpuChartRef === null || cpuChartRef === void 0 ? void 0 : cpuChartRef.current) {
        // cpuChartRef.current.updateChart();
        }
        if (memoryChartRef === null || memoryChartRef === void 0 ? void 0 : memoryChartRef.current) {
        // memoryChartRef.current.updateChart();
        }
        if (processesChartRef === null || processesChartRef === void 0 ? void 0 : processesChartRef.current) {
        //  processesChartRef.current.updateChart();
        }
        if (networkChartRef === null || networkChartRef === void 0 ? void 0 : networkChartRef.current) {
        //  networkChartRef.current.updateChart();
        }
        return true;
    };
    const changeGridOptions = async (e)=>{
        setGridOption(e.value);
    };
    const changeSliderRange = async (range)=>{
        // console.log(range);
        const _dateRange = {
            ...dateRangeRef.current
        };
        _dateRange.startDate = new Date(profilingRef.current.chartData.dates[range[0]]);
        _dateRange.endDate = new Date(profilingRef.current.chartData.dates[range[1] - 1]);
        await setDateRange(_dateRange);
        await updateCharts();
        return;
    };
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load Profiling: ",
            error
        ]
    }));
    if (!router.query.id) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    if (!profiling1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "Profiling could not be found."
    }));
    const pollerGrid = gridOption === 'Grid' ? 'col-6' : 'col-12';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "grid col-12 p-0 m-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex col-10 p-0 m-0",
                                children: profiling1.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-2 text-right p-0 m-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    children: [
                                        "[",
                                        profiling1.id,
                                        "]"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex col-12 justify-content-end"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 p-0 card",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_4__.Menubar, {
                            className: "flex col-12 justify-content-end",
                            model: menuItems1
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: profiling1,
                        collapsed: true,
                        header: "Profiling Details"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 m1-2"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 m-0 p-0 grid",
                children: [
                    showCPUChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: pollerGrid,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_profiler_container_profiler_cpu_line_chart__WEBPACK_IMPORTED_MODULE_9__/* .ContainerProfilerCPULineChart */ .v, {
                            ref: cpuChartRef,
                            className: "m-4",
                            statsCPU: profiling1.chartData.cpu,
                            statsDates: profiling1.chartData.dates,
                            startDate: dateRange.startDate,
                            endDate: dateRange.endDate,
                            animationTime: chartAnimationTime,
                            lineTension: chartLineTension,
                            chartColor: chartColors.cpu
                        })
                    }),
                    showMemoryChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: pollerGrid,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_profiler_container_profiler_memory_line_chart__WEBPACK_IMPORTED_MODULE_10__/* .ContainerProfilerMemoryLineChart */ .i, {
                            ref: memoryChartRef,
                            className: "m-4",
                            statsMemory: profiling1.chartData.memoryPercent,
                            statsDates: profiling1.chartData.dates,
                            startDate: dateRange.startDate,
                            endDate: dateRange.endDate,
                            animationTime: chartAnimationTime,
                            lineTension: chartLineTension,
                            chartColor: chartColors.memory
                        })
                    }),
                    showDiskIOChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: pollerGrid,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_profiler_container_profiler_disk_io_line_chart__WEBPACK_IMPORTED_MODULE_11__/* .ContainerProfilerDiskIOLineChart */ .m, {
                            className: "m-4",
                            statsDiskInput: profiling1.chartData.diskWrite,
                            statsDiskOutput: profiling1.chartData.diskRead,
                            statsDates: profiling1.chartData.dates,
                            startDate: dateRange.startDate,
                            endDate: dateRange.endDate,
                            animationTime: chartAnimationTime,
                            lineTension: chartLineTension,
                            chartColorInput: chartColors.diskInput,
                            chartColorOutput: chartColors.diskOutput
                        })
                    }),
                    showNetworkChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: pollerGrid,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_profiler_container_profiler_network_line_chart__WEBPACK_IMPORTED_MODULE_12__/* .ContainerProfilerNetworkLineChart */ .O, {
                            ref: networkChartRef,
                            className: "m-4",
                            statsNetworkTx: profiling1.chartData.networkTx,
                            statsNetworkRx: profiling1.chartData.networkRx,
                            statsDates: profiling1.chartData.dates,
                            startDate: dateRange.startDate,
                            endDate: dateRange.endDate,
                            animationTime: chartAnimationTime,
                            lineTension: chartLineTension,
                            chartColorTx: chartColors.networkTx,
                            chartColorRx: chartColors.networkRx
                        })
                    }),
                    showProcessesChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: pollerGrid
                    }),
                    showDiskSpaceChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: pollerGrid,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_profiler_container_profiler_disk_pie_chart__WEBPACK_IMPORTED_MODULE_14__/* .ContainerProfilerDiskPieChart */ .t, {
                            className: "m-4",
                            statsDiskLabels: profiling1.diskLabels,
                            statsDiskUsage: profiling1.diskUsage,
                            statsDiskOther: profiling1.diskOther,
                            statsDiskType: profiling1.diskTypes,
                            startDate: dateRange.startDate,
                            endDate: dateRange.endDate,
                            animationTime: chartAnimationTime,
                            lineTension: chartLineTension
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4467:
/***/ ((module) => {

module.exports = require("chart.js");

/***/ }),

/***/ 104:
/***/ ((module) => {

module.exports = require("chartjs-adapter-date-fns");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4179:
/***/ ((module) => {

module.exports = require("primereact/confirmdialog");

/***/ }),

/***/ 7077:
/***/ ((module) => {

module.exports = require("primereact/dataview");

/***/ }),

/***/ 4130:
/***/ ((module) => {

module.exports = require("primereact/menubar");

/***/ }),

/***/ 1006:
/***/ ((module) => {

module.exports = require("primereact/panel");

/***/ }),

/***/ 5767:
/***/ ((module) => {

module.exports = require("primereact/progressspinner");

/***/ }),

/***/ 3749:
/***/ ((module) => {

module.exports = require("primereact/tabview");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ 5288:
/***/ ((module) => {

module.exports = require("react-json-tree");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4794:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1964:
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2473,6345,3389,3656,1577], () => (__webpack_exec__(8090)));
module.exports = __webpack_exports__;

})();