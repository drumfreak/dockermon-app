"use strict";
(() => {
var exports = {};
exports.id = 1673;
exports.ids = [1673];
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

/***/ 4842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivityLogView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_activity_logs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1961);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2670);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_JSONDataView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6345);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_7__);

/* eslint-disable no-unused-vars */ 






function ActivityLogView() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: showDetails , 1: setShowDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showDetailsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showDetails);
    showDetailsRef.current = showDetails;
    const { 0: activityLogId , 1: setActivityLogId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const activityLogIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activityLogId);
    activityLogIdRef.current = activityLogId;
    const { 0: activityLog1 , 1: setActivityLog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const activityLogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activityLog1);
    activityLogRef.current = activityLog1;
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: gridOption , 1: setGridOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Grid');
    const gridOptions = [
        'Grid',
        'List'
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (router.query.id) {
            await setActivityLogId(router.query.id);
            loadData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.query.id
    ]);
    async function loadData() {
        if (isLoadingRef.current) {
            setIsLoading(true);
        }
        if (!activityLogRef.current) {
            const c = await services_activity_logs_service__WEBPACK_IMPORTED_MODULE_3__/* .activityLogsService.getActivityLogById */ .u.getActivityLogById(activityLogIdRef.current);
            // console.log(c);
            if ((c === null || c === void 0 ? void 0 : c.status) === 'success') {
                setActivityLog(c.data);
            // console.log('activityLogs', c.data);
            }
            setIsLoading(false);
        } else {
            buildMenuItems(activityLogRef);
            if (isLoadingRef.current) {
                setIsLoading(false);
            }
        }
    }
    function buildMenuItems(c) {
        const menuItems = [];
        let activityLog;
        if (c.current) {
            activityLog = c.current;
        } else {
            activityLog = c;
        }
        menuItems.push({
            label: 'Inspect',
            icon: 'fa fa-fw fa-eye',
            command: ()=>{
                inspectActivityLog();
            }
        });
        if (!activityLog.active) {
            menuItems.push({
                label: 'Remove',
                icon: 'fa fa-fw fa-power-off',
                command: (e)=>{
                    confirm('removeActivityLog', 'Remove ActivityLog?', e);
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
                    case 'removeActivityLog':
                        removeActivityLog();
                        break;
                }
            }
        });
    };
    function inspectActivityLog() {
        setShowDetails(true);
        if (activityLogRef === null || activityLogRef === void 0 ? void 0 : activityLogRef.current) {
        // socketRef.current.emit('docker', {
        //   command: 'inspectActivityLog',
        //   activityLogId: activityLogRef.current.activityLogId,
        //   callback: 'dockerResulsActivityLogs_' + activityLogRef.current.id,
        //   hook: 'inspectActivityLog',
        // });
        }
    }
    function removeActivityLog() {
    // socketRef.current.emit('docker', {
    //   command: 'removeActivityLog',
    //   activityLogId: activityLogRef.current.details.Id,
    //   callback: 'dockerResulsActivityLogs_' + activityLogRef.current.id,
    //   hook: 'removeActivityLog',
    // });
    }
    const changeGridOptions = async (e)=>{
        setGridOption(e.value);
    };
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_4__/* .Spinner */ .$, {}));
    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load ActivityLog: ",
            error
        ]
    }));
    if (!router.query.id) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    if (!activityLog1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "ActivityLog could not be found."
    }));
    const pollerGrid = gridOption === 'Grid' ? 'col-6' : 'col-12';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "grid col-12 p-0 m-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex col-10 p-0 m-0",
                                children: activityLog1.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-2 text-right p-0 m-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    children: [
                                        "[",
                                        activityLog1.id,
                                        "]"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex col-12 justify-content-end"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        data: activityLog1,
                        collapsed: false,
                        header: "ActivityLog Details"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 m1-2"
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4179:
/***/ ((module) => {

module.exports = require("primereact/confirmdialog");

/***/ }),

/***/ 4130:
/***/ ((module) => {

module.exports = require("primereact/menubar");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2473,6345,1961], () => (__webpack_exec__(4842)));
module.exports = __webpack_exports__;

})();