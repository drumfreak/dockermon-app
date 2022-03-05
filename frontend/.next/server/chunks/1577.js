"use strict";
exports.id = 1577;
exports.ids = [1577];
exports.modules = {

/***/ 1577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ profilingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);



const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const profilingsService = {
    results: resultSubject.asObservable(),
    getProfilings,
    getProfilingById
};
function getProfilings(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/profilings`, postBody).then((result)=>{
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
function getProfilingById(id) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.get */ .h.get(`${baseUrl}/profilings/${id}`).then((result)=>{
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