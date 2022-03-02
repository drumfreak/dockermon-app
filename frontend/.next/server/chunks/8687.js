"use strict";
exports.id = 8687;
exports.ids = [8687];
exports.modules = {

/***/ 1932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3720);
/* harmony import */ var store_actions_site_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5945);

/* eslint-disable react-hooks/exhaustive-deps */ 





// import DockerHubSearchBar from './images/search-bar';

function Header() {
    const { 0: userId , 1: setUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    // const site = useSelector((state) => {
    //   return state.site;
    // });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const subscription = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .authService.user.subscribe */ .O.user.subscribe((x)=>setUserId(x)
        );
        return ()=>subscription.unsubscribe()
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // console.log('User Id has changed', userId);
        if (userId && userId !== 'undefined') {
            fetchUser();
        }
    }, [
        userId
    ]);
    const fetchUser = async ()=>{
        if (userId) {
            try {
                const a = await services_users_service__WEBPACK_IMPORTED_MODULE_5__/* .usersService.getUserById */ .X.getUserById(userId);
                if (a) {
                    if (a.status === 'success') {
                        var ref;
                        if ((ref = a.data) === null || ref === void 0 ? void 0 : ref.userSettings) {
                            // console.log('My settings', a.data.userSettings);
                            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_6__/* .setUserSettings */ .m9)(a.data.userSettings));
                        }
                        setUser(a.data);
                    }
                }
            } catch (error) {
                console.warn('Error', error.message);
            }
        }
    };
    // only show nav when logged in
    if (!user) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "layout-topbar shadow-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: "/",
                    as: `/`,
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                className: "mt-3 ml-2 mr-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "pi pi-chart-bar mr-2"
                                    }),
                                    "DockerMon"
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "layout-topbar-right",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "layout-topbar-actions-left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "layout-topbar-actions-right p-0 m-0"
                        })
                    ]
                })
            ]
        })
    }));
}


/***/ }),

/***/ 7868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ LeftMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3621);
/* harmony import */ var _LeftMenuContainers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2885);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LeftMenuOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(389);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LeftMenuContainers__WEBPACK_IMPORTED_MODULE_3__]);
_LeftMenuContainers__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function LeftMenu() {
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const refOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: showMenuOptions , 1: setShowMenuOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showMenuOptionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showMenuOptions);
    showMenuOptionsRef.current = showMenuOptions;
    const { 0: filterValue , 1: setFilterValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: filterValue1 , 1: setFilterValue1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const subscription = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .authService.user.subscribe */ .O.user.subscribe((x)=>setUser(x)
        );
        return ()=>subscription.unsubscribe()
        ;
    }, []);
    // const showLeftMenuOptions = () => {};
    // only show nav when logged in
    if (!user) return null;
    // let items = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-fw pi-home',
    //     command: () => {
    //       router.push('/');
    //     },
    //   },
    // {
    //   label: 'Account',
    //   items: [
    //     {
    //       label: 'Options',
    //       icon: 'pi pi-fw pi-cog',
    //       command: () => {
    //         window.location.hash = '/';
    //       },
    //     },
    //     { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' },
    //   ],
    // },
    //];
    const hideOverlays = ()=>{
        ref.current.hideOverlays();
    };
    const updateFilterValue = (e)=>{
        setFilterValue1(e);
        // if (filterTimerRef.current) {
        //   // console.log('clear timeout');
        //   clearTimeout(filterTimerRef.current);
        // }
        // const timer = setTimeout(() => {
        //   console.log('filter value', e);
        setFilterValue(e);
    // }, 300);
    // setFilterTimer(timer);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "menu-wrapper",
        onMouseLeave: ()=>{
            if (ref.current) {
                ref.current.mouseLeave();
            }
        },
        onMouseEnter: ()=>{
            if (ref.current) {
                ref.current.mouseEnter();
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "layout-menu-container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 grid p-0 m-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 pt-0 pl-2 pr-0 mr-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "p-inputgroup pl-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "p-input-icon-left pl-0 mb-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "pi pi-search pt-1"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                            value: filterValue1,
                                            className: "form-control leftMenu-input-heights leftMenu-search mt-2 pb-2",
                                            onChange: (e)=>{
                                                updateFilterValue(e.target.value);
                                            },
                                            placeholder: "Search Containers"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "p-inputgroup-addon leftMenu-input-heights m-0 p-0 mt-2 mr-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                            className: "p-button p-button-text p-button-primary leftMenu-input-heights m-0 p-0 pl-2 pr-2",
                                            tooltip: "Clear the search",
                                            onClick: ()=>{
                                                setFilterValue(null);
                                                setFilterValue1('');
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faX,
                                                className: "p-0 m-0 text-sm"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                            className: "p-button p-button-text p-button-primary leftMenu-input-heights m-0 p-0 pl-2 pr-2",
                                            tooltip: "View Site Options",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                const cur = showMenuOptionsRef.current;
                                                // console.log('cur', cur);
                                                setShowMenuOptions(!cur);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCogs,
                                                className: "p-0 m-0 text-sm"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                showMenuOptions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LeftMenuOptions__WEBPACK_IMPORTED_MODULE_8__/* .LeftMenuOptions */ .k, {
                        ref: refOptions
                    })
                }),
                !showMenuOptions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LeftMenuContainers__WEBPACK_IMPORTED_MODULE_3__/* .LeftMenuContainers */ .S, {
                        ref: ref,
                        filterValue: filterValue,
                        hideOverlays: hideOverlays
                    })
                })
            ]
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2885:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ LeftMenuContainers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8104);
/* harmony import */ var primereact_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hosts_HostSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5753);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7191);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_container_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5179);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6532);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_progressbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_container_overlay__WEBPACK_IMPORTED_MODULE_9__]);
_containers_container_overlay__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react/display-name */ 



// import { ContainerStatusBadge } from './ContainerStatusBadge';









