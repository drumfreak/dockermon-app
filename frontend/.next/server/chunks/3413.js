"use strict";
exports.id = 3413;
exports.ids = [3413];
exports.modules = {

/***/ 3413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NetworkOrgChart)
/* harmony export */ });
/* unused harmony export NetworkOrgChart */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_organizationchart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4083);
/* harmony import */ var primereact_organizationchart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_organizationchart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);



// import { useSelector } from 'react-redux';







function NetworkOrgChart(props) {
    const networks = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.networks;
    });
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.containers;
    });
    const containersRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containers);
    containersRef.current = containers;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // const dispatch = useDispatch();
    const { 0: networkId , 1: setNetworkId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const networkIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(networkId);
    networkIdRef.current = networkId;
    const { 0: network1 , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const networkRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(network1);
    networkRef.current = network1;
    const { 0: selection , 1: setSelection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const chartDataRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartData);
    chartDataRef.current = chartData;
    const usePrevious = (value)=>{
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            ref.current = value;
        });
        return ref.current;
    };
    const previousNetwork = usePrevious(network1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNetworkId(props.network.id);
        setTimeout(()=>{
            getNetwork();
            loadData();
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.network
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.query.id) {
            if (networks) {
                if (!lodash__WEBPACK_IMPORTED_MODULE_3___default().isEqual(previousNetwork, networks[router.query.id])) {
                    if (router.query.id in networks) {
                        const c = networks[router.query.id];
                        setNetwork(c);
                        // if (isLoadingRef.current) {
                        //   setIsLoading(true);
                        // }
                        // buildMenuItems(c);
                        // if (isLoadingRef.current) {
                        //   setIsLoading(false);
                        // }
                        setTimeout(()=>{
                            loadData();
                        }, 100);
                    }
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        networks
    ]);
    async function loadData() {
        // console.log('Load Data');
        buildChartData(networkRef.current);
    }
    async function getNetwork() {
        // console.log('Find Network', networkIdRef.current);
        if (networkIdRef.current) {
            if (networks) {
                // console.log('Networks');
                Object.keys(networks).forEach((key)=>{
                    Object.keys(networks[key].networks).forEach(()=>{
                        const network = networks[key].networks[networkIdRef.current];
                        if (network) {
                            // console.log('Found network', network);
                            setNetwork(network);
                            setTimeout(()=>{
                                buildChartData(networkRef.current);
                            });
                        }
                    });
                });
            }
        }
    }
    async function buildChartData(c) {
        var ref;
        if (!c) return;
        let network = c;
        if (!c) {
            return;
        }
        let children = [];
        if (((ref = c.containers) === null || ref === void 0 ? void 0 : ref.length) > 0) {
            c.containers.map((c2)=>{
                Object.keys(containersRef.current).map((key)=>{
                    Object.keys(containersRef.current[key].containers).filter((a)=>{
                        if (containersRef.current[key].containers[a].containerId === c2.containerId) {
                            const tmpc = {
                                ...containersRef.current[key].containers[a]
                            };
                            // Try to get the ip here.
                            Object.keys(network.details.Containers).map((k2)=>{
                                if (k2.includes(tmpc.containerId)) {
                                    const k3 = network.details.Containers[k2];
                                    tmpc.networkDetails = k3;
                                }
                            });
                            if (props.activeContainer === tmpc.id) {
                                tmpc.activeContainer = true;
                            } else {
                                tmpc.activeContainer = false;
                            }
                            children.push({
                                label: 'node',
                                type: 'container',
                                className: 'network-root-container',
                                expanded: true,
                                data: tmpc,
                                icon: 'fa fa-fw fa-eye'
                            });
                        }
                    });
                });
            });
        }
        const data = [
            {
                label: 'network',
                type: 'network',
                className: 'network-root-node',
                expanded: true,
                data: network,
                children: children,
                icon: 'fa fa-fw fa-eye'
            }, 
        ];
        setChartData(data);
    }
    const nodeTemplate = (node)=>{
        var ref, ref1, ref2;
        // console.log(node);
        let ipAddress;
        if ((ref = node.data) === null || ref === void 0 ? void 0 : (ref1 = ref.details) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.NetworkSettings) === null || ref2 === void 0 ? void 0 : ref2.IPAddress) {
            ipAddress = node.data.details.NetworkSettings.IPAddress;
        }
        if (node.data.networkDetails) {
            // console.log('Network networkDetails', node.data.networkDetails);
            if (node.data.networkDetails.IPv4Address) {
                ipAddress = node.data.networkDetails.IPv4Address.split('/')[0];
            }
        }
        if (node.type) {
            var ref3, ref4, ref5, ref6;
            let nodeClass = 'network-org-node ';
            if (node.data.activeContainer) {
                nodeClass += ' network-org-node-active';
            }
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: nodeClass,
                children: [
                    node.type === 'container' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-0 pt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            className: "p-button-text p-button-plain col-12 mt-0 pt-0 mb-0 pb-0",
                            onClick: ()=>router.push('/containers/' + node.data.id)
                            ,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 grid pt-0 mt-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "node-header mt-0 pt-0 pb-0 mb-0 col-12",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12 text-center justify-content-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTelevision,
                                                        className: "fa-xl text-green-500 mt-2 ml-auto mr-auto",
                                                        swapOpacity: true
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12 text-center m-0 p-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                        children: node.data.name
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "node-content col-12 p-0 m-0",
                                        children: ipAddress && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: ipAddress
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    node.type === 'network' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-0 pt-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                className: "p-button-text p-button-plain col-12 mt-0 pt-0 mb-0 pb-0",
                                onClick: ()=>router.push('/networks/' + node.data.id)
                                ,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 grid pt-0 mt-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "node-header mt-0 pt-0 pb-0 mb-0 col-12",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-12",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 text-center justify-content-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faNetworkWired,
                                                            className: "fa-3x text-green-500 mt-2 ml-auto mr-auto",
                                                            swapOpacity: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 text-center m-0 p-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            children: node.data.name
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "node-content col-12 p-0 m-0",
                                            children: ((ref6 = (ref3 = node.data) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.details) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.IPAM) === null || ref5 === void 0 ? void 0 : ref5.Config[0]) === null || ref6 === void 0 ? void 0 : ref6.Gateway) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: node.data.details.IPAM.Config[0].Gateway
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }));
        }
        if (node.type === 'department') {
            return node.label;
        }
    };
    if (!network1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "Network could not be found."
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: chartData.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 network-orgchart",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                            children: network1.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_organizationchart__WEBPACK_IMPORTED_MODULE_4__.OrganizationChart, {
                            value: chartData,
                            nodeTemplate: nodeTemplate,
                            selection: selection,
                            selectionMode: "multiple",
                            onSelectionChange: (event)=>setSelection(event.data)
                            ,
                            className: "company"
                        })
                    ]
                })
            })
        })
    }));
};


/***/ })

};
;