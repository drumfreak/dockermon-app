"use strict";
(() => {
var exports = {};
exports.id = 2381;
exports.ids = [2381,7856,2002];
exports.modules = {

/***/ 7851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HostView)
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
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1515);
/* harmony import */ var services_docker_host_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3627);
/* harmony import */ var components_dashboards_MainDashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(520);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket_service__WEBPACK_IMPORTED_MODULE_8__, components_dashboards_MainDashboard__WEBPACK_IMPORTED_MODULE_10__]);
([_services_socket_service__WEBPACK_IMPORTED_MODULE_8__, components_dashboards_MainDashboard__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// import DockerHostView from './details';
function HostView() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const hosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.hosts.hosts;
    });
    // const dispatch = useDispatch();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: showDetails , 1: setShowDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const showDetailsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showDetails);
    showDetailsRef.current = showDetails;
    const { 0: hostId , 1: setHostId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const hostIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(hostId);
    hostIdRef.current = hostId;
    const { 0: host , 1: setHost  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const hostRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(host);
    hostRef.current = host;
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const usePrevious = (value)=>{
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
            ref.current = value;
        });
        return ref.current;
    };
    const previousHost = usePrevious(host);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{
        if (router.query.id) {
            setHostId(router.query.id);
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
        if (router.query.id) {
            if (hosts) {
                if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEqual(previousHost, hosts[router.query.id])) {
                    if (router.query.id in hosts) {
                        const c = hosts[router.query.id];
                        setHost(c);
                        if (isLoadingRef.current) {
                            setIsLoading(true);
                        }
                        buildMenuItems();
                        if (isLoadingRef.current) {
                            setIsLoading(false);
                        }
                    }
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        hosts
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResulsHosts_' + hostIdRef.current;
                socketRef.current.removeListener(socketName);
            }
        };
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResulsHosts_' + hostIdRef.current;
        const socket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_8__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            updateHosts();
            if (results.status === 'success') {
                if (results.data) {
                    switch(results.hook){
                        case 'removeHost':
                            // Show dialog
                            setHost(null);
                            break;
                        default:
                            if (results.data.id) {
                                setHost(results.data);
                                buildMenuItems();
                            }
                            break;
                    }
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        if (isLoadingRef.current) {
            setIsLoading(true);
        }
        if (!hostRef) {
            const { data , error  } = await services_docker_host_service__WEBPACK_IMPORTED_MODULE_9__/* .dockerHostsService.getHostById */ .d.getHostById(hostIdRef.current);
            if (error) {
                setError(error);
                console.log('Error', error);
            }
            if (data) {
                setHost(data);
                buildMenuItems();
                if (isLoadingRef.current) {
                    setIsLoading(false);
                }
            }
        } else {
            buildMenuItems();
            if (isLoadingRef.current) {
                setIsLoading(false);
            }
        }
    }
    function buildMenuItems() {
        const menuItems = [];
        // let host;
        // if (c.current) {
        //   host = c.current;
        // }
        menuItems.push({
            label: 'Remove',
            icon: 'fa fa-fw fa-power-off',
            command: (e)=>{
                confirm('removeHost', 'Remove Host?', e);
            }
        });
        menuItems.push({
            label: 'Edit',
            icon: 'fa fa-fw fa-edit',
            command: ()=>{
                router.push('/hosts/edit?id=' + hostIdRef.current);
            }
        });
        menuItems.push({
            label: 'Inspect',
            icon: 'fa fa-fw fa-eye',
            command: ()=>{
                inspectHost();
            }
        });
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
                    case 'removeHost':
                        removeHost();
                        break;
                }
            }
        });
    };
    function inspectHost() {
        setShowDetails(true);
        if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.current) {
            var ref;
            socketRef.current.emit('hosts', {
                command: 'inspectHost',
                hostId: (ref = hostRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResulsHosts_' + hostRef.current.id,
                hook: 'inspectHost'
            });
        }
    }
    function removeHost() {
        socketRef.current.emit('hosts', {
            command: 'removeHost',
            host: hostRef.current,
            callback: 'dockerResulsHosts_' + hostRef.current.id,
            hook: 'removeHost'
        });
    }
    function updateHosts() {
        if (!socketRef.current) return;
        socketRef.current.emit('hosts', {
            command: 'listHosts',
            callback: 'hostsList'
        });
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    if (error1) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load Host: ",
            error1
        ]
    }));
    if (!router.query.id) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    if (!host) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "Host could not be found."
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dashboards_MainDashboard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                host: hostRef.current
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12"
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

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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

/***/ 9797:
/***/ ((module) => {

module.exports = require("primereact/badge");

/***/ }),

/***/ 1088:
/***/ ((module) => {

module.exports = require("primereact/button");

/***/ }),

/***/ 7757:
/***/ ((module) => {

module.exports = require("primereact/calendar");

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

/***/ 1404:
/***/ ((module) => {

module.exports = require("primereact/dropdown");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("primereact/inputswitch");

/***/ }),

/***/ 9093:
/***/ ((module) => {

module.exports = require("primereact/inputtext");

/***/ }),

/***/ 4130:
/***/ ((module) => {

module.exports = require("primereact/menubar");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("primereact/multiselect");

/***/ }),

/***/ 1006:
/***/ ((module) => {

module.exports = require("primereact/panel");

/***/ }),

/***/ 6532:
/***/ ((module) => {

module.exports = require("primereact/progressbar");

/***/ }),

/***/ 5767:
/***/ ((module) => {

module.exports = require("primereact/progressspinner");

/***/ }),

/***/ 1267:
/***/ ((module) => {

module.exports = require("primereact/ripple");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,1515,2473,6345,3389,6374,2723,9686,9989,6903,2586,5177,520], () => (__webpack_exec__(7851)));
module.exports = __webpack_exports__;

})();