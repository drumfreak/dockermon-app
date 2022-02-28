"use strict";
exports.id = 6657;
exports.ids = [6657];
exports.modules = {

/***/ 6657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "withRedux": () => (/* binding */ withRedux)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(173);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(8417);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
;// CONCATENATED MODULE: ./store/reducers/containers.reducer.jsx
const initialState = {};
let containers = {};
function reducer(state = initialState, action) {
    let c = {
        ...containers
    };
    // console.log('Container State', state);
    switch(action.type){
        case 'addContainer':
            var ref, ref1;
            // console.log('-----!!!!----- Add Container', action.payload, state);
            if ((ref = action.payload) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.id) {
                if (!c[action.payload.data.host.id]) {
                    c[action.payload.data.host.id] = action.payload.data.host;
                    c[action.payload.data.host.id].containers = {};
                }
                c[action.payload.data.host.id].containers[action.payload.data.id] = action.payload.data;
            }
            containers = c;
            return c;
        case 'removeContainer':
            var ref2, ref3;
            // console.log('-----!!!!----- remove Container', action.payload);
            if ((ref2 = action.payload) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.id) {
                delete c[action.payload.data.host.id].containers[action.payload.data.id];
            }
            containers = c;
            return c;
        case 'resetContainers':
            var ref4, ref5;
            // console.debug('-----!!!!----- reset Container', action.payload);
            if ((ref4 = action.payload) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.data) === null || ref5 === void 0 ? void 0 : ref5.host.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.data.host.id].containers = {};
                containers = c;
            }
            return c;
        case 'replaceContainers':
            var ref6;
            // console.debug('-----!!!!----- replace Container', action);
            if ((ref6 = action.payload.host) === null || ref6 === void 0 ? void 0 : ref6.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.host.id].containers = action.payload.containers;
                containers = c;
            }
            return c;
        case 'fullReplaceContainers':
            // console.debug('-----!!!!----- replace Container', action);
            containers = action.payload.data;
            return containers;
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/images.reducer.jsx
const images_reducer_initialState = {};
let images_reducer_images = {};
function images_reducer_reducer(state = images_reducer_initialState, action) {
    let c = {
        ...images_reducer_images
    };
    // console.log('Image State', state);
    switch(action.type){
        case 'addImage':
            var ref, ref1;
            // console.log('-----!!!!----- Add Image', action.payload, state);
            if ((ref = action.payload) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.id) {
                if (!c[action.payload.data.host.id]) {
                    c[action.payload.data.host.id] = action.payload.data.host;
                    c[action.payload.data.host.id].images = {};
                }
                c[action.payload.data.host.id].images[action.payload.data.id] = action.payload.data;
            }
            images_reducer_images = c;
            return c;
        case 'removeImage':
            var ref2, ref3;
            // console.log('-----!!!!----- remove Image', action.payload);
            if ((ref2 = action.payload) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.id) {
                delete c[action.payload.data.host.id].images[action.payload.data.id];
            }
            images_reducer_images = c;
            return c;
        case 'resetImages':
            var ref4, ref5;
            // console.debug('-----!!!!----- reset Image', action.payload);
            if ((ref4 = action.payload) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.data) === null || ref5 === void 0 ? void 0 : ref5.host.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.data.host.id].images = {};
                images_reducer_images = c;
            }
            return c;
        case 'replaceImages':
            var ref6;
            // console.debug('-----!!!!----- replace Image', action);
            if ((ref6 = action.payload.host) === null || ref6 === void 0 ? void 0 : ref6.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.host.id].images = action.payload.images;
                images_reducer_images = c;
            }
            return c;
        case 'fullReplaceImages':
            // console.debug('-----!!!!----- replace Container', action);
            images_reducer_images = action.payload.data;
            return images_reducer_images;
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/volumes.reducer.jsx
const volumes_reducer_initialState = {};
let volumes = {};
function volumes_reducer_reducer(state = volumes_reducer_initialState, action) {
    let c = {
        ...volumes
    };
    // console.log('Volume State', state);
    switch(action.type){
        case 'addVolume':
            var ref, ref1;
            // console.log('-----!!!!----- Add Volume', action.payload, state);
            if ((ref = action.payload) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.id) {
                if (!c[action.payload.data.host.id]) {
                    c[action.payload.data.host.id] = action.payload.data.host;
                    c[action.payload.data.host.id].volumes = {};
                }
                c[action.payload.data.host.id].volumes[action.payload.data.id] = action.payload.data;
            }
            volumes = c;
            return c;
        case 'removeVolume':
            var ref2, ref3;
            // console.log('-----!!!!----- remove Volume', action.payload);
            if ((ref2 = action.payload) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.id) {
                delete c[action.payload.data.host.id].volumes[action.payload.data.id];
            }
            volumes = c;
            return c;
        case 'resetVolumes':
            var ref4, ref5;
            // console.debug('-----!!!!----- reset Volume', action.payload);
            if ((ref4 = action.payload) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.data) === null || ref5 === void 0 ? void 0 : ref5.host.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.data.host.id].volumes = {};
                volumes = c;
            }
            return c;
        case 'replaceVolumes':
            var ref6;
            // console.debug('-----!!!!----- replace Volume', action);
            if ((ref6 = action.payload.host) === null || ref6 === void 0 ? void 0 : ref6.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.host.id].volumes = action.payload.volumes;
                volumes = c;
            }
            return c;
        case 'fullReplaceVolumes':
            // console.debug('-----!!!!----- replace volumes', action);
            volumes = action.payload.data;
            return volumes;
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/networks.reducer.jsx
const networks_reducer_initialState = {};
let networks = {};
function networks_reducer_reducer(state = networks_reducer_initialState, action) {
    let c = {
        ...networks
    };
    // console.log('Network State', state);
    switch(action.type){
        case 'addNetwork':
            var ref, ref1;
            // console.log('-----!!!!----- Add Network', action.payload, state);
            if ((ref = action.payload) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.id) {
                if (!c[action.payload.data.host.id]) {
                    c[action.payload.data.host.id] = action.payload.data.host;
                    c[action.payload.data.host.id].networks = {};
                }
                c[action.payload.data.host.id].networks[action.payload.data.id] = action.payload.data;
            }
            networks = c;
            return c;
        case 'removeNetwork':
            var ref2, ref3;
            // console.log('-----!!!!----- remove Network', action.payload);
            if ((ref2 = action.payload) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.id) {
                delete c[action.payload.data.host.id].networks[action.payload.data.id];
            }
            networks = c;
            return c;
        case 'resetNetworks':
            var ref4, ref5;
            // console.debug('-----!!!!----- reset Network', action.payload);
            if ((ref4 = action.payload) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.data) === null || ref5 === void 0 ? void 0 : ref5.host.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.data.host.id].networks = {};
                networks = c;
            }
            return c;
        case 'replaceNetworks':
            var ref6;
            // console.debug('-----!!!!----- replace Network', action);
            if ((ref6 = action.payload.host) === null || ref6 === void 0 ? void 0 : ref6.id) {
                if (!c[action.payload.host.id]) c[action.payload.host.id] = {};
                c[action.payload.host.id].networks = action.payload.networks;
                networks = c;
            }
            return c;
        case 'fullReplaceNetworks':
            // console.debug('-----!!!!----- replace Container', action);
            networks = action.payload.data;
            return networks;
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/hosts.reducer.jsx
const hosts_reducer_initialState = {};
let hosts = {
    hosts: {},
    activeHost: {}
};
function hosts_reducer_reducer(state = hosts_reducer_initialState, action) {
    let c = {
        ...hosts
    };
    switch(action.type){
        case 'addHost':
            var ref, ref1;
            if ((ref = action.payload) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.id) {
                c.hosts[action.payload.data.id] = action.payload.data;
            }
            c.hosts = c;
            hosts = c;
            return hosts;
        case 'removeHost':
            var ref2, ref3;
            if ((ref2 = action.payload) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.id) {
                if (c.hosts[action.payload.data.id]) {
                    delete c.hosts[action.payload.data.id];
                }
            }
            c.hosts = c;
            hosts = c;
            return hosts;
        case 'resetHosts':
            c.hosts = {};
            hosts = c;
            return hosts;
        case 'replaceHosts':
            c.hosts = action.payload.data;
            hosts = c;
            return hosts;
        case 'setActiveHost':
            c.activeHost = action.payload.data;
            hosts = c;
            return hosts;
        case 'fullReplaceHosts':
            // console.debug('-----!!!!----- replace Container', action);
            c.hosts = action.payload.data;
            hosts = c;
            return hosts;
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/site.reducer.jsx
const site_reducer_initialState = {};
const defaults = {
    selectedContainerId: null,
    activeHost: {},
    pollerRunning: false,
    lastLogin: Date.now(),
    userSettings: {
        leftMenu: {
            showCpu: true,
            showOffline: true,
            showOverlays: true,
            overlayDelay: 900
        },
        theme: {
            main: 'custom'
        },
        chartColors: {
            cpu: 'c27604',
            fill: false,
            gridX: '0f0f0f',
            gridY: '2e2d2e',
            gridXY: '0a6e09',
            labels: '8f8f8f',
            legend: '495057',
            ticksX: '6b6b6b',
            ticksY: '616161',
            diskRead: '026e00',
            diskWrite: '2e3442',
            fillMulti: false,
            networkRx: '4dff00',
            networkTx: 'd0ff00',
            processes: '4c00d9',
            background: '01050a',
            hoverOffset: 4,
            lineTension: 0.1,
            memoryUsage: '00690b',
            pointRadius: 0,
            memoryPercentage: '0062ff'
        },
        containerViews: [
            {
                default: true,
                name: 'Main View',
                settings: {
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
                    showEditResources: false
                }
            }, 
        ]
    }
};
let site = defaults;
function site_reducer_reducer(state = site_reducer_initialState, action) {
    let c = {
        ...site
    };
    switch(action.type){
        case 'selectContainerId':
            //  console.debug('-----!!!!----- replace selectContainerId', action);
            c.selectedContainerId = action.payload.data;
            site = c;
            return site;
        case 'setPollerRunning':
            //  console.debug('-----!!!!----- replace selectContainerId', action);
            c.pollerRunning = action.payload.data;
            site = c;
            return site;
        case 'setActiveHost':
            c.activeHost = action.payload.data;
            site = c;
            return site;
        case 'setSiteSettings':
            // console.debug('-----!!!!----- replace Container', action);
            c = action.payload.data;
            site = c;
            return site;
        case 'setUserSettings':
            // console.debug('-----!!!!----- replace site settings', action);
            c.userSettings = action.payload;
            site = c;
            return site;
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/index.jsx







/* harmony default export */ const reducers = ((0,external_redux_.combineReducers)({
    site: site_reducer_reducer,
    hosts: hosts_reducer_reducer,
    containers: reducer,
    images: images_reducer_reducer,
    volumes: volumes_reducer_reducer,
    networks: networks_reducer_reducer
}));

;// CONCATENATED MODULE: ./store/store.jsx




function initializeStore(initialState = {}) {
    return (0,external_redux_.createStore)(reducers, initialState, (0,external_redux_devtools_extension_.composeWithDevTools)((0,external_redux_.applyMiddleware)((external_redux_thunk_default()))));
};

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "primereact/api"
var api_ = __webpack_require__(2250);
var api_default = /*#__PURE__*/__webpack_require__.n(api_);
;// CONCATENATED MODULE: ./pages/_app_redux.jsx






(api_default()).ripple = true;
(api_default()).inputStyle = 'outlined';
const dockerEventListenr = ()=>{
//  dockerEventsService.attachSocket();
};
const withRedux = (PageComponent, { ssr =true  } = {})=>{
    const WithRedux = ({ initialReduxState , ...props })=>{
        const store = getOrInitializeStore(initialReduxState);
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(PageComponent, {
                ...props
            })
        }));
    };
    // Make sure people don't use this HOC on _app.js level
    if (false) {}
    // Set the correct displayName in development
    if (false) {}
    if (ssr || PageComponent.getInitialProps) {
        WithRedux.getInitialProps = async (context)=>{
            // Get or Create the store with `undefined` as initialState
            // This allows you to set a custom default initialState
            const reduxStore1 = getOrInitializeStore();
            // Provide the store to getInitialProps of pages
            context.reduxStore = reduxStore1;
            // Run getInitialProps from HOCed PageComponent
            const pageProps = typeof PageComponent.getInitialProps === 'function' ? await PageComponent.getInitialProps(context) : {};
            // Pass props to PageComponent
            return {
                ...pageProps,
                initialReduxState: reduxStore1.getState()
            };
        };
    }
    dockerEventListenr();
    return WithRedux;
};
let reduxStore;
const getOrInitializeStore = (initialState)=>{
    // Always make a new store if server, otherwise state is shared between requests
    if (true) {
        return initializeStore(initialState);
    }
    // Create store if unavailable on the client and set it on the window object
    if (!reduxStore) {
        reduxStore = initializeStore(initialState);
    }
    return reduxStore;
};


/***/ })

};
;