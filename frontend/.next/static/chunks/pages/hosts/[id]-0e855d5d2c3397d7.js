(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2381],{30235:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hosts/[id]",function(){return n(67851)}])},67851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(34051),s=n.n(r),c=n(85893),u=n(42670),o=n(11163),a=n(67294),i=n(10619),f=n(40424),l=n(25617),d=n(96486),v=n.n(d),h=n(28565),m=n(23627),p=n(57266);function x(e,t,n,r,s,c,u){try{var o=e[c](u),a=o.value}catch(i){return void n(i)}o.done?t(a):Promise.resolve(a).then(r,s)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var c=e.apply(t,n);function u(e){x(c,r,s,u,o,"next",e)}function o(e){x(c,r,s,u,o,"throw",e)}u(void 0)}))}}function w(){var e=function(){var e=[];e.push({label:"Remove",icon:"fa fa-fw fa-power-off",command:function(e){W("removeHost","Remove Host?",e)}}),e.push({label:"Edit",icon:"fa fa-fw fa-edit",command:function(){d.push("/hosts/edit?id="+S.current)}}),e.push({label:"Inspect",icon:"fa fa-fw fa-eye",command:function(){t()}}),O(e)},t=function(){var e;(_(!0),null===I||void 0===I?void 0:I.current)&&$.current.emit("hosts",{command:"inspectHost",hostId:null===(e=I.current.host)||void 0===e?void 0:e.id,callback:"dockerResulsHosts_"+I.current.id,hook:"inspectHost"})},n=function(){$.current.emit("hosts",{command:"removeHost",host:I.current,callback:"dockerResulsHosts_"+I.current.id,hook:"removeHost"})},r=function(){$.current&&$.current.emit("hosts",{command:"listHosts",callback:"hostsList"})},d=(0,o.useRouter)(),x=(0,l.v9)((function(e){return e.hosts.hosts})),w=(0,a.useState)(!0),g=w[0],b=w[1],y=(0,a.useRef)(g);y.current=g;var H=(0,a.useState)(!1),E=H[0],_=H[1];(0,a.useRef)(E).current=E;var R=(0,a.useState)(),j=R[0],N=R[1],S=(0,a.useRef)(j);S.current=j;var q=(0,a.useState)(),T=q[0],C=q[1],I=(0,a.useRef)(T);I.current=T;var L=(0,a.useState)(),P=L[0],O=L[1],X=(0,a.useState)(),B=X[0],F=X[1],U=(0,a.useState)(),V=U[0],Z=U[1],$=(0,a.useRef)(V);$.current=V;var z=(0,a.useState)(!1),A=z[0],D=z[1],G=function(e){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=e})),t.current}(T);function J(){return K.apply(this,arguments)}function K(){return(K=k(s().mark((function t(){var n,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!A){t.next=2;break}return t.abrupt("return");case 2:return D(!0),n="dockerResulsHosts_"+S.current,t.next=6,h.L.getSocket();case 6:return(c=t.sent).on(n,(function(t){if(r(),"success"===t.status&&t.data)if("removeHost"===t.hook)C(null);else t.data.id&&(C(t.data),e())})),Z(c),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){return Q.apply(this,arguments)}function Q(){return(Q=k(s().mark((function t(){var n,r,c;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y.current&&b(!0),I){t.next=11;break}return t.next=4,m.d.getHostById(S.current);case 4:n=t.sent,r=n.data,(c=n.error)&&(F(c),console.log("Error",c)),r&&(C(r),e(),y.current&&b(!1)),t.next=12;break;case 11:e(),y.current&&b(!1);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,a.useEffect)(k(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.query.id&&(N(d.query.id),setTimeout(k(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=3;break}return e.next=3,J();case 3:M();case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)}))),[]),(0,a.useEffect)((function(){if(d.query.id&&x&&!v().isEqual(G,x[d.query.id])&&d.query.id in x){var t=x[d.query.id];C(t),y.current&&b(!0),e(),y.current&&b(!1)}}),[x]),(0,a.useEffect)((function(){return function(){if($.current){var e="dockerResulsHosts_"+S.current;$.current.removeListener(e)}}}),[]);var W=function(e,t){var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,f.V)({className:"confirm-dialogs",message:t,target:(null===(r=s.originalEvent)||void 0===r?void 0:r.currentTarget)?s.originalEvent.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){if("removeHost"===e)n()}})};return g?(0,c.jsx)(u.$,{}):B?(0,c.jsxs)("div",{children:["Failed to load Host: ",B]}):d.query.id?T?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("div",{className:"flex col-12 justify-content-end"}),(0,c.jsx)("div",{className:"col-12 p-0 card",children:(0,c.jsx)(i.n,{className:"flex col-12 justify-content-end",model:P})})]}),(0,c.jsx)(p.Z,{host:I.current}),(0,c.jsx)("div",{className:"col-12"})]}):(0,c.jsx)("div",{className:"text-center mt-5",children:"Host could not be found."}):(0,c.jsx)("div",{children:"Loading..."})}},23627:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(22946),s=n(11752),c=n(51388),u=(0,s.default)().publicRuntimeConfig,o="".concat(u.apiUrl),a=new r.X(""),i={results:a.asObservable(),getHosts:function(e){return c.h.post("".concat(o,"/hosts"),e).then((function(e){if("success"===e.status)return a.next(e),e;throw Error(e.message)})).catch((function(e){a.next(null),console.log(e)}))},getHostById:function(e){return c.h.get("".concat(o,"/hosts/").concat(e)).then((function(e){if("success"===e.status)return a.next(e),e;throw Error(e.message)})).catch((function(e){a.next(null),console.log(e)}))}}}},function(e){e.O(0,[5257,3662,7570,2727,9723,5533,8751,3621,2723,6173,9989,6903,2586,7266,9774,2888,179],(function(){return t=30235,e(e.s=t);var t}));var t=e.O();_N_E=t}]);