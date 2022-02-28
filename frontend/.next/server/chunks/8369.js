"use strict";
exports.id = 8369;
exports.ids = [8369];
exports.modules = {

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
/* harmony import */ var _components_imageTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4530);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_6__, _components_imageTags__WEBPACK_IMPORTED_MODULE_7__, _services_socket_service__WEBPACK_IMPORTED_MODULE_8__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_6__, _components_imageTags__WEBPACK_IMPORTED_MODULE_7__, _services_socket_service__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function DockerImageView(props) {
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
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(image);
    imageRef.current = image;
    const { 0: imageId , 1: setImageId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const imageIdRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(imageId);
    imageIdRef.current = imageId;
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
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
        }
        if (props.imageName) {
            setImageId(props.imageName);
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
        const socket = await _services_socket_service__WEBPACK_IMPORTED_MODULE_8__/* .socketService.getSocket */ .L.getSocket();
        socket.on(socketName, (results)=>{
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
            className: "col-12 p-0",
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-10",
                            children: image.description
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
                        className: "col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            children: image.full_description
                        })
                    })
                }),
                showTags && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_imageTags__WEBPACK_IMPORTED_MODULE_7__["default"], {
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