const LeftMenuContainers = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref2)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>{
        return state.containers;
    });
    const siteState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>{
        return state.site;
    });
    const siteStateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(siteState);
    siteStateRef.current = siteState;
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>{
        return state.site;
    });
    const { 0: containerOverlays  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const containerOverlaysRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containerOverlays);
    containerOverlaysRef.current = containerOverlays;
    const { 0: containerOverlayElements  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const containerOverlayElementsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containerOverlayElements);
    containerOverlayElementsRef.current = containerOverlayElements;
    const { 0: activeContainerHover , 1: setActiveContainerHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const activeContainerHoverRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeContainerHover);
    activeContainerHoverRef.current = activeContainerHover;
    const { 0: filterValue , 1: setFilterValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const filterValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(filterValue);
    filterValueRef.current = filterValue;
    const { 0: showOverlays , 1: setShowOverlays  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showOverlaysref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showOverlays);
    showOverlaysref.current = showOverlays;
    const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
    const { 0: items1 , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref2, ()=>({
            async hideOverlays () {
                // toggle(element);
                hideOverlay();
            },
            async mouseEnter () {
                // toggle(element);
                menuMouseEnter();
            },
            async mouseLeave () {
                // toggle(element);
                menuMouseLeave();
            }
        })
    );
    // useEffect(() => {
    //   setContainerOverlays((elRefs) =>
    //     Array(containers)
    //       .fill()
    //       .map((_, i) => elRefs[i] || createRef())
    //   );
    // }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // console.debug('<----------------  Left Menu Containers Update');
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        containers,
        activeHost,
        site.userSettings
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // console.debug('<----------------  Left Menu Containers Update');
        if (props.filterValue && props.filterValue.length > 0) {
            if (props.filterValue !== filterValueRef.current) {
                // setFilterValue(props.filterValue);
                setFilterValue(props.filterValue);
            // filterValueRef.current = props.filterValue;
            // console.log('CT filterValue', props.filterValue);
            }
        } else {
            setFilterValue(null);
            filterValueRef.current = null;
        }
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.filterValue
    ]);
    async function loadData() {
        var ref, ref1;
        // setIsLoading(true);
        let c1 = {
            ...containers
        };
        if (!(activeHostRef === null || activeHostRef === void 0 ? void 0 : activeHostRef.current) && !((ref = activeHostRef.current) === null || ref === void 0 ? void 0 : ref.id)) {
            processContainers([]);
            return;
        }
        if (!((ref1 = containers[activeHostRef.current.id]) === null || ref1 === void 0 ? void 0 : ref1.containers)) {
            processContainers([]);
            return;
        }
        // console.log('Refreshing containers, host list changed');
        c1 = containers[activeHostRef.current.id].containers;
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        processContainers(data);
    // setIsLoading(false);
    }
    function buildMenu() {
        const items = [];
        return items;
    }
    const getRef = (element, containerId)=>{
        containerOverlaysRef.current[containerId] = element;
        return containerOverlaysRef.current[containerId];
    };
    const displayValueTemplate = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    };
    const menuMouseEnter = ()=>{
        setShowOverlays(true);
    };
    const menuMouseLeave = ()=>{
        setShowOverlays(false);
    };
    const cancelMouseOut = ()=>{
        if (timeoutRef.current) {
            // console.log('Cancel Mouse Out', e, containerId);
            clearTimeout(timeoutRef.current);
        }
    };
    const hideOverlay = async ()=>{
        setTimeout(()=>{
            Object.keys(containerOverlaysRef.current).map((key)=>{
                if (containerOverlaysRef.current[key]) {
                    containerOverlaysRef.current[key].hideOverlay(containerOverlayElementsRef.current[key]);
                }
            });
        });
    };
    const toggleOverlay = async (element, containerId)=>{
        // console.log('toggleOverlay');
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        // if (!action) {
        setTimeout(()=>{
            Object.keys(containerOverlaysRef.current).map((key)=>{
                if (containerOverlaysRef.current[key]) {
                    containerOverlaysRef.current[key].hideOverlay(containerOverlayElementsRef.current[key]);
                }
            });
        });
        if (timeoutRef.current) {
            await clearTimeout(timeoutRef.current);
        }
        // if (activeContainerHover?.current !== containerId && action) {
        timeoutRef.current = setTimeout(()=>{
            if (containerOverlaysRef.current[containerId]) {
                containerOverlaysRef.current[containerId].toggleOverlay(element);
                containerOverlayElementsRef.current[containerId] = element;
                setActiveContainerHover(containerId);
            }
        // containerOverlayElementsRef.current[containerId] = element;
        }, site.userSettings.leftMenu.overlayDelay);
    };
    function processContainers(data) {
        const items = buildMenu();
        const projects = [];
        if (data.length > 0) {
            data.filter((item)=>{
                const i = projects.findIndex((x)=>x.name === item.project
                );
                if (i <= -1) {
                    const p = {
                        name: item.project
                    };
                    p.containers = data.filter((a)=>a.project === item.project
                    );
                    projects.push(p);
                }
                return null;
            });
            projects.sort((a, b)=>{
                if (!a.name) {
                    a.name = 'Unknown';
                }
                return a.name.localeCompare(b.name);
            });
        }
        projects.forEach(async (p)=>{
            const project = {
                label: p.name,
                expanded: true,
                icon: 'fa fa-fw fa-briefcase',
                className: 'lightblue-color left-menu-header',
                items: [],
                hasOnline: false,
                showProject: false
            };
            p.containers.forEach((c)=>{
                var ref10, ref3;
                // Is this host online?
                let item1;
                if (c.running || c.paused || ((ref10 = site.userSettings) === null || ref10 === void 0 ? void 0 : (ref3 = ref10.leftMenu) === null || ref3 === void 0 ? void 0 : ref3.showOffline)) {
                    project.hasOnline = true;
                    item1 = {
                        label: c.name,
                        badgeStatus: c.state,
                        expanded: true,
                        badge: true,
                        icon: 'pi pi-fw pi-briefcase',
                        command: ()=>{
                            router.push('/containers/' + c.id);
                        },
                        template: (item, options)=>{
                            var ref, ref4, ref5, ref6, ref7, ref8, ref9;
                            let linkClassName = options.className + ' col-12 pb-0 leftMenu-hover p-ripple black';
                            let iconClassName = 'm-0 p-0 ';
                            iconClassName += helpers_stats_helper__WEBPACK_IMPORTED_MODULE_12__/* .statsHelper.getIconColor */ .Q.getIconColor(c);
                            if (siteStateRef.current.selectedContainerId === c.id) {
                                linkClassName += ' leftMenu-active';
                            }
                            const progressBarCPUClass = 'leftMenu-progressbar ' + helpers_stats_helper__WEBPACK_IMPORTED_MODULE_12__/* .statsHelper.progressBarCPUClasses */ .Q.progressBarCPUClasses(c);
                            const showCpu = ((ref = c.statsSummary) === null || ref === void 0 ? void 0 : ref.cpuUsage) > 0 ? true : false;
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: linkClassName,
                                            target: item.target,
                                            onClick: options.onClick,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12 mb-0 p-0 p-0 pb-2",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "col-12 grid flex p-0 mb-0",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-1 height-100 m-auto p-0 pl-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTelevision,
                                                                    className: iconClassName
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                onMouseEnter: (e)=>toggleOverlay(e, c.id, true)
                                                                ,
                                                                // onMouseLeave={(e) => toggleOverlay(e, c.id, false)}
                                                                className: "col-11 pl-4 height-100 m-auto",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-12 m-0 p-0",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            children: item.label
                                                                        })
                                                                    }),
                                                                    c.running && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-12 p-0 mt-0 pl-0 m-auto",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "text-xs pl-0 ml-0",
                                                                            children: [
                                                                                "CPU: ",
                                                                                ((ref4 = c.statsSummary) === null || ref4 === void 0 ? void 0 : ref4.cpuUsage) || 0,
                                                                                "% Mem: ",
                                                                                ((ref5 = c.statsSummary) === null || ref5 === void 0 ? void 0 : ref5.memoryUsage) ? helpers_format_bytes__WEBPACK_IMPORTED_MODULE_6__/* .formatBytes.bytes */ .t.bytes(c.statsSummary.memoryUsage) : 0
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, 'container_dv2' + c.id)
                                            ]
                                        }, 'container_link' + c.id),
                                        c.running && showCpu && ((ref6 = site.userSettings) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.leftMenu) === null || ref7 === void 0 ? void 0 : ref7.showCpu) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressbar__WEBPACK_IMPORTED_MODULE_11__.ProgressBar, {
                                                className: progressBarCPUClass,
                                                value: Number(c.statsSummary.cpuUsage),
                                                displayValueTemplate: displayValueTemplate
                                            })
                                        }),
                                        showOverlaysref.current && ((ref8 = site.userSettings) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.leftMenu) === null || ref9 === void 0 ? void 0 : ref9.showOverlays) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_container_overlay__WEBPACK_IMPORTED_MODULE_9__/* .ContainerOverlay */ .Z, {
                                            ref: (element)=>getRef(element, c.id)
                                            ,
                                            container: c,
                                            cancelMouseOut: cancelMouseOut,
                                            hideOverlay: hideOverlay
                                        }, c.id)
                                    ]
                                }, 'container_' + c.id)
                            }));
                        }
                    };
                }
                if (item1) {
                    if (!filterValueRef.current || (filterValueRef === null || filterValueRef === void 0 ? void 0 : filterValueRef.current) === '') {
                        project.items.push(item1);
                        project.showProject = true;
                    } else {
                        if (item1.label && item1.label.includes(filterValueRef.current)) {
                            project.items.push(item1);
                            project.showProject = true;
                        }
                    }
                }
            });
            if (project.hasOnline && project.showProject) {
                items.push(project);
            }
            if (items.length > 0) {
                setItems(items);
            }
        });
    }
    //   if (isLoading) return <Spinner />;
    // if (error) return <div>Failed to load Container: {error}</div>;
    if (!containers) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Containers."
    }));
    if (containers.length === 0) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Containers."
    }));
    let menuStyle = {};
    if (containers.length > 5) {
        menuStyle = {};
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hosts_HostSelector__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: menuStyle,
                className: "leftMenu-overflow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                        model: items1,
                        multiple: true,
                        expanded: true,
                        style: {
                            width: '235px',
                            border: 'none'
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "leftMenu-bottom-spacer"
                    })
                ]
            })
        ]
    }));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ LeftMenuOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3621);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5452);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_actions_site_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5945);
/* harmony import */ var services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3720);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5514);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7784);
/* harmony import */ var primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_8__);

/* eslint-disable react-hooks/exhaustive-deps */ 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCogs, faFilter } from '@fortawesome/free-solid-svg-icons';








// const [cpuColor, setCpuColor] = useState('1976D2');
// const [diskInColor, setMemoryUSageColor] = useState('1976D2');
// const [diskOutColor, setMemoryUSageColor] = useState('1976D2');
// const [memoryUsageColor, setMemoryUSageColor] = useState('1976D2');
// const [memoryUsageColor, setMemoryUSageColor] = useState('1976D2');
// const [memoryUsageColor, setMemoryUSageColor] = useState('1976D2');
// const [memoryUsageColor, setMemoryUSageColor] = useState('1976D2');

