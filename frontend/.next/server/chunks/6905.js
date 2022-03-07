"use strict";
exports.id = 6905;
exports.ids = [6905];
exports.modules = {

/***/ 4508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ ImageEnvVars)
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




function ImageEnvVars(props) {
    // const router = useRouter();
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: envVars , 1: setEnvVars  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const envVarsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(envVars);
    envVarsRef.current = envVars;
    const { 0: selectedRows , 1: setSelectedRows  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const selectedRowsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(selectedRows);
    selectedRowsRef.current = selectedRows;
    // const containerRef = useRef(container);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImage(props.image);
        setTimeout(()=>processVars()
        , 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.image
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        processVars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        image
    ]);
    const processVars = ()=>{
        var ref, ref1;
        const p = [];
        if (image === null || image === void 0 ? void 0 : (ref = image.details) === null || ref === void 0 ? void 0 : (ref1 = ref.Config) === null || ref1 === void 0 ? void 0 : ref1.Env) {
            image.details.Config.Env;
            image.details.Config.Env.forEach((d, i)=>{
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
    if (!image) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    if (envVarsRef.current.length < 1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12 text-center p-3",
        children: "No Env Vars assigned to this image"
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

/***/ 6905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4130);
/* harmony import */ var primereact_menubar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_menubar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_JSONDataView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6345);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1515);
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8369);
/* harmony import */ var components_images_image_environment_vars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4508);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var pages_containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2723);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket_service__WEBPACK_IMPORTED_MODULE_9__, _details__WEBPACK_IMPORTED_MODULE_10__, pages_containers__WEBPACK_IMPORTED_MODULE_13__]);
([_services_socket_service__WEBPACK_IMPORTED_MODULE_9__, _details__WEBPACK_IMPORTED_MODULE_10__, pages_containers__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// import { dockerImagesService } from 'services/docker-image.service';




function ImageView(props) {
    var ref2, ref1;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const images = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>{
        return state.images;
    });
    // const dispatch = useDispatch();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(isLoading);
    isLoadingRef.current = isLoading;
    const { 0: showDetails , 1: setShowDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const showDetailsRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(showDetails);
    showDetailsRef.current = showDetails;
    const { 0: imageId , 1: setImageId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const imageIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(imageId);
    imageIdRef.current = imageId;
    const { 0: image1 , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(image1);
    imageRef.current = image1;
    const { 0: menuItems1 , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: isEmbedded , 1: setIsEmbedded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const isEmbeddedRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(isEmbedded);
    isEmbeddedRef.current = isEmbedded;
    const usePrevious = (value)=>{
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
            ref.current = value;
        });
        return ref.current;
    };
    const previousImage = usePrevious(image1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{
        var ref;
        if (props.embedded === true) {
            setIsEmbedded(true);
        }
        if (router.query.id || ((ref = props.image) === null || ref === void 0 ? void 0 : ref.id)) {
            var ref3;
            if ((ref3 = props.image) === null || ref3 === void 0 ? void 0 : ref3.id) {
                setImageId(props.image.id);
            } else {
                setImageId(router.query.id);
            }
            setTimeout(async ()=>{
                if (!socketLoaded) {
                    await loadSocket();
                }
            });
            setTimeout(()=>{
                getImage();
            }, 300);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.query,
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        images
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                const socketName = 'dockerResulsImages_' + imageIdRef.current;
                socketRef.current.removeListener(socketName);
            }
        };
    }, []);
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socketName = 'dockerResulsImages_' + imageIdRef.current;
        const socket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_9__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
            if (results.status === 'success') {
                if (results.data) {
                    switch(results.hook){
                        case 'removeImage':
                            // Show dialog
                            setImage(null);
                            break;
                        default:
                            if (results.data.id) {
                                setImage(results.data);
                                buildMenuItems(results.data);
                            }
                            break;
                    }
                }
            }
        });
        setSocket(socket);
    }
    async function getImage() {
        if (!imageIdRef.current) return;
        if (imageIdRef.current) {
            if (images) {
                Object.keys(images).forEach((key)=>{
                    const host = images[key];
                    if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEqual(previousImage, host.images[imageIdRef.current])) {
                        // console.log('Images loading');
                        if (imageIdRef.current in host.images) {
                            const c = host.images[imageIdRef.current];
                            setImage(c);
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
    // async function loadData() {
    //   if (isLoadingRef.current) {
    //     setIsLoading(true);
    //   }
    //   if (!imageRef.current && imageIdRef.current) {
    //     console.log('image', imageIdRef);
    //     const f = await dockerImagesService.getImageById(imageIdRef.current);
    //     console.log('data', f);
    //     if (f.status === 'success') {
    //       console.log('Data', f.data);
    //       setImage(f.data);
    //       buildMenuItems(f.data);
    //       if (isLoadingRef.current) {
    //         setIsLoading(false);
    //       }
    //     }
    //   } else {
    //     if (f.message) {
    //       setError(f.message);
    //       console.log('Error', f.message);
    //     }
    //     buildMenuItems(imageRef);
    //     if (isLoadingRef.current) {
    //       setIsLoading(false);
    //     }
    //   }
    // }
    function buildMenuItems(c) {
        const menuItems = [];
        let image;
        if (c.current) {
            image = c.current;
        } else {
            image = c;
        }
        menuItems.push({
            label: 'Inspect',
            icon: 'fa fa-fw fa-eye',
            command: ()=>{
                inspectImage();
            }
        });
        if (!image.active) {
            menuItems.push({
                label: 'Remove',
                icon: 'fa fa-fw fa-power-off',
                command: (e)=>{
                    confirm('removeImage', 'Remove Image?', e);
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
                    case 'removeImage':
                        removeImage();
                        break;
                }
            }
        });
    };
    function inspectImage() {
        setShowDetails(true);
        if (imageRef === null || imageRef === void 0 ? void 0 : imageRef.current) {
            var ref;
            socketRef.current.emit('docker', {
                command: 'inspectImage',
                imageId: imageRef.current.imageId,
                hostId: (ref = imageRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
                callback: 'dockerResulsImages_' + imageRef.current.id,
                hook: 'inspectImage'
            });
        }
    }
    function removeImage() {
        var ref;
        socketRef.current.emit('docker', {
            command: 'removeImage',
            imageId: imageRef.current.details.Id,
            hostId: (ref = imageRef.current.host) === null || ref === void 0 ? void 0 : ref.id,
            callback: 'dockerResulsImages_' + imageRef.current.id,
            hook: 'removeImage'
        });
    }
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load Image: ",
            error
        ]
    }));
    if (!router.query.id) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    if (!image1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "Image could not be found."
    }));
    const showMarkdown = isEmbedded ? false : false;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12 p-0 m-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "grid col-12 p-0 m-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex col-10 p-0 m-0",
                                children: image1.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-2 text-right p-0 m-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    children: [
                                        "[",
                                        image1.id,
                                        "]"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex col-12 justify-content-end"
                    }),
                    !isEmbeddedRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 p-0 card",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_4__.Menubar, {
                            className: "flex col-12 justify-content-end",
                            model: menuItems1
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m1-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 p-0 m-0 mt-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    data: image1,
                    collapsed: 0,
                    header: "Image Details"
                })
            }),
            (image1 === null || image1 === void 0 ? void 0 : image1.name) && (image1 === null || image1 === void 0 ? void 0 : image1.tag) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m-0 mt-3 p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_details__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    showTags: false,
                    showPreview: true,
                    showMarkdown: showMarkdown,
                    image: image1,
                    imageName: image1.name
                })
            }),
            (image1 === null || image1 === void 0 ? void 0 : (ref2 = image1.details) === null || ref2 === void 0 ? void 0 : ref2.Config) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m-0 p-0 mt-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, {
                    className: "sitePanel",
                    header: "Image Envirotnment Variables",
                    hideHeader: true,
                    toggleable: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_images_image_environment_vars__WEBPACK_IMPORTED_MODULE_11__/* .ImageEnvVars */ .F, {
                        image: image1
                    })
                })
            }),
            (image1 === null || image1 === void 0 ? void 0 : (ref1 = image1.containers) === null || ref1 === void 0 ? void 0 : ref1.length) > 0 && !isEmbeddedRef.current && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 m-0 p-0 mt-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_12__.Panel, {
                    className: "sitePanel",
                    header: "Containers",
                    hideHeader: true,
                    toggleable: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_containers__WEBPACK_IMPORTED_MODULE_13__["default"], {
                        image: image1
                    })
                })
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

/***/ })

};
;