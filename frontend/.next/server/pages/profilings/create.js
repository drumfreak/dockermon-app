"use strict";
(() => {
var exports = {};
exports.id = 9512;
exports.ids = [9512];
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

/***/ 7072:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateVolumeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1515);
/* harmony import */ var helpers_name_generator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9861);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2670);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__, services_socket_service__WEBPACK_IMPORTED_MODULE_10__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__, services_socket_service__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function CreateVolumeView() {
    var ref3, ref1, ref2;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    // const containers = useSelector((state) => {
    //   return state.containers;
    // });
    // const volumes = useSelector((state) => {
    //   return state.volumes;
    // });
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // const [show, setErrorMessage] = useState();
    // const [showContainerDialog, setShowContainerDialog] = useState(false);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: labelsCounter , 1: setLabelsCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
        }
        // await getVolumes();
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // useEffect(() => {
    //   // const c1 = { ...containers };
    //   // const data = Object.keys(c1).map((key) => c1[key]);
    //   // data.sort((a, b) => {
    //   //   if (!a.name) {
    //   //     a.name = 'Unknown';
    //   //   }
    //   //   return a.name.localeCompare(b.name);
    //   // });
    //   // setContainersList(data);
    //   // setTimeout(() => {
    //   //   // selectContainer(containerRef.current);
    //   //   if (!container) {
    //   //     setContainer(data[0]);
    //   //     if (isLoading) {
    //   //       setIsLoading(false);
    //   //     }
    //   //   }
    //   // });
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [volumes]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                socketRef.current.removeListener('createVolumeForm');
            }
        };
    }, []);
    const clearMessages = ()=>{
        msgs1.current.clear();
    };
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_10__/* .socketService.getSocket */ .L.getSocket();
        socket.on('createVolumeForm', (results)=>{
            // console.debug('-----------> Create Volume Result  ', results);
            if (results.status === 'success') {
                (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_3__.confirmDialog)({
                    className: 'confirm-dialogs',
                    message: 'Would you like to view it now?',
                    header: 'Volume Created',
                    icon: 'pi pi-exclamation-check',
                    accept: ()=>router.push('/volumes/' + results.data.id)
                    ,
                    reject: ()=>setIsLoading(false)
                });
            }
            if (results.error) {
                // setErrorMessage(data.error);
                if (!showError) {
                    setShowError(true);
                }
                setIsLoading(false);
            }
        });
        setSocket(socket);
        return socket;
    }
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_6__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required()
    }).required();
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register , handleSubmit , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(validationSchema)
    });
    function onSubmit(fields) {
        var ref;
        // console.log('Submitting');
        // console.log('Fields Data', fields);
        clearMessages();
        const body = {
            Name: fields.name,
            Driver: fields.driver,
            DriverOpt: fields.driverOptions,
            Labels: []
        };
        if (((ref = fields.Labels) === null || ref === void 0 ? void 0 : ref.length) > 0) {
            const vars = {};
            fields.Labels.forEach((f, i)=>{
                if (i + 1 > labelsCounter) return;
                if (f.key && f.value) {
                    vars[f.key] = f.value;
                }
            });
            body.Labels = vars;
        }
        setIsLoading(true);
        socketRef.current.emit('dockerCreateVolume', {
            command: 'createVolume',
            data: body,
            callback: 'createVolumeForm',
            hook: 'createVolume',
            hostId: activeHostRef.current.id
        });
    }
    function randomName() {
        return helpers_name_generator__WEBPACK_IMPORTED_MODULE_11__/* .nameGenerator.generateName */ .W.generateName();
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_12__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "New Volume"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, {
                    className: "col-8 md:8 m-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-fluid p-formgrid p-grid mt-5 ml-auto mr-auto jc-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, {
                                        className: "mt-3",
                                        header: "Basic Details",
                                        toggleable: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "form-group",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-field mt-2 col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "name",
                                                            children: "Volume Name"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "p-inputgroup",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                                                    id: "name",
                                                                    keyfilter: /^[^<>*!\s]+$/,
                                                                    name: "name",
                                                                    type: "text",
                                                                    required: true,
                                                                    ...register('name', {
                                                                        value: randomName()
                                                                    }),
                                                                    className: `form-control f-height-inputs ${errors.name ? 'p-invalid' : ''}`
                                                                }, "name"),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "p-inputgroup-addon",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                                        className: "p-button p-button-secondary",
                                                                        icon: "fa fa-rotate-right",
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            const newName = randomName();
                                                                            setValue('name', newName);
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "invalid-feedback",
                                                            children: (ref3 = errors.name) === null || ref3 === void 0 ? void 0 : ref3.message
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group mt-5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "driver",
                                                                children: "Driver"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                                                id: "driver",
                                                                name: "driver",
                                                                keyfilter: /^[^<>*!\s]+$/,
                                                                type: "text",
                                                                ...register('driver', {
                                                                    value: 'local'
                                                                }),
                                                                className: `form-control f-height-inputs ${errors.driver ? 'p-invalid' : ''}`
                                                            }, "tag1"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "invalid-feedback",
                                                                children: (ref1 = errors.driver) === null || ref1 === void 0 ? void 0 : ref1.message
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "driver",
                                                                children: "Driver Options"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                                                id: "driverOptions",
                                                                name: "driverOptions",
                                                                keyfilter: /^[^<>*!\s]+$/,
                                                                type: "text",
                                                                ...register('driverOptions', {
                                                                    value: ''
                                                                }),
                                                                className: `form-control f-height-inputs ${errors.driverOptions ? 'p-invalid' : ''}`
                                                            }, "driverOptions"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "invalid-feedback",
                                                                children: (ref2 = errors.driverOptions) === null || ref2 === void 0 ? void 0 : ref2.message
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_13__.Panel, {
                                        className: "mt-3 mt-5",
                                        header: "Labels",
                                        toggleable: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid col-12 jusitify-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-10 ml-0 m-auto grid",
                                                        children: [
                                                            ...Array(labelsCounter)
                                                        ].map((e, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "col-12 p-shadow-3 grid",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "col-6 field",
                                                                        children: [
                                                                            i < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                htmlFor: "labels",
                                                                                children: "Key"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                                                                ...register('Labels.' + i + '.key', {
                                                                                    value: null,
                                                                                    shouldUnregister: true
                                                                                }),
                                                                                className: "form-control f-height-inputs"
                                                                            }, 'labels_ct1' + i)
                                                                        ]
                                                                    }, 'labelsVars_ct_value34' + i),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "col-6 field",
                                                                        children: [
                                                                            i < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                htmlFor: "labels.value",
                                                                                children: "Value"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                                                                placeholder: "",
                                                                                ...register('Labels.' + i + '.value', {
                                                                                    value: null
                                                                                }),
                                                                                // className={`form-control f-height-inputs ${errors.toPort ? 'p-invalid' : ''}`}
                                                                                className: "form-control f-height-inputs"
                                                                            }, 'labels_ct_value' + i)
                                                                        ]
                                                                    }, 'labelss_ct_value33' + i)
                                                                ]
                                                            }, 'labelsVars_ct_value_x' + i)
                                                        )
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-2",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-input-group-addon",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                                    className: "p-button p-button-secondary mt-2",
                                                                    icon: "fa fa-faw fa-plus",
                                                                    onClick: (e)=>{
                                                                        e.preventDefault();
                                                                        setLabelsCounter(labelsCounter + 1);
                                                                    }
                                                                }),
                                                                labelsCounter > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                                            className: "p-button p-button-secondary mt-2",
                                                                            icon: "fa fa-faw fa-minus",
                                                                            onClick: (e)=>{
                                                                                setLabelsCounter(labelsCounter - 1);
                                                                                e.preventDefault();
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6 ml-auto mr-auto mt-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                            className: "p-button p-button-primary p-3",
                                            type: "submit",
                                            label: "Create Volume"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_9__.Messages, {
                                        ref: msgs1
                                    })
                                ]
                            })
                        })
                    })
                }, "containerForm")
            ]
        })
    }));
};

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

/***/ 4179:
/***/ ((module) => {

module.exports = require("primereact/confirmdialog");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [1515,9861], () => (__webpack_exec__(7072)));
module.exports = __webpack_exports__;

})();