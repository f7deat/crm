"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[842],{74436:function(K,S,e){e.r(S),e.d(S,{default:function(){return Q}});var P=e(66933),p=e.n(P),E=e(52212),v=e(63258),Z=e(73171),s=e(24616),i=e(10886),M=e(66836),x=e(18036),j=e(48086),C=e(55241),R=e(14277),u=e(71577),b=e(27049),g=e(24565),a=e(30381),l=e.n(a),o=e(62435),n=e(1413),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"},B=W,V=e(27029),I=function(d,y){return o.createElement(V.Z,(0,n.Z)((0,n.Z)({},d),{},{ref:y,icon:B}))};I.displayName="ExportOutlined";var N=o.forwardRef(I),G=e(68588),Y=e(273),z=e(20294),t=e(86074),H=G.Z.RangePicker,F=function(d){var y=(0,o.useState)(),_=p()(y,2),m=_[0],L=_[1],A=function(T){L(T)},O=function(){if(!m)return j.ZP.warning("Please select date!");console.log(m)};return(0,t.jsxs)(Y.Z,{visible:d.visible,title:"Tool",onClose:function(){return d.setVisible(!1)},children:[(0,t.jsx)("div",{className:"mb-2",children:(0,t.jsx)(z.Z.Text,{strong:!0,children:"Date"})}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(H,{onChange:A,className:"w-full"})}),(0,t.jsx)(u.Z,{type:"primary",icon:(0,t.jsx)(N,{}),onClick:O,children:"Export"})]})},$=F,J=function(){var d=(0,o.useRef)(),y=(0,o.useState)([]),_=p()(y,2),m=_[0],L=_[1],A=(0,o.useState)(!1),O=p()(A,2),D=O[0],T=O[1],k=function(c){return(0,t.jsx)("div",{children:c==null?void 0:c.informations.map(function(r,f){return(0,t.jsxs)("div",{children:[r.name,": ",r.value]},f)})})},X=function(c){(0,E.GK)(c).then(function(r){if(r.succeeded){var f;(f=d.current)===null||f===void 0||f.reload(),j.ZP.success("succeeded!")}else j.ZP.error(r.message)})},w=[{title:"Name",render:function(c,r){return(0,t.jsx)(x.Link,{to:"/contact/center/".concat(r.id),children:(0,t.jsx)("a",{children:r.name})})},tip:"Include fist name and last name"},{title:"Email",dataIndex:"email",valueType:"text"},{title:"Phone number",dataIndex:"phoneNumber"},{title:"Address",dataIndex:"address"},{title:"Created Date",render:function(c,r){return l()(r.createdDate).format("DD/MM/YYYY hh:mm:ss")},hideInSearch:!0},{title:"Task",dataIndex:"option",valueType:"option",render:function(c,r){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.Z,{content:(0,t.jsx)(R.Z,{}),children:(0,t.jsx)(u.Z,{icon:(0,t.jsx)(v.Z,{}),type:"primary"})}),(0,t.jsx)(b.Z,{type:"vertical"}),(0,t.jsx)(g.Z,{title:"Are you sure delete this?",onConfirm:function(){return X(r.id)},children:(0,t.jsx)(u.Z,{icon:(0,t.jsx)(Z.Z,{}),danger:!0,type:"primary"})})]})}}];return(0,t.jsxs)(i._z,{header:{title:"Contact"},extra:(0,t.jsx)(u.Z,{icon:(0,t.jsx)(s.Z,{}),onClick:function(){return T(!0)}}),children:[(0,t.jsx)(M.Z,{headerTitle:"Lead",actionRef:d,rowKey:"id",search:{layout:"vertical"},request:E.Wt,columns:w,rowSelection:{onChange:function(c,r){return L(r)}}}),(m==null?void 0:m.length)>0&&(0,t.jsx)(i.Sc,{extra:(0,t.jsxs)("div",{children:["Selected"," ",(0,t.jsx)("a",{style:{fontWeight:600},children:m.length})," ","row\xA0\xA0"]}),children:(0,t.jsx)(u.Z,{type:"primary",danger:!0,children:"Delete"})}),(0,t.jsx)($,{visible:D,setVisible:T})]})},Q=J},52212:function(K,S,e){e.d(S,{GK:function(){return j},Tk:function(){return b},Wt:function(){return M},ts:function(){return R}});var P=e(93450),p=e.n(P),E=e(29883),v=e.n(E),Z=e(94043),s=e.n(Z),i=e(18036);function M(a){return x.apply(this,arguments)}function x(){return x=v()(s().mark(function a(l){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("contact/list",{method:"GET",params:p()({},l)}));case 1:case"end":return n.stop()}},a)})),x.apply(this,arguments)}function j(a){return C.apply(this,arguments)}function C(){return C=v()(s().mark(function a(l){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("contact/delete/".concat(l),{method:"POST"}));case 1:case"end":return n.stop()}},a)})),C.apply(this,arguments)}function R(a){return u.apply(this,arguments)}function u(){return u=v()(s().mark(function a(l){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("contact/".concat(l)));case 1:case"end":return n.stop()}},a)})),u.apply(this,arguments)}function b(a){return g.apply(this,arguments)}function g(){return g=v()(s().mark(function a(l){return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("contact/update",{method:"POST",data:l}));case 1:case"end":return n.stop()}},a)})),g.apply(this,arguments)}}}]);
