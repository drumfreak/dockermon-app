"use strict";
exports.id = 6905;
exports.ids = [6905];
exports.modules = {

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
/* harmony import */ var services_docker_image_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3811);
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socket_service__WEBPACK_IMPORTED_MODULE_9__, _details__WEBPACK_IMPORTED_MODULE_11__]);
([_services_socket_service__WEBPACK_IMPORTED_MODULE_9__, _details__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function ImageView(props) {
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
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: socket1 , 1: setSocket  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(socket1);
    socketRef.current = socket1;
    const { 0: socketLoaded , 1: setSocketLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: isEmbedded , 1: setIsEmbedded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
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
            var ref1;
            if ((ref1 = props.image) === null || ref1 === void 0 ? void 0 : ref1.id) {
                setImageId(props.image.id);
            } else {
                setImageId(router.query.id);
            }
            setTimeout(async ()=>{
                if (!socketLoaded) {
                    await loadSocket();
                }
                loadData();
            });
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
        if (router.query.id) {
            if (images) {
                Object.keys(images).forEach((key)=>{
                    const host = images[key];
                    if (!lodash__WEBPACK_IMPORTED_MODULE_7___default().isEqual(previousImage, host.images[router.query.id])) {
                        // console.log('Images loading');
                        if (router.query.id in host.images) {
                            const c = host.images[router.query.id];
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
    async function loadData() {
        if (isLoadingRef.current) {
            setIsLoading(true);
        }
        if (!imageRef) {
            const { data , error  } = await services_docker_image_service__WEBPACK_IMPORTED_MODULE_10__/* .dockerImagesService.getImageById */ .V.getImageById(imageIdRef.current);
            if (error) {
                setError(error);
                console.log('Error', error);
            }
            if (data) {
                setImage(data);
                buildMenuItems(data);
                if (isLoadingRef.current) {
                    setIsLoading(false);
                }
            }
        } else {
            buildMenuItems(imageRef);
            if (isLoadingRef.current) {
                setIsLoading(false);
            }
        }
    }
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
    if (error1) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Failed to load Image: ",
            error1
        ]
    }));
    if (!router.query.id) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    }));
    if (!image1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center mt-5",
        children: "Image could not be found."
    }));
    const showMarkdown = isEmbedded ? false : true;
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 p-0 card",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_menubar__WEBPACK_IMPORTED_MODULE_4__.Menubar, {
                            className: "flex col-12 justify-content-end",
                            model: menuItems1
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_JSONDataView__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: image1,
                        collapsed: 0,
                        header: "Image Details"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12 m1-2"
                    }),
                    image1.name && image1.tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_details__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        showTags: false,
                        showPreview: true,
                        showMarkdown: showMarkdown,
                        image: image1,
                        imageName: image1.name
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ dockerImagesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1388);



const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
const dockerImagesService = {
    results: resultSubject.asObservable(),
    getImages,
    getImageById
};
function getImages(postBody) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.post */ .h.post(`${baseUrl}/images`, postBody).then((result)=>{
        if (result.status === 'success') {
            resultSubject.next(result);
            return result;
        } else {
            throw Error(result.message);
        }
    }).catch((error)=>{
        resultSubject.next(null);
        console.log(error);
    });
}
function getImageById(id) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_2__/* .fetchWrapper.get */ .h.get(`${baseUrl}/images/${id}`).then((result)=>{
        if (result.status === 'success') {
            resultSubject.next(result);
            return result;
        } else {
            throw Error(result.message);
        }
    }).catch((error)=>{
        resultSubject.next(null);
        console.log(error);
    });
}


/***/ })

};
;