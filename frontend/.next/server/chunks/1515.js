"use strict";
exports.id = 1515;
exports.ids = [1515];
exports.modules = {

/***/ 1515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ socketService)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
let socket = null;
let launcherSocket = null;
let pingInterval = null;
let launcherPingInterval = null;
const socketService = {
    connect,
    connectLauncher,
    getSocket,
    getLauncherSocket,
    getNewSocket,
    getNewLauncherSocket,
    closeSocket,
    closeLauncherSocket
};
function connect() {
    console.debug('Welcome to Dockermon. I am happy you are using this app!\r\n\r\nSince you are reading this then you must be an 1337 geek like me who digs under the hood and into the consoles, APIs, etc. Nice to meet you.\r\n\r\nI was inspired to build this app because I love Docker and the Engine API is awesome.\r\n\r\nI am looking for fun opportunities to build more cool software.\r\n\r\nContact me at https://github.com/drumfreak and lets connect!\r\n\r\n');
    socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__["default"])(publicRuntimeConfig.webSocketUrl, {
        timeout: 5000000,
        'connect timeout': 5000000
    });
    socket.on('connect', function() {
        console.debug('----------~~~~~~~> Socket Connected, that is a good thing.');
    // getImages();
    });
    socket.on('error', function(error) {
        console.debug('Socket Error', error);
    });
    socket.on('connect_failed', function() {
        console.warn('Socket Connection Failed, there seems to be an issue with the connection!');
    });
    socket.on('close', function() {
        console.warn('Socket Connection Closed!');
    });
    socket.on('disconnect', function(reason) {
        console.warn('Socket Connection Disconnected!', reason);
    });
    socketPing();
    return socket;
}
function connectLauncher() {
    try {
        launcherSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__["default"])(publicRuntimeConfig.webSocketUrlLauncher, {
            timeout: 5000000,
            'connect timeout': 5000000
        });
        launcherSocket.on('connect', function() {
            console.debug('----------~~~~~~~> Host Launcher Socket Connected, that is a good thing.');
        // getImages();
        });
        launcherSocket.on('error', function(error) {
            console.debug('Host Launcher Socket Error', error);
        });
        launcherSocket.on('connect_failed', function() {
            console.warn('Host Launcher Socket Connection Failed, there seems to be an issue with the connection!');
        });
        launcherSocket.on('close', function() {
            console.warn('Host Launcher Socket Connection Closed!');
        });
        launcherSocket.on('disconnect', function(reason) {
            console.warn('Host Launcher Socket Connection Disconnected!', reason);
        });
        hostLauncherSocketPing();
        return launcherSocket;
    } catch (error) {
        console.debug(error);
    }
}
async function getNewSocket(name = 'Auto') {
    const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__["default"])(publicRuntimeConfig.webSocketUrl, {
        timeout: 500000,
        'connect timeout': 500000
    });
    newSocket.on('connect', function() {
    // console.info(name, 'Socket Connected');
    // getImages();
    });
    newSocket.on('error', function(error) {
        console.debug(name, 'Socket Error', error);
    });
    newSocket.on('connect_failed', function() {
        console.warn(name, 'Socket Connection Failed, there seems to be an issue with the connection!');
    });
    newSocket.on('close', function() {
        console.warn(name, 'Socket Connection Closed!');
    });
    newSocket.on('disconnect', function(reason) {
        console.warn(name, 'Socket Connection Disconnected!', reason);
    });
    return newSocket;
}
async function getNewLauncherSocket(name = 'Auto') {
    const newSocket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__["default"])(publicRuntimeConfig.webSocketUrlLauncher, {
        timeout: 500000,
        'connect timeout': 500000
    });
    newSocket.on('connect', function() {
        console.debug('----------~~~~~~~> Host Launcher Socket Connected, that is a good thing.');
    });
    newSocket.on('error', function(error) {
        console.debug(name, 'Host Launcher Socket Error', error);
    });
    newSocket.on('connect_failed', function() {
        console.warn(name, 'Host Launcher Socket Connection Failed, there seems to be an issue with the connection!');
    });
    newSocket.on('close', function() {
        console.warn('Host Launcher Socket Connection Closed!');
    });
    newSocket.on('disconnect', function(reason) {
        console.warn('Host Launcher Socket Connection Disconnected!', reason);
    });
    return newSocket;
}
async function socketPing() {
    if (pingInterval) {
        clearInterval(pingInterval);
    }
    pingInterval = setInterval(()=>{
        console.info('Pinging Dockermon...');
        socket.emit('ping', {
            data: ' hello dockermon..'
        });
    }, 150000);
}
async function hostLauncherSocketPing() {
    if (launcherPingInterval) {
        clearInterval(launcherPingInterval);
    }
    launcherPingInterval = setInterval(()=>{
        console.info('Pinging Dockermon...');
        launcherSocket.emit('ping', {
            data: ' hello dockermon host launcher..'
        });
    }, 150000);
}
async function getSocket() {
    if (socket) {
        return socket;
    } else {
        socket = await connect();
        return socket;
    }
}
async function getLauncherSocket() {
    if (launcherSocket) {
        return launcherSocket;
    } else {
        console.log('Connecting Launcher Socket');
        launcherSocket = await connectLauncher();
        return launcherSocket;
    }
}
function closeSocket() {
    if (socket) {
        socket.close();
    // setSocket(null);
    }
}
function closeLauncherSocket() {
    if (launcherSocket) {
        launcherSocket.close();
    // setSocket(null);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;