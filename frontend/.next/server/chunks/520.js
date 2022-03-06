"use strict";
exports.id = 520;
exports.ids = [520];
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

/***/ 520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1515);
/* harmony import */ var components_JSONDataView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6345);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2670);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_hosts_HostStatusBadge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9000);
/* harmony import */ var _components_main_dashboard_host_summary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9238);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_4__, _components_main_dashboard_host_summary__WEBPACK_IMPORTED_MODULE_10__]);
([services_socket_service__WEBPACK_IMPORTED_MODULE_4__, _components_main_dashboard_host_summary__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable react-hooks/exhaustive-deps */ 











function MainDashboard(props) {
    var ref4, ref1, ref2, ref3;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const { 0: currentHost , 1: setCurrentHost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const currentHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(currentHost);
    currentHostRef.current = currentHost;
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(items);
    itemsRef.current = items;
    const { 0: dockerInfo , 1: setDockerInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerInfoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerInfo);
    dockerInfoRef.current = dockerInfo;
    const { 0: dockerVersion , 1: setDockerVersion  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerVersionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerVersion);
    dockerVersionRef.current = dockerVersion;
    // const [dockerUsage, setDockerUsage] = useState();
    // const dockerUsageRef = useRef(dockerUsage);
    // dockerUsageRef.current = dockerUsage;
    const { 0: dockerPing , 1: setDockerPing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerPingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerPing);
    dockerPingRef.current = dockerPing;
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const config = {
        system: {
            kernelMemory: true,
            memoryLimit: true,
            swapLimit: true,
            cpuShares: true,
            cpuSet: true,
            pidsLimit: true,
            containers: 0,
            containersRunning: 0,
            containersPaused: 0,
            containersStopped: 0,
            images: 0,
            memTotal: 0,
            dockerRootdir: '/var/lib/docker',
            httpProxy: '',
            httpsProxy: '',
            serverVersion: '',
            cpuNum: 0
        },
        version: {
            platform: 'Docker',
            version: null,
            apiVersion: null,
            minApiVersion: null,
            gitCommit: null,
            os: null,
            arch: null,
            kernelVersion: null,
            experimental: null,
            buildTime: null
        },
        ping: null
    };
    const showSummaryPanel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: system , 1: setSystem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(config);
    const systemRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(system);
    systemRef.current = system;
    const hosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.hosts.hosts;
    });
    const hostsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hosts);
    hostsRef.current = hosts;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
        } // loadData();
        setTimeout(()=>loadData()
        , 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        currentHostRef.current
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        var ref;
        if ((ref = props.host) === null || ref === void 0 ? void 0 : ref.id) {
            setCurrentHost(props.host);
        } else {
            if (activeHostRef.current) {
                setCurrentHost(activeHostRef.current);
            }
        }
    }, [
        props.host,
        activeHostRef.current
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // Do unmounting stuff here
    // console.log('Refreshing');
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
                const socketName = 'mainDashboardResults';
                socketRef.current.removeListener(socketName);
            }
        };
    }, []);
    // useEffect(() => {
    // }, [hosts]);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'mainDashboardResults';
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_4__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            // console.log('Got result', results);
            if (results.status === 'success') {
                if (results.data) {
                    const data = results.data;
                    switch(results.hook){
                        case 'dockerInfo':
                            processDockerInfo(results.data);
                            break;
                        case 'dockerVersion':
                            processDockerVersion(results.data);
                            break;
                        case 'dockerUsage':
                            break;
                        case 'dockerPing':
                            processDockerPing(results.data);
                            break;
                    }
                    setItems(data);
                    buildMenuItems();
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        var ref;
        if (!(currentHostRef === null || currentHostRef === void 0 ? void 0 : (ref = currentHostRef.current) === null || ref === void 0 ? void 0 : ref.id)) return;
        if (!socketRef.current) return;
        // await dispatch(resetImages());
        setIsLoading(true);
        socketRef.current.emit('docker', {
            command: 'dockerInfo',
            callback: 'mainDashboardResults',
            hook: 'dockerInfo',
            hostId: currentHostRef.current.id
        });
        socketRef.current.emit('docker', {
            command: 'dockerPing',
            callback: 'mainDashboardResults',
            hook: 'dockerPing',
            hostId: currentHostRef.current.id
        });
        socketRef.current.emit('docker', {
            command: 'dockerVersion',
            callback: 'mainDashboardResults',
            hook: 'dockerVersion',
            hostId: currentHostRef.current.id
        });
        // socketRef.current.emit('docker', {
        //   command: 'dockerUsage',
        //   callback: 'mainDashboardResults',
        //   hook: 'dockerUsage',
        //   hostId: activeHostRef.current.id,
        // });
        setTimeout(()=>{
            setIsLoading(false);
        }, 1000);
    }
    async function buildMenuItems() {
        const menuItems = [];
        // let container;
        let className = '';
        // if (c?.current) {
        //   container = c.current;
        // } else {
        //   container = c;
        // }
        // if (!c) {
        //   return;
        // }
        menuItems.push({
            label: 'Create Volume',
            icon: 'fa fa-plus',
            tooltip: 'Create Volume.',
            className: className,
            command: ()=>{
                router.push('/volumes/create');
            // toggleRename();
            // confirm('openLogs', 'Open Terminal?', e);
            }
        });
        menuItems.push({
            label: 'View Volumes',
            icon: 'fa fa-fw fa-list',
            tooltip: 'View Volumes.',
            className: className,
            command: ()=>{
                router.push('/volumes');
            // toggleRename();
            // confirm('openLogs', 'Open Terminal?', e);
            }
        });
        menuItems.push({
            label: 'Create Image',
            icon: 'fa fa-plus',
            tooltip: 'Create Image.',
            className: className,
            command: ()=>{
                router.push('/images/create');
            // toggleRename();
            // confirm('openLogs', 'Open Terminal?', e);
            }
        });
        menuItems.push({
            label: 'View Images',
            icon: 'fa fa-fw fa-list',
            tooltip: 'View Image.',
            className: className,
            command: ()=>{
                router.push('/images');
            // toggleRename();
            // confirm('openLogs', 'Open Terminal?', e);
            }
        });
        menuItems.push({
            label: 'Create Container',
            icon: 'fa fa-fw fa-tv',
            tooltip: 'Create Container.',
            className: className,
            command: ()=>{
                router.push('/containers/create');
            // toggleRename();
            // confirm('openLogs', 'Open Terminal?', e);
            }
        });
        menuItems.push({
            label: 'View Containers',
            icon: 'fa fa-fw fa-list',
            tooltip: 'View Containers.',
            className: className,
            command: ()=>{
                router.push('/containers');
            // toggleRename();
            // confirm('openLogs', 'Open Terminal?', e);
            }
        });
        // className = !containerView?.showEditName ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        // menuItems.push({
        //   label: 'Edit',
        //   icon: 'fa fa-fw fa-edit',
        //   items: [
        //     {
        //       label: 'Rename',
        //       icon: 'fa fa-fw fa-file-signature',
        //       tooltip: 'Rename Container.',
        //       className: className,
        //       command: () => {
        //         // toggleRename();
        //         // confirm('openLogs', 'Open Terminal?', e);
        //       },
        //     },
        //     {
        //       label: 'Resources',
        //       tooltip: 'Edit Resources',
        //       icon: 'fa fa-fw fa-memory',
        //       command: () => {
        //         // toggleEditResources();
        //       },
        //     },
        //   ],
        // });
        setMenuItems(menuItems);
        setIsLoading(false);
    }
    async function processDockerInfo(data) {
        // console.log('docker info');
        setDockerInfo(data);
    }
    async function processDockerVersion(data) {
        // console.log('docker version');
        setDockerVersion(data);
    }
    // async function processDockerUsage(data) {
    //   console.log('docker usage');
    //   setDockerUsage(data);
    // }
    async function processDockerPing(data) {
        // console.log('docker ping');
        // const systemConfig = {...systemRef.current};
        systemRef.current.ping = data;
        setSystem(systemRef.current);
        setDockerPing(data);
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_6__/* .Spinner */ .$, {}));
    if (!currentHostRef.current) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Host not selected."
    }));
    // if (!dockerInfo) return <div>No Info.</div>;
    // if (items.length === 0) return <div>No Info.</div>;
    // const changeHost = (host) => {
    //   // console.log('ative host', hostsRef.current[host]);
    //   setSelectedHost(host);
    //   setActiveHost(hostsRef.current[host]);
    //   // dispatch(setActiveHost({ data: hostsRef.current[host] }));
    // };
    const template = (options)=>{
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} pl-1`;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: className,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: titleClassName,
                            children: options.props.header
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-2 text-right",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: options.togglerClassName + ' mr-4',
                                onClick: options.onTogglerClick,
                                tooltip: "Collapse this panel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: toggleIcon
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: options.togglerClassName,
                                onClick: ()=>{
                                    closePanel(options.props.closeAction);
                                // console.log('foooo', options);
                                },
                                tooltip: "Close this panel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "pi pi-times"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        }));
    };
    const closePanel = (panel)=>{
        console.log('Panel', panel);
    // switch (panel) {
    //   case 'processes':
    //     updateContainerView('showProcesses', false);
    //     break;
    // }
    };
    if (!((ref4 = currentHostRef.current) === null || ref4 === void 0 ? void 0 : ref4.id)) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 p-0 ml-1 mr-1 grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 mt-4 text-900 font-bold text-4xl line-height-1 mb-1 text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-12 text-center grid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "ml-auto mr-auto col-0 text-left grid mb-0 pb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_hosts_HostStatusBadge__WEBPACK_IMPORTED_MODULE_9__/* .HostStatusBadge */ .T, {
                                            className: "p-2 mr-2 mb-1 mr-3",
                                            status: systemRef.current.ping
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-0 p-0",
                                            children: [
                                                "Docker Host: ",
                                                currentHostRef.current.name
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 mb-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-600 line-height-3 text-lg m-0 mb-0 text-center",
                                        children: [
                                            "Status: ",
                                            dockerPingRef.current || 'Unknown'
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 mb-0 mt-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-600 line-height-3 text-lg m-0 mb-0 mt-0 pt-0 text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                className: "mr-4",
                                                href: "https://docs.docker.com/engine/release-notes",
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    target: "_blank",
                                                    className: "lightblue-color",
                                                    children: [
                                                        "Docker v",
                                                        (dockerVersionRef === null || dockerVersionRef === void 0 ? void 0 : (ref1 = dockerVersionRef.current) === null || ref1 === void 0 ? void 0 : ref1.Version) || 'Uknown'
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "ml-1 mr-1 pl-1 pr-1",
                                                children: "|"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                className: "ml-3",
                                                href: 'https://docs.docker.com/engine/api/v' + (dockerVersionRef === null || dockerVersionRef === void 0 ? void 0 : (ref2 = dockerVersionRef.current) === null || ref2 === void 0 ? void 0 : ref2.ApiVersion),
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    target: "_blank",
                                                    className: "lightblue-color",
                                                    children: [
                                                        "Engine v",
                                                        (dockerVersionRef === null || dockerVersionRef === void 0 ? void 0 : (ref3 = dockerVersionRef.current) === null || ref3 === void 0 ? void 0 : ref3.ApiVersion) || 'Unknown'
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    dockerPingRef.current === 'OK' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 p-0 m-0 mb-2 menubar-background",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_8__.Menubar, {
                            className: "col-12 mb-2 ml-0 mr-0 justify-content-center menubar-menu",
                            model: menuItems1
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "showSummaryPanel",
                        className: "col-12 p-0 m-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_11__.Panel, {
                            className: "sitePanel",
                            ref: showSummaryPanel,
                            header: "Summary Vitals",
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "summary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_main_dashboard_host_summary__WEBPACK_IMPORTED_MODULE_10__/* .MainDashboardHostSummary */ .Q, {
                                dockerInfo: dockerInfoRef.current,
                                dockerVersion: dockerVersionRef.current,
                                dockerHost: currentHostRef.current,
                                dockerPing: dockerPingRef.current
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 mt-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "mt-3",
                                header: "Docker Ping",
                                data: dockerPing,
                                collapsed: "true"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "mt-3",
                                header: "Docker Version",
                                data: dockerVersion,
                                collapsed: "true"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "mt-3",
                                header: "Docker Info",
                                data: dockerInfo,
                                collapsed: "true"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "mt-3",
                                header: "Dockermon Host Info",
                                data: currentHostRef.current,
                                collapsed: "true"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bottom-spacer col-12 m-0 p-0",
                style: {
                    height: '800px'
                }
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainDashboardHostChartsMain)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9325);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_multiselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_dashboard_host_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9299);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_main_dashboard_host_charts__WEBPACK_IMPORTED_MODULE_4__]);
_main_dashboard_host_charts__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react-hooks/exhaustive-deps */ 



function MainDashboardHostChartsMain(props) {
    var ref2;
    const { 0: isLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    // const dispatch = useDispatch();
    // const [socket, setSocket] = useState();
    // const socketRef = useRef(socket);
    // socketRef.current = socket;
    // const [socketLoaded, setSocketLoaded] = useState(false);
    // const [selectedHost, setSelectedHost] = useState(0);
    // const selectedHostRef = useRef(selectedHost);
    // selectedHostRef.current = selectedHost;
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.containers;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const { 0: selectedHost , 1: setSelectedHost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const selectedHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedHost);
    selectedHostRef.current = selectedHost;
    const { 0: selectedContainers , 1: setSelectedContainers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const selectedContainersRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedContainers);
    selectedContainersRef.current = selectedContainers;
    const { 0: containersList , 1: setContainersList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containersListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containersList);
    containersListRef.current = containersList;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.host) {
            setSelectedHost(props.host);
            setTimeout(()=>{
                getHostContainers();
            }, 500);
        }
    }, [
        props.host
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // console.log('updating');
    }, [
        containersListRef.current
    ]);
    const getHostContainers = ()=>{
        var ref, ref1;
        let host;
        let c = [];
        let selected = [];
        if ((ref = selectedHostRef.current) === null || ref === void 0 ? void 0 : ref.id) {
            host = selectedHostRef.current;
        }
        if (!host && ((ref1 = activeHostRef.current) === null || ref1 === void 0 ? void 0 : ref1.id)) {
            host = activeHostRef.current;
        }
        if (!host) {
            // console.log('No Host');
            return;
        }
        Object.keys(containers[host.id].containers).forEach((k)=>{
            const label = containers[host.id].containers[k].running ? ' (running) ' : '';
            const obj = {
                id: containers[host.id].containers[k].id,
                name: containers[host.id].containers[k].name,
                label: containers[host.id].containers[k].name + ' - ' + containers[host.id].containers[k].containerId + ' ' + label,
                running: containers[host.id].containers[k].running,
                containerId: containers[host.id].containers[k].containerId
            };
            c.push(obj);
            if (containers[host.id].containers[k].running) {
                selected.push(obj);
            }
        });
        c.sort((a, b)=>{
            if (!a.name) {
                a.name = 'Unknown';
            }
            return a.name.localeCompare(b.name);
        });
        c.sort((a, b)=>{
            return a.running > b.running;
        });
        setContainersList(c);
        setSelectedContainers(selected);
    };
    //   console.log(selectedContainersRef.current);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-inputgroup",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "p-inputgroup-addon",
                                children: "Select Containers:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_multiselect__WEBPACK_IMPORTED_MODULE_3__.MultiSelect, {
                                //   keyfilter={/^[^<>*!\s]+$/}
                                name: "containers",
                                id: "containers",
                                options: containersListRef.current,
                                optionLabel: "label",
                                filter: true,
                                filterBy: "name",
                                showClear: true,
                                value: selectedContainersRef === null || selectedContainersRef === void 0 ? void 0 : selectedContainersRef.current,
                                placeholder: "Select Containers",
                                onChange: (e)=>{
                                    setSelectedContainers(e.value);
                                // setValue('network', e.value);
                                },
                                className: "multiselect-clearfix pl-2 pt-2 pb-2 form-control f-height-inputs"
                            }, "containers")
                        ]
                    })
                })
            }),
            ((ref2 = selectedContainersRef.current) === null || ref2 === void 0 ? void 0 : ref2.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: selectedContainersRef.current.map((e, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 m-0 p-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_dashboard_host_charts__WEBPACK_IMPORTED_MODULE_4__/* .MainDashboardHostCharts */ .z, {
                            container: e,
                            containerId: e.containerId,
                            showCpu: props.showCpu,
                            showMemory: props.showMemory,
                            showDisk: props.showDisk,
                            showNetwork: props.showNetwork,
                            showProcesses: props.showProcesses,
                            hideControls: props.hideControls
                        })
                    }, 'charts___' + i)
                )
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ MainDashboardHostCharts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var components_containers_charts_container_cpu_line_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1078);
/* harmony import */ var components_containers_charts_container_memory_line_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1085);
/* harmony import */ var components_containers_charts_container_processes_bar_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4781);
/* harmony import */ var components_containers_charts_container_network_line_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6989);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7757);
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_12__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













// import { Spinner } from 'components/Spinner';

function MainDashboardHostCharts(props) {
    // const [isLoading, setIsLoading] = useState(true);
    const { 0: refreshCharts , 1: setRefreshCharts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const refreshChartsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(refreshCharts);
    refreshChartsRef.current = refreshCharts;
    const { 0: refreshStats , 1: setRefreshStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const refreshStatsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(refreshStats);
    refreshStatsRef.current = refreshStats;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [stats, setStats] = useState();
    const { 0: statsProcesses1 , 1: setStatsProcesses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsMemory1 , 1: setStatsMemory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [statsMemoryPercent, setStatsMemoryPercent] = useState();
    const { 0: statsNetworkIn1 , 1: setStatsNetworkIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsNetworkOut1 , 1: setStatsNetworkOut  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsDates1 , 1: setStatsDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsCPU1 , 1: setStatsCPU  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: startDate , 1: setStartDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_10__().subtract(5, 'minute').toDate());
    const startDateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(startDate);
    startDateRef.current = startDate;
    const { 0: endDate , 1: setEndDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const endDateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(endDate);
    endDateRef.current = endDate;
    const { 0: nowDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const nowDateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(nowDate);
    nowDateRef.current = nowDate;
    const { 0: timeoutTimer , 1: setTimeoutTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(timeoutTimer);
    timerRef.current = timeoutTimer;
    const { 0: statsTimer , 1: setStatsTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const statsTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(statsTimer);
    statsTimerRef.current = statsTimer;
    const { 0: selectedRange , 1: setSelectedRange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60 * 15);
    const selectedRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRange);
    selectedRangeRef.current = selectedRange;
    const { 0: showCpu , 1: setShowCpu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const showCpuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showCpu);
    showCpuRef.current = showCpu;
    const { 0: showMemory , 1: setShowMemory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showMemoryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showMemory);
    showMemoryRef.current = showMemory;
    const { 0: showDisk , 1: setShowDisk  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showDiskRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showDisk);
    showDiskRef.current = showDisk;
    const { 0: showNetwork , 1: setShowNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showNetworkRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showNetwork);
    showNetworkRef.current = showNetwork;
    const { 0: showProcesses , 1: setShowProcesses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showProcessesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showProcesses);
    showProcessesRef.current = showProcesses;
    const { 0: hideControls , 1: setHideControls  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const hideControlsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hideControls);
    hideControlsRef.current = hideControls;
    const cpuChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const memoryChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const processesChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const networkChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ranges = [
        {
            name: 'Custom',
            value: null
        },
        {
            name: '1 Minute',
            value: 60
        },
        {
            name: '5 Minutes',
            value: 60 * 5
        },
        {
            name: '15 Minutes',
            value: 60 * 15
        },
        {
            name: '30 Minutes',
            value: 60 * 30
        },
        {
            name: '60 Minutes',
            value: 60 * 60
        },
        {
            name: '90 Minutes',
            value: 60 * 90
        },
        {
            name: '2 Hours',
            value: 60 * 120
        },
        {
            name: '3 Hours',
            value: 60 * 180
        },
        {
            name: '6 Hours',
            value: 60 * 360
        },
        {
            name: '8 Hours',
            value: 60 * 480
        },
        {
            name: '12 Hours',
            value: 60 * 720
        }, 
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        setShowCpu(props.showCpu);
        setShowDisk(props.showDisk);
        setShowNetwork(props.showNetwork);
        setShowMemory(props.showMemory);
        setShowProcesses(props.showProcesses);
        setHideControls(props.hideControls);
        if (props.containerId) {
            if (!socketLoaded) {
                await loadSocket();
            }
            loadData();
            if (refreshStatsRef.current) {
                setTimeout(()=>{
                    startStatsTimer();
                }, 500);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do mounting stuff here
        return ()=>{
            if (statsTimerRef === null || statsTimerRef === void 0 ? void 0 : statsTimerRef.current) {
                clearInterval(statsTimerRef.current);
                setStatsTimer(null);
            }
            if (socketRef.current) {
                const socketName = 'hostcontainerStats_' + props.containerId;
                socketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'hostcontainerStats_' + props.containerId;
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_12__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    // setStats(results.data);
                    setRefreshCharts(true);
                    processStats(results.data);
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        let start;
        let end;
        if (selectedRangeRef.current) {
            start = dayjs__WEBPACK_IMPORTED_MODULE_10__().subtract(selectedRangeRef.current, 'second').toDate();
            end = dayjs__WEBPACK_IMPORTED_MODULE_10__().toDate();
        } else {
            start = startDateRef.current;
            end = dayjs__WEBPACK_IMPORTED_MODULE_10__().toDate();
        }
        setStartDate(start);
        setEndDate(end);
        const where = {
            containerId: props.container.id,
            limit: 100,
            sortKey: 'createdAt',
            sortType: 'DESC',
            startDate: start,
            endDate: end
        };
        if (socketRef.current) {
            socketRef.current.emit('stats', {
                command: 'stats',
                body: where,
                callback: 'hostcontainerStats_' + props.containerId
            });
        } else {
            // http fallback;
            const { data , error  } = await services_stats_service__WEBPACK_IMPORTED_MODULE_2__/* .statsService.getStats */ .D.getStats(where);
            if (error) {
                setError(error);
                console.log(error);
            }
            if (data) {
                // setStats(data);
                setRefreshCharts(true);
                processStats(data);
            }
        }
    }
    function processStats(data) {
        const statsCPU = [];
        const statsProcesses = [];
        const statsMemory = [];
        const statsMemoryPercent = [];
        const statsNetworkIn = [];
        const statsNetworkOut = [];
        const statsDates = [];
        data.map((a)=>{
            // console.log(a.networkOut);
            const date = dayjs__WEBPACK_IMPORTED_MODULE_10__(a.createdAt).format('YYYY-MM-DD HH:mm:ss');
            statsCPU.push(a.cpu);
            statsProcesses.push(a.pids);
            statsMemory.push(a.memory);
            statsMemoryPercent.push(a.memoryPercent);
            statsNetworkIn.push(a.networkIn);
            statsNetworkOut.push(a.networkOut);
            statsDates.push(date);
        });
        statsDates.push(dayjs__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD HH:mm:ss'));
        setStatsCPU(statsCPU);
        setStatsProcesses(statsProcesses);
        setStatsMemory(statsMemory);
        // setStatsMemoryPercent(statsMemoryPercent);
        setStatsNetworkOut(statsNetworkOut);
        setStatsNetworkIn(statsNetworkIn);
        setStatsDates(statsDates);
        if (refreshChartsRef.current) {
            if (cpuChartRef === null || cpuChartRef === void 0 ? void 0 : cpuChartRef.current) {
                cpuChartRef.current.updateChart();
            }
            if (memoryChartRef === null || memoryChartRef === void 0 ? void 0 : memoryChartRef.current) {
                memoryChartRef.current.updateChart();
            }
            if (processesChartRef === null || processesChartRef === void 0 ? void 0 : processesChartRef.current) {
                processesChartRef.current.updateChart();
            }
            if (networkChartRef === null || networkChartRef === void 0 ? void 0 : networkChartRef.current) {
                networkChartRef.current.updateChart();
            }
        }
        setRefreshCharts(false);
    // setIsLoading(false);
    // if (stats) {
    //   setIsLoading(false);
    // }
    }
    //   if (isLoading) return <Spinner />;
    if (error1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Failed to load stats"
    }));
    //   if (!stats) return <div></div>;
    const pickerStartDate = (value)=>{
        if (timerRef === null || timerRef === void 0 ? void 0 : timerRef.current) {
            clearTimeout(timerRef.current);
        }
        const timer = setTimeout(()=>{
            setSelectedRange(null);
            setRefreshCharts(true);
            setStartDate(new Date(value));
            setTimeout(()=>{
                loadData();
            });
        }, 1500);
        setTimeoutTimer(timer);
    };
    const pickerEndDate = async (value)=>{
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        const timer = setTimeout(async ()=>{
            setSelectedRange(null);
            setRefreshCharts(true);
            setEndDate(new Date(value));
            setTimeout(()=>{
                loadData();
            });
        }, 1500);
        setTimeoutTimer(timer);
    };
    const changeRange = async (event)=>{
        setSelectedRange(event.value);
        setTimeout(()=>{
            setRefreshCharts(true);
            loadData();
        });
    };
    const toggleRefresh = ()=>{
        const refresh = !refreshStatsRef.current;
        setRefreshStats(refresh);
        if (refresh) {
            startStatsTimer();
        } else {
            stopStatsTimer();
        }
    };
    function startStatsTimer() {
        if (statsTimerRef.current) {
            clearInterval(statsTimerRef.current);
        }
        const interval = setInterval(()=>{
            loadData();
        }, 15000);
        setStatsTimer(interval);
    }
    const stopStatsTimer = ()=>{
        if (statsTimerRef.current) {
            clearInterval(statsTimerRef.current);
            setStatsTimer(null);
        }
    };
    // const panelHeaderTemplate = (options) => {
    //   const toggleIcon = options?.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
    //   const className = `${options.className} justify-content-start`;
    //   const titleClassName = `${options.titleClassName} pl-1`;
    //   return (
    //     <div className={className}>
    //       <div className="col-12 p-0 flex">
    //         <div className="col-10 p-0 justify-content-start">
    //           <span className={titleClassName}>Container Stats</span>
    //         </div>
    //         <div className="col-2 p-0 text-right justify-content-end">
    //           <button className={options.togglerClassName} onClick={options.onTogglerClick}>
    //             <span className={toggleIcon}></span>
    //             <Ripple />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !hideControlsRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid col-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-inputgroup",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "ml-5 mt-2 mr-2",
                                htmlFor: "startDate",
                                children: [
                                    "Start:",
                                    ' '
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, {
                                id: "startDate",
                                name: "startDate",
                                value: startDateRef.current,
                                onSelect: (e)=>pickerStartDate(e.value)
                                ,
                                showIcon: true,
                                showTime: true,
                                showSeconds: true,
                                maxDate: endDateRef.current
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "ml-5 mr-2 mt-2",
                                htmlFor: "endDate",
                                children: "End:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, {
                                id: "endDate",
                                name: "endDate",
                                value: endDateRef.current,
                                onSelect: (e)=>pickerEndDate(e.value)
                                ,
                                showIcon: true,
                                showTime: true,
                                showSeconds: true,
                                minDate: startDateRef.current,
                                maxDate: nowDateRef.current
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "ml-5 mr-2 mt-2",
                                htmlFor: "endDate",
                                children: [
                                    "Range:",
                                    ' '
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
                                className: "mt-0",
                                name: "range",
                                value: selectedRange,
                                options: ranges,
                                onChange: changeRange,
                                optionLabel: "name",
                                placeholder: "Select a Range"
                            }),
                            !refreshStatsRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                className: "ml-2 p-button p-button-secondary",
                                tooltip: "Start Stats Refreshing",
                                tooltipOptions: {
                                    position: 'bottom'
                                },
                                icon: "fa fa-play",
                                onClick: toggleRefresh
                            }),
                            refreshStatsRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_11__.Button, {
                                className: "ml-2 p-button-raised p-button-secondary",
                                tooltip: "Stop Stats Refreshing",
                                tooltipOptions: {
                                    position: 'bottom'
                                },
                                icon: "fa fa-pause",
                                onClick: toggleRefresh
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12 grid",
                    children: [
                        showCpuRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 m-auto mt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                header: 'CPU Stats - ' + props.container.name,
                                toggleable: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_container_cpu_line_chart__WEBPACK_IMPORTED_MODULE_3__/* .ContainerCPULineChart */ .B, {
                                    ref: cpuChartRef,
                                    className: "m-4",
                                    statsCPU: statsCPU1,
                                    statsDates: statsDates1,
                                    startDate: startDate,
                                    endDate: endDate
                                })
                            })
                        }),
                        showMemoryRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 m-auto mt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                header: 'Memory Stats - ' + props.container.name,
                                toggleable: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_container_memory_line_chart__WEBPACK_IMPORTED_MODULE_4__/* .ContainerMemoryLineChart */ .r, {
                                    ref: memoryChartRef,
                                    className: "m-4",
                                    statsMemory: statsMemory1,
                                    statsDates: statsDates1,
                                    startDate: startDate,
                                    endDate: endDate
                                })
                            })
                        }),
                        showProcessesRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 m-auto mt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                header: 'Processes - ' + props.container.name,
                                toggleable: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_container_processes_bar_chart__WEBPACK_IMPORTED_MODULE_5__/* .ContainerProcessesBarChart */ .R, {
                                    ref: processesChartRef,
                                    className: "m-4",
                                    statsProcesses: statsProcesses1,
                                    statsDates: statsDates1,
                                    startDate: startDate,
                                    endDate: endDate
                                })
                            })
                        }),
                        showNetworkRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 m-auto mt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                header: 'Network Stats - ' + props.container.name,
                                toggleable: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_charts_container_network_line_chart__WEBPACK_IMPORTED_MODULE_6__/* .ContainerNetworkLineChart */ .X, {
                                    ref: networkChartRef,
                                    className: "m-4",
                                    statsNetworkIn: statsNetworkIn1,
                                    statsNetworkOut: statsNetworkOut1,
                                    statsDates: statsDates1,
                                    startDate: startDate,
                                    endDate: endDate
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ MainDashboardHostSummary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7191);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2670);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pages_containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2723);
/* harmony import */ var pages_volumes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6903);
/* harmony import */ var pages_networks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2586);
/* harmony import */ var pages_images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9989);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _main_dashboard_host_charts_main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1226);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5452);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pages_containers__WEBPACK_IMPORTED_MODULE_8__, pages_volumes__WEBPACK_IMPORTED_MODULE_9__, pages_networks__WEBPACK_IMPORTED_MODULE_10__, pages_images__WEBPACK_IMPORTED_MODULE_11__, _main_dashboard_host_charts_main__WEBPACK_IMPORTED_MODULE_13__]);
([pages_containers__WEBPACK_IMPORTED_MODULE_8__, pages_volumes__WEBPACK_IMPORTED_MODULE_9__, pages_networks__WEBPACK_IMPORTED_MODULE_10__, pages_images__WEBPACK_IMPORTED_MODULE_11__, _main_dashboard_host_charts_main__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable react-hooks/exhaustive-deps */ 



// import dayjs from 'dayjs';
// import { socketService } from 'services/socket.service';


// import { useRouter } from 'next/router';









function MainDashboardHostSummary(props) {
    var ref6, ref1, ref2, ref3, ref4;
    //  const router = useRouter();
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>{
        return state.containers;
    });
    const volumes = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>{
        return state.volumes;
    });
    const images = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>{
        return state.images;
    });
    const networks = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>{
        return state.networks;
    });
    const showContainersPanel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const showNetworksPanel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const showVolumesPanel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const showImagesPanel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const showStatsPanel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: showContainers , 1: setShowContainers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showContainersRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showContainers);
    showContainersRef.current = showContainers;
    const { 0: showVolumes , 1: setShowVolumes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showVolumesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showVolumes);
    showVolumesRef.current = showVolumes;
    const { 0: showImages , 1: setShowImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showImagesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showImages);
    showImagesRef.current = showImages;
    const { 0: showNetworks , 1: setShowNetworks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showNetworksRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showNetworks);
    showNetworksRef.current = showNetworks;
    const { 0: showStats , 1: setShowStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showStatsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showStats);
    showStatsRef.current = showStats;
    const { 0: showCpu , 1: setShowCpu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const showCpuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showCpu);
    showCpuRef.current = showCpu;
    const { 0: showMemory , 1: setShowMemory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showMemoryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showMemory);
    showMemoryRef.current = showMemory;
    const { 0: showDisk , 1: setShowDisk  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showDiskRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showDisk);
    showDiskRef.current = showDisk;
    const { 0: showNetwork , 1: setShowNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showNetworkRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showNetwork);
    showNetworkRef.current = showNetwork;
    const { 0: showProcesses , 1: setShowProcesses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showProcessesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showProcesses);
    showProcessesRef.current = showProcesses;
    const { 0: hideControls  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const hideControlsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hideControls);
    hideControlsRef.current = hideControls;
    const statsObj = {
        cpuUsage: 0,
        memInUse: 0,
        diskRead: 0,
        diskWrite: 0,
        networkIn: 0,
        networkOut: 0,
        imageSize: 0,
        processes: 0,
        volumeSize: 0
    };
    const { 0: statsSummary , 1: setStatsSummary  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(statsObj);
    const statsSummaryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(statsSummary);
    statsSummaryRef.current = statsSummary;
    // const siteSettings = useSelector((state) => {
    //   return state.site;
    // });
    const { 0: dockerInfo , 1: setDockerInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerInfoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerInfo);
    dockerInfoRef.current = dockerInfo;
    const { 0: dockerVersion , 1: setDockerVersion  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerVersionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerVersion);
    dockerVersionRef.current = dockerVersion;
    const { 0: dockerUsage , 1: setDockerUsage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerUsageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerUsage);
    dockerUsageRef.current = dockerUsage;
    const { 0: dockerPing , 1: setDockerPing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerPingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerPing);
    dockerPingRef.current = dockerPing;
    const { 0: dockerHost , 1: setDockerHost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dockerHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dockerHost);
    dockerHostRef.current = dockerHost;
    const { 0: hostNetworks , 1: setHostNetworks  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const hostNetworksRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hostNetworks);
    hostNetworksRef.current = hostNetworks;
    // const [hostImages, setHostImages] = useState();
    // const hostImagesRef = useRef(hostImages);
    // hostImagesRef.current = hostImages;
    const { 0: hostVolumes , 1: setHostVolumes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const hostVolumesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hostVolumes);
    hostVolumesRef.current = hostVolumes;
    // const [hostContainers, setHostContainers] = useState();
    // const hostContainersRef = useRef(hostContainers);
    // hostContainersRef.current = hostContainers;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.dockerInfo) {
            setDockerInfo(props.dockerInfo);
        }
        if (props.dockerVersion) {
            setDockerVersion(props.dockerVersion);
        }
        if (props.dockerUsage) {
            setDockerUsage(props.dockerUsage);
        }
        if (props.dockerPing) {
            setDockerPing(props.dockerPing);
        }
        if (props.dockerHost) {
            setDockerHost(props.dockerHost);
        }
        setTimeout(()=>{
            setupHostElements();
            processContainerStats();
        }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //  console.log('stats Summary', statsSummary);
        processContainerStats();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    //  console.log('stats Summary', statsSummary);
    }, [
        dockerPingRef.current
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        processContainerStats();
    }, [
        containers
    ]);
    function toggleView(view) {
        switch(view){
            case 'containers':
                if (!showContainersRef.current) {
                    scrollToRef(showContainersPanel);
                }
                setShowContainers(!showContainersRef.current);
                break;
            case 'stats':
                if (!showStatsRef.current) {
                    scrollToRef(showStatsRef);
                    setShowStats(true);
                    setShowCpu(true);
                }
                break;
            case 'memory':
                if (!showStatsRef.current) {
                    scrollToRef(showStatsRef);
                    setShowStats(true);
                    setShowMemory(true);
                }
                break;
            case 'volumes':
                if (!showVolumesRef.current) {
                    scrollToRef(showVolumesPanel);
                }
                setShowVolumes(!showVolumesRef.current);
                break;
            case 'images':
                if (!showImagesRef.current) {
                    scrollToRef(showImagesPanel);
                }
                setShowImages(!showImagesRef.current);
                break;
            case 'networks':
                if (!showNetworksRef.current) {
                    scrollToRef(showNetworksPanel);
                }
                setShowNetworks(!showNetworksRef.current);
                break;
        }
    }
    function setupHostElements() {
        var ref, ref5;
        if (!dockerHostRef.current) {
            return;
        }
        const v = [];
        if ((ref = volumes[dockerHostRef.current.id]) === null || ref === void 0 ? void 0 : ref.volumes) {
            Object.keys(volumes[dockerHostRef.current.id].volumes).forEach((key)=>{
                const hVolumes = volumes[dockerHostRef.current.id].volumes[key];
                v.push(hVolumes);
            });
        }
        setHostVolumes(v);
        const n = [];
        if ((ref5 = networks[dockerHostRef.current.id]) === null || ref5 === void 0 ? void 0 : ref5.networks) {
            Object.keys(networks[dockerHostRef.current.id].networks).forEach((key)=>{
                const hNetworks = networks[dockerHostRef.current.id].networks[key];
                n.push(hNetworks);
            });
        }
        setHostNetworks(n);
    }
    const panelHeaderTemplate = (options)=>{
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} pl-1`;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: className,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: titleClassName,
                            children: options.props.header
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-2 text-right",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: options.togglerClassName + ' mr-4',
                                onClick: options.onTogglerClick,
                                tooltip: "Collapse this panel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: toggleIcon
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: options.togglerClassName,
                                onClick: ()=>{
                                    closePanel(options.props.closeAction);
                                // console.log('foooo', options);
                                },
                                tooltip: "Close this panel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "pi pi-times"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        }));
    };
    const closePanel = (panel)=>{
        switch(panel){
            case 'images':
                setShowImages(false);
                break;
            case 'networks':
                setShowNetworks(false);
                break;
            case 'containers':
                setShowContainers(false);
                break;
            case 'volumes':
                setShowVolumes(false);
                break;
            case 'stats':
                setShowStats(false);
                break;
        }
    };
    const scrollToRef = (ref)=>{
        // console.log(ref);
        if (ref.current) {
            // const headerOffset = -510;
            // const offsetPosition = ref.current.offsetTop - headerOffset;
            const element = document.getElementById(ref.current.id);
            const headerOffset = 45;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        // // ref.current.scrollIntoView();
        // ref.current.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        //   scrollTop: -100
        // });
        }
    };
    const toggleContainerView = async ()=>{
        await toggleView('containers', !showContainersRef.current);
    };
    const toggleNetworkView = async ()=>{
        await toggleView('networks', !showNetworksRef.current);
    };
    const toggleVolumes = async ()=>{
        await toggleView('volumes', !showVolumesRef.current);
    };
    const toggleImages = async ()=>{
        await toggleView('images', !showImagesRef.current);
    };
    const toggleCPU = async ()=>{
        await toggleView('stats', !showStatsRef.current);
    };
    const toggleMemory = async ()=>{
        await toggleView('memory', !showStatsRef.current);
    };
    const processContainerStats = async ()=>{
        var ref14, ref7;
        if (!dockerHostRef.current) return;
        if (!containers) return;
        const newStats = {
            memInUse: 0,
            cpuUsage: 0,
            diskRead: 0,
            diskWrite: 0,
            networkIn: 0,
            networkOut: 0,
            imageSize: 0,
            processes: 0,
            swapMemory: 0
        };
        let total = 0;
        if ((ref14 = containers[dockerHostRef.current.id]) === null || ref14 === void 0 ? void 0 : ref14.containers) {
            Object.keys(containers[dockerHostRef.current.id].containers).forEach((k)=>{
                const c = containers[dockerHostRef.current.id].containers[k];
                if (c.running) {
                    var ref, ref8, ref9, ref10, ref11, ref12, ref13;
                    newStats.memInUse += ((ref = c.statsSummary) === null || ref === void 0 ? void 0 : ref.memoryUsage) || 0;
                    newStats.cpuUsage += ((ref8 = c.statsSummary) === null || ref8 === void 0 ? void 0 : ref8.cpuUsage) || 0;
                    newStats.diskRead += ((ref9 = c.statsSummary) === null || ref9 === void 0 ? void 0 : ref9.diskread) || 0;
                    newStats.diskWrite += ((ref10 = c.statsSummary) === null || ref10 === void 0 ? void 0 : ref10.diskWrite) || 0;
                    newStats.networkIn += ((ref11 = c.statsSummary) === null || ref11 === void 0 ? void 0 : ref11.networkRx) || 0;
                    newStats.networkOut += ((ref12 = c.statsSummary) === null || ref12 === void 0 ? void 0 : ref12.networkTx) || 0;
                    newStats.processes += ((ref13 = c.statsSummary) === null || ref13 === void 0 ? void 0 : ref13.processes) || 0;
                    total++;
                }
            });
        }
        if ((ref7 = images[dockerHostRef.current.id]) === null || ref7 === void 0 ? void 0 : ref7.images) {
            Object.keys(images[dockerHostRef.current.id].images).forEach((k)=>{
                const c = images[dockerHostRef.current.id].images[k];
                // console.log('Image', c);
                newStats.imageSize += Number(c.fileSize) || 0;
            });
        }
        newStats.cpuUsage = Math.round(newStats.cpuUsage / total);
        setStatsSummary(newStats);
    };
    // const toggleNetworkConnect = async () => {
    //   scrollToRef(showNetworksPanel);
    //   await updateContainerView('showNetworks', true);
    //   setTimeout(() => {
    //     updateContainerView('showNetworkConnect', true);
    //   }, 300);
    // };
    // console.log(dockerPingRef.current);
    if (dockerPingRef.current !== 'OK') return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "Host is offline or cannot be reached."
    }));
    if (!dockerInfoRef.current) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_6__/* .Spinner */ .$, {}));
    if (!(dockerHostRef === null || dockerHostRef === void 0 ? void 0 : (ref6 = dockerHostRef.current) === null || ref6 === void 0 ? void 0 : ref6.id)) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "surface-ground mt-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 m-0 p-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 surface-card col-0 m-0",
                        style: {
                            borderRadius: '10px'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid col-12 mb-0 m-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleCPU()
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: "containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple cyan",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChartGantt,
                                                    className: "text-4xl text-cyan-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-4xl mb-1 line-height-2 text-center",
                                                    children: (dockerInfoRef === null || dockerInfoRef === void 0 ? void 0 : (ref1 = dockerInfoRef.current) === null || ref1 === void 0 ? void 0 : ref1.NCPU) || 0
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "CPUs"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-700 m-0",
                                                    children: [
                                                        statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.cpuUsage,
                                                        "% In Use"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleMemory()
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: "containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple blue",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMicrochip,
                                                    className: "text-4xl text-blue-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-3xl mb-1 line-height-2 text-center",
                                                    children: helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((dockerInfoRef === null || dockerInfoRef === void 0 ? void 0 : (ref2 = dockerInfoRef.current) === null || ref2 === void 0 ? void 0 : ref2.MemTotal) || 0)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Max Memory"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-700 m-0",
                                                    children: [
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.memInUse) || 0),
                                                        " In Use"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            onClick: ()=>toggleContainerView()
                                            ,
                                            className: "containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple orange",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faList,
                                                    className: "text-4xl text-orange-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-3xl mb-1 line-height-2 text-center",
                                                    children: dockerInfo.Containers || 0
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Containers"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "text-900",
                                                    children: [
                                                        dockerInfo.ContainersRunning || 0,
                                                        " Running",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.processes,
                                                        " Processes"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleNetworkView()
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: "containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple yellow",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faNetworkWired,
                                                    className: "text-4xl text-yellow-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-3xl mb-1 line-height-2 text-center",
                                                    children: (hostNetworksRef === null || hostNetworksRef === void 0 ? void 0 : (ref3 = hostNetworksRef.current) === null || ref3 === void 0 ? void 0 : ref3.length) || 0
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Networks"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "text-900",
                                                    children: [
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.networkOut) || 0),
                                                        " Tx",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.networkIn) || 0),
                                                        " Rx"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleVolumes()
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: "containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 mr-2 px-2 py-2 text-center p-ripple purple",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHardDrive,
                                                    className: "text-4xl text-purple-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-3xl mb-1 line-height-2 text-center",
                                                    children: (hostVolumesRef === null || hostVolumesRef === void 0 ? void 0 : (ref4 = hostVolumesRef.current) === null || ref4 === void 0 ? void 0 : ref4.length) || 0
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Volumes"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "text-900",
                                                    children: [
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.diskRead) || 0),
                                                        " Read",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.diskWrite) || 0),
                                                        " Write"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleImages()
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: "containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple green",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHardDrive,
                                                    className: "text-4xl text-green-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-3xl mb-1 line-height-2 text-center",
                                                    children: dockerInfoRef.current.Images || 0
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Images"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-900",
                                                    children: helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((statsSummaryRef === null || statsSummaryRef === void 0 ? void 0 : statsSummaryRef.current.imageSize) || 0)
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            showStatsRef.current && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid col-12 mt-1 mb-0 m-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2 p-0 m-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-0 mt-0 mb-0 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitch, {
                                                tooltip: "Show Charts",
                                                className: "charts-input-switch",
                                                checked: showCpuRef.current,
                                                onChange: (e)=>{
                                                    e.preventDefault();
                                                    setShowCpu(e.value);
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2 p-0 m-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-0 mt-1 mb-0 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitch, {
                                                tooltip: "Show Memory Charts",
                                                className: "charts-input-switch",
                                                checked: showMemoryRef.current,
                                                onChange: (e)=>{
                                                    e.preventDefault();
                                                    setShowMemory(e.value);
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2 p-0 m-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-0 mt-1 mb-0 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitch, {
                                                tooltip: "Show Processes Charts",
                                                className: "charts-input-switch",
                                                checked: showProcessesRef.current,
                                                onChange: (e)=>{
                                                    e.preventDefault();
                                                    setShowProcesses(e.value);
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2 p-0 m-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-0 mt-1 mb-0 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitch, {
                                                tooltip: "Show Networks Charts",
                                                className: "charts-input-switch",
                                                checked: showNetworkRef.current,
                                                onChange: (e)=>{
                                                    e.preventDefault();
                                                    setShowNetwork(e.value);
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2 p-0 m-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-0 mt-1 mb-0 text-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_14__.InputSwitch, {
                                                tooltip: "Show Disk Charts",
                                                className: "charts-input-switch",
                                                checked: showDiskRef.current,
                                                onChange: (e)=>{
                                                    e.preventDefault();
                                                    setShowDisk(e.value);
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2 p-0 m-0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 p-0 mb-4"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: showStatsPanel,
                    id: "showStatsPanel",
                    className: "col-12 m-0 p-0",
                    children: showStatsRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, {
                        className: "sitePanel",
                        header: 'Host Stats: ' + dockerHostRef.current.name,
                        hideHeader: true,
                        headerTemplate: panelHeaderTemplate,
                        toggleable: true,
                        closeAction: "stats",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_main_dashboard_host_charts_main__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                            host: dockerHostRef.current,
                            showCpu: showCpuRef.current,
                            showMemory: showMemoryRef.current,
                            showDisk: showDiskRef.current,
                            showNetwork: showNetworkRef.current,
                            showProcesses: showProcessesRef.current,
                            hideControls: hideControlsRef.current
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: showContainersPanel,
                    id: "showContainersPanel",
                    className: "col-12 m-0 p-0",
                    children: showContainersRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, {
                        className: "sitePanel",
                        header: "",
                        hideHeader: true,
                        headerTemplate: panelHeaderTemplate,
                        toggleable: true,
                        closeAction: "containers",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_containers__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            host: dockerHostRef.current
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: showImagesPanel,
                    id: "showImagesPanel",
                    className: "col-12 m-0 p-0",
                    children: showImagesRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, {
                        className: "sitePanel",
                        header: "",
                        hideHeader: true,
                        headerTemplate: panelHeaderTemplate,
                        toggleable: true,
                        closeAction: "images",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_images__WEBPACK_IMPORTED_MODULE_11__["default"], {
                            host: dockerHostRef.current
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: showVolumesPanel,
                    id: "showVolumesPanel",
                    className: "col-12 m-0 p-0",
                    children: showVolumesRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, {
                        className: "sitePanel",
                        header: "",
                        hideHeader: true,
                        headerTemplate: panelHeaderTemplate,
                        toggleable: true,
                        closeAction: "volumes",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_volumes__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            host: dockerHostRef.current
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: showNetworksPanel,
                    id: "showNetworksPanel",
                    className: "col-12 m-0 p-0",
                    children: showNetworksRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, {
                        className: "sitePanel",
                        header: "",
                        hideHeader: true,
                        headerTemplate: panelHeaderTemplate,
                        toggleable: true,
                        closeAction: "networks",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_networks__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            host: dockerHostRef.current
                        })
                    })
                })
            ]
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ HostStatusBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9797);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_badge__WEBPACK_IMPORTED_MODULE_1__);



function HostStatusBadge(props) {
    let severity = props.severity;
    if (props.status) {
        switch(props.status){
            case 'OK':
                severity = 'success';
                break;
            default:
                severity = 'danger';
                break;
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-0 m-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                value: props.value,
                className: props.className,
                severity: severity
            })
        })
    }));
}


/***/ })

};
;