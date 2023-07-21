"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[576],{449:function(t,e,r){r.d(e,{PY:function(){return o},Y5:function(){return i},mv:function(){return f},r7:function(){return l},uV:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(243),s="865220edb76d328a218413f2d052d337";c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:s,language:"en-US"},c.Z.defaults.headers="Access-Control-Allow-Origin";var o=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/trending/movie/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:t.prev=8,t.t0=t.catch(0),window.alert("fetch trend");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),window.alert(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(e,"/reviews"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),window.alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"/credits"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 8:t.prev=8,t.t0=t.catch(0),window.alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/search/movie?query=".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:t.prev=8,t.t0=t.catch(0),window.alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},639:function(t,e,r){r.d(e,{a:function(){return c}});var n=r(691),a="Loader_loader__+lRPl",u=r(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},576:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),o=r(689),i=r(87),l=r(639),p=r(449),f={input:"SearchBar_input__bIy50",button:"SearchBar_button__T7RTc"},v=r(184),d=function(t){var e=t.onSubmit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{className:f.form,onSubmit:function(t){t.preventDefault(),""!==u.trim()&&(e(u),c(""))},children:[(0,v.jsx)("button",{className:f.button,type:"submit",children:(0,v.jsx)("span",{className:f.label,children:"Search"})}),(0,v.jsx)("input",{className:f.input,value:u,onChange:function(t){c(t.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Please enter movie's name"})]})})},h="MoviesList_list__0Owr9",m=function(t){var e=t.list,r=(0,o.TH)();return(0,v.jsx)("ul",{className:h,children:e&&e.map((function(t){var e=t.id,n=t.title;return(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"".concat(e),state:{from:r},children:n})},e)}))})},w=function(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),r=e[0],u=e[1],f=(0,s.useState)(!1),h=(0,a.Z)(f,2),w=h[0],x=h[1],b=(0,o.UO)().movieId,_=(0,i.lr)(),g=(0,a.Z)(_,1)[0],Z=(0,o.s0)(),k=(0,s.useCallback)(function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,p.mv)(e);case 4:r=t.sent,u(r),g.set("query",e),Z("/movies?".concat(g.toString())),x(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("error",t.t0),u([]);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),[Z,g]);return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,(0,p.mv)(b);case 5:e=t.sent,u(e),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.log("error",t.t0),u([]);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[b]),(0,s.useEffect)((function(){var t=g.get("query");t&&k(t)}),[g,k]),w?(0,v.jsx)(l.a,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d,{onSubmit:k}),(0,v.jsx)(m,{list:r})]})}}}]);
//# sourceMappingURL=576.7fd8c9aa.chunk.js.map