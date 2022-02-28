"use strict";
exports.id = 6374;
exports.ids = [6374];
exports.modules = {

/***/ 6374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ContainerStatusBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9797);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_badge__WEBPACK_IMPORTED_MODULE_1__);



function ContainerStatusBadge({ ...props }) {
    let severity = props.severity;
    if (props.status) {
        switch(props.status){
            case 'paused':
                severity = 'warning';
                break;
            case 'running':
                severity = 'success';
                break;
            case 'stopped':
            case 'exited':
                severity = 'info';
                break;
            default:
                severity = 'info';
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