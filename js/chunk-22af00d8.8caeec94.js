(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22af00d8"],{a699:function(t,r,e){"use strict";e.r(r);var d=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("CheckoutOrder")],1)},s=[],a=e("a8a4"),o={metaInfo:function(){return{title:"結帳成功 | PsyStore"}},components:{CheckoutOrder:a["a"]},mounted:function(){var t=this;t.$store.dispatch("order/setOrderStep","paid")}},n=o,i=e("2877"),c=Object(i["a"])(n,d,s,!1,null,null,null);r["default"]=c.exports},a8a4:function(t,r,e){"use strict";var d=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"container my-5"},[e("h2",{staticClass:"text-center mb-3"},[t._v("訂單明細")]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[t.order.user?e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",[t._v("訂單編號")]),e("td",[t._v(t._s(t.order.id))])]),e("tr",[e("td",[t._v("訂購資料")]),e("td",[e("div",[t._v("姓名："+t._s(t.order.user.name))]),e("div",[t._v("信箱："+t._s(t.order.user.email))]),e("div",[t._v("電話："+t._s(t.order.user.tel))]),e("div",[t._v("地址："+t._s(t.order.user.address))])])]),e("tr",[e("td",[t._v("訂購項目")]),e("td",t._l(t.order.products,(function(r){return e("div",{key:r.id},[t._v(" "+t._s(r.product.title)+" * "+t._s(r.qty)+" "+t._s(r.product.unit)+" ")])})),0)]),e("tr",[e("td",[t._v("結帳金額")]),e("td",[t._v(t._s(t.order.total)+" 元")])])]),e("tfoot",[e("tr",[e("td",[t._v("付款狀態")]),e("td",[t.order.is_paid?e("div",[t._v("付款成功")]):e("div",{staticClass:"text-danger"},[t._v(" 尚未付款 ")])])]),t.order.is_paid?e("tr",[e("td",{staticClass:"pt-3",attrs:{colspan:"2"}},[e("router-link",{staticClass:"btn btn-accent btn-lg btn-block",attrs:{to:"/products"}},[t._v(" 繼續購物")])],1)]):e("tr",[e("td"),e("td",[e("button",{staticClass:"btn btn-primary",on:{click:t.payOrder}},[t._v(" 前往付款 ")])])])])]):t._e()])])])])},s=[],a=(e("b0c0"),e("5530")),o=e("2f62"),n={computed:Object(a["a"])({},Object(o["c"])("order",["order"])),methods:Object(a["a"])({},Object(o["b"])("cart",["getCart"]),{},Object(o["b"])("order",["setOrderStep","getOrder","payOrder"]),{payOrder:function(){var t=this,r=t.$route.params.id;t.$store.dispatch("order/payOrder",r).then((function(r){t.setOrderStep("paid"),t.$router.push({name:"OrderPaid"})}))}}),mounted:function(){var t=this;t.$store.dispatch("setIsLoading",!0,{root:!0}),t.getCart().then((function(){t.getOrder(t.$route.params.id).then((function(){var r="OrderPaid"===t.$route.name;!r&&t.order.is_paid&&t.$router.push({name:"OrderPaid"}),r&&!t.order.is_paid&&t.$router.push({name:"OrderPaying"}),t.$store.dispatch("setIsLoading",!1,{root:!0})}))}))}},i=n,c=e("2877"),u=Object(c["a"])(i,d,s,!1,null,null,null);r["a"]=u.exports}}]);
//# sourceMappingURL=chunk-22af00d8.8caeec94.js.map