!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CircleProgressbar=e():t.CircleProgressbar=e()}(self,(function(){return(()=>{"use strict";var t={807:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),i=r.n(n),o=r(645),s=r.n(o)()(i());s.push([t.id,'svg .svg-circle-progress{transform-origin:50% 50%;transition:stroke-dasharray ease .6s}svg .svg-title{text-anchor:middle;dominant-baseline:middle;font:400 1em "Roboto",sans-serif}svg .svg-subtitle{text-anchor:middle;dominant-baseline:middle;font:.75em "Roboto",sans-serif}',""]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},50:(t,e,r)=>{r.r(e),r.d(e,{default:()=>m});var n=r(379),i=r.n(n),o=r(795),s=r.n(o),a=r(569),c=r.n(a),u=r(565),l=r.n(u),d=r(216),f=r.n(d),p=r(589),h=r.n(p),v=r(807),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=f(),i()(v.Z,b);const m=v.Z&&v.Z.locals?v.Z.locals:void 0},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var o={},s=[],a=0;a<t.length;a++){var c=t[a],u=n.base?c[0]+n.base:c[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=i(p,n);n.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function i(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,i){var o=n(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=r(o[s]);e[a].references--}for(var c=n(t,i),u=0;u<o.length;u++){var l=r(o[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{var t=n;Object.defineProperty(t,"__esModule",{value:!0}),r(50);var e=function(){function t(t,e){this.svgNS="http://www.w3.org/2000/svg",this.option=Object.assign({value:0,total:100,radius:"40%",strokeWidth:6,stroke:"#38c3ff",backgroundStrokeWidth:e.backgroundStrokeWidth||e.strokeWidth||6,backgroundStroke:"#f5f6fa",semiCircle:1,strokeLinecap:"round",title:function(t,e){return t+"%"},titleStyle:"",subtitle:function(t,e){return t+"%"},subtitleStyle:""},e);var r=this.option,n=r.value,i=r.total,o=r.radius,s=r.strokeWidth,a=r.stroke,c=r.backgroundStrokeWidth,u=r.backgroundStroke,l=r.semiCircle,d=r.strokeLinecap,f=r.title,p=r.titleStyle,h=r.subtitle,v=r.subtitleStyle;this.container=t,this.value=n,this.total=i;var b=this.createSvg(t.clientWidth,t.clientHeight),m=this.getCircumference(),y=this.createCircle(o,c.toString(),u);b.appendChild(y);var g=this.createCircle(o,s.toString(),a);if(g.setAttribute("stroke-dasharray","0 "+m),this.circle=g,b.appendChild(g),null!==e.title||!1!==e.title){var x="function"==typeof f?f(100*parseFloat((n/i).toFixed(2)),n):f,S=this.createText(x);S.setAttribute("class","svg-title"),this.titleElement=S,p&&S.setAttribute("style",p),b.appendChild(S)}if(console.log(e.subtitle),void 0!==e.subtitle&&null!==e.subtitle){var A="function"==typeof h?h(100*parseFloat((n/i).toFixed(2)),n):h,k=this.createText(A);k.setAttribute("class","svg-subtitle"),k.setAttribute("y","60%"),this.titleElement.setAttribute("y","45%"),v&&k.setAttribute("style",v),b.appendChild(k)}if(t.appendChild(b),e.strokeLinecap&&(g.setAttribute("stroke-linecap",d),y.setAttribute("stroke-linecap",d)),l<1&&l>0){var C=Math.floor(l*m),M=C/m*360/2;y.setAttribute("stroke-dasharray",C+" "+m),y.setAttribute("transform","rotate("+(-90-M)+")"),g.setAttribute("transform","rotate("+(-90-M)+")")}setTimeout((function(){g.setAttribute("stroke-dasharray",Math.floor(n/i*m*l)+" "+m)}),0)}return t.prototype.getCircumference=function(){var t,e=parseInt(this.option.radius);return t=/%$/.test(this.option.radius)?e/100*2*this.container.clientWidth*Math.PI:2*e*Math.PI,this.circumference=t,t},t.prototype.createSvg=function(t,e){var r=document.createElementNS(this.svgNS,"svg");return r.setAttribute("version","1.2"),r.setAttribute("width",t+""),r.setAttribute("height",e+""),r},t.prototype.createCircle=function(t,e,r){var n=document.createElementNS(this.svgNS,"circle");return n.classList.add("svg-circle-progress"),n.setAttribute("cx","50%"),n.setAttribute("cy","50%"),n.setAttribute("fill","none"),n.setAttribute("transform","rotate(-90)"),n.setAttribute("r",t+""),n.setAttribute("stroke",r),n.setAttribute("stroke-width",e),n},t.prototype.createText=function(t){var e=document.createElementNS(this.svgNS,"text");return e.setAttribute("x","50%"),e.setAttribute("y","50%"),e.textContent=t,e},t.prototype.setValue=function(t){this.value=t,this.circle.setAttribute("stroke-dasharray",Math.floor(t/this.total*this.circumference*this.option.semiCircle)+" "+this.circumference);var e=this.option.title,r="function"==typeof e?e(parseFloat((t/this.total*100).toFixed(2)),t):e;this.titleElement.textContent=r},t.create=function(e,r){return new t(e,r)},t}();t.default=function(t,r){if(t)return e.create(t,r);throw"Container does not exist"}})(),n})()}));