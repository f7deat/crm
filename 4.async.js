"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[436],{86587:function(P,C,e){e.r(C);var d=e(27649),l=e(76772),u=e(85893),n=function(){return(0,u.jsx)(d._z,{ghost:!0,children:(0,u.jsx)(l.Z,{message:"Wellcome to CRM!"})})};C.default=n},5467:function(P,C,e){e.d(C,{Z:function(){return d}});function d(l){return Object.keys(l).reduce(function(u,n){return(n.startsWith("data-")||n.startsWith("aria-")||n==="role")&&!n.startsWith("data-__")&&(u[n]=l[n]),u},{})}},76772:function(P,C,e){e.d(C,{Z:function(){return A}});var d=e(87462),l=e(4942),u=e(29439),n=e(67294),S=e(54549),H=e(15873),K=e(57119),U=e(68628),z=e(73218),G=e(38819),J=e(68855),Q=e(40847),V=e(43061),X=e(63441),Y=e(94184),O=e.n(Y),b=e(53124),w=e(5467),k=e(15671),q=e(43144),_=e(79340),ee=e(98557),ne=function(i){(0,_.Z)(r,i);var t=(0,ee.Z)(r);function r(){var o;return(0,k.Z)(this,r),o=t.apply(this,arguments),o.state={error:void 0,info:{componentStack:""}},o}return(0,q.Z)(r,[{key:"componentDidCatch",value:function(s,v){this.setState({error:s,info:v})}},{key:"render",value:function(){var s=this.props,v=s.message,p=s.description,g=s.children,y=this.state,Z=y.error,h=y.info,N=h&&h.componentStack?h.componentStack:null,x=typeof v>"u"?(Z||"").toString():v,I=typeof p>"u"?N:p;return Z?n.createElement(A,{type:"error",message:x,description:n.createElement("pre",null,I)}):g}}]),r}(n.Component),te=e(96159),oe=function(i,t){var r={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&t.indexOf(o)<0&&(r[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(i);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(i,o[s])&&(r[o[s]]=i[o[s]]);return r},re={success:G.Z,info:Q.Z,error:V.Z,warning:J.Z},ae={success:H.Z,info:U.Z,error:z.Z,warning:K.Z},D=function(t){var r,o=t.description,s=t.prefixCls,v=t.message,p=t.banner,g=t.className,y=g===void 0?"":g,Z=t.style,h=t.onMouseEnter,N=t.onMouseLeave,x=t.onClick,I=t.afterClose,L=t.showIcon,se=t.closable,M=t.closeText,T=t.closeIcon,ce=T===void 0?n.createElement(S.Z,null):T,j=t.action,E=oe(t,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),le=n.useState(!1),R=(0,u.Z)(le,2),W=R[0],ie=R[1],de=n.useRef(),$=n.useContext(b.E_),ue=$.getPrefixCls,ve=$.direction,a=ue("alert",s),me=function(c){var f;ie(!0),(f=E.onClose)===null||f===void 0||f.call(E,c)},fe=function(){var c=E.type;return c!==void 0?c:p?"warning":"info"},Ce=M?!0:se,B=fe(),pe=function(){var c=E.icon,f=(o?ae:re)[B]||null;return c?(0,te.wm)(c,n.createElement("span",{className:"".concat(a,"-icon")},c),function(){return{className:O()("".concat(a,"-icon"),(0,l.Z)({},c.props.className,c.props.className))}}):n.createElement(f,{className:"".concat(a,"-icon")})},he=function(){return Ce?n.createElement("button",{type:"button",onClick:me,className:"".concat(a,"-close-icon"),tabIndex:0},M?n.createElement("span",{className:"".concat(a,"-close-text")},M):ce):null},F=p&&L===void 0?!0:L,Ee=O()(a,"".concat(a,"-").concat(B),(r={},(0,l.Z)(r,"".concat(a,"-with-description"),!!o),(0,l.Z)(r,"".concat(a,"-no-icon"),!F),(0,l.Z)(r,"".concat(a,"-banner"),!!p),(0,l.Z)(r,"".concat(a,"-rtl"),ve==="rtl"),r),y),ge=(0,w.Z)(E);return n.createElement(X.Z,{visible:!W,motionName:"".concat(a,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(c){return{maxHeight:c.offsetHeight}},onLeaveEnd:I},function(m){var c=m.className,f=m.style;return n.createElement("div",(0,d.Z)({ref:de,"data-show":!W,className:O()(Ee,c),style:(0,d.Z)((0,d.Z)({},Z),f),onMouseEnter:h,onMouseLeave:N,onClick:x,role:"alert"},ge),F?pe():null,n.createElement("div",{className:"".concat(a,"-content")},v?n.createElement("div",{className:"".concat(a,"-message")},v):null,o?n.createElement("div",{className:"".concat(a,"-description")},o):null),j?n.createElement("div",{className:"".concat(a,"-action")},j):null,he())})};D.ErrorBoundary=ne;var A=D}}]);
