!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.callappLib=t():e.callappLib=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=null;function i(e){window.top.location.href=e}function r(e){o||((o=document.createElement("iframe")).frameborder="0",o.style.cssText="display:none;border:0;width:0;height:0;",document.body.appendChild(o)),o.src=e}function s(e){setTimeout(()=>{document.hidden||document.webkitHidden||e()},2500)}class a{constructor(e){this.options=e||{}}buildScheme(e){const{path:t,param:n}=e,o=void 0!==n?Object.keys(n).map(e=>`${e}=${n[e]}`).join("&"):"";return`${this.options.protocol}://${t}?${o}`}generateScheme(e){const{outChain:t}=this.options;let n=this.buildScheme(e);if(void 0!==t&&t){const{protocal:e,path:o,key:i}=t;n=`${e}://${o}?${i}=${encodeURIComponent(n)}`}return n}generateIntent(e){const{outChain:t}=e,{intent:n}=this.options,o=this.buildScheme(e),i=Object.keys(n).map(e=>`${e}=${n[e]};`).join("");if(void 0!==t&&!t){const{path:t,key:n}=e.outChain;return`intent://${t}?${n}=${encodeURIComponent(o)}/#Intent;${i};end;`}return`intent://${o}/#Intent;${i};end;`}generateUniversalLink(e){const{host:t,pathKey:n}=this.options.universal,{path:o,param:i}=e,r=void 0!==i?Object.keys(i).map(e=>`${e}=${i[e]}`).join("&"):"";return`//${t}?${n}=${o}${r?"&":""}${r}`}generateYingYongBao(e){const t=this.generateScheme(e);return`${this.options.yingyongbao}&android_schema=${encodeURIComponent(t)}`}fallToAppStore(){s(()=>{i(this.options.appstore)})}fallToFbUrl(){s(()=>{i(this.options.fallback)})}static fallToCustomCb(e){s(()=>{e()})}open(e){const t=function(){const e=window.navigator.userAgent||"",t=/android/i.test(e),n=/iphone|ipad|ipod/i.test(e);return{isAndroid:t,isIos:n,isWechat:/micromessenger\/([\d.]+)/i.test(e),isWeibo:/(weibo).*weibo__([\d.]+)/i.test(e),isQQ:/qq\/([\d.]+)/i.test(e),isQzone:/qzone\/.*_qz_([\d.]+)/i.test(e),isOriginalChrome:/chrome\/[\d.]+ Mobile Safari\/[\d.]+/i.test(e)&&t&&e.indexOf("Version")<0,isSafari:/safari\/([\d.]+)$/i.test(e)&&n&&e.indexOf("Crios")<0&&0===e.indexOf("Mozilla")}}(),{universal:n,appstore:o}=this.options,{callback:s}=e,c=void 0!==n;let d=null;t.isIos?t.isWechat?i(o):t.isSafari&&function(){const e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return parseInt(e[1],10)}()<9||!c?(r(this.generateScheme(e)),d=this.fallToAppStore):i(this.generateUniversalLink(e)):t.isWechat?i(this.generateYingYongBao(e)):t.isOriginalChrome?(!function(e){const t=document.createElement("a"),n=this.createEvent();t.setAttribute("href",e),t.style.display="none",document.body.appendChild(t),t.dispatchEvent(n)}(this.generateIntent(e)),d=this.fallToFbUrl):(r(this.generateScheme(e)),d=this.fallToFbUrl),d&&(void 0===s?d():a.fallToCustomCb(s))}}t.default=a}])});