(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2609f93e"],{"078b":function(e,t,s){"use strict";var a=s("eaea"),r=s.n(a);r.a},ac5b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"login bg-primary my-0 my-md-5",on:{submit:function(t){return t.preventDefault(),e.signin(t)}}},[s("div",{staticClass:"login__head py-3"},[e._v("管理員登入")]),s("div",{staticClass:"container login__body"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group input-group-lg"},[s("div",{staticClass:"input-group-prepend"},[s("label",{staticClass:"input-group-text",attrs:{for:"email"}},[s("font-awesome-icon",{attrs:{icon:"user"}})],1)]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"請輸入電子信箱",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})])]),s("div",{staticClass:"input-group input-group-lg"},[s("div",{staticClass:"input-group-prepend"},[s("label",{staticClass:"input-group-text",attrs:{for:"password"}},[s("font-awesome-icon",{attrs:{icon:"key"}})],1)]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"請輸入密碼",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._m(0)]),s("button",{staticClass:"btn btn-lg btn-secondary w-100 text-primary"},[e._v(" 登入帳號 ")])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"remember custom-control custom-checkbox my-3"},[s("input",{staticClass:"custom-control-input bg-secondary",attrs:{type:"checkbox",name:"remember",id:"remember"}}),s("label",{staticClass:"custom-control-label text-white",attrs:{for:"remember"}},[e._v("記住我")])])}],o=(s("99af"),s("ac1f"),s("5319"),{data:function(){return{user:{username:"",password:""}}},metaInfo:{title:"登入 | PsyStore"},methods:{signin:function(){var e=this,t=this,s="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.$http.post(s,t.user).then((function(e){var t=e.data.token,s=e.data.expired;return document.cookie="hexToken=".concat(t,";expires=").concat(new Date(s),";"),e.data.success})).then((function(s){if(s){var a=/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,r=document.cookie.replace(a,"$1");e.$http.defaults.headers.common.Authorization="".concat(r),t.$router.push("/admin/products"),t.$store.dispatch("alertMessage/updateMessage",{message:"登入成功",status:"success"})}else t.$store.dispatch("alertMessage/updateMessage",{message:"登入失敗",status:"danger"})}))}}}),n=o,i=(s("078b"),s("2877")),u=Object(i["a"])(n,a,r,!1,null,"b63b2070",null);t["default"]=u.exports},eaea:function(e,t,s){}}]);
//# sourceMappingURL=chunk-2609f93e.9f74b68e.js.map