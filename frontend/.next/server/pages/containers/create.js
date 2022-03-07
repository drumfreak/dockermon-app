"use strict";
(() => {
var exports = {};
exports.id = 2638;
exports.ids = [2638];
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

/***/ 9235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ ImageDetailsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__);






function ImageDetailsModal({ ...props }) {
    const { 0: image , 1: setImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const imageRef = useRef(image);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImage(props.image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!image) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__.Prism, {
        className: "m-0 p-4",
        language: "javascript",
        style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__.coldarkDark,
        showLineNumbers: true,
        wrapLines: true,
        wrapLongLines: true,
        children: JSON.stringify(image, null, 4)
    }));
}


/***/ }),

/***/ 4344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ NetworkDetailsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__);






function NetworkDetailsModal({ ...props }) {
    const { 0: network , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const imageRef = useRef(image);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNetwork(props.network);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!network) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__.Prism, {
        className: "m-0 p-4",
        language: "javascript",
        style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__.coldarkDark,
        showLineNumbers: true,
        wrapLines: true,
        wrapLongLines: true,
        children: JSON.stringify(network, null, 4)
    }));
}


/***/ }),

/***/ 8451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateContainerView)
/* harmony export */ });
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
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1404);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var services_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1515);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5514);
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var helpers_name_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9861);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2222);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_images_details_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9235);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4179);
/* harmony import */ var primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6139);
/* harmony import */ var primereact_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primereact_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9325);
/* harmony import */ var primereact_multiselect__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primereact_multiselect__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var components_networks_network_details_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4344);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, services_socket_service__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable no-case-declarations */ 





