function LeftMenuOptions() {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(user);
    userRef.current = user;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>{
        return state.site;
    });
    const { 0: overlayDelay , 1: setOverlayDelay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(300);
    const overlayDelayRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(overlayDelay);
    overlayDelayRef.current = overlayDelay;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // console.log('state', site);
        const subscription = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .authService.user.subscribe */ .O.user.subscribe((x)=>setUser(x)
        );
        return ()=>subscription.unsubscribe()
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (site.userSettings) {
            const delay = site.userSettings.leftMenu.overlayDelay;
            setOverlayDelay(delay);
        }
    }, [
        site.userSettings
    ]);
    const saveSettings = async ()=>{
        // console.log('X', site.userSettings);
        services_users_service__WEBPACK_IMPORTED_MODULE_5__/* .usersService.updateUserSettings */ .X.updateUserSettings({
            id: user,
            userSettings: site.userSettings
        });
    };
    const updateOverlayDelay = async (e)=>{
        setOverlayDelay(e);
        const settings = {
            ...site.userSettings
        };
        settings.leftMenu.overlayDelay = e;
        dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_9__/* .setUserSettings */ .m9)(settings));
        setTimeout(()=>{
            saveSettings();
        }, 100);
    };
    const updateChartColor = async (chart, e)=>{
        // console.log('Chart', chart);
        // console.log('E', e);
        const settings = {
            ...site.userSettings
        };
        settings.chartColors[chart] = e;
        dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_9__/* .setUserSettings */ .m9)(settings));
        setTimeout(()=>{
            saveSettings();
        }, 100);
    };
    // only show nav when logged in
    if (!user) return null;
    if (!site.userSettings) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "menu-wrapper",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "layout-menu-container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "leftMenu-overflow col-12 m-0 p-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 p-0 m-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_8__.Panel, {
                            header: "Left Menu Settings",
                            className: "col-12 p-0 leftMenu-panel",
                            collapsed: false,
                            toggleable: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 mr-0 pr-0 p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-8 p-0 py-2 m-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "pl-2 m-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "Show Offline Hosts"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-4 pr-0 py-1 text-right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_3__.InputSwitch, {
                                                        tooltip: "Show offline containers / hosts in the left menu.",
                                                        className: "leftMenu-options-setting-switch",
                                                        checked: (ref = site.userSettings) === null || ref === void 0 ? void 0 : (ref1 = ref.leftMenu) === null || ref1 === void 0 ? void 0 : ref1.showOffline,
                                                        onChange: (e)=>{
                                                            site.userSettings.leftMenu.showOffline = e.value;
                                                            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_9__/* .setUserSettings */ .m9)(site.userSettings));
                                                            saveSettings();
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-8 p-0 py-2 m-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "pl-2 m-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "Show CPU Bars"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-4 pr-0 py-1 text-right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_3__.InputSwitch, {
                                                        tooltip: "Show left menu CPU bars below the container for running container.",
                                                        checked: (ref2 = site.userSettings) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.leftMenu) === null || ref3 === void 0 ? void 0 : ref3.showCpu,
                                                        onChange: (e)=>{
                                                            site.userSettings.leftMenu.showCpu = e.value;
                                                            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_9__/* .setUserSettings */ .m9)(site.userSettings));
                                                            saveSettings();
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-8 p-0 py-2 m-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "pl-2 m-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "Show Host Overlays"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-4 pr-0 py-1 text-right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_3__.InputSwitch, {
                                                        tooltip: "Show left menu host overlays when hovering",
                                                        checked: (ref4 = site.userSettings) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.leftMenu) === null || ref5 === void 0 ? void 0 : ref5.showOverlays,
                                                        onChange: (e)=>{
                                                            site.userSettings.leftMenu.showOverlays = e.value;
                                                            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_9__/* .setUserSettings */ .m9)(site.userSettings));
                                                            saveSettings();
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-8 p-0 py-2 m-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "pl-2 m-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "Overlay Delay"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-4 pr-0 py-1 text-right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-8 pt-0 pb-0 mr-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_6__.InputNumber, {
                                                            className: "leftMenu-inputNumber",
                                                            inputId: 'overLayDelay',
                                                            tooltip: "Duration before the left menu overlays appear in milliseconds. Keep this below 2000",
                                                            value: overlayDelay,
                                                            step: 1,
                                                            min: 0,
                                                            useGrouping: false,
                                                            max: 5000,
                                                            onChange: (e)=>{
                                                                updateOverlayDelay(e.value);
                                                            }
                                                        }, 'overLayDelay')
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 p-0 m-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_8__.Panel, {
                            header: "Chart Colors",
                            className: "m-0 p-0 leftMenu-panel",
                            collapsed: true,
                            toggleable: true,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 m-0 p-0 grid",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-8 p-0 py-2 m-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "pl-2 m-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            children: "Chart Fill"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-4 pr-0 py-1 text-right",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_3__.InputSwitch, {
                                                        tooltip: "Show Chart Fill on single instance charts.",
                                                        className: "leftMenu-options-setting-switch",
                                                        checked: (ref6 = site.userSettings) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.chartColors) === null || ref7 === void 0 ? void 0 : ref7.fill,
                                                        onChange: (e)=>{
                                                            site.userSettings.chartColors.fill = e.value;
                                                            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_9__/* .setUserSettings */ .m9)(site.userSettings));
                                                            saveSettings();
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Background Color:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Chart Background Color",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.background,
                                                        onChange: (e)=>updateChartColor('background', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Labels Color:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Chart Labels Color",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.labels,
                                                        onChange: (e)=>updateChartColor('labels', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Ticks (X):"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Chart Ticks X Color",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.ticksX,
                                                        onChange: (e)=>updateChartColor('ticksX', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Ticks (Y):"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Chart Ticks Y Color",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.ticksY,
                                                        onChange: (e)=>updateChartColor('ticksY', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Grid (X):"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Chart X Grid Color",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.gridX,
                                                        onChange: (e)=>updateChartColor('gridX', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Grid (Y):"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Chart Y Grid Color",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.gridY,
                                                        onChange: (e)=>updateChartColor('gridY', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "CPU:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the CPU Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.cpu,
                                                        onChange: (e)=>updateChartColor('cpu', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Memory Usage Color:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Memory Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.memoryUsage,
                                                        onChange: (e)=>updateChartColor('memoryUsage', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Memory Percentage:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Memory Percentage Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.memoryPercentage,
                                                        onChange: (e)=>updateChartColor('memoryPercentage', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Processes:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Processs Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.processes,
                                                        onChange: (e)=>updateChartColor('processes', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Disk Read:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Disk Read Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.diskRead,
                                                        onChange: (e)=>updateChartColor('diskRead', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Disk Write:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Disk Read Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.diskWrite,
                                                        onChange: (e)=>updateChartColor('diskWrite', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Network Rx:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        tooltip: "Change the Network Receive Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.networkRx,
                                                        onChange: (e)=>updateChartColor('networkRx', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 p-2 m-0 leftMenu-hover p-ripple black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12 p-0 m-0 grid mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-10 pt-1 p-l-3",
                                                    children: "Network Tx:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-2 pr-4 pt-0 pb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_colorpicker__WEBPACK_IMPORTED_MODULE_7__.ColorPicker, {
                                                        format: "hex",
                                                        tooltip: "Change the Network Transmit Chart Colors",
                                                        className: "mr-4",
                                                        value: site.userSettings.chartColors.networkTx,
                                                        onChange: (e)=>updateChartColor('networkTx', e.value)
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "leftMenu-bottom-spacer"
                    })
                ]
            })
        })
    }));
}


/***/ }),

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3621);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_6__);








