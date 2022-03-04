"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2723],{2723:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t=r(34051),a=r.n(t),i=r(85893),s=r(67294),o=r(11163),c=r(41664),l=r(42896),u=r(58650),d=r(45795),f=r(46374),m=r(25617),h=r(28565),v=r(92814),p=r(99403),x=r(25600),j=r(66367),g=r(51436),b=r(40424),y=r(78927),S=r(29318),N=r(57191);function C(e,n,r,t,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void r(l)}o.done?n(c):Promise.resolve(c).then(t,a)}function k(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function s(e){C(i,t,a,s,o,"next",e)}function o(e){C(i,t,a,s,o,"throw",e)}s(void 0)}))}}function w(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function I(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){w(e,n,r[n])}))}return e}function O(){var e=(0,o.useRouter)(),n=(0,s.useState)(!0),r=n[0],t=n[1],C=(0,s.useRef)(r);C.current=r;var w=(0,m.v9)((function(e){return e.site})),O=(0,m.v9)((function(e){return e.hosts.hosts}));(0,s.useRef)(O).current=O;var U=(0,m.v9)((function(e){return e.hosts.activeHost})),P=(0,s.useRef)(U);P.current=U;var F=(0,m.v9)((function(e){return e.containers})),R=(0,s.useState)(null)[0],M=(0,s.useState)(null),D=M[0],T=M[1],A=(0,s.useRef)(D);A.current=D;var E=(0,s.useState)(!1),_=E[0],W=E[1],G=(0,s.useState)(null),L=G[0],z=G[1];(0,s.useRef)(L).current=L;var H=(0,s.useState)(null),K=H[0],Q=H[1],V=(0,s.useRef)(K);V.current=K;var B=(0,s.useState)(null),q=B[0],J=B[1],X=(0,s.useState)(""),Y=X[0],Z=X[1];function $(){return ee.apply(this,arguments)}function ee(){return(ee=k(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=2;break}return e.abrupt("return");case 2:return W(!0),e.next=5,h.L.getSocket();case 5:return n=e.sent,T(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return(ne=k(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A.current.emit("docker",{command:"listContainers",callback:"containersIndexList",hostId:P.current.id}),t(!0),setTimeout((function(){t(!1)}),1e3);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,s.useEffect)(k(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_){e.next=3;break}return e.next=3,$();case 3:re();case 4:case"end":return e.stop()}}),e)}))),[]),(0,s.useEffect)((function(){var e,n=I({},F);if((U||(null===U||void 0===U?void 0:U.id))&&(null===(e=F[U.id])||void 0===e?void 0:e.containers)){n=F[U.id].containers;var r=Object.keys(n).map((function(e){return n[e]}));z(r),t(!1)}}),[U,F]);var re=function(){J({global:{value:null,matchMode:j.a6.CONTAINS},name:{operator:j.pg.AND,constraints:[{value:null,matchMode:j.a6.CONTAINS}]},project:{operator:j.pg.AND,constraints:[{value:null,matchMode:j.a6.CONTAINS}]},containerId:{operator:j.pg.AND,constraints:[{value:null,matchMode:j.a6.CONTAINS}]}})};if(R)return(0,i.jsxs)("div",{children:["Failed to load Container: ",R]});if(!F)return(0,i.jsx)("div",{children:"No Containers."});if(0===F.length)return(0,i.jsx)("div",{children:"No Containers."});var te=function(e){var n;A.current.emit("docker",{command:"remove",containerId:e.containerId,hostId:null===(n=e.host)||void 0===n?void 0:n.id,callback:"dockerResuls_containers"+e.id,hook:"removeContainer"})},ae=function(){V.current.forEach((function(e){!1===e.running&&te(e)})),Q(null)};return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"col-12 p-0 mt-2 pr-1 grid",children:[(0,i.jsx)("div",{className:"col-6",children:(0,i.jsxs)("h2",{children:[(0,i.jsx)(v.G,{icon:g.MW5,pull:"left",className:"fa-1x lightblue-color mt-0 pt-0",swapOpacity:!0}),"Docker Containers"]})}),(0,i.jsxs)("div",{className:"col-6 text-right pr-0",children:[(0,i.jsxs)("span",{className:"p-input-icon-left mr-3",children:[(0,i.jsx)("i",{className:"pi pi-search"}),(0,i.jsx)(x.o,{value:Y,onChange:function(e){var n=e.target.value,r=I({},q);r.global.value=n,J(r),Z(n)},placeholder:"Keyword Search"})]}),(0,i.jsx)(p.z,{label:"Container",className:"p-button-secondary mr-2",icon:"fa fa-plus",onClick:function(){return e.push("/containers/create")}}),(0,i.jsx)("button",{className:"p-button p-component p-button-secondary mt-1 p-2",label:"",onClick:function(){return function(){return ne.apply(this,arguments)}()},children:(0,i.jsx)(v.G,{icon:g.lUd,className:"mt-0 p-1",swapOpacity:!0})})]})]}),(0,i.jsxs)(l.w,{value:L,stripedRows:!0,rowHover:!0,showGridlines:!0,selection:K,onSelectionChange:function(e){return function(e){Q(e.value)}(e)},paginator:!0,rows:15,totalRecords:null===L||void 0===L?void 0:L.length,dataKey:"id",rowsPerPageOptions:[10,15,20,50,100,200],sortMode:"multiple",multiSortMeta:[{field:"statsSummary.cpuUsage",order:-1},{field:"statsSummary.memoryUsage",order:-1},{field:"running",order:-1},{field:"name",order:1}],responsiveLayout:"scroll",filters:q,filterDisplay:"menu",loading:C.current,globalFilterFields:["name","containerId"],children:[(0,i.jsx)(u.s,{sortable:!0,field:"id",header:"Id",body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{children:e.id})})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"name",header:"Name",body:function(e){var n,r,t,a,s,o="leftMenu-progressbar "+S.Q.progressBarCPUClasses(e),l=(null===(n=e.statsSummary)||void 0===n?void 0:n.cpuUsage)>0;return l=!!(e.running&&l&&(null===(r=w.userSettings)||void 0===r||null===(t=r.leftMenu)||void 0===t?void 0:t.showCpu)),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{className:"lightblue-color",children:e.name})}),l&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(y.k,{tooltip:(null===(a=e.statsSummary)||void 0===a?void 0:a.cpuUsage)+" % CPU Usage",className:o+" mt-3",value:Number(null===(s=e.statsSummary)||void 0===s?void 0:s.cpuUsage),displayValueTemplate:function(){return(0,i.jsx)("div",{})}})}),!l&&e.running&&(0,i.jsx)("div",{className:"col-12 p-0 m-0 progressbar-blank"})]})},filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"12rem"}}),(0,i.jsx)(u.s,{sortable:!0,field:"project",header:"Project",filter:!0,filterPlaceholder:"Search by project name",style:{minWidth:"12rem"},body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{children:e.project})})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"running",header:"Running",align:"center",body:function(e){return e.running?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{children:(0,i.jsx)(f.Q,{className:"p-2 mr-2",status:e.state})})})}):(0,i.jsx)("div",{})}}),(0,i.jsx)(u.s,{sortable:!0,field:"statsSummary.cpuUsage",header:"CPU",align:"center",body:function(e){var n;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsxs)("a",{children:[(null===e||void 0===e||null===(n=e.statsSummary)||void 0===n?void 0:n.cpuUsage)||0,"%"]})})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"status",header:"Status",align:"center",body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{children:e.status})})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"statsSummary.memoryUsage",header:"Memory",align:"center",body:function(e){var n,r,t;return(null===(n=e.statsSummary)||void 0===n?void 0:n.memoryUsage)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{children:(null===(r=e.statsSummary)||void 0===r?void 0:r.memoryUsage)?N.t.bytes((null===e||void 0===e||null===(t=e.statsSummary)||void 0===t?void 0:t.memoryUsage)||0):0})})}):(0,i.jsx)("div",{children:"-"})}}),(0,i.jsx)(u.s,{sortable:!0,field:"dead",header:"Dead",align:"center",body:function(e){return e.dead?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{children:(0,i.jsx)(d.C,{severity:"danger"})})})}):(0,i.jsx)("div",{children:(0,i.jsx)(d.C,{severity:"info"})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"containerId",filter:!0,filterPlaceholder:"Search by docker Id",style:{minWidth:"12rem"},header:"Docker Id",body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.default,{href:"/containers/[id]",as:"/containers/".concat(e.id),children:(0,i.jsx)("a",{children:e.containerId})})})}}),(0,i.jsx)(u.s,{selectionMode:"multiple",headerStyle:{width:"3em"}})]}),(null===K||void 0===K?void 0:K.length)>0&&(0,i.jsx)("div",{className:"col-12 text-right pr-2",children:(0,i.jsx)(p.z,{className:"mt-2 p-button-warning",label:"Remove Selected",icon:"fa fa-trash",onClick:function(e){return function(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,b.V)({className:"confirm-dialogs",message:r,target:(null===t||void 0===t?void 0:t.currentTarget)?t.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){switch(e){case"removeContainer":te(n);break;case"removeSelected":ae()}}})}("removeSelected",null,"Remove Selected Containers?",e)}})})]})})}}}]);