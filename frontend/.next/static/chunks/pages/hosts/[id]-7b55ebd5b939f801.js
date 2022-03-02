(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2381],{30235:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hosts/[id]",function(){return n(19407)}])},36345:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),s=n(67294),a=n(43964),c=n(25852),o=n(30022),u=n(84283),i=n(52450);function l(e){var t=JSON.stringify(e.data,null,2),n=(0,s.useState)(e.collapsed||!1)[0],l=(0,s.useState)(!e.collapsed||!1),d=l[0],f=l[1],h=e.toggleable||!0,m=e.hideTree||!1,v=!!e.hideRaw,p=!!e.hideCode;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.s,{className:"p-0",header:e.header||"Data View",onCollapse:function(){return f(!1)},onExpand:function(){return f(!0)},toggleable:h,collapsed:n,children:d&&(0,r.jsxs)(c.f,{activeIndex:1,className:"p-0 m-0",children:[!p&&(0,r.jsx)(c.x,{header:"Code View",className:"p-0 m-0",leftIcon:"fa fa-solid fa-code mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-0",children:(0,r.jsx)(o.Z,{className:"p-1 m-0",language:"javascript",style:u.RY,showLineNumbers:e.showLineNumbers,wrapLines:!0,wrapLongLines:!1,children:t})})}),!m&&(0,r.jsx)(c.x,{header:"Tree View",className:"p-0 m-0",leftIcon:"fa fa-solid fa-tree mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-2",style:{overflowX:"scroll"},children:(0,r.jsx)(i.L,{className:"m-0",data:e.data,theme:{scheme:"brewer",author:"timoth\xe9e poisot (http://github.com/tpoisot)",base00:"#161b22",base01:"#2e2f30",base02:"#515253",base03:"#737475",base04:"#959697",base05:"#b7b8b9",base06:"#dadbdc",base07:"#fcfdfe",base08:"#e31a1c",base09:"#e6550d",base0A:"#dca060",base0B:"#31a354",base0C:"#80b1d3",base0D:"#3182bd",base0E:"#756bb1",base0F:"#b15928"},invertTheme:!1,shouldExpandNode:function(e){return 1===e.length}})})}),!v&&(0,r.jsx)(c.x,{header:"Raw View",className:"p-0 m-0",leftIcon:"fa fa-fw fa-file mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-2 mt-0",style:{overflowX:"scroll"},children:(0,r.jsx)("pre",{className:"p-0 m-0",children:(0,r.jsx)("code",{className:"p-0 m-0",children:t})})})})]})})})}},19407:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(34051),s=n.n(r),a=n(85893),c=n(42670),o=n(11163),u=n(67294),i=n(10619),l=n(40424),d=n(25617),f=n(96486),h=n.n(f),m=n(36345),v=n(28565),p=n(22946),x=n(11752),b=n(51388),g=(0,x.default)().publicRuntimeConfig,w="".concat(g.apiUrl),j=new p.X(""),N={results:j.asObservable(),getHosts:function(e){return b.h.post("".concat(w,"/hosts"),e).then((function(e){if("success"===e.status)return j.next(e),e;throw Error(e.message)})).catch((function(e){j.next(null),console.log(e)}))},getHostById:function(e){return b.h.get("".concat(w,"/hosts/").concat(e)).then((function(e){if("success"===e.status)return j.next(e),e;throw Error(e.message)})).catch((function(e){j.next(null),console.log(e)}))}};function k(e,t,n,r,s,a,c){try{var o=e[a](c),u=o.value}catch(i){return void n(i)}o.done?t(u):Promise.resolve(u).then(r,s)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){k(a,r,s,c,o,"next",e)}function o(e){k(a,r,s,c,o,"throw",e)}c(void 0)}))}}function E(){var e=function(e){var n,r=[];n=e.current?e.current:e,r.push({label:"Inspect",icon:"fa fa-fw fa-eye",command:function(){t()}}),n.active||r.push({label:"Remove",icon:"fa fa-fw fa-power-off",command:function(e){M("removeHost","Remove Host?",e)}}),V(r)},t=function(){var e;(k(!0),null===q||void 0===q?void 0:q.current)&&Z.current.emit("docker",{command:"inspectHost",hostId:null===(e=q.current.host)||void 0===e?void 0:e.id,callback:"dockerResulsHosts_"+q.current.id,hook:"inspectHost"})},n=function(){var e;Z.current.emit("docker",{command:"removeHost",hostId:null===(e=q.current.host)||void 0===e?void 0:e.id,callback:"dockerResulsHosts_"+q.current.id,hook:"removeHost"})},r=(0,o.useRouter)(),f=(0,d.v9)((function(e){return e.hosts.hosts})),p=(0,u.useState)(!0),x=p[0],b=p[1],g=(0,u.useRef)(x);g.current=x;var w=(0,u.useState)(!1),j=w[0],k=w[1];(0,u.useRef)(j).current=j;var E=(0,u.useState)(null),H=E[0],R=E[1],_=(0,u.useRef)(H);_.current=H;var S=(0,u.useState)(null),I=S[0],L=S[1],q=(0,u.useRef)(I);q.current=I;var C=(0,u.useState)(null),T=C[0],V=C[1],X=(0,u.useState)(null),F=X[0],O=X[1],P=(0,u.useState)(null),B=P[0],D=P[1],Z=(0,u.useRef)(B);Z.current=B;var A=(0,u.useState)(!1),J=A[0],U=A[1],Y=function(e){var t=(0,u.useRef)();return(0,u.useEffect)((function(){t.current=e})),t.current}(I);function $(){return z.apply(this,arguments)}function z(){return(z=y(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!J){t.next=2;break}return t.abrupt("return");case 2:return U(!0),n="dockerResulsHosts_"+_.current,t.next=6,v.L.getSocket();case 6:return(r=t.sent).on(n,(function(t){if("success"===t.status&&t.data)if("removeHost"===t.hook)L(null);else t.data.id&&(L(t.data),e(t.data))})),D(r),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(){return K.apply(this,arguments)}function K(){return(K=y(s().mark((function t(){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g.current&&b(!0),q){t.next=11;break}return t.next=4,N.getHostById(_.current);case 4:n=t.sent,r=n.data,(a=n.error)&&(O(a),console.log("Error",a)),r&&(L(r),e(r),g.current&&b(!1)),t.next=12;break;case 11:e(q),g.current&&b(!1);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,u.useEffect)(y(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.query.id&&(R(r.query.id),setTimeout(y(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J){e.next=3;break}return e.next=3,$();case 3:G();case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)}))),[]),(0,u.useEffect)((function(){if(r.query.id&&f&&!h().isEqual(Y,f[r.query.id])&&r.query.id in f){var t=f[r.query.id];L(t),g.current&&b(!0),e(t),g.current&&b(!1)}}),[f]),(0,u.useEffect)((function(){return function(){if(Z.current){var e="dockerResulsHosts_"+_.current;Z.current.removeListener(e)}}}),[]);var M=function(e,t){var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,l.V)({className:"confirm-dialogs",message:t,target:(null===(r=s.originalEvent)||void 0===r?void 0:r.currentTarget)?s.originalEvent.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){if("removeHost"===e)n()}})};return x?(0,a.jsx)(c.$,{}):F?(0,a.jsxs)("div",{children:["Failed to load Host: ",F]}):r.query.id?I?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsxs)("h2",{className:"grid col-12 p-0 m-0",children:[(0,a.jsx)("div",{className:"flex col-10 p-0 m-0",children:I.name}),(0,a.jsx)("div",{className:"col-2 text-right p-0 m-0",children:(0,a.jsxs)("h4",{children:["[",I.id,"]"]})})]}),(0,a.jsx)("div",{className:"flex col-12 justify-content-end"}),(0,a.jsx)("div",{className:"col-12 p-0 card",children:(0,a.jsx)(i.n,{className:"flex col-12 justify-content-end",model:T})})]}),(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)(m.Z,{data:I,collapsed:0,header:"Host Details"}),(0,a.jsx)("div",{className:"col-12 m1-2"})]})]}):(0,a.jsx)("div",{className:"text-center mt-5",children:"Host could not be found."}):(0,a.jsx)("div",{children:"Loading..."})}}},function(e){e.O(0,[3662,9723,9774,2888,179],(function(){return t=30235,e(e.s=t);var t}));var t=e.O();_N_E=t}]);