function Nav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const subscription = _services_auth_service__WEBPACK_IMPORTED_MODULE_3__/* .authService.user.subscribe */ .O.user.subscribe((x)=>setUser(x)
        );
        return ()=>subscription.unsubscribe()
        ;
    }, []);
    function logout() {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__/* .authService.logout */ .O.logout();
    }
    // only show nav when logged in
    if (!user) return null;
    const confirm = ()=>{
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_6__.confirmDialog)({
            className: 'confirm-dialogs',
            message: 'Are you sure you want to logout?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>logout()
        });
    };
    const items = [
        {
            label: 'Home',
            icon: 'fa fa-fw fa-home',
            command: ()=>{
                router.push('/');
            }
        },
        {
            label: 'Containers',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-list',
                    command: ()=>{
                        router.push('/containers');
                    }
                },
                {
                    label: 'Profilings',
                    icon: 'pi pi-fw pi-chart-line',
                    command: ()=>{
                        router.push('/profilings');
                    }
                },
                {
                    label: 'Create',
                    icon: 'pi pi-fw pi-plus',
                    command: ()=>{
                        router.push('/containers/create');
                    }
                }, 
            ]
        },
        {
            label: 'Images',
            icon: 'pi pi-fw pi-image',
            items: [
                {
                    label: 'Search Images',
                    icon: 'pi pi-fw pi-search',
                    command: ()=>{
                        router.push('/images/search');
                    }
                },
                {
                    label: 'View All',
                    icon: 'pi pi-fw pi-list',
                    command: ()=>{
                        router.push('/images');
                    }
                },
                {
                    label: 'Create Image',
                    icon: 'pi pi-fw pi-plus',
                    command: ()=>{
                        router.push('/images/create');
                    }
                }, 
            ]
        },
        {
            label: 'Volumes',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-list',
                    command: ()=>{
                        router.push('/volumes');
                    }
                },
                {
                    label: 'Create',
                    icon: 'pi pi-fw pi-plus',
                    command: ()=>{
                        router.push('/volumes/create');
                    }
                }, 
            ]
        },
        {
            label: 'Networks',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-list',
                    command: ()=>{
                        router.push('/networks');
                    }
                },
                {
                    label: 'Create',
                    icon: 'pi pi-fw pi-plus',
                    command: ()=>{
                        router.push('/networks/create');
                    }
                }, 
            ]
        },
        {
            label: 'System',
            icon: 'pi pi-fw pi-desktop',
            items: [
                {
                    label: 'Activity',
                    icon: 'pi pi-fw pi-list',
                    command: ()=>{
                        router.push('/activity');
                    }
                },
                {
                    label: 'State',
                    icon: 'pi pi-fw pi-file',
                    command: ()=>{
                        router.push('/state');
                    }
                },
                {
                    label: 'Hosts',
                    icon: 'pi pi-fw pi-globe',
                    items: [
                        {
                            label: 'View',
                            icon: 'pi pi-fw pi-list',
                            command: ()=>{
                                router.push('/hosts');
                            }
                        },
                        {
                            label: 'Join',
                            icon: 'pi pi-fw pi-plus',
                            command: ()=>{
                                router.push('/hosts/create');
                            }
                        }, 
                    ]
                }, 
            ]
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_4__.Menubar, {
            model: items,
            end: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                onClick: confirm,
                icon: "pi pi-power-off",
                label: "Logout"
            })
        })
    }));
}


/***/ }),

/***/ 4617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_docker_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5249);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(333);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3223);
/* harmony import */ var store_actions_images_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8601);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2222);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9678);
/* harmony import */ var store_actions_networks_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1457);
/* harmony import */ var store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6878);
/* harmony import */ var store_actions_site_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5945);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_docker_events_service__WEBPACK_IMPORTED_MODULE_2__]);
_services_docker_events_service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















