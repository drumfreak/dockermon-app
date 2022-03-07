"use strict";
(() => {
var exports = {};
exports.id = 5452;
exports.ids = [5452,7839,7856,3261,3551,2002];
exports.modules = {

/***/ 9394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ErrorHandler)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2222);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__);






// const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter').then((mod) => mod.Prism));
// const dark = dynamic(() => import('react-syntax-highlighter/dist/cjs/styles/prism').then((mod) => mod.coldarkDark));
function ErrorHandler(props) {
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('No message provied.');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.showError) {
            setShowError(props.showError);
            setErrorMessage(props.errorMessage);
        }
    }, [
        props.showError,
        props.errorMessage
    ]);
    function closeDialog() {
        props.triggerParentUpdate();
        setShowError(false);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_2__.Toast, {
                    ref: toast
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
                    header: "Error Message",
                    visible: showError,
                    style: {
                        width: '70vw'
                    },
                    onHide: ()=>{
                        setShowError(false);
                        closeDialog();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Prism, {
                        className: "m-0 p-4",
                        language: "html",
                        style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__.coldarkDark,
                        showLineNumbers: false,
                        wrapLines: true,
                        wrapLongLines: true,
                        children: errorMessage
                    })
                })
            ]
        })
    }));
}


/***/ }),

/***/ 6881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ContainerFiles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1515);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_2__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function ContainerFiles(props) {
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(container);
    containerRef.current = container;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(error);
    errorRef.current = error;
    const { 0: showError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const showErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showError);
    showErrorRef.current = showError;
    const { 0: selectedRows , 1: setSelectedRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const selectedRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRows);
    selectedRowsRef.current = selectedRows;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: layout  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('list');
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const filesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(files);
    filesRef.current = files;
    const { 0: proccessDate , 1: setProcessDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const containerRef = useRef(container);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        var ref;
        if ((ref = props.container) === null || ref === void 0 ? void 0 : ref.id) {
            if (props.container.id !== containerId) {
                await setContainerId(props.container.id);
                await setContainer(props.container);
                if (props.container.files) {
                    await processData(props.container.changedFiles);
                }
            }
        }
        if (!socketLoaded) {
            await loadSocket();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container.changedFiles
    ]);
    // useEffect(async () => {
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);npm run
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResultFilesContainer_' + containerIdRef.current;
                //console.debug('---> container resources socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
            // stopTimer();
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResultFilesContainer_' + containerIdRef.current;
        // console.debug('---> container resources socket loading ' + socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_2__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            console.debug('Results', results);
            if (results.status === 'success') {
                if (results.data) {
                    processData(results.data);
                // toast.current.show({ severity: 'success', summary: 'Success', detail: 'Container Settings Applied', life: 4000 });
                }
            } else {
                setError(results.error);
                // setShowError(true);
                setIsLoading(false);
            }
        });
        await setSocket(socket);
        setTimeout(()=>{
            updateFiles();
        }, 200);
        return socket;
    }
    function updateFiles() {
        // console.log('Update Container Files');
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'containerFiles',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                saveFiles: true,
                cid: containerRef.current.id,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResultFilesContainer_' + containerRef.current.id,
                hook: 'containerFiles',
                errorHandler: 'dockerResultFilesContainer_' + containerRef.current.id
            });
        }
    }
    function processData(dataIn) {
        setIsLoading(true);
        const data = dataIn.data;
        setProcessDate(dayjs__WEBPACK_IMPORTED_MODULE_3___default()(dataIn.date).format('YYYY-MM-DD HH:mm:ss'));
        // console.log('File Data', dataIn);
        if ((data === null || data === void 0 ? void 0 : data.length) > 0) {
            setFiles(data);
        } else {
            setFiles(null);
        }
        setIsLoading(false);
    }
    // function toggleTimer() {
    //   const cur = timerRunningRef.current;
    //   if (cur) {
    //     stopTimer();
    //   } else {
    //     startTimer();
    //   }
    // }
    // function stopTimer() {
    //   const cur = processTimerRef.current;
    //   if (cur) {
    //     clearInterval(processTimerRef.current);
    //   }
    //   setTimerRunning(false);
    // }
    // function startTimer() {
    //   stopTimer();
    //   const timer = setInterval(() => {
    //     updateFiles();
    //   }, 2000);
    //   setTimerRunning(true);
    //   setProcessTimer(timer);
    // }
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    // if (!container?.running) return <div className="col-12 text-center">Container is not Running</div>;
    if (isLoading) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "filesIsLoading col-12 text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-5 col-12 text-center",
                children: "Files Loading"
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_8__/* .Spinner */ .$, {
                className: "mt-3"
            })
        ]
    }));
    if (!files) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Files"
    }));
    let headerTitle = '' + files.length;
    headerTitle += files.length > 1 ? ' Changed Files' : ' Changed File';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: files.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, {
            header: headerTitle,
            className: "col-12",
            collapsed: false,
            toggleable: false,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 m-0 p-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-9",
                                children: proccessDate
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3 grid text-right",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-inputgroup",
                                    style: {
                                        justifyContent: 'right'
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                        tooltip: "Performs a snapshot of the current files",
                                        onClick: ()=>updateFiles()
                                        ,
                                        label: "Update"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTable, {
                        // delay={200}
                        // showLoader={true}
                        scrollable: files.length > 10 ? true : false,
                        scrollHeight: files.length > 10 ? '400px' : '200px',
                        virtualScrollerOptions: {
                            itemSize: files.length > 10 ? 20 : files.length + 5
                        },
                        selectionMode: "multiple",
                        selection: selectedRows,
                        onSelectionChange: (e)=>setSelectedRows(e.value)
                        ,
                        dataKey: "Path",
                        value: files,
                        layout: layout,
                        paginator: false,
                        stripedRows: true,
                        rowHover: true,
                        rows: 25,
                        sortField: "Path",
                        sortOrder: 1,
                        responsiveLayout: "scroll",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                                sortable: true,
                                field: "Path",
                                header: "Path",
                                align: "left"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_5__.Column, {
                                sortable: true,
                                field: "Kind",
                                header: "Kind",
                                align: "right"
                            })
                        ]
                    })
                ]
            })
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ ContainerEnvVars)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_4__);


// import { useRouter } from 'next/router';




function ContainerEnvVars(props) {
    // const router = useRouter();
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: envVars , 1: setEnvVars  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const envVarsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(envVars);
    envVarsRef.current = envVars;
    const { 0: selectedRows , 1: setSelectedRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const selectedRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRows);
    selectedRowsRef.current = selectedRows;
    // const containerRef = useRef(container);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setContainer(props.container);
        setTimeout(()=>processVars()
        , 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        processVars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        container
    ]);
    const processVars = ()=>{
        var ref, ref1;
        const p = [];
        if (container === null || container === void 0 ? void 0 : (ref = container.details) === null || ref === void 0 ? void 0 : (ref1 = ref.Config) === null || ref1 === void 0 ? void 0 : ref1.Env) {
            container.details.Config.Env;
            container.details.Config.Env.forEach((d, i)=>{
                const s = d.split('=');
                const port = {
                    id: i,
                    keyName: s[0],
                    value: s[1]
                };
                if (s.length === 2) {
                    p.push(port);
                }
            });
            const r = p.sort((a, b)=>{
                if (!a.key) {
                    a.key = 'Unknown';
                }
                return a.key.localeCompare(b.key);
            });
            // console.log('Ports', p);
            setEnvVars(r);
        }
    };
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    if (envVarsRef.current.length < 1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center p-3",
        children: "No Env Vars assigned to this container"
    }));
    let headerTitle = '' + envVarsRef.current.length;
    headerTitle += envVarsRef.current.length > 1 ? ' Env Vars' : ' Env Var';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: envVars.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, {
            header: headerTitle,
            collapsed: false,
            toggleable: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m-0 p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card p-0 m-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {
                        scrollable: envVarsRef.current.length > 10 ? true : false,
                        scrollHeight: envVarsRef.current.length > 10 ? '400px' : '200px',
                        virtualScrollerOptions: {
                            itemSize: envVarsRef.current.length > 10 ? 20 : envVarsRef.current.length + 5
                        },
                        selectionMode: "multiple",
                        selection: selectedRows,
                        onSelectionChange: (e)=>setSelectedRows(e.value)
                        ,
                        dataKey: "id",
                        value: envVarsRef.current,
                        paginator: false,
                        stripedRows: true,
                        rowHover: true,
                        rows: 10000,
                        sortField: "keyName",
                        sortOrder: 1,
                        responsiveLayout: "scroll",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                                sortable: true,
                                field: "keyName",
                                header: "Key"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_4__.Column, {
                                sortable: true,
                                field: "value",
                                header: "Value"
                            })
                        ]
                    }, "foo")
                })
            })
        })
    }));
}


/***/ }),

/***/ 5982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ContainerExec)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function ContainerExec({ ...props }) {
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(container);
    containerRef.current = container;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: command  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const commandRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(command);
    commandRef.current = command;
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
        command: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()
    }).required();
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        var ref;
        clearMessages();
        if ((ref = props.container) === null || ref === void 0 ? void 0 : ref.id) {
            setContainerId(props.container.id);
            setContainer(props.container);
            if (!socketLoaded) {
                setTimeout(()=>{
                    loadSocket();
                }, 500);
            }
        }
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResulsExec_' + containerIdRef.current;
                // console.log('---> container exec socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResulsExec_' + containerIdRef.current;
        // console.log('---> container main socket loading ' + socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            // console.log('================== exec', results);
            setTimeout(()=>{
                setIsSubmitting(false);
            }, 500);
            if (results.status === 'success') {
                if (results.data) {
                //   switch (results.hook) {
                //     case 'removeContainer':
                //       // Show dialog
                //       setContainer(null);
                //       break;
                //     default:
                //       if (results.data.id) {
                //         setContainer(results.data);
                //       }
                //       break;
                //   }
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    const clearMessages = ()=>{
        if (msgs1.current) {
            msgs1.current.clear();
        }
    };
    function onSubmit(fields) {
        setIsSubmitting(true);
        // clearMessages();
        // getImages(fields.command);
        execContainer(fields.command);
    }
    // function commandInputChange(event) {
    //   event.preventDefault();
    //   if (event.key === 'Enter') {
    //     //   getImages(event.target.value);
    //   }
    // }
    function execContainer(cmd) {
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            // console.log('Exec cmd', cmd);
            socketRef.current.emit('docker', {
                command: 'execContainer',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                execCommand: cmd,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResulsExec_' + containerIdRef.current,
                hook: 'execContainer'
            });
        }
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-0s p-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-0 pt-0 mt-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-fluid p-formgrid p-grid mt-0 pt-0 ml-auto mr-auto jc-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "p-inputgroup",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "p-inputgroup-addon input-text-dark-label",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-terminal p-3"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                    id: "command",
                                                    //   keyfilter={/^[^<>*!\s]+$/}
                                                    name: "command",
                                                    type: "text",
                                                    disabled: isSubmitting,
                                                    placeholder: "Execute command in container",
                                                    required: true,
                                                    ...register('command'),
                                                    className: `input-text-dark ${errors.command ? 'p-invalid' : ''}`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "p-inputgroup-addon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                        disabled: isSubmitting,
                                                        className: "p-button p-button-primary p-2 height-100",
                                                        type: "submit",
                                                        label: "Exec"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 text-center",
                                            children: "Command output is not returned. Only notice of the command execution."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_8__.Messages, {
                                ref: msgs1
                            })
                        ]
                    })
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ContainerLogs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2670);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1515);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6085);
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9797);
/* harmony import */ var primereact_badge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_badge__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_4__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function ContainerLogs(props) {
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>{
        return state.containers;
    });
    const { 0: containerId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(container);
    containerRef.current = container;
    const { 0: logs1 , 1: setLogs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const logsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(logs1);
    logsRef.current = logs1;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (props.containerId) {
            if (props.containerId in containers) {
                const c = containers[props.containerId];
                setContainer(c);
                if (!socketLoaded) {
                    await loadSocket();
                }
                loadData();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do mounting stuff here
        return ()=>{
            if (socketRef.current) {
                var ref;
                socketRef.current.emit('dockerContainerLogsClose', {
                    command: 'containerLogsClose',
                    containerId: containerRef.current.containerId,
                    containerLongId: containerRef.current.containerLongId,
                    hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                    callback: 'dockerLogsClose_' + props.containerId,
                    hook: 'containerLogsClose'
                });
                setTimeout(()=>{
                    const socketName = 'dockerLogs_' + props.containerId;
                    socketRef.current.removeListener(socketName);
                }, 500);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.containerId) {
            if (props.containerId in containers) {
                const c = containers[props.containerId];
                setContainer(c);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.containerId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        scrollToBottom();
    }, [
        logs1
    ]);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerLogs_' + props.containerId;
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_4__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    const logs = [
                        ...logsRef.current
                    ];
                    logs.push(results.data);
                    setLogs(logs);
                }
            } else {
                setIsLoading(false);
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        if (socketRef.current) {
            var ref;
            socketRef.current.emit('dockerContainerLogs', {
                command: 'containerLogs',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerLogs_' + props.containerId,
                hook: 'containerLogs'
            });
        } else {
        //   // http fallback;
        }
        setIsLoading(false);
    }
    function openLogs() {
        var ref;
        socketRef.current.emit('tailLogs', {
            command: 'tailLogs',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsTerminalLogs_' + containerRef.current.id,
            hook: 'tailLogs'
        });
    }
    const scrollToBottom = ()=>{
        // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        const el = messagesEndRef.current;
        if (el) {
            const scrollHeight = el.scrollHeight;
            const height = el.clientHeight;
            const maxScrollTop = scrollHeight - height;
            el.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    };
    const clearLogs = ()=>{
        // messagesEndRef.current?.scrollIntoVi
        setLogs([]);
    };
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_3__/* .Spinner */ .$, {}));
    if (!logs1.length === 0) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Logs"
    }));
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Failed to load Logs"
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, {
            header: "Container Logs",
            toggleable: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 ml-2 mr-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 text-right pr-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                label: "Terminal Logs",
                                className: "p-button-secondary p-3 mr-2",
                                onClick: ()=>openLogs()
                                ,
                                icon: "fa fa-tv"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
                                label: "Clear Logs",
                                className: "p-button-primary",
                                onClick: ()=>clearLogs()
                                ,
                                icon: "fa fa-close",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_badge__WEBPACK_IMPORTED_MODULE_8__.Badge, {
                                    value: logsRef.current.length,
                                    size: "large",
                                    severity: "success"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_6__.InputTextarea, {
                        ref: messagesEndRef,
                        autoCorrect: "off",
                        spellCheck: "false",
                        autoComplete: "false",
                        autoCapitalize: "false",
                        style: {
                            backgroundColor: 'black',
                            padding: '4px'
                        },
                        value: logsRef.current.join(''),
                        onChange: ()=>{},
                        className: "col-12 p-5",
                        rows: 10,
                        cols: 30
                    })
                ]
            })
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ContainerMounts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7077);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_7__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function ContainerMounts({ ...props }) {
    var ref, ref1, ref2, ref3;
    // const router = useRouter();
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(container);
    containerRef.current = container;
    const { 0: layout1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('list');
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const containerRef = useRef(container);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.container.id) {
            setContainer(props.container);
            setTimeout(()=>{
                if (!socketLoaded) {
                    loadSocket();
                }
            }, 100);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    // useEffect(() => {
    //   // Do unmounting stuff here
    //   return () => {
    //     if (socketRef.current) {
    //     }
    //   };
    // }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        // const socketName = 'container_Mounts' + containerRef.current.id;
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_7__/* .socketService.getSocket */ .L.getSocket();
        // socket.on(socketName, (results) => {
        //   if (results.status === 'success') {
        //     if (results.data) {
        //       setStats(results.data);
        //       setRefreshCharts(true);
        //       processStats(results.data);
        //     }
        //   } else {
        //     // setIsLoading(false);
        //   }
        // });
        setSocket(socket);
        return socket;
    }
    // console.log('container', container.mounts);
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "Container is missing."
    }));
    if ((container === null || container === void 0 ? void 0 : (ref = container.mounts) === null || ref === void 0 ? void 0 : ref.length) < 1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "No volumes or mounts for this container. Using tmpfs."
    }));
    const openFinderPath = (filePath)=>{
        filePath = filePath.replace('/host_mnt', '');
        if (socketRef.current) {
            // console.log('Open', filePath);
            socketRef.current.emit('openFinderPath', {
                command: 'openFinderPath',
                body: {},
                filePath: filePath,
                callback: 'null'
            });
        }
    };
    const renderListItem = (data)=>{
        // get volume id for link.
        const volumeId = 1;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12 pt-2 pl-3 flex datatable-hover",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-10 pl-4 mr-auto grid",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-0 pt-2",
                            children: [
                                data.Type === 'bind' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    title: "View Drive",
                                    href: "/volumes/[id]",
                                    as: `/volumes/${data.id}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: (e)=>{
                                            openFinderPath(data.Source);
                                            e.preventDefault();
                                        },
                                        title: "View",
                                        className: "lightblue-color",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFolder,
                                                pull: "left",
                                                className: "fa-2x lightblue-color mt-2",
                                                swapOpacity: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "p-0 m-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: data.RW ? 'RW' : 'RO'
                                                })
                                            })
                                        ]
                                    })
                                }),
                                data.Type === 'volume' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    title: "View Drive",
                                    href: "/volumes/[id]",
                                    as: `/volumes/${volumeId}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        title: "View",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHardDrive,
                                                pull: "left",
                                                className: "fa-2x lightblue-color mt-2",
                                                swapOpacity: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "p-0 m-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: data.RW ? 'RW' : 'RO'
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-10",
                            children: [
                                data.Type === 'volume' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "lightblue-color mb-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                href: "/volumes/[id]",
                                                as: `/volumes/${data.id}`,
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    title: "View",
                                                    className: "lightblue-color",
                                                    children: data.Destination
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "p-0 m-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                children: [
                                                    "Volume: ",
                                                    data.Name
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                data.Type === 'bind' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "lightblue-color mb-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    onClick: (e)=>{
                                                        openFinderPath(data.Source);
                                                        e.preventDefault();
                                                    },
                                                    title: "View",
                                                    className: "lightblue-color",
                                                    children: data.Destination
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "p-0 m-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Bind / Link"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "m-0 p-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: data.Source
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-2 ml-auto pr-4 text-right pt-3"
                })
            ]
        }));
    };
    const itemTemplate = (item, layout)=>{
        if (!item) {
            return;
        }
        if (layout === 'list') return renderListItem(item);
    };
    if (!(container === null || container === void 0 ? void 0 : container.mounts)) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    if (((ref1 = container.mounts) === null || ref1 === void 0 ? void 0 : ref1.length) < 1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    let headerTitle = '' + ((ref2 = container.mounts) === null || ref2 === void 0 ? void 0 : ref2.length);
    headerTitle += ((ref3 = container.mounts) === null || ref3 === void 0 ? void 0 : ref3.length) > 1 ? ' Mounts' : ' Mount';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: container.mounts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_6__.Panel, {
            header: headerTitle,
            collapsed: false,
            toggleable: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m-0 p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card p-0 m-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__.DataView, {
                        value: container.mounts,
                        layout: layout1,
                        itemTemplate: itemTemplate,
                        paginator: false,
                        rows: 100
                    })
                })
            })
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContainerNetworkConnect)
/* harmony export */ });
/* unused harmony export ContainerNetworkConnect */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1515);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable react-hooks/exhaustive-deps */ 














