(()=>{"use strict";var n={950:(n,e,r)=>{n.exports=r.p+"9730bcfa12d11f3cb01f.jpg"},426:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(645),a=r.n(t),i=r(667),o=r.n(i),c=r(950),s=a()((function(n){return n[1]})),l=o()(c);s.push([n.id,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#content {\r\n  background-color: black;\r\n}\r\n\r\n.info-div,\r\n.menu-div,\r\n.contacts-div {\r\n  background-position: center;\r\n  background-size: cover;\r\n  color: white;\r\n  text-align: center;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  animation-name: fadeEffect;\r\n  animation-duration: 2s;\r\n  animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes fadeEffect {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.info-div {\r\n  background-image: url("+l+');\r\n}\r\n\r\n.info-div > h1 {\r\n  font-size: 80px;\r\n  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\r\n  text-shadow: 0 4px 1px rgba(150, 0, 0), 0 10px 50px rgba(255, 0, 0);\r\n  color: black;\r\n}\r\n\r\n.info-div > p {\r\n  letter-spacing: 0.7em;\r\n  word-spacing: 1em;\r\n  font-weight: bold;\r\n  font-size: 19px;\r\n  color: white;\r\n}\r\n\r\nnav {\r\n  background-color: teal;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nnav > .tab-button {\r\n  padding: 8px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\nnav button:hover {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  letter-spacing: 2px;\r\n}\r\n\r\nbutton.active {\r\n  background-color: rgba(0, 0, 0, 0.7) !important;\r\n}\r\n\r\n.menu-div {\r\n  background-image: url('+l+');\r\n}\r\n\r\n.menu-div,\r\n.contacts-div {\r\n  align-items: center;\r\n}\r\n\r\n.menu-info-div,\r\n.contacts-info-div {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  padding: 35px;\r\n  width: 50%;\r\n  max-height: 70vh;\r\n  overflow: auto;\r\n  border-radius: 7px;\r\n}\r\n\r\n.menu-info-div::-webkit-scrollbar {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  width: 10px;\r\n}\r\n\r\n.menu-info-div::-webkit-scrollbar-thumb {\r\n  background-color: grey;\r\n  border-radius: 25px;\r\n}\r\n\r\n.menu-info-div > h1 {\r\n  text-shadow: 0 4px 1px rgba(150, 0, 0), 0 10px 50px rgba(255, 0, 0);\r\n  padding: 20px 0;\r\n  letter-spacing: 0.2em;\r\n  font-size: 50px;\r\n  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;\r\n}\r\n\r\n.menu-info-div > h2 {\r\n  text-shadow: 0 4px 1px rgba(150, 0, 0), 0 10px 50px rgba(255, 0, 0);\r\n  text-decoration: underline;\r\n  padding: 12px 0;\r\n  letter-spacing: 0.2em;\r\n  font-size: 28px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\nli {\r\n  padding: 6px 0;\r\n  font-size: 20px;\r\n}\r\n\r\nli > span {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.contacts-div {\r\n  background-image: url('+l+");\r\n}\r\n\r\n.contacts-div > h1 {\r\n  text-shadow: 0 4px 1px rgba(150, 0, 0), 0 10px 50px rgba(255, 0, 0);\r\n  font-size: 40px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contacts-info-div {\r\n  text-align: left;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.contacts-info-div > span {\r\n  display: block;\r\n  padding: 15px 0;\r\n  font-size: 25px;\r\n}\r\n\r\n.contacts-info-div > span > i {\r\n  margin-right: 20px;\r\n}\r\n",""]);const d=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&a[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,r)=>{var t,a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function o(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],a=0;a<n.length;a++){var c=n[a],s=e.base?c[0]+e.base:c[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var p=o(d),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:d,updater:h(u,e),references:1}),t.push(d)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function u(n,e,r){var t=r.css,a=r.media,i=r.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,m=0;function h(n,e){var r,t,a;if(e.singleton){var i=m++;r=f||(f=s(e)),t=p.bind(null,r,i,!1),a=p.bind(null,r,i,!0)}else r=s(e),t=u.bind(null,r,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var a=o(r[t]);i[a].references--}for(var s=c(n,e),l=0;l<r.length;l++){var d=o(r[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=s}}}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n=r(379),e=r.n(n),t=r(426);e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const a=document.querySelector("body"),i=document.getElementById("content"),o=document.createElement("nav"),c=(n,e="")=>{const r=document.createElement("button");return r.textContent=n,r.classList.add(e),r};o.appendChild(c("Home","tab-button")),o.appendChild(c("Menu","tab-button")),o.appendChild(c("Contacts","tab-button")),a.appendChild(o);const s=document.getElementsByClassName("tab-button"),l=n=>{const e=document.getElementsByClassName("tab-button");for(let n=0;n<e.length;n+=1)e[n].classList.remove("active");switch(n.target.classList.add("active"),i.textContent="",n.target.textContent){case"Home":i.appendChild(((n,e="")=>{const r=document.createElement("div");r.classList.add("info-div");const t=document.createElement("h1");t.textContent=n;const a=document.createElement("p");return a.textContent=e,r.appendChild(t),r.appendChild(a),r})("THE LAGOON RESTAURANT","All your delicious exotic meals at an affordable price"));break;case"Menu":i.appendChild((()=>{const n=document.createElement("div");return n.classList.add("menu-div"),n.appendChild((()=>{const n=document.createElement("div");return n.classList.add("menu-info-div"),n.innerHTML="<h1>EXOTIC MENU</h1><h2>Suchi Rolls</h2><ul><li>Maki Mix  <span>7,00£</span></li><li>Suchi Vegeterian <span>7,50£</span></li><li>Sashimi Zalm <span>6,00£</span></li>Urakami Box<li><span>18,00£</span></li></ul><h2>Exotic Fast Food</h2><ul><li>Döner Kebab (Chicken) <span>4,50£</span></li><li>Baguettes <span>3,50£</span></li><li>Currywurst<span>3,50£</span></li><li>Egg Rolls<span>3,00£</span></li><li>Chicken Nuggets<span>4,50£</span></li><li>Pizza <span>5,00£</span></li><li>Homemade Burger<span>5,00£</span></li></ul>",n})()),n})());break;case"Contacts":i.appendChild((()=>{const n=document.createElement("div");n.classList.add("contacts-div");const e=document.createElement("h1");return e.textContent="Contact Us",n.appendChild(e),n.appendChild((()=>{const n=document.createElement("div");return n.classList.add("contacts-info-div"),n.innerHTML='<span><i class="fas fa-envelope"></i>emmanuellekamwa@gmail.com</span><span><i class="fab fa-twitter"></i>@AlixKamwa</span><span><i class="fab fa-github"></i>emmanuellekamwa</span>',n})()),n})())}};for(let n=0;n<s.length;n+=1)s[n].addEventListener("click",l);s[0].click()})()})();