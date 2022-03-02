"use strict";
exports.id = 7805;
exports.ids = [7805];
exports.modules = {

/***/ 7805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivityLogIndex)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2250);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_activity_logs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1961);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primereact_timeline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3106);
/* harmony import */ var primereact_timeline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primereact_timeline__WEBPACK_IMPORTED_MODULE_15__);

/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable no-unused-vars */ 














function ActivityLogIndex(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const { 0: showTimeline  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showTimelineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showTimeline);
    showTimelineRef.current = showTimeline;
    const { 0: contentType , 1: setContentType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const contentTypeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(contentType);
    contentTypeRef.current = contentType;
    const { 0: contentId , 1: setContentId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const contentIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(contentId);
    contentIdRef.current = contentId;
    const { 0: containerId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containerId);
    containerIdRef.current = containerId;
    // const activityLogs = useSelector((activityLogs) => {
    //   return state.activityLogs;
    // });
    const { 0: socket , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket);
    socketRef.current = socket;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(items);
    itemsRef.current = items;
    const { 0: timelineItems , 1: setTimeItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const timelineItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
    timelineItemsRef.current = timelineItems;
    const { 0: selectedRows , 1: setSelectedRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const selectedRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRows);
    selectedRowsRef.current = selectedRows;
    const { 0: filters1 , 1: setFilters1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: globalFilterValue1 , 1: setGlobalFilterValue1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const events = [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!socketLoaded) {
        // await loadSocket();
        } // loadData();
        if (props.contentTypeLogs) {
            setContentType(props.contentTypeLogs);
        }
        if (props.contentId) {
            setContentId(props.contentId);
        }
        setTimeout(()=>{
            initFilters1();
            loadData();
        }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!socketLoaded) {
        // await loadSocket();
        } // loadData();
        if (props.contentTypeLogs) {
            setContentType(props.contentTypeLogs);
        }
        if (props.contentId) {
            setContentId(props.contentId);
        }
        setTimeout(()=>{
            initFilters1();
            loadData();
        }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.contentId
    ]);
    // useEffect(() => {
    //   const c1 = { ...activityLogs };
    //   const data = Object.keys(c1).map((key) => c1[key]);
    //   setIsLoading(true);
    //   data.sort((a, b) => {
    //     if (!a.name) {
    //       a.name = 'Unknown';
    //     }
    //     return a.name.localeCompare(b.name);
    //   });
    //   setItems(data);
    //   setIsLoading(false);
    // }, [activityLogs]);
    // useEffect(() => {
    //   // Do unmounting stuff here
    //   return () => {
    //     if (socketRef?.current) {
    //       socketRef.current.removeListener('activityLogs_list');
    //     }
    //   };
    // }, []);
    // async function loadSocket() {
    //   if (socketLoaded) return;
    //   setSocketLoaded(true);
    //   // const socketName = 'activityLogs_list';
    //   const socket = await socketService.getSocket();
    //   socket.on('activityLogs_list', (results) => {
    //     if (results.status === 'success') {
    //       if (results.data) {
    //         const data = results.data;
    //         setItems(data);
    //       }
    //     }
    //   });
    //   setSocket(socket);
    //   return socket;
    // }
    async function loadData() {
        const where = {
            limit: 15,
            sortKey: 'activityLogs.updatedAt',
            sortType: 'DESC'
        };
        if (contentType) {
            where.contentType = contentType;
        }
        if (contentId) {
            where.contentId = contentId;
        }
        const c = await services_activity_logs_service__WEBPACK_IMPORTED_MODULE_7__/* .activityLogsService.getActivityLogs */ .u.getActivityLogs(where);
        if ((c === null || c === void 0 ? void 0 : c.status) === 'success') {
            await setItems(c.data);
            console.log('activityLogs', c.data);
            setTimeout(()=>{
                processData();
            }, 1000);
        }
        setIsLoading(false);
    }
    async function processData() {
        var ref;
        if (((ref = itemsRef.current) === null || ref === void 0 ? void 0 : ref.length) > 0) {
            const tItems = itemsRef.current.map((tItem)=>{
                return {
                    status: tItem.contentName + tItem.action,
                    date: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(tItem.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
                    icon: 'pi pi-shopping-cart',
                    color: '#9C27B0'
                };
            });
            // console.log(tItems);
            if (tItems) {
                timelineItemsRef.current = tItems;
                setTimeItems(tItems);
            }
        }
    }
    // if (isLoading) return <Spinner />;
    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load ActivityLogs: ",
            error
        ]
    }));
    // if (!activityLogs) return <div>No ActivityLogs.</div>;
    // if (activityLogs.length === 0) return <div>No ActivityLogs.</div>;
    const initFilters1 = ()=>{
        setFilters1({
            global: {
                value: null,
                matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS
            },
            name: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS
                    }
                ]
            },
            project: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS
                    }
                ]
            },
            containerId: {
                operator: primereact_api__WEBPACK_IMPORTED_MODULE_4__.FilterOperator.AND,
                constraints: [
                    {
                        value: null,
                        matchMode: primereact_api__WEBPACK_IMPORTED_MODULE_4__.FilterMatchMode.CONTAINS
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
    const dateTemplate = (rowData)=>{
        const contentLink = '/activity/' + rowData.id;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: contentLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "lightblue-color",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(rowData.updatedAt).format('MM/DD/YYYY - h:mm:ss a')
                    })
                })
            })
        }));
    };
    const nameTemplate = (rowData)=>{
        const contentLink = '/' + rowData.contentType + '/' + rowData.contentId;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: contentLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "lightblue-color",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: rowData.contentName
                    })
                })
            })
        }));
    };
    const hostTemplate = (rowData)=>{
        // console.log(rowData.host);
        // // let hostId = (rowData.host?.id) ? rowData.host.id : null;
        // hostId = (!hostId && rowData.hostId) ? rowData.hostId : null;
        if (!rowData.host) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
        }
        const contentLink = '/hosts/' + rowData.host.id;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                tooltip: 'View ' + rowData.host.name,
                href: contentLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "lightblue-color",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: rowData.host.name
                    })
                })
            })
        }));
    };
    const actionTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: rowData.action
        }));
    };
    const sizeTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: rowData.samples
        }));
    };
    const buttonTemplate = (rowData)=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_10__.Button, {
                label: "",
                onClick: (e)=>{
                    confirm('removeActivityLog', rowData, 'Remove ' + rowData.name + '?', e);
                },
                className: "p-button-secondary",
                icon: "pi pi-trash"
            })
        }));
    };
    const removeActivityLog = (activityLog)=>{
        socketRef.current.emit('docker', {
            command: 'removeActivityLog',
            activityLogId: activityLog.activityLogId,
            hostId: activeHostRef.current.id,
            callback: 'dockerResuls_activityLogs' + activityLog.id,
            hook: 'removeActivityLog'
        });
    };
    const confirm = (action, activityLog, title, target = null)=>{
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            target: (target === null || target === void 0 ? void 0 : target.currentTarget) ? target.currentTarget : null,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>{
                switch(action){
                    case 'removeActivityLog':
                        removeActivityLog(activityLog);
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
        selectedRowsRef.current.forEach((activityLog)=>{
            var ref;
            // console.log('ActivityLog');
            if (((ref = activityLog.containers) === null || ref === void 0 ? void 0 : ref.length) === 0) {
                removeActivityLog(activityLog);
            }
        });
        setSelectedRows(null);
    };
    // if (items?.length === 0) return <Spinner />;
    // const nitems = (itemsRef.current?.length > 0) ? itemsRef.current.slice(0, 100) : [];
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFolder,
                                        pull: "left",
                                        className: "fa-1x lightblue-color mt-0 pt-0",
                                        swapOpacity: true
                                    }),
                                    "Activity Logs 234"
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "p-button p-component p-button-secondary mt-1 p-2",
                                    label: "",
                                    onClick: ()=>loadData()
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faArrowRotateRight,
                                        className: "mt-0 p-1",
                                        swapOpacity: true
                                    })
                                })
                            ]
                        })
                    ]
                }),
                showTimeline && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            children: "Timeline"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_timeline__WEBPACK_IMPORTED_MODULE_15__.Timeline, {
                            value: timelineItems,
                            layout: "vertical",
                            align: "top",
                            content: (item)=>item.status + ' ' + item.date
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTable, {
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
                    sortField: "updatedAt",
                    sortOrder: -1,
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            sortable: true,
                            field: "updatedAt",
                            header: "Date",
                            body: dateTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            sortable: true,
                            field: "host.name",
                            body: hostTemplate,
                            header: "Host",
                            filter: true,
                            filterPlaceholder: "Search by host",
                            align: "left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            sortable: true,
                            field: "contentName",
                            body: nameTemplate,
                            header: "Name",
                            filter: true,
                            filterPlaceholder: "Search by name",
                            align: "left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            sortable: true,
                            field: "action",
                            body: actionTemplate,
                            header: "action",
                            filter: true,
                            filterPlaceholder: "Search by action",
                            align: "left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            field: "action",
                            body: buttonTemplate,
                            header: "action",
                            align: "left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            selectionMode: "multiple",
                            headerStyle: {
                                width: '3em'
                            }
                        })
                    ]
                }),
                (selectedRows === null || selectedRows === void 0 ? void 0 : selectedRows.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 text-right pr-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_10__.Button, {
                        className: "mt-2 p-button-warning",
                        label: "Remove Selected",
                        icon: "fa fa-trash",
                        onClick: (e)=>confirm('removeSelected', null, 'Remove Selected Activity Logs?', e)
                    })
                })
            ]
        })
    }));
};


/***/ })

};
;