function ContainerNetworkConnect(props) {
    var ref2, ref1;
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(container);
    containerRef.current = container;
    const { 0: networkContainers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networkContainersRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(networkContainers);
    networkContainersRef.current = networkContainers;
    const { 0: networkContainersList , 1: setNetworkContainersList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networkContainersListRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(networkContainersList);
    networkContainersListRef.current = networkContainersList;
    const { 0: containerLinksSelected , 1: setContainerLinksSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const containerLinksSelectedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containerLinksSelected);
    containerLinksSelectedRef.current = containerLinksSelected;
    const { 0: containerAliasSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const containerAliasSelectedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containerAliasSelected);
    containerAliasSelectedRef.current = containerAliasSelected;
    const networks = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.networks;
    });
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const { 0: networksList , 1: setNetworksList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networksListRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(networksList);
    networksListRef.current = networksList;
    const { 0: network , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networkRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(network);
    networkRef.current = network;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showNetworkDialog , 1: setShowNetworkDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: name  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(name);
    nameRef.current = name;
    const { 0: showAdvanced , 1: setShowAdvanced  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const showAdvancedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(showAdvanced);
    showAdvancedRef.current = showAdvanced;
    const { 0: networkSettings , 1: setNetworkSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        ipAddress: null,
        networkId: null,
        endpointID: null,
        gateway: null
    });
    const networkSettingsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(networkSettings);
    networkSettingsRef.current = networkSettings;
    const { 0: showHelp , 1: setShowHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: aliasesCounter , 1: setAliasesCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: linksCounter , 1: setLinksCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        var ref;
        clearMessages();
        if ((ref = props.container) === null || ref === void 0 ? void 0 : ref.id) {
            setContainerId(props.container.id);
            setContainer(props.container);
            if (!socketLoaded) {
                setTimeout(()=>{
                    loadSocket();
                }, 500);
            }
        }
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        var ref;
        let c1 = {
            ...networks
        };
        if (!activeHost) {
            return;
        }
        // console.log('Networks', networks);
        if (!networks) {
            return;
        }
        if (!container) {
            return;
        }
        c1 = networks[containerRef.current.host.id].networks;
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        data.sort((a, b)=>{
            if (!a.name) {
                a.name = 'Unknown';
            }
            return a.name.localeCompare(b.name);
        });
        const filteredList = (ref = containerRef.current) === null || ref === void 0 ? void 0 : ref.networks.map((n)=>{
            return n.id;
        });
        let filteredData = data.filter((d)=>{
            if (!filteredList.includes(d.id)) {
                const newObj = {
                    ...d
                };
                newObj.name = d.name + ' [' + d.networkId.substring(0, 12) + ']';
                return newObj;
            }
        });
        if (filteredData.length === 0) {
            filteredData = data;
        }
        // console.log('Network list', filteredData);
        setNetworksList(filteredData);
        setTimeout(()=>{
            // selectContainer(containerRef.current);
            if (!network) {
                setNetwork(filteredData[0]);
                if (isLoading) {
                    setIsLoading(false);
                }
                setNetworkOptions();
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        networks,
        container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        setNetworkOptions();
    }, [
        network
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResulNetworkConnectContainer_' + containerIdRef.current;
                // console.log('---> container rename socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResulNetworkConnectContainer_' + containerIdRef.current;
        // console.log('---> container rename socket loading ' + socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_7__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            // console.log('Add Container Network Result', results);
            setTimeout(()=>{
                setIsSubmitting(false);
            }, 500);
            if (results.status === 'fail') {
                (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.confirmDialog)({
                    className: 'confirm-dialogs',
                    message: results.error,
                    header: 'Docker Error',
                    icon: 'pi pi-exclamation-check',
                    acceptLabel: 'Ok',
                    rejectLabel: '',
                    rejectClassName: 'confirm-button-hidden',
                    acceptClassName: 'p-button-danger',
                    accept: ()=>{}
                });
                setIsLoading(false);
            }
            inspectContainer();
        });
        setSocket(socket);
        return socket;
    }
    const clearMessages = ()=>{
        if (msgs1.current) {
            msgs1.current.clear();
        }
    };
    const toggleHelp = ()=>{
        setShowHelp(!showHelp);
    };
    const setNetworkOptions = ()=>{
        var ref, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
        const tmp = {
            ...networkSettings
        };
        if (((ref = networkRef.current) === null || ref === void 0 ? void 0 : (ref3 = ref.details) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.IPAM) === null || ref4 === void 0 ? void 0 : ref4.Config) && ((ref5 = networkRef.current) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.details) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.IPAM) === null || ref7 === void 0 ? void 0 : ref7.Config.length) > 0) {
            tmp.gateway = networkRef.current.details.IPAM.Config[0].Gateway;
        // tmp.gateway =
        } else {
            tmp.gateway = '';
        }
        // console.log('networkSettings', tmp);
        // networkContainersListRef
        if (((ref8 = networkRef.current) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.containers) === null || ref9 === void 0 ? void 0 : ref9.length) > 0) {
            const c1 = networkRef.current.containers.map((c)=>{
                return {
                    name: c.name,
                    networkId: networkRef.current.networkId,
                    id: c.id,
                    containerId: c.containerId
                };
            });
            // console.log('setNetworkOptions', c1);
            setNetworkContainersList(c1);
        }
        setNetworkSettings(tmp);
    };
    // form validation rules
    let validationSchema;
    if (showAdvancedRef.current) {
        validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
            ipAddress: yup__WEBPACK_IMPORTED_MODULE_5__.string(),
            networkId: yup__WEBPACK_IMPORTED_MODULE_5__.string(),
            endpointID: yup__WEBPACK_IMPORTED_MODULE_5__.string(),
            gateway: yup__WEBPACK_IMPORTED_MODULE_5__.string(),
            // ipPrefixLen: Yup.string(),
            // ipv6Gateway: Yup.string(),
            // globalIPv6Address: Yup.string(),
            // globalIPv6PrefixLen: Yup.string(),
            macAddress: yup__WEBPACK_IMPORTED_MODULE_5__.string()
        }).optional();
    } else {
        validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({}).optional();
    }
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register , handleSubmit , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    });
    function onSubmit(fields) {
        // clearMessages();
        setIsSubmitting(true);
        // console.log('Fields', fields);
        // return;
        const formData = {
            Container: containerRef.current.containerId,
            EndpointConfig: {
                IPAMConfig: {}
            }
        };
        if (showAdvancedRef.current) {
            var ref, ref10;
            formData.EndpointConfig.IPAMConfig.Links = [];
            formData.EndpointConfig.IPAMConfig.Aliases = [], formData.EndpointConfig.IPAMConfig.NetworkID = fields.networkId;
            formData.EndpointConfig.IPAMConfig.EndpointID = fields.endpointID;
            formData.EndpointConfig.IPAMConfig.Gateway = fields.gateway;
            formData.EndpointConfig.IPAMConfig.IPv4Address = fields.ipAddress;
            formData.EndpointConfig.IPAMConfig.IPAddress = fields.ipAddress;
            // formData.EndpointConfig.IPAMConfig.IPPrefixLen = fields.ipPrefixLen;
            // formData.EndpointConfig.IPAMConfig.IPv6Gateway = fields.ipv6Gateway;
            // formData.EndpointConfig.IPAMConfig.GlobalIPv6Address = fields.globalIPv6Address;
            // formData.EndpointConfig.IPAMConfig.GlobalIPv6PrefixLen = fields.globalIPv6PrefixLen;
            formData.EndpointConfig.IPAMConfig.MacAddress = fields.macAddress;
            if (((ref = fields.Aliases) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                const vars = [];
                fields.Aliases.forEach((f, i)=>{
                    if (i + 1 > aliasesCounter) return;
                    if (f && f !== '') {
                        vars.push(f);
                    }
                });
                formData.EndpointConfig.IPAMConfig.Aliases = vars;
            }
            if (((ref10 = fields.Links) === null || ref10 === void 0 ? void 0 : ref10.length) > 0) {
                const vars = [];
                fields.Links.forEach((f, i)=>{
                    if (i + 1 > linksCounter) return;
                    if (f && f.value !== '') {
                        vars.push(formData.EndpointConfig.IPAMConfig.Aliases[i] + ':' + f.value);
                    }
                });
                formData.EndpointConfig.IPAMConfig.Links = vars;
            }
        }
        //      console.log('WILL SUBMIT THIS', formData.EndpointConfig.IPAMConfig);
        // return;
        connectContainer(formData, networkRef.current.networkId);
    }
    function selectNetwork(e) {
        if (networksListRef.current) {
            const f = networksListRef.current.filter((a)=>a.id === e
            );
            setNetwork(f[0]);
            setTimeout(()=>{
                setNetworkOptions();
            });
        }
    }
    function inspectContainer() {
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            var ref;
            const obj = {
                command: 'inspect',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResuls_' + containerRef.current.id,
                hook: 'inspectContainer'
            };
            socketRef.current.emit('docker', obj);
        }
    }
    function connectContainer(data, networkId) {
        // console.log('Connect container', data);
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'connectContainerNetwork',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                networkId: networkId,
                data: data,
                errorHandler: 'dockerResulNetworkConnectContainer_' + containerRef.current.id,
                callback: 'dockerResulNetworkConnectContainer_' + containerRef.current.id,
                hook: 'renameContainer'
            });
        }
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-0 p-0 col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-0 pt-0 mt-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-fluid p-formgrid p-grid mt-0 pt-0 ml-auto mr-auto jc-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-inputgroup",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-inputgroup-addon",
                                            children: "Join Network:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, {
                                            //   keyfilter={/^[^<>*!\s]+$/}
                                            name: "network",
                                            id: "network",
                                            options: networksList,
                                            disabled: isSubmitting,
                                            optionValue: "id",
                                            optionLabel: "name",
                                            filter: true,
                                            showClear: true,
                                            filterBy: "name",
                                            value: networkRef === null || networkRef === void 0 ? void 0 : (ref2 = networkRef.current) === null || ref2 === void 0 ? void 0 : ref2.id,
                                            placeholder: "Select a Network to Connect",
                                            ...register('network'),
                                            onChange: (e)=>{
                                                selectNetwork(e.value);
                                                setValue('network', e.value);
                                            },
                                            className: `pt-2 pb-2 form-control f-height-inputs ${errors.network ? 'p-invalid' : ''}`
                                        }, "network1"),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "invalid-feedback",
                                            children: (ref1 = errors.network) === null || ref1 === void 0 ? void 0 : ref1.message
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-inputgroup-addon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                className: "p-button p-button-secondary mt-0",
                                                icon: "fa fa-faw fa-eye",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    setShowNetworkDialog(!showNetworkDialog);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-inputgroup-addon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                disabled: isSubmitting,
                                                className: "p-button p-button-primary p-2 height-100",
                                                type: "button",
                                                icon: !showAdvancedRef.current ? 'fa fa-edit ' : 'fa fa-minus',
                                                label: "Advanced",
                                                onClick: ()=>setShowAdvanced(!showAdvancedRef.current)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-inputgroup-addon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                disabled: isSubmitting,
                                                className: "p-button p-button-primary p-2 height-100",
                                                type: "submit",
                                                label: "Join"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        showAdvancedRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            children: "Optional Settings"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 text-right p-0 pr-2 mb-3",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    toggleHelp();
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FontAwesomeIcon, {
                                                        className: "mr-2 text-xl",
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faQuestionCircle
                                                    }),
                                                    "Help"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-inputgroup",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "p-inputgroup-addon col-2",
                                                        children: "IPv4 Address:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, {
                                                        id: "ip4Gateway",
                                                        //   keyfilter={/^[^<>*!\s]+$/}
                                                        name: "ipAddress",
                                                        type: "text",
                                                        disabled: isSubmitting,
                                                        placeholder: "IPv4 Address",
                                                        ...register('ipAddress', {
                                                            value: null
                                                        }),
                                                        className: ` ${errors.ipAddress ? 'p-invalid' : 'p-1'}`
                                                    })
                                                ]
                                            })
                                        }),
                                        showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-3 form-help-box",
                                            children: "IPv4 Address"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-inputgroup",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "p-inputgroup-addon col-2",
                                                        children: "IPv4 Gateway:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, {
                                                        id: "gateway",
                                                        //   keyfilter={/^[^<>*!\s]+$/}
                                                        name: "gateway",
                                                        type: "text",
                                                        disabled: isSubmitting,
                                                        placeholder: "IPv4 Gateway",
                                                        value: networkSettingsRef.current.gateway,
                                                        ...register('gateway', {
                                                            value: networkSettingsRef.current.gateway
                                                        }),
                                                        onChange: (e)=>{
                                                            const b = {
                                                                ...networkSettingsRef.current
                                                            };
                                                            b.gateway = e.value;
                                                            setNetworkSettings(b);
                                                        },
                                                        className: ` ${errors.gateway ? 'p-invalid' : 'p-1'}`
                                                    })
                                                ]
                                            })
                                        }),
                                        showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-3 form-help-box",
                                            children: "Gateway address for this network."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-inputgroup",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "p-inputgroup-addon col-2",
                                                        children: "MAC Address:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, {
                                                        id: "macAddress",
                                                        //   keyfilter={/^[^<>*!\s]+$/}
                                                        name: "macAddress",
                                                        type: "text",
                                                        disabled: isSubmitting,
                                                        placeholder: "Mac Address",
                                                        ...register('macAddress', {
                                                            value: null
                                                        }),
                                                        className: ` ${errors.macAddress ? 'p-invalid' : 'p-1'}`
                                                    })
                                                ]
                                            })
                                        }),
                                        showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-3 form-help-box",
                                            children: "MAC address for the endpoint on this network."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-inputgroup",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "p-inputgroup-addon col-2",
                                                        children: "Network ID:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, {
                                                        id: "networkId",
                                                        //   keyfilter={/^[^<>*!\s]+$/}
                                                        name: "networkId",
                                                        type: "text",
                                                        disabled: isSubmitting,
                                                        placeholder: "Network ID",
                                                        ...register('networkId', {
                                                            value: null
                                                        }),
                                                        className: ` ${errors.networkId ? 'p-invalid' : 'p-1'}`
                                                    })
                                                ]
                                            })
                                        }),
                                        showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-3 form-help-box",
                                            children: "Unique ID of the network."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-inputgroup",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "p-inputgroup-addon col-2",
                                                        children: "Endpoint ID:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, {
                                                        id: "endpointID",
                                                        //   keyfilter={/^[^<>*!\s]+$/}
                                                        name: "endpointID",
                                                        type: "text",
                                                        disabled: isSubmitting,
                                                        placeholder: "Endpoint ID",
                                                        ...register('endpointID', {
                                                            value: null
                                                        }),
                                                        className: ` ${errors.endpointID ? 'p-invalid' : 'p-1'}`
                                                    })
                                                ]
                                            })
                                        }),
                                        showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 p-3 form-help-box",
                                            children: "Unique ID for the service endpoint in a Sandbox."
                                        })
                                    ]
                                })
                            })
                        }),
                        showAdvanced && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid col-12 jusitify-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-10 ml-0 m-auto grid",
                                            children: [
                                                ...Array(linksCounter)
                                            ].map((e1, i)=>{
                                                var ref;
                                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12 p-shadow-3 grid",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "p-inputgroup",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "p-inputgroup-addon col-2",
                                                                    children: "Link:"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, {
                                                                    options: networkContainersList,
                                                                    optionLabel: "name",
                                                                    optionValue: "name",
                                                                    ...register('Links.' + i + '.value'),
                                                                    value: (ref = containerLinksSelectedRef.current[i]) === null || ref === void 0 ? void 0 : ref.value,
                                                                    onChange: (e)=>{
                                                                        let selected = {
                                                                            ...containerLinksSelectedRef.current
                                                                        };
                                                                        // console.log('Original', e.value);
                                                                        if (!selected) selected = {};
                                                                        selected[i] = {
                                                                            value: e.value
                                                                        };
                                                                        // console.log('Modified', selected, e.value);
                                                                        // console.log(selected);
                                                                        setContainerLinksSelected(selected);
                                                                        setValue('Links.' + i + '.value', e.value);
                                                                    },
                                                                    // className={`form-control f-height-inputs ${errors.PortBindings[0].value} ? 'p-invalid' : ''}`}
                                                                    className: "form-control f-height-inputs pt-2 pb-2"
                                                                }, 'mount2234s_ct_types' + i)
                                                            ]
                                                        })
                                                    }, 'linksVar234s_ct_value34' + i)
                                                }, 'linkss432Vars_ct_value_x' + i);
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "p-input-group-addon",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                        className: "p-button p-button-secondary mt-2",
                                                        icon: "fa fa-faw fa-plus",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            setLinksCounter(linksCounter + 1);
                                                        }
                                                    }),
                                                    linksCounter > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                className: "p-button p-button-secondary mt-2",
                                                                icon: "fa fa-faw fa-minus",
                                                                onClick: (e)=>{
                                                                    setLinksCounter(linksCounter - 1);
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
                        showAdvanced && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid col-12 jusitify-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-10 ml-0 m-auto grid",
                                            children: [
                                                ...Array(aliasesCounter)
                                            ].map((e, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col-12 p-shadow-3 grid",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "p-inputgroup",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "p-inputgroup-addon col-2",
                                                                    children: "Alias:"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, {
                                                                    ...register('Aliases.' + i, {
                                                                        value: null,
                                                                        shouldUnregister: true
                                                                    }),
                                                                    className: "form-control f-height-inputs"
                                                                }, 'labels_ct1' + i)
                                                            ]
                                                        })
                                                    }, 'labelsVars_ct_value34' + i)
                                                }, 'labelsVars_ct_value_x' + i)
                                            )
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "p-input-group-addon",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                        className: "p-button p-button-secondary mt-2",
                                                        icon: "fa fa-faw fa-plus",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            setAliasesCounter(aliasesCounter + 1);
                                                        }
                                                    }),
                                                    aliasesCounter > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                className: "p-button p-button-secondary mt-2",
                                                                icon: "fa fa-faw fa-minus",
                                                                onClick: (e)=>{
                                                                    setAliasesCounter(aliasesCounter - 1);
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_14__.Messages, {
                            ref: msgs1
                        })
                    ]
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContainerNetworkDisconnect)
/* harmony export */ });
/* unused harmony export ContainerNetworkDisconnect */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1515);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_8__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function ContainerNetworkDisconnect(props) {
    var ref2, ref1;
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(container);
    containerRef.current = container;
    const networks = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>{
        return state.networks;
    });
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const { 0: networksList , 1: setNetworksList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networksListRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(networksList);
    networksListRef.current = networksList;
    const { 0: network , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networkRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(network);
    networkRef.current = network;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showNetworkDialog , 1: setShowNetworkDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: name  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(name);
    nameRef.current = name;
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
    }).required();
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register , handleSubmit , setValue , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        var ref;
        clearMessages();
        if ((ref = props.container) === null || ref === void 0 ? void 0 : ref.id) {
            setContainerId(props.container.id);
            setContainer(props.container);
            if (!socketLoaded) {
                setTimeout(()=>{
                    loadSocket();
                }, 500);
            }
        }
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        var ref;
        let c1 = {
            ...networks
        };
        if (!activeHost) {
            return;
        }
        // console.log('Networks', networks);
        if (!networks) {
            return;
        }
        if (!container) {
            return;
        }
        c1 = networks[containerRef.current.host.id].networks;
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        data.sort((a, b)=>{
            if (!a.name) {
                a.name = 'Unknown';
            }
            return a.name.localeCompare(b.name);
        });
        const filteredList = (ref = containerRef.current) === null || ref === void 0 ? void 0 : ref.networks.map((n)=>{
            return n.id;
        });
        let filteredData = data.filter((d)=>{
            if (filteredList.includes(d.id)) {
                const newObj = {
                    ...d
                };
                newObj.name = d.name + ' [' + d.networkId.substring(0, 12) + ']';
                return newObj;
            }
        });
        // if (filteredData.length === 0) {
        //   filteredData = data;
        // }
        // console.log('Network list', filteredData);
        setNetworksList(filteredData);
        setTimeout(()=>{
            // selectContainer(containerRef.current);
            if (!network) {
                setNetwork(filteredData[0]);
                if (isLoading) {
                    setIsLoading(false);
                }
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        networks,
        container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResulNetworkDisconnectContainer_' + containerIdRef.current;
                // console.log('---> container rename socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResulNetworkDisconnectContainer_' + containerIdRef.current;
        // console.log('---> container rename socket loading ' + socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_8__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            // console.log('Remove Container Network Result', results);
            setTimeout(()=>{
                setIsSubmitting(false);
            }, 500);
            if (results.status === 'fail') {
                (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.confirmDialog)({
                    className: 'confirm-dialogs',
                    message: results.error,
                    header: 'Docker Error',
                    icon: 'pi pi-exclamation-check',
                    acceptLabel: 'Ok',
                    rejectLabel: '',
                    rejectClassName: 'confirm-button-hidden',
                    acceptClassName: 'p-button-danger',
                    accept: ()=>{}
                });
                setIsLoading(false);
            }
            inspectContainer();
        });
        setSocket(socket);
        return socket;
    }
    const clearMessages = ()=>{
        if (msgs1.current) {
            msgs1.current.clear();
        }
    };
    function onSubmit() {
        // clearMessages();
        setIsSubmitting(true);
        // console.log('Fields', fields);
        const formData = {
            Container: containerRef.current.containerId,
            Force: true
        };
        disconnectContainer(formData, networkRef.current.networkId);
    }
    function selectNetwork(e) {
        if (networksListRef.current) {
            const f = networksListRef.current.filter((a)=>a.id === e
            );
            setNetwork(f[0]);
        }
    }
    function disconnectContainer(data, networkId) {
        // console.log('Connect container', data);
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'disconnectContainerNetwork',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                networkId: networkId,
                data: data,
                errorHandler: 'dockerResulNetworkDisconnectContainer_' + containerRef.current.id,
                callback: 'dockerResulNetworkDisconnectContainer_' + containerRef.current.id,
                hook: 'disconnectContainerNetwork'
            });
        }
    }
    function inspectContainer() {
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            var ref;
            const obj = {
                command: 'inspect',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResuls_' + containerRef.current.id,
                hook: 'inspectContainer'
            };
            socketRef.current.emit('docker', obj);
        }
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-0 p-0 col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-0 pt-0 mt-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-fluid p-formgrid p-grid mt-0 pt-0 ml-auto mr-auto jc-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-inputgroup",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-inputgroup-addon",
                                            children: "Leave Network:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
                                            //   keyfilter={/^[^<>*!\s]+$/}
                                            name: "network",
                                            id: "network",
                                            options: networksList,
                                            disabled: isSubmitting,
                                            optionValue: "id",
                                            optionLabel: "name",
                                            filter: true,
                                            showClear: true,
                                            filterBy: "name",
                                            value: networkRef === null || networkRef === void 0 ? void 0 : (ref2 = networkRef.current) === null || ref2 === void 0 ? void 0 : ref2.id,
                                            placeholder: "Select a Network to Leave",
                                            ...register('network'),
                                            onChange: (e)=>{
                                                selectNetwork(e.value);
                                                setValue('network', e.value);
                                            },
                                            className: `pt-2 pb-2 form-control f-height-inputs ${errors.network ? 'p-invalid' : ''}`
                                        }, "network1"),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "invalid-feedback",
                                            children: (ref1 = errors.network) === null || ref1 === void 0 ? void 0 : ref1.message
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-inputgroup-addon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                className: "p-button p-button-secondary mt-0",
                                                icon: "fa fa-faw fa-eye",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    setShowNetworkDialog(!showNetworkDialog);
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "p-inputgroup-addon",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                disabled: isSubmitting,
                                                className: "p-button p-button-primary p-2 height-100",
                                                type: "submit",
                                                label: "Disconnect"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_7__.Messages, {
                            ref: msgs1
                        })
                    ]
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ContainerNetworks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7077);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_networks_network_orgchart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3413);






