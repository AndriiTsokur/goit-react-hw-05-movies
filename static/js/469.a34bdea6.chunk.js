"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{469:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),c=n(439),a=n(757),s=n.n(a),i=n(791),o=n(689),u=n(87),h=n(673),l=n(86),f="HomePage_movies_item__iojSu",d="HomePage_movie_year__DDlY-",p=n(184),m=function(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],m=(0,i.useState)(null),v=(0,c.Z)(m,2),x=v[0],g=v[1],j=(0,i.useState)(!1),w=(0,c.Z)(j,2),Z=w[0],k=w[1],y=(0,o.TH)();return(0,i.useEffect)((function(){if(0===n.length){var e=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,l.ZP)(t);case 4:n=e.sent,r=n.results,a(r),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),g(e.t0.message),console.log(x);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}();e("trending")}})),(0,p.jsx)("main",{children:(0,p.jsx)("section",{children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("h1",{children:"Trending Today"}),null!==x&&(0,p.jsxs)("p",{children:["Something wrong. An error occured: ",x]}),Z&&(0,p.jsx)(h.Z,{}),n.length>0&&(0,p.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title,r=e.release_date;return(0,p.jsx)("li",{className:f,children:(0,p.jsxs)(u.rU,{to:"/movies/".concat(t),state:{from:y},children:[n," ",(0,p.jsxs)("span",{className:d,children:["(",r.slice(0,4),")"]})]})},t)}))})]})})})}},86:function(e,t,n){n.d(t,{_1:function(){return o},yf:function(){return u}});var r=n(861),c=n(757),a=n.n(c),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzY2MGMwMDU0YjI4ZjIwYzM1YWU0Y2Q2ZTJiY2QzZCIsInN1YiI6IjY0NzhiMzc4ZTMyM2YzMDEyNzUwNjViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XxeUNkXEoMs695LCPek5urTS4foOswzKTDFZe1nIx0E"}},i="https://api.themoviedb.org/3",o="https://image.tmdb.org/t/p/w500",u="https://image.tmdb.org/t/p/w185",h={trending:"".concat(i,"/trending/movie/day?language=en-US"),search:"".concat(i,"/search/movie"),other:"".concat(i,"/movie/")},l=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="",e.t0=t,e.next="trending"===e.t0?4:"details"===e.t0?8:"search"===e.t0?12:16;break;case 4:return e.next=6,fetch(h[t],s);case 6:case 10:case 14:case 18:return r=e.sent,e.abrupt("break",20);case 8:return e.next=10,fetch(h.other+n,s);case 12:return e.next=14,fetch("".concat(h[t],"?query=").concat(n),s);case 16:return e.next=18,fetch(h.other+n+"/".concat(t),s);case 20:if(r.ok){e.next=22;break}throw new Error(r.status);case 22:return e.abrupt("return",r.json());case 23:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.ZP=l},861:function(e,t,n){function r(e,t,n,r,c,a,s){try{var i=e[a](s),o=i.value}catch(u){return void n(u)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var s=e.apply(t,n);function i(e){r(s,c,a,i,o,"next",e)}function o(e){r(s,c,a,i,o,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=469.a34bdea6.chunk.js.map