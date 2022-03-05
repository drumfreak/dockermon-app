"use strict";
exports.id = 1961;
exports.ids = [1961];
exports.modules = {

/***/ 1961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ activityLogsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);



const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const activityLogsService = {
    results: resultSubject.asObservable(),
    getActivityLogs,
    getActivityLogById
};
function getActivityLogs(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/activityLogs`, postBody).then((result)=>{
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
function getActivityLogById(id) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.get */ .h.get(`${baseUrl}/activityLogs/${id}`).then((result)=>{
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