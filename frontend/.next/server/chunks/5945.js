"use strict";
exports.id = 5945;
exports.ids = [5945];
exports.modules = {

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