(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{492:function(e,t,n){"use strict";n.r(t);n(11),n(12),n(10),n(18),n(19);var r=n(43),o=n(5),c=n(7),l=n(3),d=(n(15),n(39),n(16),n(195),n(1)),h=n(8),f=n(2);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=Object(f.b)({name:"PageSlug",middleware:function(e){var t=e.app,n=e.params,r=e.redirect;"index"===n.pathMatch&&r(t.localePath("/"))},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,f,m,v,w,y,j,P,x,k,$,component,M,D;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$docus,r=e.app,c=r.i18n,l=r.localePath,e.route,f=e.params,m=e.error,v=e.redirect,w=c.locale,y=O({},n.settings.value.layout),j=Object(h.n)("/".concat(f.pathMatch||""))||"/",!1,t.next=7,n.search({deep:!0}).where({language:w,to:j,draft:false,page:{$ne:!1}}).fetch();case 7:if(P=t.sent,x=Object(o.a)(P,1),k=x[0]){t.next=12;break}return t.abrupt("return",m({statusCode:404,message:"404 - Page not found"}));case 12:return t.next=14,n.page(k.id);case 14:if(($=t.sent).template=n.getPageTemplate($),!(component=d.default.component($.template))){t.next=30;break}if(t.prev=18,"function"!=typeof component||component.options){t.next=24;break}return t.next=22,component();case 22:(component=t.sent).options||(component=d.default.extend(component));case 24:t.next=29;break;case 26:t.prev=26,t.t0=t.catch(18),component=new component({props:{page:$}});case 29:(component.templateOptions||null!==(M=component.$options)&&void 0!==M&&M.templateOptions)&&(y=O(O({},y),component.templateOptions||(null===(D=component.$options)||void 0===D?void 0:D.templateOptions)));case 30:return k.layout&&(y=O(O({},y),k.layout)),n.currentPage.value=$,$.navigation&&$.navigation.redirect&&v(l($.navigation.redirect)),t.abrupt("return",{page:$,templateOptions:y});case 35:case"end":return t.stop()}}),t,null,[[18,26]])})))()},head:function(){var head=O({title:this.page.title,meta:[]},this.page.head||{});return this.mergeMeta(head.meta,this.pageMeta),head},computed:{pageMeta:function(){return[{hid:"og:title",property:"og:title",content:this.page.title},{hid:"twitter:title",name:"twitter:title",content:this.page.title}].concat(Object(r.a)(this.page.description?[{hid:"description",name:"description",content:this.page.description},{hid:"og:description",property:"og:description",content:this.page.description},{hid:"twitter:description",name:"twitter:description",content:this.page.description}]:[]))}},created:function(){this.$docus.layout.value=this.templateOptions,this.$docus.currentPage.value=this.page,this.$docus.currentPath.value="/".concat(this.$route.params.pathMatch)},mounted:function(){var e;null!==(e=this.page)&&void 0!==e&&e.version&&localStorage.setItem("page-".concat(this.page.slug,"-version"),this.page.version)},methods:{mergeMeta:function(e,t){t.forEach((function(t){var n=t.hid||t.name||t.property;e.findIndex((function(meta){return meta.hid===n||meta.name===n||meta.property===n}))<0&&e.push(t)}))}},render:function(e){return e(this.page.template,{props:{page:this.page}})}}),w=n(4),y=Object(w.a)(v,undefined,undefined,!1,null,null,null);t.default=y.exports}}]);