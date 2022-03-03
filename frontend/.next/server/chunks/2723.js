"use strict";
exports.id = 2723;
exports.ids = [2723];
exports.modules = {

/***/ 2723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContainerIndex)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9797);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_badge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_ContainerStatusBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6374);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1515);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2250);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_api__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6532);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primereact_progressbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9318);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_9__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















function ContainerIndex() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.site;
    });
    const hosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.hosts.hosts;
    });
    const hostsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hosts);
    hostsRef.current = hosts;
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.containers;
    });
    // const [containers, setContainers] = useState(null);
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // const dispatch = useDispatch();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(items);
    itemsRef.current = items;
    const { 0: selectedRows , 1: setSelectedRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const selectedRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRows);
    selectedRowsRef.current = selectedRows;
    const { 0: filters1 , 1: setFilters1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: globalFilterValue1 , 1: setGlobalFilterValue1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
        }
        // loadData(router.query.id);
        initFilters1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref;
        let c1 = {
            ...containers
        };
        if (!activeHost && !(activeHost === null || activeHost === void 0 ? void 0 : activeHost.id)) {
            return;
        }
        if (!((ref = containers[activeHost.id]) === null || ref === void 0 ? void 0 : ref.containers)) {
            return;
        }
        // console.log('Refreshing containers, host list changed');
        c1 = containers[activeHost.id].containers;
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        setItems(data);
        setIsLoading(false);
    }, [
        activeHost,
        containers
    ]);
    // useEffect(() => {
    //   // Do unmounting stuff here
    //   return () => {
    //     if (socketRef.current) {
    //     }
    //   };
    // }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        // const socketName = 'conainters_list';
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getSocket */ .L.getSocket();
        // socket.on('conainters_list', (results) => {
        //   // if (results.status === 'success') {
        //   //   if (results.data) {
        //   //     const data = results.data;
        //   //   }
        //   // }
        // });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        socketRef.current.emit('docker', {
            command: 'listContainers',
            callback: 'containersIndexList',
            hostId: activeHostRef.current.id
        });
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);
    }
    const initFilters1 = ()=>{
        setFilters1({
            global: {
                value: null,
                matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.CONTAINS
            },
            name: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_13__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.CONTAINS
                    }
                ]
            },
            project: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_13__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.CONTAINS
                    }
                ]
            },
            containerId: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_13__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_13__.FilterMatchMode.CONTAINS
                    }
                ]
            }
        });
    };
    const onGlobalFilterChange1 = (e)=>{
        const value = e.target.value;
        let _filters1 = {
            ...filters1
        };
        _filters1.global.value = value;
        setFilters1(_filters1);
        setGlobalFilterValue1(value);
    };
    // if (isLoading) return <Spinner />;
    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load Container: ",
            error
        ]
    }));
    if (!containers) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Containers."
    }));
    if (containers.length === 0) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Containers."
    }));
    const nameTemplate = (rowData)=>{
        var ref, ref1, ref2, ref3, ref4;
        const progressBarCPUClass = 'leftMenu-progressbar ' + helpers_stats_helper__WEBPACK_IMPORTED_MODULE_17__/* .statsHelper.progressBarCPUClasses */ .Q.progressBarCPUClasses(rowData);
        let showCpu = ((ref = rowData.statsSummary) === null || ref === void 0 ? void 0 : ref.cpuUsage) > 0 ? true : false;
        if (rowData.running && showCpu && ((ref1 = site.userSettings) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.leftMenu) === null || ref2 === void 0 ? void 0 : ref2.showCpu)) {
            showCpu = true;
        } else {
            showCpu = false;
        }
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: "/containers/[id]",
                    as: `/containers/${rowData.id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "lightblue-color",
                        children: rowData.name
                    })
                }),
                showCpu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressbar__WEBPACK_IMPORTED_MODULE_16__.ProgressBar, {
                        tooltip: ((ref3 = rowData.statsSummary) === null || ref3 === void 0 ? void 0 : ref3.cpuUsage) + ' % CPU Usage',
                        className: progressBarCPUClass + ' mt-3',
                        value: Number((ref4 = rowData.statsSummary) === null || ref4 === void 0 ? void 0 : ref4.cpuUsage),
                        displayValueTemplate: ()=>{
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
                        }
                    })
                }),
                !showCpu && rowData.running && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 p-0 m-0 progressbar-blank"
                })
            ]
        }));
    };
    const idTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/containers/[id]",
                as: `/containers/${rowData.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: rowData.id
                })
            })
        }));
    };
    const containerIdTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/containers/[id]",
                as: `/containers/${rowData.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: rowData.containerId
                })
            })
        }));
    };
    const statusTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/containers/[id]",
                as: `/containers/${rowData.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: rowData.status
                })
            })
        }));
    };
    const projectTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/containers/[id]",
                as: `/containers/${rowData.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: rowData.project
                })
            })
        }));
    };
    const cpuTemplate = (rowData)=>{
        var ref;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/containers/[id]",
                as: `/containers/${rowData.id}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    children: [
                        (rowData === null || rowData === void 0 ? void 0 : (ref = rowData.statsSummary) === null || ref === void 0 ? void 0 : ref.cpuUsage) || 0,
                        "%"
                    ]
                })
            })
        }));
    };
    const memoryTemplate = (rowData)=>{
        var ref, ref5, ref6;
        if (!((ref = rowData.statsSummary) === null || ref === void 0 ? void 0 : ref.memoryUsage)) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "-"
            }));
        }
        // Mem: {c.statsSummary?.memoryUsage ? formatBytes.bytes(c.statsSummary.memoryUsage) : 0
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/containers/[id]",
                as: `/containers/${rowData.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: ((ref5 = rowData.statsSummary) === null || ref5 === void 0 ? void 0 : ref5.memoryUsage) ? helpers_format_bytes__WEBPACK_IMPORTED_MODULE_18__/* .formatBytes.bytes */ .t.bytes((rowData === null || rowData === void 0 ? void 0 : (ref6 = rowData.statsSummary) === null || ref6 === void 0 ? void 0 : ref6.memoryUsage) || 0) : 0
                })
            })
        }));
    };
    const runningTemplate = (rowData)=>{
        if (rowData.running) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: "/containers/[id]",
                    as: `/containers/${rowData.id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ContainerStatusBadge__WEBPACK_IMPORTED_MODULE_7__/* .ContainerStatusBadge */ .Q, {
                            className: "p-2 mr-2",
                            status: rowData.state
                        })
                    })
                })
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
        }
    };
    const deadTemplate = (rowData)=>{
        if (rowData.dead) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: "/containers/[id]",
                    as: `/containers/${rowData.id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_badge__WEBPACK_IMPORTED_MODULE_6__.Badge, {
                            severity: "danger"
                        })
                    })
                })
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_badge__WEBPACK_IMPORTED_MODULE_6__.Badge, {
                    severity: "info"
                })
            }));
        }
    };
    // const actionTemplate = (rowData) => {
    //   return (
    //     <>
    //       <Button
    //         label=""
    //         onClick={(e) => {
    //           confirm('removeImage', rowData, 'Remove ' + rowData.name + '?', e);
    //         }}
    //         className="p-button-secondary"
    //         icon="pi pi-trash"
    //       />
    //     </>
    //   );
    // };
    const removeContainer = (container)=>{
        var ref;
        socketRef.current.emit('docker', {
            command: 'remove',
            containerId: container.containerId,
            hostId: (ref = container.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_containers' + container.id,
            hook: 'removeContainer'
        });
    };
    const confirm = (action, image, title, target = null)=>{
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_15__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            target: (target === null || target === void 0 ? void 0 : target.currentTarget) ? target.currentTarget : null,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>{
                switch(action){
                    case 'removeContainer':
                        removeContainer(image);
                        break;
                    case 'removeSelected':
                        removeSelected();
                        break;
                    default:
                        break;
                }
            }
        });
    };
    const selectRows = (e)=>{
        setSelectedRows(e.value);
    };
    const removeSelected = ()=>{
        selectedRowsRef.current.forEach((container)=>{
            // console.log('Volume');
            if (container.running === false) {
                removeContainer(container);
            }
        });
        setSelectedRows(null);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12 p-0 mt-2 pr-1 grid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faTelevision,
                                        pull: "left",
                                        className: "fa-1x lightblue-color mt-0 pt-0",
                                        swapOpacity: true
                                    }),
                                    "Docker Containers"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-6 text-right pr-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "p-input-icon-left mr-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "pi pi-search"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, {
                                            value: globalFilterValue1,
                                            onChange: onGlobalFilterChange1,
                                            placeholder: "Keyword Search"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                    label: "Container",
                                    className: "p-button-secondary mr-2",
                                    icon: "fa fa-plus",
                                    onClick: ()=>router.push('/containers/create')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-button p-component p-button-secondary mt-1 p-2",
                                    label: "",
                                    onClick: ()=>loadData()
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faArrowRotateRight,
                                        className: "mt-0 p-1",
                                        swapOpacity: true
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTable, {
                    value: items,
                    stripedRows: true,
                    rowHover: true,
                    showGridlines: true,
                    selection: selectedRows,
                    onSelectionChange: (e)=>selectRows(e)
                    ,
                    paginator: true,
                    rows: 15,
                    totalRecords: items === null || items === void 0 ? void 0 : items.length,
                    dataKey: "id",
                    rowsPerPageOptions: [
                        10,
                        15,
                        20,
                        50,
                        100,
                        200
                    ],
                    sortMode: "multiple",
                    multiSortMeta: [
                        {
                            field: 'statsSummary.cpuUsage',
                            order: -1
                        },
                        {
                            field: 'statsSummary.memoryUsage',
                            order: -1
                        },
                        {
                            field: 'running',
                            order: -1
                        },
                        {
                            field: 'name',
                            order: 1
                        }, 
                    ],
                    responsiveLayout: "scroll",
                    // sortField="running"
                    // sortOrder={-1}
                    filters: filters1,
                    filterDisplay: "menu",
                    loading: isLoadingRef.current,
                    // loading={loading1}
                    // responsiveLayout="scroll"
                    globalFilterFields: [
                        'name',
                        'containerId'
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "id",
                            header: "Id",
                            body: idTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "name",
                            header: "Name",
                            body: nameTemplate,
                            filter: true,
                            filterPlaceholder: "Search by name",
                            style: {
                                minWidth: '12rem'
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "project",
                            header: "Project",
                            filter: true,
                            filterPlaceholder: "Search by project name",
                            style: {
                                minWidth: '12rem'
                            },
                            body: projectTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "running",
                            header: "Running",
                            align: "center",
                            body: runningTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "statsSummary.cpuUsage",
                            header: "CPU",
                            align: "center",
                            body: cpuTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "status",
                            header: "Status",
                            align: "center",
                            body: statusTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "statsSummary.memoryUsage",
                            header: "Memory",
                            align: "center",
                            body: memoryTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "dead",
                            header: "Dead",
                            align: "center",
                            body: deadTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            sortable: true,
                            field: "containerId",
                            filter: true,
                            filterPlaceholder: "Search by docker Id",
                            style: {
                                minWidth: '12rem'
                            },
                            header: "Docker Id",
                            body: containerIdTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                            selectionMode: "multiple",
                            headerStyle: {
                                width: '3em'
                            }
                        })
                    ]
                }),
                (selectedRows === null || selectedRows === void 0 ? void 0 : selectedRows.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 text-right pr-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_11__.Button, {
                        className: "mt-2 p-button-warning",
                        label: "Remove Selected",
                        icon: "fa fa-trash",
                        onClick: (e)=>confirm('removeSelected', null, 'Remove Selected Containers?', e)
                    })
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;