"use strict";
(() => {
var exports = {};
exports.id = 8300;
exports.ids = [8300];
exports.modules = {

/***/ 2420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ ContainerDetailsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__);






function ContainerDetailsModal({ ...props }) {
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const containerRef = useRef(container);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setContainer(props.container);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__.Prism, {
        className: "m-0 p-4",
        language: "javascript",
        style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__.coldarkDark,
        showLineNumbers: true,
        wrapLines: true,
        wrapLongLines: true,
        children: JSON.stringify(container, null, 4)
    }));
}


/***/ }),

/***/ 1729:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateImageView)
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
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1515);
/* harmony import */ var helpers_name_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9861);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2222);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_containers_container_details_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__, services_socket_service__WEBPACK_IMPORTED_MODULE_13__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__, services_socket_service__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function CreateImageView() {
    var ref, ref1, ref2, ref3;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>{
        return state.containers;
    });
    const images = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state)=>{
        return state.images;
    });
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // const [show, setErrorMessage] = useState();
    const { 0: showContainerDialog , 1: setShowContainerDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // const [imagesList, setImagesList] = useState();
    // const imagesListRef = useRef(imagesList);
    // imagesListRef.current = imagesList;
    const { 0: containersList , 1: setContainersList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containersListRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containersList);
    containersListRef.current = containersList;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(container);
    containerRef.current = container;
    // const [selectedImage, setSelectedImage] = useState();
    // const selectedImageRef = useRef(selectedImage);
    // selectedImageRef.current = selectedImage;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: formIsLoading , 1: setFormIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const formIsLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(formIsLoading);
    formIsLoadingRef.current = formIsLoading;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
        }
    // await getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let c1 = {
            ...containers
        };
        if (!activeHost) {
            return;
        }
        c1 = containers[activeHostRef.current.id].containers;
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        data.sort((a, b)=>{
            if (!a.name) {
                a.name = 'Unknown';
            }
            return a.name.localeCompare(b.name);
        });
        setContainersList(data);
        setTimeout(()=>{
            // selectContainer(containerRef.current);
            if (!container) {
                setContainer(data[0]);
                if (isLoading) {
                    setIsLoading(false);
                }
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        images
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                socketRef.current.removeListener('createImageForm');
            }
        };
    }, []);
    const clearMessages = ()=>{
        msgs1.current.clear();
    };
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_13__/* .socketService.getSocket */ .L.getSocket();
        socket.on('createImageForm', (results)=>{
            setFormIsLoading(false);
            // console.debug('-----------> Create Image Result  ', results);
            if (results.status === 'success') {
                (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_3__.confirmDialog)({
                    className: 'confirm-dialogs',
                    message: 'Would you like to view it now?',
                    header: 'Image Created',
                    icon: 'pi pi-exclamation-check',
                    accept: ()=>router.push('/images/' + results.data.id)
                });
            }
            if (results.error) {
                // setErrorMessage(data.error);
                if (!showError) {
                    setShowError(true);
                }
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
        setFormIsLoading(true);
        fields.container = containerRef.current.containerLongId;
        clearMessages();
        const body = {
            // fromImage: 'node:latest',
            fromSrc: null,
            repo: fields.name,
            tag: fields.tag,
            // message: 'Test',
            // author: 'dockermon',
            container: fields.container
        };
        socketRef.current.emit('docker', {
            command: 'createImage',
            data: body,
            callback: 'createImageForm',
            hook: 'createImage',
            hostId: activeHostRef.current.id
        });
    }
    function randomName() {
        const name = helpers_name_generator__WEBPACK_IMPORTED_MODULE_14__/* .nameGenerator.generateName */ .W.generateName();
        return name;
    }
    function selectContainer(e) {
        if (containersListRef.current) {
            const f = containersListRef.current.filter((a)=>a.id === e
            );
            setContainer(f[0]);
        }
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Create Image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_10__.Panel, {
                        className: "col-8 md:8 m-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                onSubmit: handleSubmit(onSubmit),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-fluid p-formgrid p-grid mt-5 ml-auto mr-auto jc-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_panel__WEBPACK_IMPORTED_MODULE_10__.Panel, {
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
                                                                children: "Repo / Image Name"
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
                                                                        disabled: formIsLoadingRef.current,
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
                                                                            disabled: formIsLoadingRef.current,
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
                                                                children: (ref = errors.name) === null || ref === void 0 ? void 0 : ref.message
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group mt-5",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "tag",
                                                                children: "Tag"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                                                id: "tag",
                                                                name: "tag",
                                                                keyfilter: /^[^<>*!\s]+$/,
                                                                type: "text",
                                                                disabled: formIsLoadingRef.current,
                                                                ...register('tag', {
                                                                    value: 'latest'
                                                                }),
                                                                className: `form-control f-height-inputs ${errors.tag ? 'p-invalid' : ''}`
                                                            }, "tag1"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "invalid-feedback",
                                                                children: (ref1 = errors.tag) === null || ref1 === void 0 ? void 0 : ref1.message
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-group mt-5",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "project",
                                                                children: "From Container"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "p-inputgroup",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
                                                                        //   keyfilter={/^[^<>*!\s]+$/}
                                                                        name: "container",
                                                                        id: "container",
                                                                        options: containersList,
                                                                        optionValue: "id",
                                                                        optionLabel: "name",
                                                                        filter: true,
                                                                        showClear: true,
                                                                        filterBy: "name",
                                                                        value: containerRef === null || containerRef === void 0 ? void 0 : (ref2 = containerRef.current) === null || ref2 === void 0 ? void 0 : ref2.id,
                                                                        disabled: formIsLoadingRef.current,
                                                                        placeholder: "Select a Reference Container",
                                                                        ...register('container'),
                                                                        onChange: (e)=>{
                                                                            selectContainer(e.value);
                                                                            setValue('container', e.value);
                                                                        },
                                                                        className: `form-control f-height-inputs ${errors.cotainer ? 'p-invalid' : ''}`
                                                                    }, "container1"),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "invalid-feedback",
                                                                        children: (ref3 = errors.cotainer) === null || ref3 === void 0 ? void 0 : ref3.message
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                                        className: "p-button p-button-secondary mt-0",
                                                                        icon: "fa fa-faw fa-eye",
                                                                        disabled: formIsLoadingRef.current,
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            setShowContainerDialog(!showContainerDialog);
                                                                        }
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-6 ml-auto mr-auto mt-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                                className: "p-button p-button-primary p-3",
                                                type: "submit",
                                                disabled: formIsLoadingRef.current,
                                                label: "Create Image"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_11__.Messages, {
                                            ref: msgs1
                                        })
                                    ]
                                })
                            })
                        })
                    }, "containerForm")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_15__.Dialog, {
                header: "Container Details",
                visible: showContainerDialog,
                style: {
                    width: '70vw'
                },
                onHide: ()=>setShowContainerDialog(false)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_details_modal__WEBPACK_IMPORTED_MODULE_16__/* .ContainerDetailsModal */ .m, {
                    container: container
                })
            })
        ]
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

/***/ 2222:
/***/ ((module) => {

module.exports = require("primereact/dialog");

/***/ }),

/***/ 1404:
/***/ ((module) => {

module.exports = require("primereact/dropdown");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [1515,9861], () => (__webpack_exec__(1729)));
module.exports = __webpack_exports__;

})();