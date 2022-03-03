"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9989],{79989:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t=r(34051),a=r.n(t),i=r(85893),s=r(67294),l=r(11163),o=r(41664),c=r(42896),u=r(58650),d=r(45795),f=r(25617),m=r(28565),h=r(57191),g=r(99403),v=r(40424),p=r(92814),x=r(66367),b=r(25600),j=r(51436);function y(e,n,r,t,a,i,s){try{var l=e[i](s),o=l.value}catch(c){return void r(c)}l.done?n(o):Promise.resolve(o).then(t,a)}function N(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function s(e){y(i,t,a,s,l,"next",e)}function l(e){y(i,t,a,s,l,"throw",e)}s(void 0)}))}}function S(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){S(e,n,r[n])}))}return e}function w(){var e=(0,l.useRouter)(),n=(0,s.useState)(!0),r=n[0],t=n[1],y=(0,s.useRef)(r);y.current=r;var S=(0,s.useState)(null)[0],w=(0,f.v9)((function(e){return e.hosts.hosts}));(0,s.useRef)(w).current=w;var I=(0,f.v9)((function(e){return e.hosts.activeHost})),O=(0,s.useRef)(I);O.current=I;var C=(0,f.v9)((function(e){return e.images})),R=(0,s.useState)(null),F=R[0],P=R[1],T=(0,s.useRef)(F);T.current=F;var z=(0,s.useState)(!1),A=z[0],D=z[1],E=(0,s.useState)(null),M=E[0],V=E[1];(0,s.useRef)(M).current=M;var _=(0,s.useState)(null),G=_[0],L=_[1],H=(0,s.useRef)(G);H.current=G;var K=(0,s.useState)(null),U=K[0],Y=K[1],q=(0,s.useState)(""),B=q[0],J=q[1];function Q(){return W.apply(this,arguments)}function W(){return(W=N(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=2;break}return e.abrupt("return");case 2:return D(!0),e.next=5,m.L.getSocket();case 5:return n=e.sent,P(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=N(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T.current.emit("docker",{command:"listImages",callback:"imagesList",hostId:O.current.id}),t(!0),setTimeout((function(){t(!1)}),1e3);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,s.useEffect)(N(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=3;break}return e.next=3,Q();case 3:Z();case 4:case"end":return e.stop()}}),e)}))),[]),(0,s.useEffect)((function(){var e,n=k({},C);if(I||(null===I||void 0===I?void 0:I.id))if(C&&(null===(e=C[I.id])||void 0===e?void 0:e.images)){n=C[I.id].images;var r=Object.keys(n).map((function(e){return n[e]}));V(r),t(!1)}else console.log("returning")}),[I,C]);var Z=function(){Y({global:{value:null,matchMode:x.a6.CONTAINS},name:{operator:x.pg.AND,constraints:[{value:null,matchMode:x.a6.CONTAINS}]},project:{operator:x.pg.AND,constraints:[{value:null,matchMode:x.a6.CONTAINS}]},containerId:{operator:x.pg.AND,constraints:[{value:null,matchMode:x.a6.CONTAINS}]}})};if(console.log("Images",C),S)return(0,i.jsxs)("div",{children:["Failed to load Images: ",S]});if(!C)return(0,i.jsx)("div",{children:"No Images."});if(0===C.length)return(0,i.jsx)("div",{children:"No Images."});var $=function(e){var n;T.current.emit("docker",{command:"removeImage",imageId:e.imageId,hostId:null===(n=e.host)||void 0===n?void 0:n.id,callback:"dockerResuls_images"+e.id,hook:"removeImage"})},ee=function(e,n,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,v.V)({className:"confirm-dialogs",message:r,target:(null===t||void 0===t?void 0:t.currentTarget)?t.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){switch(e){case"removeImage":$(n);break;case"removeSelected":ne()}}})},ne=function(){H.current.forEach((function(e){var n;0===(null===(n=e.containers)||void 0===n?void 0:n.length)&&$(e)})),L(null)};return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"col-12 p-0 mt-2 pr-1 grid",children:[(0,i.jsx)("div",{className:"col-6",children:(0,i.jsxs)("h2",{children:[(0,i.jsx)(p.G,{icon:j.Yws,pull:"left",className:"fa-1x lightblue-color mt-0 pt-0",swapOpacity:!0}),"Docker Images"]})}),(0,i.jsxs)("div",{className:"col-6 text-right pr-0",children:[(0,i.jsxs)("span",{className:"p-input-icon-left mr-3",children:[(0,i.jsx)("i",{className:"pi pi-search"}),(0,i.jsx)(b.o,{value:B,onChange:function(e){var n=e.target.value,r=k({},U);r.global.value=n,Y(r),J(n)},placeholder:"Keyword Search"})]}),(0,i.jsx)(g.z,{label:"Image",className:"p-button-secondary mr-2",icon:"fa fa-plus",onClick:function(){return e.push("/images/create")}}),(0,i.jsx)("button",{className:"p-button p-component p-button-secondary mt-1 p-2",label:"",onClick:function(){return function(){return X.apply(this,arguments)}()},children:(0,i.jsx)(p.G,{icon:j.lUd,className:"mt-0 p-1",swapOpacity:!0})})]})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c.w,{value:M,stripedRows:!0,rowHover:!0,showGridlines:!0,selection:G,onSelectionChange:function(e){return function(e){L(e.value)}(e)},paginator:!0,rows:15,totalRecords:null===M||void 0===M?void 0:M.length,dataKey:"id",rowsPerPageOptions:[10,15,20,50,100,200],sortMode:"single",responsiveLayout:"scroll",sortField:"name",sortOrder:1,filters:U,filterDisplay:"menu",loading:y.current,globalFilterFields:["name","imageId","tag"],children:[(0,i.jsx)(u.s,{sortable:!0,field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,i.jsx)("a",{className:"lightblue-color",children:(0,i.jsx)("b",{children:e.name})})})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"tag",header:"Tag",filter:!0,filterPlaceholder:"Search by Tag",body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,i.jsx)("a",{className:"lightblue-color",children:(0,i.jsx)("b",{children:e.tag})})})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"fileSize",header:"Size",align:"center",body:function(e){return e.fileSize?(0,i.jsx)(i.Fragment,{children:h.t.bytes(e.fileSize)}):(0,i.jsx)("div",{children:h.t.bytes(e.fileSize)})}}),(0,i.jsx)(u.s,{sortable:!0,field:"dockerVersion",header:"Docker Version",filter:!0,filterPlaceholder:"Search by Docker Version",align:"center",body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,i.jsx)("a",{children:e.dockerVersion})})})}}),(0,i.jsx)(u.s,{sortable:!0,field:"status",header:"Status",align:"center",body:function(e){var n;if((null===e||void 0===e||null===(n=e.containers)||void 0===n?void 0:n.length)>0)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.default,{href:"/images/[id]",as:"/images/".concat(e.id),children:(0,i.jsx)("a",{children:(0,i.jsx)(d.C,{size:"",value:"In Use",severity:"success"})})})})}}),(0,i.jsx)(u.s,{field:"id",header:"Actions",align:"center",body:function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(g.z,{label:"",onClick:function(n){ee("removeImage",e,"Remove "+e.pullTag+"?",n)},className:"p-button-secondary",icon:"pi pi-trash"})})}}),(0,i.jsx)(u.s,{selectionMode:"multiple",headerStyle:{width:"3em"}})]}),(null===G||void 0===G?void 0:G.length)>0&&(0,i.jsx)("div",{className:"col-12 text-right pr-2",children:(0,i.jsx)(g.z,{className:"mt-2 p-button-warning",label:"Remove Selected",icon:"fa fa-trash",onClick:function(e){return ee("removeSelected",null,"Remove Selected Images?",e)}})})]})]})})}}}]);