(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t){e.exports=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a))}},12:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=a(4),i=a(3),s=a(5),m=a(7),u=function(e){var t=e.generator,a=e.state,n=e.key,o=e.handleChange,c=e.copy,l=e.generate,i=e.validate;return r.a.createElement("div",{className:"col"},r.a.createElement("form",{className:"form",key:n},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},t.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Gerar/Validar",value:a.value,name:"value",onChange:o}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn-sm btn-info",type:"button",disabled:!a.value,onClick:function(){return c(a.value)}},r.a.createElement("i",{className:"fa fa-copy"}))))),a.options&&Object(m.is)("array",a.options)&&r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"options",id:"options",className:"form-control",onChange:o},a.options.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),t.mask&&r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",onChange:o,id:"options",name:"options"}),"M\xe1scara"))),r.a.createElement("div",{className:"card-footer"},t.generate&&r.a.createElement("button",{type:"button",className:"btn btn-md btn-primary",onClick:l},"Gerar"),t.validate&&r.a.createElement("button",{type:"button",className:"btn btn-md btn-secondary",onClick:i},"Validar")))))},d=a(11),p=a.n(d);var g=function(e){var t=e.key,a=e.generator,r=e.options,o=Object(n.useState)({value:"",options:r||""}),c=Object(l.a)(o,2),m=c[0],d=c[1];return u({key:t,generator:a,validate:function(){},state:m,generate:function(e){return d(function(e){return Object(s.a)({},e,{value:a.generate(e.options)})})},handleChange:function(e){var t=e.target,n="checkbox"===t.type,r=n?t.checked:t.value,o=t.name;d(function(e){return Object(s.a)({},e,Object(i.a)({},o,r))}),n&&a.mask&&d(function(e){return Object(s.a)({},e,{value:a.generate.formatter(e.value)})})},copy:function(e){return p()(e)}})},v=function(e){var t=e.generators;return r.a.createElement("div",{className:"row"},t.map(function(e,t){return g({generator:e,options:e.options&&e.options(),key:t})}))};var f=function(e){var t=e.generators,a=Object(n.useState)(t),r=Object(l.a)(a,1)[0];return v({generators:r})},b=function(e){var t=e.generatorsList;return r.a.createElement("div",{className:"container"},r.a.createElement(f,{generators:t}))},y=a(1),E=[{title:"Gerador de CPF",generate:y.generator.cpf,mask:!0},{title:"Gerador de CNPJ",generate:y.generator.cnpj,mask:!0},{title:"Gerador de Cart\xe3o de Cr\xe9dito",generate:y.generator.creditCard,options:function(){return Object.keys(y.generator.creditCard.schemas)}}];var h=function(){return b({generatorsList:E})};a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.a6a36b95.chunk.js.map