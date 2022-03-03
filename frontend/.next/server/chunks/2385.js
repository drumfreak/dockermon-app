"use strict";
exports.id = 2385;
exports.ids = [2385];
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

/***/ 5945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "el": () => (/* binding */ selectContainerId),
/* harmony export */   "m9": () => (/* binding */ setUserSettings)
/* harmony export */ });
/* unused harmony exports setPollerRunning, setSiteSettings, setSiteActiveHost */
function selectContainerId(payload) {
    return function(dispatch) {
        dispatch({
            type: 'selectContainerId',
            payload
        });
    };
}
function setPollerRunning(payload) {
    return function(dispatch) {
        dispatch({
            type: 'setPollerRunning',
            payload
        });
    };
}
function setSiteSettings(payload) {
    return function(dispatch) {
        dispatch({
            type: 'setSiteSettings',
            payload
        });
    };
}
function setUserSettings(payload) {
    return function(dispatch) {
        dispatch({
            type: 'setUserSettings',
            payload
        });
    };
}
function setSiteActiveHost(payload) {
    return function(dispatch) {
        dispatch({
            type: 'setSiteActiveHost',
            payload
        });
    };
}


/***/ })

};
;