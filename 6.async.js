(self.webpackChunk=self.webpackChunk||[]).push([[334],{558:function(K,A,s){"use strict";s.r(A),s.d(A,{default:function(){return Se}});var F={};s.r(F),s.d(F,{addUser:function(){return ne},deleteUser:function(){return ue},getUserDetail:function(){return ae},modifyUser:function(){return te},queryUserList:function(){return se}});var w=s(66933),g=s.n(w),b=s(93450),c=s.n(b),ee=s(29883),f=s.n(ee),re=s(94043),l=s.n(re),S=s(18036);function se(i,e){return B.apply(this,arguments)}function B(){return B=f()(l().mark(function i(e,a){return l().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,S.request)("/api/v1/queryUserList",c()({method:"GET",params:c()({},e)},a||{})));case 1:case"end":return u.stop()}},i)})),B.apply(this,arguments)}function ne(i,e){return $.apply(this,arguments)}function $(){return $=f()(l().mark(function i(e,a){return l().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,S.request)("/api/v1/user",c()({method:"POST",headers:{"Content-Type":"application/json"},data:e},a||{})));case 1:case"end":return u.stop()}},i)})),$.apply(this,arguments)}function ae(i,e){return R.apply(this,arguments)}function R(){return R=f()(l().mark(function i(e,a){var t;return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.userId,r.abrupt("return",(0,S.request)("/api/v1/user/".concat(t),c()({method:"GET",params:c()({},e)},a||{})));case 2:case"end":return r.stop()}},i)})),R.apply(this,arguments)}function te(i,e,a){return L.apply(this,arguments)}function L(){return L=f()(l().mark(function i(e,a,t){var u;return l().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return u=e.userId,d.abrupt("return",(0,S.request)("/api/v1/user/".concat(u),c()({method:"PUT",headers:{"Content-Type":"application/json"},params:c()({},e),data:a},t||{})));case 2:case"end":return d.stop()}},i)})),L.apply(this,arguments)}function ue(i,e){return D.apply(this,arguments)}function D(){return D=f()(l().mark(function i(e,a){var t;return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.userId,r.abrupt("return",(0,S.request)("/api/v1/user/".concat(t),c()({method:"DELETE",params:c()({},e)},a||{})));case 2:case"end":return r.stop()}},i)})),D.apply(this,arguments)}var le={UserController:F},W=s(27649),Y=s(48287),ie=s(63240),y=s(48086),de=s(27049),P=s(71577),oe=s(25084),U=s(67294),H=s(50146),n=s(85893),ce=function(e){var a=e.modalVisible,t=e.onCancel;return(0,n.jsx)(H.Z,{destroyOnClose:!0,title:"\u65B0\u5EFA",width:420,visible:a,onCancel:function(){return t()},footer:null,children:e.children})},je=ce,z=s(11296),me=s(5966),he=s(90672),V=s(64317),fe=s(86615),ve=s(22452),pe=function(e){return(0,n.jsxs)(z.L,{stepsProps:{size:"small"},stepsFormRender:function(t,u){return(0,n.jsx)(H.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:"\u89C4\u5219\u914D\u7F6E",visible:e.updateModalVisible,footer:u,onCancel:function(){return e.onCancel()},children:t})},onFinish:e.onSubmit,children:[(0,n.jsxs)(z.L.StepForm,{initialValues:{name:e.values.name,nickName:e.values.nickName},title:"\u57FA\u672C\u4FE1\u606F",children:[(0,n.jsx)(me.Z,{width:"md",name:"name",label:"\u89C4\u5219\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"}]}),(0,n.jsx)(he.Z,{name:"desc",width:"md",label:"\u89C4\u5219\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01",min:5}]})]}),(0,n.jsxs)(z.L.StepForm,{initialValues:{target:"0",template:"0"},title:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027",children:[(0,n.jsx)(V.Z,{width:"md",name:"target",label:"\u76D1\u63A7\u5BF9\u8C61",valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,n.jsx)(V.Z,{width:"md",name:"template",label:"\u89C4\u5219\u6A21\u677F",valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,n.jsx)(fe.Z.Group,{name:"type",width:"md",label:"\u89C4\u5219\u7C7B\u578B",options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,n.jsxs)(z.L.StepForm,{initialValues:{type:"1",frequency:"month"},title:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F",children:[(0,n.jsx)(ve.Z,{name:"time",label:"\u5F00\u59CB\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"}]}),(0,n.jsx)(V.Z,{name:"frequency",label:"\u76D1\u63A7\u5BF9\u8C61",width:"xs",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},ye=pe,T=le.UserController,ge=T.addUser,be=T.queryUserList,Ce=T.deleteUser,Fe=T.modifyUser,we=function(){var i=f()(l().mark(function e(a){var t;return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=y.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),r.prev=1,r.next=4,ge(c()({},a));case 4:return t(),y.ZP.success("\u6DFB\u52A0\u6210\u529F"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),t(),y.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},e,null,[[1,9]])}));return function(a){return i.apply(this,arguments)}}(),Ue=function(){var i=f()(l().mark(function e(a){var t;return l().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=y.ZP.loading("\u6B63\u5728\u914D\u7F6E"),r.prev=1,r.next=4,Fe({userId:a.id||""},{name:a.name||"",nickName:a.nickName||"",email:a.email||""});case 4:return t(),y.ZP.success("\u914D\u7F6E\u6210\u529F"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),t(),y.ZP.error("\u914D\u7F6E\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},e,null,[[1,9]])}));return function(a){return i.apply(this,arguments)}}(),ke=function(){var i=f()(l().mark(function e(a){var t,u;return l().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(t=y.ZP.loading("\u6B63\u5728\u5220\u9664"),a){d.next=3;break}return d.abrupt("return",!0);case 3:return d.prev=3,d.next=6,Ce({userId:((u=a.find(function(I){return I.id}))===null||u===void 0?void 0:u.id)||""});case 6:return t(),y.ZP.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"),d.abrupt("return",!0);case 11:return d.prev=11,d.t0=d.catch(3),t(),y.ZP.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),d.abrupt("return",!1);case 16:case"end":return d.stop()}},e,null,[[3,11]])}));return function(a){return i.apply(this,arguments)}}(),xe=function(){var e=(0,U.useState)(!1),a=g()(e,2),t=a[0],u=a[1],r=(0,U.useState)(!1),d=g()(r,2),I=d[0],M=d[1],Ee=(0,U.useState)({}),J=g()(Ee,2),O=J[0],N=J[1],k=(0,U.useRef)(),ze=(0,U.useState)(),Q=g()(ze,2),v=Q[0],Te=Q[1],Ze=(0,U.useState)([]),X=g()(Ze,2),E=X[0],q=X[1],G=[{title:"\u540D\u79F0",dataIndex:"name",tip:"\u540D\u79F0\u662F\u552F\u4E00\u7684 key",formItemProps:{rules:[{required:!0,message:"\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u6635\u79F0",dataIndex:"nickName",valueType:"text"},{title:"\u6027\u522B",dataIndex:"gender",hideInForm:!0,valueEnum:{0:{text:"\u7537",status:"MALE"},1:{text:"\u5973",status:"FEMALE"}}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(j,o){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{onClick:function(){M(!0),N(o)},children:"\u914D\u7F6E"}),(0,n.jsx)(de.Z,{type:"vertical"}),(0,n.jsx)("a",{href:"",children:"\u8BA2\u9605\u8B66\u62A5"})]})}}];return(0,n.jsxs)(W._z,{header:{title:"CRUD \u793A\u4F8B"},children:[(0,n.jsx)(Y.Z,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:k,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,n.jsx)(P.Z,{type:"primary",onClick:function(){return u(!0)},children:"\u65B0\u5EFA"},"1")]},request:function(){var m=f()(l().mark(function j(o,p,C){var h,Z,_;return l().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,be(c()(c()({},o),{},{sorter:p,filter:C}));case 2:return h=x.sent,Z=h.data,_=h.success,x.abrupt("return",{data:(Z==null?void 0:Z.list)||[],success:_});case 6:case"end":return x.stop()}},j)}));return function(j,o,p){return m.apply(this,arguments)}}(),columns:G,rowSelection:{onChange:function(j,o){return q(o)}}}),(E==null?void 0:E.length)>0&&(0,n.jsxs)(W.Sc,{extra:(0,n.jsxs)("div",{children:["\u5DF2\u9009\u62E9"," ",(0,n.jsx)("a",{style:{fontWeight:600},children:E.length})," ","\u9879\xA0\xA0"]}),children:[(0,n.jsx)(P.Z,{onClick:f()(l().mark(function m(){var j,o;return l().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,ke(E);case 2:q([]),(j=k.current)===null||j===void 0||(o=j.reloadAndRest)===null||o===void 0||o.call(j);case 4:case"end":return C.stop()}},m)})),children:"\u6279\u91CF\u5220\u9664"}),(0,n.jsx)(P.Z,{type:"primary",children:"\u6279\u91CF\u5BA1\u6279"})]}),(0,n.jsx)(je,{onCancel:function(){return u(!1)},modalVisible:t,children:(0,n.jsx)(Y.Z,{onSubmit:function(){var m=f()(l().mark(function j(o){var p;return l().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,we(o);case 2:p=h.sent,p&&(u(!1),k.current&&k.current.reload());case 4:case"end":return h.stop()}},j)}));return function(j){return m.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:G})}),O&&Object.keys(O).length?(0,n.jsx)(ye,{onSubmit:function(){var m=f()(l().mark(function j(o){var p;return l().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Ue(o);case 2:p=h.sent,p&&(M(!1),N({}),k.current&&k.current.reload());case 4:case"end":return h.stop()}},j)}));return function(j){return m.apply(this,arguments)}}(),onCancel:function(){M(!1),N({})},updateModalVisible:I,values:O}):null,(0,n.jsx)(oe.Z,{width:600,visible:!!v,onClose:function(){Te(void 0)},closable:!1,children:(v==null?void 0:v.name)&&(0,n.jsx)(ie.vY,{column:2,title:v==null?void 0:v.name,request:f()(l().mark(function m(){return l().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",{data:v||{}});case 1:case"end":return o.stop()}},m)})),params:{id:v==null?void 0:v.name},columns:G})})]})},Se=xe},46700:function(K,A,s){var F={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":37930,"./se.js":37930,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":95606,"./ss.js":95606,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function w(b){var c=g(b);return s(c)}function g(b){if(!s.o(F,b)){var c=new Error("Cannot find module '"+b+"'");throw c.code="MODULE_NOT_FOUND",c}return F[b]}w.keys=function(){return Object.keys(F)},w.resolve=g,K.exports=w,w.id=46700}}]);
