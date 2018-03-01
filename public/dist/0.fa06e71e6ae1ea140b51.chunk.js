webpackJsonp([0],{42:function(t,e,n){"use strict";function i(t){a||n(44)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(43),o=n(46),a=!1,c=n(14),s=i,u=c(r.a,o.a,!1,s,"data-v-14e4fede",null);u.options.__file="src\\views\\layout.vue",e.default=u.exports},43:function(t,e,n){"use strict";var i=n(45);e.a={data:function(){var t=this;this.$createElement;return{columns:[{title:"Name",key:"name"},{title:"Udid",key:"udid"},{title:"自动上午签到",render:function(e,n){return e("div",null,[e("i-switch",{attrs:{value:1===n.row.autoCheckin},on:{"on-change":function(e){return t.troggleAutoAm(e,n.row)}}},[e("span",{slot:"open"},["开"]),e("span",{slot:"close"},["关"])])])}},{title:"自动下午签到",render:function(e,n){return e("div",null,[e("i-switch",{attrs:{value:1===n.row.autoCheckout},on:{"on-change":function(e){return t.troggleAutoPm(e,n.row)}}},[e("span",{slot:"open"},["开"]),e("span",{slot:"close"},["关"])])])}},{title:"手动签到",render:function(e,n){return e("div",null,[e("i-button",{attrs:{type:"primary"},style:"margin-right: 10px;",on:{click:function(){return t.clickAm(n.row)}}},["上午"]),e("i-button",{attrs:{type:"primary"},on:{click:function(){return t.clickPm(n.row)}}},["下午"])])}},{title:"操作",render:function(e,n){return e("div",null,[e("i-button",{attrs:{type:"primary"},style:"margin-right: 10px;",on:{click:function(){return t.clickEdit(n.row)}}},["编辑"]),e("i-button",{attrs:{type:"warning"},on:{click:function(){return t.clickDelete(n.row)}}},["删除"])])}}],list:[],modal:!1,modal1:!1,formItem:{name:"",password:"",udid:""},editId:""}},created:function(){this.userService=new i.a,this.getList()},methods:{troggleAutoAm:function(t,e){var n=this;this.userService.edit(e._id,{autoCheckin:t?1:0}).then(function(){n.getList()}).catch(function(){n.getList()})},troggleAutoPm:function(t,e){var n=this;this.userService.edit(e._id,{autoCheckout:t?1:0}).then(function(){n.getList()}).catch(function(){n.getList()})},clickAm:function(t){var e=this;this.userService.clickAm(t.name).then(function(t){e.getList(),e.$Message.info(JSON.stringify(t.data))}).catch(function(){e.getList()})},clickPm:function(t){var e=this;this.userService.clickPm(t.name).then(function(t){e.getList(),e.$Message.info(JSON.stringify(t.data))}).catch(function(){e.getList()})},clickDelete:function(t){var e=this;this.userService.remove(t._id).then(function(){e.getList()}).catch(function(){e.getList()})},clickCreate:function(){this.modal=!0},clickEdit:function(t){this.modal1=!0,this.formItem.name=t.name,this.formItem.udid=t.udid,this.editId=t._id},ok1:function(){var t=this;this.userService.edit(this.editId,{name:this.formItem.name,udid:this.formItem.udid}).then(function(e){t.reset(),t.getList()}).catch(function(){t.reset(),t.getList()})},cancel1:function(){this.modal1=!1,this.reset()},getList:function(){var t=this;this.userService.list().then(function(e){t.list=e.data})},ok:function(){var t=this;this.userService.create(this.formItem).then(function(){t.modal=!1,t.reset(),t.getList()}).catch(function(){t.reset(),t.getList()})},reset:function(){this.formItem.name="",this.formItem.password="",this.formItem.udid="",this.editId=""},cancel:function(){this.modal=!1,this.reset()}}}},44:function(t,e){},45:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(4),o=(n.n(r),function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()),a=r.create({baseURL:"/api/v1/yoho/"}),c=function(){function t(){i(this,t),this.request=a}return o(t,[{key:"list",value:function(){return this.request.get("").then(function(t){return t.data})}},{key:"show",value:function(t){return this.request.get(t).then(function(t){return t.data})}},{key:"edit",value:function(t,e){return this.request.post(t,e).then(function(t){return t.data})}},{key:"create",value:function(t){return this.request.post("",t).then(function(t){return t.data})}},{key:"remove",value:function(t){return this.request.delete(t).then(function(t){return t.data})}},{key:"clickAm",value:function(t){return this.request.get(t+"/checkin").then(function(t){return t.data})}},{key:"clickPm",value:function(t){return this.request.get(t+"/checkout").then(function(t){return t.data})}}]),t}();e.a=c},46:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Layout",[n("Header",[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[n("div",{staticClass:"layout-logo"})])],1),t._v(" "),n("Content",{style:{padding:"0 50px"}},[n("Breadcrumb",{style:{margin:"20px 0"}},[n("BreadcrumbItem",[t._v("Home")]),t._v(" "),n("BreadcrumbItem",[t._v("List")])],1),t._v(" "),n("Card",[n("div",{staticStyle:{"min-height":"200px"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("Button",{on:{click:t.clickCreate}},[t._v("新建用户")])],1),t._v(" "),n("Table",{attrs:{columns:t.columns,data:t.list}}),t._v(" "),n("Alert",{attrs:{type:"success"}},[t._v("/api/v1/yoho/:name/checkin")])],1)])],1),t._v(" "),n("Footer",{staticClass:"layout-footer-center"},[t._v("2011-2018 © htoooth")]),t._v(" "),n("Modal",{attrs:{title:"新建用户"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("Form",{attrs:{model:t.formItem,"label-width":60}},[n("FormItem",{attrs:{label:"用户名"}},[n("Input",{model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1),t._v(" "),n("FormItem",{attrs:{label:"密码"}},[n("Input",{model:{value:t.formItem.password,callback:function(e){t.$set(t.formItem,"password",e)},expression:"formItem.password"}})],1),t._v(" "),n("FormItem",{attrs:{label:"设备ID"}},[n("Input",{model:{value:t.formItem.udid,callback:function(e){t.$set(t.formItem,"udid",e)},expression:"formItem.udid"}})],1)],1)],1),t._v(" "),n("Modal",{attrs:{title:"编缉用户"},on:{"on-ok":t.ok1,"on-cancel":t.cancel1},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[n("Form",{attrs:{model:t.formItem,"label-width":60}},[n("FormItem",{attrs:{label:"用户名"}},[n("Input",{model:{value:t.formItem.name,callback:function(e){t.$set(t.formItem,"name",e)},expression:"formItem.name"}})],1),t._v(" "),n("FormItem",{attrs:{label:"设备ID"}},[n("Input",{model:{value:t.formItem.udid,callback:function(e){t.$set(t.formItem,"udid",e)},expression:"formItem.udid"}})],1)],1)],1)],1)],1)},r=[];i._withStripped=!0;var o={render:i,staticRenderFns:r};e.a=o}});