function CreateContainerView() {
    var ref9, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
    const images = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>{
        return state.images;
    });
    // const dispatch = useDispatch();
    const activeHost = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>{
        return state.hosts.activeHost;
    });
    const activeHostRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(activeHost);
    activeHostRef.current = activeHost;
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
    const networks = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>{
        return state.networks;
    });
    const { 0: networksList , 1: setNetworksList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networksListRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(networksList);
    networksListRef.current = networksList;
    const { 0: selectedNetworks , 1: setSelectedNetworks  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const selectedNetworksRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(selectedNetworks);
    selectedNetworksRef.current = selectedNetworks;
    const { 0: selectedNetwork , 1: setSelectedNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const selectedNetworkRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(selectedNetwork);
    selectedNetworkRef.current = selectedNetwork;
    const { 0: network , 1: setNetwork  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const networkRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(network);
    networkRef.current = network;
    const { 0: error  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(error);
    errorRef.current = error;
    const { 0: showError , 1: setShowError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: showImageDialog , 1: setShowImageDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: imagesList , 1: setImagesList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const imagesListRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(imagesList);
    imagesListRef.current = imagesList;
    const { 0: refImage , 1: setRefImage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('httpd:latest');
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(refImage);
    imageRef.current = refImage;
    const { 0: selectedImage , 1: setSelectedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const selectedImageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(selectedImage);
    selectedImageRef.current = selectedImage;
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
    const portTypes = [
        {
            label: 'tcp'
        },
        {
            label: 'udp'
        },
        {
            label: ''
        }
    ];
    const mountTypes = [
        {
            label: 'bind'
        },
        {
            label: 'volume'
        },
        {
            label: 'tmpfs'
        },
        {
            label: 'npipe'
        }
    ];
    const mountTypesReadOnly = [
        {
            label: 'false'
        },
        {
            label: 'true'
        }
    ];
    const { 0: commandsCounter , 1: setCommandsCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);
    const { 0: portMappingCounter , 1: setPortMappingCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: exposedPortsCounter , 1: setExposedPortsCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: envVarsCounter , 1: setEnvVarsCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);
    const { 0: mountsCounter , 1: setMountsCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: portsSelected , 1: setPortsSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        'tcp',
        'tcp'
    ]);
    const portsSelectedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(portsSelected);
    portsSelectedRef.current = portsSelected;
    const { 0: portBindingsToPorts , 1: setPortBindingsToPorts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const portBindingsToPortsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(portBindingsToPorts);
    portBindingsToPortsRef.current = portBindingsToPorts;
    const { 0: portBindingsFromPorts , 1: setPortBindingsFromPorts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const portBindingsFromPortsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(portBindingsFromPorts);
    portBindingsFromPortsRef.current = portBindingsFromPorts;
    const { 0: exposedPortsSelected , 1: setExposedPortsSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        'tcp',
        'tcp'
    ]);
    const exposedPortsSelectedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(exposedPortsSelected);
    exposedPortsSelectedRef.current = exposedPortsSelected;
    const { 0: exposedPortsPort , 1: setExposedPortsPort  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const exposedPortsPortRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(exposedPortsPort);
    const { 0: mountTypeSelected , 1: setMountTypeSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        'bind',
        'bind'
    ]);
    const mountTypeSelectedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(mountTypeSelected);
    mountTypeSelectedRef.current = mountTypeSelected;
    const { 0: mountTypeReadOnly , 1: setMountTypeReadOnly  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        'false',
        'false'
    ]);
    const mountTypeReadOnlyRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(mountTypeReadOnly);
    mountTypeReadOnlyRef.current = mountTypeReadOnly;
    const { 0: aliasesCounter , 1: setAliasesCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const aliasesCounterRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(aliasesCounter);
    aliasesCounterRef.current = aliasesCounter;
    const { 0: linksCounter , 1: setLinksCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const linksCounterRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(linksCounter);
    linksCounterRef.current = linksCounter;
    const { 0: networkSettings , 1: setNetworkSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const networkSettingsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(networkSettings);
    networkSettingsRef.current = networkSettings;
    const { 0: showHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showAdvanced , 1: setShowAdvanced  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const showAdvancedRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(showAdvanced);
    showAdvancedRef.current = showAdvanced;
    const { 0: showNetworkHelp , 1: setShowNetworkHelp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const showNetworkHelpRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(showNetworkHelp);
    showNetworkHelpRef.current = showNetworkHelp;
    const { 0: showNetworkDialog , 1: setShowNetworkDialog  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showRunCommand , 1: setShowRunCommand  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const showRunCommandRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(showRunCommand);
    showRunCommandRef.current = showRunCommand;
    const { 0: showMounts , 1: setShowMounts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showExposedPorts , 1: setShowExposedPorts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showPortBindings , 1: setShowPortBindings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showHostSettings , 1: setShowHostSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showNetworks , 1: setShowNetworks  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: showEnvironmentVariables , 1: setShowEnvironmentVariables  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: formRefresh , 1: setFormRefresh  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: refreshPanels , 1: setRefreshPanels  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // const [mountTypeToPoint, setMountTypeToPoint] = useState({ 0: '/' });
    // const mountTypeToPointRef = useRef(mountTypeToPoint);
    // mountTypeToPointRef.current = mountTypeToPoint;
    // const [mountTypeFromPoint, setMountTypeFromPoint] = useState({ 0: '/Users/phpfreak/Development/docker/mount' });
    // const mountTypeFromPointRef = useRef(mountTypeFromPoint);
    // mountTypeFromPointRef.current = mountTypeFromPoint;
    // const [folders, setFolders] = useState();
    const folderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    // folderRef.current = folders;
    // const folderRef = useRef({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{
        if (!socketLoaded) {
            await loadSocket();
        }
        await getImages();
        if (isLoading) {
            setIsLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        var ref;
        let c1 = {
            ...networks
        };
        if (!((ref = activeHostRef.current) === null || ref === void 0 ? void 0 : ref.id)) {
            return;
        }
        if (!networks) {
            return;
        }
        c1 = networks[activeHostRef.current.id].networks;
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        data.sort((a, b)=>{
            if (!a.name) {
                a.name = 'Unknown';
            }
            return a.name.localeCompare(b.name);
        });
        const filteredData = data.map((d)=>{
            const newObj = {
                ...d
            };
            newObj.name = d.name + ' [' + d.networkId.substring(0, 12) + ']';
            return newObj;
        });
        setNetworksList(filteredData);
        setTimeout(()=>{
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
        networks
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        var ref;
        let c1 = {
            ...images
        };
        if (!((ref = activeHostRef.current) === null || ref === void 0 ? void 0 : ref.id)) {
            return;
        }
        c1 = images[activeHostRef.current.id].images;
        const data = Object.keys(c1).map((key)=>c1[key]
        );
        data.sort((a, b)=>{
            if (!a.name) {
                a.name = 'Unknown';
            }
            return a.name.localeCompare(b.name);
        });
        setImagesList(data);
        setTimeout(()=>{
            // selectContainer(containerRef.current);
            if (!selectedImage) {
                setSelectedImage(data[0]);
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
    // return () => {};
    }, [
        formRefresh
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{};
    }, [
        folderRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Do unmounting stuff here
        return ()=>{
            if (socketRef.current) {
                socketRef.current.removeListener('createContainerForm');
            }
        };
    }, []);
    const clearMessages = ()=>{
    // msgs1.current.clear();
    };
    async function getImages() {
        var ref;
        if (!(activeHostRef === null || activeHostRef === void 0 ? void 0 : (ref = activeHostRef.current) === null || ref === void 0 ? void 0 : ref.id)) return;
        socketRef.current.emit('docker', {
            command: 'listImages',
            hostId: activeHostRef.current.id,
            data: {},
            callback: 'imageList'
        });
    }
    async function loadSocket() {
        if (socketLoaded) return;
        setSocketLoaded(true);
        const socket = await services_socket_service__WEBPACK_IMPORTED_MODULE_11__/* .socketService.getSocket */ .L.getSocket();
        socket.on('createContainerForm', (results)=>{
            console.debug('-----------> Save Container Result  ', results);
            setFormIsLoading(false);
            if (results.status === 'success') {
                (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_16__.confirmDialog)({
                    className: 'confirm-dialogs',
                    message: 'Would you like to view it now?',
                    header: 'Container Created',
                    icon: 'pi pi-exclamation-check',
                    accept: ()=>router.push('/containers/' + results.data.id)
                    ,
                    reject: null
                });
            }
            if (results.error) {
                setErrorMessage(results.error);
                setShowError(true);
                (0,primereact_confirmdialog__WEBPACK_IMPORTED_MODULE_16__.confirmDialog)({
                    className: 'confirm-dialogs',
                    message: results.error,
                    header: 'Container Error',
                    icon: 'pi pi-exclamation-check',
                    acceptLabel: 'Ok',
                    rejectLabel: '',
                    acceptClassName: 'p-button-danger',
                    accept: ()=>{}
                });
                if (showError) {
                // console.log('Show error');
                }
            }
        });
        setSocket(socket);
        return socket;
    }
    // form validation rules
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
        name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        project: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        image: yup__WEBPACK_IMPORTED_MODULE_5__.string()
    }).required();
    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register , handleSubmit , setValue , getValues , resetField , // reset,
    // setFocus,
    formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    });
    function onSubmit(fields) {
        var ref22, ref10;
        // console.log('Submitting');
        // console.log('Fields Data', fields);
        fields.image = imageRef.current;
        clearMessages();
        const body = {
            name: fields.name,
            Image: fields.image,
            Hostname: fields.hostname,
            Domainname: fields.domainName,
            User: fields.user,
            WorkingDir: fields.workingDir,
            Entrypoint: fields.entryPoint || '',
            Cmd: fields.cmd.filter((a)=>a !== ''
            ) || null,
            Env: [
                ''
            ],
            AttachStdin: true,
            AttachStdout: false,
            AttachStderr: true,
            Tty: false,
            OpenStdin: false,
            StdinOnce: true,
            NetworkDisabled: false,
            StopSignal: 'SIGTERM',
            StopTimeout: 10,
            Shell: '/bin/bash',
            ExposedPorts: {},
            NetworkingConfig: {
                EndpointsConfig: {}
            }
        };
        //  HostConfig > "Binds": [
        //     "/host_mnt/Users/phpfreak/Development/dockermon-sub/dockermon/dockermon-react:/app:rw"
        //   ],
        // Config > "Volumes": {
        //   "/app": {},
        //   "/app/node_modules": {}
        // },
        /* 

        "com.docker.compose.config-hash": "54223006570fe20fb8a50c01470f0266ae1190d15b4d9943ff5dc9fcbeaad18a",
        "com.docker.compose.container-number": "1",
        "com.docker.compose.depends_on": "",
        "com.docker.compose.image": "sha256:1ff23f0b11a06da418a0e2a5ca918be9e4017fd2ccc2b764ad70dd68e50250d0",
        "com.docker.compose.oneoff": "False",
        "com.docker.compose.project": "dockermon",
        "com.docker.compose.project.config_files": "/Users/phpfreak/Development/dockermon-tests/dockermon/docker-compose.yml",
        "com.docker.compose.project.working_dir": "/Users/phpfreak/Development/dockermon-tests/dockermon",
        "com.docker.compose.service": "angular-app",
        "com.docker.compose.version": "2.2.3",
        "com.docker.compose.project.working_dir"

        
    */ /*
        Networks: 
        HostConfig ->
        NetworkMode:"dockermon_elastic"
    */ body.Labels = {};
        body.Labels['com.docker.compose.project'] = fields.project;
        body.Labels['com.docker.compose.service'] = fields.name;
        body.Labels['com.docker.compose.oneoff'] = 'True';
        // body.ExposedPorts = { '3306/tcp': {}, '3000/tcp': {} };
        // body.Networks = { Aliases: [fields.name, fields.name] };
        body.HostConfig = {
            NetworkMode: 'bridge',
            Mounts: [],
            Links: [],
            Aliases: []
        };
        body.LogConfig = {
            Type: 'json-file',
            Config: {}
        };
        if (portMappingCounter > 0) {
            body.HostConfig.PortBindings = {};
            fields.PortBindings.forEach((e, i)=>{
                if (i >= portMappingCounter) return;
                if (e.portType && e.fromPort && e.toPort) {
                    const key = e.fromPort + '/' + e.portType;
                    body.HostConfig.PortBindings[key] = [
                        {
                            HostIp: '0.0.0.0',
                            HostPort: e.toPort.toString()
                        }
                    ];
                }
            });
        }
        if (exposedPortsCounter > 0) {
            body.ExposedPorts = {};
            body.HostConfig.ExposedPorts = {};
            fields.ExposedPorts.forEach((e, i)=>{
                if (i >= exposedPortsCounter) return;
                if (e.portType && e.port) {
                    const key = e.port + '/' + e.portType;
                    body.ExposedPorts[key] = {};
                }
            });
            body.HostConfig.ExposedPorts = {};
        }
        if (mountsCounter > 0) {
            body.HostConfig.Mounts = [];
            body.Volumes = {};
            fields.Mounts.forEach((e, i)=>{
                if (i >= mountsCounter) return;
                if (e.type && e.source && e.target) {
                    // /host_mnt
                    /*
             {
              "Type": "bind",
              "Source": "/host_mnt/Users/phpfreak/Development/dockermon-sub/dockermon/dockermon-react",
              "Destination": "/app",
              "Mode": "rw",
              "RW": true,
              "Propagation": "rprivate"
            }
          */ if (e.type === 'bind') {
                        const obj = {
                            Type: e.type,
                            Target: e.target,
                            Source: e.source,
                            ReadOnly: e.readonly === 'true' ? true : false
                        };
                        obj.Source = '/host_mnt/' + e.source, obj.BindOptions = {
                            Propagation: 'rprivate'
                        };
                        body.HostConfig.Mounts.push(obj);
                    }
                    if (e.type === 'volume') {
                        if (e.source === '{}') {
                            body.Volumes[e.target] = {};
                        } else {
                            const obj = {
                                Type: e.type,
                                Target: e.target,
                                Source: e.source,
                                ReadOnly: e.readonly === 'true' ? true : false
                            };
                            // (obj.Source = '/host_mnt/' + e.source), (obj.BindOptions = { Propagation: 'rprivate' });
                            body.HostConfig.Mounts.push(obj);
                        }
                    }
                }
            });
        }
        if (((ref22 = fields.EnvVars) === null || ref22 === void 0 ? void 0 : ref22.length) > 0) {
            const vars = [];
            fields.EnvVars.forEach((f, i)=>{
                if (i + 1 > envVarsCounter) return;
                if (f.key && f.value) {
                    vars.push(f.key + '=' + f.value);
                }
            });
            body.Env = vars;
        }
        body.NetworkDisabled = false;
        if (((ref10 = fields.Networks) === null || ref10 === void 0 ? void 0 : ref10.length) > 0) {
            fields.Networks.forEach((f, i)=>{
                var ref, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20, ref21;
                body.NetworkingConfig.EndpointsConfig[f.network.details.Name] = {
                    IPAMConfig: {}
                };
                if (((ref = f.settings) === null || ref === void 0 ? void 0 : ref.ipAddress) && ((ref11 = f.settings) === null || ref11 === void 0 ? void 0 : ref11.ipAddress) !== '') {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.IPv4Address = f.settings.ipAddress;
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.IPAddress = f.settings.ipAddress;
                }
                if (((ref12 = f.settings) === null || ref12 === void 0 ? void 0 : ref12.ipv6Address) && ((ref13 = f.settings) === null || ref13 === void 0 ? void 0 : ref13.ipv6Address) !== '') {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.IPv6Address = f.settings.ipv6Address;
                }
                if (((ref14 = f.settings) === null || ref14 === void 0 ? void 0 : ref14.gateway) && ((ref15 = f.settings) === null || ref15 === void 0 ? void 0 : ref15.gateway) !== '') {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.Gateway = f.settings.gateway;
                }
                if (((ref16 = f.settings) === null || ref16 === void 0 ? void 0 : ref16.macAddress) && ((ref17 = f.settings) === null || ref17 === void 0 ? void 0 : ref17.macAddress) !== '') {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.MacAddress = f.settings.macAddress;
                }
                if (((ref18 = f.settings) === null || ref18 === void 0 ? void 0 : ref18.endpointId) && ((ref19 = f.settings) === null || ref19 === void 0 ? void 0 : ref19.endpointId) !== '') {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.EndpointID = f.settings.endpointId;
                }
                if (((ref20 = f.settings) === null || ref20 === void 0 ? void 0 : ref20.networkId) && ((ref21 = f.settings) === null || ref21 === void 0 ? void 0 : ref21.networkId) !== '') {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.NetworkID = f.settings.networkId;
                }
                if (f.links && f.links.length > 0) {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.Links = [];
                    f.links.map((link, x)=>{
                        if (x + 1 > linksCounter[i]) return;
                        if (link.from && link.to && link.to !== '') {
                            body.HostConfig.Links.push(link.from + ':' + link.to);
                            body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.Links.push(link.from + ':' + link.to);
                        }
                    });
                }
                if (f.aliases && f.links.length > 0) {
                    body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.Aliases = [
                        null
                    ];
                    f.aliases.map((alias, xy)=>{
                        if (xy + 1 > aliasesCounter[i]) return;
                        if (alias !== '') {
                            body.HostConfig.Aliases.push(alias);
                            body.NetworkingConfig.EndpointsConfig[f.network.details.Name].IPAMConfig.Aliases.push(alias);
                        }
                    });
                }
            });
        }
        body.Path = '/bin/bash';
        // body.Volumes = {
        //   // '/volumes/data': {},
        // };
        // body.NetworkSettings = {
        //   Bridge: '',
        //   Ports: {
        //     '3306/tcp': [
        //       {
        //         HostIp: '0.0.0.0',
        //         HostPort: '3306',
        //       },
        //     ],
        //     '3000/tcp': [
        //       {
        //         HostIp: '0.0.0.0',
        //         HostPort: '3010',
        //       },
        //     ],
        //   },
        // };
        // "NetworkingConfig": {
        //   "EndpointsConfig": {
        //     "network_name": {
        //           "IPAMConfig":  {
        //             "IPv4Address": "172.20.30.33",
        //             "IPv6Address": "2001:db8:abcd::3033",
        //             "LinkLocalIPs": []
        //           },
        //           "Links": ["container_1","container_2"],
        //           "Aliases": ["server_x", "server_y"]
        //     }
        //   }
        // }
        // body.NetworkingConfig = {
        //   EndpointsConfig: {
        //     dockermon_elastic: {
        //       // 'IPAMConfig':  {
        //       // }
        //       // 'Links': ['mysql:mysql'],
        //       Aliases: ['swagger'],
        //     },
        //   },
        // };
        // console.log('fields', fields);
        // console.log('Form Data', body);
        setFormIsLoading(true);
        socketRef.current.emit('dockerCreateContainer', {
            command: 'createContainer',
            data: body,
            hostId: activeHostRef.current.id,
            callback: 'createContainerForm',
            hook: 'createContainer'
        });
    }
    function randomName() {
        const name = helpers_name_generator__WEBPACK_IMPORTED_MODULE_13__/* .nameGenerator.generateName */ .W.generateName();
        return name;
    }
    function selectImage(e) {
        if (imagesListRef.current) {
            const f = imagesListRef.current.filter((a)=>a.pullTag === e
            );
            setSelectedImage(f[0]);
        }
    }
    function importEnvVars() {
        var ref, ref23, ref24;
        if (!(selectedImageRef === null || selectedImageRef === void 0 ? void 0 : (ref = selectedImageRef.current) === null || ref === void 0 ? void 0 : (ref23 = ref.details) === null || ref23 === void 0 ? void 0 : (ref24 = ref23.Config) === null || ref24 === void 0 ? void 0 : ref24.Env)) return;
        const vars1 = selectedImageRef.current.details.Config.Env;
        const tmp = [];
        vars1.forEach((v)=>{
            const t = v.split('=');
            if (t[1]) {
                tmp.push({
                    key: t[0],
                    value: t[1]
                });
            }
        });
        const v1 = tmp.sort((a, b)=>{
            if (!a.key) {
                a.key = 'Unknown';
            }
            return a.key.localeCompare(b.key);
        });
        if ((v1 === null || v1 === void 0 ? void 0 : v1.length) > 0) {
            setEnvVarsCounter(v1.length + 2);
            v1.forEach((vars, i)=>{
                setValue('EnvVars.' + i, vars);
            // setValue('EnvVars.' + i + '.value', vars.value);
            });
        }
    }
    function importCmd() {
        var ref, ref25, ref26;
        if (!(selectedImageRef === null || selectedImageRef === void 0 ? void 0 : (ref = selectedImageRef.current) === null || ref === void 0 ? void 0 : (ref25 = ref.details) === null || ref25 === void 0 ? void 0 : (ref26 = ref25.Config) === null || ref26 === void 0 ? void 0 : ref26.Cmd)) return;
        const vars = selectedImageRef.current.details.Config.Cmd;
        if ((vars === null || vars === void 0 ? void 0 : vars.length) > 0) {
            setCommandsCounter(vars.length);
            vars.forEach((v, i)=>{
                setValue('cmd.' + i + '', v);
            });
        }
    }
    function importExposedPorts() {
        var ref, ref27, ref28;
        if (!(selectedImageRef === null || selectedImageRef === void 0 ? void 0 : (ref = selectedImageRef.current) === null || ref === void 0 ? void 0 : (ref27 = ref.details) === null || ref27 === void 0 ? void 0 : (ref28 = ref27.Config) === null || ref28 === void 0 ? void 0 : ref28.ExposedPorts)) return;
        const vars = selectedImageRef.current.details.Config.ExposedPorts;
        if (vars) {
            const length = Object.keys(vars).length;
            setExposedPortsCounter(length);
            setPortMappingCounter(length);
            const pSelected = [];
            Object.keys(vars).forEach((key, i)=>{
                const t = key.split('/');
                if (t.length === 2) {
                    setValue('ExposedPorts.' + i + '.port', Number(t[0]));
                    setValue('ExposedPorts.' + i + '.portType', t[1]);
                    exposedPortsPortRef.current[i] = Number(t[0]);
                    exposedPortsSelectedRef.current[i] = t[1];
                    setValue('PortBindings.' + i + '.fromPort', Number(t[0]));
                    setValue('PortBindings.' + i + '.toPort', Number(t[0]));
                    setValue('PortBindings.' + i + '.portType', t[1]);
                    pSelected.push(t[1]);
                    portBindingsFromPortsRef.current[i] = Number(t[0]);
                    portBindingsToPortsRef.current[i] = Number(t[0]);
                    i++;
                }
            });
            if (pSelected.length > 0) {
                setPortsSelected(pSelected);
            }
        }
    }
    function importVolumes() {
        var ref, ref29, ref30;
        if (!(selectedImageRef === null || selectedImageRef === void 0 ? void 0 : (ref = selectedImageRef.current) === null || ref === void 0 ? void 0 : (ref29 = ref.details) === null || ref29 === void 0 ? void 0 : (ref30 = ref29.Config) === null || ref30 === void 0 ? void 0 : ref30.Volumes)) return;
        const vars = selectedImageRef.current.details.Config.Volumes;
        if (vars) {
            const length = Object.keys(vars).length;
            setMountsCounter(length);
            const mts = {
                ...mountTypeSelectedRef.current
            };
            const mtr = {
                ...mountTypeReadOnlyRef.current
            };
            const f = getValues();
            Object.keys(vars).forEach((key, i)=>{
                if (key) {
                    setValue('Mounts..' + i + '.type', 'volume');
                    setValue('Mounts.' + i + '.target', key);
                    const t = key.replaceAll('/', '-');
                    setValue('Mounts.' + i + '.source', f.name + t);
                    mts[i] = 'volume';
                    mtr[i] = 'false';
                    i++;
                }
            });
            setMountTypeSelected(mts);
            setMountTypeReadOnly(mtr);
        }
    }
    function importImageSettings() {
        var ref;
        if (!(selectedImageRef === null || selectedImageRef === void 0 ? void 0 : (ref = selectedImageRef.current) === null || ref === void 0 ? void 0 : ref.details)) return;
        const vars = selectedImageRef.current.details;
        if (vars.Config.WorkingDir) {
            setValue('workingDir', vars.Config.WorkingDir);
        }
        if (vars.Config.Os) {
            setValue('os', vars.Config.Os);
        }
        if (vars.Config.User) {
            setValue('user', vars.Config.User);
        }
        importExposedPorts();
        importCmd();
        importEnvVars();
        importVolumes();
    }
    function setAlwaysOn() {
        setCommandsCounter(3);
        setValue('cmd.0', 'tail');
        setValue('cmd.1', '-f');
        setValue('cmd.2', '/dev/null');
    }
    const removeItemFromList = (type, item)=>{
        const f = getValues();
        const f1 = {
            ...f
        };
        switch(type){
            case 'exposedPorts':
                // eslint-disable-next-line no-case-declarations
                const newTypes = {};
                const newPorts = {};
                resetField('ExposedPorts');
                let newIndex = 0;
                Object.keys(f1.ExposedPorts).map((k)=>{
                    const key = Number(k);
                    if (key !== item) {
                        const e = f1.ExposedPorts[key];
                        setValue('ExposedPorts.' + newIndex, {
                            port: e.port,
                            portType: e.portType
                        });
                        newTypes[newIndex] = e.portType;
                        newPorts[newIndex] = e.port;
                        newIndex++;
                    }
                });
                exposedPortsPortRef.current = newPorts;
                exposedPortsSelectedRef.current = newTypes;
                setFormRefresh(true);
                setExposedPortsCounter(newIndex);
                break;
            case 'portBindings':
                // eslint-disable-next-line no-case-declarations
                const newPortTypes = {};
                const newFromPorts = {};
                const newToPorts = {};
                resetField('PortBindings');
                let newBindingsIndex = 0;
                Object.keys(f1.PortBindings).map((k)=>{
                    const key = Number(k);
                    if (key !== item) {
                        const e = f1.PortBindings[key];
                        setValue('PortBindings.' + newBindingsIndex, e);
                        newPortTypes[newBindingsIndex] = e.portType;
                        newFromPorts[newBindingsIndex] = e.fromPort;
                        newToPorts[newBindingsIndex] = e.toPort;
                        newBindingsIndex++;
                    }
                });
                setPortBindingsFromPorts(newFromPorts);
                setPortBindingsToPorts(newToPorts);
                setPortsSelected(newPortTypes);
                setFormRefresh(true);
                setPortMappingCounter(newBindingsIndex);
                break;
            case 'mounts':
                // eslint-disable-next-line no-case-declarations
                const newMountsReadonly = {};
                const newMountTypes = {};
                resetField('Mounts');
                let volumeIndex = 0;
                Object.keys(f1.Mounts).map((k)=>{
                    const key = Number(k);
                    if (key !== item) {
                        const e = f1.Mounts[key];
                        setValue('Mounts.' + volumeIndex, e);
                        newMountsReadonly[newIndex] = e.readonly;
                        newMountTypes[newIndex] = e.type;
                        volumeIndex++;
                    }
                });
                mountTypeReadOnlyRef.current = newMountsReadonly;
                mountTypeSelectedRef.current = newMountTypes;
                setFormRefresh(true);
                setMountsCounter(volumeIndex);
                break;
            case 'environmentVariables':
                // eslint-disable-next-line no-case-declarations
                resetField('EnvVars');
                let envVarsIndex = 0;
                Object.keys(f1.EnvVars).map((k)=>{
                    const key = Number(k);
                    if (key !== item) {
                        const e = f1.EnvVars[key];
                        setValue('EnvVars.' + envVarsIndex, e);
                        envVarsIndex++;
                    }
                });
                // mountTypeReadOnlyRef.current = newMountsReadonly;
                // mountTypeSelectedRef.current = newMountTypes;
                setFormRefresh(true);
                setEnvVarsCounter(envVarsIndex);
                break;
        }
    };
    const toggleAllPanels = ()=>{
        // setShowHostSettings(false);
        //showRunCommand.current = false;
        setRefreshPanels(true);
        setShowRunCommand(!showRunCommand);
        setShowExposedPorts(!showExposedPorts);
        setShowHostSettings(!showHostSettings);
        setShowPortBindings(!showPortBindings);
        setShowNetworks(!showNetworks);
        setShowMounts(!showMounts);
        setShowEnvironmentVariables(!showEnvironmentVariables);
        setTimeout(()=>{
            setRefreshPanels(false);
        }, 10);
    };
    const setNetworkOptions = ()=>{
        var ref, ref31, ref32, ref33, ref34, ref35, ref36, ref37;
        const tmp = {
            ...networkSettings
        };
        if (((ref = networkRef.current) === null || ref === void 0 ? void 0 : (ref31 = ref.details) === null || ref31 === void 0 ? void 0 : (ref32 = ref31.IPAM) === null || ref32 === void 0 ? void 0 : ref32.Config) && ((ref33 = networkRef.current) === null || ref33 === void 0 ? void 0 : (ref34 = ref33.details) === null || ref34 === void 0 ? void 0 : (ref35 = ref34.IPAM) === null || ref35 === void 0 ? void 0 : ref35.Config.length) > 0) {
            tmp.gateway = networkRef.current.details.IPAM.Config[0].Gateway;
        } else {
            tmp.gateway = '';
        }
        if (((ref36 = networkRef.current) === null || ref36 === void 0 ? void 0 : (ref37 = ref36.containers) === null || ref37 === void 0 ? void 0 : ref37.length) > 0) {
            const c1 = networkRef.current.containers.map((c)=>{
                return {
                    name: c.name,
                    networkId: networkRef.current.networkId,
                    id: c.id,
                    containerId: c.containerId
                };
            });
            setNetworkContainersList(c1);
        }
        setNetworkSettings(tmp);
    };
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Spinner__WEBPACK_IMPORTED_MODULE_1__/* .Spinner */ .$, {}));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Create Container"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                        className: "col-12 md:col-11 lg:col-8 m-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    onSubmit: handleSubmit(onSubmit),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-fluid p-formgrid p-grid mt-5 ml-auto mr-auto jc-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                className: "form-panel mt-3",
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
                                                                    children: "Container Name"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "p-inputgroup",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                            id: "name",
                                                                            keyfilter: /^[^<>*!\s]+$/,
                                                                            name: "name",
                                                                            type: "text",
                                                                            required: true,
                                                                            ...register('name', {
                                                                                value: randomName()
                                                                            }),
                                                                            disabled: formIsLoadingRef.current,
                                                                            className: `form-control f-height-inputs ${errors.name ? 'p-invalid' : ''}`
                                                                        }, "name"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "p-inputgroup-addon",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                className: "p-button p-button-secondary",
                                                                                disabled: formIsLoadingRef.current,
                                                                                onClick: (e)=>{
                                                                                    e.preventDefault();
                                                                                    const newName = randomName();
                                                                                    setValue('name', newName);
                                                                                },
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeIcon, {
                                                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faArrowRightArrowLeft
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: (ref9 = errors.name) === null || ref9 === void 0 ? void 0 : ref9.message
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
                                                                    children: "Project"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                    id: "project",
                                                                    name: "project",
                                                                    type: "text",
                                                                    ...register('project', {
                                                                        value: 'test-project'
                                                                    }),
                                                                    disabled: formIsLoadingRef.current,
                                                                    className: `form-control f-height-inputs ${errors.project ? 'p-invalid' : ''}`
                                                                }, "foo1"),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "invalid-feedback",
                                                                    children: (ref1 = errors.project) === null || ref1 === void 0 ? void 0 : ref1.message
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
                                                                    children: "Image"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "p-inputgroup",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
                                                                            //   keyfilter={/^[^<>*!\s]+$/}
                                                                            name: "image",
                                                                            id: "image",
                                                                            options: imagesList,
                                                                            optionValue: "pullTag",
                                                                            optionLabel: "pullTag",
                                                                            value: refImage,
                                                                            filter: true,
                                                                            showClear: true,
                                                                            filterBy: "name",
                                                                            placeholder: "Select a Docker Image",
                                                                            disabled: formIsLoadingRef.current,
                                                                            ...register('image', {
                                                                                value: 'alpline:latest'
                                                                            }),
                                                                            onChange: (e)=>{
                                                                                setRefImage(e.value);
                                                                                selectImage(e.value);
                                                                            },
                                                                            className: `form-control f-height-inputs ${errors.image ? 'p-invalid' : ''}`
                                                                        }, "foo1"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "invalid-feedback",
                                                                            children: (ref2 = errors.image) === null || ref2 === void 0 ? void 0 : ref2.message
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                            className: "p-button p-button-secondary mt-0",
                                                                            icon: "fa fa-faw fa-eye",
                                                                            disabled: formIsLoadingRef.current,
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                setShowImageDialog(!showImageDialog);
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-6 md:col-8 lg:col-6 mt-6 m-auto",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                        className: "p-button p-button-primary mt-0",
                                                                        label: "Import Settings From Image",
                                                                        disabled: formIsLoadingRef.current,
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            importImageSettings();
                                                                        }
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            !refreshPanels && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 flex justify-content-end flex-wrap",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex align-items-center justify-content-center",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                type: "button",
                                                                className: "p-button p-button-info",
                                                                disabled: formIsLoadingRef.current,
                                                                onClick: (e)=>{
                                                                    toggleAllPanels();
                                                                    e.preventDefault();
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeIcon, {
                                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faArrowUp
                                                                    }),
                                                                    " Toggle All Panels"
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                        className: "form-panel mt-3 mt-5",
                                                        header: "Run Command",
                                                        toggleable: true,
                                                        collapsed: !showRunCommand,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12 flex justify-content-end flex-wrap",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flex align-items-center justify-content-center",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                        tooltip: "A trick to set Always on. Theres probably a better way.",
                                                                        className: "p-button p-button-primary",
                                                                        disabled: formIsLoadingRef.current,
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            setAlwaysOn();
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeIcon, {
                                                                                className: "mr-3",
                                                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faPowerOff
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Always On"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "grid col-12 jusitify-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "col-10 ml-0 m-auto grid",
                                                                            children: [
                                                                                ...Array(commandsCounter)
                                                                            ].map((e, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "col-6",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                        type: "text",
                                                                                        placeholder: "",
                                                                                        ...register('cmd.' + i),
                                                                                        disabled: formIsLoadingRef.current,
                                                                                        className: "form-control f-height-inputs"
                                                                                    }, 'cmd' + i)
                                                                                }, 'cmd_ct' + i)
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
                                                                                        disabled: formIsLoadingRef.current,
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                            setCommandsCounter(commandsCounter + 1);
                                                                                        }
                                                                                    }),
                                                                                    commandsCounter > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                className: "p-button p-button-secondary mt-2",
                                                                                                icon: "fa fa-faw fa-minus",
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                onClick: (e)=>{
                                                                                                    e.preventDefault();
                                                                                                    setCommandsCounter(commandsCounter - 1);
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
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                        className: "form-panel mt-3 mt-5",
                                                        header: "Host Settings",
                                                        collapsed: !showHostSettings,
                                                        toggleable: true,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group col-12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "p-field mt-2 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: "name",
                                                                            children: "Host Name"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                            keyfilter: /^[^<>*!\s]+$/,
                                                                            type: "text",
                                                                            ...register('hostname', {
                                                                                value: ''
                                                                            }),
                                                                            disabled: formIsLoadingRef.current,
                                                                            className: `form-control f-height-inputs ${errors.hostname ? 'p-invalid' : ''}`
                                                                        }, "hostname"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "invalid-feedback",
                                                                            children: (ref3 = errors.hostname) === null || ref3 === void 0 ? void 0 : ref3.message
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group col-12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "p-field mt-2 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: "domainName",
                                                                            children: "Domain Name"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                            keyfilter: /^[^<>*!\s]+$/,
                                                                            type: "text",
                                                                            ...register('domainName', {
                                                                                value: ''
                                                                            }),
                                                                            disabled: formIsLoadingRef.current,
                                                                            className: `form-control f-height-inputs ${errors.domainName ? 'p-invalid' : ''}`
                                                                        }, "domainName"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "invalid-feedback",
                                                                            children: (ref4 = errors.domainName) === null || ref4 === void 0 ? void 0 : ref4.message
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group col-12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "p-field mt-2 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: "userName",
                                                                            children: "User"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                            keyfilter: /^[^<>*!\s]+$/,
                                                                            type: "text",
                                                                            ...register('user', {
                                                                                value: ''
                                                                            }),
                                                                            disabled: formIsLoadingRef.current,
                                                                            className: `form-control f-height-inputs ${errors.user ? 'p-invalid' : ''}`
                                                                        }, "userName"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "invalid-feedback",
                                                                            children: (ref5 = errors.user) === null || ref5 === void 0 ? void 0 : ref5.message
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group col-12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "p-field mt-2 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: "entryPoint",
                                                                            children: "Entry Point"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                            type: "text",
                                                                            ...register('entryPoint', {
                                                                                value: ''
                                                                            }),
                                                                            disabled: formIsLoadingRef.current,
                                                                            className: `form-control f-height-inputs ${errors.entryPoint ? 'p-invalid' : ''}`
                                                                        }, "entryPoint"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "invalid-feedback",
                                                                            children: (ref6 = errors.entryPoint) === null || ref6 === void 0 ? void 0 : ref6.message
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "form-group col-12",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "p-field mt-2 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: "userName",
                                                                            children: "Working Directory"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                            type: "text",
                                                                            ...register('workingDir', {
                                                                                value: ''
                                                                            }),
                                                                            disabled: formIsLoadingRef.current,
                                                                            className: `form-control f-height-inputs ${errors.workingDir ? 'p-invalid' : ''}`
                                                                        }, "workingDir"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "invalid-feedback",
                                                                            children: (ref7 = errors.workingDir) === null || ref7 === void 0 ? void 0 : ref7.message
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                        className: "form-panel mt-3 mt-5",
                                                        header: "Volumes and Mounts",
                                                        collapsed: !showMounts,
                                                        toggleable: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "grid col-12 jusitify-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-11 ml-0 m-auto grid",
                                                                        children: [
                                                                            ...Array(mountsCounter)
                                                                        ].map((e1, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "col-12 p-shadow-3 grid",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-2 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "mounts",
                                                                                                children: "Mount Type"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
                                                                                                options: mountTypes,
                                                                                                optionLabel: "label",
                                                                                                optionValue: "label",
                                                                                                value: mountTypeSelectedRef.current[i],
                                                                                                ...register('Mounts.' + i + '.type', {
                                                                                                    value: 'bind'
                                                                                                }),
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                onChange: (e)=>{
                                                                                                    const selected = {
                                                                                                        ...mountTypeSelectedRef.current
                                                                                                    };
                                                                                                    selected[i] = e.value;
                                                                                                    setMountTypeSelected(selected);
                                                                                                    setValue('Mounts.' + i + '.type', e.value);
                                                                                                },
                                                                                                // className={`form-control f-height-inputs ${errors.PortBindings[0].value} ? 'p-invalid' : ''}`}
                                                                                                className: "form-control f-height-inputs pt-2 pb-2"
                                                                                            }, 'mounts_ct_types' + i)
                                                                                        ]
                                                                                    }, 'mounts_ct3' + i),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-2 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "mounts",
                                                                                                children: "Read Only"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
                                                                                                options: mountTypesReadOnly,
                                                                                                optionLabel: "label",
                                                                                                optionValue: "label",
                                                                                                value: mountTypeReadOnlyRef.current[i],
                                                                                                ...register('Mounts.' + i + '.readonly', {
                                                                                                    value: 'false'
                                                                                                }),
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                onChange: (e)=>{
                                                                                                    const selected = {
                                                                                                        ...mountTypeReadOnlyRef.current
                                                                                                    };
                                                                                                    selected[i] = e.value;
                                                                                                    setMountTypeReadOnly(selected);
                                                                                                    setValue('Mounts.' + i + '.readonly', e.value);
                                                                                                },
                                                                                                // className={`form-control f-height-inputs ${errors.PortBindings[0].value} ? 'p-invalid' : ''}`}
                                                                                                className: "form-control f-height-inputs pt-2 pb-2"
                                                                                            }, 'mounts_ct_typesro' + i)
                                                                                        ]
                                                                                    }, 'mounts_ct333' + i),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-4 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "fromPoint",
                                                                                                children: "Host Location or Volume Name"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                className: "p-inputgroup",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                    placeholder: "Full Path on Host /path/to",
                                                                                                    ...register('Mounts.' + i + '.source', {
                                                                                                        value: null
                                                                                                    }),
                                                                                                    disabled: formIsLoadingRef.current,
                                                                                                    className: "form-control f-height-inputs"
                                                                                                }, 'mounts_ct_toS3333rc' + i)
                                                                                            })
                                                                                        ]
                                                                                    }, 'mounts_ct34' + i),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-3 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "mountSrc",
                                                                                                children: "Container Location"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                placeholder: "Container Location /path/to",
                                                                                                ...register('Mounts.' + i + '.target', {
                                                                                                    value: ''
                                                                                                }),
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                className: "form-control f-height-inputs"
                                                                                            }, 'mounts_ct_hostport' + i)
                                                                                        ]
                                                                                    }, 'mount_ct323' + i),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-1 field",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-5",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            tooltip: "Remove this Mount",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                removeItemFromList('mounts', i);
                                                                                            }
                                                                                        })
                                                                                    }, 'exposedports44_c33t34' + i)
                                                                                ]
                                                                            }, 'mounts22_ct' + i)
                                                                        )
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-1",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "p-input-group-addon",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                    className: "p-button p-button-secondary mt-2",
                                                                                    icon: "fa fa-faw fa-plus",
                                                                                    disabled: formIsLoadingRef.current,
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        setMountsCounter(mountsCounter + 1);
                                                                                    }
                                                                                }),
                                                                                mountsCounter > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-2",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                setMountsCounter(mountsCounter - 1);
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                        className: "form-panel mt-3 mt-5",
                                                        header: "Networks",
                                                        collapsed: !showNetworks,
                                                        toggleable: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "col-12",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "p-inputgroup",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "p-inputgroup-addon",
                                                                                children: "Join Networks:"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_multiselect__WEBPACK_IMPORTED_MODULE_19__.MultiSelect, {
                                                                                //   keyfilter={/^[^<>*!\s]+$/}
                                                                                name: "networks",
                                                                                id: "networks",
                                                                                options: networksList,
                                                                                optionLabel: "name",
                                                                                filter: true,
                                                                                filterBy: "name",
                                                                                showClear: true,
                                                                                value: selectedNetworksRef === null || selectedNetworksRef === void 0 ? void 0 : selectedNetworksRef.current,
                                                                                placeholder: "Select Networks to Connect",
                                                                                ...register('networks'),
                                                                                disabled: formIsLoadingRef.current,
                                                                                onChange: (e)=>{
                                                                                    setSelectedNetworks(e.value);
                                                                                // setValue('network', e.value);
                                                                                },
                                                                                className: `multiselect-clearfix pl-2 pt-2 pb-2 form-control f-height-inputs ${errors.networks ? 'p-invalid' : ''}`
                                                                            }, "networks"),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "invalid-feedback",
                                                                                children: (ref8 = errors.networks) === null || ref8 === void 0 ? void 0 : ref8.message
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                (selectedNetworks === null || selectedNetworks === void 0 ? void 0 : selectedNetworks.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "col-12 mt-2",
                                                                    children: selectedNetworks.map((n, i)=>{
                                                                        var ref42, ref38, ref39, ref40;
                                                                        const nSettings = {
                                                                            ...networkSettings
                                                                        };
                                                                        nSettings[i] = {
                                                                            gateway: ''
                                                                        };
                                                                        if (((ref42 = n.details) === null || ref42 === void 0 ? void 0 : (ref38 = ref42.IPAM) === null || ref38 === void 0 ? void 0 : ref38.Config) && ((ref39 = n.details) === null || ref39 === void 0 ? void 0 : (ref40 = ref39.IPAM) === null || ref40 === void 0 ? void 0 : ref40.Config.length) > 0) {
                                                                            nSettings[i].gateway = n.details.IPAM.Config[0].Gateway;
                                                                        }
                                                                        if (!linksCounter[i]) {
                                                                            linksCounter[i] = 1;
                                                                        }
                                                                        if (!aliasesCounter[i]) {
                                                                            aliasesCounter[i] = 1;
                                                                        }
                                                                        register('Networks.' + i + '.network', {
                                                                            value: n
                                                                        });
                                                                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "col-12 grid pl-2 pr-0 ml-0 mr-0 mt-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "col-9 surface-0 p-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                            children: n.name
                                                                                        }),
                                                                                        showAdvanced[n.id] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "col-12",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                    className: "mb-2",
                                                                                                    children: "Network Settings"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                        className: "form-group",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",
                                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                                    className: "p-inputgroup",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                            className: "p-inputgroup-addon col-2",
                                                                                                                            children: "IPv4 Address:"
                                                                                                                        }),
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                                            id: "ip4Gateway",
                                                                                                                            //   keyfilter={/^[^<>*!\s]+$/}
                                                                                                                            name: "ipAddress",
                                                                                                                            type: "text",
                                                                                                                            // value={networkSettings[i]?.ipAddress}
                                                                                                                            placeholder: "IPv4 Address",
                                                                                                                            ...register('Networks.' + i + '.settings.ipAddress'),
                                                                                                                            disabled: formIsLoadingRef.current,
                                                                                                                            onChange: (e)=>{
                                                                                                                                const b = {
                                                                                                                                    ...networkSettings
                                                                                                                                };
                                                                                                                                if (!b[i]) b[i] = {};
                                                                                                                                b[i].ipAddress = e.value;
                                                                                                                                setNetworkSettings(b);
                                                                                                                            // setValue('Networks.' + i + '.settings.ipAddress', e.value);
                                                                                                                            },
                                                                                                                            className: "form-control f-height-inputs pt-2 pb-2"
                                                                                                                        }, 'labipv4_ct1' + i)
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
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                                            id: "gateway",
                                                                                                                            //   keyfilter={/^[^<>*!\s]+$/}
                                                                                                                            name: "gateway",
                                                                                                                            type: "text",
                                                                                                                            placeholder: "IPv4 Gateway",
                                                                                                                            ...register('Networks.' + i + '.settings.gateway', {
                                                                                                                                value: nSettings[i].gateway
                                                                                                                            }),
                                                                                                                            disabled: formIsLoadingRef.current,
                                                                                                                            onChange: (e)=>{
                                                                                                                                const b = {
                                                                                                                                    ...networkSettings
                                                                                                                                };
                                                                                                                                if (!b[i]) b[i] = {};
                                                                                                                                b[i].gateway = e.value;
                                                                                                                                setNetworkSettings(b);
                                                                                                                            // setValue('Networks.' + i + '.settings.gateway', e.value);
                                                                                                                            },
                                                                                                                            className: "form-control f-height-inputs pt-2 pb-2"
                                                                                                                        }, 'lab33234432_ct1' + i)
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
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                                            id: "macAddress",
                                                                                                                            //   keyfilter={/^[^<>*!\s]+$/}
                                                                                                                            name: "macAddress",
                                                                                                                            type: "text",
                                                                                                                            placeholder: "Mac Address",
                                                                                                                            ...register('Networks.' + i + '.settings.macAddress', {
                                                                                                                                value: null
                                                                                                                            }),
                                                                                                                            disabled: formIsLoadingRef.current,
                                                                                                                            onChange: (e)=>{
                                                                                                                                const b = {
                                                                                                                                    ...networkSettings
                                                                                                                                };
                                                                                                                                if (!b[i]) b[i] = {};
                                                                                                                                b[i].gateway = e.value;
                                                                                                                                setNetworkSettings(b);
                                                                                                                            // setValue('Networks.' + i + '.settings.macAddress', e.value);
                                                                                                                            },
                                                                                                                            className: "form-control f-height-inputs pt-2 pb-2"
                                                                                                                        }, 'lab34432_ct3331' + i)
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
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                                            id: "networkId",
                                                                                                                            //   keyfilter={/^[^<>*!\s]+$/}
                                                                                                                            name: "networkId",
                                                                                                                            type: "text",
                                                                                                                            disabled: formIsLoadingRef.current,
                                                                                                                            placeholder: "Network ID",
                                                                                                                            ...register('Networks.' + i + '.settings.networkId', {
                                                                                                                                value: null
                                                                                                                            }),
                                                                                                                            onChange: (e)=>{
                                                                                                                                const b = {
                                                                                                                                    ...networkSettings
                                                                                                                                };
                                                                                                                                if (!b[i]) b[i] = {};
                                                                                                                                b[i].networkId = e.value;
                                                                                                                                setNetworkSettings(b);
                                                                                                                            // setValue('Networks.' + i + '.settings.networkId', e.value);
                                                                                                                            },
                                                                                                                            className: "form-control f-height-inputs pt-2 pb-2"
                                                                                                                        }, 'lab34432_ct1' + i)
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
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                                            id: "endpointID",
                                                                                                                            //   keyfilter={/^[^<>*!\s]+$/}
                                                                                                                            name: "endpointID",
                                                                                                                            type: "text",
                                                                                                                            placeholder: "Endpoint ID",
                                                                                                                            ...register('Networks.' + i + '.settings.endpointId', {
                                                                                                                                value: null
                                                                                                                            }),
                                                                                                                            disabled: formIsLoadingRef.current,
                                                                                                                            onChange: (e)=>{
                                                                                                                                const b = {
                                                                                                                                    ...networkSettings
                                                                                                                                };
                                                                                                                                if (!b[i]) b[i] = {};
                                                                                                                                b[i].gateway = e.value;
                                                                                                                                setNetworkSettings(b);
                                                                                                                            // setValue('Networks.' + i + '.settings.endpointId', e.value);
                                                                                                                            },
                                                                                                                            className: "form-control f-height-inputs pt-2 pb-2"
                                                                                                                        }, 'labels3333423_ct1' + i)
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
                                                                                            ]
                                                                                        }),
                                                                                        showAdvanced[n.id] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "col-12 pl-2 pr-2 mt-4 ml-0 mr-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                    className: "mb-2 ml-2",
                                                                                                    children: "Links"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                        className: "col-12 grid m-0 p-0",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "col-5 ml-0 mr-0 pl-0 pr-0",
                                                                                                                children: [
                                                                                                                    ...Array(linksCounter[i])
                                                                                                                ].map((e2, li)=>{
                                                                                                                    var ref, ref41;
                                                                                                                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                        className: "col-12 p-shadow-3 p-0",
                                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                            className: "col-12 field",
                                                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                                                className: "p-inputgroup",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                                        className: "p-inputgroup-addon col-2",
                                                                                                                                        children: "Link:"
                                                                                                                                    }),
                                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
                                                                                                                                        options: n.containers,
                                                                                                                                        optionLabel: "name",
                                                                                                                                        optionValue: "name",
                                                                                                                                        ...register('Networks.' + i + '.links.' + li + '.from'),
                                                                                                                                        disabled: formIsLoadingRef.current,
                                                                                                                                        value: (ref41 = (ref = containerLinksSelected[i]) === null || ref === void 0 ? void 0 : ref.links[li]) === null || ref41 === void 0 ? void 0 : ref41.from,
                                                                                                                                        onChange: (e)=>{
                                                                                                                                            let b = {
                                                                                                                                                ...containerLinksSelected
                                                                                                                                            };
                                                                                                                                            if (!b[i]) b[i] = {};
                                                                                                                                            if (!b[i].links) b[i].links = {};
                                                                                                                                            if (!b[i].links[li]) b[i].links[li] = {
                                                                                                                                                from: null,
                                                                                                                                                to: null
                                                                                                                                            };
                                                                                                                                            b[i].links[li].from = e.value;
                                                                                                                                            // setNetworkSettings(b);
                                                                                                                                            setContainerLinksSelected(b);
                                                                                                                                            setValue('Networks.' + i + '.links.' + li + '.from', e.value);
                                                                                                                                        },
                                                                                                                                        // className={`form-control f-height-inputs ${errors.PortBindings[0].value} ? 'p-invalid' : ''}`}
                                                                                                                                        className: "form-control f-height-inputs pt-2 pb-2"
                                                                                                                                    }, 'mount2234s_ct_types' + li)
                                                                                                                                ]
                                                                                                                            })
                                                                                                                        }, 'linksVar234s_ct_value34' + li)
                                                                                                                    }, 'linkss432Vars_ct_value_x' + li);
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "col-5 ml-0 m-auto p-0",
                                                                                                                children: [
                                                                                                                    ...Array(linksCounter[i])
                                                                                                                ].map((e, ai)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                                                        ...register('Networks.' + i + '.links.' + ai + '.to'),
                                                                                                                                        className: "form-control f-height-inputs pt-2 pb-2",
                                                                                                                                        disabled: formIsLoadingRef.current
                                                                                                                                    }, 'labels3423_ct1' + ai)
                                                                                                                                ]
                                                                                                                            })
                                                                                                                        }, 'labelsVars_ct_value34' + ai)
                                                                                                                    }, 'labelsVars_ct_value_x' + ai)
                                                                                                                )
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "col-1 text-right p-0",
                                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                    className: "p-input-group-addon",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                                            className: "p-button p-button-secondary mt-2",
                                                                                                                            icon: "fa fa-faw fa-plus",
                                                                                                                            disabled: formIsLoadingRef.current,
                                                                                                                            onClick: (e)=>{
                                                                                                                                const l = {
                                                                                                                                    ...linksCounterRef.current
                                                                                                                                };
                                                                                                                                l[i]++;
                                                                                                                                e.preventDefault();
                                                                                                                                setLinksCounter(l);
                                                                                                                            }
                                                                                                                        }),
                                                                                                                        linksCounter[i] > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                                                    className: "p-button p-button-secondary mt-2",
                                                                                                                                    icon: "fa fa-faw fa-minus",
                                                                                                                                    disabled: formIsLoadingRef.current,
                                                                                                                                    onClick: (e)=>{
                                                                                                                                        const l = {
                                                                                                                                            ...linksCounterRef.current
                                                                                                                                        };
                                                                                                                                        if (l[i] > 0) l[i]--;
                                                                                                                                        e.preventDefault();
                                                                                                                                        setLinksCounter(l);
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
                                                                                            ]
                                                                                        }),
                                                                                        showAdvanced[n.id] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "col-12 pl-2 pr-2 mt-4 ml-0 mr-0",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                    className: "mb-2 ml-2",
                                                                                                    children: "Aliases"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                        className: "col-12 grid m-0 p-0",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "col-5 ml-0 m-auto p-0",
                                                                                                                children: [
                                                                                                                    ...Array(aliasesCounter[i])
                                                                                                                ].map((e, ali)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                                                        ...register('Networks.' + i + '.aliases.' + ali),
                                                                                                                                        disabled: formIsLoadingRef.current,
                                                                                                                                        className: "form-control f-height-inputs pt-2 pb-2"
                                                                                                                                    }, 'labe333ls_ct1' + ali)
                                                                                                                                ]
                                                                                                                            })
                                                                                                                        }, 'labelsVa33rs_ct_value34' + ali)
                                                                                                                    }, 'labels34Vars_ct_value_x' + ali)
                                                                                                                )
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                                className: "col-1 text-right p-0",
                                                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                                    className: "p-input-group-addon",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                                            className: "p-button p-button-secondary mt-2",
                                                                                                                            icon: "fa fa-faw fa-plus",
                                                                                                                            disabled: formIsLoadingRef.current,
                                                                                                                            onClick: (e)=>{
                                                                                                                                const l = {
                                                                                                                                    ...aliasesCounterRef.current
                                                                                                                                };
                                                                                                                                l[i]++;
                                                                                                                                e.preventDefault();
                                                                                                                                setAliasesCounter(l);
                                                                                                                            }
                                                                                                                        }),
                                                                                                                        aliasesCounter[i] > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                                                    className: "p-button p-button-secondary mt-2",
                                                                                                                                    icon: "fa fa-faw fa-minus",
                                                                                                                                    disabled: formIsLoadingRef.current,
                                                                                                                                    onClick: (e)=>{
                                                                                                                                        const l = {
                                                                                                                                            ...aliasesCounterRef.current
                                                                                                                                        };
                                                                                                                                        if (l[i] > 0) l[i]--;
                                                                                                                                        e.preventDefault();
                                                                                                                                        setLinksCounter(l);
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
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: "col-3 text-right justify-content-right",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "p-inputgroup",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "p-inputgroup-addon",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                    className: showNetworkHelp[n.id] ? 'pl-1 pr-1 p-button p-button-primary' : 'pl-1 pr-1 p-button p-button-info',
                                                                                                    disabled: !showAdvanced[n.id] || formIsLoadingRef.current,
                                                                                                    onClick: (e)=>{
                                                                                                        e.preventDefault();
                                                                                                        const show = {
                                                                                                            ...showNetworkHelp
                                                                                                        };
                                                                                                        show[n.id] = !show[n.id];
                                                                                                        setShowNetworkHelp(show);
                                                                                                    // toggleHelp();
                                                                                                    },
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeIcon, {
                                                                                                        className: "text-xl",
                                                                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__.faQuestionCircle
                                                                                                    })
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "p-inputgroup-addon",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                    className: "p-button p-button-secondary mt-0",
                                                                                                    icon: "fa fa-faw fa-eye",
                                                                                                    onClick: (e)=>{
                                                                                                        e.preventDefault();
                                                                                                        setShowNetworkDialog(!showNetworkDialog);
                                                                                                        setSelectedNetwork(n);
                                                                                                    }
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "p-inputgroup-addon",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                                    className: "p-button p-button-primary p-2 height-100",
                                                                                                    type: "button",
                                                                                                    icon: !showAdvanced[n.id] ? 'fa fa-edit ' : 'fa fa-minus',
                                                                                                    label: "Advanced",
                                                                                                    disabled: formIsLoadingRef.current,
                                                                                                    onClick: ()=>{
                                                                                                        const show = {
                                                                                                            ...showAdvanced
                                                                                                        };
                                                                                                        show[n.id] = !show[n.id];
                                                                                                        setShowAdvanced(show);
                                                                                                    }
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }, i + 'networkMap'));
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                        className: "form-panel mt-3 mt-5",
                                                        header: "Exposed Ports",
                                                        collapsed: !showExposedPorts,
                                                        toggleable: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "grid col-12 jusitify-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-11 ml-0 m-auto grid",
                                                                        children: [
                                                                            ...Array(exposedPortsCounter)
                                                                        ].map((e3, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "col-12 p-shadow-3 grid",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-4 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "project",
                                                                                                children: "Port Type"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
                                                                                                options: portTypes,
                                                                                                optionLabel: "label",
                                                                                                optionValue: "label",
                                                                                                value: exposedPortsSelectedRef.current[i],
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                ...register('ExposedPorts.' + i + '.portType', {
                                                                                                    value: 'tcp'
                                                                                                }),
                                                                                                onChange: (e)=>{
                                                                                                    const selected = {
                                                                                                        ...exposedPortsSelectedRef.current
                                                                                                    };
                                                                                                    selected[i] = e.value;
                                                                                                    setExposedPortsSelected(selected);
                                                                                                // setValue('ExposedPorts.' + i + '.portType', e.value);
                                                                                                },
                                                                                                // className={`form-control f-height-inputs ${errors.PortBindings[0].value} ? 'p-invalid' : ''}`}
                                                                                                className: "form-control f-height-inputs pt-2 pb-2"
                                                                                            }, 'ports_ct_t3ypes' + i)
                                                                                        ]
                                                                                    }, 'exposedports_ct2d3' + i),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-5 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "project",
                                                                                                children: "Container Port"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, {
                                                                                                min: 0,
                                                                                                inputId: 'ExposedPorts.' + i + '.port',
                                                                                                max: 10000000,
                                                                                                placeholder: "Exposed Port",
                                                                                                step: 1,
                                                                                                useGrouping: false,
                                                                                                showButtons: false,
                                                                                                value: exposedPortsPortRef.current[i],
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                ...register('ExposedPorts.' + i + '.port', {
                                                                                                    value: 3000
                                                                                                }),
                                                                                                className: "form-control f-height-inputs",
                                                                                                onChange: (e)=>{
                                                                                                    const selected = {
                                                                                                        ...exposedPortsPortRef.current
                                                                                                    };
                                                                                                    selected[i] = e.value;
                                                                                                    setExposedPortsPort(selected);
                                                                                                // setValue('ExposedPorts.' + i + '.port', e.value);
                                                                                                }
                                                                                            }, 'exposedports_dct_toPorts' + i)
                                                                                        ]
                                                                                    }, 'exposedports_c33t34' + i),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-1 field",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-5",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            tooltip: "Remove this port",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                removeItemFromList('exposedPorts', i);
                                                                                            }
                                                                                        })
                                                                                    }, 'exposedports44_c33t34' + i)
                                                                                ]
                                                                            }, 'exposedports_c34t' + i)
                                                                        )
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-1",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "p-input-group-addon",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                    className: "p-button p-button-secondary mt-2",
                                                                                    icon: "fa fa-faw fa-plus",
                                                                                    disabled: formIsLoadingRef.current,
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        setExposedPortsCounter(exposedPortsCounter + 1);
                                                                                    }
                                                                                }),
                                                                                exposedPortsCounter > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-2",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                setExposedPortsCounter(exposedPortsCounter - 1);
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                        className: "form-panel mt-3 mt-5",
                                                        header: "Port Bindings (Forwarding)",
                                                        collapsed: !showPortBindings,
                                                        toggleable: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "grid col-12 jusitify-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-11 ml-0 m-auto grid",
                                                                        children: [
                                                                            ...Array(portMappingCounter)
                                                                        ].map((e4, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "col-12 p-shadow-3 grid",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-3 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "project",
                                                                                                children: "Port Type"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
                                                                                                options: portTypes,
                                                                                                optionLabel: "label",
                                                                                                optionValue: "label",
                                                                                                value: portsSelectedRef.current[i],
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                ...register('PortBindings.' + i + '.portType', {
                                                                                                    value: 'tcp'
                                                                                                }),
                                                                                                onChange: (e)=>{
                                                                                                    const selected = {
                                                                                                        ...portsSelectedRef.current
                                                                                                    };
                                                                                                    selected[i] = e.value;
                                                                                                    setPortsSelected(selected);
                                                                                                    setValue('PortBindings.' + i + '.portType', e.value);
                                                                                                },
                                                                                                // className={`form-control f-height-inputs ${errors.PortBindings[0].value} ? 'p-invalid' : ''}`}
                                                                                                className: "form-control f-height-inputs pt-2 pb-2"
                                                                                            }, 'ports_ct_types' + i)
                                                                                        ]
                                                                                    }, 'ports_ct3' + i),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-4 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "project",
                                                                                                children: "Container Port"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, {
                                                                                                min: 0,
                                                                                                inputId: 'PortBindings.' + i + '.fromPort',
                                                                                                max: 10000000,
                                                                                                placeholder: "Container Port",
                                                                                                step: 1,
                                                                                                useGrouping: false,
                                                                                                showButtons: false,
                                                                                                value: portBindingsFromPortsRef.current[i],
                                                                                                ...register('PortBindings.' + i + '.fromPort', {
                                                                                                    value: null
                                                                                                }),
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                className: "form-control f-height-inputs",
                                                                                                onChange: (e)=>{
                                                                                                    const selected = {
                                                                                                        ...portBindingsFromPortsRef.current
                                                                                                    };
                                                                                                    selected[i] = e.value;
                                                                                                    setPortBindingsFromPorts(selected);
                                                                                                    setValue('PortBindings.' + i + '.fromPort', e.value);
                                                                                                }
                                                                                            }, 'ports_ct_toPorts' + i)
                                                                                        ]
                                                                                    }, 'ports_ct34' + i),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-4 field",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "project",
                                                                                                children: "Local Port"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, {
                                                                                                inputId: 'PortBindings.' + i + '.toPort',
                                                                                                min: 0,
                                                                                                max: 10000000,
                                                                                                useGrouping: false,
                                                                                                placeholder: "Local Host Port",
                                                                                                ...register('PortBindings.' + i + '.toPort', {
                                                                                                    value: null
                                                                                                }),
                                                                                                disabled: formIsLoadingRef.current,
                                                                                                value: portBindingsToPortsRef.current[i],
                                                                                                // className={`form-control f-height-inputs ${errors.toPort ? 'p-invalid' : ''}`}
                                                                                                className: "form-control f-height-inputs",
                                                                                                onChange: (e)=>{
                                                                                                    const selected = {
                                                                                                        ...portBindingsToPortsRef.current
                                                                                                    };
                                                                                                    selected[i] = e.value;
                                                                                                    setPortBindingsToPorts(selected);
                                                                                                    setValue('PortBindings.' + i + '.toPort', e.value);
                                                                                                }
                                                                                            }, 'ports_ct_hostport' + i)
                                                                                        ]
                                                                                    }, 'ports_ct323' + i),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-1 field",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-5",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            tooltip: "Remove this port binding",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                removeItemFromList('portBindings', i);
                                                                                            }
                                                                                        })
                                                                                    }, 'exposedports44_c33t34' + i)
                                                                                ]
                                                                            }, 'ports_ct' + i)
                                                                        )
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-1",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "p-input-group-addon",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                    className: "p-button p-button-secondary mt-2",
                                                                                    icon: "fa fa-faw fa-plus",
                                                                                    tooltip: "Add Extra Rows",
                                                                                    disabled: formIsLoadingRef.current,
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        setPortMappingCounter(portMappingCounter + 1);
                                                                                    }
                                                                                }),
                                                                                portMappingCounter > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-2",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            tooltip: "Remove Extra Rows",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                setPortMappingCounter(portMappingCounter - 1);
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_9__.Panel, {
                                                        className: "form-panel mt-3 mt-5",
                                                        header: "Environment Variables",
                                                        collapsed: !showEnvironmentVariables,
                                                        toggleable: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-12",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "grid col-12 jusitify-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-11 ml-0 m-auto grid",
                                                                        children: [
                                                                            ...Array(envVarsCounter)
                                                                        ].map((e5, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "col-12 p-shadow-3 grid",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-5 field",
                                                                                        children: [
                                                                                            i < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "envvars",
                                                                                                children: "Key"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                ...register('EnvVars.' + i + '.key', {
                                                                                                    value: null,
                                                                                                    shouldUnregister: true
                                                                                                }),
                                                                                                className: "form-control f-height-inputs",
                                                                                                disabled: formIsLoadingRef.current
                                                                                            }, 'envVars_ct1' + i)
                                                                                        ]
                                                                                    }, 'envVars_ct_value34' + i),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "col-5 field",
                                                                                        children: [
                                                                                            i < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "envvars.value",
                                                                                                children: "Value"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, {
                                                                                                placeholder: "",
                                                                                                ...register('EnvVars.' + i + '.value', {
                                                                                                    value: null
                                                                                                }),
                                                                                                // className={`form-control f-height-inputs ${errors.toPort ? 'p-invalid' : ''}`}
                                                                                                className: "form-control f-height-inputs",
                                                                                                disabled: formIsLoadingRef.current
                                                                                            }, 'envVars_ct_value' + i)
                                                                                        ]
                                                                                    }, 'envVars_ct_value33' + i),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "col-1 field",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-2",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            tooltip: "Remove this variable",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                e.preventDefault();
                                                                                                removeItemFromList('environmentVariables', i);
                                                                                            }
                                                                                        })
                                                                                    }, 'exposedports44_c33t34' + i)
                                                                                ]
                                                                            }, 'envVars_ct_value_x' + i)
                                                                        )
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "col-1",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "p-input-group-addon",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                    className: "p-button p-button-secondary mt-2",
                                                                                    icon: "fa fa-faw fa-plus",
                                                                                    tooltip: "Add More Rows",
                                                                                    disabled: formIsLoadingRef.current,
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        setEnvVarsCounter(envVarsCounter + 1);
                                                                                    }
                                                                                }),
                                                                                envVarsCounter > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                                                            className: "p-button p-button-secondary mt-2",
                                                                                            icon: "fa fa-faw fa-minus",
                                                                                            tooltip: "Remove Extra Rows",
                                                                                            disabled: formIsLoadingRef.current,
                                                                                            onClick: (e)=>{
                                                                                                setEnvVarsCounter(envVarsCounter - 1);
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
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_6__.Button, {
                                                            className: "p-button p-button-primary p-3",
                                                            type: "submit",
                                                            label: "Create Container",
                                                            disabled: formIsLoadingRef.current
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_messages__WEBPACK_IMPORTED_MODULE_18__.Messages, {
                                                        ref: errorMessage
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        height: '800px'
                                    },
                                    className: "col-12"
                                })
                            ]
                        })
                    }, "containerForm")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
                header: "Image Details",
                visible: showImageDialog,
                style: {
                    width: '70vw'
                },
                onHide: ()=>setShowImageDialog(false)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_images_details_modal__WEBPACK_IMPORTED_MODULE_15__/* .ImageDetailsModal */ .v, {
                    image: selectedImage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
                header: "Network Details",
                visible: showNetworkDialog,
                style: {
                    width: '70vw'
                },
                onHide: ()=>setShowNetworkDialog(false)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_networks_network_details_modal__WEBPACK_IMPORTED_MODULE_20__/* .NetworkDetailsModal */ .U, {
                    network: selectedNetwork
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 5514:
/***/ ((module) => {

module.exports = require("primereact/inputnumber");

/***/ }),

/***/ 9093:
/***/ ((module) => {

module.exports = require("primereact/inputtext");

/***/ }),

/***/ 6139:
/***/ ((module) => {

module.exports = require("primereact/messages");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("primereact/multiselect");

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
var __webpack_exports__ = __webpack_require__.X(0, [1515,9861], () => (__webpack_exec__(8451)));
module.exports = __webpack_exports__;

})();