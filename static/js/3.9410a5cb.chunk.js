(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{110:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(37);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},111:function(t,e,n){t.exports={Form:"Form_Form__Astck",buttonSubmit:"Form_buttonSubmit__2VAnr",Label:"Form_Label__3vjez",Input:"Form_Input__1pa0M"}},112:function(t,e,n){t.exports={Item:"ContactsList_Item__Z9ZDJ",Button:"ContactsList_Button__2URtc"}},113:function(t,e,n){t.exports={Phonebook:"Phonebook_Phonebook__-BmS1"}},116:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var r=n(1),c=n(0),a=function(t){var e=t.title,n=t.children;return Object(r.jsxs)("section",{children:[e&&Object(r.jsx)("h2",{children:e}),n]})},o=n(110),i=n(9),u=n(7),s=n(111),b=n.n(s);var l=Object(i.b)((function(t){return{items:t.contacts.items}}),(function(t){return{addContact:function(e){return t(Object(u.a)(e))}}}))((function(t){var e=t.addContact,n=t.items,a=Object(c.useState)(""),i=Object(o.a)(a,2),u=i[0],s=i[1],l=Object(c.useState)(""),j=Object(o.a)(l,2),m=j[0],f=j[1],d=function(t){var e=t.currentTarget,n=e.name,r=e.value;"name"!==n?f(r):s(r)},h=function(t){var r=t.name,c=t.number;if(""!==r&&""!==c){var a=r.toLowerCase(),o=n.find((function(t){return t.name.toLowerCase()===a}));o?alert("".concat(o.name," is already in contacts.")):(e(t),s(""),f(""))}else alert("Please fill in the form!")};return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h({name:u.trim(),number:m.trim()})},className:b.a.Form,children:[Object(r.jsxs)("label",{className:b.a.Label,children:["Name",Object(r.jsx)("input",{type:"text",name:"name",value:u,onChange:d,className:b.a.Input})]}),Object(r.jsxs)("label",{className:b.a.Label,children:["Phone number",Object(r.jsx)("input",{type:"tel",name:"number",value:m,onChange:d,className:b.a.Input})]}),Object(r.jsx)("button",{type:"submit",className:b.a.buttonSubmit,children:"Add Contact"})]})})),j=n(47),m=n(28),f=function(t){return t.contacts.items},d=function(t){return t.contacts.filter},h=function(t){return t.contacts.isLoading},O=function(t){return t.contacts.error},v=Object(m.a)([f,d],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.trim())}))}));function p(){var t=Object(i.d)(d),e=Object(i.c)();return Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:t,onChange:function(t){return e(Object(j.a)(t.target.value.toLowerCase()))}})})}var x=n(112),_=n.n(x);var y=function(){var t=Object(i.d)(f),e=Object(i.d)(h),n=Object(i.d)(O),a=Object(i.d)(v),o=Object(i.c)();Object(c.useEffect)((function(){o(u.c())}),[o]);var s=function(t){return o(u.b(t.target.id))};if(n&&alert(n),e)return Object(r.jsx)("div",{children:"\u0421\u0435\u043a\u0443\u043d\u0434\u0443..."});if(t.length<=0)return Object(r.jsx)("p",{children:"Contact list is empty"});var b=function(){if(0!==t.length)return a.length>0&&a}();return Object(r.jsxs)("div",{children:[t.length>0&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Find contact by name"}),Object(r.jsx)(p,{})]}),Object(r.jsx)("ul",{children:b?function(t){return t.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(r.jsxs)("li",{className:_.a.Item,children:[n,": ",c,Object(r.jsx)("button",{id:e,onClick:s,className:_.a.Button,children:"Delete"})]},e)}))}(b):Object(r.jsx)("p",{children:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e!"})})]})},C=n(113),g=n.n(C);var k=function(){return Object(r.jsx)("div",{className:g.a.Phonebook,children:Object(r.jsxs)(a,{title:"Phonebook",children:[Object(r.jsx)(l,{}),Object(r.jsx)(a,{title:"Contacts",children:Object(r.jsx)(y,{})})]})})};function w(){return Object(r.jsx)(k,{})}}}]);
//# sourceMappingURL=3.9410a5cb.chunk.js.map