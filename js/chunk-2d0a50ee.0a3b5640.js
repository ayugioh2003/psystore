(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a50ee"],{"08a1":function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.order.create_at?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-8 mx-auto"},[e("table",{staticClass:"table mb-3"},[t._m(0),e("tbody",[t._l(t.order.products,(function(r){return e("tr",{key:r.id},[e("th",[t._v(t._s(r.product.title))]),e("td",[t._v(t._s(r.qty)+" "+t._s(r.product.unit))]),e("td",{staticClass:"text-right"},[t._v(t._s(r.product.price))])])})),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])],2)]),e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",{attrs:{scope:"row",width:"110"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-danger"},[t._v("未付款")])])])])]),e("div",{staticClass:"text-right"},[t.order.is_paid?t._e():e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(r){return t.payOrder(t.$route.params.id)}}},[t._v(" 確認付款去 ")])])])]):t._e()},a=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("品名")]),e("th",{attrs:{scope:"col"}},[t._v("數量")]),e("th",{attrs:{scope:"col"}},[t._v("單價")])])])}],o=e("5530"),c=e("2f62"),d={metaInfo:function(){return{title:"後台結帳測試 | PsyStore"}},computed:Object(o["a"])({},Object(c["c"])("order",["order"])),methods:Object(o["a"])({},Object(c["b"])("order",["getOrder","payOrder"])),created:function(){var t=this;t.getOrder(t.$route.params.id)}},i=d,n=e("2877"),_=Object(n["a"])(i,s,a,!1,null,null,null);r["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0a50ee.0a3b5640.js.map