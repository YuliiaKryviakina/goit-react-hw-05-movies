"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[143],{449:function(t,e,r){r.d(e,{PY:function(){return i},Y5:function(){return o},mv:function(){return d},r7:function(){return v},uV:function(){return l}});var n=r(861),a=r(757),u=r.n(a),c=r(243),s="865220edb76d328a218413f2d052d337";c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:s,language:"en-US"},c.Z.defaults.headers="Access-Control-Allow-Origin";var i=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/trending/movie/day");case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:t.prev=8,t.t0=t.catch(0),window.alert("fetch trend");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),window.alert(t.t0),t.abrupt("return",[]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(e,"/reviews"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),window.alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(e,"/credits"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 8:t.prev=8,t.t0=t.catch(0),window.alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/search/movie?query=".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:t.prev=8,t.t0=t.catch(0),window.alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},113:function(t,e,r){r.d(e,{Z:function(){return u}});var n={},a=r(184),u=function(t){var e=t.title,r=t.text,u=t.author;return r?(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:n.title,children:e}),u&&(0,a.jsxs)("h3",{children:["Author: ",u]}),(0,a.jsx)("div",{className:n.text,children:r})]}):(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:e}),(0,a.jsx)("div",{children:"We don't have any reviews for this movie."})]})}},639:function(t,e,r){r.d(e,{a:function(){return c}});var n=r(691),a="Loader_loader__+lRPl",u=r(184),c=function(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(n.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},143:function(t,e,r){r.r(e);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(449),i=r(113),o=r(639),v=r(791),l=r(689),d=r(184);e.default=function(){var t=(0,l.UO)().moviesId,e=(0,v.useState)(),r=(0,a.Z)(e,2),u=r[0],f=r[1],p=(0,v.useState)(!1),h=(0,a.Z)(p,2),w=h[0],x=h[1];return(0,v.useEffect)((function(){x(!0);var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.r7)(t);case 3:return r=e.sent,f(r.results[0]),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),window.alert(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),w?(0,d.jsx)(o.a,{}):u?(0,d.jsx)("div",{children:(0,d.jsx)(i.Z,{title:"Review",text:u.content,author:u.author})}):(0,d.jsx)("div",{children:(0,d.jsx)(i.Z,{title:"Review",text:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=143.740d20a4.chunk.js.map