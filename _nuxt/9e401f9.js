/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2,44,51],{300:function(t,e,n){"use strict";n.r(e);var r=n(4),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,n){var r;r=function(){return function(){var t={134:function(t,e,n){"use strict";n.d(e,{default:function(){return O}});var r=n(279),o=n.n(r),c=n(370),l=n.n(c),f=n(817),h=n.n(f);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}var e,n,r;return e=t,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=h()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=h()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==d(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}],n&&y(e.prototype,n),r&&y(e,r),t}(),m=v;function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t,p){return E=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t},E(t,p)}function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}function T(t,element){var e="data-clipboard-".concat(t);if(element.hasAttribute(e))return element.getAttribute(e)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(c,t);var e,n,r,o=x(c);function c(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return e=c,n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===k(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=l()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new m({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return T("action",t)}},{key:"defaultTarget",value:function(t){var e=T("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return T("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],r=[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}],n&&w(e.prototype,n),r&&w(e,r),c}(o()),O=j},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(element,t){for(;element&&9!==element.nodeType;){if("function"==typeof element.matches&&element.matches(t))return element;element=element.parentNode}}},438:function(t,e,n){var r=n(828);function o(element,t,e,n,r){var o=c.apply(this,arguments);return element.addEventListener(e,o,r),{destroy:function(){element.removeEventListener(e,o,r)}}}function c(element,t,e,n){return function(e){e.delegateTarget=r(e.target,t),e.delegateTarget&&n.call(element,e)}}t.exports=function(t,e,n,r,c){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(element){return o(element,e,n,r,c)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(element){var t;if("SELECT"===element.nodeName)element.focus(),t=element.value;else if("INPUT"===element.nodeName||"TEXTAREA"===element.nodeName){var e=element.hasAttribute("readonly");e||element.setAttribute("readonly",""),element.select(),element.setSelectionRange(0,element.value.length),e||element.removeAttribute("readonly"),t=element.value}else{element.hasAttribute("contenteditable")&&element.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(element),n.removeAllRanges(),n.addRange(r),t=n.toString()}return t}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var data=[].slice.call(arguments,1),e=((this.e||(this.e={}))[t]||[]).slice(),i=0,n=e.length;i<n;i++)e[i].fn.apply(e[i].ctx,data);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,c=r.length;i<c;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(134)}().default},t.exports=r()},388:function(t,e,n){"use strict";n.r(e);var r=n(4),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z",stroke:"currentColor","stroke-width":"1.49375","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6",stroke:"currentColor","stroke-width":"1.49375","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},453:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(323),c=n.n(o),l=Object(r.b)({setup:function(){var t=Object(r.j)(),e=Object(r.j)("init");return Object(r.h)((function(){new c.a(t.value,{target:function(t){return t.previousElementSibling}}).on("success",(function(t){t.clearSelection(),e.value="copied",window.setTimeout((function(){e.value="init"}),2e3)}))})),{state:e,copy:t}}}),f=n(4),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{ref:"copy",staticClass:"\n    copy\n    focus:outline-none\n    absolute\n    right-0\n    bottom-0\n    px-2\n    py-2\n    m-1\n    d-prose-code-filename-text d-prose-code-filename-bg\n    text-xs\n    leading-none\n    rounded-lg\n    font-mono font-semibold\n  "},["copied"===t.state?n("IconCheck",{staticClass:"w-4 h-4"}):n("IconCopy",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconCheck:n(300).default,IconCopy:n(388).default})}}]);