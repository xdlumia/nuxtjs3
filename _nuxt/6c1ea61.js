(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{285:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2);function c(){var e=Object(r.m)().$docus;return{settings:Object(r.a)((function(){var t;return null==e||null===(t=e.settings)||void 0===t?void 0:t.value}))}}},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(33);function r(e,t){history.replaceState({},"","#"+e),setTimeout((function(){var n=e.replace(/\./g,"\\."),r=document.querySelector("#".concat(n)).offsetTop-function(e){var t=document.createElement("div");t.style.position="absolute",t.style.opacity="0",t.style.height=getComputedStyle(document.documentElement).getPropertyValue(e),document.body.appendChild(t);var n=parseInt(getComputedStyle(t).height);return document.body.removeChild(t),n}(t);window.scrollTo(0,r)}))}},287:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return l.a}));n(10);var r=n(2);function c(){var e=Object(r.j)(),t=Object(r.j)([]),n=Object(r.j)([]),c=function(e){return e.forEach((function(e){var n=e.target.id;e.isIntersecting?t.value.push(n):t.value=t.value.filter((function(e){return e!==n}))}))};return Object(r.p)(t,(function(e,t){0===e.length?n.value=t:n.value=e})),Object(r.f)((function(){return e.value=new IntersectionObserver(c)})),Object(r.g)((function(){var t;return null===(t=e.value)||void 0===t?void 0:t.disconnect()})),{visibleHeadings:t,activeHeadings:n,updateHeadings:function(t){return t.forEach((function(t){e.value.observe(t)}))}}}n(26),n(33);var o=n(59),l=n(285);function d(){var e=Object(l.a)().settings,t=Object(r.a)((function(){return Object(o.joinURL)(e.value.github.url,e.value.github.repo)}));return{repoUrl:t,getPageLink:function(n){return Object(r.a)((function(){if(e.value.github){var r=n.key.split(":"),c=r[r.length-2],source=r[r.length-1];return[t.value,"edit",e.value.github.branch,e.value.github.dir||"",e.value.contentDir,c,"".concat(source).replace(/^\//g,"")].filter(Boolean).join("/")}}))}}}},289:function(e,t,n){"use strict";var r=n(286);n.d(t,"a",(function(){return r.a}))},291:function(e,t,n){"use strict";n.r(t);var r=n(43),c=(n(34),n(30),n(2)),o=n(287),l=n(289),d=Object(c.b)({props:{toc:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(o.b)(),t=e.activeHeadings,n=e.visibleHeadings,d=e.updateHeadings;Object(c.h)((function(){return setTimeout((function(){d([].concat(Object(r.a)(document.querySelectorAll(".docus-content h1")),Object(r.a)(document.querySelectorAll(".docus-content h2")),Object(r.a)(document.querySelectorAll(".docus-content h3"))))}),200)}));return{visibleHeadings:n,activeHeadings:t,scrollToHeading:l.a,isActiveParent:function(link){return link.children&&link.children.some((function(e){return t.value.includes(e.id)}))}}}}),v=n(4),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"font-medium ml-4"},e._l(e.toc,(function(link){return n("li",{key:link.id,on:{click:function(t){return e.$emit("click")}}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":e.activeHeadings.includes(link.id)||e.isActiveParent(link),"d-secondary-text hover:d-secondary-text-hover":!e.activeHeadings.includes(link.id)&&!e.isActiveParent(link)},attrs:{href:"#"+link.id},on:{click:function(t){return t.preventDefault(),e.scrollToHeading(link.id,"--docs-scroll-margin-block")}}},[e._v("\n      "+e._s(link.text)+"\n    ")]),e._v(" "),link.children?n("ul",{staticClass:"overflow-x-hidden font-medium"},e._l(link.children,(function(t){return n("li",{key:t.id},[n("a",{staticClass:"block py-1 pl-3 transition-colors duration-100 transform",class:{"d-secondary-text-active hover:d-secondary-text-hover":e.activeHeadings.includes(t.id),"d-secondary-text hover:d-secondary-text-hover":!e.activeHeadings.includes(t.id)},attrs:{href:"#"+t.id},on:{click:function(n){return n.preventDefault(),e.scrollToHeading(t.id,"--docs-scroll-margin-block")}}},[e._v("\n          "+e._s(t.text)+"\n        ")])])})),0):e._e()])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);