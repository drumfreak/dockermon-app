(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2002],{9355:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/networks",function(){return n(82586)}])},82586:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(34051),o=n.n(r),l=n(85893),i=n(67294),a=n(41664),u=n(42896),c=n(58650),s=n(45795),f=n(25617),d=n(28565),p=n(99403),h=n(12199),v=n(11163),m=n(92814),b=n(66367),y=n(25600),w=n(51436);function g(e,t,n,r,o,l,i){try{var a=e[l](i),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(r,o)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function i(e){g(l,r,o,i,a,"next",e)}function a(e){g(l,r,o,i,a,"throw",e)}i(void 0)}))}}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function N(){var e=(0,v.useRouter)(),t=(0,i.useState)(!0),n=t[0],r=t[1],g=(0,i.useRef)(n);g.current=n;var j=(0,i.useState)(null)[0],N=(0,f.v9)((function(e){return e.hosts.hosts}));(0,i.useRef)(N).current=N;var C=(0,f.v9)((function(e){return e.hosts.activeHost})),S=(0,i.useRef)(C);S.current=C;var O=(0,f.v9)((function(e){return e.networks})),F=(0,i.useState)(null),E=F[0],P=F[1],_=(0,i.useRef)(E);_.current=E;var R=(0,i.useState)(!1),M=R[0],T=R[1],A=(0,i.useState)(null),I=A[0],D=A[1];(0,i.useRef)(I).current=I;var B=(0,i.useState)(null),H=B[0],z=B[1],L=(0,i.useRef)(H);L.current=H;var G=(0,i.useState)(null),K=G[0],U=G[1],V=(0,i.useState)(""),X=V[0],q=V[1];function J(){return Q.apply(this,arguments)}function Q(){return(Q=x(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=2;break}return e.abrupt("return");case 2:return T(!0),e.next=5,d.L.getSocket();case 5:return(t=e.sent).on("networks_list",(function(e){if("success"===e.status&&e.data){var t=e.data;D(t)}})),P(t),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=x(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.current.emit("docker",{command:"listNetworks",callback:"networksList",hostId:S.current.id}),r(!0),setTimeout((function(){r(!1)}),1e3);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if((0,i.useEffect)(x(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M){e.next=3;break}return e.next=3,J();case 3:Y();case 4:case"end":return e.stop()}}),e)}))),[]),(0,i.useEffect)((function(){var e,t=k({},O);if(C||(null===C||void 0===C?void 0:C.id))if(O&&(null===(e=O[C.id])||void 0===e?void 0:e.networks)){t=O[C.id].networks;var n=Object.keys(t).map((function(e){return t[e]}));D(n),r(!1)}else console.log("returning networks")}),[C,O]),(0,i.useEffect)((function(){return function(){(null===_||void 0===_?void 0:_.current)&&_.current.removeListener("networks_list")}}),[]),j)return(0,l.jsxs)("div",{children:["Failed to load Networks: ",j]});var Y=function(){U({global:{value:null,matchMode:b.a6.CONTAINS},name:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]},project:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]},containerId:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]}})},Z=function(e){var t;_.current.emit("docker",{command:"removeNetwork",networkId:e.networkId,hostId:null===(t=e.host)||void 0===t?void 0:t.id,callback:"dockerResuls_networks"+e.id,hook:"removeNetwork"})},$=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,h.w)({message:n,target:(null===r||void 0===r?void 0:r.currentTarget)?r.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){switch(e){case"removeNetwork":Z(t);break;case"removeSelected":ee()}}})},ee=function(){L.current.forEach((function(e){var t;0===(null===(t=e.containers)||void 0===t?void 0:t.length)&&Z(e)})),z(null)};return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"col-12 p-0 mt-2 pr-1 grid",children:[(0,l.jsx)("div",{className:"col-6",children:(0,l.jsxs)("h2",{children:[(0,l.jsx)(m.G,{icon:w.Pk,pull:"left",className:"fa-1x lightblue-color mt-0 pt-0",swapOpacity:!0}),"Docker Networks"]})}),(0,l.jsxs)("div",{className:"col-6 text-right pr-0",children:[(0,l.jsxs)("span",{className:"p-input-icon-left mr-3",children:[(0,l.jsx)("i",{className:"pi pi-search"}),(0,l.jsx)(y.o,{value:X,onChange:function(e){var t=e.target.value,n=k({},K);n.global.value=t,U(n),q(t)},placeholder:"Keyword Search"})]}),(0,l.jsx)(p.z,{label:"Network",className:"p-button-secondary mr-2",icon:"fa fa-plus",onClick:function(){return e.push("/networks/create")}}),(0,l.jsx)("button",{className:"p-button p-component p-button-secondary mt-1 p-2",label:"",onClick:function(){return function(){return W.apply(this,arguments)}()},children:(0,l.jsx)(m.G,{icon:w.lUd,className:"mt-0 p-1",swapOpacity:!0})})]})]}),(0,l.jsxs)(u.w,{value:I,stripedRows:!0,rowHover:!0,showGridlines:!0,selection:H,onSelectionChange:function(e){return function(e){z(e.value)}(e)},paginator:!0,rows:15,totalRecords:null===I||void 0===I?void 0:I.length,dataKey:"id",rowsPerPageOptions:[10,15,20,50,100,200],sortMode:"single",responsiveLayout:"scroll",sortField:"name",sortOrder:1,filters:K,filterDisplay:"menu",loading:g.current,globalFilterFields:["name","imageId","tag"],children:[(0,l.jsx)(c.s,{sortable:!0,field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",body:function(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.default,{href:"/networks/[id]",as:"/networks/".concat(e.id),children:(0,l.jsx)("a",{className:"lightblue-color",children:(0,l.jsx)("b",{children:e.name})})})})}}),(0,l.jsx)(c.s,{sortable:!0,field:"containers",header:"Status",align:"center",body:function(e){var t;return(null===e||void 0===e||null===(t=e.containers)||void 0===t?void 0:t.length)>0?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.default,{href:"/networks/[id]",as:"/networks/".concat(e.id),children:(0,l.jsx)("a",{children:(0,l.jsx)(s.C,{size:"",value:"In Use",severity:"success"})})})}):(0,l.jsx)("div",{})}}),(0,l.jsx)(c.s,{sortable:!0,field:"containers",header:"Containers",align:"center",body:function(e){return(null===e||void 0===e?void 0:e.containers)?(0,l.jsx)(l.Fragment,{children:e.containers.length}):(0,l.jsx)("div",{children:"0"})}}),(0,l.jsx)(c.s,{field:"id",header:"Actions",align:"center",body:function(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.z,{label:"",onClick:function(t){$("removeNetwork",e,"Remove "+e.name+"?",t)},className:"p-button-secondary",icon:"pi pi-trash"})})}}),(0,l.jsx)(c.s,{selectionMode:"multiple",headerStyle:{width:"3em"}})]}),(null===H||void 0===H?void 0:H.length)>0&&(0,l.jsx)("div",{className:"col-12 text-right pr-2",children:(0,l.jsx)(p.z,{className:"mt-2 p-button-warning",label:"Remove Selected",icon:"fa fa-trash",onClick:function(e){return $("removeSelected",null,"Remove Selected Networks?",e)}})})]})})}},58650:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}n.d(t,{s:function(){return p}});var s,f,d,p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(u,e);var t,n,i,a=c(u);function u(){return o(this,u),a.apply(this,arguments)}return t=u,n&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(n(67294).Component);d={columnKey:null,field:null,sortField:null,filterField:null,exportField:null,header:null,body:null,footer:null,sortable:!1,sortableDisabled:!1,sortFunction:null,dataType:"text",filter:!1,filterMatchMode:null,filterPlaceholder:null,filterType:"text",filterMaxLength:null,filterElement:null,filterFunction:null,filterHeaderStyle:null,filterHeaderClassName:null,showFilterMenu:!0,showFilterOperator:!0,showClearButton:!0,showApplyButton:!0,showFilterMatchModes:!0,showFilterMenuOptions:!0,showAddButton:!0,filterMatchModeOptions:null,maxConstraints:2,filterMenuClassName:null,filterMenuStyle:null,align:null,alignHeader:null,alignFrozen:"left",hidden:!1,onFilterClear:null,onFilterApplyClick:null,onFilterMatchModeChange:null,onFilterOperatorChange:null,onFilterConstraintAdd:null,onFilterConstraintRemove:null,filterClear:null,filterApply:null,filterHeader:null,filterFooter:null,style:null,className:null,headerStyle:null,headerClassName:null,bodyStyle:null,bodyClassName:null,footerStyle:null,footerClassName:null,expander:!1,frozen:!1,selectionMode:null,colSpan:null,rowSpan:null,editor:null,cellEditValidator:null,cellEditValidatorEvent:"click",onBeforeCellEditHide:null,onBeforeCellEditShow:null,onCellEditInit:null,onCellEditComplete:null,onCellEditCancel:null,excludeGlobalFilter:!1,rowReorder:!1,rowReorderIcon:"pi pi-bars",rowEditor:!1,exportable:!0,reorderable:!0},(f="defaultProps")in(s=p)?Object.defineProperty(s,f,{value:d,enumerable:!0,configurable:!0,writable:!0}):s[f]=d}},function(e){e.O(0,[5257,2727,9774,2888,179],(function(){return t=9355,e(e.s=t);var t}));var t=e.O();_N_E=t}]);