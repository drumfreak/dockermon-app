(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7473],{77355:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hosts",function(){return n(87862)}])},87862:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(34051),o=n.n(r),l=n(85893),i=n(67294),a=n(41664),u=n(42896),s=n(58650),c=n(25617),f=n(28565),d=n(99403),p=n(40424),h=n(11163),m=n(92814),v=n(66367),b=n(25600),y=n(51436);function g(e,t,n,r,o,l,i){try{var a=e[l](i),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function i(e){g(l,r,o,i,a,"next",e)}function a(e){g(l,r,o,i,a,"throw",e)}i(void 0)}))}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}function C(){var e=(0,h.useRouter)(),t=(0,i.useState)(!0),n=t[0],r=t[1],g=(0,i.useRef)(n);g.current=n;var x=(0,i.useState)(null)[0],C=(0,c.v9)((function(e){return e.hosts.hosts})),N=(0,c.v9)((function(e){return e.hosts.activeHost})),O=(0,i.useRef)(N);O.current=N;var S=(0,i.useState)(null),k=S[0],P=S[1],E=(0,i.useRef)(k);E.current=k;var F=(0,i.useState)(!1),_=F[0],R=F[1],M=(0,i.useState)(null),H=M[0],T=M[1];(0,i.useRef)(H).current=H;var A=(0,i.useState)(null),I=A[0],D=A[1],B=(0,i.useRef)(I);B.current=I;var z=(0,i.useState)(null),L=z[0],G=z[1],K=(0,i.useState)(""),V=K[0],U=K[1];function X(){return q.apply(this,arguments)}function q(){return(q=w(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=2;break}return e.abrupt("return");case 2:return R(!0),e.next=5,f.L.getSocket();case 5:return(t=e.sent).on("hosts_list",(function(e){if("success"===e.status&&e.data){var t=e.data;T(t)}})),P(t),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=w(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.current.emit("hosts",{command:"listHosts",callback:"hostsList",hostId:O.current.id}),r(!0),setTimeout((function(){r(!1)}),1e3);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if((0,i.useEffect)(w(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=3;break}return e.next=3,X();case 3:Q();case 4:case"end":return e.stop()}}),e)}))),[]),(0,i.useEffect)((function(){var e=j({},C),t=Object.keys(e).map((function(t){return e[t]}));r(!0),t.sort((function(e,t){return e.name||(e.name="Unknown"),e.name.localeCompare(t.name)})),T(t),r(!1)}),[C]),(0,i.useEffect)((function(){return function(){(null===E||void 0===E?void 0:E.current)&&E.current.removeListener("hosts_list")}}),[]),x)return(0,l.jsxs)("div",{children:["Failed to load Hosts: ",x]});var Q=function(){G({global:{value:null,matchMode:v.a6.CONTAINS},name:{operator:v.pg.AND,constraints:[{value:null,matchMode:v.a6.CONTAINS}]},project:{operator:v.pg.AND,constraints:[{value:null,matchMode:v.a6.CONTAINS}]},containerId:{operator:v.pg.AND,constraints:[{value:null,matchMode:v.a6.CONTAINS}]}})},W=function(e){E.current.emit("hosts",{command:"removeHost",callback:"dockerResuls_hosts"+e.id,hook:"removeHost"})},Y=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,p.V)({className:"confirm-dialogs",message:n,target:(null===r||void 0===r?void 0:r.currentTarget)?r.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){switch(e){case"removeHost":W(t);break;case"removeSelected":Z()}}})},Z=function(){B.current.forEach((function(e){var t;0===(null===(t=e.containers)||void 0===t?void 0:t.length)&&W(e)})),D(null)};return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"col-12 p-0 mt-2 pr-1 grid",children:[(0,l.jsx)("div",{className:"col-6",children:(0,l.jsxs)("h2",{children:[(0,l.jsx)(m.G,{icon:y.Pk,pull:"left",className:"fa-1x lightblue-color mt-0 pt-0",swapOpacity:!0}),"Docker Hosts"]})}),(0,l.jsxs)("div",{className:"col-6 text-right pr-0",children:[(0,l.jsxs)("span",{className:"p-input-icon-left mr-3",children:[(0,l.jsx)("i",{className:"pi pi-search"}),(0,l.jsx)(b.o,{value:V,onChange:function(e){var t=e.target.value,n=j({},L);n.global.value=t,G(n),U(t)},placeholder:"Keyword Search"})]}),(0,l.jsx)(d.z,{label:"Host",className:"p-button-secondary mr-2",icon:"fa fa-plus",onClick:function(){return e.push("/hosts/create")}}),(0,l.jsx)("button",{className:"p-button p-component p-button-secondary mt-1 p-2",label:"",onClick:function(){return function(){return J.apply(this,arguments)}()},children:(0,l.jsx)(m.G,{icon:y.lUd,className:"mt-0 p-1",swapOpacity:!0})})]})]}),(0,l.jsxs)(u.w,{value:H,stripedRows:!0,rowHover:!0,showGridlines:!0,selection:I,onSelectionChange:function(e){return function(e){D(e.value)}(e)},paginator:!0,rows:15,totalRecords:null===H||void 0===H?void 0:H.length,dataKey:"id",rowsPerPageOptions:[10,15,20,50,100,200],sortMode:"single",responsiveLayout:"scroll",sortField:"name",sortOrder:1,filters:L,filterDisplay:"menu",loading:g.current,globalFilterFields:["name","imageId","tag"],children:[(0,l.jsx)(s.s,{sortable:!0,field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",body:function(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.default,{href:"/hosts/[id]",as:"/hosts/".concat(e.id),children:(0,l.jsx)("a",{className:"lightblue-color",children:(0,l.jsx)("b",{children:e.name})})})})}}),(0,l.jsx)(s.s,{sortable:!0,field:"connectionType",header:"Type",align:"center"}),(0,l.jsx)(s.s,{sortable:!0,field:"ipAddress",header:"IP / Host",align:"left"}),(0,l.jsx)(s.s,{sortable:!0,field:"port",header:"Port",align:"right"}),(0,l.jsx)(s.s,{field:"id",header:"Actions",align:"center",body:function(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.z,{label:"",onClick:function(t){Y("removeHost",e,"Remove "+e.name+"?",t)},className:"p-button-secondary",icon:"pi pi-trash"})})}}),(0,l.jsx)(s.s,{selectionMode:"multiple",headerStyle:{width:"3em"}})]}),(null===I||void 0===I?void 0:I.length)>0&&(0,l.jsx)("div",{className:"col-12 text-right pr-2",children:(0,l.jsx)(d.z,{className:"mt-2 p-button-warning",label:"Remove Selected",icon:"fa fa-trash",onClick:function(e){return Y("removeSelected",null,"Remove Selected Hosts?",e)}})})]})})}},58650:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}n.d(t,{s:function(){return p}});var c,f,d,p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(u,e);var t,n,i,a=s(u);function u(){return o(this,u),a.apply(this,arguments)}return t=u,n&&r(t.prototype,n),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(n(67294).Component);d={columnKey:null,field:null,sortField:null,filterField:null,exportField:null,header:null,body:null,footer:null,sortable:!1,sortableDisabled:!1,sortFunction:null,dataType:"text",filter:!1,filterMatchMode:null,filterPlaceholder:null,filterType:"text",filterMaxLength:null,filterElement:null,filterFunction:null,filterHeaderStyle:null,filterHeaderClassName:null,showFilterMenu:!0,showFilterOperator:!0,showClearButton:!0,showApplyButton:!0,showFilterMatchModes:!0,showFilterMenuOptions:!0,showAddButton:!0,filterMatchModeOptions:null,maxConstraints:2,filterMenuClassName:null,filterMenuStyle:null,align:null,alignHeader:null,alignFrozen:"left",hidden:!1,onFilterClear:null,onFilterApplyClick:null,onFilterMatchModeChange:null,onFilterOperatorChange:null,onFilterConstraintAdd:null,onFilterConstraintRemove:null,filterClear:null,filterApply:null,filterHeader:null,filterFooter:null,style:null,className:null,headerStyle:null,headerClassName:null,bodyStyle:null,bodyClassName:null,footerStyle:null,footerClassName:null,expander:!1,frozen:!1,selectionMode:null,colSpan:null,rowSpan:null,editor:null,cellEditValidator:null,cellEditValidatorEvent:"click",onBeforeCellEditHide:null,onBeforeCellEditShow:null,onCellEditInit:null,onCellEditComplete:null,onCellEditCancel:null,excludeGlobalFilter:!1,rowReorder:!1,rowReorderIcon:"pi pi-bars",rowEditor:!1,exportable:!0,reorderable:!0},(f="defaultProps")in(c=p)?Object.defineProperty(c,f,{value:d,enumerable:!0,configurable:!0,writable:!0}):c[f]=d}},function(e){e.O(0,[5257,2727,9774,2888,179],(function(){return t=77355,e(e.s=t);var t}));var t=e.O();_N_E=t}]);