function State() {
    const { 0: socket , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket);
    socketRef.current = socket;
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const hosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>{
        return state.hosts;
    });
    // const site = useSelector((state) => {
    //   return state.site;
    // });
    // const site = useSelector((state) => {
    //   return state.site;
    // });
    const hostsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hosts);
    hostsRef.current = hosts;
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
            // console.log('Loading Site settings', site);
            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_8__/* .selectContainerId */ .el)({
                data: 0
            }));
        }
        await getSiteData();
    // await loadHosts();
    // setTimeout(() => {
    //   loadContainers(1);
    //   loadNetworks(1);
    //   // dockerUsage(1);
    //   loadImages(1);
    //   loadVolumes(1);
    //   loadContainers(5);
    //   loadImages(5);
    //   loadNetworks(5);
    //   loadVolumes(5);
    // dockerUsage(1);
    //  }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
            // console.log('State socket Unloading');
            // socketRef.current.close();
            // setSocketLoaded(false);
            }
        };
    }, []);
    async function getSiteData() {
        try {
            socketRef.current.emit('siteData', {
                command: 'getSiteData',
                callback: 'siteData',
                data: {}
            });
        } catch (error) {
        // console.log(error);
        }
    }
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        // console.log('State socket Loaded');
        const s = await _services_docker_events_service__WEBPACK_IMPORTED_MODULE_2__/* .dockerEventsService.attachSocket */ .Y.attachSocket();
        setSocket(s);
        s.on('siteData', (data)=>{
            // console.log('-----------> SITE Usage  ', data);
            if (data.status === 'success') {
                // console.log('Data', data);
                if (data.data.hosts) {
                    dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .fullReplaceHosts */ .ZH)({
                        data: data.data.hosts
                    }));
                    if (!activeHost) {
                        dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .setActiveHost */ .u6)({
                            data: data.data.hosts[1]
                        }));
                    }
                }
                if (data.data.containers) {
                    dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .fullReplaceContainers */ .g8)({
                        data: data.data.containers
                    }));
                }
                if (data.data.volumes) {
                    dispatch((0,store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__/* .fullReplaceVolumes */ .HY)({
                        data: data.data.volumes
                    }));
                }
                if (data.data.networks) {
                    dispatch((0,store_actions_networks_actions__WEBPACK_IMPORTED_MODULE_12__/* .fullReplaceNetworks */ .yW)({
                        data: data.data.networks
                    }));
                }
                if (data.data.images) {
                    dispatch((0,store_actions_images_actions__WEBPACK_IMPORTED_MODULE_13__/* .fullReplaceImages */ .Dl)({
                        data: data.data.images
                    }));
                }
            }
        });
        s.on('dockerUsage', (data)=>{
            // console.log('-----------> DOCKER Usage  ', data);
            if (data.status === 'success') {
                var ref, ref1;
                if (data.data.containers.length > 0) {
                    processContainersList({
                        status: 'success',
                        data: data.data.containers
                    });
                }
                if (data.data.volumes.length > 0) {
                    processVolumesList({
                        status: 'success',
                        data: data.data.volumes
                    });
                }
                if (data.data.images.length > 0) {
                    processImagesList({
                        status: 'success',
                        data: data.data.images
                    });
                }
                if (((ref = data.data.networks) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                    processNetworksList({
                        status: 'success',
                        data: data.data.networks
                    });
                }
                if (((ref1 = data.data.hosts) === null || ref1 === void 0 ? void 0 : ref1.length) > 0) {
                    processHostsList({
                        status: 'success',
                        data: data.data.hosts
                    });
                }
            }
        });
        s.on('dockerEventsReceiver', async (data)=>{
            if (data.type !== 'container' && data.action !== 'update') {
                console.log('-----------> DOCKER EVENT  ', data);
            }
            const toastTimeout = 800;
            let message = '';
            if (data.type === 'container') {
                var ref;
                const name = ((ref = data.data) === null || ref === void 0 ? void 0 : ref.name) ? data.data.name : '';
                message = 'Container ' + name + ' action: ' + data.action;
                switch(data.action){
                    case 'update':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        break;
                    case 'rename':
                    case 'start':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Container Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'stop':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Container Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'pause':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'info',
                                    summary: 'Container Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'unpause':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Container Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'kill':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'info',
                                    summary: 'Container Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'die':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'info',
                                    summary: 'Container Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'destroy':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .resetContainers */ .IS)({}, activeHostRef.current.id));
                        loadContainers(activeHostRef.current.id);
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'info',
                                    summary: 'Container Notice',
                                    detail: 'Reloading containers due to update',
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'exec_start':
                    case data.action.includes('exec_die'):
                    case data.action.includes('exec_create'):
                        // dispatch(addContainer(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Container Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'create':
                        dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                        // loadContainers(data.hostId);
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'info',
                                    summary: 'Container Notice',
                                    detail: 'Reloading containers due to update',
                                    life: 4000
                                });
                            }, 1000);
                        }
                        break;
                    default:
                        if (data.id) {
                            dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .addContainer */ .sO)(data));
                            if (toast === null || toast === void 0 ? void 0 : toast.current) {
                                setTimeout(()=>{
                                    toast.current.show({
                                        severity: 'info',
                                        summary: 'Container Notice',
                                        detail: message,
                                        life: 4000
                                    });
                                }, toastTimeout);
                            }
                        }
                        break;
                }
            // if (data.action.includes('exec_die') || data.action.includes('exec_create')) {
            //   // if (toast?.current) {
            //   //   toast.current.show({ severity: 'success', summary: 'Container Notice', detail: message, life: 4000 });
            //   // }
            // }
            // console.log('Container Action', data.action);
            }
            if (data.type === 'image') {
                var ref2;
                const name = ((ref2 = data.data) === null || ref2 === void 0 ? void 0 : ref2.name) ? data.data.name : '';
                message = 'Image ' + name + ' action: ' + data.action;
                switch(data.action){
                    case 'pull':
                        dispatch((0,store_actions_images_actions__WEBPACK_IMPORTED_MODULE_13__/* .addImage */ .mN)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Image Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'commit':
                        dispatch((0,store_actions_images_actions__WEBPACK_IMPORTED_MODULE_13__/* .addImage */ .mN)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Image Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'tag':
                        dispatch((0,store_actions_images_actions__WEBPACK_IMPORTED_MODULE_13__/* .addImage */ .mN)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Image Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'untag':
                        dispatch((0,store_actions_images_actions__WEBPACK_IMPORTED_MODULE_13__/* .removeImage */ .CM)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Image Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'delete':
                        // await dispatch(resetImages({}, activeHostRef.current.id));
                        await loadImages(activeHostRef.current.id);
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Image Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                }
            }
            if (data.type === 'volume') {
                var ref3;
                const name = ((ref3 = data.data) === null || ref3 === void 0 ? void 0 : ref3.name) ? data.data.name : '';
                message = 'Volume ' + name + ' action: ' + data.action;
                // console.log('Volume Event', message);
                switch(data.action){
                    case 'create':
                        dispatch((0,store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__/* .addVolume */ .Hg)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Volume Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'update':
                        dispatch((0,store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__/* .addVolume */ .Hg)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Volume Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'tag':
                        dispatch((0,store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__/* .addVolume */ .Hg)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Volume Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'mount':
                    case 'unmount':
                        dispatch((0,store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__/* .addVolume */ .Hg)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Volume Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'destroy':
                        await dispatch((0,store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__/* .resetVolumes */ .eX)({}, activeHostRef.current.id));
                        await loadVolumes(activeHostRef.current.id);
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Volume Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                }
            }
            if (data.type === 'network') {
                var ref4;
                const name = ((ref4 = data.data) === null || ref4 === void 0 ? void 0 : ref4.name) ? data.data.name : '';
                message = 'Network ' + name + ' action: ' + data.action;
                // console.log('Network Event', message);
                switch(data.action){
                    case 'create':
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        dispatch((0,store_actions_networks_actions__WEBPACK_IMPORTED_MODULE_12__/* .addNetwork */ .BN)(data));
                        break;
                    case 'update':
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        dispatch((0,store_actions_networks_actions__WEBPACK_IMPORTED_MODULE_12__/* .addNetwork */ .BN)(data));
                        break;
                    case 'disconnect':
                    case 'connect':
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        dispatch((0,store_actions_networks_actions__WEBPACK_IMPORTED_MODULE_12__/* .addNetwork */ .BN)(data));
                        break;
                    case 'destroy':
                        await dispatch((0,store_actions_networks_actions__WEBPACK_IMPORTED_MODULE_12__/* .resetNetworks */ .xu)({}, activeHostRef.current.id));
                        loadNetworks(activeHostRef.current.id);
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                }
            }
            if (data.type === 'host') {
                var ref5;
                const name = ((ref5 = data.data) === null || ref5 === void 0 ? void 0 : ref5.name) ? data.data.name : '';
                message = 'Host ' + name + ' action: ' + data.action;
                // console.log('Host Event', message);
                switch(data.action){
                    case 'create':
                        dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .addHost */ .Yq)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'update':
                        dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .addHost */ .Yq)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'tag':
                        dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .addHost */ .Yq)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'mount':
                    case 'unmount':
                        dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .addHost */ .Yq)(data));
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                    case 'destroy':
                        await dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .resetHosts */ .Jx)(activeHostRef.current.id));
                        loadNetworks(activeHostRef.current.id);
                        if (toast === null || toast === void 0 ? void 0 : toast.current) {
                            setTimeout(()=>{
                                toast.current.show({
                                    severity: 'success',
                                    summary: 'Network Notice',
                                    detail: message,
                                    life: 4000
                                });
                            }, toastTimeout);
                        }
                        break;
                }
            }
        });
        s.on('containersList', (data)=>{
            // console.log('Updating Containers List');
            processContainersList(data);
        });
        s.on('imagesList', (data)=>{
            // console.log('Updating Images List');
            processImagesList(data);
        });
        s.on('volumesList', (data)=>{
            // console.log('Updating Volumes List');
            processVolumesList(data);
        });
        s.on('networksList', (data)=>{
            // console.log('Updating Networks List');
            processNetworksList(data);
        });
        s.on('hostsList', (data)=>{
            // console.log('Updating Hosts List');
            processHostsList(data);
        });
        s.on('errorHandler', (data)=>{
            // console.debug('-----------> DOCKER ERROR  ', data);
            if (data.error) {
                setErrorMessage(data.error);
                setShowError(true);
            }
        });
        return s;
    }
    async function loadContainers(hostId = 1) {
        try {
            socketRef.current.emit('docker', {
                command: 'listContainers',
                callback: 'containersList',
                hostId: hostId,
                data: {}
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function processContainersList(data) {
        try {
            if (data && data.status === 'success') {
                if (data.data) {
                    let containerObj = {};
                    let containerHost;
                    data.data.map((container)=>{
                        // console.log('container', container)
                        let cid;
                        if (container.host) {
                            cid = container.host.id;
                            containerHost = container.host;
                        } else {
                            if (container.hostId) {
                                cid = container.hostId;
                            }
                            if (cid) {
                                if (hostsRef.current.hosts.length > 0) {
                                    containerHost = hostsRef.current.hosts[cid];
                                }
                            }
                        }
                    });
                    if (!containerHost) {
                        // console.debug('Container processContainersList', data);
                        // console.debug('Container host Missing', containerHost);
                        return;
                    }
                    containerObj[containerHost.id] = data.data;
                    const cs = {};
                    data.data.forEach((container)=>{
                        cs[container.id] = container;
                    });
                    dispatch((0,store_actions_containers_actions__WEBPACK_IMPORTED_MODULE_10__/* .replaceContainers */ .AE)({
                        containers: cs,
                        host: containerHost
                    }));
                }
            } else {
                throw Error('Error loading containers list');
            }
        } catch (error) {
            console.debug('Error loading containers', error);
        }
    }
    async function loadImages(hostId = 1) {
        try {
            socketRef.current.emit('docker', {
                command: 'listImages',
                callback: 'imagesList',
                hostId: hostId,
                data: {}
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function processImagesList(data) {
        try {
            if (data && data.status === 'success') {
                if (data.data) {
                    let imageObj = {};
                    let imageHost;
                    data.data.map((image)=>{
                        // console.log('container', container)
                        let cid;
                        if (image.host) {
                            cid = image.host.id;
                            imageHost = image.host;
                        } else {
                            if (image.hostId) {
                                cid = image.hostId;
                            }
                            if (cid) {
                                if (hostsRef.current.hosts.length > 0) {
                                    imageHost = hostsRef.current.hosts[cid];
                                }
                            }
                        }
                    });
                    if (!imageHost) {
                        console.debug('Image processHostsList', data);
                        console.debug('Image host Missing', imageHost);
                        return;
                    }
                    imageObj[imageHost.id] = data.data;
                    const cs = {};
                    data.data.forEach((image)=>{
                        cs[image.id] = image;
                    });
                    dispatch((0,store_actions_images_actions__WEBPACK_IMPORTED_MODULE_13__/* .replaceImages */ .wr)({
                        images: cs,
                        host: imageHost
                    }));
                }
            } else {
                throw Error('Error loading images list');
            }
        } catch (error) {
            console.warn(error);
        }
    }
    async function loadVolumes(hostId = 1) {
        try {
            socketRef.current.emit('docker', {
                command: 'listVolumes',
                callback: 'volumesList',
                hostId: hostId,
                data: {}
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function processVolumesList(data) {
        try {
            if (data && data.status === 'success') {
                if (data.data) {
                    let volumeObj = {};
                    let volumeHost;
                    data.data.map((volume)=>{
                        // console.log('container', container)
                        let cid;
                        if (volume.host) {
                            cid = volume.host.id;
                            volumeHost = volume.host;
                        } else {
                            if (volume.hostId) {
                                cid = volume.hostId;
                            }
                            if (cid) {
                                if (hostsRef.current.hosts.length > 0) {
                                    volumeHost = hostsRef.current.hosts[cid];
                                }
                            }
                        }
                    });
                    if (!volumeHost) {
                        console.debug('Volume processVolumeList', data);
                        // console.debug('Image host Missing', imageHost);
                        return;
                    }
                    volumeObj[volumeHost.id] = data.data;
                    const cs = {};
                    data.data.forEach((volume)=>{
                        cs[volume.id] = volume;
                    });
                    dispatch((0,store_actions_volumes_actions__WEBPACK_IMPORTED_MODULE_11__/* .replaceVolumes */ .a1)({
                        volumes: cs,
                        host: volumeHost
                    }));
                }
            } else {
                throw Error('Error loading Volumes list');
            }
        } catch (error) {
            console.warn(error);
        }
    }
    // async function loadHosts() {
    //   try {
    //     socketRef.current.emit('hosts', {
    //       command: 'listHosts',
    //       callback: 'hostsList',
    //       data: {},
    //     });
    //     return true;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    async function processHostsList(data) {
        try {
            // console.log('hostList Data', data);
            if (data && data.status === 'success') {
                if (data.data) {
                    let hostObj;
                    data.data.forEach((host)=>{
                        if (!hostObj) hostObj = {};
                        hostObj[host.id] = host;
                    });
                    if (hostObj) {
                        dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .replaceHosts */ .HQ)({
                            data: hostObj
                        }));
                        if (!activeHost) {
                            dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_9__/* .setActiveHost */ .u6)({
                                data: data.data[0]
                            }));
                        }
                    }
                }
            } else {
                throw Error('Error loading Hosts list');
            }
        } catch (error) {
            console.warn(error);
        }
    }
    async function loadNetworks(hostId = 1) {
        try {
            socketRef.current.emit('docker', {
                command: 'listNetworks',
                callback: 'networksList',
                hostId: hostId,
                data: {}
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function processNetworksList(data) {
        try {
            if (data && data.status === 'success') {
                if (data.data) {
                    let networkObj = {};
                    let networkHost;
                    data.data.map((network)=>{
                        // console.log('container', container)
                        let cid;
                        if (network.host) {
                            cid = network.host.id;
                            networkHost = network.host;
                        } else {
                            if (network.hostId) {
                                cid = network.hostId;
                            }
                            if (cid) {
                                if (hostsRef.current.hosts.length > 0) {
                                    networkHost = hostsRef.current.hosts[cid];
                                }
                            }
                        }
                    });
                    if (!networkHost) {
                        console.debug('Netowrks processNEtworkList', data);
                        // console.debug('Image host Missing', imageHost);
                        return;
                    }
                    networkObj[networkHost.id] = data.data;
                    const cs = {};
                    data.data.forEach((network)=>{
                        cs[network.id] = network;
                    });
                    dispatch((0,store_actions_networks_actions__WEBPACK_IMPORTED_MODULE_12__/* .replaceNetworks */ .od)({
                        networks: cs,
                        host: networkHost
                    }));
                }
            } else {
                throw Error('Error loading Networks list');
            }
        } catch (error) {
            console.warn(error);
        }
    }
    // async function dockerUsage(hostId = 1) {
    //   try {
    //     socketRef.current.emit('docker', {
    //       command: 'dockerUsage',
    //       callback: 'dockerUsage',
    //       hostId: hostId,
    //       data: {},
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_4__.Toast, {
                    ref: toast
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
                    header: "Error Message",
                    visible: showError,
                    style: {
                        width: '70vw'
                    },
                    onHide: ()=>setShowError(false)
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__.Prism, {
                        className: "m-0 p-4",
                        language: "html",
                        style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_7__.coldarkDark,
                        showLineNumbers: false,
                        wrapLines: true,
                        wrapLongLines: true,
                        children: errorMessage
                    })
                })
            ]
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContainerOverlay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_overlaypanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3977);
/* harmony import */ var primereact_overlaypanel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_overlaypanel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7191);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6532);
/* harmony import */ var primereact_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9318);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1515);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_ContainerStatusBadge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6374);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_7__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable react/display-name */ 

// import { Button } from 'primereact/button';









const ContainerOverlay = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref7)=>{
    var ref1, ref2, ref3, ref4, ref5;
    const { 0: container1 , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(container1);
    containerRef.current = container1;
    const opRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref7, ()=>({
            async toggleOverlay (element) {
                toggle(element);
            },
            async hideOverlay (element) {
                hide(element);
            }
        })
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setContainer(props.container);
        if (!socketLoaded) {
            setTimeout(()=>{
                loadSocket();
            }, 500);
        }
        buildMenuItems(props.container);
    }, [
        props.container
    ]);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_7__/* .socketService.getSocket */ .L.getSocket();
        setSocket(socket);
        return socket;
    }
    function buildMenuItems(c) {
        const menuItems = [];
        let container;
        let className = '';
        if (c.current) {
            container = c.current;
        } else {
            container = c;
        }
        menuItems.push({
            label: 'Logs',
            icon: 'fa fa-fw fa-file',
            tooltip: 'Open stdout and stderr logs in a terminal window.',
            command: ()=>{
                openLogs();
            // confirm('openLogs', 'Open Terminal?', e);
            }
        });
        if (container.running) {
            menuItems.push({
                label: 'Terminal',
                icon: 'fa fa-fw fa-tv',
                className: 'p-button-raised p-button p-button-info p-0',
                command: ()=>{
                    // confirm('openTerminal', 'Open Terminal?', e);
                    openTerminal();
                }
            });
        }
        // className = showDetailsRef.current === false ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Inspect',
            icon: 'fa fa-fw fa-eye',
            className: className,
            command: ()=>{
                inspectContainer();
                toggleInspect();
            }
        });
        const controlItems = {
            label: 'Control',
            icon: 'fa fa-fw fa-power-off',
            items: []
        };
        if (container.running) {
            if (!container.paused) {
                controlItems.items.push({
                    label: 'Pause',
                    icon: 'fa fa-fw fa-pause',
                    command: (e)=>{
                        confirm('pauseContainer', 'Pause Container?', e);
                    }
                });
            } else {
                controlItems.items.push({
                    label: 'Resume',
                    icon: 'fa fa-fw fa-play',
                    key: 'foo',
                    className: 'p-button-raised p-button p-button-warning p-0',
                    command: (e)=>{
                        confirm('resumeContainer', 'Resume Container?', e);
                    }
                });
            }
            controlItems.items.push({
                label: 'Stop',
                icon: 'fa fa-fw fa-stop',
                command: (e)=>{
                    confirm('stopContainer', 'Stop Container?', e);
                }
            });
            controlItems.items.push({
                label: 'Restart',
                icon: 'fa fa-fw fa-redo',
                command: (e)=>{
                    confirm('restartContainer', 'Restart Container?', e);
                }
            });
            controlItems.items.push({
                label: 'Kill',
                icon: 'fa fa-fw fa-skull',
                command: (e)=>{
                    confirm('killContainer', 'Kill Container?', e);
                }
            });
        } else {
            controlItems.items.push({
                label: 'Start',
                icon: 'fa fa-solid fa-play',
                command: (e)=>{
                    confirm('startContainer', 'Start Container?', e);
                }
            });
            controlItems.items.push({
                label: 'Remove',
                icon: 'fa fa-fw fa-power-off',
                command: (e)=>{
                    confirm('removeContainer', 'Remove Container?', e);
                }
            });
        }
        menuItems.push(controlItems);
        setMenuItems(menuItems);
    }
    function toggle(element) {
        opRef.current.toggle(element);
    }
    function hide(element) {
        opRef.current.hide(element);
    }
    function cancelMouseOut() {
        props.cancelMouseOut();
    }
    function hideOverlay() {
        props.hideOverlay();
    }
    const toggleInspect = ()=>{
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const confirm = (action, title, target = null)=>{
        var ref;
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            target: ((ref = target.originalEvent) === null || ref === void 0 ? void 0 : ref.currentTarget) ? target.originalEvent.currentTarget : null,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>{
                switch(action){
                    default:
                        break;
                    case 'pauseContainer':
                        pauseContainer();
                        break;
                    case 'openTerminal':
                        openTerminal();
                        break;
                    case 'execContainer':
                        execContainer();
                        break;
                    case 'resumeContainer':
                        resumeContainer();
                        break;
                    case 'startContainer':
                        startContainer();
                        break;
                    case 'stopContainer':
                        stopContainer();
                        break;
                    case 'restartContainer':
                        restartContainer();
                        break;
                    case 'killContainer':
                        killContainer();
                        break;
                    case 'removeContainer':
                        removeContainer();
                        break;
                }
            }
        });
    };
    function openLogs() {
        var ref;
        socketRef.current.emit('tailLogs', {
            command: 'tailLogs',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsTerminalLogs_' + containerRef.current.id,
            hook: 'tailLogs'
        });
    }
    function openTerminal() {
        var ref;
        socketRef.current.emit('openTerminal', {
            command: 'openTerminal',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsTerminal_' + containerRef.current.id,
            hook: 'openTerminal'
        });
    }
    function execContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'containerExec',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsExec_' + containerRef.current.id,
            hook: 'containerExec'
        });
    }
    function stopContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'stop',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'stopContainer'
        });
    }
    function startContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'start',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'startContainer'
        });
    }
    const restartContainer = ()=>{
        var ref;
        socketRef.current.emit('docker', {
            command: 'restart',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'restartContainer'
        });
    };
    function pauseContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'pause',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'pauseContainer'
        });
    }
    function resumeContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'unpause',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'resumeContainer'
        });
    }
    function inspectContainer() {
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            var ref;
            const obj = {
                command: 'inspect',
                containerId: containerRef.current.containerId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResuls_' + containerRef.current.id,
                hook: 'inspectContainer'
            };
            socketRef.current.emit('docker', obj);
        }
    }
    function killContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'kill',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'killContainer'
        });
    }
    function removeContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'remove',
            containerId: containerRef.current.containerId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'removeContainer'
        });
    }
    if (!container1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    let memPercent = 0;
    if ((ref1 = container1.statsSummary) === null || ref1 === void 0 ? void 0 : ref1.memoryUsage) {
        var ref6;
        memPercent = Math.round(container1.statsSummary.memoryUsage / ((ref6 = container1.statsSummary) === null || ref6 === void 0 ? void 0 : ref6.memoryLimit) * 100);
    }
    const progressBarCPUClass = 'mt-1 containerOverlay-progressbar ' + helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.progressBarCPUClasses */ .Q.progressBarCPUClasses(container1);
    const progressBarMemoryClass = 'mt-1 containerOverlay-progressbar ' + helpers_stats_helper__WEBPACK_IMPORTED_MODULE_6__/* .statsHelper.progressBarMemoryClasses */ .Q.progressBarMemoryClasses(memPercent);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_overlaypanel__WEBPACK_IMPORTED_MODULE_2__.OverlayPanel, {
            className: "container-overlay-panel pl-0 pr-0 pb-4 pt-2",
            ref: (element)=>opRef.current = element
            ,
            id: "overlay_panel",
            style: {
                width: '450px'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container-overlay-panel-child col-12 p-0 m-0",
                onMouseEnter: ()=>cancelMouseOut()
                ,
                onMouseLeave: ()=>hideOverlay()
                ,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container-overlay-panel-child col-12 grid m-0 p-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "container-overlay-panel-child col-12 grid mb-2 p-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-11 p-0 ml-0 mr-auto mt-0 mb-0",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-bold text-xl text-blue-500 pt-2 pl-2",
                                            children: [
                                                container1.name,
                                                " - ",
                                                container1.containerId
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-1 text-right",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ContainerStatusBadge__WEBPACK_IMPORTED_MODULE_9__/* .ContainerStatusBadge */ .Q, {
                                                className: "mb-2 mt-0 pt-0",
                                                status: container1.state
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 p-0 mt-0 mb-3 pr-0 pl-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_8__.Menubar, {
                                    className: "col-12 mb-0 ml-0 mr-0 justify-content-center container-overlay-menu",
                                    model: menuItems1
                                })
                            }),
                            container1.running && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "container-overlay-panel-child col-12 mb-4 p-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "CPU:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressbar__WEBPACK_IMPORTED_MODULE_5__.ProgressBar, {
                                                className: progressBarCPUClass,
                                                value: (ref2 = container1.statsSummary) === null || ref2 === void 0 ? void 0 : ref2.cpuUsage
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "container-overlay-panel-child col-12 mb-4 p-0",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    "Memory ",
                                                    ((ref3 = container1.statsSummary) === null || ref3 === void 0 ? void 0 : ref3.memoryUsage) ? helpers_format_bytes__WEBPACK_IMPORTED_MODULE_3__/* .formatBytes.bytes */ .t.bytes((ref4 = container1.statsSummary) === null || ref4 === void 0 ? void 0 : ref4.memoryUsage) : 0,
                                                    " of ",
                                                    helpers_format_bytes__WEBPACK_IMPORTED_MODULE_3__/* .formatBytes.bytes */ .t.bytes((ref5 = container1.statsSummary) === null || ref5 === void 0 ? void 0 : ref5.memoryLimit)
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressbar__WEBPACK_IMPORTED_MODULE_5__.ProgressBar, {
                                                className: progressBarMemoryClass,
                                                value: memPercent
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-overlay-panel-child col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-lg pl-0 ml-0",
                            children: [
                                "Status: ",
                                container1.status
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-overlay-panel-child col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-lg pl-0 ml-0",
                            children: [
                                "State: ",
                                container1.state
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container-overlay-panel-child col-12",
                        children: [
                            "Last Check: ",
                            dayjs__WEBPACK_IMPORTED_MODULE_4___default()(container1.updatedAt).format('MM/DD/YYYY HH:mm:ss')
                        ]
                    })
                ]
            })
        }, (container1 === null || container1 === void 0 ? void 0 : container1.id) || '1')
    }));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HostSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6878);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__);


