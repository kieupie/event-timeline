/*! For license information please see server.js.LICENSE.txt */
require("source-map-support").install(),(()=>{"use strict";var t={871:t=>{t.exports=require("@fastify/static")},442:t=>{t.exports=require("fastify")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=require("preact"),e=require("preact-render-to-string");var n=r.n(e);const o=require("path");var i=r.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}const l=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,e);var r,n,o,i,l=(o=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(o);if(i){var r=u(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=l.call(this,t)).state={jobData:t.dataJob},e}return r=f,(n=[{key:"render",value:function(){var e=this;return(0,t.h)("div",{style:{backgroundColor:"#f5f6f7"}},(0,t.h)("p",{className:"date"},"August 2022"),(0,t.h)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},(0,t.h)("div",{className:"sortable-list",style:{justifyContent:"center",alignItems:"center",width:"100%"}},this.props.dataJob.map((function(t,r){return e.renderItem(r,t)})))))}},{key:"renderItem",value:function(e,r){return(0,t.h)("div",{key:e,style:{backgroundColor:"white",width:"100%",height:"100%",display:"flex"},draggable:!0,className:"item"},(0,t.h)("div",{style:{flex:1,flexDirection:"column",display:"flex",marginRight:15,direction:"rtl"}},(0,t.h)("text",{style:{lineHeight:"20px",marginTop:15,marginBottom:5,fontFamily:"Arial",fontSize:13,color:"gray"},className:"time"},r.time),(0,t.h)("img",{src:"assets/clip.png",alt:"attach",style:{width:15,height:15,marginBottom:0}})),(0,t.h)("div",{style:{backgroundColor:"finished"===r.status?"#0070f2":"lightgray",width:3,position:"relative"}},(0,t.h)("div",{style:{width:20,height:20,backgroundColor:"white",borderRadius:"50%",position:"absolute",top:"25%",left:"50%",transform:"translate(-50%, -50%)",borderWidth:2,borderColor:"blue"}},(0,t.h)("div",{style:{width:"finished"===r.status?15:10,height:"finished"===r.status?15:10,backgroundColor:"unfinished"===r.status?"white":"#0070f2",borderRadius:"50%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"unfinished"===r.status?"3px solid gray":"white"}},r.icon&&(0,t.h)("img",{className:"icon",src:r.icon,alt:"".concat(r.icon),style:{width:10,height:10,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",filter:"brightness(0) invert(1)"}})))),(0,t.h)("div",{style:{flex:3.5,paddingTop:10,paddingBottom:10,borderBottom:"1px solid lightgray",marginLeft:20}},(0,t.h)("div",{style:{display:"flex",justifyContent:"space-between"}},(0,t.h)("div",null,(0,t.h)("p",{style:{display:"block",fontWeight:"bold",fontFamily:"Arial",lineHeight:"1px"},className:"title"},r.title),(0,t.h)("p",{style:{display:"block",fontSize:14,lineHeight:"10px",fontFamily:"Arial"},className:"description"},r.description),(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",lineHeight:"10px",fontFamily:"Arial"},className:"attribute"},r.attribute)),(0,t.h)("div",{style:{padding:5,paddingRight:20,direction:"rtl"}},(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",lineHeight:"1px",fontFamily:"Arial"},className:"status1"},r.status1),(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",fontFamily:"Arial"},className:"status2"},r.status2),(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",lineHeight:"2px",fontFamily:"Arial"},className:"attribute"},r.attribute)))))}}])&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(t.Component),f="assets/check.png",h=[{title:"Timeline Title heo",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"finished",time:"00 Aug",icon:f},{title:"Timeline Title heog",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"finished",time:"Today",icon:f},{title:"Timeline Title heoh",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"finished",time:"Today",icon:"assets/more.png"},{title:"Timeline Title heol",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"unfinished",time:"00 Aug",icon:""},{title:"Timeline Title heolnn",description:"Description",status1:"Status1",status2:"Status2",attribute:"Attribute",status:"unfinished",time:"00 Aug",icon:""}],p=[{route:"/",component:function(){return(0,t.h)(l,{dataJob:h})}}],y=JSON.parse('{"u2":"event_timeline","WL":"","Hw":[]}');function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(){m=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),s=new A(n||[]);return o(a,"_invoke",{value:_(t,r,s)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",g={};function b(){}function w(){}function x(){}var j={};u(j,a,(function(){return this}));var S=Object.getPrototypeOf,O=S&&S(S(C([])));O&&O!==r&&n.call(O,a)&&(j=O);var E=x.prototype=b.prototype=Object.create(j);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(o,i,a,s){var c=f(t[o],t,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==d(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=h;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=k(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?v:p,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(d(e)+" is not iterable")}return w.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(T.prototype),u(T.prototype,s,(function(){return this})),e.AsyncIterator=T,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new T(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function v(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var g=r(442),b=r(871),w=g({logger:!0});w.register(b,{root:i().join(__dirname,"../public")}),p.forEach((function(e){return w.route({method:"GET",url:e.route,schema:{response:{200:{type:"string"}}},handler:function(r,o){return o.header("Content-Type","text/html; charset=utf-8"),i=n()((0,t.h)(e.component,null)),'\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>'.concat(y.u2,'</title>\n        <meta name="description" content="').concat(y.WL,'">\n        <meta name="keywords" content="').concat(y.Hw.join(", "),'">\n        <style>\n            html, body {\n                height: 100%;\n                width: 100%;\n                margin: 0;\n                font-family: helvetica;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="root">\n            ').concat(i,'\n        </div>\n        <script type="module" src="client.js" async><\/script>\n        <script src="dragDrop.js"><\/script>\n        <script src="dragDropTouchEvent.js"><\/script>\n    </body>\n    </html>\n');var i}})})),function(){var t,e=(t=m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.listen({port:5e3});case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),w.log.error(t.t0),process.exit(1);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,s,"next",t)}function s(t){v(i,n,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}()()})()})();
//# sourceMappingURL=server.js.map