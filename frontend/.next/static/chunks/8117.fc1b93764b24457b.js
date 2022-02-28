"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8117],{28117:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var s=t(34051),a=t.n(s),o=t(85893),r=t(42670),l=t(67294),i=t(87536),c=t(95496),d=t(74231),u=t(99403),p=t(25600),m=t(91202),f=t(43964),v=t(25617),h=t(28565),g=t(91176),x=t(49861),j=t(63861),N=t(30022),b=t(84283);function k(){return k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},k.apply(this,arguments)}function y(e){var n=k({},e),t=(0,l.useState)(null),s=t[0],a=t[1];return(0,l.useEffect)((function(){a(n.image)}),[]),s?(0,o.jsx)(N.Z,{className:"m-0 p-4",language:"javascript",style:b.RY,showLineNumbers:!0,wrapLines:!0,wrapLongLines:!0,children:JSON.stringify(s,null,4)}):(0,o.jsx)("div",{})}var w=t(40424),C=t(11163),P=t(41664),S=t(46479),_=t(5984);function A(){return A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},A.apply(this,arguments)}function I(e){var n=A({},e),t=(0,l.useState)(null),s=t[0],a=t[1];return(0,l.useEffect)((function(){a(n.network)}),[]),s?(0,o.jsx)(N.Z,{className:"m-0 p-4",language:"javascript",style:b.RY,showLineNumbers:!0,wrapLines:!0,wrapLongLines:!0,children:JSON.stringify(s,null,4)}):(0,o.jsx)("div",{})}var E=t(92814),D=t(51436);function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,s=new Array(n);t<n;t++)s[t]=e[t];return s}function R(e,n,t,s,a,o,r){try{var l=e[o](r),i=l.value}catch(c){return void t(c)}l.done?n(i):Promise.resolve(i).then(s,a)}function F(e){return function(){var n=this,t=arguments;return new Promise((function(s,a){var o=e.apply(n,t);function r(e){R(o,s,a,r,l,"next",e)}function l(e){R(o,s,a,r,l,"throw",e)}r(void 0)}))}}function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){M(e,n,t[n])}))}return e}function O(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(){var e,n,t,s,N,b,k,A,L,R=function(){return x.W.generateName()},M=function(){var e;if(null===De||void 0===De||null===(e=De.current)||void 0===e?void 0:e.details){var n=De.current.details;n.Config.WorkingDir&&vt("workingDir",n.Config.WorkingDir),n.Config.Os&&vt("os",n.Config.Os),n.Config.User&&vt("user",n.Config.User),function(){var e,n,t;if(null===De||void 0===De||null===(e=De.current)||void 0===e||null===(n=e.details)||void 0===n||null===(t=n.Config)||void 0===t?void 0:t.ExposedPorts){var s=De.current.details.Config.ExposedPorts;if(s){var a=Object.keys(s).length;en(a),Object.keys(s).forEach((function(e,n){var t=e.split("/");2===t.length&&(vt("ExposedPorts."+n+".port",Number(t[0])),vt("ExposedPorts."+n+".portType",t[1]),vt("PortBindings."+n+".fromPort",Number(t[0])),vt("PortBindings."+n+".toPort",Number(t[0])),vt("PortBindings."+n+".portType",t[1]),Sn.current[n]=Number(t[0]),yn.current[n]=t[1],jn.current[n]=Number(t[0]),vn.current[n]=Number(t[0]),un.current[n]=t[1],n++)}))}}}(),function(){var e,n,t;if(null===De||void 0===De||null===(e=De.current)||void 0===e||null===(n=e.details)||void 0===n||null===(t=n.Config)||void 0===t?void 0:t.Cmd){var s=De.current.details.Config.Cmd;(null===s||void 0===s?void 0:s.length)>0&&(Ze(s.length),s.forEach((function(e,n){vt("cmd."+n,e)})))}}(),function(){var e,n,t;if(null===De||void 0===De||null===(e=De.current)||void 0===e||null===(n=e.details)||void 0===n||null===(t=n.Config)||void 0===t?void 0:t.Env){var s=De.current.details.Config.Env;(null===s||void 0===s?void 0:s.length)>0&&(sn(s.length+2),s.forEach((function(e,n){var t=e.split("=");vt("EnvVars."+n+".key",t[0]),t[1]&&vt("EnvVars."+n+".value",t[1])})))}}()}},T=(0,C.useRouter)(),B=(0,v.v9)((function(e){return e.images})),z=(0,v.v9)((function(e){return e.hosts.activeHost})),H=(0,l.useRef)(z);H.current=z;var G=(0,l.useState)(null)[0];(0,l.useRef)(G).current=G;var U=(0,l.useState)(null),q=U[0],W=U[1];(0,l.useRef)(q).current=q;var $=(0,l.useState)({}),Z=$[0],J=$[1];(0,l.useRef)(Z).current=Z;var Y=(0,l.useState)([])[0];(0,l.useRef)(Y).current=Y;var K=(0,v.v9)((function(e){return e.networks})),X=(0,l.useState)(null),Q=X[0],ee=X[1];(0,l.useRef)(Q).current=Q;var ne=(0,l.useState)([]),te=ne[0],se=ne[1],ae=(0,l.useRef)(te);ae.current=te;var oe=(0,l.useState)({}),re=oe[0],le=oe[1];(0,l.useRef)(re).current=re;var ie=(0,l.useState)(null),ce=ie[0],de=ie[1],ue=(0,l.useRef)(ce);ue.current=ce;var pe=(0,l.useState)(null)[0];(0,l.useRef)(pe).current=pe;var me=(0,l.useState)(!1),fe=(me[0],me[1]),ve=(0,l.useState)(null),he=ve[0],ge=ve[1],xe=(0,l.useState)(!1),je=xe[0],Ne=xe[1],be=(0,l.useState)(null),ke=be[0],ye=be[1],we=(0,l.useRef)(ke);we.current=ke;var Ce=(0,l.useState)("httpd:latest"),Pe=Ce[0],Se=Ce[1],_e=(0,l.useRef)(Pe);_e.current=Pe;var Ae=(0,l.useState)(null),Ie=Ae[0],Ee=Ae[1],De=(0,l.useRef)(Ie);De.current=Ie;var Le=(0,l.useState)(!0),Re=Le[0],Fe=Le[1];(0,l.useRef)(Re).current=Re;var Me=(0,l.useState)(null),Ve=Me[0],Oe=Me[1],Te=(0,l.useRef)(Ve);Te.current=Ve;var Be=(0,l.useState)(!1),ze=Be[0],He=Be[1],Ge=[{label:"tcp"},{label:"udp"},{label:""}],Ue=[{label:"bind"},{label:"volume"},{label:"tmpfs"},{label:"npipe"}],qe=[{label:"false"},{label:"true"}],We=(0,l.useState)(2),$e=We[0],Ze=We[1],Je=(0,l.useState)(1),Ye=Je[0],Ke=Je[1],Xe=(0,l.useState)(1),Qe=Xe[0],en=Xe[1],nn=(0,l.useState)(2),tn=nn[0],sn=nn[1],an=(0,l.useState)(1),on=an[0],rn=an[1],ln=(0,l.useState)(["tcp","tcp"]),cn=ln[0],dn=ln[1],un=(0,l.useRef)(cn);un.current=cn;var pn=(0,l.useState)({}),mn=pn[0],fn=pn[1],vn=(0,l.useRef)(mn);vn.current=mn;var hn=(0,l.useState)({}),gn=hn[0],xn=hn[1],jn=(0,l.useRef)(gn);jn.current=gn;var Nn=(0,l.useState)(["tcp","tcp"]),bn=Nn[0],kn=Nn[1],yn=(0,l.useRef)(bn);yn.current=bn;var wn=(0,l.useState)({}),Cn=wn[0],Pn=wn[1],Sn=(0,l.useRef)(Cn),_n=(0,l.useState)(["bind","bind"]),An=_n[0],In=_n[1],En=(0,l.useRef)(An);En.current=An;var Dn=(0,l.useState)(["false","false"]),Ln=Dn[0],Rn=Dn[1],Fn=(0,l.useRef)(Ln);Fn.current=Ln;var Mn=(0,l.useState)({}),Vn=Mn[0],On=Mn[1],Tn=(0,l.useRef)(Vn);Tn.current=Vn;var Bn=(0,l.useState)({}),zn=Bn[0],Hn=Bn[1],Gn=(0,l.useRef)(zn);Gn.current=zn;var Un=(0,l.useState)({}),qn=Un[0],Wn=Un[1];(0,l.useRef)(qn).current=qn;var $n=(0,l.useState)(!1)[0],Zn=(0,l.useState)({}),Jn=Zn[0],Yn=Zn[1];(0,l.useRef)(Jn).current=Jn;var Kn=(0,l.useState)({}),Xn=Kn[0],Qn=Kn[1],et=(0,l.useRef)(et);et.current=Xn;var nt=(0,l.useState)(!1)[0],tt=(0,l.useState)(!1),st=tt[0],at=tt[1],ot=(0,l.useRef)(null);(0,l.useEffect)(F(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ze){e.next=3;break}return e.next=3,ct();case 3:return e.next=5,lt();case 5:Re&&Fe(!1);case 6:case"end":return e.stop()}}),e)}))),[]),(0,l.useEffect)((function(){var e,n=V({},K);if((null===(e=H.current)||void 0===e?void 0:e.id)&&K){n=K[H.current.id].networks;var t=Object.keys(n).map((function(e){return n[e]}));t.sort((function(e,n){return e.name||(e.name="Unknown"),e.name.localeCompare(n.name)}));var s=t.map((function(e){var n=V({},e);return n.name=e.name+" ["+e.networkId.substring(0,12)+"]",n}));ee(s),setTimeout((function(){ce||(de(s[0]),Re&&Fe(!1),gt())}))}}),[K]),(0,l.useEffect)((function(){var e,n=V({},B);if(null===(e=H.current)||void 0===e?void 0:e.id){n=B[H.current.id].images;var t=Object.keys(n).map((function(e){return n[e]}));t.sort((function(e,n){return e.name||(e.name="Unknown"),e.name.localeCompare(n.name)})),ye(t),setTimeout((function(){Ie||(Ee(t[0]),Re&&Fe(!1))}))}}),[B]),(0,l.useEffect)((function(){return function(){}}),[ot]),(0,l.useEffect)((function(){return function(){Te.current&&Te.current.removeListener("createContainerForm")}}),[]);var rt=function(){};function lt(){return it.apply(this,arguments)}function it(){return(it=F(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===H||void 0===H||null===(n=H.current)||void 0===n?void 0:n.id){e.next=3;break}return e.abrupt("return");case 3:Te.current.emit("docker",{command:"listImages",hostId:H.current.id,data:{},callback:"imageList"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(){return dt.apply(this,arguments)}function dt(){return(dt=F(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ze){e.next=2;break}return e.abrupt("return");case 2:return He(!0),e.next=5,h.L.getSocket();case 5:return(n=e.sent).on("createContainerForm",(function(e){console.debug("-----------\x3e Save Container Result  ",e),"success"===e.status&&(0,w.V)({message:"Would you like to view it now?",header:"Container Created",icon:"pi pi-exclamation-check",accept:function(){return T.push("/containers/"+e.data.id)},reject:null}),e.error&&(ge(e.error),fe(!0),(0,w.V)({message:e.error,header:"Container Error",icon:"pi pi-exclamation-check",acceptLabel:"Ok",rejectLabel:"",acceptClassName:"p-button-danger",accept:function(){}}))})),Oe(n),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ut=d.Ry({name:d.Z_().required(),project:d.Z_().required(),image:d.Z_()}).required(),pt=(0,i.cI)({resolver:(0,c.X)(ut)}),mt=pt.register,ft=pt.handleSubmit,vt=pt.setValue,ht=pt.formState.errors,gt=function(){var e,n,t,s,a,o,r,l,i=V({},qn);if((null===(e=ue.current)||void 0===e||null===(n=e.details)||void 0===n||null===(t=n.IPAM)||void 0===t?void 0:t.Config)&&(null===(s=ue.current)||void 0===s||null===(a=s.details)||void 0===a||null===(o=a.IPAM)||void 0===o?void 0:o.Config.length)>0?i.gateway=ue.current.details.IPAM.Config[0].Gateway:i.gateway="",(null===(r=ue.current)||void 0===r||null===(l=r.containers)||void 0===l?void 0:l.length)>0){var c=ue.current.containers.map((function(e){return{name:e.name,networkId:ue.current.networkId,id:e.id,containerId:e.containerId}}));W(c)}Wn(i)};return Re?(0,o.jsx)(r.$,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Create Container"}),(0,o.jsx)(f.s,{className:"col-11 md:10 m-auto",children:(0,o.jsx)("div",{className:"card",children:(0,o.jsx)("form",{onSubmit:ft((function(e){var n,t;console.log("Submitting"),console.log("Fields Data",e),e.image=_e.current,rt();var s={name:e.name,Image:e.image,Hostname:e.hostname,Domainname:e.domainName,User:e.user,WorkingDir:e.workingDir,Entrypoint:e.entryPoint||"",Cmd:e.cmd.filter((function(e){return""!==e}))||null,Env:[""],AttachStdin:!0,AttachStdout:!1,AttachStderr:!0,Tty:!1,OpenStdin:!1,StdinOnce:!0,NetworkDisabled:!1,StopSignal:"SIGTERM",StopTimeout:10,Shell:"/bin/bash",ExposedPorts:{},NetworkingConfig:{EndpointsConfig:{}},Labels:{}};if(s.Labels["com.docker.compose.project"]=e.project,s.Labels["com.docker.compose.service"]=e.name,s.Labels["com.docker.compose.oneoff"]="True",s.HostConfig={NetworkMode:"bridge",Mounts:[],Links:[],Aliases:[]},s.LogConfig={Type:"json-file",Config:{}},Ye>0&&(s.HostConfig.PortBindings={},e.PortBindings.forEach((function(e,n){if(!(n>=Ye)&&e.portType&&e.fromPort&&e.toPort){var t=e.fromPort+"/"+e.portType;s.HostConfig.PortBindings[t]=[{HostIp:"0.0.0.0",HostPort:e.toPort.toString()}]}}))),Qe>0&&(s.ExposedPorts={},s.HostConfig.ExposedPorts={},e.ExposedPorts.forEach((function(e,n){if(!(n>=Qe)&&e.portType&&e.port){var t=e.port+"/"+e.portType;s.ExposedPorts[t]={}}})),s.HostConfig.ExposedPorts={}),on>0&&(s.HostConfig.Mounts=[],e.Mounts.forEach((function(e,n){if(!(n>=on)&&e.type&&e.source&&e.target){var t={Type:e.type,Target:e.target,Source:e.source,ReadOnly:"true"===e.readonly};"bind"===e.type&&(t.Source="/host_mnt/"+e.source,t.BindOptions={Propagation:"rprivate"}),s.HostConfig.Mounts.push(t)}}))),(null===(n=e.EnvVars)||void 0===n?void 0:n.length)>0){var a=[];e.EnvVars.forEach((function(e,n){n+1>tn||e.key&&e.value&&a.push(e.key+"="+e.value)})),s.Env=a}s.NetworkDisabled=!1,(null===(t=e.Networks)||void 0===t?void 0:t.length)>0&&e.Networks.forEach((function(e,n){var t,a,o,r,l,i,c,d,u,p,m,f;s.NetworkingConfig.EndpointsConfig[e.network.details.Name]={IPAMConfig:{}},(null===(t=e.settings)||void 0===t?void 0:t.ipAddress)&&""!==(null===(a=e.settings)||void 0===a?void 0:a.ipAddress)&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.IPv4Address=e.settings.ipAddress,s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.IPAddress=e.settings.ipAddress),(null===(o=e.settings)||void 0===o?void 0:o.ipv6Address)&&""!==(null===(r=e.settings)||void 0===r?void 0:r.ipv6Address)&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.IPv6Address=e.settings.ipv6Address),(null===(l=e.settings)||void 0===l?void 0:l.gateway)&&""!==(null===(i=e.settings)||void 0===i?void 0:i.gateway)&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.Gateway=e.settings.gateway),(null===(c=e.settings)||void 0===c?void 0:c.macAddress)&&""!==(null===(d=e.settings)||void 0===d?void 0:d.macAddress)&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.MacAddress=e.settings.macAddress),(null===(u=e.settings)||void 0===u?void 0:u.endpointId)&&""!==(null===(p=e.settings)||void 0===p?void 0:p.endpointId)&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.EndpointID=e.settings.endpointId),(null===(m=e.settings)||void 0===m?void 0:m.networkId)&&""!==(null===(f=e.settings)||void 0===f?void 0:f.networkId)&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.NetworkID=e.settings.networkId),e.links&&e.links.length>0&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.Links=[],e.links.map((function(t,a){a+1>zn[n]||t.from&&t.to&&""!==t.to&&(s.HostConfig.Links.push(t.from+":"+t.to),s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.Links.push(t.from+":"+t.to))}))),e.aliases&&e.links.length>0&&(s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.Aliases=[null],e.aliases.map((function(t,a){a+1>Vn[n]||""!==t&&(s.HostConfig.Aliases.push(t),s.NetworkingConfig.EndpointsConfig[e.network.details.Name].IPAMConfig.Aliases.push(t))})))})),s.Path="/bin/sh",console.log("fields",e),console.log("Form Data",s),Te.current.emit("dockerCreateContainer",{command:"createContainer",data:s,hostId:H.current.id,callback:"createContainerForm",hook:"createContainer"})})),children:(0,o.jsxs)("div",{className:"p-fluid p-formgrid p-grid mt-5 ml-auto mr-auto jc-center",children:[(0,o.jsxs)(f.s,{className:"mt-3",header:"Basic Details",toggleable:!0,children:[(0,o.jsx)("div",{className:"form-group",children:(0,o.jsxs)("div",{className:"p-field mt-2 col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,o.jsx)("label",{htmlFor:"name",children:"Container Name"}),(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)(p.o,V({id:"name",keyfilter:/^[^<>*!\s]+$/,name:"name",type:"text",required:!0},mt("name",{value:R()}),{className:"form-control f-height-inputs ".concat(ht.name?"p-invalid":"")}),"name"),(0,o.jsx)("div",{className:"p-inputgroup-addon",children:(0,o.jsx)(u.z,{className:"p-button p-button-secondary",icon:"fa fa-rotate-right",onClick:function(e){e.preventDefault();var n=R();vt("name",n)}})})]}),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(e=ht.name)||void 0===e?void 0:e.message})]})}),(0,o.jsx)("div",{className:"form-group mt-5",children:(0,o.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,o.jsx)("label",{htmlFor:"project",children:"Project"}),(0,o.jsx)(p.o,V({id:"project",name:"project",type:"text"},mt("project",{value:"test-project"}),{className:"form-control f-height-inputs ".concat(ht.project?"p-invalid":"")}),"foo1"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(n=ht.project)||void 0===n?void 0:n.message})]})}),(0,o.jsx)("div",{className:"form-group mt-5",children:(0,o.jsxs)("div",{className:"mt-4 p-field col-12 col-md-6 col-lg-4 col-xl-4 text-left",children:[(0,o.jsx)("label",{htmlFor:"project",children:"Image"}),(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)(m.L,V({name:"image",id:"image",options:ke,optionValue:"pullTag",optionLabel:"pullTag",value:Pe,filter:!0,showClear:!0,filterBy:"name",placeholder:"Select a Docker Image"},mt("image",{value:"alpline:latest"}),{onChange:function(e){Se(e.value),function(e){if(we.current){var n=we.current.filter((function(n){return n.pullTag===e}));Ee(n[0])}}(e.value)},className:"form-control f-height-inputs ".concat(ht.image?"p-invalid":"")}),"foo1"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(t=ht.image)||void 0===t?void 0:t.message}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-0",icon:"fa fa-faw fa-eye",onClick:function(e){e.preventDefault(),Ne(!je)}})]}),(0,o.jsx)("div",{className:"col-6 md:col-5 lg:col-3 m-auto",children:(0,o.jsx)(u.z,{className:"p-button p-button-success mt-0",label:"Import Settings",onClick:function(e){e.preventDefault(),M()}})})]})})]}),(0,o.jsxs)(f.s,{className:"mt-3 mt-5",header:"Run Command",toggleable:!0,children:[(0,o.jsx)("div",{className:"col-12 text-right mr-5 pr-5",children:(0,o.jsx)(P.default,{href:"/",children:(0,o.jsx)("a",{onClick:function(e){e.preventDefault(),Ze(3),vt("cmd.0","tail"),vt("cmd.1","-f"),vt("cmd.2","/dev/null")},className:"lightblue-color",children:"Always On"})})}),(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"grid col-12 jusitify-center",children:[(0,o.jsx)("div",{className:"col-10 ml-0 m-auto grid",children:O(Array($e)).map((function(e,n){return(0,o.jsx)("div",{className:"col-6",children:(0,o.jsx)(p.o,V({type:"text",placeholder:""},mt("cmd."+n),{className:"form-control f-height-inputs"}),"cmd"+n)},"cmd_ct"+n)}))}),(0,o.jsx)("div",{className:"col-2",children:(0,o.jsxs)("span",{className:"p-input-group-addon",children:[(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-plus",onClick:function(e){e.preventDefault(),Ze($e+1)}}),$e>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-minus",onClick:function(e){e.preventDefault(),Ze($e-1)}})]})]})})]})})]}),(0,o.jsxs)(f.s,{className:"mt-3 mt-5",header:"Host Settings",collapsed:"true",toggleable:!0,children:[(0,o.jsx)("div",{className:"form-group col-12",children:(0,o.jsxs)("div",{className:"p-field mt-2 text-left",children:[(0,o.jsx)("label",{htmlFor:"name",children:"Host Name"}),(0,o.jsx)(p.o,V({keyfilter:/^[^<>*!\s]+$/,type:"text"},mt("hostname",{value:""}),{className:"form-control f-height-inputs ".concat(ht.hostname?"p-invalid":"")}),"hostname"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(s=ht.hostname)||void 0===s?void 0:s.message})]})}),(0,o.jsx)("div",{className:"form-group col-12",children:(0,o.jsxs)("div",{className:"p-field mt-2 text-left",children:[(0,o.jsx)("label",{htmlFor:"domainName",children:"Domain Name"}),(0,o.jsx)(p.o,V({keyfilter:/^[^<>*!\s]+$/,type:"text"},mt("domainName",{value:""}),{className:"form-control f-height-inputs ".concat(ht.domainName?"p-invalid":"")}),"domainName"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(N=ht.domainName)||void 0===N?void 0:N.message})]})}),(0,o.jsx)("div",{className:"form-group col-12",children:(0,o.jsxs)("div",{className:"p-field mt-2 text-left",children:[(0,o.jsx)("label",{htmlFor:"userName",children:"User"}),(0,o.jsx)(p.o,V({keyfilter:/^[^<>*!\s]+$/,type:"text"},mt("user",{value:""}),{className:"form-control f-height-inputs ".concat(ht.user?"p-invalid":"")}),"userName"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(b=ht.user)||void 0===b?void 0:b.message})]})}),(0,o.jsx)("div",{className:"form-group col-12",children:(0,o.jsxs)("div",{className:"p-field mt-2 text-left",children:[(0,o.jsx)("label",{htmlFor:"entryPoint",children:"Entry Point"}),(0,o.jsx)(p.o,V({type:"text"},mt("entryPoint",{value:""}),{className:"form-control f-height-inputs ".concat(ht.entryPoint?"p-invalid":"")}),"entryPoint"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(k=ht.entryPoint)||void 0===k?void 0:k.message})]})}),(0,o.jsx)("div",{className:"form-group col-12",children:(0,o.jsxs)("div",{className:"p-field mt-2 text-left",children:[(0,o.jsx)("label",{htmlFor:"userName",children:"Working Directory"}),(0,o.jsx)(p.o,V({type:"text"},mt("workingDir",{value:""}),{className:"form-control f-height-inputs ".concat(ht.workingDir?"p-invalid":"")}),"workingDir"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(A=ht.workingDir)||void 0===A?void 0:A.message})]})})]}),(0,o.jsx)(f.s,{className:"mt-3 mt-5",header:"Volumes and Binds",collapsed:!0,toggleable:!0,children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"grid col-12 jusitify-center",children:[(0,o.jsx)("div",{className:"col-10 ml-0 m-auto grid",children:O(Array(on)).map((function(e,n){return(0,o.jsxs)("div",{className:"col-12 p-shadow-3 grid",children:[(0,o.jsxs)("div",{className:"col-2 field",children:[(0,o.jsx)("label",{htmlFor:"mounts",children:"Mount Type"}),(0,o.jsx)(m.L,V({options:Ue,optionLabel:"label",optionValue:"label",value:En.current[n]},mt("Mounts."+n+".type",{value:"bind"}),{onChange:function(e){var t=V({},En.current);t[n]=e.value,In(t),vt("Mounts."+n+".type",e.value)},className:"form-control f-height-inputs pt-2 pb-2"}),"mounts_ct_types"+n)]},"mounts_ct3"+n),(0,o.jsxs)("div",{className:"col-2 field",children:[(0,o.jsx)("label",{htmlFor:"mounts",children:"Read Only"}),(0,o.jsx)(m.L,V({options:qe,optionLabel:"label",optionValue:"label",value:Fn.current[n]},mt("Mounts."+n+".readonly",{value:"false"}),{onChange:function(e){var t=V({},Fn.current);t[n]=e.value,Rn(t),vt("Mounts."+n+".readonly",e.value)},className:"form-control f-height-inputs pt-2 pb-2"}),"mounts_ct_typesro"+n)]},"mounts_ct333"+n),(0,o.jsxs)("div",{className:"col-4 field",children:[(0,o.jsx)("label",{htmlFor:"fromPoint",children:"Host Location"}),(0,o.jsx)("div",{className:"p-inputgroup",children:(0,o.jsx)(p.o,V({placeholder:"Full Path on Host /path/to"},mt("Mounts."+n+".source",{value:"/Users/phpfreak/Development/docker/mount"}),{className:"form-control f-height-inputs"}),"mounts_ct_toSrc"+n)})]},"mounts_ct34"+n),(0,o.jsxs)("div",{className:"col-4 field",children:[(0,o.jsx)("label",{htmlFor:"mountSrc",children:"Container Location"}),(0,o.jsx)(p.o,V({placeholder:"Container Location /path/to"},mt("Mounts."+n+".target",{value:"/app"}),{className:"form-control f-height-inputs"}),"mounts_ct_hostport"+n)]},"mount_ct323"+n)]},"mounts22_ct"+n)}))}),(0,o.jsx)("div",{className:"col-2",children:(0,o.jsxs)("span",{className:"p-input-group-addon",children:[(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-plus",onClick:function(e){e.preventDefault(),rn(on+1)}}),on>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-minus",onClick:function(e){e.preventDefault(),rn(on-1)}})]})]})})]})})}),(0,o.jsx)(f.s,{className:"mt-3 mt-5",header:"Networks",collapsed:!1,toggleable:!0,children:(0,o.jsxs)("div",{className:"col-12",children:[(0,o.jsx)("div",{className:"form-group",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon",children:"Join Networks:"}),(0,o.jsx)(_.N,V({name:"networks",id:"networks",options:Q,disabled:nt,optionLabel:"name",filter:!0,filterBy:"name",showClear:!0,value:null===ae||void 0===ae?void 0:ae.current,placeholder:"Select Networks to Connect"},mt("networks"),{onChange:function(e){se(e.value),console.log("Selected",e.value)},className:"multiselect-clearfix pl-2 pt-2 pb-2 form-control f-height-inputs ".concat(ht.networks?"p-invalid":"")}),"networks"),(0,o.jsx)("div",{className:"invalid-feedback",children:null===(L=ht.networks)||void 0===L?void 0:L.message})]})}),(null===te||void 0===te?void 0:te.length)>0&&(0,o.jsx)("div",{className:"col-12 mt-2",children:te.map((function(e,n){var t,s,a,r,l=V({},qn);return l[n]={gateway:""},(null===(t=e.details)||void 0===t||null===(s=t.IPAM)||void 0===s?void 0:s.Config)&&(null===(a=e.details)||void 0===a||null===(r=a.IPAM)||void 0===r?void 0:r.Config.length)>0&&(l[n].gateway=e.details.IPAM.Config[0].Gateway),zn[n]||(zn[n]=1),Vn[n]||(Vn[n]=1),mt("Networks."+n+".network",{value:e}),(0,o.jsxs)("div",{className:"col-12 grid pl-2 pr-0 ml-0 mr-0 mt-2",children:[(0,o.jsxs)("div",{className:"col-9 surface-0 p-3",children:[(0,o.jsx)("h6",{children:e.name}),Jn[e.id]&&(0,o.jsxs)("div",{className:"col-12",children:[(0,o.jsx)("label",{className:"mb-2",children:"Network Settings"}),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("div",{className:"p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"IPv4 Address:"}),(0,o.jsx)(p.o,V({id:"ip4Gateway",name:"ipAddress",type:"text",disabled:nt,placeholder:"IPv4 Address"},mt("Networks."+n+".settings.ipAddress"),{onChange:function(e){var t=V({},qn);t[n]||(t[n]={}),t[n].ipAddress=e.value,Wn(t)},className:"form-control f-height-inputs pt-2 pb-2"}),"labipv4_ct1"+n)]})}),$n&&(0,o.jsx)("div",{className:"col-12 p-3 form-help-box",children:"IPv4 Address"}),(0,o.jsx)("div",{className:"p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"IPv4 Gateway:"}),(0,o.jsx)(p.o,V({id:"gateway",name:"gateway",type:"text",disabled:nt,placeholder:"IPv4 Gateway"},mt("Networks."+n+".settings.gateway",{value:l[n].gateway}),{onChange:function(e){var t=V({},qn);t[n]||(t[n]={}),t[n].gateway=e.value,Wn(t)},className:"form-control f-height-inputs pt-2 pb-2"}),"lab33234432_ct1"+n)]})}),$n&&(0,o.jsx)("div",{className:"col-12 p-3 form-help-box",children:"Gateway address for this network."}),(0,o.jsx)("div",{className:"p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"MAC Address:"}),(0,o.jsx)(p.o,V({id:"macAddress",name:"macAddress",type:"text",disabled:nt,placeholder:"Mac Address"},mt("Networks."+n+".settings.macAddress",{value:null}),{onChange:function(e){var t=V({},qn);t[n]||(t[n]={}),t[n].gateway=e.value,Wn(t)},className:"form-control f-height-inputs pt-2 pb-2"}),"lab34432_ct3331"+n)]})}),$n&&(0,o.jsx)("div",{className:"col-12 p-3 form-help-box",children:"MAC address for the endpoint on this network."}),(0,o.jsx)("div",{className:"p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"Network ID:"}),(0,o.jsx)(p.o,V({id:"networkId",name:"networkId",type:"text",disabled:nt,placeholder:"Network ID"},mt("Networks."+n+".settings.networkId",{value:null}),{onChange:function(e){var t=V({},qn);t[n]||(t[n]={}),t[n].networkId=e.value,Wn(t)},className:"form-control f-height-inputs pt-2 pb-2"}),"lab34432_ct1"+n)]})}),$n&&(0,o.jsx)("div",{className:"col-12 p-3 form-help-box",children:"Unique ID of the network."}),(0,o.jsx)("div",{className:"p-field mt-0 p-0 col-12 mt-0 col-md-12 col-lg-4 col-xl-4 text-left",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"Endpoint ID:"}),(0,o.jsx)(p.o,V({id:"endpointID",name:"endpointID",type:"text",disabled:nt,placeholder:"Endpoint ID"},mt("Networks."+n+".settings.endpointId",{value:null}),{onChange:function(e){var t=V({},qn);t[n]||(t[n]={}),t[n].gateway=e.value,Wn(t)},className:"form-control f-height-inputs pt-2 pb-2"}),"labels3333423_ct1"+n)]})}),$n&&(0,o.jsx)("div",{className:"col-12 p-3 form-help-box",children:"Unique ID for the service endpoint in a Sandbox."})]})})]}),Jn[e.id]&&(0,o.jsxs)("div",{className:"col-12 pl-2 pr-2 mt-4 ml-0 mr-0",children:[(0,o.jsx)("label",{className:"mb-2 ml-2",children:"Links"}),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"col-12 grid m-0 p-0",children:[(0,o.jsx)("div",{className:"col-5 ml-0 mr-0 pl-0 pr-0",children:O(Array(zn[n])).map((function(t,s){var a,r;return(0,o.jsx)("div",{className:"col-12 p-shadow-3 p-0",children:(0,o.jsx)("div",{className:"col-12 field",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"Link:"}),(0,o.jsx)(m.L,V({options:e.containers,optionLabel:"name",optionValue:"name"},mt("Networks."+n+".links."+s+".from"),{value:null===(r=null===(a=Z[n])||void 0===a?void 0:a.links[s])||void 0===r?void 0:r.from,onChange:function(e){var t=V({},Z);t[n]||(t[n]={}),t[n].links||(t[n].links={}),t[n].links[s]||(t[n].links[s]={from:null,to:null}),t[n].links[s].from=e.value,console.log("BBB",t),J(t),vt("Networks."+n+".links."+s+".from",e.value)},className:"form-control f-height-inputs pt-2 pb-2"}),"mount2234s_ct_types"+s)]})},"linksVar234s_ct_value34"+s)},"linkss432Vars_ct_value_x"+s)}))}),(0,o.jsx)("div",{className:"col-5 ml-0 m-auto p-0",children:O(Array(zn[n])).map((function(e,t){return(0,o.jsx)("div",{className:"col-12 p-shadow-3 grid",children:(0,o.jsx)("div",{className:"col-12 field",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"Alias:"}),(0,o.jsx)(p.o,V({},mt("Networks."+n+".links."+t+".to"),{className:"form-control f-height-inputs pt-2 pb-2"}),"labels3423_ct1"+t)]})},"labelsVars_ct_value34"+t)},"labelsVars_ct_value_x"+t)}))}),(0,o.jsx)("div",{className:"col-1 text-right p-0",children:(0,o.jsxs)("span",{className:"p-input-group-addon",children:[(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-plus",onClick:function(e){var t=V({},Gn.current);t[n]++,e.preventDefault(),Hn(t)}}),zn[n]>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-minus",onClick:function(e){var t=V({},Gn.current);t[n]>0&&t[n]--,e.preventDefault(),Hn(t)}})]})]})})]})})]}),Jn[e.id]&&(0,o.jsxs)("div",{className:"col-12 pl-2 pr-2 mt-4 ml-0 mr-0",children:[(0,o.jsx)("label",{className:"mb-2 ml-2",children:"Aliases"}),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"col-12 grid m-0 p-0",children:[(0,o.jsx)("div",{className:"col-5 ml-0 m-auto p-0",children:O(Array(Vn[n])).map((function(e,t){return(0,o.jsx)("div",{className:"col-12 p-shadow-3 grid",children:(0,o.jsx)("div",{className:"col-12 field",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon col-2",children:"Alias:"}),(0,o.jsx)(p.o,V({},mt("Networks."+n+".aliases."+t),{className:"form-control f-height-inputs pt-2 pb-2"}),"labe333ls_ct1"+t)]})},"labelsVa33rs_ct_value34"+t)},"labels34Vars_ct_value_x"+t)}))}),(0,o.jsx)("div",{className:"col-1 text-right p-0",children:(0,o.jsxs)("span",{className:"p-input-group-addon",children:[(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-plus",onClick:function(e){var t=V({},Tn.current);t[n]++,e.preventDefault(),On(t)}}),Vn[n]>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-minus",onClick:function(e){var t=V({},Tn.current);t[n]>0&&t[n]--,e.preventDefault(),Hn(t)}})]})]})})]})})]})]}),(0,o.jsx)("div",{className:"col-3 text-right justify-content-right",children:(0,o.jsxs)("div",{className:"p-inputgroup",children:[(0,o.jsx)("span",{className:"p-inputgroup-addon",children:(0,o.jsx)(u.z,{className:Xn[e.id]?"pl-1 pr-1 p-button p-button-primary":"pl-1 pr-1 p-button p-button-info",disabled:!Jn[e.id],onClick:function(n){n.preventDefault();var t=V({},Xn);t[e.id]=!t[e.id],Qn(t)},children:(0,o.jsx)(E.G,{className:"text-xl",icon:D.Fuz})})}),(0,o.jsx)("span",{className:"p-inputgroup-addon",children:(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-0",icon:"fa fa-faw fa-eye",onClick:function(n){n.preventDefault(),at(!st),le(e)}})}),(0,o.jsx)("span",{className:"p-inputgroup-addon",children:(0,o.jsx)(u.z,{disabled:nt,className:"p-button p-button-primary p-2 height-100",type:"button",icon:Jn[e.id]?"fa fa-minus":"fa fa-edit ",label:"Advanced",onClick:function(){var n=V({},Jn);n[e.id]=!n[e.id],Yn(n)}})})]})})]},n+"networkMap")}))})]})}),(0,o.jsx)(f.s,{className:"mt-3 mt-5",header:"Exposed Ports",collapsed:!0,toggleable:!0,children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"grid col-12 jusitify-center",children:[(0,o.jsx)("div",{className:"col-10 ml-0 m-auto grid",children:O(Array(Qe)).map((function(e,n){return(0,o.jsxs)("div",{className:"col-12 p-shadow-3 grid",children:[(0,o.jsxs)("div",{className:"col-4 field",children:[(0,o.jsx)("label",{htmlFor:"project",children:"Port Type"}),(0,o.jsx)(m.L,V({options:Ge,optionLabel:"label",optionValue:"label",value:yn.current[n]},mt("ExposedPorts."+n+".portType",{value:"tcp"}),{onChange:function(e){var t=V({},yn.current);t[n]=e.value,kn(t),vt("ExposedPorts."+n+".portType",e.value)},className:"form-control f-height-inputs pt-2 pb-2"}),"ports_ct_t3ypes"+n)]},"exposedports_ct2d3"+n),(0,o.jsxs)("div",{className:"col-6 field",children:[(0,o.jsx)("label",{htmlFor:"project",children:"Container Port"}),(0,o.jsx)(g.R,V({min:0,inputId:"ExposedPorts."+n+".port",max:1e7,placeholder:"Exposed Port",step:1,useGrouping:!1,showButtons:!1,value:Sn.current[n]},mt("ExposedPorts."+n+".port",{value:3e3}),{className:"form-control f-height-inputs",onChange:function(e){var t=V({},Sn.current);t[n]=e.value,Pn(t),vt("ExposedPorts."+n+".port",e.value)}}),"exposedports_dct_toPorts"+n)]},"exposedports_c33t34"+n)]},"exposedports_c34t"+n)}))}),(0,o.jsx)("div",{className:"col-2",children:(0,o.jsxs)("span",{className:"p-input-group-addon",children:[(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-plus",onClick:function(e){e.preventDefault(),en(Qe+1)}}),Qe>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-minus",onClick:function(e){e.preventDefault(),en(Qe-1)}})]})]})})]})})}),(0,o.jsx)(f.s,{className:"mt-3 mt-5",header:"Port Bindings (Forwarding)",collapsed:!0,toggleable:!0,children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"grid col-12 jusitify-center",children:[(0,o.jsx)("div",{className:"col-10 ml-0 m-auto grid",children:O(Array(Ye)).map((function(e,n){return(0,o.jsxs)("div",{className:"col-12 p-shadow-3 grid",children:[(0,o.jsxs)("div",{className:"col-4 field",children:[(0,o.jsx)("label",{htmlFor:"project",children:"Port Type"}),(0,o.jsx)(m.L,V({options:Ge,optionLabel:"label",optionValue:"label",value:un.current[n]},mt("PortBindings."+n+".portType",{value:"tcp"}),{onChange:function(e){var t=V({},un.current);t[n]=e.value,dn(t),vt("PortBindings."+n+".portType",e.value)},className:"form-control f-height-inputs pt-2 pb-2"}),"ports_ct_types"+n)]},"ports_ct3"+n),(0,o.jsxs)("div",{className:"col-4 field",children:[(0,o.jsx)("label",{htmlFor:"project",children:"Container Port"}),(0,o.jsx)(g.R,V({min:0,inputId:"PortBindings."+n+".fromPort",max:1e7,placeholder:"Container Port",step:1,useGrouping:!1,showButtons:!1,value:jn.current[n]},mt("PortBindings."+n+".fromPort",{value:null}),{className:"form-control f-height-inputs",onChange:function(e){var t=V({},jn.current);t[n]=e.value,xn(t),vt("PortBindings."+n+".fromPort",e.value)}}),"ports_ct_toPorts"+n)]},"ports_ct34"+n),(0,o.jsxs)("div",{className:"col-4 field",children:[(0,o.jsx)("label",{htmlFor:"project",children:"Local Port"}),(0,o.jsx)(g.R,V({inputId:"PortBindings."+n+".toPort",min:0,max:1e7,useGrouping:!1,placeholder:"Local Host Port"},mt("PortBindings."+n+".toPort",{value:null}),{value:vn.current[n],className:"form-control f-height-inputs",onChange:function(e){var t=V({},vn.current);t[n]=e.value,fn(t),vt("PortBindings."+n+".toPort",e.value)}}),"ports_ct_hostport"+n)]},"ports_ct323"+n)]},"ports_ct"+n)}))}),(0,o.jsx)("div",{className:"col-2",children:(0,o.jsxs)("span",{className:"p-input-group-addon",children:[(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-plus",onClick:function(e){e.preventDefault(),Ke(Ye+1)}}),Ye>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-minus",onClick:function(e){e.preventDefault(),Ke(Ye-1)}})]})]})})]})})}),(0,o.jsx)(f.s,{className:"mt-3 mt-5",header:"Environment Variables",toggleable:!0,children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"grid col-12 jusitify-center",children:[(0,o.jsx)("div",{className:"col-10 ml-0 m-auto grid",children:O(Array(tn)).map((function(e,n){return(0,o.jsxs)("div",{className:"col-12 p-shadow-3 grid",children:[(0,o.jsxs)("div",{className:"col-6 field",children:[n<1&&(0,o.jsx)("label",{htmlFor:"envvars",children:"Key"}),(0,o.jsx)(p.o,V({},mt("EnvVars."+n+".key",{value:null,shouldUnregister:!0}),{className:"form-control f-height-inputs"}),"envVars_ct1"+n)]},"envVars_ct_value34"+n),(0,o.jsxs)("div",{className:"col-6 field",children:[n<1&&(0,o.jsx)("label",{htmlFor:"envvars.value",children:"Value"}),(0,o.jsx)(p.o,V({placeholder:""},mt("EnvVars."+n+".value",{value:null}),{className:"form-control f-height-inputs"}),"envVars_ct_value"+n)]},"envVars_ct_value33"+n)]},"envVars_ct_value_x"+n)}))}),(0,o.jsx)("div",{className:"col-2",children:(0,o.jsxs)("span",{className:"p-input-group-addon",children:[(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-plus",onClick:function(e){e.preventDefault(),sn(tn+1)}}),tn>1&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),(0,o.jsx)(u.z,{className:"p-button p-button-secondary mt-2",icon:"fa fa-faw fa-minus",onClick:function(e){sn(tn-1),e.preventDefault()}})]})]})})]})})}),(0,o.jsx)("div",{className:"col-6 ml-auto mr-auto mt-5",children:(0,o.jsx)(u.z,{className:"p-button p-button-primary p-3",type:"submit",label:"Create Container"})}),(0,o.jsx)(S.V,{ref:he})]})})})},"containerForm")]}),(0,o.jsx)(j.V,{header:"Image Details",visible:je,style:{width:"70vw"},onHide:function(){return Ne(!1)},children:(0,o.jsx)(y,{image:Ie})}),(0,o.jsx)(j.V,{header:"Network Details",visible:st,style:{width:"70vw"},onHide:function(){return at(!1)},children:(0,o.jsx)(I,{network:re})})]})}}}]);