// import { useRouter } from 'next/router';





function HostSelector() {
    // const router = useRouter();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const { 0: selectedHost , 1: setSelectedHost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const selectedHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedHost);
    selectedHostRef.current = selectedHost;
    const { 0: items1 , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const itemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(items1);
    itemsRef.current = items1;
    const hosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.hosts.hosts;
    });
    const hostsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(hosts);
    hostsRef.current = hosts;
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (activeHostRef.current) {
            setSelectedHost(activeHostRef.current.id);
        }
    }, [
        activeHost
    ]);
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
        const items = data.map((d)=>{
            return {
                name: d.name,
                id: d.id
            };
        });
        setItems(items);
        setIsLoading(false);
    }, [
        hosts
    ]);
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    if (!items1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Hosts."
    }));
    if (items1.length === 0) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Hosts."
    }));
    const changeHost = (host)=>{
        // console.log('ative host', hostsRef.current[host]);
        setSelectedHost(host);
        (0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_5__/* .setActiveHost */ .u6)(hostsRef.current[host]);
        dispatch((0,store_actions_hosts_actions__WEBPACK_IMPORTED_MODULE_5__/* .setActiveHost */ .u6)({
            data: hostsRef.current[host]
        }));
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
            value: selectedHost,
            name: "hosts",
            id: "hosts",
            options: items1,
            optionLabel: "name",
            optionValue: "id",
            onChange: (e)=>{
                changeHost(e.value);
            },
            placeholder: "Select Host",
            //   filter
            className: "width-100 multiselect-custom hosts-dropdown",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, {})
        })
    }));
};


