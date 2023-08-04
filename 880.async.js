(self.webpackChunk=self.webpackChunk||[]).push([[880],{86548:function(se,w,l){"use strict";l.d(w,{Z:function(){return m}});var v=l(1413),n=l(62435),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},K=R,d=l(84089),p=function(F,X){return n.createElement(d.Z,(0,v.Z)((0,v.Z)({},F),{},{ref:X,icon:K}))};p.displayName="EditOutlined";var m=n.forwardRef(p)},6880:function(se,w,l){"use strict";l.d(w,{Z:function(){return Gt}});var v=l(87462),n=l(62435),R=l(4942),K=l(71002),d=l(97685),p=l(63606),m=l(57132),O=l(86548),F=l(94184),X=l.n(F),ce=l(20640),q=l.n(ce),C=l(48555),ue=l(50344),de=l(8410),U=l(21770),fe=l(98423),Ne=l(42550),Me=l(53124),dt=l(23715),$e=l(34952),De=l(79370),Pe=l(84908),ze=l(1413),ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},vt=ft,pt=l(84089),ke=function(r,a){return n.createElement(pt.Z,(0,ze.Z)((0,ze.Z)({},r),{},{ref:a,icon:vt}))};ke.displayName="EnterOutlined";var yt=n.forwardRef(ke),Ae=l(15105),mt=l(56994),gt=l(96159),Et=function(r){var a=r.prefixCls,t=r["aria-label"],o=r.className,u=r.style,P=r.direction,T=r.maxLength,h=r.autoSize,N=h===void 0?!0:h,f=r.value,B=r.onSave,M=r.onCancel,L=r.onEnd,$=r.component,D=r.enterIcon,_=D===void 0?n.createElement(yt,null):D,G=n.useRef(null),b=n.useRef(!1),J=n.useRef(),H=n.useState(f),Y=(0,d.Z)(H,2),Q=Y[0],Z=Y[1];n.useEffect(function(){Z(f)},[f]),n.useEffect(function(){if(G.current&&G.current.resizableTextArea){var g=G.current.resizableTextArea.textArea;g.focus();var E=g.value.length;g.setSelectionRange(E,E)}},[]);var ve=function(E){var x=E.target;Z(x.value.replace(/[\n\r]/g,""))},ee=function(){b.current=!0},k=function(){b.current=!1},A=function(E){var x=E.keyCode;b.current||(J.current=x)},y=function(){B(Q.trim())},pe=function(E){var x=E.keyCode,ye=E.ctrlKey,Ee=E.altKey,ie=E.metaKey,ne=E.shiftKey;J.current===x&&!b.current&&!ye&&!Ee&&!ie&&!ne&&(x===Ae.Z.ENTER?(y(),L==null||L()):x===Ae.Z.ESC&&M())},te=function(){y()},oe=$?"".concat(a,"-").concat($):"",z=X()(a,"".concat(a,"-edit-content"),(0,R.Z)({},"".concat(a,"-rtl"),P==="rtl"),o,oe);return n.createElement("div",{className:z,style:u},n.createElement(mt.Z,{ref:G,maxLength:T,value:Q,onChange:ve,onKeyDown:A,onKeyUp:pe,onCompositionStart:ee,onCompositionEnd:k,onBlur:te,"aria-label":t,rows:1,autoSize:N}),_!==null?(0,gt.Tm)(_,{className:"".concat(a,"-edit-content-confirm")}):null)},Ct=Et;function Te(e,r){return n.useMemo(function(){var a=!!e;return[a,(0,v.Z)((0,v.Z)({},r),a&&(0,K.Z)(e)==="object"?e:null)]},[e])}var St=function(r,a){var t=n.useRef(!1);n.useEffect(function(){t.current?r():t.current=!0},a)},ht=St,bt=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},xt=n.forwardRef(function(e,r){var a=e.prefixCls,t=e.component,o=t===void 0?"article":t,u=e.className,P=e.setContentRef,T=e.children,h=e.direction,N=bt(e,["prefixCls","component","className","setContentRef","children","direction"]),f=n.useContext(Me.E_),B=f.getPrefixCls,M=f.direction,L=h!=null?h:M,$=r;P&&($=(0,Ne.sQ)(r,P));var D=B("typography",a),_=X()(D,(0,R.Z)({},"".concat(D,"-rtl"),L==="rtl"),u);return n.createElement(o,(0,v.Z)({className:_,ref:$},N),T)}),je=xt;function Ke(e){var r=(0,K.Z)(e);return r==="string"||r==="number"}function Rt(e){var r=0;return e.forEach(function(a){Ke(a)?r+=String(a).length:r+=1}),r}function Ue(e,r){for(var a=0,t=[],o=0;o<e.length;o+=1){if(a===r)return t;var u=e[o],P=Ke(u),T=P?String(u).length:1,h=a+T;if(h>r){var N=r-a;return t.push(String(u).slice(0,N)),t}t.push(u),a=h}return e}var Ot=0,Se=1,Be=2,Ie=3,He=4,Zt=function(r){var a=r.enabledMeasure,t=r.children,o=r.text,u=r.width,P=r.fontSize,T=r.rows,h=r.onEllipsis,N=n.useState([0,0,0]),f=(0,d.Z)(N,2),B=(0,d.Z)(f[0],3),M=B[0],L=B[1],$=B[2],D=f[1],_=n.useState(Ot),G=(0,d.Z)(_,2),b=G[0],J=G[1],H=n.useState(0),Y=(0,d.Z)(H,2),Q=Y[0],Z=Y[1],ve=n.useRef(null),ee=n.useRef(null),k=n.useMemo(function(){return(0,ue.Z)(o)},[o]),A=n.useMemo(function(){return Rt(k)},[k]),y=n.useMemo(function(){return!a||b!==Ie?t(k,!1):t(Ue(k,L),L<A)},[a,b,t,k,L,A]);(0,de.Z)(function(){a&&u&&P&&A&&(J(Se),D([0,Math.ceil(A/2),A]))},[a,u,P,o,A,T]),(0,de.Z)(function(){var z;b===Se&&Z(((z=ve.current)===null||z===void 0?void 0:z.offsetHeight)||0)},[b]),(0,de.Z)(function(){var z,g;if(Q){if(b===Se){var E=((z=ee.current)===null||z===void 0?void 0:z.offsetHeight)||0,x=T*Q;E<=x?(J(He),h(!1)):J(Be)}else if(b===Be)if(M!==$){var ye=((g=ee.current)===null||g===void 0?void 0:g.offsetHeight)||0,Ee=T*Q,ie=M,ne=$;M===$-1?ne=M:ye<=Ee?ie=L:ne=L;var xe=Math.ceil((ie+ne)/2);D([ie,xe,ne])}else J(Ie),h(!0)}},[b,M,$,T,Q]);var pe={width:u,whiteSpace:"normal",margin:0,padding:0},te=function(g,E,x){return n.createElement("span",{"aria-hidden":!0,ref:E,style:(0,v.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(P/2)*2},x)},g)},oe=function(g,E){var x=Ue(k,g);return te(t(x,!0),E,pe)};return n.createElement(n.Fragment,null,y,a&&b!==Ie&&b!==He&&n.createElement(n.Fragment,null,te("lg",ve,{wordBreak:"keep-all",whiteSpace:"nowrap"}),b===Se?te(t(k,!1),ee,pe):oe(L,ee)))},wt=Zt,Pt=function(r){var a=r.enabledEllipsis,t=r.isEllipsis,o=r.children,u=r.tooltipProps;return!(u!=null&&u.title)||!a?o:n.createElement(Pe.Z,(0,v.Z)({open:t?void 0:!1},u),o)},Tt=Pt,It=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};function Lt(e,r){var a=e.mark,t=e.code,o=e.underline,u=e.delete,P=e.strong,T=e.keyboard,h=e.italic,N=r;function f(B,M){B&&(N=n.createElement(M,{},N))}return f(P,"strong"),f(o,"u"),f(u,"del"),f(t,"code"),f(a,"mark"),f(T,"kbd"),f(h,"i"),N}function he(e,r,a){return e===!0||e===void 0?r:e||a&&r}function We(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}var Nt="...",Mt=n.forwardRef(function(e,r){var a,t,o,u=e.prefixCls,P=e.className,T=e.style,h=e.type,N=e.disabled,f=e.children,B=e.ellipsis,M=e.editable,L=e.copyable,$=e.component,D=e.title,_=It(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),G=n.useContext(Me.E_),b=G.getPrefixCls,J=G.direction,H=(0,dt.E)("Text")[0],Y=n.useRef(null),Q=n.useRef(null),Z=b("typography",u),ve=(0,fe.Z)(_,["mark","code","delete","underline","strong","keyboard","italic"]),ee=Te(M),k=(0,d.Z)(ee,2),A=k[0],y=k[1],pe=(0,U.Z)(!1,{value:y.editing}),te=(0,d.Z)(pe,2),oe=te[0],z=te[1],g=y.triggerType,E=g===void 0?["icon"]:g,x=function(i){var c;i&&((c=y.onStart)===null||c===void 0||c.call(y)),z(i)};ht(function(){var s;oe||(s=Q.current)===null||s===void 0||s.focus()},[oe]);var ye=function(i){i==null||i.preventDefault(),x(!0)},Ee=function(i){var c;(c=y.onChange)===null||c===void 0||c.call(y,i),x(!1)},ie=function(){var i;(i=y.onCancel)===null||i===void 0||i.call(y),x(!1)},ne=Te(L),xe=(0,d.Z)(ne,2),Le=xe[0],le=xe[1],Jt=n.useState(!1),Ve=(0,d.Z)(Jt,2),Re=Ve[0],Fe=Ve[1],Ge=n.useRef(),Je={};le.format&&(Je.format=le.format);var Qe=function(){window.clearTimeout(Ge.current)},Qt=function(i){var c;i==null||i.preventDefault(),i==null||i.stopPropagation(),q()(le.text||String(f)||"",Je),Fe(!0),Qe(),Ge.current=window.setTimeout(function(){Fe(!1)},3e3),(c=le.onCopy)===null||c===void 0||c.call(le,i)};n.useEffect(function(){return Qe},[]);var Xt=n.useState(!1),Xe=(0,d.Z)(Xt,2),Ye=Xe[0],Yt=Xe[1],qt=n.useState(!1),qe=(0,d.Z)(qt,2),_e=qe[0],_t=qe[1],en=n.useState(!1),et=(0,d.Z)(en,2),tn=et[0],nn=et[1],rn=n.useState(!1),tt=(0,d.Z)(rn,2),nt=tt[0],an=tt[1],on=n.useState(!1),rt=(0,d.Z)(on,2),at=rt[0],ln=rt[1],sn=n.useState(!0),ot=(0,d.Z)(sn,2),cn=ot[0],un=ot[1],dn=Te(B,{expandable:!1}),it=(0,d.Z)(dn,2),re=it[0],S=it[1],W=re&&!tn,lt=S.rows,me=lt===void 0?1:lt,Oe=n.useMemo(function(){return!W||S.suffix!==void 0||S.onEllipsis||S.expandable||A||Le},[W,S,A,Le]);(0,de.Z)(function(){re&&!Oe&&(Yt((0,De.G)("webkitLineClamp")),_t((0,De.G)("textOverflow")))},[Oe,re]);var V=n.useMemo(function(){return Oe?!1:me===1?_e:Ye},[Oe,_e,Ye]),st=W&&(V?at:nt),fn=W&&me===1&&V,Ze=W&&me>1&&V,vn=function(i){var c;nn(!0),(c=S.onExpand)===null||c===void 0||c.call(S,i)},pn=n.useState(0),ct=(0,d.Z)(pn,2),yn=ct[0],mn=ct[1],gn=n.useState(0),ut=(0,d.Z)(gn,2),En=ut[0],Cn=ut[1],Sn=function(i,c){var I=i.offsetWidth,j;mn(I),Cn(parseInt((j=window.getComputedStyle)===null||j===void 0?void 0:j.call(window,c).fontSize,10)||0)},hn=function(i){var c;an(i),nt!==i&&((c=S.onEllipsis)===null||c===void 0||c.call(S,i))};n.useEffect(function(){var s=Y.current;if(re&&V&&s){var i=Ze?s.offsetHeight<s.scrollHeight:s.offsetWidth<s.scrollWidth;at!==i&&ln(i)}},[re,V,f,Ze,cn]),n.useEffect(function(){var s=Y.current;if(!(typeof IntersectionObserver=="undefined"||!s||!V||!W)){var i=new IntersectionObserver(function(){un(!!s.offsetParent)});return i.observe(s),function(){i.disconnect()}}},[V,W]);var ae={};S.tooltip===!0?ae={title:(a=y.text)!==null&&a!==void 0?a:f}:n.isValidElement(S.tooltip)?ae={title:S.tooltip}:(0,K.Z)(S.tooltip)==="object"?ae=(0,v.Z)({title:(t=y.text)!==null&&t!==void 0?t:f},S.tooltip):ae={title:S.tooltip};var we=n.useMemo(function(){var s=function(c){return["string","number"].includes((0,K.Z)(c))};if(!(!re||V)){if(s(y.text))return y.text;if(s(f))return f;if(s(D))return D;if(s(ae.title))return ae.title}},[re,V,D,ae.title,st]);if(oe)return n.createElement(Ct,{value:(o=y.text)!==null&&o!==void 0?o:typeof f=="string"?f:"",onSave:Ee,onCancel:ie,onEnd:y.onEnd,prefixCls:Z,className:P,style:T,direction:J,component:$,maxLength:y.maxLength,autoSize:y.autoSize,enterIcon:y.enterIcon});var bn=function(){var i=S.expandable,c=S.symbol;if(!i)return null;var I;return c?I=c:I=H.expand,n.createElement("a",{key:"expand",className:"".concat(Z,"-expand"),onClick:vn,"aria-label":H.expand},I)},xn=function(){if(A){var i=y.icon,c=y.tooltip,I=(0,ue.Z)(c)[0]||H.edit,j=typeof I=="string"?I:"";return E.includes("icon")?n.createElement(Pe.Z,{key:"edit",title:c===!1?"":I},n.createElement($e.Z,{ref:Q,className:"".concat(Z,"-edit"),onClick:ye,"aria-label":j},i||n.createElement(O.Z,{role:"button"}))):null}},Rn=function(){if(Le){var i=le.tooltips,c=le.icon,I=We(i),j=We(c),Ce=Re?he(I[1],H.copied):he(I[0],H.copy),wn=Re?H.copied:H.copy,Pn=typeof Ce=="string"?Ce:wn;return n.createElement(Pe.Z,{key:"copy",title:Ce},n.createElement($e.Z,{className:X()("".concat(Z,"-copy"),Re&&"".concat(Z,"-copy-success")),onClick:Qt,"aria-label":Pn},Re?he(j[1],n.createElement(p.Z,null),!0):he(j[0],n.createElement(m.Z,null),!0)))}},On=function(i){return[i&&bn(),xn(),Rn()]},Zn=function(i){return[i&&n.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Nt),S.suffix,On(i)]};return n.createElement(C.Z,{onResize:Sn,disabled:!W||V},function(s){var i;return n.createElement(Tt,{tooltipProps:ae,enabledEllipsis:W,isEllipsis:st},n.createElement(je,(0,v.Z)({className:X()((i={},(0,R.Z)(i,"".concat(Z,"-").concat(h),h),(0,R.Z)(i,"".concat(Z,"-disabled"),N),(0,R.Z)(i,"".concat(Z,"-ellipsis"),re),(0,R.Z)(i,"".concat(Z,"-single-line"),W&&me===1),(0,R.Z)(i,"".concat(Z,"-ellipsis-single-line"),fn),(0,R.Z)(i,"".concat(Z,"-ellipsis-multiple-line"),Ze),i),P),prefixCls:u,style:(0,v.Z)((0,v.Z)({},T),{WebkitLineClamp:Ze?me:void 0}),component:$,ref:(0,Ne.sQ)(s,Y,r),direction:J,onClick:E.includes("text")?ye:void 0,"aria-label":we==null?void 0:we.toString(),title:D},ve),n.createElement(wt,{enabledMeasure:W&&!V,text:f,rows:me,width:yn,fontSize:En,onEllipsis:hn},function(c,I){var j=c;c.length&&I&&we&&(j=n.createElement("span",{key:"show-content","aria-hidden":!0},j));var Ce=Lt(e,n.createElement(n.Fragment,null,j,Zn(I)));return Ce})))})}),be=Mt,$t=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},Dt=n.forwardRef(function(e,r){var a=e.ellipsis,t=e.rel,o=$t(e,["ellipsis","rel"]),u=(0,v.Z)((0,v.Z)({},o),{rel:t===void 0&&o.target==="_blank"?"noopener noreferrer":t});return delete u.navigate,n.createElement(be,(0,v.Z)({},u,{ref:r,ellipsis:!!a,component:"a"}))}),zt=Dt,kt=n.forwardRef(function(e,r){return n.createElement(be,(0,v.Z)({ref:r},e,{component:"div"}))}),At=kt,jt=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},Kt=function(r,a){var t=r.ellipsis,o=jt(r,["ellipsis"]),u=n.useMemo(function(){return t&&(0,K.Z)(t)==="object"?(0,fe.Z)(t,["expandable","rows"]):t},[t]);return n.createElement(be,(0,v.Z)({ref:a},o,{ellipsis:u,component:"span"}))},Ut=n.forwardRef(Kt),Bt=l(93355),Ht=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},Wt=(0,Bt.a)(1,2,3,4,5),Vt=n.forwardRef(function(e,r){var a=e.level,t=a===void 0?1:a,o=Ht(e,["level"]),u;return Wt.includes(t)?u="h".concat(t):u="h1",n.createElement(be,(0,v.Z)({ref:r},o,{component:u}))}),Ft=Vt,ge=je;ge.Text=Ut,ge.Link=zt,ge.Title=Ft,ge.Paragraph=At;var Gt=ge},20640:function(se,w,l){"use strict";var v=l(11742),n={"text/plain":"Text","text/html":"Url",default:"Text"},R="Copy to clipboard: #{key}, Enter";function K(p){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,m)}function d(p,m){var O,F,X,ce,q,C,ue=!1;m||(m={}),O=m.debug||!1;try{X=v(),ce=document.createRange(),q=document.getSelection(),C=document.createElement("span"),C.textContent=p,C.ariaHidden="true",C.style.all="unset",C.style.position="fixed",C.style.top=0,C.style.clip="rect(0, 0, 0, 0)",C.style.whiteSpace="pre",C.style.webkitUserSelect="text",C.style.MozUserSelect="text",C.style.msUserSelect="text",C.style.userSelect="text",C.addEventListener("copy",function(U){if(U.stopPropagation(),m.format)if(U.preventDefault(),typeof U.clipboardData=="undefined"){O&&console.warn("unable to use e.clipboardData"),O&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var fe=n[m.format]||n.default;window.clipboardData.setData(fe,p)}else U.clipboardData.clearData(),U.clipboardData.setData(m.format,p);m.onCopy&&(U.preventDefault(),m.onCopy(U.clipboardData))}),document.body.appendChild(C),ce.selectNodeContents(C),q.addRange(ce);var de=document.execCommand("copy");if(!de)throw new Error("copy command was unsuccessful");ue=!0}catch(U){O&&console.error("unable to copy using execCommand: ",U),O&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",p),m.onCopy&&m.onCopy(window.clipboardData),ue=!0}catch(fe){O&&console.error("unable to copy using clipboardData: ",fe),O&&console.error("falling back to prompt"),F=K("message"in m?m.message:R),window.prompt(F,p)}}finally{q&&(typeof q.removeRange=="function"?q.removeRange(ce):q.removeAllRanges()),C&&document.body.removeChild(C),X()}return ue}se.exports=d},79370:function(se,w,l){"use strict";l.d(w,{G:function(){return K}});var v=l(98924),n=function(p){if((0,v.Z)()&&window.document.documentElement){var m=Array.isArray(p)?p:[p],O=window.document.documentElement;return m.some(function(F){return F in O.style})}return!1},R=function(p,m){if(!n(p))return!1;var O=document.createElement("div"),F=O.style[p];return O.style[p]=m,O.style[p]!==F};function K(d,p){return!Array.isArray(d)&&p!==void 0?R(d,p):n(d)}},11742:function(se){se.exports=function(){var w=document.getSelection();if(!w.rangeCount)return function(){};for(var l=document.activeElement,v=[],n=0;n<w.rangeCount;n++)v.push(w.getRangeAt(n));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return w.removeAllRanges(),function(){w.type==="Caret"&&w.removeAllRanges(),w.rangeCount||v.forEach(function(R){w.addRange(R)}),l&&l.focus()}}}}]);
