"use strict";
(() => {
var exports = {};
exports.id = 7473;
exports.ids = [7473];
exports.modules = {

/***/ 7862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HostIndex)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1515);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2250);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primereact_togglebutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8673);
/* harmony import */ var primereact_togglebutton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_togglebutton__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_6__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function HostIndex() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const hosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.hosts.hosts;
    });
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(items);
    itemsRef.current = items;
    const { 0: selectedRows , 1: setSelectedRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const selectedRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRows);
    selectedRowsRef.current = selectedRows;
    const { 0: filters1 , 1: setFilters1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: globalFilterValue1 , 1: setGlobalFilterValue1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
        } // loadData();
        initFilters1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const c1 = {
            ...hosts
        };
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        setIsLoading(true);
        data.sort((a, b)=>{
            if (!a.name) {
                a.name = 'Unknown';
            }
            return a.name.localeCompare(b.name);
        });
        setItems(data);
        setIsLoading(false);
    }, [
        hosts
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
                socketRef.current.removeListener('hosts_list');
                socketRef.current.removeListener('dockerResuls_hosts');
            }
        };
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        // const socketName = 'hosts_list';
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_6__/* .socketService.getSocket */ .L.getSocket();
        socket.on('hosts_list', (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    const data = results.data;
                    setItems(data);
                }
            }
        });
        socket.on('dockerResuls_hosts', (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    // const data = results.data;
                    // setItems(data);
                    updateHosts();
                    loadData();
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        if (!socketRef.current) return;
        // await dispatch(resetImages());
        socketRef.current.emit('hosts', {
            command: 'listHosts',
            callback: 'hostsList'
        });
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);
    }
    // if (isLoading) return <Spinner />;
    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load Hosts: ",
            error
        ]
    }));
    // if (!hosts) return <div>No Hosts.</div>;
    // if (hosts.length === 0) return <div>No Hosts.</div>;
    const initFilters1 = ()=>{
        setFilters1({
            global: {
                value: null,
                matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_11__.FilterMatchMode.CONTAINS
            },
            name: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_11__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_11__.FilterMatchMode.CONTAINS
                    }
                ]
            },
            project: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_11__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_11__.FilterMatchMode.CONTAINS
                    }
                ]
            },
            containerId: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_11__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_11__.FilterMatchMode.CONTAINS
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
    const nameTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: "/hosts/[id]",
                as: `/hosts/${rowData.id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "lightblue-color",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: rowData.name
                    })
                })
            })
        }));
    };
    // const statusTemplate = (rowData) => {
    //   if (rowData?.containers?.length > 0) {
    //     return (
    //       <>
    //         <Link href="/hosts/[id]" as={`/hosts/${rowData.id}`}>
    //           <a>
    //             <Badge size="" value="In Use" severity="success"></Badge>
    //           </a>
    //         </Link>
    //       </>
    //     );
    //   } else {
    //     return <div>{rowData.containers.length}</div>;
    //   }
    // };
    // const sizeTemplate = (rowData) => {
    //   if (rowData.fileSize) {
    //     return <>{formatBytes.bytes(Number(rowData.fileSize))}</>;
    //   } else {
    //     return <div>{formatBytes.bytes(Number(rowData.fileSize))}</div>;
    //   }
    // };
    const activeTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_togglebutton__WEBPACK_IMPORTED_MODULE_14__.ToggleButton, {
                className: "m-auto mr-2",
                tooltip: "Toggle Host Active / Inactive",
                checked: rowData.active,
                onChange: (e)=>{
                    if (rowData.active) {
                        confirm('disableHost', rowData, 'Deactivate ' + rowData.name + '?', e);
                    } else {
                        confirm('enableHost', rowData, 'Activate ' + rowData.name + '?', e);
                    }
                },
                onLabel: "Active",
                offLabel: "Inactive",
                onIcon: "pi pi-check",
                offIcon: "pi pi-times"
            })
        }));
    };
    const protectedTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: rowData.protected === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                tooltip: "Host is Active",
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCheck
            })
        }));
    };
    const windowsTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: rowData.windowsHost === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                tooltip: "Windows Docker Host",
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faCheck
            })
        }));
    };
    const actionTemplate = (rowData)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                    label: "",
                    tooltip: "Remove this Host",
                    onClick: (e)=>{
                        confirm('removeHost', rowData, 'Remove ' + rowData.name + '?', e);
                    },
                    className: "p-button-secondary ml-3",
                    icon: "pi pi-trash"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                    label: "",
                    tooltip: "Edit this host",
                    onClick: ()=>{
                        router.push('/hosts/edit?id=' + rowData.id);
                    },
                    className: "p-button-secondary ml-3",
                    icon: "fa fa-edit"
                })
            ]
        }));
    };
    const removeHost = (host)=>{
        socketRef.current.emit('hosts', {
            command: 'removeHost',
            host: host,
            callback: 'dockerResuls_hosts',
            hook: 'removeHost'
        });
    };
    const disableHost = (host)=>{
        socketRef.current.emit('hosts', {
            command: 'disableHost',
            host: host,
            callback: 'dockerResuls_hosts',
            hook: 'disableHost'
        });
    };
    const enableHost = (host)=>{
        socketRef.current.emit('hosts', {
            command: 'enableHost',
            host: host,
            callback: 'dockerResuls_hosts',
            hook: 'enableHost'
        });
    };
    const confirm = (action, host, title, target = null)=>{
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_8__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            target: (target === null || target === void 0 ? void 0 : target.currentTarget) ? target.currentTarget : null,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>{
                switch(action){
                    case 'removeHost':
                        removeHost(host);
                        break;
                    case 'removeSelected':
                        removeSelected();
                        break;
                    case 'disableSelected':
                        disableSelected();
                        break;
                    case 'enableSelected':
                        enableSelected();
                        break;
                    case 'disableHost':
                        disableHost(host);
                        break;
                    case 'enableHost':
                        enableHost(host);
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
        selectedRowsRef.current.forEach((host)=>{
            var ref;
            if (((ref = host.containers) === null || ref === void 0 ? void 0 : ref.length) === 0) {
                removeHost(host);
            }
        });
        setSelectedRows(null);
    };
    const disableSelected = ()=>{
        selectedRowsRef.current.forEach((host)=>{
            if (host) {
                disableHost(host);
            }
        });
        setSelectedRows(null);
    };
    const enableSelected = ()=>{
        selectedRowsRef.current.forEach((host)=>{
            if (host) {
                enableHost(host);
            }
        });
        setSelectedRows(null);
    };
    function updateHosts() {
        if (!socketRef.current) return;
        socketRef.current.emit('hosts', {
            command: 'listHosts',
            callback: 'hostsList'
        });
    }
    // if (items?.length === 0) return <Spinner />;
    // const nitems = (itemsRef.current?.length > 0) ? itemsRef.current.slice(0, 100) : [];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-12 p-0 m-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 p-0 m-0 pr-1 grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faFolder,
                                    pull: "left",
                                    className: "fa-1x lightblue-color mt-0 pt-0",
                                    swapOpacity: true
                                }),
                                "Docker Hosts"
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                label: "Host",
                                className: "p-button-secondary mr-2",
                                icon: "fa fa-plus",
                                onClick: ()=>router.push('/hosts/create')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "p-button p-component p-button-secondary mt-1 p-2",
                                label: "",
                                onClick: ()=>loadData()
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__.faArrowRotateRight,
                                    className: "mt-0 p-1",
                                    swapOpacity: true
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {
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
                sortMode: "single",
                responsiveLayout: "scroll",
                sortField: "name",
                sortOrder: 1,
                filters: filters1,
                filterDisplay: "menu",
                loading: isLoadingRef.current,
                // loading={loading1}
                // responsiveLayout="scroll"
                globalFilterFields: [
                    'name',
                    'imageId',
                    'tag'
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        sortable: true,
                        field: "name",
                        header: "Name",
                        filter: true,
                        filterPlaceholder: "Search by name",
                        body: nameTemplate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        sortable: true,
                        field: "connectionType",
                        header: "Type",
                        align: "center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        sortable: true,
                        field: "ipAddress",
                        header: "IP / Host",
                        align: "left"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        sortable: true,
                        field: "port",
                        header: "Port",
                        align: "right"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        sortable: true,
                        field: "windowsHost",
                        header: "Windows Host",
                        body: windowsTemplate,
                        align: "center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        sortable: true,
                        field: "protected",
                        header: "Protected",
                        body: protectedTemplate,
                        align: "center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        sortable: true,
                        field: "active",
                        header: "Active",
                        body: activeTemplate,
                        align: "center"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        field: "id",
                        header: "Actions",
                        align: "center",
                        body: actionTemplate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                        selectionMode: "multiple",
                        headerStyle: {
                            width: '3em'
                        }
                    })
                ]
            }),
            (selectedRows === null || selectedRows === void 0 ? void 0 : selectedRows.length) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 text-right pr-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                        className: "mt-2 p-button-success",
                        label: "Enable Selected",
                        icon: "fa fa-trash",
                        onClick: (e)=>confirm('enableSelected', null, 'Enable Selected Hosts?', e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                        className: "mt-2 ml-2 p-button-warning",
                        label: "Disable Selected",
                        icon: "fa fa-trash",
                        onClick: (e)=>confirm('disableSelected', null, 'Disable Selected Hosts?', e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                        className: "mt-2 ml-2 p-button-danger",
                        label: "Remove Selected",
                        icon: "fa fa-trash",
                        onClick: (e)=>confirm('removeSelected', null, 'Remove Selected Hosts?', e)
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2250:
/***/ ((module) => {

module.exports = require("primereact/api");

/***/ }),

/***/ 1088:
/***/ ((module) => {

module.exports = require("primereact/button");

/***/ }),

/***/ 8145:
/***/ ((module) => {

module.exports = require("primereact/column");

/***/ }),

/***/ 4179:
/***/ ((module) => {

module.exports = require("primereact/confirmdialog");

/***/ }),

/***/ 7447:
/***/ ((module) => {

module.exports = require("primereact/datatable");

/***/ }),

/***/ 9093:
/***/ ((module) => {

module.exports = require("primereact/inputtext");

/***/ }),

/***/ 8673:
/***/ ((module) => {

module.exports = require("primereact/togglebutton");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,1515], () => (__webpack_exec__(7862)));
module.exports = __webpack_exports__;

})();