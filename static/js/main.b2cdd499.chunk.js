(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(13),s=n.n(c),o=(n(103),n(198)),i=n(84),u=n.n(i),d=n(85),S=n.n(d),l=n(10),C=function(e){var t=S()(e.created_at).locale("ru").format("D.MM.YYYY");return Object(l.jsx)("div",{className:u.a.cardsContainer,children:Object(l.jsxs)(o.a,{title:e.name,style:{width:300},children:[Object(l.jsx)("div",{children:e.tags.map((function(e){return Object(l.jsx)("span",{style:{marginLeft:"5px",backgroundColor:"gray"},children:e.name})}))}),Object(l.jsxs)("p",{style:{backgroundColor:"".concat(e.status.color)},children:[" ",e.status.name," "]}),Object(l.jsx)("p",{children:e.responsibleUser}),Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:e.price})]})})},E=n(31),p=n(61),_=n.n(p),b=n(95);!function(e){e.FETCH_USERS="FETCH_USERS",e.FETCH_LEADS_SUCCESS="FETCH_LEADS_SUCCESS",e.FETCH_STATUSES_SUCCESS="FETCH_STATUSES_SUCCESS",e.FETCH_CONTACTS_SUCCESS="FETCH_CONTACTS_SUCCESS",e.FETCH_USERS_ERROR="FETCH_USERS_ERROR"}(r||(r={}));var j=n(96),O=n.n(j).a.create({baseURL:"https://rocketsales.herokuapp.com/",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}}),T=function(){return O.get("leads")},f=function(){return O.get("contacts")},U=function(e){return O.get("statuses/".concat(e))};var m=function(){var e=Object(E.b)();Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(_.a.mark((function e(t){var n,a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:r.FETCH_USERS}),e.next=4,T();case 4:return n=e.sent,e.next=7,U(4904053);case 7:return a=e.sent,e.next=10,f();case 10:c=e.sent,t({type:r.FETCH_LEADS_SUCCESS,payload:n.data._embedded.leads}),t({type:r.FETCH_STATUSES_SUCCESS,payload:a.data._embedded.statuses}),t({type:r.FETCH_CONTACTS_SUCCESS,payload:c.data._embedded.contacts}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),t({type:r.FETCH_USERS_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(E.c)((function(e){return e.leads.leads})),n=Object(E.c)((function(e){return e.leads.statuses})),c=Object(E.c)((function(e){return e.leads.contacts})),s=function(e){var t=n.find((function(t){return t.id===e}));return t||{name:"string",color:"string"}},o=function(e){var t=c.find((function(t){return t.responsible_user_id===e}));return t||{id:999,name:"string"}};return Object(l.jsx)("div",{className:"App",children:t.map((function(e){return Object(l.jsx)(C,{tags:e._embedded.tags,name:e.name,status:s(e.status_id),responsibleUser:o(e.responsible_user_id).name,created_at:e.created_at,price:e.price})}))})},h=n(38),y=n(25),g={leads:[],statuses:[],contacts:[],loading:!1,error:null},v=Object(h.b)({leads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.FETCH_USERS:return Object(y.a)(Object(y.a)({},e),{},{loading:!0,error:null});case r.FETCH_LEADS_SUCCESS:return Object(y.a)(Object(y.a)({},e),{},{error:null,leads:t.payload});case r.FETCH_STATUSES_SUCCESS:return Object(y.a)(Object(y.a)({},e),{},{error:null,statuses:t.payload});case r.FETCH_CONTACTS_SUCCESS:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,contacts:t.payload});default:return e}}}),x=n(97),F=Object(h.c)(v,Object(h.a)(x.a));window.store=F,s.a.render(Object(l.jsx)(E.a,{store:F,children:Object(l.jsx)(m,{})}),document.getElementById("root"))},84:function(e,t,n){e.exports={cardsContainer:"Cards_cardsContainer__3iAqK"}}},[[195,1,2]]]);
//# sourceMappingURL=main.b2cdd499.chunk.js.map