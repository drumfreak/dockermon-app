"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2723],{2723:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(34051),l=t.n(r),o=t(85893),i=t(67294),a=t(11163),s=t(41664),c=t(42896),u=t(58650),d=t(45795),f=t(46374),p=t(25617),h=t(28565),m=t(92814),v=t(99403),y=t(25600),b=t(66367),x=t(51436),j=t(40424),g=t(78927),S=t(29318),w=t(57191);function C(e,n,t,r,l,o,i){try{var a=e[o](i),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,l)}function N(e){return function(){var n=this,t=arguments;return new Promise((function(r,l){var o=e.apply(n,t);function i(e){C(o,r,l,i,a,"next",e)}function a(e){C(o,r,l,i,a,"throw",e)}i(void 0)}))}}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){O(e,n,t[n])}))}return e}function k(){var e=(0,a.useRouter)(),n=(0,i.useState)(!0),t=n[0],r=n[1],C=(0,i.useRef)(t);C.current=t;var O=(0,p.v9)((function(e){return e.site})),k=(0,p.v9)((function(e){return e.hosts.hosts}));(0,i.useRef)(k).current=k;var P=(0,p.v9)((function(e){return e.hosts.activeHost})),M=(0,i.useRef)(P);M.current=P;var R=(0,p.v9)((function(e){return e.containers})),E=(0,i.useState)(null)[0],I=(0,i.useState)(null),U=I[0],T=I[1],_=(0,i.useRef)(U);_.current=U;var A=(0,i.useState)(!1),D=A[0],B=A[1],H=(0,i.useState)(null),z=H[0],G=H[1];(0,i.useRef)(z).current=z;var L=(0,i.useState)(null),V=L[0],W=L[1],K=(0,i.useRef)(V);K.current=V;var Q=(0,i.useState)(null),q=Q[0],J=Q[1],X=(0,i.useState)(""),Y=X[0],Z=X[1];function $(){return ee.apply(this,arguments)}function ee(){return(ee=N(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D){e.next=2;break}return e.abrupt("return");case 2:return B(!0),e.next=5,h.L.getSocket();case 5:return n=e.sent,T(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return(ne=N(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.current.emit("docker",{command:"listContainers",callback:"containersIndexList",hostId:M.current.id}),r(!0),setTimeout((function(){r(!1)}),1e3);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)(N(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D){e.next=3;break}return e.next=3,$();case 3:te();case 4:case"end":return e.stop()}}),e)}))),[]),(0,i.useEffect)((function(){var e,n=F({},R);if((P||(null===P||void 0===P?void 0:P.id))&&(null===(e=R[P.id])||void 0===e?void 0:e.containers)){n=R[P.id].containers;var t=Object.keys(n).map((function(e){return n[e]}));G(t),r(!1)}}),[P,R]);var te=function(){J({global:{value:null,matchMode:b.a6.CONTAINS},name:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]},project:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]},containerId:{operator:b.pg.AND,constraints:[{value:null,matchMode:b.a6.CONTAINS}]}})};if(E)return(0,o.jsxs)("div",{children:["Failed to load Container: ",E]});if(!R)return(0,o.jsx)("div",{children:"No Containers."});if(0===R.length)return(0,o.jsx)("div",{children:"No Containers."});var re=function(e){var n;_.current.emit("docker",{command:"remove",containerId:e.containerId,hostId:null===(n=e.host)||void 0===n?void 0:n.id,callback:"dockerResuls_containers"+e.id,hook:"removeContainer"})},le=function(){K.current.forEach((function(e){!1===e.running&&re(e)})),W(null)};return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"col-12 p-0 mt-2 pr-1 grid",children:[(0,o.jsx)("div",{className:"col-6",children:(0,o.jsxs)("h2",{children:[(0,o.jsx)(m.G,{icon:x.MW5,pull:"left",className:"fa-1x lightblue-color mt-0 pt-0",swapOpacity:!0}),"Docker Containers"]})}),(0,o.jsxs)("div",{className:"col-6 text-right pr-0",children:[(0,o.jsxs)("span",{className:"p-input-icon-left mr-3",children:[(0,o.jsx)("i",{className:"pi pi-search"}),(0,o.jsx)(y.o,{value:Y,onChange:function(e){var n=e.target.value,t=F({},q);t.global.value=n,J(t),Z(n)},placeholder:"Keyword Search"})]}),(0,o.jsx)(v.z,{label:"Container",className:"p-button-secondary mr-2",icon:"fa fa-plus",onClick:function(){return e.push("/containers/create")}}),(0,o.jsx)("button",{className:"p-button p-component p-button-secondary mt-1 p-2",label:"",onClick:function(){return function(){return ne.apply(this,arguments)}()},children:(0,o.jsx)(m.G,{icon:x.lUd,className:"mt-0 p-1",swapOpacity:!0})})]})]}),(0,o.jsxs)(c.w,{value:z,stripedRows:!0,rowHover:!0,showGridlines:!0,selection:V,onSelectionChange:function(e){return function(e){W(e.value)}(e)},paginator:!0,rows:15,totalRecords:null===z||void 0===z?void 0:z.length,dataKey:"id",rowsPerPageOptions:[10,15,20,50,100,200],sortMode:"multiple",multiSortMeta:[{field:"statsSummary.cpuUsage",order:-1},{field:"statsSummary.memoryUsage",order:-1},{field:"running",order:-1},{field:"name",order:1}],responsiveLayout:"scroll",filters:q,filterDisplay:"menu",loading:C.current,globalFilterFields:["name","containerId"],children:[(0,o.jsx)(u.s,{sortable:!0,field:"id",header:"Id",body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{children:e.id})})})}}),(0,o.jsx)(u.s,{sortable:!0,field:"name",header:"Name",body:function(e){var n,t,r,l,i,a="leftMenu-progressbar "+S.Q.progressBarCPUClasses(e),c=(null===(n=e.statsSummary)||void 0===n?void 0:n.cpuUsage)>0;return c=!!(e.running&&c&&(null===(t=O.userSettings)||void 0===t||null===(r=t.leftMenu)||void 0===r?void 0:r.showCpu)),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{className:"lightblue-color",children:e.name})}),c&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(g.k,{tooltip:(null===(l=e.statsSummary)||void 0===l?void 0:l.cpuUsage)+" % CPU Usage",className:a+" mt-3",value:Number(null===(i=e.statsSummary)||void 0===i?void 0:i.cpuUsage),displayValueTemplate:function(){return(0,o.jsx)("div",{})}})}),!c&&e.running&&(0,o.jsx)("div",{className:"col-12 p-0 m-0 progressbar-blank"})]})},filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"12rem"}}),(0,o.jsx)(u.s,{sortable:!0,field:"project",header:"Project",filter:!0,filterPlaceholder:"Search by project name",style:{minWidth:"12rem"},body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{children:e.project})})})}}),(0,o.jsx)(u.s,{sortable:!0,field:"running",header:"Running",align:"center",body:function(e){return e.running?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{children:(0,o.jsx)(f.Q,{className:"p-2 mr-2",status:e.state})})})}):(0,o.jsx)("div",{})}}),(0,o.jsx)(u.s,{sortable:!0,field:"statsSummary.cpuUsage",header:"CPU",align:"center",body:function(e){var n;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsxs)("a",{children:[(null===e||void 0===e||null===(n=e.statsSummary)||void 0===n?void 0:n.cpuUsage)||0,"%"]})})})}}),(0,o.jsx)(u.s,{sortable:!0,field:"status",header:"Status",align:"center",body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{children:e.status})})})}}),(0,o.jsx)(u.s,{sortable:!0,field:"statsSummary.memoryUsage",header:"Memory",align:"center",body:function(e){var n,t,r;return(null===(n=e.statsSummary)||void 0===n?void 0:n.memoryUsage)?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{children:(null===(t=e.statsSummary)||void 0===t?void 0:t.memoryUsage)?w.t.bytes((null===e||void 0===e||null===(r=e.statsSummary)||void 0===r?void 0:r.memoryUsage)||0):0})})}):(0,o.jsx)("div",{children:"-"})}}),(0,o.jsx)(u.s,{sortable:!0,field:"dead",header:"Dead",align:"center",body:function(e){return e.dead?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{children:(0,o.jsx)(d.C,{severity:"danger"})})})}):(0,o.jsx)("div",{children:(0,o.jsx)(d.C,{severity:"info"})})}}),(0,o.jsx)(u.s,{sortable:!0,field:"containerId",filter:!0,filterPlaceholder:"Search by docker Id",style:{minWidth:"12rem"},header:"Docker Id",body:function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,o.jsx)("a",{children:e.containerId})})})}}),(0,o.jsx)(u.s,{selectionMode:"multiple",headerStyle:{width:"3em"}})]}),(null===V||void 0===V?void 0:V.length)>0&&(0,o.jsx)("div",{className:"col-12 text-right pr-2",children:(0,o.jsx)(v.z,{className:"mt-2 p-button-warning",label:"Remove Selected",icon:"fa fa-trash",onClick:function(e){return function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,j.V)({className:"confirm-dialogs",message:t,target:(null===r||void 0===r?void 0:r.currentTarget)?r.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){switch(e){case"removeContainer":re(n);break;case"removeSelected":le()}}})}("removeSelected",null,"Remove Selected Containers?",e)}})})]})})}},58650:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){return o=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},o(e,n)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,n){if(n&&("object"===i(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function c(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=s(e);if(n){var l=s(this).constructor;t=Reflect.construct(r,arguments,l)}else t=r.apply(this,arguments);return a(this,t)}}t.d(n,{s:function(){return p}});var u,d,f,p=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&o(e,n)}(s,e);var n,t,i,a=c(s);function s(){return l(this,s),a.apply(this,arguments)}return n=s,t&&r(n.prototype,t),i&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}(t(67294).Component);f={columnKey:null,field:null,sortField:null,filterField:null,exportField:null,header:null,body:null,footer:null,sortable:!1,sortableDisabled:!1,sortFunction:null,dataType:"text",filter:!1,filterMatchMode:null,filterPlaceholder:null,filterType:"text",filterMaxLength:null,filterElement:null,filterFunction:null,filterHeaderStyle:null,filterHeaderClassName:null,showFilterMenu:!0,showFilterOperator:!0,showClearButton:!0,showApplyButton:!0,showFilterMatchModes:!0,showFilterMenuOptions:!0,showAddButton:!0,filterMatchModeOptions:null,maxConstraints:2,filterMenuClassName:null,filterMenuStyle:null,align:null,alignHeader:null,alignFrozen:"left",hidden:!1,onFilterClear:null,onFilterApplyClick:null,onFilterMatchModeChange:null,onFilterOperatorChange:null,onFilterConstraintAdd:null,onFilterConstraintRemove:null,filterClear:null,filterApply:null,filterHeader:null,filterFooter:null,style:null,className:null,headerStyle:null,headerClassName:null,bodyStyle:null,bodyClassName:null,footerStyle:null,footerClassName:null,expander:!1,frozen:!1,selectionMode:null,colSpan:null,rowSpan:null,editor:null,cellEditValidator:null,cellEditValidatorEvent:"click",onBeforeCellEditHide:null,onBeforeCellEditShow:null,onCellEditInit:null,onCellEditComplete:null,onCellEditCancel:null,excludeGlobalFilter:!1,rowReorder:!1,rowReorderIcon:"pi pi-bars",rowEditor:!1,exportable:!0,reorderable:!0},(d="defaultProps")in(u=p)?Object.defineProperty(u,d,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[d]=f}}]);