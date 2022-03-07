"use strict";
exports.id = 8545;
exports.ids = [8545];
exports.modules = {

/***/ 8545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ HostsForm)
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
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5514);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primereact_togglebutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8673);
/* harmony import */ var primereact_togglebutton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primereact_togglebutton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var services_docker_host_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__, services_socket_service__WEBPACK_IMPORTED_MODULE_10__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__, services_socket_service__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable react-hooks/exhaustive-deps */ 













// import { useSelector } from 'react-redux';






function HostsForm(props) {
    var ref, ref1, ref2, ref3, ref4;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    // const hosts = useSelector((state) => {
    //   return state.hosts.hosts;
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
    const connectionTypes = [
        'http',
        'https',
        'ws'
    ];
    const { 0: connectionType , 1: setConnectionType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('http');
    const connectionTypeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(connectionType);
    connectionTypeRef.current = connectionType;
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(active);
    activeRef.current = active;
    const { 0: windowsHost , 1: setWindowsHost  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const windowsHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(windowsHost);
    windowsHostRef.current = windowsHost;
    const { 0: protectedHost , 1: setProtectedHost  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const protectedHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(protectedHost);
    protectedHostRef.current = protectedHost;
    const { 0: port , 1: setPort  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2375);
    const portRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(port);
    portRef.current = port;
    const { 0: formIsLoading , 1: setFormIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const formIsLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(formIsLoading);
    formIsLoadingRef.current = formIsLoading;
    const { 0: currentHost , 1: setCurrentHost  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const currentHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(currentHost);
    currentHostRef.current = currentHost;
    const { 0: hostId , 1: setHostId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const hostIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(hostId);
    hostIdRef.current = hostId;
    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const modeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(mode);
    modeRef.current = mode;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
        }
        // await getHosts();
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (props.mode) {
            setMode(props.mode);
        }
        if (props.host) {
            setFormIsLoading(true);
            setHostId(props.host);
            setTimeout(()=>getCurrentHost()
            , 300);
        }
    }, [
        props.host,
        props.mode
    ]);
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
    // }, [hosts]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                socketRef.current.removeListener('createHostForm');
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
        socket.on('createHostForm', (results)=>{
            setFormIsLoading(false);
            // console.debug('-----------> Host Result  ', results);
            socketRef.current.emit('docker', {
                command: 'listHosts',
                callback: 'hostsList'
            });
            if (results.status === 'success') {
                updateHosts();
                (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_3__.confirmDialog)({
                    className: 'confirm-dialogs',
                    message: 'Would you like to view it now?',
                    header: modeRef.current === 'edit' ? 'Host Updated' : 'Host Created',
                    icon: 'pi pi-exclamation-check',
                    accept: ()=>router.push('/hosts/' + results.data.id)
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
    async function getCurrentHost() {
        if (!hostIdRef.current) return;
        if (isLoadingRef.current) {
            setIsLoading(true);
        }
        if (hostIdRef.current) {
            const f = await services_docker_host_service__WEBPACK_IMPORTED_MODULE_19__/* .dockerHostsService.getHostById */ .d.getHostById(hostIdRef.current);
            if (f) {
                if (f.status === 'success') {
                    setCurrentHost(f.data);
                    setValue('name', f.data.name);
                    setValue('ipAddress', f.data.ipAddress);
                    setValue('connectionType', f.data.connectionType);
                    setValue('port', f.data.port);
                    setPort(f.data.port);
                    if (f.data.active === true) {
                        setActive(true);
                    } else {
                        setActive(false);
                    }
                    if (f.data.windowsHost === true) {
                        setWindowsHost(true);
                    } else {
                        setWindowsHost(false);
                    }
                    if (f.data.protected === true) {
                        setProtectedHost(true);
                    } else {
                        setProtectedHost(false);
                    }
                }
            }
            setFormIsLoading(false);
        } else {
            if (isLoadingRef.current) {
                setIsLoading(false);
            }
        }
    }
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_6__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_6__.string().required(),
        ipAddress: yup__WEBPACK_IMPORTED_MODULE_6__.string().required(),
        port: yup__WEBPACK_IMPORTED_MODULE_6__.number().required()
    }).required();
    const { register , handleSubmit , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(validationSchema)
    });
    function onSubmit(fields) {
        // console.log('Submitting');
        // console.log('Fields Data', fields);
        clearMessages();
        setFormIsLoading(true);
        const body = {
            name: fields.name,
            ipAddress: fields.ipAddress,
            port: portRef.current,
            active: activeRef.current,
            windowsHost: windowsHostRef.current,
            protected: protectedHostRef.current,
            // hostname: fields.hostname,
            connectionType: connectionTypeRef.current
        };
        // console.log('form body', body);
        setIsLoading(true);
        let endPoint = 'createHost';
        if (modeRef.current === 'edit') {
            endPoint = 'editHost';
            body.id = hostIdRef.current;
        }
        socketRef.current.emit('hosts', {
            command: endPoint,
            data: body,
            callback: 'createHostForm',
            hook: 'createHost'
        });
    }
    function updateHosts() {
        if (!socketRef.current) return;
        socketRef.current.emit('hosts', {
            command: 'listHosts',
            callback: 'hostsList'
        });
    }
    function randomName() {
        return helpers_name_generator__WEBPACK_IMPORTED_MODULE_11__/* .nameGenerator.generateName */ .W.generateName();
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_12__/* .Spinner */ .$, {}));
    if (modeRef.current === 'edit' && !currentHostRef.current) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_12__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                modeRef.current === 'edit' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        "Edit Host - ",
                        currentHostRef === null || currentHostRef === void 0 ? void 0 : (ref = currentHostRef.current) === null || ref === void 0 ? void 0 : ref.name
                    ]
                }),
                modeRef.current !== 'edit' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Join a Host"
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
                                                            children: "Name"
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
                                                                        disabled: formIsLoadingRef.current,
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            const newName = randomName();
                                                                            setValue('name', newName);
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FontAwesomeIcon, {
                                                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faArrowRightRotate
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "invalid-feedback",
                                                            children: (ref1 = errors.name) === null || ref1 === void 0 ? void 0 : ref1.message
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
                                                            children: "Connection Type"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "p-inputgroup",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_17__.Dropdown, {
                                                                    //   keyfilter={/^[^<>*!\s]+$/}
                                                                    name: "connectionType",
                                                                    id: "connectionType",
                                                                    options: connectionTypes,
                                                                    placeholder: "Connection Type",
                                                                    disabled: formIsLoadingRef.current,
                                                                    ...register('connectionType', {
                                                                        value: 'http'
                                                                    }),
                                                                    onChange: (e)=>{
                                                                        // selectContainer(e.value);
                                                                        setConnectionType(e.value);
                                                                        setValue('connectionType', e.value);
                                                                    },
                                                                    value: connectionTypeRef === null || connectionTypeRef === void 0 ? void 0 : connectionTypeRef.current,
                                                                    // onChange={(e) => {
                                                                    //   // setRefImage(e.value);
                                                                    //   // selectImage(e.value);
                                                                    // }}
                                                                    className: `form-control f-height-inputs ${errors.connectionType ? 'p-invalid' : ''}`
                                                                }, "connectionType"),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: (ref2 = errors.connectionType) === null || ref2 === void 0 ? void 0 : ref2.message
                                                                })
                                                            ]
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
                                                                children: "IP Address or Hostname"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
                                                                id: "ipAddress",
                                                                name: "ipAddress",
                                                                // keyfilter={/^[^<>*!\s]+$/}
                                                                type: "text",
                                                                placeholder: "192.168.100.10",
                                                                disabled: formIsLoadingRef.current,
                                                                ...register('ipAddress', {
                                                                    value: null
                                                                }),
                                                                className: `form-control f-height-inputs ${errors.ipAddress ? 'p-invalid' : ''}`
                                                            }, "ipAddress"),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "invalid-feedback",
                                                                children: (ref3 = errors.ipAddress) === null || ref3 === void 0 ? void 0 : ref3.message
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "driver",
                                                                children: "Port Number"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_14__.InputNumber, {
                                                                min: 1,
                                                                inputId: 'port',
                                                                placeholder: "2375",
                                                                step: 1,
                                                                max: 99999999,
                                                                useGrouping: false,
                                                                showButtons: false,
                                                                value: portRef.current,
                                                                disabled: formIsLoadingRef.current,
                                                                ...register('port', {
                                                                    value: 2375
                                                                }),
                                                                tooltip: "The port number.",
                                                                onChange: (e)=>setPort(e.value)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "invalid-feedback",
                                                                children: (ref4 = errors.port) === null || ref4 === void 0 ? void 0 : ref4.message
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group mt-5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "project",
                                                                children: "Host Status"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-6 ml-auto mr-auto",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_togglebutton__WEBPACK_IMPORTED_MODULE_18__.ToggleButton, {
                                                                    tooltip: "Enable or Disable backend stats collection and status updates jobs for this host",
                                                                    className: "col-6 m-auto",
                                                                    checked: active,
                                                                    onChange: (e)=>setActive(e.value)
                                                                    ,
                                                                    onLabel: "Active",
                                                                    offLabel: "Disabled",
                                                                    onIcon: "pi pi-check",
                                                                    offIcon: "pi pi-times"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "project",
                                                                children: "Host Protected"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-6 ml-auto mr-auto",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_togglebutton__WEBPACK_IMPORTED_MODULE_18__.ToggleButton, {
                                                                    tooltip: "Prevent this host from being deleted",
                                                                    className: "col-6 m-auto",
                                                                    checked: protectedHostRef.current,
                                                                    onChange: (e)=>setProtectedHost(e.value)
                                                                    ,
                                                                    onLabel: "Protected",
                                                                    offLabel: "Not Protected",
                                                                    onIcon: "pi pi-check",
                                                                    offIcon: "pi pi-times"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "project",
                                                                children: "Windows NON-Linux Host"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-6 ml-auto mr-auto",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_togglebutton__WEBPACK_IMPORTED_MODULE_18__.ToggleButton, {
                                                                    tooltip: "If this is a NON-Linux Windows Host, enable this for extra features",
                                                                    className: "col-6 m-auto",
                                                                    checked: windowsHostRef.current,
                                                                    onChange: (e)=>setWindowsHost(e.value)
                                                                    ,
                                                                    onLabel: "Windows",
                                                                    offLabel: "Not Windows",
                                                                    onIcon: "pi pi-check",
                                                                    offIcon: "pi pi-times"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6 ml-auto mr-auto mt-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                            disabled: formIsLoadingRef.current,
                                            className: "p-button p-button-primary p-3",
                                            type: "submit",
                                            label: modeRef.current !== 'edit' ? 'Join Host' : 'Edit Host'
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
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;