webpackJsonp([1],{13:function(t,e,n){"use strict";e.a={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},14:function(t,e){t.exports=function(t,e,n,r,o,a){var i,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,u=t.default);var c="function"==typeof u?u.options:u;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(a?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=d):r&&(d=r),d){var f=c.functional,l=f?c.render:c.beforeCreate;f?(c._injectStyles=d,c.render=function(t,e){return d.call(e),l(t,e)}):c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:i,exports:u,options:c}}},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(6),a=n.n(o),i=n(7),u=n(18),s=n(36),c=n(38),d=n(40);n.n(d);r.default.use(i.a),r.default.use(a.a);var f={mode:"history",routes:u.a},l=new i.a(f);l.beforeEach(function(t,e,n){a.a.LoadingBar.start(),s.a.title(t.meta.title),n()}),l.afterEach(function(){a.a.LoadingBar.finish(),window.scrollTo(0,0)}),new r.default({el:"#app",router:l,render:function(t){return t(c.a)}})},18:function(t,e,n){"use strict";var r=[{path:"/",meta:{title:""},component:function(t){return n.e(0).then(function(){var e=[n(42)];t.apply(null,e)}.bind(this)).catch(n.oe)}}];e.a=r},36:function(t,e,n){"use strict";var r=n(4),o=n.n(r),a=n(37),i={};i.title=function(t){t=t?t+" - Home":"Slowpoke 系统",window.document.title=t};var u="development"===a.a?"http://127.0.0.1:8888":"production"===a.a?"https://www.url.com":"https://debug.url.com";i.ajax=o.a.create({baseURL:u,timeout:3e4}),e.a=i},37:function(t,e,n){"use strict";e.a="production"},38:function(t,e,n){"use strict";var r=n(13),o=n(39),a=n(14),i=a(r.a,o.a,!1,null,null,null);i.options.__file="src\\app.vue",e.a=i.exports},39:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},o=[];r._withStripped=!0;var a={render:r,staticRenderFns:o};e.a=a},40:function(t,e){}},[15]);