"use strict";
exports.id = 6345;
exports.ids = [6345];
exports.modules = {

/***/ 6345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JSONDataView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1006);
/* harmony import */ var primereact_panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_panel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primereact_tabview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3749);
/* harmony import */ var primereact_tabview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_tabview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_json_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5288);
/* harmony import */ var react_json_tree__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_json_tree__WEBPACK_IMPORTED_MODULE_6__);







function JSONDataView(props) {
    const theme = {
        scheme: 'brewer',
        author: 'timoth\xe9e poisot (http://github.com/tpoisot)',
        base00: '#161b22',
        base01: '#2e2f30',
        base02: '#515253',
        base03: '#737475',
        base04: '#959697',
        base05: '#b7b8b9',
        base06: '#dadbdc',
        base07: '#fcfdfe',
        base08: '#e31a1c',
        base09: '#e6550d',
        base0A: '#dca060',
        base0B: '#31a354',
        base0C: '#80b1d3',
        base0D: '#3182bd',
        base0E: '#756bb1',
        base0F: '#b15928'
    };
    const containerCode = JSON.stringify(props.data, null, 2);
    const { 0: collapsedValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed || false);
    const { 0: showContent , 1: setShowContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!props.collapsed || false);
    const toggleable = props.toggleable || true;
    const hideTree = props.hideTree || false;
    const hideRaw = props.hideRaw ? true : false;
    const hideCode = props.hideCode ? true : false;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_panel__WEBPACK_IMPORTED_MODULE_2__.Panel, {
            className: "p-0",
            header: props.header || 'Data View',
            onCollapse: ()=>setShowContent(false)
            ,
            onExpand: ()=>setShowContent(true)
            ,
            toggleable: toggleable,
            collapsed: collapsedValue,
            children: showContent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(primereact_tabview__WEBPACK_IMPORTED_MODULE_3__.TabView, {
                activeIndex: 1,
                className: "p-0 m-0",
                children: [
                    !hideCode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_tabview__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
                        header: " Code View",
                        className: "p-0 m-0",
                        leftIcon: "fa fa-solid fa-code mr-2",
                        style: {
                            overflowX: 'scroll'
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "code-highlighter-background p-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__.Prism, {
                                className: "p-1 m-0",
                                language: "javascript",
                                style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_5__.coldarkDark,
                                showLineNumbers: props.showLineNumbers,
                                wrapLines: true,
                                wrapLongLines: false,
                                children: containerCode
                            })
                        })
                    }),
                    !hideTree && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_tabview__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
                        header: "Tree View",
                        className: "p-0 m-0",
                        leftIcon: "fa fa-solid fa-tree mr-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "code-highlighter-background p-2",
                            style: {
                                overflowX: 'scroll'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_json_tree__WEBPACK_IMPORTED_MODULE_6__.JSONTree, {
                                className: "m-0",
                                data: props.data,
                                theme: theme,
                                invertTheme: false,
                                shouldExpandNode: (node)=>{
                                    return node.length === 1 ? true : false;
                                }
                            })
                        })
                    }),
                    !hideRaw && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_tabview__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
                        header: "Raw View",
                        className: "p-0 m-0",
                        leftIcon: "fa fa-fw fa-file mr-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "code-highlighter-background p-2 mt-0",
                            style: {
                                overflowX: 'scroll'
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                className: "p-0 m-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                    className: "p-0 m-0",
                                    children: containerCode
                                })
                            })
                        })
                    })
                ]
            })
        })
    }));
};


/***/ })

};
;