"use strict";
(() => {
var exports = {};
exports.id = 2241;
exports.ids = [2241];
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

/***/ 3094:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NetworkView)
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_JSONDataView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6345);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1515);
/* harmony import */ var services_docker_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5878);
/* harmony import */ var components_networks_network_orgchart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket_service__WEBPACK_IMPORTED_MODULE_9__]);
_services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











// import DockerNetworkView from './details';

function NetworkView() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const networks = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.networks;
    });
    // const dispatch = useDispatch();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: showDetails , 1: setShowDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const showDetailsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showDetails);
    showDetailsRef.current = showDetails;
    const { 0: networkId , 1: setNetworkId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const networkIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(networkId);
    networkIdRef.current = networkId;
    const { 0: network1 , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const networkRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(network1);
    networkRef.current = network1;
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    // const [selection, setSelection] = useState([]);
    const { 0: chartData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const chartDataRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(chartData);
    chartDataRef.current = chartData;
    const usePrevious = (value)=>{
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
            ref.current = value;
        });
        return ref.current;
    };
    const previousNetwork = usePrevious(network1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{
        if (router.query.id) {
            setNetworkId(router.query.id);
            setTimeout(async ()=>{
                if (!socketLoaded) {
                    await loadSocket();
                }
                loadData();
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        networks
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResulsNetworks_' + networkIdRef.current;
                socketRef.current.removeListener(socketName);
            }
        };
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResulsNetworks_' + networkIdRef.current;
        const socket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    switch(results.hook){
                        case 'removeNetwork':
                            // Show dialog
                            setNetwork(null);
                            break;
                        default:
                            if (results.data.id) {
                                setNetwork(results.data);
                                buildMenuItems(results.data);
                            }
                            break;
                    }
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    async function getNetwork() {
        if (router.query.id) {
            if (networks) {
                Object.keys(networks).forEach((key)=>{
                    const host = networks[key];
                    if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEqual(previousNetwork, host.networks[router.query.id])) {
                        //console.log('Networks loading');
                        if (router.query.id in host.networks) {
                            const c = host.networks[router.query.id];
                            setNetwork(c);
                            if (isLoadingRef.current) {
                                setIsLoading(true);
                            }
                            buildMenuItems(c);
                            if (isLoadingRef.current) {
                                setIsLoading(false);
                            }
                        }
                    }
                });
            }
        }
    }
    async function loadData() {
        if (isLoadingRef.current) {
            setIsLoading(true);
        }
        if (!networkRef) {
            const { data , error  } = await services_docker_network_service__WEBPACK_IMPORTED_MODULE_10__/* .dockerNetworksService.getNetworkById */ .M.getNetworkById(networkIdRef.current);
            if (error) {
                setError(error);
                console.log('Error', error);
            }
            if (data) {
                setNetwork(data);
                buildMenuItems(data);
                if (isLoadingRef.current) {
                    setIsLoading(false);
                }
            }
        } else {
            buildMenuItems(networkRef.current);
            if (isLoadingRef.current) {
                setIsLoading(false);
            }
        }
    }
    function buildMenuItems(c) {
        if (!c) return;
        const menuItems = [];
        let network;
        if (c.current) {
            network = c.current;
        } else {
            network = c;
        }
        menuItems.push({
            label: 'Inspect',
            icon: 'fa fa-fw fa-eye',
            command: ()=>{
                inspectNetwork();
            }
        });
        if (!network.active) {
            menuItems.push({
                label: 'Remove',
                icon: 'fa fa-fw fa-power-off',
                command: (e)=>{
                    confirm('removeNetwork', 'Remove Network?', e);
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
                    case 'removeNetwork':
                        removeNetwork();
                        break;
                }
            }
        });
    };
    function inspectNetwork() {
        setShowDetails(true);
        if (networkRef === null || networkRef === void 0 ? void 0 : networkRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'inspectNetwork',
                networkId: networkRef.current.networkId,
                hostId: (ref = networkRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResulsNetworks_' + networkRef.current.id,
                hook: 'inspectNetwork'
            });
        }
    }
    function removeNetwork() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'removeNetwork',
            networkId: networkRef.current.details.Id,
            hostId: (ref = networkRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsNetworks_' + networkRef.current.id,
            hook: 'removeNetwork'
        });
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    if (error1) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load Network: ",
            error1
        ]
    }));
    if (!router.query.id) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    if (!network1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "Network could not be found."
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 p-0 m-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "grid col-12 p-0 m-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex col-10 p-0 m-0",
                                children: network1.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-2 text-right p-0 m-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    children: [
                                        "[",
                                        network1.id,
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 p-0 ml-0 mr-0 mt-3 mb-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_networks_network_orgchart__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    network: network1
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 p-0 m-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: network1,
                        collapsed: true,
                        header: "Network Details"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 m1-2"
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ dockerNetworksService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);



const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const dockerNetworksService = {
    results: resultSubject.asObservable(),
    getNetworks,
    getNetworkById
};
function getNetworks(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/networks`, postBody).then((result)=>{
        // console.log(result);
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
function getNetworkById(id) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.get */ .h.get(`${baseUrl}/networks/${id}`).then((result)=>{
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


/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1088:
/***/ ((module) => {

module.exports = require("primereact/button");

/***/ }),

/***/ 4179:
/***/ ((module) => {

module.exports = require("primereact/confirmdialog");

/***/ }),

/***/ 4130:
/***/ ((module) => {

module.exports = require("primereact/menubar");

/***/ }),

/***/ 4083:
/***/ ((module) => {

module.exports = require("primereact/organizationchart");

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

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1515,2473,6345,3413], () => (__webpack_exec__(3094)));
module.exports = __webpack_exports__;

})();