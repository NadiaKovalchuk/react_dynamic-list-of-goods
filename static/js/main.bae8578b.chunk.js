(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,o,n){"use strict";n.r(o);var e=n(3),c=n.n(e),r=n(4),i=n(1),s=(n(9),n(0)),a=Object(i.memo)((function(t){var o=t.goods;return Object(s.jsx)("ul",{children:o.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var u=function(){var t=Object(i.useState)([]),o=Object(r.a)(t,2),n=o[0],e=o[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){d().then(e).catch((function(t){console.error("Error while fetching all goods:",t)}))},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){d().then((function(t){return t.sort((function(t,o){return t.name.localeCompare(o.name)})).slice(0,5)})).then(e).catch((function(t){console.error("Error while fetching 5 first goods:",t)}))},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){d().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(e).catch((function(t){console.error("Error while fetching red goods:",t)}))},children:"Load red goods"}),Object(s.jsx)(a,{goods:n})]})};c.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))},9:function(t,o,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.bae8578b.chunk.js.map