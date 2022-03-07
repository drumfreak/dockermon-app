"use strict";
(() => {
var exports = {};
exports.id = 7246;
exports.ids = [7246];
exports.modules = {

/***/ 5695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditHostsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_hosts_HostsForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8545);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_hosts_HostsForm__WEBPACK_IMPORTED_MODULE_1__]);
components_hosts_HostsForm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react-hooks/exhaustive-deps */ 


function EditHostsView() {
    var ref1;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: hostId , 1: setHostId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const hostIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(hostId);
    hostIdRef.current = hostId;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        var ref;
        if ((ref = router.query) === null || ref === void 0 ? void 0 : ref.id) {
            setHostId(router.query.id);
        }
    }, [
        (ref1 = router.query) === null || ref1 === void 0 ? void 0 : ref1.id
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 p-0 m-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_hosts_HostsForm__WEBPACK_IMPORTED_MODULE_1__/* .HostsForm */ .h, {
                mode: "edit",
                host: hostId
            })
        })
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

/***/ 1404:
/***/ ((module) => {

module.exports = require("primereact/dropdown");

/***/ }),

/***/ 5514:
/***/ ((module) => {

module.exports = require("primereact/inputnumber");

/***/ }),

/***/ 9093:
/***/ ((module) => {

module.exports = require("primereact/inputtext");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("primereact/messages");

/***/ }),

/***/ 1006:
/***/ ((module) => {

module.exports = require("primereact/panel");

/***/ }),

/***/ 5767:
/***/ ((module) => {

module.exports = require("primereact/progressspinner");

/***/ }),

/***/ 8673:
/***/ ((module) => {

module.exports = require("primereact/togglebutton");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1964:
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1515,2473,9861,5177,8545], () => (__webpack_exec__(5695)));
module.exports = __webpack_exports__;

})();