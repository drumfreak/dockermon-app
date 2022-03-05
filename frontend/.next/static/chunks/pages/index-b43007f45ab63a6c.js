(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(45362)}])},36345:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),s=n(67294),a=n(43964),c=n(25852),i=n(30022),o=n(84283),u=n(52450);function l(e){var t=JSON.stringify(e.data,null,2),n=(0,s.useState)(e.collapsed||!1)[0],l=(0,s.useState)(!e.collapsed||!1),d=l[0],m=l[1],h=e.toggleable||!0,p=e.hideTree||!1,f=!!e.hideRaw,v=!!e.hideCode;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.s,{className:"p-0",header:e.header||"Data View",onCollapse:function(){return m(!1)},onExpand:function(){return m(!0)},toggleable:h,collapsed:n,children:d&&(0,r.jsxs)(c.f,{activeIndex:1,className:"p-0 m-0",children:[!v&&(0,r.jsx)(c.x,{header:"Code View",className:"p-0 m-0",leftIcon:"fa fa-solid fa-code mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-0",children:(0,r.jsx)(i.Z,{className:"p-1 m-0",language:"javascript",style:o.RY,showLineNumbers:e.showLineNumbers,wrapLines:!0,wrapLongLines:!1,children:t})})}),!p&&(0,r.jsx)(c.x,{header:"Tree View",className:"p-0 m-0",leftIcon:"fa fa-solid fa-tree mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-2",style:{},children:(0,r.jsx)(u.L,{className:"m-0",data:e.data,theme:{scheme:"brewer",author:"timoth\xe9e poisot (http://github.com/tpoisot)",base00:"#161b22",base01:"#2e2f30",base02:"#515253",base03:"#737475",base04:"#959697",base05:"#b7b8b9",base06:"#dadbdc",base07:"#fcfdfe",base08:"#e31a1c",base09:"#e6550d",base0A:"#dca060",base0B:"#31a354",base0C:"#80b1d3",base0D:"#3182bd",base0E:"#756bb1",base0F:"#b15928"},invertTheme:!1,shouldExpandNode:function(e){return 1===e.length}})})}),!f&&(0,r.jsx)(c.x,{header:"Raw View",className:"p-0 m-0",leftIcon:"fa fa-fw fa-file mr-2",children:(0,r.jsx)("div",{className:"code-highlighter-background p-2 mt-0",style:{},children:(0,r.jsx)("pre",{className:"p-0 m-0",children:(0,r.jsx)("code",{className:"p-0 m-0",children:t})})})})]})})})}},45362:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(85893),s=n(34051),a=n.n(s),c=n(67294),i=n(25617),o=n(69868),u=n(28565),l=n(36345),d=n(42670),m=n(41664),h=n(10619),p=n(45795);function f(e){var t=e.severity;if(e.status)if("OK"===e.status)t="success";else t="danger";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"col-0 m-0",children:(0,r.jsx)(p.C,{value:e.value,className:e.className,severity:t})})})}var v=n(57191),x=n(92814),j=n(51436),g=n(2723),N=n(26903),b=n(82586),w=n(79989),k=n(43964),y=n(5984),S=n(30045),R=n(11078),C=n(81085),D=n(74781),I=n(66989),P=n(68751),H=n(91202),T=n(27484),V=n(99403);function E(e,t,n,r,s,a,c){try{var i=e[a](c),o=i.value}catch(u){return void n(u)}i.done?t(o):Promise.resolve(o).then(r,s)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){E(a,r,s,c,i,"next",e)}function i(e){E(a,r,s,c,i,"throw",e)}c(void 0)}))}}function U(e){var t=function(e){var t=[],n=[],r=[],s=[],a=[],c=[],i=[];e.map((function(e){var o=T(e.createdAt).format("YYYY-MM-DD HH:mm:ss");t.push(e.cpu),n.push(e.pids),r.push(e.memory),s.push(e.memoryPercent),a.push(e.networkIn),c.push(e.networkOut),i.push(o)})),i.push(T().format("YYYY-MM-DD HH:mm:ss")),z(t),x(n),N(r),M(c),y(a),A(i),l.current&&((null===_e||void 0===_e?void 0:_e.current)&&_e.current.updateChart(),(null===Le||void 0===Le?void 0:Le.current)&&Le.current.updateChart(),(null===Ae||void 0===Ae?void 0:Ae.current)&&Ae.current.updateChart(),(null===Fe||void 0===Fe?void 0:Fe.current)&&Fe.current.updateChart()),o(!1)},n=function(){le.current&&clearInterval(le.current);var e=setInterval((function(){$e()}),15e3);ue(e)},s=(0,c.useState)(!1),i=s[0],o=s[1],l=(0,c.useRef)(i);l.current=i;var d=(0,c.useState)(!0),m=d[0],h=d[1],p=(0,c.useRef)(m);p.current=m;var f=(0,c.useState)(null),v=f[0],x=f[1],j=(0,c.useState)(null),g=j[0],N=j[1],b=(0,c.useState)(null),w=b[0],y=b[1],E=(0,c.useState)(null),U=E[0],M=E[1],_=(0,c.useState)(null),L=_[0],A=_[1],F=(0,c.useState)(null),Y=F[0],z=F[1],W=(0,c.useState)(null),G=W[0],Z=W[1],B=(0,c.useState)(T().subtract(5,"minute").toDate()),Q=B[0],X=B[1],K=(0,c.useRef)(Q);K.current=Q;var $=(0,c.useState)(new Date),J=$[0],q=$[1],ee=(0,c.useRef)(J);ee.current=J;var te=(0,c.useState)(new Date)[0],ne=(0,c.useRef)(te);ne.current=te;var re=(0,c.useState)(null),se=re[0],ae=re[1],ce=(0,c.useRef)(se);ce.current=se;var ie=(0,c.useState)(null),oe=ie[0],ue=ie[1],le=(0,c.useRef)(oe);le.current=oe;var de=(0,c.useState)(900),me=de[0],he=de[1],pe=(0,c.useRef)(me);pe.current=me;var fe=(0,c.useState)(!0),ve=fe[0],xe=fe[1],je=(0,c.useRef)(ve);je.current=ve;var ge=(0,c.useState)(!1),Ne=ge[0],be=ge[1],we=(0,c.useRef)(Ne);we.current=Ne;var ke=(0,c.useState)(!1),ye=ke[0],Se=ke[1];(0,c.useRef)(ye).current=ye;var Re=(0,c.useState)(!1),Ce=Re[0],De=Re[1],Ie=(0,c.useRef)(Ce);Ie.current=Ce;var Pe=(0,c.useState)(!1),He=Pe[0],Te=Pe[1],Ve=(0,c.useRef)(He);Ve.current=He;var Ee=(0,c.useState)(!1),Oe=Ee[0],Ue=Ee[1],Me=(0,c.useRef)(Oe);Me.current=Oe;var _e=(0,c.useRef)(),Le=(0,c.useRef)(),Ae=(0,c.useRef)(),Fe=(0,c.useRef)(),Ye=(0,c.useState)(null),ze=Ye[0],We=Ye[1],Ge=(0,c.useRef)(ze);Ge.current=ze;var Ze=(0,c.useState)(!1),Be=Ze[0],Qe=Ze[1];function Xe(){return Ke.apply(this,arguments)}function Ke(){return(Ke=O(a().mark((function n(){var r,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!Be){n.next=2;break}return n.abrupt("return");case 2:return Qe(!0),r="hostcontainerStats_"+e.containerId,n.next=6,u.L.getSocket();case 6:return(s=n.sent).on(r,(function(e){"success"===e.status&&e.data&&(o(!0),t(e.data))})),We(s),n.abrupt("return",s);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function $e(){return Je.apply(this,arguments)}function Je(){return(Je=O(a().mark((function n(){var r,s,c,i,u,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(pe.current?(r=T().subtract(pe.current,"second").toDate(),s=T().toDate()):(r=K.current,s=T().toDate()),X(r),q(s),c={containerId:e.container.id,limit:100,sortKey:"createdAt",sortType:"DESC",startDate:r,endDate:s},!Ge.current){n.next=10;break}Ge.current.emit("stats",{command:"stats",body:c,callback:"hostcontainerStats_"+e.containerId}),n.next=17;break;case 10:return n.next=12,S.D.getStats(c);case 12:i=n.sent,u=i.data,(l=i.error)&&(Z(l),console.log(l)),u&&(o(!0),t(u));case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}if((0,c.useEffect)(O(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(xe(e.showCpu),Se(e.showDisk),De(e.showNetwork),be(e.showMemory),Te(e.showProcesses),Ue(e.hideControls),!e.containerId){t.next=12;break}if(Be){t.next=10;break}return t.next=10,Xe();case 10:$e(),p.current&&setTimeout((function(){n()}),500);case 12:case"end":return t.stop()}}),t)}))),[e]),(0,c.useEffect)((function(){return function(){if((null===le||void 0===le?void 0:le.current)&&(clearInterval(le.current),ue(null)),Ge.current){var t="hostcontainerStats_"+e.containerId;Ge.current.removeListener(t)}}}),[]),G)return(0,r.jsx)("div",{children:"Failed to load stats"});var qe=function(){var e=O(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ce.current&&clearTimeout(ce.current),n=setTimeout(O(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:he(null),o(!0),q(new Date(t)),setTimeout((function(){$e()}));case 4:case"end":return e.stop()}}),e)}))),1500),ae(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),et=function(){var e=O(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:he(t.value),setTimeout((function(){o(!0),$e()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),tt=function(){var e=!p.current;h(e),e?n():nt()},nt=function(){le.current&&(clearInterval(le.current),ue(null))};return(0,r.jsxs)(r.Fragment,{children:[!Me.current&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"grid col-12",children:(0,r.jsxs)("div",{className:"p-inputgroup",children:[(0,r.jsxs)("label",{className:"ml-5 mt-2 mr-2",htmlFor:"startDate",children:["Start:"," "]}),(0,r.jsx)(P.f,{id:"startDate",name:"startDate",value:K.current,onSelect:function(e){return function(e){(null===ce||void 0===ce?void 0:ce.current)&&clearTimeout(ce.current);var t=setTimeout((function(){he(null),o(!0),X(new Date(e)),setTimeout((function(){$e()}))}),1500);ae(t)}(e.value)},showIcon:!0,showTime:!0,showSeconds:!0,maxDate:ee.current}),(0,r.jsx)("label",{className:"ml-5 mr-2 mt-2",htmlFor:"endDate",children:"End:"}),(0,r.jsx)(P.f,{id:"endDate",name:"endDate",value:ee.current,onSelect:function(e){return qe(e.value)},showIcon:!0,showTime:!0,showSeconds:!0,minDate:K.current,maxDate:ne.current}),(0,r.jsxs)("label",{className:"ml-5 mr-2 mt-2",htmlFor:"endDate",children:["Range:"," "]}),(0,r.jsx)(H.L,{className:"mt-0",name:"range",value:me,options:[{name:"Custom",value:null},{name:"1 Minute",value:60},{name:"5 Minutes",value:300},{name:"15 Minutes",value:900},{name:"30 Minutes",value:1800},{name:"60 Minutes",value:3600},{name:"90 Minutes",value:5400},{name:"2 Hours",value:7200},{name:"3 Hours",value:10800},{name:"6 Hours",value:21600},{name:"8 Hours",value:28800},{name:"12 Hours",value:43200}],onChange:et,optionLabel:"name",placeholder:"Select a Range"}),!p.current&&(0,r.jsx)(V.z,{className:"ml-2 p-button p-button-secondary",tooltip:"Start Stats Refreshing",tooltipOptions:{position:"bottom"},icon:"fa fa-play",onClick:tt}),p.current&&(0,r.jsx)(V.z,{className:"ml-2 p-button-raised p-button-secondary",tooltip:"Stop Stats Refreshing",tooltipOptions:{position:"bottom"},icon:"fa fa-pause",onClick:tt})]})})}),(0,r.jsx)("div",{className:"grid",children:(0,r.jsxs)("div",{className:"col-12 grid",children:[je.current&&(0,r.jsx)("div",{className:"col-12 m-auto mt-0",children:(0,r.jsx)(k.s,{header:"CPU Stats - "+e.container.name,toggleable:!0,children:(0,r.jsx)(R.B,{ref:_e,className:"m-4",statsCPU:Y,statsDates:L,startDate:Q,endDate:J})})}),we.current&&(0,r.jsx)("div",{className:"col-12 m-auto mt-0",children:(0,r.jsx)(k.s,{header:"Memory Stats - "+e.container.name,toggleable:!0,children:(0,r.jsx)(C.r,{ref:Le,className:"m-4",statsMemory:g,statsDates:L,startDate:Q,endDate:J})})}),Ve.current&&(0,r.jsx)("div",{className:"col-12 m-auto mt-0",children:(0,r.jsx)(k.s,{header:"Processes - "+e.container.name,toggleable:!0,children:(0,r.jsx)(D.R,{ref:Ae,className:"m-4",statsProcesses:v,statsDates:L,startDate:Q,endDate:J})})}),Ie.current&&(0,r.jsx)("div",{className:"col-12 m-auto mt-0",children:(0,r.jsx)(k.s,{header:"Network Stats - "+e.container.name,toggleable:!0,children:(0,r.jsx)(I.X,{ref:Fe,className:"m-4",statsNetworkIn:w,statsNetworkOut:U,statsDates:L,startDate:Q,endDate:J})})})]})})]})}function M(e){var t,n=(0,c.useState)(!0)[0];(0,c.useRef)(n).current=n;var s=(0,i.v9)((function(e){return e.hosts.activeHost})),a=(0,i.v9)((function(e){return e.containers})),o=(0,c.useRef)(s);o.current=s;var u=(0,c.useState)(null),l=u[0],d=u[1],m=(0,c.useRef)(l);m.current=l;var h=(0,c.useState)(null),p=h[0],f=h[1],v=(0,c.useRef)(p);v.current=p;var x=(0,c.useState)(null),j=x[0],g=x[1],N=(0,c.useRef)(j);N.current=j,(0,c.useEffect)((function(){e.host&&(d(e.host),setTimeout((function(){b()}),500))}),[e.host]),(0,c.useEffect)((function(){}),[N.current]);var b=function(){var e,t,n,r=[],s=[];(null===(e=m.current)||void 0===e?void 0:e.id)&&(n=m.current),!n&&(null===(t=o.current)||void 0===t?void 0:t.id)&&(n=o.current),n&&(Object.keys(a[n.id].containers).forEach((function(e){var t=a[n.id].containers[e].running?" (running) ":"",c={id:a[n.id].containers[e].id,name:a[n.id].containers[e].name,label:a[n.id].containers[e].name+" - "+a[n.id].containers[e].containerId+" "+t,running:a[n.id].containers[e].running,containerId:a[n.id].containers[e].containerId};r.push(c),a[n.id].containers[e].running&&s.push(c)})),r.sort((function(e,t){return e.name||(e.name="Unknown"),e.name.localeCompare(t.name)})),r.sort((function(e,t){return e.running>t.running})),g(r),f(s))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("div",{className:"form-group",children:(0,r.jsxs)("div",{className:"p-inputgroup",children:[(0,r.jsx)("span",{className:"p-inputgroup-addon",children:"Select Containers:"}),(0,r.jsx)(y.N,{name:"containers",id:"containers",options:N.current,optionLabel:"label",filter:!0,filterBy:"name",showClear:!0,value:null===v||void 0===v?void 0:v.current,placeholder:"Select Containers",onChange:function(e){f(e.value)},className:"multiselect-clearfix pl-2 pt-2 pb-2 form-control f-height-inputs"},"containers")]})})}),(null===(t=v.current)||void 0===t?void 0:t.length)>0&&(0,r.jsx)("div",{className:"col-12",children:v.current.map((function(t,n){return(0,r.jsx)("div",{className:"col-12 m-0 p-0",children:(0,r.jsx)(U,{container:t,containerId:t.containerId,showCpu:e.showCpu,showMemory:e.showMemory,showDisk:e.showDisk,showNetwork:e.showNetwork,showProcesses:e.showProcesses,hideControls:e.hideControls})},"charts___"+n)}))})]})}var _=n(21838);function L(e,t,n,r,s,a,c){try{var i=e[a](c),o=i.value}catch(u){return void n(u)}i.done?t(o):Promise.resolve(o).then(r,s)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){L(a,r,s,c,i,"next",e)}function i(e){L(a,r,s,c,i,"throw",e)}c(void 0)}))}}function F(e){var t,n,s,u,l=function(e){switch(e){case"containers":T.current||$e(y),H(!T.current);break;case"stats":$.current||($e($),K(!0),ee(!0));break;case"volumes":U.current||$e(R),O(!U.current);break;case"images":z.current||$e(C),Y(!z.current);break;case"networks":B.current||$e(S),Z(!B.current)}},m=(0,i.v9)((function(e){return e.containers})),h=(0,i.v9)((function(e){return e.volumes})),p=(0,i.v9)((function(e){return e.images})),f=(0,i.v9)((function(e){return e.networks})),y=(0,c.useRef)(null),S=(0,c.useRef)(null),R=(0,c.useRef)(null),C=(0,c.useRef)(null),D=(0,c.useRef)(null),I=(0,c.useState)(!1),P=I[0],H=I[1],T=(0,c.useRef)(P);T.current=P;var V=(0,c.useState)(!1),E=V[0],O=V[1],U=(0,c.useRef)(E);U.current=E;var L=(0,c.useState)(!1),F=L[0],Y=L[1],z=(0,c.useRef)(F);z.current=F;var W=(0,c.useState)(!1),G=W[0],Z=W[1],B=(0,c.useRef)(G);B.current=G;var Q=(0,c.useState)(!1),X=Q[0],K=Q[1],$=(0,c.useRef)(X);$.current=X;var J=(0,c.useState)(!0),q=J[0],ee=J[1],te=(0,c.useRef)(q);te.current=q;var ne=(0,c.useState)(!1),re=ne[0],se=ne[1],ae=(0,c.useRef)(re);ae.current=re;var ce=(0,c.useState)(!1),ie=ce[0],oe=ce[1],ue=(0,c.useRef)(ie);ue.current=ie;var le=(0,c.useState)(!1),de=le[0],me=le[1],he=(0,c.useRef)(de);he.current=de;var pe=(0,c.useState)(!1),fe=pe[0],ve=pe[1],xe=(0,c.useRef)(fe);xe.current=fe;var je=(0,c.useState)(!0)[0],ge=(0,c.useRef)(je);ge.current=je;var Ne=(0,c.useState)({cpuUsage:0,memInUse:0,diskRead:0,diskWrite:0,networkIn:0,networkOut:0,imageSize:0,processes:0,volumeSize:0}),be=Ne[0],we=Ne[1],ke=(0,c.useRef)(be);ke.current=be;var ye=(0,c.useState)(null),Se=ye[0],Re=ye[1],Ce=(0,c.useRef)(Se);Ce.current=Se;var De=(0,c.useState)(null),Ie=De[0],Pe=De[1];(0,c.useRef)(Ie).current=Ie;var He=(0,c.useState)(null),Te=He[0],Ve=He[1];(0,c.useRef)(Te).current=Te;var Ee=(0,c.useState)(null),Oe=Ee[0],Ue=Ee[1];(0,c.useRef)(Oe).current=Oe;var Me=(0,c.useState)(null),_e=Me[0],Le=Me[1],Ae=(0,c.useRef)(_e);Ae.current=_e;var Fe=(0,c.useState)(null),Ye=Fe[0],ze=Fe[1],We=(0,c.useRef)(Ye);We.current=Ye;var Ge=(0,c.useState)(null),Ze=Ge[0],Be=Ge[1],Qe=(0,c.useRef)(Ze);Qe.current=Ze,(0,c.useEffect)((function(){e.dockerInfo&&Re(e.dockerInfo),e.dockerVersion&&Pe(e.dockerVersion),e.dockerUsage&&Ve(e.dockerUsage),e.dockerPing&&Ue(e.dockerHost),e.dockerHost&&Le(e.dockerHost),setTimeout((function(){!function(){if(Ae.current){var e=[];Object.keys(h[Ae.current.id]).forEach((function(t){var n=h[Ae.current.id][t];Object.keys(n).forEach((function(t){var r=n[t];e.push(r)}))})),Be(e);var t=[];Object.keys(f[Ae.current.id]).forEach((function(e){var n=f[Ae.current.id][e];Object.keys(n).forEach((function(e){var r=n[e];t.push(r)}))})),ze(t)}}(),rt()}),300)}),[e]),(0,c.useEffect)((function(){rt()}),[]),(0,c.useEffect)((function(){rt()}),[m]);var Xe=function(e){var t=e.collapsed?"pi pi-chevron-down":"pi pi-chevron-up",n="".concat(e.className," justify-content-start"),s="".concat(e.titleClassName," pl-1");return(0,r.jsx)("div",{className:n,children:(0,r.jsxs)("div",{className:"col-12 grid",children:[(0,r.jsx)("div",{className:"col-10",children:(0,r.jsx)("span",{className:s,children:e.props.header})}),(0,r.jsxs)("div",{className:"col-2 text-right",children:[(0,r.jsxs)("button",{className:e.togglerClassName+" mr-4",onClick:e.onTogglerClick,tooltip:"Collapse this panel",children:[(0,r.jsx)("span",{className:t}),(0,r.jsx)(o.H,{})]}),(0,r.jsxs)("button",{className:e.togglerClassName,onClick:function(){Ke(e.props.closeAction)},tooltip:"Close this panel",children:[(0,r.jsx)("span",{className:"pi pi-times"}),(0,r.jsx)(o.H,{})]})]})]})})},Ke=function(e){switch(e){case"images":Y(!1);break;case"networks":Z(!1);break;case"containers":H(!1);break;case"volumes":O(!1);break;case"stats":K(!1)}},$e=function(e){if(e.current){var t=document.getElementById(e.current.id).getBoundingClientRect().top+window.pageYOffset-45;window.scrollTo({top:t,behavior:"smooth"})}},Je=function(){var e=A(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("containers",T.current);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qe=function(){var e=A(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("networks",B.current);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),et=function(){var e=A(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("volumes",U.current);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),tt=function(){var e=A(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("images",z.current);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nt=function(){var e=A(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("stats",$.current);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rt=function(){var e=A(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ae.current){e.next=2;break}return e.abrupt("return");case 2:if(m){e.next=4;break}return e.abrupt("return");case 4:t={memInUse:0,cpuUsage:0,diskRead:0,diskWrite:0,networkIn:0,networkOut:0,imageSize:0,processes:0,swapMemory:0},n=0,Object.keys(m[Ae.current.id].containers).forEach((function(e){var r,s,a,c,i,o,u,l=m[Ae.current.id].containers[e];l.running&&(t.memInUse+=(null===(r=l.statsSummary)||void 0===r?void 0:r.memoryUsage)||0,t.cpuUsage+=(null===(s=l.statsSummary)||void 0===s?void 0:s.cpuUsage)||0,t.diskRead+=(null===(a=l.statsSummary)||void 0===a?void 0:a.diskread)||0,t.diskWrite+=(null===(c=l.statsSummary)||void 0===c?void 0:c.diskWrite)||0,t.networkIn+=(null===(i=l.statsSummary)||void 0===i?void 0:i.networkRx)||0,t.networkOut+=(null===(o=l.statsSummary)||void 0===o?void 0:o.networkTx)||0,t.processes+=(null===(u=l.statsSummary)||void 0===u?void 0:u.processes)||0,n++)})),Object.keys(p[Ae.current.id].images).forEach((function(e){var n=p[Ae.current.id].images[e];t.imageSize+=Number(n.fileSize)||0})),t.cpuUsage=Math.round(t.cpuUsage/n),we(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Ce.current?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"surface-ground mt-0",children:[(0,r.jsx)("div",{className:"col-12 m-0 p-0",children:(0,r.jsxs)("div",{className:"col-12 surface-card col-0 m-0",style:{borderRadius:"10px"},children:[(0,r.jsxs)("div",{className:"grid col-12 mb-0 m-0",children:[(0,r.jsx)("div",{className:"col-2",children:(0,r.jsxs)("div",{onClick:function(){return nt()},style:{cursor:"pointer"},className:"containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple cyan",children:[(0,r.jsx)(o.H,{}),(0,r.jsx)(x.G,{icon:j.Owo,className:"text-4xl text-cyan-600 mb-2",swapOpacity:!0}),(0,r.jsx)("div",{className:"text-900 font-bold text-4xl mb-1 line-height-2 text-center",children:(null===Ce||void 0===Ce||null===(t=Ce.current)||void 0===t?void 0:t.NCPU)||0}),(0,r.jsx)("p",{className:"text-700 m-0",children:"CPUs"}),(0,r.jsxs)("p",{className:"text-700 m-0",children:[null===ke||void 0===ke?void 0:ke.current.cpuUsage,"% In Use"]})]})}),(0,r.jsx)("div",{className:"col-2",children:(0,r.jsxs)("div",{onClick:function(){return nt()},style:{cursor:"pointer"},className:"containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple blue",children:[(0,r.jsx)(o.H,{}),(0,r.jsx)(x.G,{icon:j.zvy,className:"text-4xl text-blue-600 mb-2",swapOpacity:!0}),(0,r.jsx)("div",{className:"text-900 font-bold text-3xl mb-1 line-height-2 text-center",children:v.t.bytes((null===Ce||void 0===Ce||null===(n=Ce.current)||void 0===n?void 0:n.MemTotal)||0)}),(0,r.jsx)("p",{className:"text-700 m-0",children:"Max Memory"}),(0,r.jsxs)("p",{className:"text-700 m-0",children:[v.t.bytes((null===ke||void 0===ke?void 0:ke.current.memInUse)||0)," In Use"]})]})}),(0,r.jsx)("div",{className:"col-2",children:(0,r.jsxs)("div",{style:{cursor:"pointer"},onClick:function(){return Je()},className:"containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple orange",children:[(0,r.jsx)(o.H,{}),(0,r.jsx)(x.G,{icon:j.Zrf,className:"text-4xl text-orange-600 mb-2",swapOpacity:!0}),(0,r.jsx)("div",{className:"text-900 font-bold text-3xl mb-1 line-height-2 text-center",children:Se.Containers||0}),(0,r.jsx)("p",{className:"text-700 m-0",children:"Containers"}),(0,r.jsxs)("span",{className:"text-900",children:[Se.ContainersRunning||0," Running",(0,r.jsx)("br",{}),null===ke||void 0===ke?void 0:ke.current.processes," Processes"]})]})}),(0,r.jsx)("div",{className:"col-2",children:(0,r.jsxs)("div",{onClick:function(){return qe()},style:{cursor:"pointer"},className:"containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple yellow",children:[(0,r.jsx)(o.H,{}),(0,r.jsx)(x.G,{icon:j.kXW,className:"text-4xl text-yellow-600 mb-2",swapOpacity:!0}),(0,r.jsx)("div",{className:"text-900 font-bold text-3xl mb-1 line-height-2 text-center",children:(null===We||void 0===We||null===(s=We.current)||void 0===s?void 0:s.length)||0}),(0,r.jsx)("p",{className:"text-700 m-0",children:"Networks"}),(0,r.jsxs)("span",{className:"text-900",children:[v.t.bytes((null===ke||void 0===ke?void 0:ke.current.networkOut)||0),"  Tx",(0,r.jsx)("br",{}),v.t.bytes((null===ke||void 0===ke?void 0:ke.current.networkIn)||0)," Rx"]})]})}),(0,r.jsx)("div",{className:"col-2",children:(0,r.jsxs)("div",{onClick:function(){return et()},style:{cursor:"pointer"},className:"containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 mr-2 px-2 py-2 text-center p-ripple purple",children:[(0,r.jsx)(o.H,{}),(0,r.jsx)(x.G,{icon:j.Yws,className:"text-4xl text-purple-600 mb-2",swapOpacity:!0}),(0,r.jsx)("div",{className:"text-900 font-bold text-3xl mb-1 line-height-2 text-center",children:(null===Qe||void 0===Qe||null===(u=Qe.current)||void 0===u?void 0:u.length)||0}),(0,r.jsx)("p",{className:"text-700 m-0",children:"Volumes"}),(0,r.jsxs)("span",{className:"text-900",children:[v.t.bytes((null===ke||void 0===ke?void 0:ke.current.diskRead)||0)," Read",(0,r.jsx)("br",{}),v.t.bytes((null===ke||void 0===ke?void 0:ke.current.diskWrite)||0)," Write"]})]})}),(0,r.jsx)("div",{className:"col-2",children:(0,r.jsxs)("div",{onClick:function(){return tt()},style:{cursor:"pointer"},className:"containerSummaryDivHighlight card height-100 shadow-4 ml-2 mt-3 px-2 py-2 text-center p-ripple green",children:[(0,r.jsx)(o.H,{}),(0,r.jsx)(x.G,{icon:j.Yws,className:"text-4xl text-green-600 mb-2",swapOpacity:!0}),(0,r.jsx)("div",{className:"text-900 font-bold text-3xl mb-1 line-height-2 text-center",children:Ce.current.Images||0}),(0,r.jsx)("p",{className:"text-700 m-0",children:"Images"}),(0,r.jsx)("span",{className:"text-900",children:v.t.bytes((null===ke||void 0===ke?void 0:ke.current.imageSize)||0)})]})})]}),$.current&&(0,r.jsxs)("div",{className:"grid col-12 mt-1 mb-0 m-0",children:[(0,r.jsx)("div",{className:"col-2 p-0 m-0",children:(0,r.jsx)("div",{className:"col-12 p-0 mt-0 mb-0 text-center",children:(0,r.jsx)(_.Q,{tooltip:"Show Charts",className:"charts-input-switch",checked:te.current,onChange:function(e){e.preventDefault(),ee(e.value)}})})}),(0,r.jsx)("div",{className:"col-2 p-0 m-0",children:(0,r.jsx)("div",{className:"col-12 p-0 mt-1 mb-0 text-center",children:(0,r.jsx)(_.Q,{tooltip:"Show Memory Charts",className:"charts-input-switch",checked:ae.current,onChange:function(e){e.preventDefault(),se(e.value)}})})}),(0,r.jsx)("div",{className:"col-2 p-0 m-0",children:(0,r.jsx)("div",{className:"col-12 p-0 mt-1 mb-0 text-center",children:(0,r.jsx)(_.Q,{tooltip:"Show Processes Charts",className:"charts-input-switch",checked:xe.current,onChange:function(e){e.preventDefault(),ve(e.value)}})})}),(0,r.jsx)("div",{className:"col-2 p-0 m-0",children:(0,r.jsx)("div",{className:"col-12 p-0 mt-1 mb-0 text-center",children:(0,r.jsx)(_.Q,{tooltip:"Show Networks Charts",className:"charts-input-switch",checked:he.current,onChange:function(e){e.preventDefault(),me(e.value)}})})}),(0,r.jsx)("div",{className:"col-2 p-0 m-0",children:(0,r.jsx)("div",{className:"col-12 p-0 mt-1 mb-0 text-center",children:(0,r.jsx)(_.Q,{tooltip:"Show Disk Charts",className:"charts-input-switch",checked:ue.current,onChange:function(e){e.preventDefault(),oe(e.value)}})})}),(0,r.jsx)("div",{className:"col-2 p-0 m-0"})]}),(0,r.jsx)("div",{className:"col-12 p-0 mb-4"})]})}),(0,r.jsx)("div",{ref:D,id:"showStatsPanel",className:"col-12 m-0 p-0",children:$.current&&(0,r.jsx)(k.s,{className:"sitePanel",header:"Host Stats: "+Ae.current.name,hideHeader:!0,headerTemplate:Xe,toggleable:!0,closeAction:"stats",children:(0,r.jsx)(M,{host:Ae.current,showCpu:te.current,showMemory:ae.current,showDisk:ue.current,showNetwork:he.current,showProcesses:xe.current,hideControls:ge.current})})}),(0,r.jsx)("div",{ref:y,id:"showContainersPanel",className:"col-12 m-0 p-0",children:T.current&&(0,r.jsx)(k.s,{className:"sitePanel",header:"",hideHeader:!0,headerTemplate:Xe,toggleable:!0,closeAction:"containers",children:(0,r.jsx)(g.default,{})})}),(0,r.jsx)("div",{ref:C,id:"showImagesPanel",className:"col-12 m-0 p-0",children:z.current&&(0,r.jsx)(k.s,{className:"sitePanel",header:"",hideHeader:!0,headerTemplate:Xe,toggleable:!0,closeAction:"images",children:(0,r.jsx)(w.default,{})})}),(0,r.jsx)("div",{ref:R,id:"showVolumesPanel",className:"col-12 m-0 p-0",children:U.current&&(0,r.jsx)(k.s,{className:"sitePanel",header:"",hideHeader:!0,headerTemplate:Xe,toggleable:!0,closeAction:"volumes",children:(0,r.jsx)(N.default,{})})}),(0,r.jsx)("div",{ref:S,id:"showNetworksPanel",className:"col-12 m-0 p-0",children:B.current&&(0,r.jsx)(k.s,{className:"sitePanel",header:"",hideHeader:!0,headerTemplate:Xe,toggleable:!0,closeAction:"networks",children:(0,r.jsx)(b.default,{})})})]})}):(0,r.jsx)(d.$,{})}var Y=n(11163);function z(e,t,n,r,s,a,c){try{var i=e[a](c),o=i.value}catch(u){return void n(u)}i.done?t(o):Promise.resolve(o).then(r,s)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){z(a,r,s,c,i,"next",e)}function i(e){z(a,r,s,c,i,"throw",e)}c(void 0)}))}}function G(){var e,t,n,s=(0,Y.useRouter)(),p=(0,c.useState)(!0),v=p[0],x=p[1];(0,c.useRef)(v).current=v;var j=(0,c.useState)(null),g=j[0],N=j[1],b=(0,c.useRef)(g);b.current=g;var w=(0,c.useState)(!1),y=w[0],S=w[1],R=(0,i.v9)((function(e){return e.hosts.activeHost})),C=(0,c.useRef)(R);C.current=R;var D=(0,c.useState)(null),I=D[0],P=D[1];(0,c.useRef)(I).current=I;var H=(0,c.useState)(null),T=H[0],V=H[1],E=(0,c.useRef)(T);E.current=T;var O=(0,c.useState)(null),U=O[0],M=O[1],_=(0,c.useRef)(U);_.current=U;var L=(0,c.useState)(null),A=L[0],z=L[1],G=(0,c.useRef)(A);G.current=A;var Z=(0,c.useState)(null),B=Z[0],Q=Z[1],X=(0,c.useRef)(null),K=(0,c.useState)({system:{kernelMemory:!0,memoryLimit:!0,swapLimit:!0,cpuShares:!0,cpuSet:!0,pidsLimit:!0,containers:0,containersRunning:0,containersPaused:0,containersStopped:0,images:0,memTotal:0,dockerRootdir:"/var/lib/docker",httpProxy:"",httpsProxy:"",serverVersion:"",cpuNum:0},version:{platform:"Docker",version:null,apiVersion:null,minApiVersion:null,gitCommit:null,os:null,arch:null,kernelVersion:null,experimental:null,buildTime:null},ping:null}),$=K[0],J=K[1],q=(0,c.useRef)($);q.current=$;var ee=(0,i.v9)((function(e){return e.hosts.hosts}));function te(){return ne.apply(this,arguments)}function ne(){return(ne=W(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return");case 2:return S(!0),t="mainDashboardResults",e.next=6,u.L.getSocket();case 6:return(n=e.sent).on(t,(function(e){if("success"===e.status&&e.data){var t=e.data;switch(e.hook){case"dockerInfo":ie(e.data);break;case"dockerVersion":ue(e.data);break;case"dockerUsage":break;case"dockerPing":de(e.data)}P(t),ae()}})),N(n),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return se.apply(this,arguments)}function se(){return(se=W(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===C||void 0===C||null===(t=C.current)||void 0===t?void 0:t.id){e.next=3;break}return e.abrupt("return");case 3:x(!0),b.current.emit("docker",{command:"dockerInfo",callback:"mainDashboardResults",hook:"dockerInfo",hostId:C.current.id}),b.current.emit("docker",{command:"dockerPing",callback:"mainDashboardResults",hook:"dockerPing",hostId:C.current.id}),b.current.emit("docker",{command:"dockerVersion",callback:"mainDashboardResults",hook:"dockerVersion",hostId:C.current.id}),setTimeout((function(){x(!1)}),1e3);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){return ce.apply(this,arguments)}function ce(){return(ce=W(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=[]).push({label:"Create Volume",icon:"fa fa-plus",tooltip:"Create Volume.",className:n="",command:function(){s.push("/volumes/create")}}),t.push({label:"View Volumes",icon:"fa fa-fw fa-list",tooltip:"View Volumes.",className:n,command:function(){s.push("/volumes")}}),t.push({label:"Create Image",icon:"fa fa-plus",tooltip:"Create Image.",className:n,command:function(){s.push("/images/create")}}),t.push({label:"View Images",icon:"fa fa-fw fa-list",tooltip:"View Image.",className:n,command:function(){s.push("/images")}}),t.push({label:"Create Container",icon:"fa fa-fw fa-tv",tooltip:"Create Container.",className:n,command:function(){s.push("/containers/create")}}),t.push({label:"View Containers",icon:"fa fa-fw fa-list",tooltip:"View Containers.",className:n,command:function(){s.push("/containers")}}),Q(t),x(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=W(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){return le.apply(this,arguments)}function le(){return(le=W(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return me.apply(this,arguments)}function me(){return(me=W(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q.current.ping=t,J(q.current),z(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if((0,c.useRef)(ee).current=ee,(0,c.useEffect)(W(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=3;break}return e.next=3,te();case 3:setTimeout((function(){return re()}),500);case 4:case"end":return e.stop()}}),e)}))),[C.current]),(0,c.useEffect)((function(){}),[]),(0,c.useEffect)((function(){return function(){if(null===b||void 0===b?void 0:b.current){b.current.removeListener("mainDashboardResults")}}}),[]),v)return(0,r.jsx)(d.$,{});if(!C.current)return(0,r.jsx)("div",{children:"Host not selected."});var he=function(e){console.log("Panel",e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"col-12 p-0 ml-1 mr-1 grid",children:[(0,r.jsx)("div",{className:"col-12 mt-4 text-900 font-bold text-4xl line-height-1 mb-1 text-center",children:(0,r.jsxs)("div",{className:"col-12 text-center grid",children:[(0,r.jsxs)("div",{className:"ml-auto mr-auto col-0 text-left grid mb-0 pb-0",children:[(0,r.jsx)(f,{className:"p-2 mr-2 mb-1 mr-3",status:q.current.ping}),(0,r.jsxs)("div",{className:"mt-0 p-0",children:["Docker Host: ",C.current.name]})]}),(0,r.jsx)("div",{className:"col-12 mb-0",children:(0,r.jsxs)("p",{className:"text-600 line-height-3 text-lg m-0 mb-0 text-center",children:["Status: ",G.current||"Unknown"]})}),(0,r.jsx)("div",{className:"col-12 mb-0 mt-0",children:(0,r.jsxs)("p",{className:"text-600 line-height-3 text-lg m-0 mb-0 mt-0 pt-0 text-center",children:[(0,r.jsx)(m.default,{className:"mr-4",href:"https://docs.docker.com/engine/release-notes",passHref:!0,children:(0,r.jsxs)("a",{target:"_blank",className:"lightblue-color",children:["Docker v",(null===_||void 0===_||null===(e=_.current)||void 0===e?void 0:e.Version)||"Uknown"]})}),(0,r.jsx)("span",{className:"ml-1 mr-1 pl-1 pr-1",children:"|"}),(0,r.jsx)(m.default,{className:"ml-3",href:"https://docs.docker.com/engine/api/v"+(null===_||void 0===_||null===(t=_.current)||void 0===t?void 0:t.ApiVersion),passHref:!0,children:(0,r.jsxs)("a",{target:"_blank",className:"lightblue-color",children:["Engine v",(null===_||void 0===_||null===(n=_.current)||void 0===n?void 0:n.ApiVersion)||"Unknown"]})})]})})]})}),(0,r.jsx)("div",{className:"col-12 p-0 m-0 mb-2 menubar-background",children:(0,r.jsx)(h.n,{className:"col-12 mb-2 ml-0 mr-0 justify-content-center menubar-menu",model:B})}),(0,r.jsx)("div",{id:"showSummaryPanel",className:"col-12 p-0 m-0",children:(0,r.jsx)(k.s,{className:"sitePanel",ref:X,header:"Summary Vitals",headerTemplate:function(e){var t=e.collapsed?"pi pi-chevron-down":"pi pi-chevron-up",n="".concat(e.className," justify-content-start"),s="".concat(e.titleClassName," pl-1");return(0,r.jsx)("div",{className:n,children:(0,r.jsxs)("div",{className:"col-12 grid",children:[(0,r.jsx)("div",{className:"col-10",children:(0,r.jsx)("span",{className:s,children:e.props.header})}),(0,r.jsxs)("div",{className:"col-2 text-right",children:[(0,r.jsxs)("button",{className:e.togglerClassName+" mr-4",onClick:e.onTogglerClick,tooltip:"Collapse this panel",children:[(0,r.jsx)("span",{className:t}),(0,r.jsx)(o.H,{})]}),(0,r.jsxs)("button",{className:e.togglerClassName,onClick:function(){he(e.props.closeAction)},tooltip:"Close this panel",children:[(0,r.jsx)("span",{className:"pi pi-times"}),(0,r.jsx)(o.H,{})]})]})]})})},toggleable:!0,closeAction:"summary",children:(0,r.jsx)(F,{dockerInfo:E.current,dockerVersion:_.current,dockerHost:C.current})})}),(0,r.jsxs)("div",{className:"col-12 mt-6",children:[(0,r.jsx)(l.Z,{className:"mt-3",header:"Docker Ping",data:A,collapsed:"true"}),(0,r.jsx)(l.Z,{className:"mt-3",header:"Docker Version",data:U,collapsed:"true"}),(0,r.jsx)(l.Z,{className:"mt-3",header:"Docker Info",data:T,collapsed:"true"})]})]}),(0,r.jsx)("div",{className:"bottom-spacer col-12 m-0 p-0",style:{height:"800px"}})]})}function Z(){return(0,r.jsx)("div",{className:"col-12 m-0 p-0",children:(0,r.jsx)("main",{className:"col-12 m-0 p-0",children:(0,r.jsx)(G,{})})})}}},function(e){e.O(0,[5257,7570,2727,9723,5533,4282,3621,9686,2723,9989,6903,2586,9774,2888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);