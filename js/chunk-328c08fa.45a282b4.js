(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328c08fa"],{"0eae":function(t,e,s){"use strict";var a=s("9539"),r=s.n(a);r.a},9539:function(t,e,s){},ac5b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"login bg-primary my-0 my-md-5",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[s("div",{staticClass:"login__head py-3"},[t._v("管理員登入")]),s("div",{staticClass:"container login__body"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group input-group-lg"},[s("div",{staticClass:"input-group-prepend"},[s("label",{staticClass:"input-group-text",attrs:{for:"email"}},[s("font-awesome-icon",{attrs:{icon:"user"}})],1)]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"請輸入電子信箱",required:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})])]),s("div",{staticClass:"input-group input-group-lg"},[s("div",{staticClass:"input-group-prepend"},[s("label",{staticClass:"input-group-text",attrs:{for:"password"}},[s("font-awesome-icon",{attrs:{icon:"key"}})],1)]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"請輸入密碼",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._m(0)]),s("button",{staticClass:"btn btn-lg btn-warning w-100 text-primary"},[t._v("登入帳號")])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"remember custom-control custom-checkbox my-3"},[s("input",{staticClass:"custom-control-input bg-warning",attrs:{type:"checkbox",name:"remember",id:"remember"}}),s("label",{staticClass:"custom-control-label text-white",attrs:{for:"remember"}},[t._v("記住我")])])}],n={data:function(){return{user:{username:"",password:""}}},metaInfo:{title:"登入 | PsyStore"},methods:{signin:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.$http.post(e,t.user).then((function(t){return t.data.success})).then((function(e){e?(t.$router.push("/admin/products"),t.$store.dispatch("alertMessage/updateMessage",{message:"登入成功",status:"success"})):t.$store.dispatch("alertMessage/updateMessage",{message:"登入失敗",status:"danger"})}))}},created:function(){}},o=n,i=(s("0eae"),s("2877")),u=Object(i["a"])(o,a,r,!1,null,"fc33520a",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-328c08fa.45a282b4.js.map