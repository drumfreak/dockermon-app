(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3654],{60931:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hosts/create",function(){return r(13794)}])},13794:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(34051),s=r.n(n),c=r(85893),o=r(11163),a=r(67294),i=r(40424),l=r(87536),u=r(95496),d=r(74231),m=r(99403),p=r(25600),f=r(46479),h=r(28565),v=r(49861),x=r(42670),j=r(43964),b=r(91176),g=r(92814),N=r(51436),y=r(91202),k=r(3718);function w(e,t,r,n,s,c,o){try{var a=e[c](o),i=a.value}catch(l){return void r(l)}a.done?t(i):Promise.resolve(i).then(n,s)}function S(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var c=e.apply(t,r);function o(e){w(c,n,s,o,a,"next",e)}function a(e){w(c,n,s,o,a,"throw",e)}o(void 0)}))}}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}function T(){var e,t,r,n,w=function(){V.current&&V.current.emit("hosts",{command:"listHosts",callback:"hostsList"})},_=function(){return v.W.generateName()},T=(0,o.useRouter)(),A=(0,a.useRef)(null),H=(0,a.useState)()[0];(0,a.useRef)(H).current=H;var C=(0,a.useState)(!1),F=C[0],O=C[1],P=(0,a.useState)(!0),E=P[0],q=P[1];(0,a.useRef)(E).current=E;var L=(0,a.useState)(),I=L[0],D=L[1],V=(0,a.useRef)(I);V.current=I;var X=(0,a.useState)(!1),z=X[0],B=X[1],G=(0,a.useState)("http"),W=G[0],Z=G[1],$=(0,a.useRef)(W);$.current=W;var J=(0,a.useState)(!0),K=J[0],M=J[1],Q=(0,a.useRef)(K);Q.current=K;var U=(0,a.useState)(!0),Y=U[0],ee=U[1],te=(0,a.useRef)(Y);te.current=Y;var re=(0,a.useState)(!1),ne=re[0],se=re[1],ce=(0,a.useRef)(ne);ce.current=ne,(0,a.useEffect)(S(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=3;break}return e.next=3,ae();case 3:q(!1);case 4:case"end":return e.stop()}}),e)}))),[]),(0,a.useEffect)((function(){return function(){V.current&&V.current.removeListener("createHostForm")}}),[]);var oe=function(){A.current.clear()};function ae(){return ie.apply(this,arguments)}function ie(){return(ie=S(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!z){e.next=2;break}return e.abrupt("return");case 2:return B(!0),e.next=5,h.L.getSocket();case 5:return(t=e.sent).on("createHostForm",(function(e){se(!1),console.debug("-----------\x3e Create Host Result  ",e),"success"===e.status&&(w(),(0,i.V)({className:"confirm-dialogs",message:"Would you like to view it now?",header:"Host Created",icon:"pi pi-exclamation-check",accept:function(){return T.push("/hosts/"+e.data.id)},reject:function(){return q(!1)}})),e.error&&(F||O(!0),q(!1))})),D(t),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var le=d.Ry({name:d.Z_().required(),ipAddress:d.Z_().required(),port:d.Rx().required()}).required(),ue=(0,l.cI)({resolver:(0,u.X)(le)}),de=ue.register,me=ue.handleSubmit,pe=ue.setValue,fe=ue.formState.errors;return E?(0,c.jsx)(x.$,{}):(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"New Host"}),(0,c.jsx)(j.s,{className:"col-8 md:8 m-auto",children:(0,c.jsx)("div",{className:"card",children:(0,c.jsx)("form",{onSubmit:me((function(e){oe(),se(!0);var t={name:e.name,ipAddress:e.ipAddress,port:te.current,active:Q.current,connectionType:$.current};q(!0),V.current.emit("hosts",{command:"createHost",data:t,callback:"createHostForm",hook:"createHost"})})),children:(0,c.jsxs)("div",{className:"p-fluid p-formgrid p-grid mt-5 ml-auto mr-auto jc-center",children:[(0,c.jsxs)(j.s,{className:"mt-3",header:"Basic Details",toggleable:!0,children:[(0,c.jsx)("div",{className:"form-group",children:(0,c.jsxs)("div",{className:"p-field mt-2 col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,c.jsx)("label",{htmlFor:"name",children:"Name"}),(0,c.jsxs)("div",{className:"p-inputgroup",children:[(0,c.jsx)(p.o,R({id:"name",keyfilter:/^[^<>*!\s]+$/,name:"name",type:"text",required:!0,disabled:ce.current},de("name",{value:_()}),{className:"form-control f-height-inputs ".concat(fe.name?"p-invalid":"")}),"name"),(0,c.jsx)("div",{className:"p-inputgroup-addon",children:(0,c.jsx)(m.z,{className:"p-button p-button-secondary",disabled:ce.current,onClick:function(e){e.preventDefault();var t=_();pe("name",t)},children:(0,c.jsx)(g.G,{icon:N.qiA})})})]}),(0,c.jsx)("div",{className:"invalid-feedback",children:null===(e=fe.name)||void 0===e?void 0:e.message})]})}),(0,c.jsx)("div",{className:"form-group mt-5",children:(0,c.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,c.jsx)("label",{htmlFor:"project",children:"Connection Type"}),(0,c.jsxs)("div",{className:"p-inputgroup",children:[(0,c.jsx)(y.L,R({name:"connectionType",id:"connectionType",options:["http","https","ws"],placeholder:"Connection Type",disabled:ce.current},de("connectionType",{value:"http"}),{onChange:function(e){Z(e.value),pe("connectionType",e.value)},value:null===$||void 0===$?void 0:$.current,className:"form-control f-height-inputs ".concat(fe.connectionType?"p-invalid":"")}),"connectionType"),(0,c.jsx)("div",{className:"invalid-feedback",children:null===(t=fe.connectionType)||void 0===t?void 0:t.message})]})]})}),(0,c.jsxs)("div",{className:"form-group mt-5",children:[(0,c.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,c.jsx)("label",{htmlFor:"driver",children:"IP Address or Hostname"}),(0,c.jsx)(p.o,R({id:"ipAddress",name:"ipAddress",type:"text",placeholder:"192.168.100.10",disabled:ce.current},de("ipAddress",{value:null}),{className:"form-control f-height-inputs ".concat(fe.ipAddress?"p-invalid":"")}),"ipAddress"),(0,c.jsx)("div",{className:"invalid-feedback",children:null===(r=fe.ipAddress)||void 0===r?void 0:r.message})]}),(0,c.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,c.jsx)("label",{htmlFor:"driver",children:"Port Number"}),(0,c.jsx)(b.R,R({min:1,inputId:"port",placeholder:"2375",step:1,useGrouping:!1,showButtons:!1,value:te.current,disabled:ce.current},de("port",{value:2375}),{tooltip:"The port number.",onChange:function(e){return ee(e.value)}})),(0,c.jsx)("div",{className:"invalid-feedback",children:null===(n=fe.port)||void 0===n?void 0:n.message})]})]}),(0,c.jsx)("div",{className:"form-group mt-5",children:(0,c.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,c.jsx)("label",{htmlFor:"project",children:"Host Status"}),(0,c.jsx)("div",{className:"col-6 ml-auto mr-auto",children:(0,c.jsx)(k.C,{className:"col-6 m-auto",checked:K,onChange:function(e){return M(e.value)},onLabel:"Active",offLabel:"Disabled",onIcon:"pi pi-check",offIcon:"pi pi-times"})})]})})]}),(0,c.jsx)("div",{className:"col-6 ml-auto mr-auto mt-5",children:(0,c.jsx)(m.z,{disabled:ce.current,className:"p-button p-button-primary p-3",type:"submit",label:"Join Host"})}),(0,c.jsx)(f.V,{ref:A})]})})})},"containerForm")]})})}}},function(e){e.O(0,[3978,699,9861,9774,2888,179],(function(){return t=60931,e(e.s=t);var t}));var t=e.O();_N_E=t}]);