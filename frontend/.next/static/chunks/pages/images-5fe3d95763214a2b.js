(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3609],{27553:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/images",function(){return n(79989)}])},79989:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(34051),l=n.n(r),o=n(85893),i=n(67294),a=n(11163),u=n(41664),c=n(42896),s=n(58650),d=n(45795),f=n(25617),p=n(28565),h=n(57191),m=n(99403),v=n(40424),g=n(92814),b=n(66367),y=n(25600),x=n(51436);function j(e,t,n,r,l,o,i){try{var a=e[o](i),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(r,l)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var o=e.apply(t,n);function i(e){j(o,r,l,i,a,"next",e)}function a(e){j(o,r,l,i,a,"throw",e)}i(void 0)}))}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}function C(){var e=(0,a.useRouter)(),t=(0,i.useState)(!0),n=t[0],r=t[1],j=(0,i.useRef)(n);j.current=n;var S=(0,i.useState)(null)[0],C=(0,f.v9)((function(e){return e.hosts.hosts}));(0,i.useRef)(C).current=C;var O=(0,f.v9)((function(e){return e.hosts.activeHost})),k=(0,i.useRef)(O);k.current=O;var F=(0,f.v9)((function(e){return e.images})),I=(0,i.useState)(null),P=I[0],E=I[1],R=(0,i.useRef)(P);R.current=P;var _=(0,i.useState)(!1),M=_[0],T=_[1],A=(0,i.useState)(null),z=A[0],D=A[1];(0,i.useRef)(z).current=z;var B=(0,i.useState)(null),H=B[0],V=B[1],G=(0,i.useRef)(H);G.current=H;var L=(0,i.useState)(null),K=L[0],U=L[1],X=(0,i.useState)(""),Y=X[0],q=X[1];function J(){return Q.apply(this,arguments)}function Q(){return(Q=w(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=2;break}return e.abrupt("return");case 2:return T(!0),e.next=5,p.L.getSocket();case 5:return t=e.sent,E(t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=w(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R.current.emit("docker",{command:"listImages",callback:"imagesList",hostId:k.current.id}),r(!0),setTimeout((function(){r(!1)}),1e3);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)(w(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=3;break}return e.next=3,J();case 3:Z();case 4:case"end":return e.stop()}}),e)}))),[]),(0,i.useEffect)((function(){var e,t=N({},F);if(O||(null===O||void 0===O?void 0:O.id))if(F&&(null===(e=F[O.id])||void 0===e?void 0:e.images)){t=F[O.id].images;var n=Object.keys(t).map((function(e){return t[e]}));D(n),r(!1)}else console.log("returning")}),[O,F]);var Z=function(){U({global:{value:null,matchMode:b.a6.CONTAINS},name:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]},project:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]},containerId:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]}})};if(console.log("Images",F),S)return(0,o.jsxs)("div",{children:["Failed to load Images: ",S]});if(!F)return(0,o.jsx)("div",{children:"No Images."});if(0===F.length)return(0,o.jsx)("div",{children:"No Images."});var $=function(e){var t;R.current.emit("docker",{command:"removeImage",imageId:e.imageId,hostId:null===(t=e.host)||void 0===t?void 0:t.id,callback:"dockerResuls_images"+e.id,hook:"removeImage"})},ee=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,v.V)({className:"confirm-dialogs",message:n,target:(null===r||void 0===r?void 0:r.currentTarget)?r.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){switch(e){case"removeImage":$(t);break;case"removeSelected":te()}}})},te=function(){G.current.forEach((function(e){var t;0===(null===(t=e.containers)||void 0===t?void 0:t.length)&&$(e)})),V(null)};return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"col-12 p-0 mt-2 pr-1 grid",children:[(0,o.jsx)("div",{className:"col-6",children:(0,o.jsxs)("h2",{children:[(0,o.jsx)(g.G,{icon:x.Yws,pull:"left",className:"fa-1x lightblue-color mt-0 pt-0",swapOpacity:!0}),"Docker Images"]})}),(0,o.jsxs)("div",{className:"col-6 text-right pr-0",children:[(0,o.jsxs)("span",{className:"p-input-icon-left mr-3",children:[(0,o.jsx)("i",{className:"pi pi-search"}),(0,o.jsx)(y.o,{value:Y,onChange:function(e){var t=e.target.value,n=N({},K);n.global.value=t,U(n),q(t)},placeholder:"Keyword Search"})]}),(0,o.jsx)(m.z,{label:"Image",className:"p-button-secondary mr-2",icon:"fa fa-plus",onClick:function(){return e.push("/images/create")}}),(0,o.jsx)("button",{className:"p-button p-component p-button-secondary mt-1 p-2",label:"",onClick:function(){return function(){return W.apply(this,arguments)}()},children:(0,o.jsx)(g.G,{icon:x.lUd,className:"mt-0 p-1",swapOpacity:!0})})]})]}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c.w,{value:z,stripedRows:!0,rowHover:!0,showGridlines:!0,selection:H,onSelectionChange:function(e){return function(e){V(e.value)}(e)},paginator:!0,rows:15,totalRecords:null===z||void 0===z?void 0:z.length,dataKey:"id",rowsPerPageOptions:[10,15,20,50,100,200],sortMode:"single",responsiveLayout:"scroll",sortField:"name",sortOrder:1,filters:K,filterDisplay:"menu",loading:j.current,globalFilterFields:["name","imageId","tag"],children:[(0,o.jsx)(s.s,{sortable:!0,field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,o.jsx)("a",{className:"lightblue-color",children:(0,o.jsx)("b",{children:e.name})})})})}}),(0,o.jsx)(s.s,{sortable:!0,field:"tag",header:"Tag",filter:!0,filterPlaceholder:"Search by Tag",body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,o.jsx)("a",{className:"lightblue-color",children:(0,o.jsx)("b",{children:e.tag})})})})}}),(0,o.jsx)(s.s,{sortable:!0,field:"fileSize",header:"Size",align:"center",body:function(e){return e.fileSize?(0,o.jsx)(o.Fragment,{children:h.t.bytes(e.fileSize)}):(0,o.jsx)("div",{children:h.t.bytes(e.fileSize)})}}),(0,o.jsx)(s.s,{sortable:!0,field:"dockerVersion",header:"Docker Version",filter:!0,filterPlaceholder:"Search by Docker Version",align:"center",body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,o.jsx)("a",{children:e.dockerVersion})})})}}),(0,o.jsx)(s.s,{sortable:!0,field:"status",header:"Status",align:"center",body:function(e){var t;if((null===e||void 0===e||null===(t=e.containers)||void 0===t?void 0:t.length)>0)return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,o.jsx)("a",{children:(0,o.jsx)(d.C,{size:"",value:"In Use",severity:"success"})})})})}}),(0,o.jsx)(s.s,{field:"id",header:"Actions",align:"center",body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(m.z,{label:"",onClick:function(t){ee("removeImage",e,"Remove "+e.pullTag+"?",t)},className:"p-button-secondary",icon:"pi pi-trash"})})}}),(0,o.jsx)(s.s,{selectionMode:"multiple",headerStyle:{width:"3em"}})]}),(null===H||void 0===H?void 0:H.length)>0&&(0,o.jsx)("div",{className:"col-12 text-right pr-2",children:(0,o.jsx)(m.z,{className:"mt-2 p-button-warning",label:"Remove Selected",icon:"fa fa-trash",onClick:function(e){return ee("removeSelected",null,"Remove Selected Images?",e)}})})]})]})})}},58650:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var l=u(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return a(this,n)}}n.d(t,{s:function(){return p}});var s,d,f,p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(u,e);var t,n,i,a=c(u);function u(){return l(this,u),a.apply(this,arguments)}return t=u,n&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(n(67294).Component);f={columnKey:null,field:null,sortField:null,filterField:null,exportField:null,header:null,body:null,footer:null,sortable:!1,sortableDisabled:!1,sortFunction:null,dataType:"text",filter:!1,filterMatchMode:null,filterPlaceholder:null,filterType:"text",filterMaxLength:null,filterElement:null,filterFunction:null,filterHeaderStyle:null,filterHeaderClassName:null,showFilterMenu:!0,showFilterOperator:!0,showClearButton:!0,showApplyButton:!0,showFilterMatchModes:!0,showFilterMenuOptions:!0,showAddButton:!0,filterMatchModeOptions:null,maxConstraints:2,filterMenuClassName:null,filterMenuStyle:null,align:null,alignHeader:null,alignFrozen:"left",hidden:!1,onFilterClear:null,onFilterApplyClick:null,onFilterMatchModeChange:null,onFilterOperatorChange:null,onFilterConstraintAdd:null,onFilterConstraintRemove:null,filterClear:null,filterApply:null,filterHeader:null,filterFooter:null,style:null,className:null,headerStyle:null,headerClassName:null,bodyStyle:null,bodyClassName:null,footerStyle:null,footerClassName:null,expander:!1,frozen:!1,selectionMode:null,colSpan:null,rowSpan:null,editor:null,cellEditValidator:null,cellEditValidatorEvent:"click",onBeforeCellEditHide:null,onBeforeCellEditShow:null,onCellEditInit:null,onCellEditComplete:null,onCellEditCancel:null,excludeGlobalFilter:!1,rowReorder:!1,rowReorderIcon:"pi pi-bars",rowEditor:!1,exportable:!0,reorderable:!0},(d="defaultProps")in(s=p)?Object.defineProperty(s,d,{value:f,enumerable:!0,configurable:!0,writable:!0}):s[d]=f}},function(e){e.O(0,[5257,2727,9774,2888,179],(function(){return t=27553,e(e.s=t);var t}));var t=e.O();_N_E=t}]);