function ContainerNetworks(props) {
    var ref;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: layout1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('list');
    // const containerRef = useRef(container);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setContainer(props.container);
    // console.log('Props', props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    const renderListItem = (data)=>{
        // console.log('Data', data);
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12 pt-2 pl-3 flex datatable-hover",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 pl-0 mr-auto grid",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_networks_network_orgchart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    network: data,
                    activeContainer: container.id
                })
            })
        }));
    };
    const itemTemplate = (item, layout)=>{
        if (!item) {
            return;
        }
        if (layout === 'list') return renderListItem(item);
    // else if (layout === 'grid') return renderGridItem();
    };
    let headerTitle = '' + container.networks.length;
    headerTitle += container.networks.length > 1 ? ' Networks' : ' Networks';
    if ((container === null || container === void 0 ? void 0 : (ref = container.networks) === null || ref === void 0 ? void 0 : ref.length) < 1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "Container does not belong to any networks."
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: container.networks.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_3__.Panel, {
            header: headerTitle,
            collapsed: false,
            toggleable: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m-0 p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card p-0 m-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__.DataView, {
                        value: container.networks,
                        layout: layout1,
                        itemTemplate: itemTemplate,
                        paginator: false,
                        rows: 100
                    })
                })
            })
        })
    }));
}


/***/ }),

/***/ 9610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ContainerPorts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7077);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_8__);







// import { useRouter } from 'next/router';



function ContainerPorts(props) {
    // const router = useRouter();
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: layout1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('list');
    const { 0: ports , 1: setPorts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // const containerRef = useRef(container);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setContainer(props.container);
        setTimeout(()=>processPorts()
        , 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        processPorts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        container
    ]);
    const processPorts = ()=>{
        var ref, ref1;
        const p = [];
        if (container === null || container === void 0 ? void 0 : (ref = container.details) === null || ref === void 0 ? void 0 : (ref1 = ref.HostConfig) === null || ref1 === void 0 ? void 0 : ref1.PortBindings) {
            container.details.HostConfig.PortBindings;
            Object.keys(container.details.HostConfig.PortBindings).forEach((key)=>{
                const t = key.split('/');
                const d = container.details.HostConfig.PortBindings[key];
                // console.log('Port', d);
                const port = {
                    port: t[0],
                    protocol: t[1],
                    hostIp: d[0].HostIp ? d[0].HostIp : '0.0.0.0',
                    hostPort: d[0].HostPort ? d[0].HostPort : null,
                    portType: d[0].HostPort ? 'public' : 'private'
                };
                if (t.length === 2) {
                    p.push(port);
                }
            });
            // console.log('Ports', p);
            setPorts(p);
        }
    };
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    if (ports.length < 1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center p-3",
        children: "No ports assigned to this container"
    }));
    const renderListItem = (data)=>{
        const portType = data.portType;
        // const publicIp = data.hostIp && data.hostIp === '0.0.0.0' ? '' : data.hostIp;
        // console.log('Port Type', portType);
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12 pt-2 pl-3 flex datatable-hover",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-10 pl-4 mr-auto grid",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-0 pt-2",
                            children: [
                                portType === 'public' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    title: "View",
                                    target: "_blank",
                                    href: "http://localhost:[id]",
                                    as: `http://localhost:${data.port}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        title: "View",
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faNetworkWired,
                                            pull: "left",
                                            className: "fa-2x text-green-500 mt-2",
                                            swapOpacity: true
                                        })
                                    })
                                }),
                                portType === 'private' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    title: "View",
                                    target: "_blank",
                                    href: "http://localhost:[id]",
                                    as: `http://localhost:${data.port}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        title: "View",
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faNetworkWired,
                                            pull: "left",
                                            className: "fa-2x text-orange-500 mt-2",
                                            swapOpacity: true
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                    className: "lightblue-color mb-0",
                                    children: [
                                        portType === 'public' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            title: "View",
                                            target: "_blank",
                                            href: "http://localhost:[id]",
                                            as: `http://localhost:${data.hostPort}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                title: "View",
                                                target: "_blank",
                                                className: "text-green-500",
                                                children: [
                                                    data.hostIp,
                                                    ":",
                                                    data.port,
                                                    " to localhost:",
                                                    data.hostPort
                                                ]
                                            })
                                        }),
                                        portType === 'private' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            title: "View",
                                            target: "_blank",
                                            href: "http://localhost:[id]",
                                            as: `http://localhost:${data.hostPort}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                title: "View",
                                                target: "_blank",
                                                className: "text-orange-500",
                                                children: [
                                                    ":",
                                                    data.hostPort,
                                                    " Exposed Port"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "p-0 m-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: portType === 'private' ? 'text-orange-500' : 'text-green-500',
                                        children: data.portType
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-2 ml-auto pr-4 text-right pt-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        icon: "fa fa-eye",
                        className: "p-button-secondary mr-1 mt-3 volume-view-button",
                        onClick: ()=>{
                            window.open('http://localhost:' + data.hostPort, '_blank');
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, {})
                    })
                })
            ]
        }));
    };
    const itemTemplate = (item, layout)=>{
        if (!item) {
            return;
        }
        if (layout === 'list') return renderListItem(item);
    // else if (layout === 'grid') return renderGridItem();
    };
    let headerTitle = '' + ports.length;
    headerTitle += ports.length > 1 ? ' Ports in use' : ' Port in use';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: ports.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_8__.Panel, {
            header: headerTitle,
            collapsed: false,
            toggleable: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m-0 p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card p-0 m-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__.DataView, {
                        value: ports,
                        layout: layout1,
                        itemTemplate: itemTemplate,
                        paginator: false,
                        rows: 100
                    })
                })
            })
        })
    }));
}


/***/ }),

