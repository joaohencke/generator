(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),s=a(4),l=a(5),i=a(8),m=a(6),d=a(7),u=(a(23),a(11),a(25),a(26),a(1)),p=a(17),b=a(3),h=a(2),v=a.n(h),g=function(e){var t=e.className,a=(e.cssModule,Object(b.a)(e,["className","cssModule"])),n=v()(t,"card-header");return r.a.createElement("div",Object.assign({},a,{className:n}))},f=function(e){var t=e.className,a=(e.cssModule,Object(b.a)(e,["className","cssModule"])),n=v()(t,"card-footer");return r.a.createElement("div",Object.assign({},a,{className:n}))},y=function(e){var t=e.className,a=(e.cssModule,e.color),n=e.body,o=e.inverse,c=e.outline,s=e.innerRef,l=Object(b.a)(e,["className","cssModule","color","body","inverse","outline","innerRef"]),i=v()(t,"card",!!o&&"text-white",!!n&&"card-body",!!a&&"".concat(c?"border":"bg","-").concat(a));return r.a.createElement("div",Object.assign({},l,{className:i,ref:s}))};y.Body=function(e){var t=e.className,a=(e.cssModule,Object(b.a)(e,["className","cssModule"])),n=v()(t,"card-body");return r.a.createElement("div",Object.assign({},a,{className:n}))},y.Header=g,y.Footer=f;var N=y,j=a(16),E=a.n(j),O=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e,a))).handleChange=n.handleChange.bind(Object(u.a)(Object(u.a)(n))),n.generate=n.generate.bind(Object(u.a)(Object(u.a)(n))),n.validate=n.validate.bind(Object(u.a)(Object(u.a)(n))),n.state={value:"",options:n.props.options&&n.props.options[0]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"generate",value:function(){var e=this.state;e.value=this.props.generator.generate(this.state.options),this.setState(e)}},{key:"copy",value:function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a))}},{key:"validate",value:function(){E.a.error("N\xe3o implementado")}},{key:"handleChange",value:function(e){var t=this.state;t[e.target.name]=e.target.value,console.log(e.target.value),this.setState(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"form"},r.a.createElement(N,{className:"text-center"},r.a.createElement(N.Header,null,r.a.createElement("h5",{className:"card-title"},this.props.generator.title)),r.a.createElement(N.Body,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Gerar/Validar",value:this.state.value,name:"value",onChange:this.handleChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn-sm btn-info",type:"button",disabled:!this.state.value,onClick:function(){return e.copy(e.state.value)}},r.a.createElement("i",{className:"fa fa-copy"}))))),this.props.options&&r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"options",id:"options",className:"form-control",onChange:this.handleChange},this.props.options.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),this.props.generator.mask&&r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",onChange:function(){return e.setState(Object(p.a)({},e.state,{options:!e.state.options}))},id:"options",name:"options"}),"M\xe1scara"))),r.a.createElement(N.Footer,null,this.props.generator.generate&&r.a.createElement("button",{type:"button",className:"btn btn-md btn-primary",onClick:this.generate},"Gerar"),this.props.generator.validate&&r.a.createElement("button",{type:"button",className:"btn btn-md btn-secondary",onClick:this.validate},"Validar"))))}}]),t}(n.Component),k=a(9),C=[{title:"Gerador de CPF",generate:k.generator.cpf,mask:!0},{title:"Gerador de CNPJ",generate:k.generator.cnpj,mask:!0},{title:"Gerador de Cart\xe3o de Cr\xe9dito",generate:k.generator.creditCard,options:function(){return Object.keys(k.generator.creditCard.schemas)}}],w=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e,a))).state={generators:C},n.handle=n.handle.bind(Object(u.a)(Object(u.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handle",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.state.generators.map(function(e){return r.a.createElement("div",{className:"col",key:e.title},r.a.createElement(O,{generator:e,options:e.options&&e.options()}))}))}}]),t}(n.Component),M=(a(39),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(w,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.fb28f3ce.chunk.js.map