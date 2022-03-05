"use strict";
exports.id = 2473;
exports.ids = [2473];
exports.modules = {

/***/ 1388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ fetchWrapper)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3621);


const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};
function get(url, auth = true) {
    const requestOptions = {
        method: 'GET'
    };
    if (auth) {
        requestOptions.headers = authHeader(url);
    }
    return fetch(url, requestOptions).then(handleResponse);
}
async function post(url, body, auth = true) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body)
    };
    if (auth) {
        requestOptions.headers = {
            'Content-Type': 'application/json',
            ...authHeader(url)
        };
    }
    return fetch(url, requestOptions).then(handleResponse);
}
function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader(url)
        },
        body: JSON.stringify(body)
    };
    const f = fetch(url, requestOptions).then(handleResponse).catch((error)=>{
        console.log(error);
    });
    return f;
}
// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    return fetch(url, requestOptions).then(handleResponse);
}
// helper functions
function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const token = localStorage.getItem('token');
    const user = _services_auth_service__WEBPACK_IMPORTED_MODULE_1__/* .authService.userValue */ .O.userValue;
    const isLoggedIn = user && token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return {
            Authorization: `Bearer ${token}`
        };
    } else {
        return {};
    }
}
function handleResponse(response) {
    return response.text().then((text)=>{
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([
                401,
                403
            ].includes(response.status) && _services_auth_service__WEBPACK_IMPORTED_MODULE_1__/* .authService.userValue */ .O.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _services_auth_service__WEBPACK_IMPORTED_MODULE_1__/* .authService.logout */ .O.logout();
            }
            const error = data && data.message || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}


/***/ }),

/***/ 3621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ authService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1388);




// import { usersService } from './users.service';
const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
const authService = {
    user: userSubject.asObservable(),
    get userValue () {
        return userSubject.value;
    },
    login,
    logout
};
getUser();
async function getUser() {
    if (false) {}
}
function login(username, password) {
    return _helpers_fetch_wrapper__WEBPACK_IMPORTED_MODULE_3__/* .fetchWrapper.post */ .h.post(`${baseUrl}/auth/login`, {
        email: username,
        password: password
    }).then((result)=>{
        if (result.status === 'success') {
            if (result.token) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('tokenExpires', result.tokenExpires);
                localStorage.setItem('userId', result.user.id);
                userSubject.next(result.user.id);
            } else {
                throw Error('Invalid token');
            }
        } else {
            throw Error('Invalid credentials');
        }
    }).catch((error)=>{
        console.log(error);
    });
}
function logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpires');
    userSubject.next(null);
    // setTimeout(() => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/auth/login');
// }, 0);
}


/***/ })

};
;