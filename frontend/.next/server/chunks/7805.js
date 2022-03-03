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
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6895);
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primereact_paginator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4355);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primereact_utils__WEBPACK_IMPORTED_MODULE_19__);

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
    const { 0: tableIsLoading , 1: setTableIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const tableIsLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(tableIsLoading);
    tableIsLoadingRef.current = tableIsLoading;
    // Paginator
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const currentPageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(currentPage);
    currentPageRef.current = currentPage;
    const { 0: pageInputTooltip , 1: setPageInputTooltip  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Press 'Enter' key to go to this page.");
    const { 0: tableFirst , 1: setTableFirst  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const tableFirstRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(tableFirst);
    tableFirstRef.current = tableFirst;
    const { 0: tableRows , 1: setTableRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(25);
    const tableRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(tableRows);
    tableRowsRef.current = tableRows;
    const { 0: totalRecords , 1: setTotalRecords  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const totalRecordsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(totalRecords);
    totalRecordsRef.current = totalRecords;
    const { 0: sortField , 1: setSortField  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('updatedAt');
    const sortFieldRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(sortField);
    sortFieldRef.current = sortField;
    const { 0: tableSortOrder , 1: setTableSortOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const tableSortOrderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(tableSortOrder);
    tableSortOrderRef.current = tableSortOrder;
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
        console.log('contentTypeRef.current', contentTypeRef.current);
        const where = {
            limit: tableRowsRef.current,
            skip: tableFirstRef.current,
            sortKey: sortFieldRef.current,
            sortType: 'DESC'
        };
        if (contentTypeRef.current) {
            where.contentType = contentTypeRef.current;
        }
        if (contentIdRef.current) {
            where.contentId = contentIdRef.current;
        }
        const c = await services_activity_logs_service__WEBPACK_IMPORTED_MODULE_7__/* .activityLogsService.getActivityLogs */ .u.getActivityLogs(where);
        if ((c === null || c === void 0 ? void 0 : c.status) === 'success') {
            await setItems(c.data);
            await setTotalRecords(c.totalCount);
            // console.log('activityLogs', c);
            setTimeout(()=>{
                processData();
            }, 100);
        }
        setIsLoading(false);
        setTableIsLoading(true);
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
        setTableIsLoading(false);
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
    // const sortChange = (event) => {
    //   // event.preventDefault();
    //   console.log('Sort Change', event);
    // };
    const handlePageChange = (event)=>{
        setTableIsLoading(true);
        if (event.rows !== tableRowsRef.current) {
            setTimeout(()=>{
                setTableRows(event.rows);
                setTableFirst(0);
                setCurrentPage(1);
                loadData();
            }, 100);
        } else {
            setTimeout(()=>{
                setTableFirst(event.first);
                setCurrentPage(event.page + 1);
                loadData();
            });
        }
    };
    const onPageInputKeyDown = (event, options)=>{
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            } else {
                const first = currentPage ? options.rows * (page - 1) : 0;
                setTableFirst(first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };
    const onPageInputChange = (event)=>{
        setCurrentPage(event.target.value);
    };
    const template1 = {
        layout: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport',
        FirstPageLink: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                disabled: options.disabled,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "p-3",
                        children: "<<"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_18__.Ripple, {})
                ]
            }));
        },
        PrevPageLink: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                disabled: options.disabled,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "p-3",
                        children: "Previous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_18__.Ripple, {})
                ]
            }));
        },
        NextPageLink: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                disabled: options.disabled,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "p-3",
                        children: "Next"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_18__.Ripple, {})
                ]
            }));
        },
        PageLinks: (options)=>{
            if (options.view.startPage === options.page && options.view.startPage !== 0 || options.view.endPage === options.page && options.page + 1 !== options.totalPages) {
                const className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_19__.classNames)(options.className, {
                    'p-disabled': true
                });
            // return (
            //   <span className={className} style={{ userSelect: 'none' }}>
            //     ...
            //   </span>
            // );
            }
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                children: [
                    options.page + 1,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_18__.Ripple, {})
                ]
            }));
        },
        LastPageLink: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                disabled: options.disabled,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "p-3",
                        children: ">>"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_18__.Ripple, {})
                ]
            }));
        },
        RowsPerPageDropdown: (options)=>{
            const dropdownOptions = [
                {
                    label: 10,
                    value: 10
                },
                {
                    label: 15,
                    value: 15
                },
                {
                    label: 25,
                    value: 25
                },
                {
                    label: 50,
                    value: 50
                },
                {
                    label: 100,
                    value: 100
                },
                {
                    label: 150,
                    value: 150
                }, 
            ];
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_17__.Dropdown, {
                value: options.value,
                options: dropdownOptions,
                onChange: options.onChange
            }));
        },
        CurrentPageReport: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "mx-3",
                style: {
                    color: 'var(--text-color)',
                    userSelect: 'none'
                },
                children: [
                    "Go to ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, {
                        size: "2",
                        className: "ml-1",
                        value: currentPage,
                        tooltip: pageInputTooltip,
                        onKeyDown: (e)=>onPageInputKeyDown(e, options)
                        ,
                        onChange: onPageInputChange
                    })
                ]
            }));
        }
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faList12,
                                        pull: "left",
                                        className: "fa-1x lightblue-color mt-0 pt-0",
                                        swapOpacity: true
                                    }),
                                    "Activity Logs"
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
                    // selection={selectedRows}
                    // onSelectionChange={(e) => selectRows(e)}
                    // paginator
                    rows: tableRows,
                    totalRecords: items === null || items === void 0 ? void 0 : items.length,
                    dataKey: "id",
                    sortMode: "single",
                    // responsiveLayout="scroll"
                    sortField: sortField,
                    sortOrder: tableSortOrder,
                    // filters={filters1}
                    // filterDisplay="menu"
                    // loading={isLoadingRef.current}
                    loading: tableIsLoading,
                    // responsiveLayout="scroll"
                    globalFilterFields: [
                        'name',
                        'contentId',
                        'action'
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            style: {
                                width: '220px'
                            },
                            field: "updatedAt",
                            header: "Date",
                            body: dateTemplate
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            style: {
                                width: '220px'
                            },
                            field: "host.name",
                            body: hostTemplate,
                            header: "Host"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            style: {
                                width: '150px'
                            },
                            field: "contentType",
                            header: "Type",
                            align: "left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            field: "contentName",
                            body: nameTemplate,
                            header: "Name",
                            align: "left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                            style: {
                                width: '320px'
                            },
                            field: "action",
                            body: actionTemplate,
                            header: "action",
                            align: "center"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_paginator__WEBPACK_IMPORTED_MODULE_16__.Paginator, {
                    template: template1,
                    first: tableFirst,
                    rows: tableRows,
                    totalRecords: totalRecords,
                    onPageChange: handlePageChange
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