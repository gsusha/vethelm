(this.webpackJsonpvethelm=this.webpackJsonpvethelm||[]).push([[20],{638:function(t,e,a){"use strict";a.r(e);var n=a(13),r=a(39),c=a(0),u=a(29),s=a(16),i=a.n(s),o=a(21),p=a(27),f=a.n(p),d=a(30),b=a(24),j="working",h=Object(d.b)("shifts/getList",Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(b.a.apiUrl,"/").concat(j));case 2:return t.abrupt("return",t.sent.data.data);case 3:case"end":return t.stop()}}),t)})))),l=(Object(d.b)("shifts/getDetail",function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(b.a.apiUrl,"/").concat(j,"/view?id=").concat(e));case 2:return t.abrupt("return",t.sent.data.data);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.b)("shift/createOrUpdate",function(){var t=Object(o.a)(i.a.mark((function t(e){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.data,!(n=e.id)){t.next=7;break}return t.next=4,f.a.post("".concat(b.a.apiUrl,"/").concat(j,"/update?id=").concat(n),a);case 4:case 9:return t.abrupt("return",t.sent.data.data);case 7:return t.next=9,f.a.post("".concat(b.a.apiUrl,"/").concat(j,"/create"),a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(d.b)("shift/delete",function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(b.a.apiUrl,"/").concat(j,"/delete?id=").concat(e));case 2:return t.abrupt("return",t.sent.data.data);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a(66)),O=a(202),x=a(418),v=a(390),w=a(1);var m=function(t,e){return Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.d,{data:e,height:660,locale:"ru-RU",children:[Object(w.jsx)(v.q,{currentDate:t}),Object(w.jsx)(x.c,{startDayHour:8,endDayHour:22}),Object(w.jsx)(x.a,{})]})})};e.default=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.pages.shifts})),a=Object(c.useState)(!0),s=Object(n.a)(a,2),i=s[0],o=s[1];Object(c.useEffect)((function(){o(!0),t(h()).then((function(){return o(!1)}))}),[t]);var p=!i&&e.map((function(t){return{id:t.id,title:t.id,startDate:new Date(t.start_time),endDate:new Date(t.end_time)}}));return Object(w.jsx)(r.a,{title:"\u0421\u043c\u0435\u043d\u044b",children:i?Object(w.jsx)(l.a,{}):m(new Date,p)})}}}]);
//# sourceMappingURL=20.9b6d372e.chunk.js.map