"use strict";
(() => {
var exports = {};
exports.id = 8625;
exports.ids = [8625];
exports.modules = {

/***/ 5076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_JSONDataView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6345);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

// import { useRouter } from 'next/router';
// import { useState, useEffect, useRef } from 'react';


function StateView() {
    const hosts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.hosts;
    });
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.containers;
    });
    const images = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.images;
    });
    const volumes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.volumes;
    });
    const networks = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.networks;
    });
    const site = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{
        return state.site;
    });
    const states = {
        site: site,
        hosts: hosts,
        containers: containers,
        volumes,
        networks,
        images
    };
    // const dispatch = useDispatch();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: "grid col-12 p-0 m-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex col-10 p-0 m-0",
                            children: "State Viewer"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-2 text-right p-0 m-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "State Viewer"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 m1-0",
                    style: {
                        height: '100vh'
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        hideCode: true,
                        data: states,
                        collapsed: 0,
                        header: "Hosts Details"
                    })
                })
            })
        ]
    }));
};


/***/ }),

/***/ 1006:
/***/ ((module) => {

module.exports = require("primereact/panel");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6345], () => (__webpack_exec__(5076)));
module.exports = __webpack_exports__;

})();