/***/ 881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ ContainerProcesses)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1515);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7447);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5767);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_4__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function ContainerProcesses(props) {
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(container);
    containerRef.current = container;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(error);
    errorRef.current = error;
    const { 0: showError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const showErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showError);
    showErrorRef.current = showError;
    const { 0: selectedRows , 1: setSelectedRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const selectedRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRows);
    selectedRowsRef.current = selectedRows;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: layout  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('list');
    const { 0: processes , 1: setProcesses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const processesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(processes);
    processesRef.current = processes;
    const { 0: processTimer , 1: setProcessTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const processTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(processTimer);
    processTimerRef.current = processTimer;
    const { 0: timerRunning , 1: setTimerRunning  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const timerRunningRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(timerRunning);
    timerRunningRef.current = timerRunning;
    const { 0: proccessDate , 1: setProcessDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const containerRef = useRef(container);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        var ref;
        if ((ref = props.container) === null || ref === void 0 ? void 0 : ref.id) {
            //if (props.container.id !== containerId) {
            await setContainerId(props.container.id);
            await setContainer(props.container);
            if (props.container.processes) {
                await processData(props.container.processes);
            }
        //}
        }
        if (!socketLoaded) {
            await loadSocket();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    // useEffect(async () => {
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);npm run
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResultProcessesContainer_' + containerIdRef.current;
                // console.debug('---> container resources socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
                stopTimer();
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResultProcessesContainer_' + containerIdRef.current;
        // console.debug('---> container resources socket loading ' + socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_4__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            // console.debug('Results', results);
            if (results.status === 'success') {
                if (results.data) {
                    processData(results.data);
                // toast.current.show({ severity: 'success', summary: 'Success', detail: 'Container Settings Applied', life: 4000 });
                }
            } else {
                setError(results.error);
            // setShowError(true);
            }
        });
        await setSocket(socket);
        setTimeout(()=>{
            updateProcesses();
        }, 200);
        return socket;
    }
    function updateProcesses() {
        // console.log('Update Container Processes');
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'containerProcesses',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                saveProcesses: true,
                cid: containerRef.current.id,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResultProcessesContainer_' + containerRef.current.id,
                hook: 'containerProcesses',
                errorHandler: 'dockerResultProcessesContainer_' + containerRef.current.id
            });
        }
    }
    function processData(dataIn) {
        const data = dataIn.data;
        setProcessDate(dayjs__WEBPACK_IMPORTED_MODULE_9___default()(dataIn.date).format('YYYY-MM-DD HH:mm:ss'));
        const procs = data.Processes.map((p)=>{
            const r = {};
            data.Titles.forEach((t, x)=>{
                r[t] = p[x];
            });
            return r;
        });
        // console.log('procs', procs);
        if ((procs === null || procs === void 0 ? void 0 : procs.length) > 0) {
            setProcesses(procs);
        } else {
            setProcesses(null);
        }
        setIsLoading(false);
    }
    function toggleTimer() {
        const cur = timerRunningRef.current;
        if (cur) {
            stopTimer();
        } else {
            startTimer();
        }
    }
    function stopTimer() {
        const cur = processTimerRef.current;
        if (cur) {
            clearInterval(processTimerRef.current);
        }
        setTimerRunning(false);
    }
    function startTimer() {
        stopTimer();
        const timer = setInterval(()=>{
            updateProcesses();
        }, 2000);
        setTimerRunning(true);
        setProcessTimer(timer);
    }
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "No Container"
    }));
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center"
    }));
    if (!container.running) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "Container is not running."
    }));
    // if (!container?.running) return <div className="col-12 text-center">Container is not Running</div>;
    // if (isLoading) return <div className="processesIsLoading col-12 text-center"><div className="mb-5 col-12 text-center">Processes Loading</div> <Spinner className="mt-3"></Spinner></div>;
    if (!processes) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "No Processes"
    }));
    let headerTitle = '' + processes.length;
    headerTitle += processes.length > 1 ? ' Processes' : ' Process';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: processes.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_5__.Panel, {
            header: headerTitle,
            className: "col-12",
            collapsed: false,
            toggleable: false,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 m-0 p-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-9",
                                children: proccessDate
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-3 grid text-right",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "p-inputgroup",
                                    style: {
                                        justifyContent: 'right'
                                    },
                                    children: [
                                        timerRunning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-inputgroup-addon ml-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinner, {
                                                style: {
                                                    width: '20px',
                                                    height: '20px'
                                                },
                                                strokeWidth: "8",
                                                fill: "var(--surface-ground)",
                                                animationDuration: "1.1s"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            tooltip: "Monitors processes every 2 seconds",
                                            onClick: ()=>toggleTimer()
                                            ,
                                            className: "mr-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, {}),
                                                timerRunning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Stop"
                                                }),
                                                !timerRunning && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Monitor"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            tooltip: "Performs a snapshot of the current processes",
                                            onClick: ()=>updateProcesses()
                                            ,
                                            label: "Update"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_6__.DataTable, {
                        scrollable: processes.length > 10 ? true : false,
                        scrollHeight: processes.length > 10 ? '400px' : '200px',
                        virtualScrollerOptions: {
                            itemSize: processes.length > 10 ? 20 : processes.length + 5
                        },
                        selectionMode: "multiple",
                        selection: selectedRows,
                        onSelectionChange: (e)=>setSelectedRows(e.value)
                        ,
                        dataKey: "PID",
                        value: processes,
                        layout: layout,
                        paginator: false,
                        stripedRows: true,
                        rowHover: true,
                        rows: 10000,
                        sortField: "%CPU",
                        sortOrder: -1,
                        responsiveLayout: "scroll",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_7__.Column, {
                                sortable: true,
                                field: "PID",
                                header: "PID",
                                align: "left"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_7__.Column, {
                                sortable: true,
                                field: "%CPU",
                                header: "CPU",
                                align: "right"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_7__.Column, {
                                sortable: true,
                                field: "%MEM",
                                header: "MEM",
                                align: "right"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_7__.Column, {
                                sortable: true,
                                field: "TIME",
                                header: "CPU TIME",
                                align: "right"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_7__.Column, {
                                sortable: true,
                                field: "COMMAND",
                                header: "COMMAND",
                                align: "left",
                                filter: true,
                                filterPlaceholder: "Search by Process Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_7__.Column, {
                                sortable: true,
                                field: "TTY",
                                header: "TTY",
                                align: "right"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_7__.Column, {
                                sortable: true,
                                field: "USER",
                                header: "USER",
                                align: "right"
                            })
                        ]
                    })
                ]
            })
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContainerRename)
/* harmony export */ });
/* unused harmony export ContainerRename */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function ContainerRename(props) {
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(container);
    containerRef.current = container;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: name1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(name1);
    nameRef.current = name1;
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()
    }).required();
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        var ref;
        clearMessages();
        if ((ref = props.container) === null || ref === void 0 ? void 0 : ref.id) {
            setContainerId(props.container.id);
            setContainer(props.container);
            if (!socketLoaded) {
                setTimeout(()=>{
                    loadSocket();
                }, 500);
            }
        }
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResulRenameContainer_' + containerIdRef.current;
                // console.log('---> container rename socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResulRenameContainer_' + containerIdRef.current;
        // console.log('---> container rename socket loading ' + socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            setTimeout(()=>{
                setIsSubmitting(false);
            }, 500);
            if (results.status === 'success') {
                if (results.data) {
                //   switch (results.hook) {
                //     case 'removeContainer':
                //       // Show dialog
                //       setContainer(null);
                //       break;
                //     default:
                //       if (results.data.id) {
                //         setContainer(results.data);
                //       }
                //       break;
                //   }
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    const clearMessages = ()=>{
        if (msgs1.current) {
            msgs1.current.clear();
        }
    };
    function onSubmit(fields) {
        // clearMessages();
        setIsSubmitting(true);
        renameContainer(fields.name);
    }
    // function nameInputChange(event) {
    //   // event.preventDefault();
    //   // if (event.key === 'Enter') {
    //   //   //   getImages(event.target.value);
    //   // }
    // }
    function renameContainer(name) {
        // console.log('Rename container', name);
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'renameContainer',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                name: name,
                callback: 'dockerResulRenameContainer_' + containerRef.current.id,
                hook: 'renameContainer'
            });
        }
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-0s p-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-0 pt-0 mt-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-fluid p-formgrid p-grid mt-0 pt-0 ml-auto mr-auto jc-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-inputgroup",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "p-inputgroup-addon",
                                                children: "Container Name:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                id: "name",
                                                //   keyfilter={/^[^<>*!\s]+$/}
                                                name: "name",
                                                type: "text",
                                                disabled: isSubmitting,
                                                placeholder: "Rename Container",
                                                required: true,
                                                ...register('name', {
                                                    value: containerRef.current.name
                                                }),
                                                className: ` ${errors.name ? 'p-invalid' : 'p-1'}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "p-inputgroup-addon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                    disabled: isSubmitting,
                                                    className: "p-button p-button-primary p-2 height-100",
                                                    type: "submit",
                                                    label: "Rename"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_8__.Messages, {
                                ref: msgs1
                            })
                        ]
                    })
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContainerResources)
/* harmony export */ });
/* unused harmony export ContainerResources */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1515);
/* harmony import */ var primereact_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9368);
/* harmony import */ var primereact_slider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_slider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5514);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7191);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_ErrorHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9394);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(333);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















function ContainerResources(props) {
    const msgs1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: noUpdate , 1: setNoUpdate  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const noUpdateRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(noUpdate);
    noUpdateRef.current = noUpdate;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(container);
    containerRef.current = container;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const showErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(showError);
    showErrorRef.current = showError;
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: name  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(name);
    nameRef.current = name;
    const { 0: sizeSelected , 1: setSizeSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Megabytes');
    const sizeSelectedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(sizeSelected);
    sizeSelectedRef.current = sizeSelected;
    const { 0: sizeFactor , 1: setSizeFactor  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0.000001);
    const sizeFactorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(sizeFactor);
    sizeFactorRef.current = sizeFactor;
    const { 0: memoryLimit , 1: setMemoryLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1800000000);
    const memoryLimitRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(memoryLimit);
    memoryLimitRef.current = memoryLimit;
    const { 0: memorySwapLimit , 1: setMemorySwapLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1800000000);
    const memorySwapLimitRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(memorySwapLimit);
    memorySwapLimitRef.current = memorySwapLimit;
    const { 0: memoryReservationLimit , 1: setMemoryReservationLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1800000000);
    const memoryReservationLimitRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(memoryReservationLimit);
    memoryReservationLimitRef.current = memoryReservationLimit;
    const { 0: memorySwappinessLimit , 1: setMemorySwappinessLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const memorySwappinessLimitRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(memorySwappinessLimit);
    memorySwappinessLimitRef.current = memorySwappinessLimit;
    const { 0: cpuShares , 1: setCpuShares  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10000);
    const cpuSharesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(cpuShares);
    cpuSharesRef.current = cpuShares;
    const { 0: cpuCount , 1: setCpuCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const cpuCountRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(cpuCount);
    cpuCountRef.current = cpuCount;
    const { 0: cpuPeriod  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const cpuPeriodRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(cpuPeriod);
    cpuPeriodRef.current = cpuPeriod;
    const { 0: cpuQuota , 1: setCpuQuota  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10000);
    const cpuQuotaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(cpuQuota);
    cpuQuotaRef.current = cpuQuota;
    const { 0: cpuPercent , 1: setCpuPercent  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const cpuPercentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(cpuPercent);
    cpuPercentRef.current = cpuPercent;
    const { 0: cpuRealtimePeriod , 1: setCpuRealtimePeriod  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1000000);
    const cpuRealtimePeriodRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(cpuRealtimePeriod);
    cpuRealtimePeriodRef.current = cpuRealtimePeriod;
    const { 0: cpuRealtimeRuntime , 1: setCpuRealtimeRuntime  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1000000);
    const cpuRealtimeRuntimeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(cpuRealtimeRuntime);
    cpuRealtimeRuntimeRef.current = cpuRealtimeRuntime;
    const { 0: blkIOWeight , 1: setBlkIOWeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10000);
    const blkIOWeightRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(blkIOWeight);
    blkIOWeightRef.current = blkIOWeight;
    const { 0: pidLimit , 1: setPidLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const pidLimitRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(pidLimit);
    pidLimitRef.current = pidLimit;
    //   const [memoryLimit, setValue2] = useState(0);
    const { 0: maxMemory  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(18000000000);
    const { 0: cpuQuotaMax  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(18000000000);
    const { 0: showHelp , 1: setShowHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const showHelpRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(showHelp);
    showHelpRef.current = showHelp;
    const { 0: sizeItems , 1: setSizeItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required()
    }).required();
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        var ref;
        if (noUpdateRef.current === true) {
            return;
        }
        clearMessages();
        if ((ref = props.container) === null || ref === void 0 ? void 0 : ref.id) {
            setContainerId(props.container.id);
            setContainer(props.container);
            if (!socketLoaded) {
                setTimeout(()=>{
                    loadSocket();
                }, 500);
            }
        }
        setTimeout(()=>{
            updateLimits();
            buildMenuItems();
        }, 200);
        setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container,
        sizeSelected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResultUpdateContainer_' + containerIdRef.current;
                // console.debug('---> container resources socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResultUpdateContainer_' + containerIdRef.current;
        // console.debug('---> container resources socket loading ' + socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            setTimeout(()=>{
                setIsSubmitting(false);
            }, 500);
            console.debug('Results', results);
            if (results.status === 'success') {
                setNoUpdate(false);
                if (results.data) {
                    toast.current.show({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Container Settings Applied',
                        life: 4000
                    });
                }
            } else {
                setError(results.error);
                setShowError(true);
            }
        });
        setSocket(socket);
        return socket;
    }
    const clearMessages = ()=>{
        if (msgs1.current) {
            msgs1.current.clear();
        }
    };
    const updateLimits = ()=>{
        var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref37, ref38;
        // console.log('Updating', sizeSelected);
        setMemoryLimit(((ref = containerRef.current) === null || ref === void 0 ? void 0 : (ref1 = ref.details) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.HostConfig) === null || ref2 === void 0 ? void 0 : ref2.Memory) * sizeFactor);
        setMemoryReservationLimit(((ref3 = containerRef.current) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.details) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.HostConfig) === null || ref5 === void 0 ? void 0 : ref5.MemoryReservation) * sizeFactor);
        setMemorySwapLimit(((ref6 = containerRef.current) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.details) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.HostConfig) === null || ref8 === void 0 ? void 0 : ref8.MemorySwap) * sizeFactor);
        setMemorySwappinessLimit(((ref9 = containerRef.current) === null || ref9 === void 0 ? void 0 : (ref10 = ref9.details) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.HostConfig) === null || ref11 === void 0 ? void 0 : ref11.MemorySwappiness) || 0);
        setCpuShares((ref12 = containerRef.current) === null || ref12 === void 0 ? void 0 : (ref13 = ref12.details) === null || ref13 === void 0 ? void 0 : (ref14 = ref13.HostConfig) === null || ref14 === void 0 ? void 0 : ref14.CpuShares);
        setCpuQuota((ref15 = containerRef.current) === null || ref15 === void 0 ? void 0 : (ref16 = ref15.details) === null || ref16 === void 0 ? void 0 : (ref17 = ref16.HostConfig) === null || ref17 === void 0 ? void 0 : ref17.CpuQuota);
        setCpuPercent((ref18 = containerRef.current) === null || ref18 === void 0 ? void 0 : (ref19 = ref18.details) === null || ref19 === void 0 ? void 0 : (ref20 = ref19.HostConfig) === null || ref20 === void 0 ? void 0 : ref20.CpuPeriod);
        setCpuPercent((ref21 = containerRef.current) === null || ref21 === void 0 ? void 0 : (ref22 = ref21.details) === null || ref22 === void 0 ? void 0 : (ref23 = ref22.HostConfig) === null || ref23 === void 0 ? void 0 : ref23.CpuPercent);
        setCpuCount((ref24 = containerRef.current) === null || ref24 === void 0 ? void 0 : (ref25 = ref24.details) === null || ref25 === void 0 ? void 0 : (ref26 = ref25.HostConfig) === null || ref26 === void 0 ? void 0 : ref26.CpuCount);
        setCpuRealtimePeriod((ref27 = containerRef.current) === null || ref27 === void 0 ? void 0 : (ref28 = ref27.details) === null || ref28 === void 0 ? void 0 : (ref29 = ref28.HostConfig) === null || ref29 === void 0 ? void 0 : ref29.CpuRealtimePeriod);
        setCpuRealtimeRuntime((ref30 = containerRef.current) === null || ref30 === void 0 ? void 0 : (ref31 = ref30.details) === null || ref31 === void 0 ? void 0 : (ref32 = ref31.HostConfig) === null || ref32 === void 0 ? void 0 : ref32.CpuRealtimeRuntime);
        setBlkIOWeight((ref33 = containerRef.current) === null || ref33 === void 0 ? void 0 : (ref34 = ref33.details) === null || ref34 === void 0 ? void 0 : (ref35 = ref34.HostConfig) === null || ref35 === void 0 ? void 0 : ref35.BlkioWeight);
        setPidLimit((ref36 = containerRef.current) === null || ref36 === void 0 ? void 0 : (ref37 = ref36.details) === null || ref37 === void 0 ? void 0 : (ref38 = ref37.HostConfig) === null || ref38 === void 0 ? void 0 : ref38.PidsLimit);
    };
    const buildMenuItems = ()=>{
        const items = [];
        let selectedClass = sizeSelectedRef.current === 'Bytes' ? 'p-button-outlined p-button-raised p-button p-button-primary p-0' : '';
        items.push({
            label: 'Bytes',
            className: selectedClass,
            // icon: 'pi pi-pencil',
            // className={className},
            command: ()=>{
                toggleSize('Bytes');
            }
        }), selectedClass = sizeSelectedRef.current === 'Kilobytes' ? 'p-button-outlined p-button-raised p-button p-button-primary p-0' : '';
        items.push({
            label: 'Kilobytes',
            // icon: 'pi pi-pencil',
            className: selectedClass,
            command: ()=>{
                toggleSize('Kilobytes');
            }
        });
        selectedClass = sizeSelectedRef.current === 'Megabytes' ? 'p-button-outlined p-button-raised p-button p-button-primary p-0' : '';
        items.push({
            label: 'Megabytes',
            // icon: 'pi pi-pencil',
            className: selectedClass,
            command: ()=>{
                toggleSize('Megabytes');
            }
        });
        selectedClass = sizeSelectedRef.current === 'Gigabytes' ? 'p-button-outlined p-button-raised p-button p-button-primary p-0' : '';
        items.push({
            label: 'Gigabytes',
            // icon: 'pi pi-pencil',
            className: selectedClass,
            command: ()=>{
                toggleSize('Gigabytes');
            }
        });
        setSizeItems(items);
    };
    const toggleSize = (size)=>{
        setSizeSelected(size);
        switch(size){
            case 'Bytes':
                setSizeFactor(1);
                break;
            case 'Kilobytes':
                setSizeFactor(0.001);
                break;
            case 'Megabytes':
                setSizeFactor(0.000001);
                break;
            case 'Gigabytes':
                setSizeFactor(0.000001 / 1024);
                break;
        }
    // setTimeout(() => buildMenuItems(), 300);
    };
    function onSubmit() {
        // clearMessages();
        setIsSubmitting(true);
        // renameContainer(fields.name);
        let body = {
            BlkioWeight: blkIOWeightRef.current,
            CpuShares: cpuSharesRef.current,
            CpuPeriod: cpuPeriodRef.current,
            CpuQuota: cpuQuotaRef.current,
            CpuRealtimePeriod: cpuRealtimePeriodRef.current,
            CpuRealtimeRuntime: cpuRealtimeRuntimeRef.current,
            // "CpusetCpus": "0,1",
            // "CpusetMems": "0",
            CpuCount: cpuCountRef.current,
            Memory: memoryLimitRef.current / sizeFactorRef.current,
            MemorySwap: memorySwapLimitRef.current / sizeFactorRef.current,
            MemoryReservation: memoryReservationLimitRef.current / sizeFactorRef.current,
            MemorySwappiness: memorySwappinessLimitRef.current,
            PidsLimit: pidLimitRef.current
        };
        updateContainer(body);
    }
    // function nameInputChange(event) {
    //   // event.preventDefault();
    //   // if (event.key === 'Enter') {
    //   //   //   getImages(event.target.value);
    //   // }
    // }
    function toggleHelp() {
        setShowHelp(!showHelpRef.current);
    }
    function updateContainer(body) {
        // console.log('Edit container resources', body);
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'updateContainer',
                containerId: containerRef.current.containerId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                data: body,
                callback: 'dockerResultUpdateContainer_' + containerRef.current.id,
                hook: 'updateContainer',
                errorHandler: 'dockerResultUpdateContainer_' + containerRef.current.id
            });
        }
    }
    function updateParent() {
        // console.log('Updating parent adsfasfasfdasdfsafd');
        setShowError(false);
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Container"
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, {
                ref: toast
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ErrorHandler__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandler */ .q, {
                errorMessage: error,
                showError: showError,
                triggerParentUpdate: ()=>{
                    // console.log('Parent Updated');
                    updateParent();
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "m-0s p-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-0 pt-0 mt-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 text-right p-0 pr-2 mb-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                onClick: ()=>toggleHelp()
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeIcon, {
                                        className: "mr-2 text-xl",
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faQuestionCircle
                                    }),
                                    "Help"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            onSubmit: handleSubmit(onSubmit),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-fluid p-formgrid p-grid mt-0 pt-0 ml-auto mr-auto jc-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                children: "Container Name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "Container Name:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                            id: "name",
                                                            //   keyfilter={/^[^<>*!\s]+$/}
                                                            name: "name",
                                                            type: "text",
                                                            disabled: isSubmitting,
                                                            placeholder: "Rename Container",
                                                            required: true,
                                                            ...register('name', {
                                                                value: containerRef.current.name
                                                            }),
                                                            className: ` ${errors.name ? 'p-invalid' : 'p-1'}`
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Rename"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 p-3 form-help-box",
                                                children: "Changes the container name."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group col-12 p-0 mt-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "ml-2",
                                                children: "Memory Limits"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-12 p-0 m-0 mt-3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_17__.Menubar, {
                                                    start: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mr-3",
                                                        children: "Memory Size"
                                                    }),
                                                    model: sizeItems,
                                                    label: "foo",
                                                    buttonClassName: "p-button-info",
                                                    className: "col-12 mb-2 ml-0 mr-0 justify-content-center menubar-menu"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "p-inputgroup",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-2",
                                                                tooltip: "Memory limit in bytes. Default 0",
                                                                children: "Memory:"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                                min: 0,
                                                                inputId: 'MemoryLimit',
                                                                max: maxMemory,
                                                                placeholder: "Memory Limit",
                                                                step: 1,
                                                                useGrouping: false,
                                                                showButtons: false,
                                                                value: memoryLimit,
                                                                tooltip: "Memory limit in bytes. Default 0",
                                                                onChange: (e)=>{
                                                                    setMemoryLimit(e.value * sizeFactor);
                                                                // if (e.value * sizeFactor > memoryReservationLimitRef.current) {
                                                                //   if (memoryReservationLimitRef.current > 0) {
                                                                //     setMemoryReservationLimit(e.value * sizeFactor);
                                                                //   }
                                                                // }
                                                                // if (e.value * sizeFactor > memorySwapLimitRef.current) {
                                                                //   if (memorySwapLimitRef.current > 0) {
                                                                //     setMemorySwapLimit(e.value * sizeFactor);
                                                                //   }
                                                                // }
                                                                },
                                                                disabled: isSubmitting
                                                            }, 'memoryLimit'),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: sizeSelectedRef.current
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-3",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-12",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                            value: memoryLimit / sizeFactor,
                                                                            max: maxMemory,
                                                                            tooltip: "Memory limit in bytes. Default 0",
                                                                            onChange: (e)=>{
                                                                                setMemoryLimit(e.value * sizeFactor);
                                                                            // if (e.value * sizeFactor > memoryReservationLimitRef.current) {
                                                                            //   if ( memoryReservationLimitRef.current > 0) {
                                                                            //     setMemoryReservationLimit(e.value * sizeFactor);
                                                                            //   }
                                                                            // }
                                                                            // if (e.value * sizeFactor > memorySwapLimitRef.current) {
                                                                            //   if (memorySwapLimitRef.current > 0) {
                                                                            //     setMemorySwapLimit(e.value * sizeFactor);
                                                                            //   }
                                                                            // }
                                                                            },
                                                                            disabled: isSubmitting
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: helpers_format_bytes__WEBPACK_IMPORTED_MODULE_12__/* .formatBytes.bytes */ .t.bytes(memoryLimit / sizeFactor)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    helpers_format_bytes__WEBPACK_IMPORTED_MODULE_12__/* .formatBytes.bytes */ .t.bytes(maxMemory),
                                                                    " Max"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    Math.round(memoryLimitRef.current / sizeFactor / maxMemory * 100),
                                                                    "% "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                    disabled: isSubmitting,
                                                                    className: "p-button p-button-primary p-2 height-100 width-100",
                                                                    type: "submit",
                                                                    label: "Apply"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 p-3 form-help-box",
                                                        children: "Allows you to specify a soft limit smaller than --memory which is activated when Docker detects contention or low memory on the host machine. If you use --memory-reservation, it must be set lower than --memory for it to take precedence. Because it is a soft limit, it does not guarantee that the container doesn’t exceed the limit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "p-inputgroup",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-2",
                                                                children: "Memory Reservation:"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                                min: memoryLimitRef.current,
                                                                inputId: 'memoryReservationLimit',
                                                                max: maxMemory,
                                                                placeholder: "Memory Reservation",
                                                                step: 1,
                                                                useGrouping: false,
                                                                showButtons: false,
                                                                value: memoryReservationLimitRef.current,
                                                                tooltip: "Memory soft limit in bytes.",
                                                                onChange: (e)=>{
                                                                    // if (e.value * sizeFactor >= memoryLimitRef.current) {
                                                                    //   setMemoryLimit(e.value * sizeFactor);
                                                                    // }
                                                                    setMemoryReservationLimit(e.value * sizeFactor);
                                                                },
                                                                disabled: isSubmitting
                                                            }, 'memoryReservationLimit'),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: sizeSelectedRef.current
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-3",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-12",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                            value: memoryReservationLimitRef.current / sizeFactor,
                                                                            max: maxMemory,
                                                                            onChange: (e)=>{
                                                                                // if (e.value * sizeFactor >= memoryLimitRef.current) {
                                                                                //   setMemoryLimit(e.value * sizeFactor);
                                                                                // }
                                                                                // if (e.value * sizeFactor >= memoryLimitRef.current) {
                                                                                setMemoryReservationLimit(e.value * sizeFactor);
                                                                            // }
                                                                            },
                                                                            disabled: isSubmitting
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: helpers_format_bytes__WEBPACK_IMPORTED_MODULE_12__/* .formatBytes.bytes */ .t.bytes(memoryReservationLimitRef.current / sizeFactor)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    helpers_format_bytes__WEBPACK_IMPORTED_MODULE_12__/* .formatBytes.bytes */ .t.bytes(maxMemory),
                                                                    " Max"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    Math.round(memoryReservationLimitRef.current / sizeFactor / maxMemory * 100),
                                                                    "% "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                    disabled: isSubmitting,
                                                                    className: "p-button p-button-primary p-2 height-100 width-100",
                                                                    type: "submit",
                                                                    label: "Apply"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 p-3 form-help-box",
                                                        children: "Allows you to specify a soft limit smaller than --memory which is activated when Docker detects contention or low memory on the host machine. If you use --memory-reservation, it must be set lower than --memory for it to take precedence. Because it is a soft limit, it does not guarantee that the container doesn’t exceed the limit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "p-inputgroup",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-2",
                                                                children: "Memory Swap:"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                                min: 0,
                                                                inputId: 'MemorySwapLimit',
                                                                max: maxMemory,
                                                                placeholder: "Memory Swap Limit",
                                                                step: 1,
                                                                useGrouping: false,
                                                                showButtons: false,
                                                                value: memorySwapLimit,
                                                                tooltip: "Total memory limit (memory + swap). Set as -1 to enable unlimited swap.",
                                                                onChange: (e)=>setMemorySwapLimit(e.value * sizeFactor)
                                                                ,
                                                                disabled: isSubmitting
                                                            }, 'memorySwapLimit'),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: sizeSelectedRef.current
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-3",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-12",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                            tooltip: "Memory Swap Limit cannot be less than Memory Limit",
                                                                            value: memorySwapLimit / sizeFactor,
                                                                            max: maxMemory,
                                                                            min: 0,
                                                                            onChange: (e)=>{
                                                                                setMemorySwapLimit(e.value * sizeFactor);
                                                                            },
                                                                            disabled: isSubmitting
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: helpers_format_bytes__WEBPACK_IMPORTED_MODULE_12__/* .formatBytes.bytes */ .t.bytes(memorySwapLimitRef.current / sizeFactor)
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    helpers_format_bytes__WEBPACK_IMPORTED_MODULE_12__/* .formatBytes.bytes */ .t.bytes(maxMemory),
                                                                    " Max"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    Math.round(memorySwapLimitRef.current / sizeFactor / maxMemory * 100),
                                                                    "% "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                    disabled: isSubmitting,
                                                                    className: "p-button p-button-primary p-2 height-100 width-100",
                                                                    type: "submit",
                                                                    label: "Apply"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 p-3 form-help-box",
                                                        children: "The amount of memory this container is allowed to swap to disk. See --memory-swap details."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "p-inputgroup",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-2",
                                                                children: "Memory Swappiness:"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                                min: 0,
                                                                inputId: 'memorySwappinessLimit',
                                                                max: 100,
                                                                placeholder: "Memory Swappiness",
                                                                step: 1,
                                                                useGrouping: false,
                                                                showButtons: false,
                                                                value: memorySwappinessLimit,
                                                                tooltip: "Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100",
                                                                onChange: (e)=>setMemorySwappinessLimit(e.value)
                                                                ,
                                                                disabled: isSubmitting
                                                            }, 'memorySwappinessLimit'),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: "Integer"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-3",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-12",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                            value: memorySwappinessLimit,
                                                                            max: 100,
                                                                            onChange: (e)=>{
                                                                                setMemorySwappinessLimit(e.value);
                                                                            },
                                                                            disabled: isSubmitting
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: memorySwappinessLimitRef.current
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    100,
                                                                    " Max"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: [
                                                                    Math.round(memorySwappinessLimitRef.current / 100 * 100),
                                                                    "% "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "p-inputgroup-addon col-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                    disabled: isSubmitting,
                                                                    className: "p-button p-button-primary p-2 height-100 width-100",
                                                                    type: "submit",
                                                                    label: "Apply"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    showHelp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 p-3 form-help-box",
                                                        children: "By default, the host kernel can swap out a percentage of anonymous pages used by a container. You can set --memory-swappiness to a value between 0 and 100, to tune this percentage. See --memory-swappiness details."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "formGroup mt-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "ml-2",
                                                children: "CPU Limits"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "CPU Count:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                            min: 0,
                                                            inputId: 'CPU Count',
                                                            max: 16,
                                                            placeholder: "CPU Count",
                                                            step: 1,
                                                            useGrouping: false,
                                                            showButtons: false,
                                                            value: cpuCountRef.current,
                                                            tooltip: "The number of usable CPUs (Windows only). On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is CPUCount first, then CPUShares, and CPUPercent last.",
                                                            onChange: (e)=>setCpuCount(e.value)
                                                            ,
                                                            disabled: isSubmitting
                                                        }, 'cpuCount'),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: "CPUs"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                        value: cpuCountRef.current,
                                                                        max: 16,
                                                                        onChange: (e)=>{
                                                                            setCpuCount(e.value);
                                                                        },
                                                                        disabled: isSubmitting
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: cpuCountRef.current
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                16,
                                                                " Max"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                Math.round(cpuCountRef.current / 16 * 100),
                                                                "% "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Apply"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "CPU Shares:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                            min: 0,
                                                            inputId: 'CPU Shares',
                                                            max: 10000,
                                                            placeholder: "CPU Shares",
                                                            step: 1,
                                                            useGrouping: false,
                                                            showButtons: false,
                                                            value: cpuSharesRef.current,
                                                            tooltip: "An integer value representing this container's relative CPU weight versus other containers. 0-1000",
                                                            onChange: (e)=>setCpuShares(e.value)
                                                            ,
                                                            disabled: isSubmitting
                                                        }, 'cpuShares'),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: "bytes"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                        value: cpuSharesRef.current,
                                                                        max: 10000,
                                                                        onChange: (e)=>{
                                                                            setCpuShares(e.value);
                                                                        },
                                                                        disabled: isSubmitting
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: cpuSharesRef.current
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                10000,
                                                                " Max"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                Math.round(cpuSharesRef.current / 10000 * 100),
                                                                "% "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Apply"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "CPU Quota:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                            min: 0,
                                                            inputId: 'CPUQuota',
                                                            max: cpuQuotaMax,
                                                            placeholder: "CPU Quota",
                                                            step: 1,
                                                            useGrouping: false,
                                                            showButtons: false,
                                                            value: cpuQuotaRef.current,
                                                            tooltip: "Microseconds of CPU time that the container can get in a CPU period.",
                                                            onChange: (e)=>{
                                                                if (e === null || e === void 0 ? void 0 : e.value) {
                                                                    setCpuQuota(e.value);
                                                                }
                                                            },
                                                            disabled: isSubmitting
                                                        }, 'cpuQuota'),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: "bytes"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                        value: cpuQuotaRef.current,
                                                                        min: 0,
                                                                        max: cpuQuotaMax,
                                                                        onChange: (e)=>{
                                                                            if (e === null || e === void 0 ? void 0 : e.value) {
                                                                                setCpuQuota(e.value);
                                                                            }
                                                                        },
                                                                        disabled: isSubmitting
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: cpuQuotaRef.current
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                cpuQuotaMax,
                                                                " Max"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                Math.round(cpuQuotaRef.current / cpuQuotaMax * 100),
                                                                "% "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Apply"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "CPU Realtime Period:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                            min: 0,
                                                            inputId: 'CPURealTime',
                                                            max: 1000000,
                                                            placeholder: "CPU Realtime Period",
                                                            step: 1,
                                                            useGrouping: false,
                                                            showButtons: false,
                                                            value: cpuRealtimePeriodRef.current,
                                                            tooltip: "The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.",
                                                            onChange: (e)=>setCpuRealtimePeriod(e.value)
                                                            ,
                                                            disabled: isSubmitting
                                                        }, 'cpuRealtimePeriod'),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: "Integer"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                        value: cpuRealtimePeriodRef.current,
                                                                        max: 1000000,
                                                                        onChange: (e)=>{
                                                                            setCpuRealtimePeriod(e.value);
                                                                        },
                                                                        disabled: isSubmitting
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: cpuRealtimePeriodRef.current
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                1000000,
                                                                " Max"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                Math.round(cpuRealtimePeriodRef.current / 1000000 * 100),
                                                                "% "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Apply"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "CPU Realtime Runtime:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                            min: 0,
                                                            inputId: 'CPURealtimeRuntime',
                                                            max: 1000000,
                                                            placeholder: "CPU Realtime Runtime",
                                                            step: 1,
                                                            useGrouping: false,
                                                            showButtons: false,
                                                            value: cpuRealtimeRuntimeRef.current,
                                                            tooltip: "The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.",
                                                            onChange: (e)=>setCpuRealtimeRuntime(e.value)
                                                            ,
                                                            disabled: isSubmitting
                                                        }, 'cpuRealtimeRuntime'),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: "Integer"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                        value: cpuRealtimeRuntimeRef.current,
                                                                        max: 1000000,
                                                                        onChange: (e)=>{
                                                                            setCpuRealtimeRuntime(e.value);
                                                                        },
                                                                        disabled: isSubmitting
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: cpuRealtimeRuntimeRef.current
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                1000000,
                                                                " Max"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                Math.round(cpuRealtimeRuntimeRef.current / 1000000 * 100),
                                                                "% "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Apply"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "formGroup mt-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "ml-2",
                                                children: "Block IO"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "Block IO Weight:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                            min: 0,
                                                            inputId: 'BlockIOWeight',
                                                            max: 1000,
                                                            placeholder: "Block IO Weight",
                                                            step: 1,
                                                            useGrouping: false,
                                                            showButtons: false,
                                                            value: blkIOWeight,
                                                            tooltip: "Block IO weight (relative weight).",
                                                            onChange: (e)=>setBlkIOWeight(e.value)
                                                            ,
                                                            disabled: isSubmitting
                                                        }, 'blkIoWeight'),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: "Integer"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                        value: blkIOWeight,
                                                                        max: 1000,
                                                                        onChange: (e)=>{
                                                                            setBlkIOWeight(e.value);
                                                                        },
                                                                        disabled: isSubmitting
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: blkIOWeightRef.current
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                1000,
                                                                " Max"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                Math.round(blkIOWeightRef.current / 1000 * 100),
                                                                "% "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Apply"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "formGroup mt-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "ml-2",
                                                children: "Processes"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "p-inputgroup",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-2",
                                                            children: "Pid Limit:"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumber, {
                                                            min: -1,
                                                            inputId: 'PidLimit',
                                                            max: 500,
                                                            placeholder: "PID Limit",
                                                            step: 1,
                                                            useGrouping: false,
                                                            showButtons: false,
                                                            value: pidLimit,
                                                            disabled: isSubmitting,
                                                            tooltip: "Tune a container's PIDs limit. Set 0 or -1 for unlimited, or null to not change.",
                                                            onChange: (e)=>setPidLimit(e.value)
                                                        }, 'pidLimit'),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: "Integer"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_10__.Slider, {
                                                                        value: pidLimit,
                                                                        max: 500,
                                                                        min: -1,
                                                                        onChange: (e)=>{
                                                                            setPidLimit(e.value);
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: pidLimitRef.current
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                500,
                                                                " Max"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: [
                                                                Math.round(pidLimitRef.current / 500 * 100),
                                                                "% "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "p-inputgroup-addon col-1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                disabled: isSubmitting,
                                                                className: "p-button p-button-primary p-2 height-100 width-100",
                                                                type: "submit",
                                                                label: "Apply"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_8__.Messages, {
                                        ref: msgs1
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ContainerStats)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var services_stats_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _charts_container_cpu_line_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1078);
/* harmony import */ var _charts_container_memory_line_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1085);
/* harmony import */ var _charts_container_processes_bar_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4781);
/* harmony import */ var _charts_container_network_line_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6989);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7757);
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1515);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_12__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function ContainerStats(props) {
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: refreshCharts , 1: setRefreshCharts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const refreshChartsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(refreshCharts);
    refreshChartsRef.current = refreshCharts;
    const { 0: refreshStats , 1: setRefreshStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const refreshStatsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(refreshStats);
    refreshStatsRef.current = refreshStats;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { 0: stats , 1: setStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsProcesses1 , 1: setStatsProcesses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsMemory1 , 1: setStatsMemory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [statsMemoryPercent, setStatsMemoryPercent] = useState();
    const { 0: statsNetworkIn1 , 1: setStatsNetworkIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsNetworkOut1 , 1: setStatsNetworkOut  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsDates1 , 1: setStatsDates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: statsCPU1 , 1: setStatsCPU  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: startDate , 1: setStartDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dayjs__WEBPACK_IMPORTED_MODULE_10__().subtract(15, 'minute').toDate());
    const startDateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(startDate);
    startDateRef.current = startDate;
    const { 0: endDate , 1: setEndDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const endDateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(endDate);
    endDateRef.current = endDate;
    const { 0: nowDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const nowDateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(nowDate);
    nowDateRef.current = nowDate;
    const { 0: timeoutTimer , 1: setTimeoutTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(timeoutTimer);
    timerRef.current = timeoutTimer;
    const { 0: statsTimer , 1: setStatsTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const statsTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(statsTimer);
    statsTimerRef.current = statsTimer;
    const { 0: selectedRange , 1: setSelectedRange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(60 * 15);
    const selectedRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRange);
    selectedRangeRef.current = selectedRange;
    const cpuChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const memoryChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const processesChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const networkChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ranges = [
        {
            name: 'Custom',
            value: null
        },
        {
            name: '1 Minute',
            value: 60
        },
        {
            name: '5 Minutes',
            value: 60 * 5
        },
        {
            name: '15 Minutes',
            value: 60 * 15
        },
        {
            name: '30 Minutes',
            value: 60 * 30
        },
        {
            name: '60 Minutes',
            value: 60 * 60
        },
        {
            name: '90 Minutes',
            value: 60 * 90
        },
        {
            name: '2 Hours',
            value: 60 * 120
        },
        {
            name: '3 Hours',
            value: 60 * 180
        },
        {
            name: '6 Hours',
            value: 60 * 360
        },
        {
            name: '8 Hours',
            value: 60 * 480
        },
        {
            name: '12 Hours',
            value: 60 * 720
        }, 
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (props.containerId) {
            if (!socketLoaded) {
                await loadSocket();
            }
            loadData();
            if (refreshStatsRef.current) {
                setTimeout(()=>{
                    startStatsTimer();
                }, 500);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do mounting stuff here
        return ()=>{
            if (statsTimerRef === null || statsTimerRef === void 0 ? void 0 : statsTimerRef.current) {
                clearInterval(statsTimerRef.current);
                setStatsTimer(null);
            }
            if (socketRef.current) {
                const socketName = 'containerStats_' + props.containerId;
                socketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'containerStats_' + props.containerId;
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_12__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    setStats(results.data);
                    setRefreshCharts(true);
                    processStats(results.data);
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        let start;
        let end;
        if (selectedRangeRef.current) {
            start = dayjs__WEBPACK_IMPORTED_MODULE_10__().subtract(selectedRangeRef.current, 'second').toDate();
            end = dayjs__WEBPACK_IMPORTED_MODULE_10__().toDate();
        } else {
            start = startDateRef.current;
            end = dayjs__WEBPACK_IMPORTED_MODULE_10__().toDate();
        }
        setStartDate(start);
        setEndDate(end);
        const where = {
            containerId: props.containerId,
            limit: 100,
            sortKey: 'createdAt',
            sortType: 'DESC',
            startDate: start,
            endDate: end
        };
        if (socketRef.current) {
            socketRef.current.emit('stats', {
                command: 'stats',
                body: where,
                callback: 'containerStats_' + props.containerId
            });
        } else {
            // http fallback;
            const { data , error  } = await services_stats_service__WEBPACK_IMPORTED_MODULE_2__/* .statsService.getStats */ .D.getStats(where);
            if (error) {
                setError(error);
                console.log(error);
            }
            if (data) {
                setStats(data);
                setRefreshCharts(true);
                processStats(data);
            }
        }
    }
    function processStats(data) {
        const statsCPU = [];
        const statsProcesses = [];
        const statsMemory = [];
        const statsMemoryPercent = [];
        const statsNetworkIn = [];
        const statsNetworkOut = [];
        const statsDates = [];
        data.map((a)=>{
            // console.log(a.networkOut);
            const date = dayjs__WEBPACK_IMPORTED_MODULE_10__(a.createdAt).format('YYYY-MM-DD HH:mm:ss');
            statsCPU.push(a.cpu);
            statsProcesses.push(a.pids);
            statsMemory.push(a.memory);
            statsMemoryPercent.push(a.memoryPercent);
            statsNetworkIn.push(a.networkIn);
            statsNetworkOut.push(a.networkOut);
            statsDates.push(date);
        });
        statsDates.push(dayjs__WEBPACK_IMPORTED_MODULE_10__().format('YYYY-MM-DD HH:mm:ss'));
        setStatsCPU(statsCPU);
        setStatsProcesses(statsProcesses);
        setStatsMemory(statsMemory);
        // setStatsMemoryPercent(statsMemoryPercent);
        setStatsNetworkOut(statsNetworkOut);
        setStatsNetworkIn(statsNetworkIn);
        setStatsDates(statsDates);
        if (refreshChartsRef.current) {
            if (cpuChartRef === null || cpuChartRef === void 0 ? void 0 : cpuChartRef.current) {
                cpuChartRef.current.updateChart();
            }
            if (memoryChartRef === null || memoryChartRef === void 0 ? void 0 : memoryChartRef.current) {
                memoryChartRef.current.updateChart();
            }
            if (processesChartRef === null || processesChartRef === void 0 ? void 0 : processesChartRef.current) {
                processesChartRef.current.updateChart();
            }
            if (networkChartRef === null || networkChartRef === void 0 ? void 0 : networkChartRef.current) {
                networkChartRef.current.updateChart();
            }
        }
        setRefreshCharts(false);
        setIsLoading(false);
    // if (stats) {
    //   setIsLoading(false);
    // }
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_13__/* .Spinner */ .$, {}));
    if (error1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Failed to load stats"
    }));
    if (!stats) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    const pickerStartDate = (value)=>{
        if (timerRef === null || timerRef === void 0 ? void 0 : timerRef.current) {
            clearTimeout(timerRef.current);
        }
        const timer = setTimeout(()=>{
            setSelectedRange(null);
            setRefreshCharts(true);
            setStartDate(new Date(value));
            setTimeout(()=>{
                loadData();
            });
        }, 1500);
        setTimeoutTimer(timer);
    };
    const pickerEndDate = async (value)=>{
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        const timer = setTimeout(async ()=>{
            setSelectedRange(null);
            setRefreshCharts(true);
            setEndDate(new Date(value));
            setTimeout(()=>{
                loadData();
            });
        }, 1500);
        setTimeoutTimer(timer);
    };
    const changeRange = async (event)=>{
        setSelectedRange(event.value);
        setTimeout(()=>{
            setRefreshCharts(true);
            loadData();
        });
    };
    const toggleRefresh = ()=>{
        const refresh = !refreshStatsRef.current;
        setRefreshStats(refresh);
        if (refresh) {
            startStatsTimer();
        } else {
            stopStatsTimer();
        }
    };
    function startStatsTimer() {
        if (statsTimerRef.current) {
            clearInterval(statsTimerRef.current);
        }
        const interval = setInterval(()=>{
            loadData();
        }, 15000);
        setStatsTimer(interval);
    }
    const stopStatsTimer = ()=>{
        if (statsTimerRef.current) {
            clearInterval(statsTimerRef.current);
            setStatsTimer(null);
        }
    };
    // const panelHeaderTemplate = (options) => {
    //   const toggleIcon = options?.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
    //   const className = `${options.className} justify-content-start`;
    //   const titleClassName = `${options.titleClassName} pl-1`;
    //   return (
    //     <div className={className}>
    //       <div className="col-12 p-0 flex">
    //         <div className="col-10 p-0 justify-content-start">
    //           <span className={titleClassName}>Container Stats</span>
    //         </div>
    //         <div className="col-2 p-0 text-right justify-content-end">
    //           <button className={options.togglerClassName} onClick={options.onTogglerClick}>
    //             <span className={toggleIcon}></span>
    //             <Ripple />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid col-12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-inputgroup",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "ml-5 mt-2 mr-2",
                            htmlFor: "startDate",
                            children: [
                                "Start:",
                                ' '
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, {
                            id: "startDate",
                            name: "startDate",
                            value: startDateRef.current,
                            onSelect: (e)=>pickerStartDate(e.value)
                            ,
                            showIcon: true,
                            showTime: true,
                            showSeconds: true,
                            maxDate: endDateRef.current
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "ml-5 mr-2 mt-2",
                            htmlFor: "endDate",
                            children: "End:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_calendar__WEBPACK_IMPORTED_MODULE_8__.Calendar, {
                            id: "endDate",
                            name: "endDate",
                            value: endDateRef.current,
                            onSelect: (e)=>pickerEndDate(e.value)
                            ,
                            showIcon: true,
                            showTime: true,
                            showSeconds: true,
                            minDate: startDateRef.current,
                            maxDate: nowDateRef.current
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "ml-5 mr-2 mt-2",
                            htmlFor: "endDate",
                            children: [
                                "Range:",
                                ' '
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
                            className: "mt-0",
                            name: "range",
                            value: selectedRange,
                            options: ranges,
                            onChange: changeRange,
                            optionLabel: "name",
                            placeholder: "Select a Range"
                        }),
                        !refreshStatsRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_11__.Button, {
                            className: "ml-2 p-button p-button-secondary",
                            tooltip: "Start Stats Refreshing",
                            tooltipOptions: {
                                position: 'bottom'
                            },
                            icon: "fa fa-play",
                            onClick: toggleRefresh
                        }),
                        refreshStatsRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_11__.Button, {
                            className: "ml-2 p-button-raised p-button-secondary",
                            tooltip: "Stop Stats Refreshing",
                            tooltipOptions: {
                                position: 'bottom'
                            },
                            icon: "fa fa-pause",
                            onClick: toggleRefresh
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-6 m-auto mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                    header: "CPU Stats",
                                    toggleable: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_container_cpu_line_chart__WEBPACK_IMPORTED_MODULE_3__/* .ContainerCPULineChart */ .B, {
                                        ref: cpuChartRef,
                                        className: "m-4",
                                        statsCPU: statsCPU1,
                                        statsDates: statsDates1,
                                        startDate: startDate,
                                        endDate: endDate
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-6 m-auto mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                    header: "Memory Stats",
                                    toggleable: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_container_memory_line_chart__WEBPACK_IMPORTED_MODULE_4__/* .ContainerMemoryLineChart */ .r, {
                                        ref: memoryChartRef,
                                        className: "m-4",
                                        statsMemory: statsMemory1,
                                        statsDates: statsDates1,
                                        startDate: startDate,
                                        endDate: endDate
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 grid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-6 m-auto mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                    header: "Processes Stats",
                                    toggleable: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_container_processes_bar_chart__WEBPACK_IMPORTED_MODULE_5__/* .ContainerProcessesBarChart */ .R, {
                                        ref: processesChartRef,
                                        className: "m-4",
                                        statsProcesses: statsProcesses1,
                                        statsDates: statsDates1,
                                        startDate: startDate,
                                        endDate: endDate
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-6 m-auto mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_7__.Panel, {
                                    header: "Network Stats",
                                    toggleable: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_container_network_line_chart__WEBPACK_IMPORTED_MODULE_6__/* .ContainerNetworkLineChart */ .X, {
                                        ref: networkChartRef,
                                        className: "m-4",
                                        statsNetworkIn: statsNetworkIn1,
                                        statsNetworkOut: statsNetworkOut1,
                                        statsDates: statsDates1,
                                        startDate: startDate,
                                        endDate: endDate
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ContainerSummary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7191);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1515);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5452);
/* harmony import */ var primereact_inputswitch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9368);
/* harmony import */ var primereact_slider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_slider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5767);
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_selectbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6551);
/* harmony import */ var primereact_selectbutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_selectbutton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5514);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _charts_profiler_container_profiler_cpu_line_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4033);
/* harmony import */ var _charts_profiler_container_profiler_memory_line_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9731);
/* harmony import */ var _charts_profiler_container_profiler_disk_io_line_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(178);
/* harmony import */ var _charts_profiler_container_profiler_processes_bar_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2337);
/* harmony import */ var _charts_profiler_container_profiler_network_line_chart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9646);
/* harmony import */ var _charts_profiler_container_profiler_disk_pie_chart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7225);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_socket_service__WEBPACK_IMPORTED_MODULE_6__]);
services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react-hooks/exhaustive-deps */ 





















function ContainerSummary(props) {
    var ref12, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11;
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(container);
    containerRef.current = container;
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(containerId);
    containerIdRef.current = containerId;
    const cpuChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const memoryChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const processesChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const networkChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const socketLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(socketLoaded);
    socketLoadedRef.current = socketLoaded;
    const { 0: statsTimer , 1: setStatsTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const statsTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(statsTimer);
    statsTimerRef.current = statsTimer;
    const { 0: gridOption , 1: setGridOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Grid');
    const gridOptions = [
        'Grid',
        'List'
    ];
    const tickRates = [
        1,
        2,
        3,
        5,
        10,
        15,
        30,
        60,
        90,
        120,
        180
    ];
    const { 0: tickRate , 1: setTickRate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    const tickRateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(tickRate);
    tickRateRef.current = tickRate;
    const { 0: tick , 1: setTick  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const tickRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(tick);
    tickRef.current = tick;
    const { 0: liveMonitor , 1: setLiveMonitor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const liveMonitorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(liveMonitor);
    liveMonitorRef.current = liveMonitor;
    const { 0: liveMonitorPause , 1: setLiveMonitorPause  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const liveMonitorPauseRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(liveMonitorPause);
    liveMonitorPauseRef.current = liveMonitorPause;
    const { 0: chartAnimationTime , 1: setChartAnimationTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1100);
    const chartAnimationTimeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartAnimationTime);
    chartAnimationTimeRef.current = chartAnimationTime;
    const { 0: chartLineTension , 1: setChartLineTension  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.038);
    const chartLineTensionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartLineTension);
    chartLineTensionRef.current = chartLineTension;
    const _chartColors = {
        diskInput: 'purple',
        diskOutput: 'blue',
        cpu: 'cyan',
        memory: 'green',
        networkTx: 'orange',
        networkRx: 'red',
        processes: 'purple'
    };
    const { 0: chartColors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_chartColors);
    const chartColorsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(chartColors);
    chartColorsRef.current = chartColors;
    const chartData = {
        dates: [],
        cpu: [],
        memoryPercent: [],
        processes: [],
        diskRead: [],
        diskWrite: [],
        networkTx: [],
        networkRx: [],
        diskUsed: [],
        diskImage: [],
        diskLabels: [],
        diskUsage: []
    };
    const statsSummary = {
        diskRead: 0,
        diskWrite: 0,
        diskTotal: 0,
        diskTmpFSizes: 0,
        diskVolumeSize: 0,
        networkRx: 0,
        networkTx: 0,
        processes: 0,
        memoryLimit: 0,
        memoryUsage: 0,
        cpuUsage: 0,
        startDate: dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD HH:mm:ss'),
        endDate: dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM-DD HH:mm:ss'),
        intervalCount: 0
    };
    // const [statsSummary, setStatsSummary] = useState(_statsSummary);
    const { 0: stats1 , 1: setStats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        statsSummary: statsSummary,
        chartData: chartData,
        sample: {}
    });
    const statsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(stats1);
    statsRef.current = stats1;
    // const statsSummaryRef = useRef(statsSummary);
    // statsSummaryRef.current = statsSummary;
    const { 0: pollerHasRun , 1: setPollerHasRun  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showCPUChart , 1: setShowCPUChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showCPUChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showCPUChart);
    showCPUChartRef.current = showCPUChart;
    const { 0: showMemoryChart , 1: setShowMemoryChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showMemoryChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showMemoryChart);
    showMemoryChartRef.current = showMemoryChart;
    const { 0: showDiskIOChart , 1: setShowDiskIOChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showDiskIOChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showDiskIOChart);
    showDiskIOChartRef.current = showDiskIOChart;
    const { 0: showNetworkChart , 1: setShowNetworkChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showNetworkChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showNetworkChart);
    showNetworkChartRef.current = showNetworkChart;
    const { 0: showProcessesChart , 1: setShowProcessesChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showProcessesChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showProcessesChart);
    showProcessesChartRef.current = showProcessesChart;
    const { 0: showDiskSpaceChart , 1: setShowDiskSpaceChart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showDiskSpaceChartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showDiskSpaceChart);
    showDiskSpaceChartRef.current = showDiskSpaceChart;
    const { 0: showChartOptions , 1: setShowChartOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const showChartOptionsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(showChartOptions);
    showChartOptionsRef.current = showChartOptions;
    const { 0: sliderValue , 1: setSliderValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        0,
        1
    ]);
    const { 0: sliderRange , 1: setSliderRange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        0,
        1
    ]);
    const { 0: dateRange , 1: setDateRange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        starteDate: new Date(),
        endDate: new Date()
    });
    const dateRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(dateRange);
    dateRangeRef.current = dateRange;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        var ref13;
        if ((ref13 = props.container) === null || ref13 === void 0 ? void 0 : ref13.id) {
            if (!containerId) {
                setContainerId(props.container.id);
            }
            setContainer(props.container);
            setTimeout(()=>{});
        }
        if (containerId) {
            if (!socketRef.current) {
                setTimeout(async ()=>{
                    var ref;
                    if (!socketLoaded) {
                        await loadSocket();
                    }
                    if ((containerRef === null || containerRef === void 0 ? void 0 : (ref = containerRef.current) === null || ref === void 0 ? void 0 : ref.running) && liveMonitor) {
                        loadData();
                    }
                // startStatsTimer();
                }, 500);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // console.log('Container updated');
        if (containerRef.current) {
            processStaticStats();
        }
    }, [
        container
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Do unmounting stuff here
        return async ()=>{
            if (statsTimerRef === null || statsTimerRef === void 0 ? void 0 : statsTimerRef.current) {
                clearInterval(statsTimerRef.current);
                setStatsTimer(null);
            }
            if (socketRef.current) {
                await closeLiveMonitor();
                setTimeout(()=>{
                    const socketName = 'containerStatsSummary_' + props.container.id;
                    socketRef.current.removeListener(socketName);
                //console.log('container summary socket Unloading', socketName);
                }, 500); // must wait on this one.
            }
        };
    }, []);
    async function loadSocket() {
        if (socketLoadedRef.current) return;
        setSocketLoaded(true);
        const socketName = 'containerStatsSummary_' + props.container.id;
        //console.warn('container summary socket loading', socketName);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_6__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, async (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    // console.log('tick', tickRef.current);
                    // console.log('REceived stats tick', new Date(), results);
                    if (!liveMonitorPauseRef.current) {
                        if (containerRef.current) {
                            if (tickRateRef.current === tickRef.current) {
                                tickRef.current = 0;
                                return await processStats(results.data);
                            }
                            tickRef.current++;
                        // setTick(tickRef.current);
                        }
                    }
                }
            }
        });
        await setSocket(socket);
        return socket;
    }
    function loadData() {
        if (socketRef.current && containerRef.current.running) {
            var ref;
            // console.log('Launching container sats');
            socketRef.current.emit('dockerContainerMonitor', {
                command: 'containerMonitor',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                cid: containerRef.current.id,
                containerName: containerRef.current.name,
                callback: 'containerStatsSummary_' + containerRef.current.id,
                hook: 'containerMonitor'
            });
        }
    }
    function toggleMonitor(e) {
        if (!container.running) {
            (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.confirmDialog)({
                message: 'The container must be running to profile.',
                header: 'Container Not Running',
                icon: 'pi pi-exclamation-triangle',
                className: 'confirm-dialogs',
                acceptLabel: 'Ok',
                rejectLabel: '',
                rejectClassName: 'confirm-button-hidden',
                acceptClassName: 'p-button-danger'
            });
            return;
        }
        if (e) {
            startLiveMonitor();
            if (!showCPUChartRef.current) {
                setShowCPUChart(true);
                setShowMemoryChart(true);
                setShowProcessesChart(false);
                setShowDiskIOChart(false);
                setShowNetworkChart(false);
            }
        } else {
            stopLiveMonitor();
        }
    }
    function startLiveMonitor() {
        setLiveMonitor(true);
        loadData();
    }
    function stopLiveMonitor() {
        setLiveMonitor(false);
        closeLiveMonitor();
    }
    async function closeLiveMonitor() {
        if (socketRef === null || socketRef === void 0 ? void 0 : socketRef.current) {
            var ref;
            // console.log('Closing monitor');
            socketRef.current.emit('dockerContainerMonitorClose', {
                command: 'containerLogsClose',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerMonitorClose_' + containerRef.current.id,
                hook: 'containerMonitorClose'
            });
            return true;
        }
    }
    async function processStaticStats() {
        var ref, ref14;
        const _stats = statsRef.current;
        if (containerRef === null || containerRef === void 0 ? void 0 : (ref = containerRef.current) === null || ref === void 0 ? void 0 : ref.statsSummary) _stats.statsSummary = containerRef === null || containerRef === void 0 ? void 0 : (ref14 = containerRef.current) === null || ref14 === void 0 ? void 0 : ref14.statsSummary;
        // if (!_stats.statsSummary) _stats.statsSummary = {};
        // _stats.statsSummary = containerRef.current.statsSummary;
        const _newStats = await processDiskUsage(_stats);
        await setStats(_newStats);
    }
    async function processStats(stats) {
        const _dateRange = dateRangeRef.current;
        _dateRange.startDate = new Date(stats.startDate);
        _dateRange.endDate = new Date(stats.endDate);
        const _stats = await processDiskUsage(stats);
        await setStats(_stats);
        await setDateRange(_dateRange);
        setSliderRange([
            0,
            stats.chartData.dates.length
        ]);
        setSliderValue([
            0,
            stats.chartData.dates.length
        ]);
        if (stats.sampleIndex > 1) setPollerHasRun(true);
    }
    async function processDiskUsage(inputStats) {
        var ref, ref15, ref16, ref17, ref18, ref19, ref20, ref21;
        if (!containerRef.current) return;
        const _stats = inputStats;
        const diskLabels = [];
        const diskUsage = [];
        const diskTypes = [];
        const diskOther = [];
        if ((ref = containerRef.current) === null || ref === void 0 ? void 0 : (ref15 = ref.image) === null || ref15 === void 0 ? void 0 : ref15.details) {
            diskLabels.push(containerRef.current.image.name);
            diskUsage.push(containerRef.current.image.details.Size);
            diskTypes.push('image');
            diskOther.push(containerRef.current.image);
        }
        let totalSize = ((ref16 = containerRef.current.usageData) === null || ref16 === void 0 ? void 0 : ref16.SizeRw) ? (ref17 = containerRef.current.usageData) === null || ref17 === void 0 ? void 0 : ref17.SizeRw : 0;
        let volumeSizes = 0;
        for (let v of containerRef.current.volumes){
            var ref22;
            totalSize += ((ref22 = v.usageData) === null || ref22 === void 0 ? void 0 : ref22.Size) ? Number(v.usageData.Size) : 0;
            volumeSizes += totalSize;
            diskLabels.push(v.name);
            diskUsage.push(totalSize);
            diskTypes.push('volume');
            diskOther.push(v);
        }
        const tmpFsSize = ((ref18 = containerRef.current) === null || ref18 === void 0 ? void 0 : (ref19 = ref18.usageData) === null || ref19 === void 0 ? void 0 : ref19.SizeRw) ? containerRef.current.usageData.SizeRw : 0;
        const imageSize = ((ref20 = containerRef.current.image) === null || ref20 === void 0 ? void 0 : (ref21 = ref20.details) === null || ref21 === void 0 ? void 0 : ref21.Size) ? containerRef.current.image.details.Size : 0;
        diskLabels.push('tmpfs');
        diskUsage.push(tmpFsSize);
        diskTypes.push('tmpfs');
        diskOther.push({});
        _stats.statsSummary.diskVolumeSize = volumeSizes;
        _stats.statsSummary.diskTmpFSizes = tmpFsSize;
        _stats.statsSummary.diskTotal = volumeSizes + imageSize + tmpFsSize;
        // setDiskImageSize(imageSize);
        _stats.diskLabels = diskLabels;
        _stats.diskUsage = diskUsage;
        _stats.diskTypes = diskTypes;
        _stats.diskOther = diskOther;
        // setStats(_stats);
        return _stats;
    }
    const resetStats = ()=>{
        const statsData = {
            dates: [],
            cpu: [],
            memoryPercent: [],
            processes: [],
            diskRead: [],
            diskWrite: [],
            networkTx: [],
            networkRx: [],
            diskUsed: [],
            diskImage: [],
            diskLabels: [],
            diskUsage: []
        };
        const _stats = statsRef.current;
        _stats.chartData = statsData;
        setStats(_stats);
        updateCharts();
    };
    const toggleChart = (chart)=>{
        switch(chart){
            case 'cpu':
                setShowCPUChart(!showCPUChartRef.current);
                break;
            case 'memory':
                setShowMemoryChart(!showMemoryChartRef.current);
                break;
            case 'disk':
                setShowDiskIOChart(!showDiskIOChartRef.current);
                break;
            case 'network':
                setShowNetworkChart(!showNetworkChartRef.current);
                break;
            case 'processes':
                setShowProcessesChart(!showProcessesChartRef.current);
                break;
            case 'diskspace':
                setShowDiskSpaceChart(!showDiskSpaceChartRef.current);
                break;
            default:
                break;
        }
    };
    const updateCharts = async ()=>{
        // if (cpuChartRef?.current) {
        cpuChartRef.current.updateChart();
        // }
        if (memoryChartRef === null || memoryChartRef === void 0 ? void 0 : memoryChartRef.current) {
            memoryChartRef.current.updateChart();
        }
        if (processesChartRef === null || processesChartRef === void 0 ? void 0 : processesChartRef.current) {
            processesChartRef.current.updateChart();
        }
        if (networkChartRef === null || networkChartRef === void 0 ? void 0 : networkChartRef.current) {
            networkChartRef.current.updateChart();
        }
        return true;
    };
    const changeGridOptions = async (e)=>{
        setGridOption(e.value);
    };
    const changeSliderRange = async (range)=>{
        // console.log(range);
        const _dateRange = {
            ...dateRangeRef.current
        };
        _dateRange.startDate = new Date(statsRef.current.chartData.dates[range[0]]);
        _dateRange.endDate = new Date(statsRef.current.chartData.dates[range[1] - 1]);
        await setDateRange(_dateRange);
        await updateCharts();
        return;
    };
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    const pollerGrid = gridOption === 'Grid' ? 'col-6' : 'col-12';
    // console.log('statsSummary', stats?.chartData);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: container && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "surface-ground mt-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 surface-card col-0 m-0",
                        style: {
                            borderRadius: '10px'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid col-0 m-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleChart('cpu')
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: (showCPUChartRef.current ? 'containerSummaryDivHighlight' : '') + ' card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple cyan',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChartGantt,
                                                    className: "text-6xl text-cyan-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-900 font-bold text-3xl mb-1 line-height-2 text-center",
                                                    children: [
                                                        stats1 === null || stats1 === void 0 ? void 0 : (ref12 = stats1.statsSummary) === null || ref12 === void 0 ? void 0 : ref12.cpuUsage,
                                                        " %"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "CPU"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleChart('memory')
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: (showMemoryChartRef.current ? 'containerSummaryDivHighlight' : '') + ' card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple blue',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMicrochip,
                                                    className: "text-6xl text-blue-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-lg mb-1 line-height-2 text-center",
                                                    children: helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes(stats1 === null || stats1 === void 0 ? void 0 : (ref1 = stats1.statsSummary) === null || ref1 === void 0 ? void 0 : ref1.memoryUsage)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-700 m-0",
                                                    children: [
                                                        "Memory of ",
                                                        (stats1 === null || stats1 === void 0 ? void 0 : (ref2 = stats1.statsSummary) === null || ref2 === void 0 ? void 0 : ref2.memoryLimit) ? helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes(stats1 === null || stats1 === void 0 ? void 0 : (ref3 = stats1.statsSummary) === null || ref3 === void 0 ? void 0 : ref3.memoryLimit) : '0Mb'
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleChart('processes')
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: (showProcessesChartRef.current ? 'containerSummaryDivHighlight' : '') + ' card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple orange',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faList,
                                                    className: "text-6xl text-orange-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-900 font-bold text-2xl mb-1 line-height-2 text-center",
                                                    children: stats1 === null || stats1 === void 0 ? void 0 : (ref4 = stats1.statsSummary) === null || ref4 === void 0 ? void 0 : ref4.processes
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Processes"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleChart('disk')
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: (showDiskIOChartRef.current ? 'containerSummaryDivHighlight' : '') + ' card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple green',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHardDrive,
                                                    className: "text-6xl text-green-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-900 font-bold text-lg mb-1 line-height-2 text-center",
                                                    children: [
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((stats1 === null || stats1 === void 0 ? void 0 : (ref5 = stats1.statsSummary) === null || ref5 === void 0 ? void 0 : ref5.diskRead) || 0),
                                                        " read",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((stats1 === null || stats1 === void 0 ? void 0 : (ref6 = stats1.statsSummary) === null || ref6 === void 0 ? void 0 : ref6.diskWrite) || 0),
                                                        " write"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Disk"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleChart('network')
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: (showNetworkChartRef.current ? 'containerSummaryDivHighlight' : '') + ' card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple yellow',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faNetworkWired,
                                                    className: "text-6xl text-yellow-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-900 font-bold text-lg mb-1 line-height-2 text-center",
                                                    children: [
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes(stats1 === null || stats1 === void 0 ? void 0 : (ref7 = stats1.statsSummary) === null || ref7 === void 0 ? void 0 : ref7.networkRx),
                                                        " RX",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes(stats1 === null || stats1 === void 0 ? void 0 : (ref8 = stats1.statsSummary) === null || ref8 === void 0 ? void 0 : ref8.networkTx),
                                                        " TX"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Network"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>toggleChart('diskspace')
                                            ,
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            className: (showDiskSpaceChartRef.current ? 'containerSummaryDivHighlight' : '') + ' card height-100 shadow-4 ml-2 mt-3 mr-2 px-2 py-2 text-center p-ripple purple',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_20__.Ripple, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHardDrive,
                                                    className: "text-6xl text-purple-600 mb-2",
                                                    swapOpacity: true
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-900 font-bold text-lg mb-1 line-height-2 text-center",
                                                    children: [
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes((stats1 === null || stats1 === void 0 ? void 0 : (ref9 = stats1.statsSummary) === null || ref9 === void 0 ? void 0 : ref9.diskVolumeSize) + (stats1 === null || stats1 === void 0 ? void 0 : (ref10 = stats1.statsSummary) === null || ref10 === void 0 ? void 0 : ref10.diskTmpFSizes)),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        helpers_format_bytes__WEBPACK_IMPORTED_MODULE_2__/* .formatBytes.bytes */ .t.bytes(stats1 === null || stats1 === void 0 ? void 0 : (ref11 = stats1.statsSummary) === null || ref11 === void 0 ? void 0 : ref11.diskTotal)
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-700 m-0",
                                                    children: "Disk Space Used"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            !props.showProfiler && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 mt-1 mb-1"
                            }),
                            props.showProfiler && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-12 mt-0 mb-3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "surface-color col-12 text-lg text-center pb-3 pr-3",
                                        children: container && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                !pollerHasRun && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "col-12 text-center text-lg mb-4",
                                                    children: [
                                                        "As of ",
                                                        dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dateRange === null || dateRange === void 0 ? void 0 : dateRange.endDate).format('MM/DD/YYYY hh:mm:ssA')
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "p-menubar p-component col-12 ml-1 justify-content-center grid",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 pl-3 pr-3",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-12 slider-box pt-1 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-6 text-center ml-auto mr-auto",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "col-12 ml-auto mr-auto grid justify-content-center p-0 mt-2 mb-0",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                className: "mb-3 mt-0",
                                                                                children: "Profiler"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "p-inputgroup ml-auto mr-auto grid justify-content-center text-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "p-inputgroup-addon",
                                                                                        children: "Off"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "p-inputgroup-addon",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitch, {
                                                                                            tooltip: "Toggles Profiler on or Off. Once started, a job will begin on the backend and send data to the charts. Click the boxes above to toggle charts on or off",
                                                                                            className: "ml-auto mr-auto mt-2 mr-4",
                                                                                            checked: liveMonitor,
                                                                                            onChange: (e)=>toggleMonitor(e.value)
                                                                                        })
                                                                                    }),
                                                                                    !liveMonitor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "p-inputgroup-addon",
                                                                                        children: "On"
                                                                                    }),
                                                                                    liveMonitor && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "p-inputgroup-addon",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                                                    tooltip: "Pause or Resume frontend updates. This simply toggles updates on or off to the frontend. The Profiler will remain running until you turn it off or leave the page. ",
                                                                                                    onClick: ()=>{
                                                                                                        setLiveMonitorPause(!liveMonitorPause);
                                                                                                    },
                                                                                                    className: "p-button-text p-button-plain p-2 m-0",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                                                                        icon: liveMonitorPause ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlay : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPause,
                                                                                                        className: liveMonitorPause ? ' text-sm text-blue-600 ' : 'text-sm text-green-600'
                                                                                                    })
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "p-inputgroup-addon",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_19__.Dropdown, {
                                                                                                    //   keyfilter={/^[^<>*!\s]+$/}
                                                                                                    name: "tickRate",
                                                                                                    id: "tickRate",
                                                                                                    tooltip: "This is the update interval to your charts. Data typically comes in every 1 second and with longer pollings you may want to reduce the update rate to the frontend.",
                                                                                                    options: tickRates,
                                                                                                    value: tickRate,
                                                                                                    placeholder: "Select an update rate in ticks",
                                                                                                    onChange: (e)=>{
                                                                                                        setTickRate(e.value);
                                                                                                        setTick(0);
                                                                                                    },
                                                                                                    className: "input-fixes"
                                                                                                }, "tickRate")
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "p-inputgroup-addon",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_10__.ProgressSpinner, {
                                                                                                    style: {
                                                                                                        width: '20px',
                                                                                                        height: '20px'
                                                                                                    },
                                                                                                    strokeWidth: "8",
                                                                                                    fill: "var(--surface-ground)",
                                                                                                    animationDuration: "1.1s"
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            pollerHasRun && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                children: [
                                                                                    ' ',
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-12 text-center pb-0 mb-0",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "text-bold text-small ml-2",
                                                                                            children: [
                                                                                                stats1 === null || stats1 === void 0 ? void 0 : stats1.sampleIndex,
                                                                                                " samples"
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                pollerHasRun && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "col-12 mb-0 mt-0 pb-3 pr-0 mr-0 text-right",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                                onClick: ()=>{
                                                                                    setShowChartOptions(!showChartOptions);
                                                                                },
                                                                                className: "p-button-text p-button-plain p-2 m-0",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExpandArrowsAlt,
                                                                                    className: "text-lg text-blue-600"
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "col-12 m-0 p-0 text-center",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_slider__WEBPACK_IMPORTED_MODULE_9__.Slider, {
                                                                                disabled: liveMonitor && !liveMonitorPauseRef.current ? true : false,
                                                                                value: sliderValue,
                                                                                max: sliderRange[1],
                                                                                range: sliderRange,
                                                                                onSlideEnd: (e)=>changeSliderRange(e.value)
                                                                                ,
                                                                                onChange: (e)=>setSliderValue(e.value)
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "col-12 grid p-0 m-0 mb-2 mt-4",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "col-6 p-0 ml-0 text-left text-sm",
                                                                                    children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dateRange === null || dateRange === void 0 ? void 0 : dateRange.startDate).format('MM/DD/YYYY hh:mm:ssA')
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "col-6 p-0 mr-0 text-right text-sm",
                                                                                    children: dayjs__WEBPACK_IMPORTED_MODULE_5___default()(dateRange === null || dateRange === void 0 ? void 0 : dateRange.endDate).format('MM/DD/YYYY hh:mm:ssA')
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "",
                                                                    children: pollerHasRun && showChartOptions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "col-12 grid",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "col-6 text-left ml-0 mr-auto p-0"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "col-12 grid justify-content-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-3 text-center m-auto",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "p-inputgroup col-12",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "p-inputgroup-addon",
                                                                                                    children: "Animation s:"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, {
                                                                                                    min: 0,
                                                                                                    max: 10000000,
                                                                                                    placeholder: "Animation",
                                                                                                    step: 1,
                                                                                                    useGrouping: false,
                                                                                                    showButtons: true,
                                                                                                    value: chartAnimationTime,
                                                                                                    className: "ml-auto mr-auto form-control f-height-inputs",
                                                                                                    onChange: (e)=>{
                                                                                                        setChartAnimationTime(e.value);
                                                                                                        updateCharts();
                                                                                                    }
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-3 text-center m-auto ",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "p-inputgroup col-12",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "p-inputgroup-addon",
                                                                                                    children: "Tension:"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, {
                                                                                                    min: 0,
                                                                                                    max: 100,
                                                                                                    placeholder: "Line Tension",
                                                                                                    step: 0.001,
                                                                                                    mode: "decimal",
                                                                                                    useGrouping: false,
                                                                                                    showButtons: true,
                                                                                                    value: chartLineTension,
                                                                                                    className: "ml-auto mr-auto form-control f-height-inputs",
                                                                                                    onChange: (e)=>{
                                                                                                        setChartLineTension(e.value);
                                                                                                        updateCharts();
                                                                                                    }
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-6",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "col-12 grid",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-6",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                        className: "p-inputgroup mt-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "p-inputgroup-addon",
                                                                                                                children: "Reset:"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_8__.Button, {
                                                                                                                label: "Reset",
                                                                                                                onClick: ()=>resetStats()
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                    className: "col-6 text-right ml-auto mr-0 p-0",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_selectbutton__WEBPACK_IMPORTED_MODULE_11__.SelectButton, {
                                                                                                        className: "mt-4",
                                                                                                        value: gridOption,
                                                                                                        options: gridOptions,
                                                                                                        onChange: (e)=>changeGridOptions(e)
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
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
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "col-12 m-0 p-0 grid",
                                                    children: [
                                                        showCPUChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: pollerGrid,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_profiler_container_profiler_cpu_line_chart__WEBPACK_IMPORTED_MODULE_13__/* .ContainerProfilerCPULineChart */ .v, {
                                                                ref: cpuChartRef,
                                                                className: "m-4",
                                                                statsCPU: stats1.chartData.cpu,
                                                                statsDates: stats1.chartData.dates,
                                                                startDate: dateRange.startDate,
                                                                endDate: dateRange.endDate,
                                                                animationTime: chartAnimationTime,
                                                                lineTension: chartLineTension,
                                                                chartColor: chartColors.cpu
                                                            })
                                                        }),
                                                        showMemoryChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: pollerGrid,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_profiler_container_profiler_memory_line_chart__WEBPACK_IMPORTED_MODULE_14__/* .ContainerProfilerMemoryLineChart */ .i, {
                                                                ref: memoryChartRef,
                                                                className: "m-4",
                                                                statsMemory: stats1.chartData.memoryPercent,
                                                                statsDates: stats1.chartData.dates,
                                                                startDate: dateRange.startDate,
                                                                endDate: dateRange.endDate,
                                                                animationTime: chartAnimationTime,
                                                                lineTension: chartLineTension,
                                                                chartColor: chartColors.memory
                                                            })
                                                        }),
                                                        showDiskIOChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: pollerGrid,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_profiler_container_profiler_disk_io_line_chart__WEBPACK_IMPORTED_MODULE_15__/* .ContainerProfilerDiskIOLineChart */ .m, {
                                                                className: "m-4",
                                                                statsDiskInput: stats1.chartData.diskWrite,
                                                                statsDiskOutput: stats1.chartData.diskRead,
                                                                statsDates: stats1.chartData.dates,
                                                                startDate: dateRange.startDate,
                                                                endDate: dateRange.endDate,
                                                                animationTime: chartAnimationTime,
                                                                lineTension: chartLineTension,
                                                                chartColorInput: chartColors.diskInput,
                                                                chartColorOutput: chartColors.diskOutput
                                                            })
                                                        }),
                                                        showNetworkChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: pollerGrid,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_profiler_container_profiler_network_line_chart__WEBPACK_IMPORTED_MODULE_17__/* .ContainerProfilerNetworkLineChart */ .O, {
                                                                ref: networkChartRef,
                                                                className: "m-4",
                                                                statsNetworkTx: stats1.chartData.networkTx,
                                                                statsNetworkRx: stats1.chartData.networkRx,
                                                                statsDates: stats1.chartData.dates,
                                                                startDate: dateRange.startDate,
                                                                endDate: dateRange.endDate,
                                                                animationTime: chartAnimationTime,
                                                                lineTension: chartLineTension,
                                                                chartColorTx: chartColors.networkTx,
                                                                chartColorRx: chartColors.networkRx
                                                            })
                                                        }),
                                                        showProcessesChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: pollerGrid,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_profiler_container_profiler_processes_bar_chart__WEBPACK_IMPORTED_MODULE_16__/* .ContainerProfilerProcessesBarChart */ .z, {
                                                                className: "m-4",
                                                                ref: processesChartRef,
                                                                statsProcesses: stats1.chartData.processes,
                                                                statsDates: stats1.chartData.dates,
                                                                startDate: dateRange.startDate,
                                                                endDate: dateRange.endDate,
                                                                animationTime: chartAnimationTime,
                                                                lineTension: chartLineTension,
                                                                chartColor: chartColors.processes
                                                            })
                                                        }),
                                                        showDiskSpaceChart && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: pollerGrid,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_profiler_container_profiler_disk_pie_chart__WEBPACK_IMPORTED_MODULE_18__/* .ContainerProfilerDiskPieChart */ .t, {
                                                                className: "m-4",
                                                                statsDiskLabels: stats1.diskLabels,
                                                                statsDiskUsage: stats1.diskUsage,
                                                                statsDiskOther: stats1.diskOther,
                                                                statsDiskType: stats1.diskTypes,
                                                                startDate: dateRange.startDate,
                                                                endDate: dateRange.endDate,
                                                                animationTime: chartAnimationTime,
                                                                lineTension: chartLineTension
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ContainerVolumes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7077);
/* harmony import */ var primereact_dataview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var helpers_format_bytes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7191);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_10__);












function ContainerVolumes(props) {
    var ref;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { 0: container , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: layout1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('list');
    // const containerRef = useRef(container);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setContainer(props.container);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.container
    ]);
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    //   const onSortChange = (event) => {
    //     const value = event.value;
    //     if (value.indexOf('!') === 0) {
    //       setSortOrder(-1);
    //       setSortField(value.substring(1, value.length));
    //       setSortKey(value);
    //     } else {
    //       setSortOrder(1);
    //       setSortField(value);
    //       setSortKey(value);
    //     }
    //   };
    // console.log('container', container.mounts);
    if (!container) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "Container is missing."
    }));
    if ((container === null || container === void 0 ? void 0 : (ref = container.volumes) === null || ref === void 0 ? void 0 : ref.length) < 1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center",
        children: "No volumes or mounts for this container. Using tmpfs."
    }));
    const renderListItem = (data)=>{
        // console.log('Data', data);
        const fileSize = data.fileSize > 0 ? helpers_format_bytes__WEBPACK_IMPORTED_MODULE_7__/* .formatBytes.bytes */ .t.bytes(data.fileSize) : '0 Bytes';
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12 pt-2 pl-3 flex datatable-hover",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-10 pl-4 mr-auto grid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-0 pt-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                title: "View Drive",
                                href: "/volumes/[id]",
                                as: `/volumes/${data.id}`,
                                passHref: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    title: "View",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHardDrive,
                                            pull: "left",
                                            className: "fa-2x lightblue-color mt-2",
                                            swapOpacity: true
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "p-0 m-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: data.RW ? 'RW' : 'RO'
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "lightblue-color mb-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                        href: "/volumes/[id]",
                                        as: `/volumes/${data.id}`,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            title: "View",
                                            className: "lightblue-color",
                                            children: data.name
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "p-0 m-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: fileSize
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "m-0 p-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                        children: data.mountpoint
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-2 ml-auto pr-4 text-right pt-3",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        icon: "fa fa-eye",
                        className: "p-button-secondary mr-1 mt-3 volume-view-button",
                        onClick: ()=>router.push('/volumes/' + data.id)
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, {})
                    })
                })
            ]
        }));
    };
    const itemTemplate = (item, layout)=>{
        if (!item) {
            return;
        }
        if (layout === 'list') return renderListItem(item);
    // else if (layout === 'grid') return renderGridItem();
    };
    let headerTitle = '' + container.volumes.length;
    headerTitle += container.volumes.length > 1 ? ' Volumes' : ' Volume';
    let totalSize = Number(container.fileSizeRoot);
    for (let v of container.volumes){
        totalSize += Number(v.fileSize);
    }
    const containerSize = helpers_format_bytes__WEBPACK_IMPORTED_MODULE_7__/* .formatBytes.bytes */ .t.bytes(totalSize);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: container.volumes.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_panel__WEBPACK_IMPORTED_MODULE_10__.Panel, {
            header: headerTitle,
            collapsed: 0,
            toggleable: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 m-0 p-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card p-0 m-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dataview__WEBPACK_IMPORTED_MODULE_2__.DataView, {
                            value: container.volumes,
                            layout: layout1,
                            itemTemplate: itemTemplate,
                            paginator: false,
                            rows: 100
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 m-0 p-0 text-right pr-4 pt-2",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                        children: [
                            "Container Size: ",
                            containerSize
                        ]
                    })
                })
            ]
        })
    }));
}


/***/ }),

/***/ 4876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContainerView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_containers_container_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2396);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_JSONDataView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6345);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1515);
/* harmony import */ var components_containers_container_logs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(929);
/* harmony import */ var components_containers_container_volumes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2939);
/* harmony import */ var components_containers_container_mounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(716);
/* harmony import */ var components_containers_container_ports__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9610);
/* harmony import */ var components_containers_container_summary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9777);
/* harmony import */ var components_containers_container_exec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5982);
/* harmony import */ var components_ContainerStatusBadge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6374);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1664);
/* harmony import */ var components_containers_container_rename__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9895);
/* harmony import */ var components_containers_container_networks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8993);
/* harmony import */ var components_containers_container_resources__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4239);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var store_actions_site_actions__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(5945);
/* harmony import */ var components_containers_container_network_connect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7699);
/* harmony import */ var components_containers_container_network_disconnect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9526);
/* harmony import */ var components_containers_container_processes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(881);
/* harmony import */ var components_containers_container_changed_files__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6881);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var pages_activity__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(7805);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var pages_images_id___WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(6905);
/* harmony import */ var components_containers_container_env_vars__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(9070);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_containers_container_stats__WEBPACK_IMPORTED_MODULE_4__, _services_socket_service__WEBPACK_IMPORTED_MODULE_9__, components_containers_container_logs__WEBPACK_IMPORTED_MODULE_10__, components_containers_container_mounts__WEBPACK_IMPORTED_MODULE_12__, components_containers_container_summary__WEBPACK_IMPORTED_MODULE_14__, components_containers_container_exec__WEBPACK_IMPORTED_MODULE_15__, components_containers_container_rename__WEBPACK_IMPORTED_MODULE_18__, components_containers_container_resources__WEBPACK_IMPORTED_MODULE_20__, components_containers_container_network_connect__WEBPACK_IMPORTED_MODULE_22__, components_containers_container_network_disconnect__WEBPACK_IMPORTED_MODULE_23__, components_containers_container_processes__WEBPACK_IMPORTED_MODULE_24__, components_containers_container_changed_files__WEBPACK_IMPORTED_MODULE_25__, pages_images_id___WEBPACK_IMPORTED_MODULE_29__]);
([components_containers_container_stats__WEBPACK_IMPORTED_MODULE_4__, _services_socket_service__WEBPACK_IMPORTED_MODULE_9__, components_containers_container_logs__WEBPACK_IMPORTED_MODULE_10__, components_containers_container_mounts__WEBPACK_IMPORTED_MODULE_12__, components_containers_container_summary__WEBPACK_IMPORTED_MODULE_14__, components_containers_container_exec__WEBPACK_IMPORTED_MODULE_15__, components_containers_container_rename__WEBPACK_IMPORTED_MODULE_18__, components_containers_container_resources__WEBPACK_IMPORTED_MODULE_20__, components_containers_container_network_connect__WEBPACK_IMPORTED_MODULE_22__, components_containers_container_network_disconnect__WEBPACK_IMPORTED_MODULE_23__, components_containers_container_processes__WEBPACK_IMPORTED_MODULE_24__, components_containers_container_changed_files__WEBPACK_IMPORTED_MODULE_25__, pages_images_id___WEBPACK_IMPORTED_MODULE_29__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
































function ContainerView() {
    var ref3, ref1, ref2;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const containers = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.containers;
    });
    const siteSettings = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.site;
    });
    // const site = useSelector((state) => {
    //   return state.site;
    // });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const defaultContainerView = {
        showSummary: true,
        showStats: false,
        showPorts: true,
        showProcesses: true,
        showVolumes: false,
        showMounts: false,
        showNetworks: false,
        showNetworkConnect: false,
        showFiles: false,
        showProfiler: true,
        showEditName: false,
        showEditResources: false,
        showImage: false,
        showEnvVars: true
    };
    const { 0: containerView , 1: setContainerView  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultContainerView);
    const containerViewRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(containerView);
    containerViewRef.current = containerView;
    const { 0: containerId , 1: setContainerId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const containerIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(containerId);
    containerIdRef.current = containerId;
    const { 0: container1 , 1: setContainer  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(container1);
    containerRef.current = container1;
    const showSummaryPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showNetworksPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showVolumesPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showMountsPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showPortsPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showProcessesPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showFilesPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showLogsPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showActivityLogsPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showStatsPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showEditNamePanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showEditResourcesPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showExecPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showDetailsPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showEnvVarsPanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const showImagePanel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    // const [error, setError] = useState();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: launcherSocket1 , 1: setLauncherSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const launcherSocketRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(launcherSocket1);
    launcherSocketRef.current = launcherSocket1;
    const { 0: launcherSocketLoaded , 1: setLauncherSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const usePrevious = (value)=>{
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
            ref.current = value;
        });
        return ref.current;
    };
    const previousContainer = usePrevious(container1);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        loadContainerView();
        if (router.query.id) {
            // console.log('Set Container');
            setContainerId(router.query.id);
            if (!socketLoaded) {
                setTimeout(async ()=>{
                    await loadSocket();
                }, 500);
            }
            if (!launcherSocketLoaded) {
                setTimeout(async ()=>{
                    await loadLauncherSocket();
                }, 500);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getContainer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        containers,
        router.query.id
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_31__/* .selectContainerId */ .el)({
                    data: 0
                }));
                const socketName = 'dockerResuls_' + containerIdRef.current;
                // console.log('---> container main socket Unloading', socketName);
                socketRef.current.removeListener(socketName);
            }
            if (launcherSocketRef.current) {
                const socketName = 'dockerLauncher_' + containerIdRef.current;
                // console.log('---> container main socket Unloading', socketName);
                launcherSocketRef.current.removeListener(socketName);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResuls_' + containerIdRef.current;
        // console.log('---> container main socket loading ' + socketName);
        const socket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    switch(results.hook){
                        case 'removeContainer':
                            // Show dialog
                            setContainer(null);
                            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_31__/* .selectContainerId */ .el)({
                                data: 0
                            }));
                            break;
                        default:
                            if (results.data.id) {
                                setContainer(results.data);
                                dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_31__/* .selectContainerId */ .el)({
                                    data: results.data.id
                                }));
                                buildMenuItems(results.data);
                            }
                            break;
                    }
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadLauncherSocket() {
        if (launcherSocketLoaded) return;
        setLauncherSocketLoaded(true);
        const socketName = 'dockerLauncher_' + containerIdRef.current;
        // console.log('---> container launcher socket loading ' + socketName);
        const launcherSocket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getLauncherSocket */ .L.getLauncherSocket();
        launcherSocket.on(socketName, (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    switch(results.hook){
                        default:
                            if (results.data) {
                            // console.log('results.data', results.data);
                            }
                            break;
                    }
                }
            }
        });
        setLauncherSocket(launcherSocket);
        return launcherSocket;
    }
    async function getContainer() {
        if (router.query.id) {
            if (containers) {
                Object.keys(containers).forEach((key)=>{
                    const host = containers[key];
                    if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEqual(previousContainer, host.containers[router.query.id])) {
                        // console.log('Containers loading');
                        if (router.query.id in host.containers) {
                            const c = host.containers[router.query.id];
                            setContainer(c);
                            dispatch((0,store_actions_site_actions__WEBPACK_IMPORTED_MODULE_31__/* .selectContainerId */ .el)({
                                data: c.id
                            }));
                            if (isLoadingRef.current) {
                                setIsLoading(true);
                            }
                            buildMenuItems(c);
                            if (isLoadingRef.current) {
                                setIsLoading(false);
                            }
                        }
                    }
                });
            }
        }
    }
    const loadContainerView = async ()=>{
        var ref;
        if (siteSettings === null || siteSettings === void 0 ? void 0 : (ref = siteSettings.userSettings) === null || ref === void 0 ? void 0 : ref.containerViews) {
            const defaultView = siteSettings.userSettings.containerViews.filter((view)=>{
                if (view.default === true) return view;
            });
            if (defaultView) {
                const v = {
                    ...defaultView[0].settings
                };
                await setContainerView(v);
            } else {
                setContainerView(defaultContainerView);
            }
        }
    };
    async function buildMenuItems(c) {
        var ref;
        const menuItems = [];
        let container;
        let className = '';
        if (c === null || c === void 0 ? void 0 : c.current) {
            container = c.current;
        } else {
            container = c;
        }
        if (!c) {
            return;
        }
        // className = !containerView?.showEditName ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Edit',
            icon: 'fa fa-fw fa-edit',
            items: [
                {
                    label: 'Rename',
                    icon: 'fa fa-fw fa-file-signature',
                    tooltip: 'Rename Container.',
                    className: className,
                    command: ()=>{
                        toggleRename();
                    // confirm('openLogs', 'Open Terminal?', e);
                    }
                },
                {
                    label: 'Resources',
                    tooltip: 'Edit Resources',
                    icon: 'fa fa-fw fa-memory',
                    command: ()=>{
                        toggleEditResources();
                    }
                }, 
            ]
        });
        // className = !containerView?.showNetworks ? '' : 'p-button-selected-highlight';
        menuItems.push({
            label: 'Networks',
            className: className,
            icon: 'fa fa-fw fa-network-wired',
            command: ()=>{
                toggleNetworks();
                toggleNetworkConnect();
            }
        });
        // className = !containerView?.showFiles ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Image',
            icon: 'fa fa-fw fa-file-image',
            className: className,
            items: [
                {
                    label: 'View Image',
                    tooltip: 'View Changed Files. Warning - This may take a long time for containers with large numbers of changes',
                    icon: 'fa fa-fw fa-file-contract',
                    className: className,
                    command: ()=>{
                        toggleImage();
                    }
                },
                {
                    label: 'Environment Vars',
                    // tooltip: 'View Changed Files. Warning - This may take a long time for containers with large numbers of changes',
                    icon: 'fa fa-fw fa-list',
                    className: className,
                    command: ()=>{
                        toggleEnvVars();
                    }
                }, 
            ]
        });
        // className = !containerView?.showFiles ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Files',
            icon: 'fa fa-fw fa-file-contract',
            className: className,
            items: [
                {
                    label: 'Changed Files',
                    tooltip: 'View Changed Files. Warning - This may take a long time for containers with large numbers of changes',
                    icon: 'fa fa-fw fa-file-contract',
                    className: className,
                    command: ()=>{
                        toggleFiles();
                    }
                },
                {
                    label: 'Volumes & Mounts',
                    // tooltip: 'View Changed Files. Warning - This may take a long time for containers with large numbers of changes',
                    icon: 'fa fa-fw fa-file-contract',
                    className: className,
                    command: ()=>{
                        toggleVolumes();
                    }
                }, 
            ]
        });
        // className = !containerView?.showLogs ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Logs',
            icon: 'fa fa-fw fa-file-alt',
            items: [
                {
                    label: 'Terminal Logs',
                    icon: 'fa fa-fw fa-file',
                    tooltip: 'Open stdout and stderr logs in a terminal window.',
                    command: ()=>{
                        openLogs();
                    // confirm('openLogs', 'Open Terminal?', e);
                    }
                },
                {
                    label: 'Web Logs',
                    tooltip: 'View logs in the browser via stream.',
                    icon: 'fa fa-fw fa-file',
                    className: className,
                    command: ()=>{
                        containerLogs();
                    }
                },
                {
                    label: 'Activity Logs',
                    tooltip: 'View logs received by Dockermon.',
                    icon: 'fa fa-fw fa-file',
                    className: className,
                    command: ()=>{
                        toggleActivityLogs();
                    }
                }, 
            ]
        });
        // className = !containerView?.showStats ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Stats',
            icon: 'fa fa-fw fa-chart-line',
            className: className,
            items: [
                {
                    label: 'Database Stats',
                    tooltip: 'View stats collected by the backend cronjobs',
                    icon: 'fa fa-fw fa-chart-line',
                    className: className,
                    command: ()=>{
                        toggleStats();
                    }
                },
                {
                    // className = !containerView?.showProfiler ? '' : 'p-button-raised p-button p-button-info p-0';
                    label: 'Profiler',
                    tooltip: "Turn on Live Profiling and capture 1 second snapshots of the container's performance metrics",
                    icon: 'fa fa-fw fa-chart-bar',
                    className: className,
                    command: ()=>{
                        toggleProfiler();
                    }
                }, 
            ]
        });
        if (container.running) {
            // className = !containerView?.showExec ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
            menuItems.push({
                label: 'Exec',
                icon: 'fa fa-fw fa-terminal',
                className: className,
                command: ()=>{
                    toggleExec();
                }
            });
        }
        // className = !containerView?.showProcesses ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Processes',
            icon: 'fa fa-fw fa-list',
            className: className,
            command: ()=>{
                toggleProcesses();
            }
        });
        // className = !containerView?.showDetails ? '' : 'p-button-outlined p-button-raised p-button p-button-success p-0';
        menuItems.push({
            label: 'Inspect',
            icon: 'fa fa-fw fa-eye',
            className: className,
            command: ()=>{
                inspectContainer();
                toggleInspect();
            }
        });
        if (container.running) {
            menuItems.push({
                label: 'Terminal',
                icon: 'fa fa-fw fa-tv',
                className: 'p-button-raised p-button p-button-info p-0',
                command: ()=>{
                    // confirm('openTerminal', 'Open Terminal?', e);
                    openTerminal();
                }
            });
        }
        if (!(containerViewRef === null || containerViewRef === void 0 ? void 0 : (ref = containerViewRef.current) === null || ref === void 0 ? void 0 : ref.showSummary)) {
            menuItems.push({
                label: 'Summary',
                icon: 'fa fa-fw fa-eye',
                className: className,
                command: ()=>{
                    toggleSummary();
                }
            });
        }
        const controlItems = {
            label: 'Control',
            icon: 'fa fa-fw fa-power-off',
            items: []
        };
        if (container.running) {
            if (!container.paused) {
                controlItems.items.push({
                    label: 'Pause',
                    icon: 'fa fa-fw fa-pause',
                    command: (e)=>{
                        confirm('pauseContainer', 'Pause Container?', e);
                    }
                });
            } else {
                controlItems.items.push({
                    label: 'Resume',
                    icon: 'fa fa-fw fa-play',
                    key: 'foo',
                    className: 'p-button-raised p-button p-button-warning p-0',
                    command: (e)=>{
                        confirm('resumeContainer', 'Resume Container?', e);
                    }
                });
            }
            controlItems.items.push({
                label: 'Stop',
                icon: 'fa fa-fw fa-stop',
                command: (e)=>{
                    confirm('stopContainer', 'Stop Container?', e);
                }
            });
            controlItems.items.push({
                label: 'Restart',
                icon: 'fa fa-fw fa-redo',
                command: (e)=>{
                    confirm('restartContainer', 'Restart Container?', e);
                }
            });
            controlItems.items.push({
                label: 'Kill',
                icon: 'fa fa-fw fa-skull',
                command: (e)=>{
                    confirm('killContainer', 'Kill Container?', e);
                }
            });
        } else {
            controlItems.items.push({
                label: 'Start',
                icon: 'fa fa-solid fa-play',
                command: (e)=>{
                    confirm('startContainer', 'Start Container?', e);
                }
            });
            controlItems.items.push({
                label: 'Remove',
                icon: 'fa fa-fw fa-power-off',
                command: (e)=>{
                    confirm('removeContainer', 'Remove Container?', e);
                }
            });
        }
        menuItems.push(controlItems);
        setMenuItems(menuItems);
    }
    const updateContainerView = async (key, value)=>{
        const cur = {
            ...containerViewRef.current
        };
        cur[key] = value;
        await setContainerView(cur);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        }, 300);
        return true;
    };
    const toggleSummary = ()=>{
        scrollToRef(showSummaryPanel);
        updateContainerView('showSummary', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleProcesses = ()=>{
        scrollToRef(showProcessesPanel);
        updateContainerView('showProcesses', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleEnvVars = ()=>{
        scrollToRef(showEnvVarsPanel);
        updateContainerView('showEnvVars', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleImage = ()=>{
        scrollToRef(showImagePanel);
        updateContainerView('showImage', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleStats = ()=>{
        scrollToRef(showStatsPanel);
        updateContainerView('showStats', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleFiles = ()=>{
        scrollToRef(showFilesPanel);
        updateContainerView('showFiles', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleVolumes = ()=>{
        scrollToRef(showVolumesPanel);
        updateContainerView('showVolumes', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleInspect = ()=>{
        scrollToRef(showDetailsPanel);
        updateContainerView('showDetails', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleRename = ()=>{
        scrollToRef(showEditNamePanel);
        updateContainerView('showEditName', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleProfiler = ()=>{
        updateContainerView('showProfiler', true);
        setTimeout(()=>{
            buildMenuItems('containerRef'.current);
        });
    };
    const toggleNetworks = ()=>{
        scrollToRef(showNetworksPanel);
        updateContainerView('showNetworks', true);
        setTimeout(()=>{
            updateContainerView('showNetworkConnect', true);
        }, 400);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const scrollToRef = (ref)=>{
        // console.log(ref);
        if (ref.current) {
            // const headerOffset = -510;
            // const offsetPosition = ref.current.offsetTop - headerOffset;
            const element = document.getElementById(ref.current.id);
            const headerOffset = 45;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        // // ref.current.scrollIntoView();
        // ref.current.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        //   scrollTop: -100
        // });
        }
    };
    const toggleNetworkConnect = async ()=>{
        scrollToRef(showNetworksPanel);
        await updateContainerView('showNetworks', true);
        setTimeout(()=>{
            updateContainerView('showNetworkConnect', true);
        }, 300);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleEditResources = ()=>{
        scrollToRef(showEditResourcesPanel);
        updateContainerView('showEditResources', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleExec = ()=>{
        scrollToRef(showExecPanel);
        updateContainerView('showExec', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const toggleActivityLogs = ()=>{
        scrollToRef(showActivityLogsPanel);
        updateContainerView('showActivityLogs', true);
        setTimeout(()=>{
            buildMenuItems(containerRef.current);
        });
    };
    const confirm = (action, title, target = null)=>{
        var ref;
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_28__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            target: ((ref = target.originalEvent) === null || ref === void 0 ? void 0 : ref.currentTarget) ? target.originalEvent.currentTarget : null,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>{
                switch(action){
                    default:
                        break;
                    case 'pauseContainer':
                        pauseContainer();
                        break;
                    case 'openTerminal':
                        openTerminal();
                        break;
                    case 'execContainer':
                        execContainer();
                        break;
                    case 'resumeContainer':
                        resumeContainer();
                        break;
                    case 'startContainer':
                        startContainer();
                        break;
                    case 'stopContainer':
                        stopContainer();
                        break;
                    case 'restartContainer':
                        restartContainer();
                        break;
                    case 'killContainer':
                        killContainer();
                        break;
                    case 'removeContainer':
                        removeContainer();
                        break;
                }
            }
        });
    };
    function openTerminal() {
        var ref;
        launcherSocketRef.current.emit('openTerminal', {
            command: 'openTerminal',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsTerminal_' + containerRef.current.id,
            hook: 'openTerminal'
        });
    }
    function execContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'containerExec',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsExec_' + containerRef.current.id,
            hook: 'containerExec'
        });
    }
    function stopContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'stop',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'stopContainer'
        });
    }
    function startContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'start',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'startContainer'
        });
    }
    const restartContainer = ()=>{
        var ref;
        socketRef.current.emit('docker', {
            command: 'restart',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'restartContainer'
        });
    };
    function pauseContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'pause',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'pauseContainer'
        });
    }
    function resumeContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'unpause',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'resumeContainer'
        });
    }
    function inspectContainer() {
        updateContainerView('showDetails', true);
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            var ref;
            const obj = {
                command: 'inspect',
                containerId: containerRef.current.containerId,
                containerLongId: containerRef.current.containerLongId,
                hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResuls_' + containerRef.current.id,
                hook: 'inspectContainer'
            };
            socketRef.current.emit('docker', obj);
        }
    }
    function killContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'kill',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'killContainer'
        });
    }
    function removeContainer() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'remove',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_' + containerRef.current.id,
            hook: 'removeContainer'
        });
    }
    function containerLogs() {
        updateContainerView('showLogs', !(containerView === null || containerView === void 0 ? void 0 : containerView.showLogs));
    }
    // function containerStats() {
    //   updateContainerView('showStats', !containerView?.showStats);
    // }
    function openLogs() {
        var ref;
        launcherSocketRef.current.emit('tailLogs', {
            command: 'tailLogs',
            containerId: containerRef.current.containerId,
            containerLongId: containerRef.current.containerLongId,
            hostId: (ref = containerRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsTerminalLogs_' + containerRef.current.id,
            hook: 'tailLogs'
        });
    }
    const template = (options)=>{
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} pl-1`;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: className,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: titleClassName,
                            children: options.props.header
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-2 text-right",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: options.togglerClassName + ' mr-4',
                                onClick: options.onTogglerClick,
                                tooltip: "Collapse this panel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: toggleIcon
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_26__.Ripple, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: options.togglerClassName,
                                onClick: ()=>{
                                    closePanel(options.props.closeAction);
                                // console.log('foooo', options);
                                },
                                tooltip: "Close this panel",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "pi pi-times"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_26__.Ripple, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        }));
    };
    const closePanel = (panel)=>{
        switch(panel){
            case 'processes':
                updateContainerView('showProcesses', false);
                break;
            case 'files':
                updateContainerView('showFiles', false);
                break;
            case 'exec':
                updateContainerView('showExec', false);
                break;
            case 'name':
                updateContainerView('showEditName', false);
                break;
            case 'details':
                updateContainerView('showDetails', false);
                break;
            case 'logs':
                updateContainerView('showLogs', false);
                break;
            case 'activityLogs':
                updateContainerView('showActivityLogs', false);
                break;
            case 'resources':
                updateContainerView('showEditResources', false);
                break;
            case 'networkConnect':
                updateContainerView('showNetworkConnect', false);
                break;
            case 'networks':
                updateContainerView('showNetworks', false);
                break;
            case 'profiler':
                updateContainerView('showProfiler', false);
                break;
            case 'stats':
                updateContainerView('showStats', false);
                break;
            case 'summary':
                updateContainerView('showSummary', false);
                break;
            case 'volumes':
                updateContainerView('showVolumes', false);
                break;
            case 'mounts':
                updateContainerView('showMounts', false);
                break;
            case 'ports':
                updateContainerView('showPorts', false);
                break;
            case 'rename':
                updateContainerView('showEditName', false);
                break;
            case 'image':
                updateContainerView('showImage', false);
                break;
            case 'envVars':
                updateContainerView('showEnvVars', false);
                break;
        }
    };
    // const containerImage = container?.details?.Config ? container.details.Config.Image : '';
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    // if (error) return <div>Failed to load Container: {error}</div>;
    if (!router.query.id) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    if (!container1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "Container could not be found."
    }));
    const containerImage = (container1 === null || container1 === void 0 ? void 0 : (ref3 = container1.details) === null || ref3 === void 0 ? void 0 : ref3.Config) ? container1.details.Config.Image : '';
    const imageId = ((ref1 = container1.image) === null || ref1 === void 0 ? void 0 : ref1.id) ? (ref2 = container1.image) === null || ref2 === void 0 ? void 0 : ref2.id : 'index';
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 p-0 ml-1 mr-1 grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 mt-4 text-900 font-bold text-4xl line-height-1 mb-1 text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-12 text-center grid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "ml-auto mr-auto col-0 text-left grid mb-0 pb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ContainerStatusBadge__WEBPACK_IMPORTED_MODULE_16__/* .ContainerStatusBadge */ .Q, {
                                            className: "p-2 mr-2 mb-1 mr-3",
                                            status: container1.state
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-0 p-0",
                                            children: [
                                                container1.project,
                                                " / ",
                                                container1.name
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 mb-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-600 line-height-3 text-lg m-0 mb-0 text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                            href: "/images/[id]",
                                            as: `/images/${imageId}`,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "lightblue-color",
                                                children: containerImage
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 mb-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-600 line-height-3 text-lg m-0 mb-0 text-center",
                                        children: [
                                            "Status: ",
                                            container1.status
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 p-0 m-0 mb-2 menubar-background",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_5__.Menubar, {
                            className: "col-12 mb-2 ml-0 mr-0 justify-content-center menubar-menu",
                            model: menuItems1
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showEditNamePanel,
                        id: "showEditNamePanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showEditName) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Rename Container",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "rename",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_rename__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                container: container1,
                                containerId: container1.id
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showEditResourcesPanel,
                        id: "showEditResourcesPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showEditResources) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Update Container",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "resources",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_resources__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                container: container1,
                                containerId: container1.id
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showExecPanel,
                        id: "showExecPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showExec) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Run a Command",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "exec",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_exec__WEBPACK_IMPORTED_MODULE_15__/* .ContainerExec */ .e, {
                                container: container1,
                                containerId: container1.id
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showActivityLogsPanel,
                        id: "showActivityLogsPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showActivityLogs) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Activity Logs",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "activityLogs",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_activity__WEBPACK_IMPORTED_MODULE_27__["default"], {
                                contentId: container1.id,
                                contentTypeLogs: "containers"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showLogsPanel,
                        id: "showLogsPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showLogs) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Container Logs",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "logs",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_logs__WEBPACK_IMPORTED_MODULE_10__/* .ContainerLogs */ .A, {
                                contentId: container1.id
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "showSummaryPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showSummary) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            ref: showSummaryPanel,
                            header: "Summary Vitals",
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "summary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_summary__WEBPACK_IMPORTED_MODULE_14__/* .ContainerSummary */ .e, {
                                showProfiler: containerView === null || containerView === void 0 ? void 0 : containerView.showProfiler,
                                container: container1
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showDetailsPanel,
                        id: "showDetailsPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showDetails) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Container Details",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "details",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                data: container1,
                                hideCode: true,
                                header: "Container Details"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showStatsPanel,
                        id: "showStatsPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showStats) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Container Stats",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "stats",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_stats__WEBPACK_IMPORTED_MODULE_4__/* .ContainerStats */ .t, {
                                containerId: container1.id
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showNetworksPanel,
                        id: "showNetworksPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showNetworks) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                (containerView === null || containerView === void 0 ? void 0 : containerView.showNetworkConnect) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                                    className: "sitePanel",
                                    header: "Container Network Management",
                                    headerTemplate: template,
                                    toggleable: true,
                                    closeAction: "networkConnect",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-12 grid",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_network_connect__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                                    container: container1,
                                                    containerId: container1.id
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_network_disconnect__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                    container: container1,
                                                    containerId: container1.id
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 p-0 m-0",
                                    id: "showNetworksDiagram",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                                        className: "sitePanel",
                                        header: "Container Networks",
                                        hideHeader: true,
                                        headerTemplate: template,
                                        toggleable: true,
                                        closeAction: "networks",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_networks__WEBPACK_IMPORTED_MODULE_19__/* .ContainerNetworks */ .f, {
                                            container: container1
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showProcessesPanel,
                        id: "showProcessesPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showProcesses) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Running Processes",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "processes",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 grid p-0 m-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_processes__WEBPACK_IMPORTED_MODULE_24__/* .ContainerProcesses */ .u, {
                                    container: container1
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showFilesPanel,
                        id: "showFilesPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showFiles) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Changed Files",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "files",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 grid p-0 m-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_changed_files__WEBPACK_IMPORTED_MODULE_25__/* .ContainerFiles */ .d, {
                                    container: container1
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showPortsPanel,
                        id: "showPortsPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showPorts) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Network Ports",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "ports",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_ports__WEBPACK_IMPORTED_MODULE_13__/* .ContainerPorts */ .X, {
                                container: container1,
                                headerTemplate: template,
                                toggleable: true,
                                closeAction: "ports"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showVolumesPanel,
                        id: "showVolumesPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showVolumes) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Volumes",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "volumes",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_volumes__WEBPACK_IMPORTED_MODULE_11__/* .ContainerVolumes */ .M, {
                                container: container1,
                                headerTemplate: template,
                                toggleable: true,
                                closeAction: "volumes"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showMountsPanel,
                        id: "showMountsPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showMounts) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Mounts",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "mounts",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_mounts__WEBPACK_IMPORTED_MODULE_12__/* .ContainerMounts */ .r, {
                                container: container1,
                                closeAction: "mounts"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showImagePanel,
                        id: "showImagePanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showImage) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Image",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "image",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_images_id___WEBPACK_IMPORTED_MODULE_29__["default"], {
                                embedded: true,
                                container: container1,
                                image: container1.image
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: showEnvVarsPanel,
                        id: "showEnvVarsPanel",
                        className: "col-12 p-0 m-0",
                        children: (containerView === null || containerView === void 0 ? void 0 : containerView.showEnvVars) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_21__.Panel, {
                            className: "sitePanel",
                            header: "Container Environment Variables",
                            hideHeader: true,
                            headerTemplate: template,
                            toggleable: true,
                            closeAction: "envVars",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_containers_container_env_vars__WEBPACK_IMPORTED_MODULE_30__/* .ContainerEnvVars */ ._, {
                                container: container1
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bottom-spacer col-12 m-0 p-0",
                style: {
                    height: '800px'
                }
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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


/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4467:
/***/ ((module) => {

module.exports = require("chart.js");

/***/ }),

/***/ 104:
/***/ ((module) => {

module.exports = require("chartjs-adapter-date-fns");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2250:
/***/ ((module) => {

module.exports = require("primereact/api");

/***/ }),

/***/ 9797:
/***/ ((module) => {

module.exports = require("primereact/badge");

/***/ }),

/***/ 1088:
/***/ ((module) => {

module.exports = require("primereact/button");

/***/ }),

/***/ 7757:
/***/ ((module) => {

module.exports = require("primereact/calendar");

/***/ }),

/***/ 8145:
/***/ ((module) => {

module.exports = require("primereact/column");

/***/ }),

/***/ 4179:
/***/ ((module) => {

module.exports = require("primereact/confirmdialog");

/***/ }),

/***/ 7447:
/***/ ((module) => {

module.exports = require("primereact/datatable");

/***/ }),

/***/ 7077:
/***/ ((module) => {

module.exports = require("primereact/dataview");

/***/ }),

/***/ 2222:
/***/ ((module) => {

module.exports = require("primereact/dialog");

/***/ }),

/***/ 1404:
/***/ ((module) => {

module.exports = require("primereact/dropdown");

/***/ }),

/***/ 5514:
/***/ ((module) => {

module.exports = require("primereact/inputnumber");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("primereact/inputswitch");

/***/ }),

/***/ 9093:
/***/ ((module) => {

module.exports = require("primereact/inputtext");

/***/ }),

/***/ 6085:
/***/ ((module) => {

module.exports = require("primereact/inputtextarea");

/***/ }),

/***/ 4130:
/***/ ((module) => {

module.exports = require("primereact/menubar");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("primereact/messages");

/***/ }),

/***/ 4083:
/***/ ((module) => {

module.exports = require("primereact/organizationchart");

/***/ }),

/***/ 6895:
/***/ ((module) => {

module.exports = require("primereact/paginator");

/***/ }),

/***/ 1006:
/***/ ((module) => {

module.exports = require("primereact/panel");

/***/ }),

/***/ 6532:
/***/ ((module) => {

module.exports = require("primereact/progressbar");

/***/ }),

/***/ 5767:
/***/ ((module) => {

module.exports = require("primereact/progressspinner");

/***/ }),

/***/ 1267:
/***/ ((module) => {

module.exports = require("primereact/ripple");

/***/ }),

/***/ 6551:
/***/ ((module) => {

module.exports = require("primereact/selectbutton");

/***/ }),

/***/ 9368:
/***/ ((module) => {

module.exports = require("primereact/slider");

/***/ }),

/***/ 3749:
/***/ ((module) => {

module.exports = require("primereact/tabview");

/***/ }),

/***/ 3106:
/***/ ((module) => {

module.exports = require("primereact/timeline");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("primereact/toast");

/***/ }),

/***/ 1249:
/***/ ((module) => {

module.exports = require("primereact/treetable");

/***/ }),

/***/ 4355:
/***/ ((module) => {

module.exports = require("primereact/utils");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ 5288:
/***/ ((module) => {

module.exports = require("react-json-tree");

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = require("react-number-format");

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

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,1515,2473,6345,3389,6374,2723,8369,9686,1961,3656,7805,6905,3413], () => (__webpack_exec__(4876)));
module.exports = __webpack_exports__;

})();