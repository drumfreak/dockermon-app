(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2241],{13276:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/networks/[id]",function(){return n(92901)}])},36345:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),o=n(67294),i=n(43964),a=n(25852),s=n(30022),c=n(84283),l=n(52450);function u(e){var t=JSON.stringify(e.data,null,2),n=(0,o.useState)(e.collapsed||!1)[0],u=(0,o.useState)(!e.collapsed||!1),d=u[0],p=u[1],f=e.toggleable||!0,h=e.hideTree||!1,m=!!e.hideRaw,v=!!e.hideCode;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.s,{className:"p-0",header:e.header||"Data View",onCollapse:function(){return p(!1)},onExpand:function(){return p(!0)},toggleable:f,collapsed:n,children:d&&(0,r.jsxs)(a.f,{activeIndex:1,className:"p-0 m-0",children:[!v&&(0,r.jsx)(a.x,{header:"Code View",className:"p-0 m-0",leftIcon:"fa fa-solid fa-code mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-0",children:(0,r.jsx)(s.Z,{className:"p-1 m-0",language:"javascript",style:c.RY,showLineNumbers:e.showLineNumbers,wrapLines:!0,wrapLongLines:!1,children:t})})}),!h&&(0,r.jsx)(a.x,{header:"Tree View",className:"p-0 m-0",leftIcon:"fa fa-solid fa-tree mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-2",style:{},children:(0,r.jsx)(l.L,{className:"m-0",data:e.data,theme:{scheme:"brewer",author:"timoth\xe9e poisot (http://github.com/tpoisot)",base00:"#161b22",base01:"#2e2f30",base02:"#515253",base03:"#737475",base04:"#959697",base05:"#b7b8b9",base06:"#dadbdc",base07:"#fcfdfe",base08:"#e31a1c",base09:"#e6550d",base0A:"#dca060",base0B:"#31a354",base0C:"#80b1d3",base0D:"#3182bd",base0E:"#756bb1",base0F:"#b15928"},invertTheme:!1,shouldExpandNode:function(e){return 1===e.length}})})}),!m&&(0,r.jsx)(a.x,{header:"Raw View",className:"p-0 m-0",leftIcon:"fa fa-fw fa-file mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-2 mt-0",style:{},children:(0,r.jsx)("pre",{className:"p-0 m-0",children:(0,r.jsx)("code",{className:"p-0 m-0",children:t})})})})]})})})}},13413:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(34051),o=n.n(r),i=n(85893),a=n(67294),s=n(11163),c=n(96486),l=n.n(c),u=n(66823),d=n(99403),p=n(92814),f=n(51436),h=n(25617);function m(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){m(i,r,o,a,s,"next",e)}function s(e){m(i,r,o,a,s,"throw",e)}a(void 0)}))}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}function g(e){var t=(0,h.v9)((function(e){return e.networks})),n=(0,h.v9)((function(e){return e.containers})),r=(0,a.useRef)(n);r.current=n;var c=(0,s.useRouter)(),m=(0,a.useState)(null),b=m[0],g=m[1],w=(0,a.useRef)(b);w.current=b;var x=(0,a.useState)(null),k=x[0],N=x[1],j=(0,a.useRef)(k);j.current=k;var S=(0,a.useState)([]),E=S[0],C=S[1],O=(0,a.useState)([]),I=O[0],R=O[1];(0,a.useRef)(I).current=I;var P=function(e){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=e})),t.current}(k);function _(){return T.apply(this,arguments)}function T(){return(T=v(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(j.current);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=v(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w.current&&t&&Object.keys(t).forEach((function(e){Object.keys(t[e].networks).forEach((function(){var n=t[e].networks[w.current];n&&(N(n),setTimeout((function(){M(j.current)})))}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return z.apply(this,arguments)}function z(){return(z=v(o().mark((function t(n){var i,a,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.abrupt("return");case 3:if(a=n,n){t.next=6;break}return t.abrupt("return");case 6:s=[],(null===(i=n.containers)||void 0===i?void 0:i.length)>0&&n.containers.map((function(t){Object.keys(r.current).map((function(n){Object.keys(r.current[n].containers).filter((function(o){if(r.current[n].containers[o].containerId===t.containerId){var i=y({},r.current[n].containers[o]);Object.keys(a.details.Containers).map((function(e){if(e.includes(i.containerId)){var t=a.details.Containers[e];i.networkDetails=t}})),e.activeContainer===i.id?i.activeContainer=!0:i.activeContainer=!1,s.push({label:"node",type:"container",className:"network-root-container",expanded:!0,data:i,icon:"fa fa-fw fa-eye"})}}))}))})),R([{label:"network",type:"network",className:"network-root-node",expanded:!0,data:a,children:s,icon:"fa fa-fw fa-eye"}]);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,a.useEffect)((function(){g(e.network.id),setTimeout((function(){!function(){A.apply(this,arguments)}(),_()}))}),[e.network]),(0,a.useEffect)((function(){if(c.query.id&&t&&!l().isEqual(P,t[c.query.id])&&c.query.id in t){var e=t[c.query.id];N(e),setTimeout((function(){_()}),100)}}),[t]);return k?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"col-12",children:I.length>0&&(0,i.jsx)("div",{className:"col-12 network-orgchart",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("h5",{children:k.name}),(0,i.jsx)(u.O,{value:I,nodeTemplate:function(e){var t,n,r,o;if((null===(t=e.data)||void 0===t||null===(n=t.details)||void 0===n||null===(r=n.NetworkSettings)||void 0===r?void 0:r.IPAddress)&&(o=e.data.details.NetworkSettings.IPAddress),e.data.networkDetails&&e.data.networkDetails.IPv4Address&&(o=e.data.networkDetails.IPv4Address.split("/")[0]),e.type){var a,s,l,u,h="network-org-node ";return e.data.activeContainer&&(h+=" network-org-node-active"),(0,i.jsxs)("div",{className:h,children:["container"===e.type&&(0,i.jsx)("div",{className:"mt-0 pt-0",children:(0,i.jsx)(d.z,{className:"p-button-text p-button-plain col-12 mt-0 pt-0 mb-0 pb-0",onClick:function(){return c.push("/containers/"+e.data.id)},children:(0,i.jsxs)("div",{className:"col-12 grid pt-0 mt-0",children:[(0,i.jsx)("div",{className:"node-header mt-0 pt-0 pb-0 mb-0 col-12",children:(0,i.jsxs)("div",{className:"col-12",children:[(0,i.jsx)("div",{className:"col-12 text-center justify-content-center",children:(0,i.jsx)(p.G,{icon:f.MW5,className:"fa-xl text-green-500 mt-2 ml-auto mr-auto",swapOpacity:!0})}),(0,i.jsx)("div",{className:"col-12 text-center m-0 p-0",children:(0,i.jsx)("b",{children:e.data.name})})]})}),(0,i.jsx)("div",{className:"node-content col-12 p-0 m-0",children:o&&(0,i.jsx)(i.Fragment,{children:o})})]})})}),"network"===e.type&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"mt-0 pt-0",children:(0,i.jsx)(d.z,{className:"p-button-text p-button-plain col-12 mt-0 pt-0 mb-0 pb-0",onClick:function(){return c.push("/networks/"+e.data.id)},children:(0,i.jsxs)("div",{className:"col-12 grid pt-0 mt-0",children:[(0,i.jsx)("div",{className:"node-header mt-0 pt-0 pb-0 mb-0 col-12",children:(0,i.jsxs)("div",{className:"col-12",children:[(0,i.jsx)("div",{className:"col-12 text-center justify-content-center",children:(0,i.jsx)(p.G,{icon:f.kXW,className:"fa-3x text-green-500 mt-2 ml-auto mr-auto",swapOpacity:!0})}),(0,i.jsx)("div",{className:"col-12 text-center m-0 p-0",children:(0,i.jsx)("b",{children:e.data.name})})]})}),(0,i.jsx)("div",{className:"node-content col-12 p-0 m-0",children:(null===(u=null===(a=e.data)||void 0===a||null===(s=a.details)||void 0===s||null===(l=s.IPAM)||void 0===l?void 0:l.Config[0])||void 0===u?void 0:u.Gateway)&&(0,i.jsx)(i.Fragment,{children:e.data.details.IPAM.Config[0].Gateway})})]})})})})]})}if("department"===e.type)return e.label},selection:E,selectionMode:"multiple",onSelectionChange:function(e){return C(e.data)},className:"company"})]})})})}):(0,i.jsx)("div",{className:"text-center mt-5",children:"Network could not be found."})}},92901:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(34051),o=n.n(r),i=n(85893),a=n(42670),s=n(11163),c=n(67294),l=n(10619),u=n(40424),d=n(25617),p=n(96486),f=n.n(p),h=n(36345),m=n(28565),v=n(22946),b=n(11752),y=n(51388),g=(0,b.default)().publicRuntimeConfig,w="".concat(g.apiUrl),x=new v.X(""),k={results:x.asObservable(),getNetworks:function(e){return y.h.post("".concat(w,"/networks"),e).then((function(e){if("success"===e.status)return x.next(e),e;throw Error(e.message)})).catch((function(e){x.next(null),console.log(e)}))},getNetworkById:function(e){return y.h.get("".concat(w,"/networks/").concat(e)).then((function(e){if("success"===e.status)return x.next(e),e;throw Error(e.message)})).catch((function(e){x.next(null),console.log(e)}))}};var N=n(13413);function j(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,o)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){j(i,r,o,a,s,"next",e)}function s(e){j(i,r,o,a,s,"throw",e)}a(void 0)}))}}function E(){var e=function(e){if(e){var n,r=[];n=e.current?e.current:e,r.push({label:"Inspect",icon:"fa fa-fw fa-eye",command:function(){t()}}),n.active||r.push({label:"Remove",icon:"fa fa-fw fa-power-off",command:function(e){ee("removeNetwork","Remove Network?",e)}}),z(r)}},t=function(){var e;(j(!0),null===T||void 0===T?void 0:T.current)&&K.current.emit("docker",{command:"inspectNetwork",networkId:T.current.networkId,hostId:null===(e=T.current.host)||void 0===e?void 0:e.id,callback:"dockerResulsNetworks_"+T.current.id,hook:"inspectNetwork"})},n=function(){var e;K.current.emit("docker",{command:"removeNetwork",networkId:T.current.details.Id,hostId:null===(e=T.current.host)||void 0===e?void 0:e.id,callback:"dockerResulsNetworks_"+T.current.id,hook:"removeNetwork"})},r=(0,s.useRouter)(),p=(0,d.v9)((function(e){return e.networks})),v=(0,c.useState)(!0),b=v[0],y=v[1],g=(0,c.useRef)(b);g.current=b;var w=(0,c.useState)(!1),x=w[0],j=w[1];(0,c.useRef)(x).current=x;var E=(0,c.useState)(null),C=E[0],O=E[1],I=(0,c.useRef)(C);I.current=C;var R=(0,c.useState)(null),P=R[0],_=R[1],T=(0,c.useRef)(P);T.current=P;var A=(0,c.useState)(null),M=A[0],z=A[1],q=(0,c.useState)(null),L=q[0],D=q[1],F=(0,c.useState)(null),U=F[0],B=F[1],K=(0,c.useRef)(U);K.current=U;var V=(0,c.useState)(!1),Z=V[0],G=V[1],X=(0,c.useState)([])[0];(0,c.useRef)(X).current=X;var W=function(e){var t=(0,c.useRef)();return(0,c.useEffect)((function(){t.current=e})),t.current}(P);function $(){return J.apply(this,arguments)}function J(){return(J=S(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Z){t.next=2;break}return t.abrupt("return");case 2:return G(!0),n="dockerResulsNetworks_"+I.current,t.next=6,m.L.getSocket();case 6:return(r=t.sent).on(n,(function(t){if("success"===t.status&&t.data)if("removeNetwork"===t.hook)_(null);else t.data.id&&(_(t.data),e(t.data))})),B(r),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(){return(Y=S(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.query.id&&p&&Object.keys(p).forEach((function(t){var n=p[t];if(!f().isEqual(W,n.networks[r.query.id])&&r.query.id in n.networks){var o=n.networks[r.query.id];_(o),g.current&&y(!0),e(o),g.current&&y(!1)}}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(){return Q.apply(this,arguments)}function Q(){return(Q=S(o().mark((function t(){var n,r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g.current&&y(!0),T){t.next=11;break}return t.next=4,k.getNetworkById(I.current);case 4:n=t.sent,r=n.data,(i=n.error)&&(D(i),console.log("Error",i)),r&&(_(r),e(r),g.current&&y(!1)),t.next=12;break;case 11:e(T.current),g.current&&y(!1);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,c.useEffect)(S(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.query.id&&(O(r.query.id),setTimeout(S(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=3;break}return e.next=3,$();case 3:H();case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e)}))),[]),(0,c.useEffect)((function(){!function(){Y.apply(this,arguments)}()}),[p]),(0,c.useEffect)((function(){return function(){if(K.current){var e="dockerResulsNetworks_"+I.current;K.current.removeListener(e)}}}),[]);var ee=function(e,t){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,u.V)({className:"confirm-dialogs",message:t,target:(null===(r=o.originalEvent)||void 0===r?void 0:r.currentTarget)?o.originalEvent.currentTarget:null,header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){if("removeNetwork"===e)n()}})};return b?(0,i.jsx)(a.$,{}):L?(0,i.jsxs)("div",{children:["Failed to load Network: ",L]}):r.query.id?P?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"col-12",children:[(0,i.jsxs)("h2",{className:"grid col-12 p-0 m-0",children:[(0,i.jsx)("div",{className:"flex col-10 p-0 m-0",children:P.name}),(0,i.jsx)("div",{className:"col-2 text-right p-0 m-0",children:(0,i.jsxs)("h4",{children:["[",P.id,"]"]})})]}),(0,i.jsx)("div",{className:"flex col-12 justify-content-end"}),(0,i.jsx)("div",{className:"col-12 p-0 card",children:(0,i.jsx)(l.n,{className:"flex col-12 justify-content-end",model:M})})]}),(0,i.jsx)(N.Z,{network:P}),(0,i.jsxs)("div",{className:"col-12",children:[(0,i.jsx)(h.Z,{data:P,collapsed:!0,header:"Network Details"}),(0,i.jsx)("div",{className:"col-12 m1-2"})]})]}):(0,i.jsx)("div",{className:"text-center mt-5",children:"Network could not be found."}):(0,i.jsx)("div",{children:"Loading..."})}},66823:function(e,t,n){"use strict";n.d(t,{O:function(){return g}});var r=n(67294),o=n(13643);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var y=function(e){p(n,e);var t=b(n);function n(e){var r;return c(this,n),(r=t.call(this,e)).node=r.props.node,r.state={expanded:r.node.expanded},r}return u(n,[{key:"getLeaf",value:function(){return!1!==this.node.leaf&&!(this.node.children&&this.node.children.length)}},{key:"getColspan",value:function(){return this.node.children&&this.node.children.length?2*this.node.children.length:null}},{key:"onNodeClick",value:function(e,t){this.props.onNodeClick(e,t)}},{key:"toggleNode",value:function(e,t){this.setState((function(e){return{expanded:!e.expanded}})),e.preventDefault()}},{key:"isSelected",value:function(){return this.props.isSelected(this.node)}},{key:"render",value:function(){var e=this;this.node=this.props.node;var t=this.getColspan(),i=(0,o.AK)("p-organizationchart-node-content",this.node.className,{"p-organizationchart-selectable-node":this.props.selectionMode&&!1!==this.node.selectable,"p-highlight":this.isSelected()}),a=this.props.nodeTemplate&&this.props.nodeTemplate(this.node)?r.createElement("div",null,this.props.nodeTemplate(this.node)):r.createElement("div",null,this.node.label),s=(0,o.AK)("p-node-toggler-icon",{"pi pi-chevron-down":this.state.expanded,"pi pi-chevron-up":!this.state.expanded}),c=r.createElement("tr",null,r.createElement("td",{colSpan:t},r.createElement("div",{className:i,onClick:function(t){return e.onNodeClick(t,e.node)}},a,!this.getLeaf()&&r.createElement("a",{href:"#",className:"p-node-toggler",onClick:function(t){return e.toggleNode(t,e.node)}},r.createElement("i",{className:s}))))),l=!this.getLeaf()&&this.state.expanded?"inherit":"hidden",u=r.createElement("tr",{style:{visibility:l},className:"p-organizationchart-lines"},r.createElement("td",{colSpan:t},r.createElement("div",{className:"p-organizationchart-line-down"}))),d=this.node.children&&this.node.children.length,p=r.createElement("tr",{style:{visibility:l},className:"p-organizationchart-lines"},this.node.children&&1===this.node.children.length&&r.createElement("td",{colSpan:this.getColspan()},r.createElement("div",{className:"p-organizationchart-line-down"})),this.node.children&&this.node.children.length>1&&this.node.children.map((function(e,t){var n=(0,o.AK)("p-organizationchart-line-left",{"p-organizationchart-line-top":0!==t}),i=(0,o.AK)("p-organizationchart-line-right",{"p-organizationchart-line-top":t!==d-1});return[r.createElement("td",{key:t+"_lineleft",className:n},"\xa0"),r.createElement("td",{key:t+"_lineright",className:i},"\xa0")]}))),f=r.createElement("tr",{style:{visibility:l},className:"p-organizationchart-nodes"},this.node.children&&this.node.children.map((function(t,o){return r.createElement("td",{key:o,colSpan:"2"},r.createElement(n,{node:t,nodeTemplate:e.props.nodeTemplate,selectionMode:e.props.selectionMode,onNodeClick:e.props.onNodeClick,isSelected:e.props.isSelected}))})));return r.createElement("table",{className:"p-organizationchart-table"},r.createElement("tbody",null,c,u,p,f))}}]),n}(r.Component);v(y,"defaultProps",{node:null,nodeTemplate:null,root:!1,first:!1,last:!1,selectionMode:null,onNodeClick:null,isSelected:null});var g=function(e){p(n,e);var t=b(n);function n(e){var r;return c(this,n),(r=t.call(this,e)).root=r.props.value&&r.props.value.length?r.props.value[0]:null,r.onNodeClick=r.onNodeClick.bind(s(r)),r.isSelected=r.isSelected.bind(s(r)),r}return u(n,[{key:"onNodeClick",value:function(e,t){if(this.props.selectionMode){var n=e.target;if(n.className&&(-1!==n.className.indexOf("p-node-toggler")||-1!==n.className.indexOf("p-node-toggler-icon")))return;if(!1===t.selectable)return;var r,o=this.findIndexInSelection(t),i=o>=0;"single"===this.props.selectionMode?i?(r=null,this.props.onNodeUnselect&&this.props.onNodeUnselect({originalEvent:e,node:t})):(r=t,this.props.onNodeSelect&&this.props.onNodeSelect({originalEvent:e,node:t})):"multiple"===this.props.selectionMode&&(i?(r=this.props.selection.filter((function(e,t){return t!==o})),this.props.onNodeUnselect&&this.props.onNodeUnselect({originalEvent:e,node:t})):(r=[].concat(a(this.props.selection||[]),[t]),this.props.onNodeSelect&&this.props.onNodeSelect({originalEvent:e,node:t}))),this.props.onSelectionChange&&this.props.onSelectionChange({originalEvent:e,data:r})}}},{key:"findIndexInSelection",value:function(e){var t=-1;if(this.props.selectionMode&&this.props.selection)if("single"===this.props.selectionMode)t=this.props.selection===e?0:-1;else if("multiple"===this.props.selectionMode)for(var n=0;n<this.props.selection.length;n++)if(this.props.selection[n]===e){t=n;break}return t}},{key:"isSelected",value:function(e){return-1!==this.findIndexInSelection(e)}},{key:"render",value:function(){this.root=this.props.value&&this.props.value.length?this.props.value[0]:null;var e=(0,o.AK)("p-organizationchart p-component",this.props.className);return r.createElement("div",{id:this.props.id,style:this.props.style,className:e},r.createElement(y,{node:this.root,nodeTemplate:this.props.nodeTemplate,selectionMode:this.props.selectionMode,onNodeClick:this.onNodeClick,isSelected:this.isSelected}))}}]),n}(r.Component);v(g,"defaultProps",{id:null,value:null,style:null,className:null,selectionMode:null,selection:null,nodeTemplate:null,onSelectionChange:null,onNodeSelect:null,onNodeUnselect:null})}},function(e){e.O(0,[3662,9723,9774,2888,179],(function(){return t=13276,e(e.s=t);var t}));var t=e.O();_N_E=t}]);