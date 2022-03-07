"use strict";
exports.id = 5177;
exports.ids = [5177];
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

/***/ 3627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ dockerHostsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);



const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const dockerHostsService = {
    results: resultSubject.asObservable(),
    getHosts,
    getHostById
};
function getHosts(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/hosts`, postBody).then((result)=>{
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
function getHostById(id) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.get */ .h.get(`${baseUrl}/hosts/${id}`).then((result)=>{
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


/***/ })

};
;