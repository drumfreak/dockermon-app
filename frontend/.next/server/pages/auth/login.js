"use strict";
(() => {
var exports = {};
exports.id = 9344;
exports.ids = [9344];
exports.modules = {

/***/ 3049:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3621);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
function Login() {
    var ref, ref1, ref2;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // redirect to home if already logged in
        if (_services_auth_service__WEBPACK_IMPORTED_MODULE_6__/* .authService.userValue */ .O.userValue) {
            router.push('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
        username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Username is required'),
        password: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Password is required')
    });
    const formOptions = {
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    };
    // get functions to build form with useForm() hook
    const { register , handleSubmit , setError , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(formOptions);
    const { errors  } = formState;
    function onSubmit({ username , password  }) {
        return _services_auth_service__WEBPACK_IMPORTED_MODULE_6__/* .authService.login */ .O.login(username, password).then(()=>{
            // get return url from query parameters or default to '/'
            const returnUrl = router.query.returnUrl || '/';
            setTimeout(()=>{
                router.push(returnUrl);
            }, 300);
        }).catch((error)=>{
            console.debug('Error', error);
            setError('apiError', {
                message: error
            });
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-6 ml-auto mr-auto mt-5 pages-body login-bgcolor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 p-d-flex p-flex-column",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-auto p-as-center mb-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pages-panel card p-d-flex p-flex-column",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "card-header",
                                    children: "Dockermon Login"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    onSubmit: handleSubmit(onSubmit),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-fluid p-formgrid p-grid mt-5 ml-auto mr-auto jc-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "form-group",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-field mt-2 col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-float-label",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                    ...register('username'),
                                                                    name: "username",
                                                                    className: `form-control f-height-inputs ${errors.username ? 'is-invalid' : ''}`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "username",
                                                                    children: "Username"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "invalid-feedback",
                                                            children: (ref = errors.username) === null || ref === void 0 ? void 0 : ref.message
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "form-group mt-5",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-float-label",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                    name: "password",
                                                                    type: "password",
                                                                    ...register('password'),
                                                                    className: `form-control f-height-inputs ${errors.password ? 'is-invalid' : ''}`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "password",
                                                                    children: "Password"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "invalid-feedback",
                                                            children: (ref1 = errors.password) === null || ref1 === void 0 ? void 0 : ref1.message
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-3 ml-auto mr-auto",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                    className: "p-button p-button-primary p-3",
                                                    type: "submit",
                                                    label: "Login",
                                                    disabled: formState.isSubmitting
                                                })
                                            }),
                                            errors.apiError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "alert alert-danger mt-3 mb-0",
                                                children: (ref2 = errors.apiError) === null || ref2 === void 0 ? void 0 : ref2.message
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 9093:
/***/ ((module) => {

module.exports = require("primereact/inputtext");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2473], () => (__webpack_exec__(3049)));
module.exports = __webpack_exports__;

})();