/***/ }),

/***/ 8687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3621);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1932);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5918);
/* harmony import */ var _components_LeftMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7868);
/* harmony import */ var _app_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6657);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2670);
/* harmony import */ var _components_State__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4617);
/* harmony import */ var primereact_scrolltop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8345);
/* harmony import */ var primereact_scrolltop__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_scrolltop__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LeftMenu__WEBPACK_IMPORTED_MODULE_7__, _components_State__WEBPACK_IMPORTED_MODULE_10__]);
([_components_LeftMenu__WEBPACK_IMPORTED_MODULE_7__, _components_State__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app_redux__WEBPACK_IMPORTED_MODULE_8__.withRedux)(Layout));
function Layout({ children  }) {
    const { 0: authorized , 1: setAuthorized  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: transitioning , 1: setTransitioning  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // const [userId, setUserId] = useState(null);
    const router1 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: mainClass , 1: setMainClass  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('layout-content main-fade');
    const mainClassRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(mainClass);
    mainClassRef.current = mainClass;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__/* .authService.user.subscribe */ .O.user.subscribe((x)=>{
            if (x > 0) {
                // console.log('login userId', x);
                // setUserId(x);
                setAuthorized(true);
            } else {
                setAuthorized(false);
            }
        });
    // return () => subscription.unsubscribe();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // run auth check on initial load
        authCheck(router1.asPath);
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__/* .authService.user.subscribe */ .O.user.subscribe((x)=>{
            if (x > 0) {
                // console.log('login userId', x);
                // setUserId(x);
                setAuthorized(true);
            } else {
                setAuthorized(false);
            }
        });
        // set authorized to false to hide page content while changing routes
        const hideContent = ()=>setTransitioning(true)
        ;
        const fadeIn = ()=>{
            setTimeout(()=>{
                if (mainClass === 'layout-content main-fade-out' || mainClass === 'layout-content main-fade') {
                    if (mainClass !== 'layout-content main-fade-in') {
                        setMainClass('layout-content main-fade-in');
                    // console.log('fadeIn');
                    }
                }
            }, 0);
        };
        // const fadeOut = () => {
        //   // console.log('mainClass', mainClass);
        //   if (mainClassRef.current === 'layout-content main-fade-in') {
        //     setMainClass('layout-content main-fade-out');
        //     console.log('fadeOut');
        //   }
        // };
        const completeRoute = (router)=>{
            setTransitioning(false);
            authCheck(router);
            fadeIn();
        };
        router1.events.on('routeChangeStart', hideContent);
        // run auth check on route change
        router1.events.on('routeChangeComplete', completeRoute);
        // unsubscribe from events in useEffect return function
        return ()=>{
            router1.events.off('routeChangeStart', hideContent);
            router1.events.off('routeChangeComplete', completeRoute);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // console.log('Main Class', mainClass);
    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in
        const publicPaths = [
            '/auth/login'
        ];
        const path = url.split('?')[0];
        if (!_services_auth_service__WEBPACK_IMPORTED_MODULE_4__/* .authService.userValue */ .O.userValue && !publicPaths.includes(path)) {
            // console.log('Setting user to false');
            // setAuthorized(false);
            if (path !== '/auth/login') {
                setAuthorized(false);
                router1.push({
                    pathname: '/auth/login',
                    query: {
                        returnUrl: router1.asPath
                    }
                });
            }
        } else {
            // TODO: Look into this..
            if (_services_auth_service__WEBPACK_IMPORTED_MODULE_4__/* .authService.userId */ .O.userId > 0) {
                // console.log('UID', authService.userId);
                // console.log('AuthService', authService.user);
                setAuthorized(true);
            }
            return;
        }
    }
    // console.log('Authorized', authorized);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "dockermon"
                })
            }),
            authorized && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_State__WEBPACK_IMPORTED_MODULE_10__/* .State */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: '100%',
                    height: '100%'
                },
                children: [
                    authorized && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "layout-wrapper layout-menu-dark layout-topbar-blue layout-menu-static layout-menu-active",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_scrolltop__WEBPACK_IMPORTED_MODULE_11__.ScrollTop, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LeftMenu__WEBPACK_IMPORTED_MODULE_7__/* .LeftMenu */ .s, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "layout-main",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 ml-0 mr-0 p-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__/* .Nav */ .J, {})
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: mainClass,
                                        children: [
                                            !authorized && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_9__/* .Spinner */ .$, {}),
                                            authorized && !transitioning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: children
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !authorized && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: !authorized && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "login-wrapper",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: children
                            })
                        })
                    })
                ]
            })
        ]
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ dockerEventsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_socket_service__WEBPACK_IMPORTED_MODULE_1__]);
_socket_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// import getConfig from 'next/config';
//import { fetchWrapper } from '../helpers/fetch-wrapper';
// const { publicRuntimeConfig } = getConfig();
// const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const dockerEventsService = {
    results: resultSubject.asObservable(),
    attachSocket,
    loadSocket
};
let socket;
async function attachSocket() {
    if (socket) {
        return socket;
    } else {
        return await loadSocket();
    }
}
async function loadSocket() {
    socket = await _socket_service__WEBPACK_IMPORTED_MODULE_1__/* .socketService.getSocket */ .L.getSocket();
    socket.on('connect', function() {
        // console.log('Event Receiver Socket Connected');
        socket.emit('dockerEvents', {
            hostId: 1
        });
        socket.emit('dockerEvents', {
            hostId: 5
        });
    });
    return socket;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ usersService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);



