"use strict";
exports.id = 8369;
exports.ids = [8369];
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

/***/ 1360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DockerImageTags)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1515);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4355);
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6085);
/* harmony import */ var primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1267);
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primereact_ripple__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9093);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(333);
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8145);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6895);
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primereact_paginator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primereact_treetable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1249);
/* harmony import */ var primereact_treetable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primereact_treetable__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket_service__WEBPACK_IMPORTED_MODULE_4__]);
_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















function DockerImageTags(props) {
    const toast = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    // const dispatch = useDispatch();
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(activeHost);
    activeHostRef.current = activeHost;
    const localImagesObject = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.images;
    });
    const { 0: localImages , 1: setLocalImages  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    // const [progressValue, setProgressValue] = useState(0);
    const { 0: progressMessage , 1: setProgressMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { 0: progressStatus , 1: setProgressStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    // const [progressDetail, setProgressDetail] = useState('');
    const { 0: progressLog , 1: setProgressLog  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const progressLogRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(progressLog);
    progressLogRef.current = progressLog;
    const { 0: msgs1 , 1: setMsgs1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: expandedKeys , 1: setExpandedKeys  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: results1 , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: image1 , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(image1);
    imageRef.current = image1;
    const { 0: tags1 , 1: setTags  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const tagsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(tags1);
    tagsRef.current = tags1;
    const { 0: imageId , 1: setImageId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const imageIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(imageId);
    imageIdRef.current = imageId;
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: hideTags , 1: setHideTags  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: hideProgress , 1: setHideProgress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: tableIsLoading , 1: setTableIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const tableIsLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(tableIsLoading);
    tableIsLoadingRef.current = tableIsLoading;
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // Paginator
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const currentPageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(currentPage);
    currentPageRef.current = currentPage;
    const { 0: pageInputTooltip , 1: setPageInputTooltip  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Press 'Enter' key to go to this page.");
    const { 0: tableFirst , 1: setTableFirst  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: tableRows , 1: setTableRows  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(15);
    const tableRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(tableRows);
    tableRowsRef.current = tableRows;
    const { 0: totalRecords , 1: setTotalRecords  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const totalRecordsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(totalRecords);
    totalRecordsRef.current = totalRecords;
    const { 0: logs1 , 1: setLogs  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const logsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(logs1);
    logsRef.current = logs1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        clearMessages();
        processLocalImages();
        setImage(props.image);
        setImageId(props.imageId);
        if (!socketLoaded) {
            await loadSocket();
        }
        loadData();
        setProgressLog([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        processLocalImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        localImagesObject
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (logsRef.current.length > 0) {
            scrollToBottom();
        }
    }, [
        logs1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'image_tags_' + imageIdRef.current;
                socketRef.current.removeListener(socketName);
                const socketName2 = 'image_pull_' + imageIdRef.current;
                socketRef.current.removeListener(socketName2);
            }
        };
    }, []);
    const clearMessages = ()=>{
        if (msgs1) {
            setMsgs1(null);
        }
    };
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'image_tags_' + props.imageId;
        const socket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_4__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            setHideProgress(true);
            if ((results === null || results === void 0 ? void 0 : results.status) === 'success') {
                var ref;
                if (results === null || results === void 0 ? void 0 : results.data.count) {
                    setTotalRecords(results.data.count);
                }
                if ((ref = results.data) === null || ref === void 0 ? void 0 : ref.tags) {
                    setTags(results.data.tags);
                    prepareData({
                        tags: results.data.tags,
                        image: imageRef.current
                    });
                }
            }
        });
        socket.on('image_pull_' + imageIdRef.current, async (results)=>{
            setHideProgress(false);
            if (results.status === 'success') {
                setProgressStatus(results.data.status);
                // setProgressDetail(results.data.progress);
                let logs = (logsRef === null || logsRef === void 0 ? void 0 : logsRef.current) ? logsRef.current : '';
                if (results.data.progress) {
                    logs += results.data.progress + '\n';
                    // console.log('Progress', results.data?.progress);
                    setLogs(logs);
                } else {
                    logs += results.data.status + '\n';
                    setLogs(logs);
                }
            // if (results.data?.progressDetail) {
            //   const progress = (results.data.progressDetail.current / results.data.progressDetail.total) * 100;
            //   if (!isNaN(progress)) {
            //     setProgressValue(Math.round(progress));
            //   } else {
            //     if (!results.data?.status === 'Pull Complete') {
            //       setProgressValue(0);
            //     } else {
            //       setProgressValue(100);
            //     }
            //   }
            // } else {
            //   setProgressValue(100);
            // }
            }
            if (results.status === 'fail') {
                console.warn('Fail', results.message);
                setProgressMessage('Error: ' + results.message);
                setProgressStatus('Fail: ' + results.status);
                // setProgressValue(0);
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: results.message,
                    life: 6000
                });
            }
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        setTableIsLoading(true);
        socketRef.current.emit('docker', {
            command: 'dockerHubRepositoryTags',
            repository: imageIdRef.current,
            // hostId: imageRef.current.hostId,
            options: {
                limit: tableRowsRef.current,
                page: currentPageRef.current
            },
            callback: 'image_tags_' + imageIdRef.current
        });
    }
    async function processLocalImages() {
        const data = Object.keys(localImagesObject[activeHostRef.current.id].images).map((key)=>localImagesObject[activeHostRef.current.id].images[key]
        );
        // console.log('Images', data);
        setLocalImages(data);
    }
    async function prepareData(data) {
        if (!data.tags) return;
        const tags = data.tags.map((a, i)=>{
            const t = {
                key: '' + i + '',
                data: {
                    id: a.id,
                    name: a.name,
                    last_updated: a.last_updated,
                    size: a.full_size,
                    data: a,
                    status: a.tag_status,
                    os: '',
                    install: data.image.namespace + '/' + data.image.name + ':' + a.name
                }
            };
            t.children = a.images.map((img, x)=>{
                const c = {
                    key: '' + i + '-' + x + '',
                    data: {
                        id: img.digest,
                        name: img.architecture,
                        last_updated: img.last_pushed,
                        size: img.size,
                        data: img,
                        status: img.status,
                        os: img.os,
                        features: img.features,
                        os_version: img.os_version,
                        install: data.image.namespace + '/' + data.image.name + ':' + a.name,
                        platform: img.architecture
                    }
                };
                return c;
            });
            return t;
        });
        setResults(tags);
        setIsLoading(false);
        setTableIsLoading(false);
    }
    const LogContainer = ()=>{
        var ref;
        if (((ref = logsRef.current) === null || ref === void 0 ? void 0 : ref.length) === 0) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
        if (!logsRef.current) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 ml-2 mr-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextarea, {
                    ref: messagesEndRef,
                    autoCorrect: "off",
                    spellCheck: "false",
                    autoComplete: "false",
                    autoCapitalize: "false",
                    style: {
                        backgroundColor: 'black',
                        padding: '4px'
                    },
                    value: logsRef.current,
                    onChange: ()=>{},
                    className: "col-12 p-5",
                    rows: 10,
                    cols: 30
                })
            })
        }));
    };
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
    // const clearLogs = () => {
    //   // messagesEndRef.current?.scrollIntoVi
    //   setLogs([]);
    // };
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = [
            'Bytes',
            'KB',
            'MB',
            'GB',
            'TB',
            'PB',
            'EB',
            'ZB',
            'YB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    if (!results1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "No Results"
    }));
    const installTag = (imageTag)=>{
        if (imageTag.data.platform) {
            confirmDialogPopup(performPullImage, 'Pull Image ' + imageTag.data.install + ' platform: ' + imageTag.data.platform + '?', imageTag);
        } else {
            confirmDialogPopup(performPullImage, 'Pull Image ' + imageTag.data.install + '?', imageTag);
        }
    };
    const performPullImage = (image)=>{
        setHideTags(true);
        if (socketRef.current) {
            socketRef.current.emit('dockerPullImage', {
                callback: 'image_pull_' + imageIdRef.current,
                command: 'pullImage',
                hostId: activeHostRef.current.id,
                body: {
                    tag: image.data.install
                },
                data: image.data
            });
        }
    };
    const lastUpdatedTemplate = (rowData)=>{
        if (rowData.data.last_updated) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: dayjs__WEBPACK_IMPORTED_MODULE_3__(rowData.data.last_updated).format('YYYY-MM-DD HH:mm:ss')
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
        }
    };
    const tagStatusTemplate = (rowData)=>{
        if (rowData.data.status) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: rowData.data.status
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: rowData.data.status
            }));
        }
    };
    const sizeTemplate = (rowData)=>{
        if (rowData.data.size) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: formatBytes(rowData.data.size)
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: formatBytes(rowData.data.size)
            }));
        }
    };
    const actionTemplate = (rowData)=>{
        let f = localImages.filter((a)=>{
            if (rowData.data.install.includes(a.pullTag)) {
                //if (rowData.data.architecture === a.architecture) {
                return a;
            //  }
            }
        });
        if (f.length > 0) {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__.Button, {
                        label: "Remove",
                        onClick: (e)=>{
                            confirm('removeImage', f[0], 'Remove ' + f[0].pullTag + '?', e);
                        },
                        // confirmRemove('removeImage', null, 'Remove ' +  + '?', e); }}
                        className: "p-button-primary",
                        icon: "pi pi-trash"
                    }, 'btn_234-' + rowData.data.id + '')
                }, 'btn_23433-' + rowData.data.id + '')
            }));
        } else {
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__.Button, {
                    label: "Pull",
                    onClick: ()=>installTag(rowData)
                    ,
                    className: "p-button-secondary",
                    icon: "pi pi-plus"
                })
            }));
        }
    };
    const confirm = (action, imageName, title, target = null)=>{
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            target: (target === null || target === void 0 ? void 0 : target.currentTarget) ? target.currentTarget : null,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>{
                switch(action){
                    case 'removeImage':
                        removeImage(imageName);
                        break;
                    default:
                        break;
                }
            }
        });
    };
    const confirmDialogPopup = (action, title, data)=>{
        (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.confirmDialog)({
            className: 'confirm-dialogs',
            message: title,
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: ()=>action(data)
        });
    };
    const removeImage = (image)=>{
        var ref;
        socketRef.current.emit('docker', {
            command: 'removeImage',
            imageId: image.imageId,
            hostId: (ref = image.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResuls_images' + image.id,
            hook: 'removeImage'
        });
    };
    const toggleProgress = ()=>{
        setHideTags(false);
        setHideProgress(true);
    };
    const handlePageChange = (event)=>{
        setTimeout(()=>{
            setTableFirst(event.first);
            setTableRows(event.rows);
            setCurrentPage(event.page + 1);
            loadData();
        });
    };
    const onPageInputKeyDown = (event, options)=>{
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            } else {
                const first = currentPage ? options.rows * (page - 1) : 0;
                setTableFirst(first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };
    const onPageInputChange = (event)=>{
        setCurrentPage(event.target.value);
    };
    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                disabled: options.disabled,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "p-3",
                        children: "Previous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, {})
                ]
            }));
        },
        NextPageLink: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                disabled: options.disabled,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "p-3",
                        children: "Next"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, {})
                ]
            }));
        },
        PageLinks: (options)=>{
            if (options.view.startPage === options.page && options.view.startPage !== 0 || options.view.endPage === options.page && options.page + 1 !== options.totalPages) {
                const className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_5__.classNames)(options.className, {
                    'p-disabled': true
                });
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: className,
                    style: {
                        userSelect: 'none'
                    },
                    children: "..."
                }));
            }
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: options.className,
                onClick: options.onClick,
                children: [
                    options.page + 1,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, {})
                ]
            }));
        },
        RowsPerPageDropdown: (options)=>{
            const dropdownOptions = [
                {
                    label: 10,
                    value: 10
                },
                {
                    label: 15,
                    value: 15
                },
                {
                    label: 20,
                    value: 20
                },
                {
                    label: 30,
                    value: 30
                }, 
            ];
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, {
                value: options.value,
                options: dropdownOptions,
                onChange: options.onChange
            }));
        },
        CurrentPageReport: (options)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "mx-3",
                style: {
                    color: 'var(--text-color)',
                    userSelect: 'none'
                },
                children: [
                    "Go to ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, {
                        size: "2",
                        className: "ml-1",
                        value: currentPage,
                        tooltip: pageInputTooltip,
                        onKeyDown: (e)=>onPageInputKeyDown(e, options)
                        ,
                        onChange: onPageInputChange
                    })
                ]
            }));
        }
    };
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, {
                ref: toast
            }),
            !hideProgress && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card mb-4 mt-0 text-left",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-10 text-left p-5 m-auto pt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "lightblue-color",
                                    children: image1.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-2 text-right p-5 m-auto mt-0 pt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_9__.Button, {
                                    label: "Hide",
                                    onClick: ()=>toggleProgress()
                                    ,
                                    className: "p-button-secondary",
                                    icon: "pi pi-eye"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-12 text-center mb-2",
                        children: [
                            progressMessage,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            progressStatus
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogContainer, {
                        className: "logScroller"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: !hideTags && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: (results1 === null || results1 === void 0 ? void 0 : results1.length) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "lightblue-color",
                                children: [
                                    image1.name,
                                    " Images"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_treetable__WEBPACK_IMPORTED_MODULE_16__.TreeTable, {
                                value: results1,
                                stripedRows: true,
                                rowHover: true,
                                showGridlines: true,
                                expandedKeys: expandedKeys,
                                onToggle: (e)=>setExpandedKeys(e.value)
                                ,
                                loading: tableIsLoading,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                                        field: "name",
                                        header: "Name",
                                        className: "lightblue-color",
                                        expander: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                                        field: "last_updated",
                                        header: "Last Updated",
                                        align: "right",
                                        body: lastUpdatedTemplate
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                                        field: "status",
                                        header: "Status",
                                        align: "center",
                                        body: tagStatusTemplate
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                                        field: "size",
                                        header: "Size",
                                        align: "right",
                                        body: sizeTemplate
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_column__WEBPACK_IMPORTED_MODULE_14__.Column, {
                                        field: "id",
                                        header: "Action",
                                        align: "center",
                                        body: actionTemplate
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_paginator__WEBPACK_IMPORTED_MODULE_15__.Paginator, {
                                template: template1,
                                first: tableFirst,
                                rows: tableRows,
                                totalRecords: totalRecords,
                                onPageChange: handlePageChange
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DockerImageView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3554);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1088);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3135);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1515);
/* harmony import */ var components_images_imageTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_6__, _services_socket_service__WEBPACK_IMPORTED_MODULE_7__, components_images_imageTags__WEBPACK_IMPORTED_MODULE_8__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_6__, _services_socket_service__WEBPACK_IMPORTED_MODULE_7__, components_images_imageTags__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function DockerImageView(props) {
    var ref, ref1, ref2;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: showMarkdown , 1: setShowMarkdown  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: showDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const showDetailsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showDetails);
    showDetailsRef.current = showDetails;
    const { 0: showTags , 1: setShowTags  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const showTagsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showTags);
    showTagsRef.current = showTags;
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(image);
    imageRef.current = image;
    const { 0: localImage , 1: setLocalImage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const localImageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(localImage);
    localImageRef.current = localImage;
    const { 0: imageId , 1: setImageId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const imageIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(imageId);
    imageIdRef.current = imageId;
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    // const usePrevious = (value) => {
    //   const ref = useRef();
    //   useEffect(() => {
    //     ref.current = value;
    //   });
    //   return ref.current;
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{
        if (router.query.name) {
            setImageId(router.query.name);
            updateLocalImage();
        }
        if (props.imageName) {
            setImageId(props.imageName);
            updateLocalImage();
        }
        if (props.showTags === false) {
            setShowTags(false);
        } else {
            setShowTags(true);
        }
        if (props.showMarkdown === true) {
            setShowMarkdown(true);
        } else {
            setShowMarkdown(false);
        }
        setTimeout(async ()=>{
            if (!socketLoaded) {
                await loadSocket();
            }
            loadData();
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'image_details_' + imageIdRef.current;
                socketRef.current.removeListener(socketName);
            }
        };
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'image_details_' + imageIdRef.current;
        const socket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_7__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            // console.log('Image', results.data);
            if (results.status === 'success') {
                if (results.data) {
                    setImage(results.data);
                }
            }
            setIsLoading(false);
        });
        setSocket(socket);
        return socket;
    }
    async function loadData() {
        if (isLoadingRef.current) {
            setIsLoading(true);
        }
        const socketName = 'image_details_' + imageIdRef.current;
        if (socketRef.current) {
            socketRef.current.emit('docker', {
                command: 'dockerHubRepositoryDetails',
                repository: imageIdRef.current,
                // hostId: imageRef.current.host?.id,
                callback: socketName
            });
        } else {
            setIsLoading(false);
        }
    }
    function updateLocalImage() {
        if (!props.image) {
        // Get from state
        }
        if (props.image) {
            setLocalImage(props.image);
        }
    }
    // const confirm = (action, title) => {
    //   confirmDialog({
    //     message: title,
    //     header: 'Confirmation',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => action(),
    //   });
    // };
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load image: ",
            error
        ]
    }));
    if (!imageRef.current) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Image not found in Docker Hub"
    }));
    if (!imageIdRef.current) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-12 p-0 m-0",
            children: [
                !props.showPreview && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "surface-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "list-none p-0 m-0 flex align-items-center font-medium mb-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "text-500 no-underline line-height-3 cursor-pointer",
                                                children: "Docker Hub"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "px-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "pi pi-angle-right text-500 line-height-3"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-900 line-height-3",
                                                children: image.namespace
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex align-items-start flex-column lg:justify-content-between lg:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "font-medium text-3xl text-900",
                                                    children: [
                                                        image.name,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex align-items-center text-700 flex-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mr-5 flex align-items-center mt-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "pi pi-users mr-2"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_number_format__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            displayType: 'text',
                                                                            thousandSeparator: true,
                                                                            value: image.pull_count
                                                                        }),
                                                                        " Pulls"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mr-5 flex align-items-center mt-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "pi pi-star mr-2"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_number_format__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                            displayType: 'text',
                                                                            thousandSeparator: true,
                                                                            value: image.star_count
                                                                        }),
                                                                        " Stars"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex align-items-center mt-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "pi pi-user mr-2"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: image.hub_user
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-3 lg:mt-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                    label: "Add",
                                                    className: "p-button-outlined mr-2",
                                                    icon: "pi pi-user-plus"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                    label: "Save",
                                                    icon: "pi pi-check"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 mt-5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    children: "Docker Hub"
                                }),
                                ((ref = localImageRef.current) === null || ref === void 0 ? void 0 : ref.name) && ((ref1 = localImageRef.current) === null || ref1 === void 0 ? void 0 : ref1.tag) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    children: [
                                        (ref2 = localImageRef.current) === null || ref2 === void 0 ? void 0 : ref2.name,
                                        ":",
                                        localImageRef.current.tag
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: image.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-2 text-right p-0 m-0",
                            children: [
                                !showMarkdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    label: "Read More",
                                    onClick: ()=>setShowMarkdown(true)
                                    ,
                                    className: "p-button-secondary",
                                    icon: "pi pi-eye"
                                }),
                                showMarkdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    label: "Hide",
                                    onClick: ()=>setShowMarkdown(false)
                                    ,
                                    className: "p-button-secondary",
                                    icon: "pi pi-eye"
                                })
                            ]
                        })
                    ]
                }),
                showMarkdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "card",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 markdown-background",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            linkTarget: "_blank",
                            children: image.full_description
                        })
                    })
                }),
                showTags && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_images_imageTags__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    tags: image.tags,
                    image: image,
                    imageId: imageId
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;