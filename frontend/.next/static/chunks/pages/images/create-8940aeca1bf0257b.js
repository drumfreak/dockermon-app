(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8300],{32342:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/images/create",function(){return n(22181)}])},22181:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(34051),o=n.n(r),a=n(85893),s=n(11163),i=n(67294),c=n(40424),l=n(87536),u=n(95496),f=n(74231),m=n(99403),p=n(25600),d=n(91202),v=n(43964),h=n(46479),y=n(25617),g=n(28565),b=n(49861),j=n(63861),x=n(30022),k=n(84283);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function C(e){var t=w({},e),n=(0,i.useState)(null),r=n[0],o=n[1];return(0,i.useEffect)((function(){o(t.container)}),[]),r?(0,a.jsx)(x.Z,{className:"m-0 p-4",language:"javascript",style:k.RY,showLineNumbers:!0,wrapLines:!0,wrapLongLines:!0,children:JSON.stringify(r,null,4)}):(0,a.jsx)("div",{})}function N(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){N(a,r,o,s,i,"next",e)}function i(e){N(a,r,o,s,i,"throw",e)}s(void 0)}))}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}function E(){var e,t,n,r,x=function(){return b.W.generateName()},k=(0,s.useRouter)(),w=(0,i.useRef)(null),N=(0,y.v9)((function(e){return e.hosts.activeHost})),S=(0,i.useRef)(N);S.current=N;var E=(0,y.v9)((function(e){return e.containers})),P=(0,y.v9)((function(e){return e.images})),_=(0,i.useState)(null)[0];(0,i.useRef)(_).current=_;var I=(0,i.useState)(!1),F=I[0],T=I[1],A=(0,i.useState)(!1),D=A[0],L=A[1],B=(0,i.useState)(null),V=B[0],M=B[1],q=(0,i.useRef)(V);q.current=V;var z=(0,i.useState)(null),H=z[0],U=z[1],W=(0,i.useRef)(H);W.current=H;var X=(0,i.useState)(!0),Z=X[0],$=X[1];(0,i.useRef)(Z).current=Z;var K=(0,i.useState)(null),J=K[0],Y=K[1],G=(0,i.useRef)(J);G.current=J;var Q=(0,i.useState)(!1),ee=Q[0],te=Q[1];(0,i.useEffect)(O(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee){e.next=3;break}return e.next=3,re();case 3:case"end":return e.stop()}}),e)}))),[]),(0,i.useEffect)((function(){var e=R({},E);if(N){e=E[S.current.id].containers;var t=Object.keys(e).map((function(t){return e[t]}));t.sort((function(e,t){return e.name||(e.name="Unknown"),e.name.localeCompare(t.name)})),M(t),setTimeout((function(){H||(U(t[0]),Z&&$(!1))}))}}),[P]),(0,i.useEffect)((function(){return function(){G.current&&G.current.removeListener("createImageForm")}}),[]);var ne=function(){w.current.clear()};function re(){return oe.apply(this,arguments)}function oe(){return(oe=O(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ee){e.next=2;break}return e.abrupt("return");case 2:return te(!0),e.next=5,g.L.getSocket();case 5:return(t=e.sent).on("createImageForm",(function(e){console.debug("-----------\x3e Create Image Result  ",e),"success"===e.status&&(0,c.V)({message:"Would you like to view it now?",header:"Image Created",icon:"pi pi-exclamation-check",accept:function(){return k.push("/images/"+e.data.id)}}),e.error&&(F||T(!0))})),Y(t),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=f.Ry({name:f.Z_().required()}).required(),se=(0,l.cI)({resolver:(0,u.X)(ae)}),ie=se.register,ce=se.handleSubmit,le=se.setValue,ue=se.formState.errors;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Create Image"}),(0,a.jsx)(v.s,{className:"col-8 md:8 m-auto",children:(0,a.jsx)("div",{className:"card",children:(0,a.jsx)("form",{onSubmit:ce((function(e){console.log("Submitting"),e.container=W.current.containerId,console.log("Fields Data",e),ne();var t={fromSrc:null,repo:e.name,tag:e.tag,message:"Test",author:"foo",container:e.container};console.log("Form Data",t),G.current.emit("docker",{command:"createImage",data:t,callback:"createImageForm",hook:"createImage",hostId:S.current.id})})),children:(0,a.jsxs)("div",{className:"p-fluid p-formgrid p-grid mt-5 ml-auto mr-auto jc-center",children:[(0,a.jsxs)(v.s,{className:"mt-3",header:"Basic Details",toggleable:!0,children:[(0,a.jsx)("div",{className:"form-group",children:(0,a.jsxs)("div",{className:"p-field mt-2 col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,a.jsx)("label",{htmlFor:"name",children:"Repo / Image Name"}),(0,a.jsxs)("div",{className:"p-inputgroup",children:[(0,a.jsx)(p.o,R({id:"name",keyfilter:/^[^<>*!\s]+$/,name:"name",type:"text",required:!0},ie("name",{value:x()}),{className:"form-control f-height-inputs ".concat(ue.name?"p-invalid":"")}),"name"),(0,a.jsx)("div",{className:"p-inputgroup-addon",children:(0,a.jsx)(m.z,{className:"p-button p-button-secondary",icon:"fa fa-rotate-right",onClick:function(e){e.preventDefault();var t=x();le("name",t)}})})]}),(0,a.jsx)("div",{className:"invalid-feedback",children:null===(e=ue.name)||void 0===e?void 0:e.message})]})}),(0,a.jsx)("div",{className:"form-group mt-5",children:(0,a.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,a.jsx)("label",{htmlFor:"tag",children:"Tag"}),(0,a.jsx)(p.o,R({id:"tag",name:"tag",keyfilter:/^[^<>*!\s]+$/,type:"text"},ie("tag",{value:"latest"}),{className:"form-control f-height-inputs ".concat(ue.tag?"p-invalid":"")}),"tag1"),(0,a.jsx)("div",{className:"invalid-feedback",children:null===(t=ue.tag)||void 0===t?void 0:t.message})]})}),(0,a.jsx)("div",{className:"form-group mt-5",children:(0,a.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,a.jsx)("label",{htmlFor:"project",children:"From Container"}),(0,a.jsxs)("div",{className:"p-inputgroup",children:[(0,a.jsx)(d.L,R({name:"container",id:"container",options:V,optionValue:"id",optionLabel:"name",filter:!0,showClear:!0,filterBy:"name",value:null===W||void 0===W||null===(n=W.current)||void 0===n?void 0:n.id,placeholder:"Select a Reference Container"},ie("container"),{onChange:function(e){!function(e){if(q.current){var t=q.current.filter((function(t){return t.id===e}));U(t[0])}}(e.value),le("container",e.value)},className:"form-control f-height-inputs ".concat(ue.cotainer?"p-invalid":"")}),"container1"),(0,a.jsx)("div",{className:"invalid-feedback",children:null===(r=ue.cotainer)||void 0===r?void 0:r.message}),(0,a.jsx)(m.z,{className:"p-button p-button-secondary mt-0",icon:"fa fa-faw fa-eye",onClick:function(e){e.preventDefault(),L(!D)}})]})]})})]}),(0,a.jsx)("div",{className:"col-6 ml-auto mr-auto mt-5",children:(0,a.jsx)(m.z,{className:"p-button p-button-primary p-3",type:"submit",label:"Create Image"})}),(0,a.jsx)(h.V,{ref:w})]})})})},"containerForm")]}),(0,a.jsx)(j.V,{header:"Container Details",visible:D,style:{width:"70vw"},onHide:function(){return L(!1)},children:(0,a.jsx)(C,{container:H})})]})}},46479:function(e,t,n){"use strict";n.d(t,{V:function(){return O}});var r=n(67294),o=n(13643),a=n(69868),s=n(73350),i=n(9529);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t){if(t&&("object"===h(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var k=function(e){v(n,e);var t=x(n);function n(e){var r;return u(this,n),(r=t.call(this,e)).onClick=r.onClick.bind(p(r)),r.onClose=r.onClose.bind(p(r)),r}return m(n,[{key:"componentDidMount",value:function(){var e=this;this.props.message.sticky||(this.timeout=setTimeout((function(){e.onClose(null)}),this.props.message.life||3e3))}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"onClose",value:function(e){this.timeout&&clearTimeout(this.timeout),this.props.onClose&&this.props.onClose(this.props.message),e&&(e.preventDefault(),e.stopPropagation())}},{key:"onClick",value:function(){this.props.onClick&&this.props.onClick(this.props.message)}},{key:"renderCloseIcon",value:function(){return!1!==this.props.message.closable?r.createElement("button",{type:"button",className:"p-message-close p-link",onClick:this.onClose},r.createElement("i",{className:"p-message-close-icon pi pi-times"}),r.createElement(a.H,null)):null}},{key:"renderMessage",value:function(){if(this.props.message){var e=this.props.message,t=e.severity,n=e.content,a=e.summary,s=e.detail,i=(0,o.AK)("p-message-icon pi ",{"pi-info-circle":"info"===t,"pi-check":"success"===t,"pi-exclamation-triangle":"warn"===t,"pi-times-circle":"error"===t});return n||r.createElement(r.Fragment,null,r.createElement("span",{className:i}),r.createElement("span",{className:"p-message-summary"},a),r.createElement("span",{className:"p-message-detail"},s))}return null}},{key:"render",value:function(){var e="p-message p-component p-message-"+this.props.message.severity,t=this.renderCloseIcon(),n=this.renderMessage();return r.createElement("div",{ref:this.props.forwardRef,className:e,onClick:this.onClick},r.createElement("div",{className:"p-message-wrapper"},n,t))}}]),n}(r.Component);b(k,"defaultProps",{message:null,onClose:null,onClick:null});var w=r.forwardRef((function(e,t){return r.createElement(k,j({forwardRef:t},e))}));function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var N=0,O=function(e){v(n,e);var t=C(n);function n(e){var r;return u(this,n),(r=t.call(this,e)).state={messages:[]},r.onClose=r.onClose.bind(p(r)),r}return m(n,[{key:"show",value:function(e){if(e){var t=[];if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n].id=N++,t=[].concat(l(this.state.messages),l(e));else e.id=N++,t=this.state.messages?[].concat(l(this.state.messages),[e]):[e];this.setState({messages:t})}}},{key:"clear",value:function(){this.setState({messages:[]})}},{key:"replace",value:function(e){var t=this;this.setState({messages:[]},(function(){return t.show(e)}))}},{key:"onClose",value:function(e){var t=this.state.messages.filter((function(t){return t.id!==e.id}));this.setState({messages:t}),this.props.onRemove&&this.props.onRemove(e)}},{key:"render",value:function(){var e=this;return r.createElement("div",{id:this.props.id,className:this.props.className,style:this.props.style},r.createElement(s.Z,null,this.state.messages.map((function(t){var n=r.createRef();return r.createElement(i.K,{nodeRef:n,key:t.id,classNames:"p-message",unmountOnExit:!0,timeout:{enter:300,exit:300},options:e.props.transitionOptions},r.createElement(w,{ref:n,message:t,onClick:e.props.onClick,onClose:e.onClose}))}))))}}]),n}(r.Component);b(O,"defaultProps",{id:null,className:null,style:null,transitionOptions:null,onRemove:null,onClick:null})}},function(e){e.O(0,[3978,9861,9774,2888,179],(function(){return t=32342,e(e.s=t);var t}));var t=e.O();_N_E=t}]);