const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const usersService = {
    results: resultSubject.asObservable(),
    getUsers,
    getUserById,
    updateUserSettings
};
function getUsers(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/users`, postBody).then((result)=>{
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
function getUserById(id) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.get */ .h.get(`${baseUrl}/users/${id}`).then((result)=>{
        if (result.status === 'success') {
            resultSubject.next(result);
            return result;
        } else {
            throw Error(result.error);
        }
    }).catch((error)=>{
        resultSubject.next(null);
        console.log(error);
    });
}
function updateUserSettings(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/users/updateUserSettings`, postBody).then((result)=>{
        if (result.status === 'success') {
            resultSubject.next(result);
            return result;
        } else {
            console.warn(result);
            throw Error(result.message);
        }
    }).catch((error)=>{
        resultSubject.next(null);
        console.log(error);
    });
}


/***/ }),

/***/ 3223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sO": () => (/* binding */ addContainer),
/* harmony export */   "IS": () => (/* binding */ resetContainers),
/* harmony export */   "AE": () => (/* binding */ replaceContainers),
/* harmony export */   "g8": () => (/* binding */ fullReplaceContainers)
/* harmony export */ });
/* unused harmony export removeContainer */
function addContainer(payload) {
    return function(dispatch) {
        dispatch({
            type: 'addContainer',
            payload
        });
    };
}
function removeContainer(payload) {
    return function(dispatch) {
        dispatch({
            type: 'removeContainer',
            payload
        });
    };
}
function resetContainers(payload) {
    return function(dispatch) {
        dispatch({
            type: 'resetContainers',
            payload
        });
    };
}
function replaceContainers(payload) {
    return function(dispatch) {
        dispatch({
            type: 'replaceContainers',
            payload
        });
    };
}
function fullReplaceContainers(payload) {
    return function(dispatch) {
        dispatch({
            type: 'fullReplaceContainers',
            payload
        });
    };
}


/***/ }),

/***/ 6878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yq": () => (/* binding */ addHost),
/* harmony export */   "Jx": () => (/* binding */ resetHosts),
/* harmony export */   "HQ": () => (/* binding */ replaceHosts),
/* harmony export */   "ZH": () => (/* binding */ fullReplaceHosts),
/* harmony export */   "u6": () => (/* binding */ setActiveHost)
/* harmony export */ });
/* unused harmony export removeHost */
function addHost(payload) {
    return function(dispatch) {
        dispatch({
            type: 'addHost',
            payload
        });
    };
}
function removeHost(payload) {
    return function(dispatch) {
        dispatch({
            type: 'removeHost',
            payload
        });
    };
}
function resetHosts(payload) {
    return function(dispatch) {
        dispatch({
            type: 'resetHosts',
            payload
        });
    };
}
function replaceHosts(payload) {
    return function(dispatch) {
        dispatch({
            type: 'replaceHosts',
            payload
        });
    };
}
function fullReplaceHosts(payload) {
    return function(dispatch) {
        dispatch({
            type: 'fullReplaceHosts',
            payload
        });
    };
}
function setActiveHost(payload) {
    return function(dispatch) {
        dispatch({
            type: 'setActiveHost',
            payload
        });
    };
}


/***/ }),

/***/ 8601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mN": () => (/* binding */ addImage),
/* harmony export */   "CM": () => (/* binding */ removeImage),
/* harmony export */   "wr": () => (/* binding */ replaceImages),
/* harmony export */   "Dl": () => (/* binding */ fullReplaceImages)
/* harmony export */ });
/* unused harmony export resetImages */
function addImage(payload) {
    return function(dispatch) {
        dispatch({
            type: 'addImage',
            payload
        });
    };
}
function removeImage(payload) {
    return function(dispatch) {
        dispatch({
            type: 'removeImage',
            payload
        });
    };
}
function resetImages(payload) {
    return function(dispatch) {
        dispatch({
            type: 'resetImages',
            payload
        });
    };
}
function replaceImages(payload) {
    return function(dispatch) {
        dispatch({
            type: 'replaceImages',
            payload
        });
    };
}
function fullReplaceImages(payload) {
    return function(dispatch) {
        dispatch({
            type: 'fullReplaceImages',
            payload
        });
    };
}


/***/ }),

/***/ 1457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BN": () => (/* binding */ addNetwork),
/* harmony export */   "xu": () => (/* binding */ resetNetworks),
/* harmony export */   "od": () => (/* binding */ replaceNetworks),
/* harmony export */   "yW": () => (/* binding */ fullReplaceNetworks)
/* harmony export */ });
/* unused harmony export removeNetwork */
function addNetwork(payload) {
    return function(dispatch) {
        dispatch({
            type: 'addNetwork',
            payload
        });
    };
}
function removeNetwork(payload) {
    return function(dispatch) {
        dispatch({
            type: 'removeNetwork',
            payload
        });
    };
}
function resetNetworks(payload) {
    return function(dispatch) {
        dispatch({
            type: 'resetNetworks',
            payload
        });
    };
}
function replaceNetworks(payload) {
    return function(dispatch) {
        dispatch({
            type: 'replaceNetworks',
            payload
        });
    };
}
function fullReplaceNetworks(payload) {
    return function(dispatch) {
        dispatch({
            type: 'fullReplaceNetworks',
            payload
        });
    };
}


/***/ }),

/***/ 9678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hg": () => (/* binding */ addVolume),
/* harmony export */   "eX": () => (/* binding */ resetVolumes),
/* harmony export */   "a1": () => (/* binding */ replaceVolumes),
/* harmony export */   "HY": () => (/* binding */ fullReplaceVolumes)
/* harmony export */ });
/* unused harmony export removeVolume */
function addVolume(payload) {
    return function(dispatch) {
        dispatch({
            type: 'addVolume',
            payload
        });
    };
}
function removeVolume(payload) {
    return function(dispatch) {
        dispatch({
            type: 'removeVolume',
            payload
        });
    };
}
function resetVolumes(payload) {
    return function(dispatch) {
        dispatch({
            type: 'resetVolumes',
            payload
        });
    };
}
function replaceVolumes(payload) {
    return function(dispatch) {
        dispatch({
            type: 'replaceVolumes',
            payload
        });
    };
}
function fullReplaceVolumes(payload) {
    return function(dispatch) {
        dispatch({
            type: 'fullReplaceVolumes',
            payload
        });
    };
}


/***/ })

};
;