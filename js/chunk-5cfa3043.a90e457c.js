(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cfa3043"],{"5c5d":function(t,a,e){"use strict";var s=e("c94b"),c=e.n(s);c.a},"62b3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"banner bg-cover",staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)"}}),e("div",{staticClass:"container my-5"},[e("div",{staticClass:"row position-relative"},[e("div",{staticClass:"col-md-8"},[e("h2",{staticClass:"bg-light text-center p-3"},[t._v("購物清單確認")]),0===t.cart.carts.length?e("div",{staticClass:"text-center"},[t._v(" 購物清單內尚無商品，歡迎繼續 "),e("router-link",{attrs:{to:{name:"ProductList"}}},[e("u",[t._v("前往採購")])])],1):t._e(),e("table",{staticClass:"table table-cart-list"},[e("tbody",t._l(t.cart.carts,(function(a){return e("tr",{key:a.id},[e("td",[e("div",{staticClass:"bg-cover",style:"\n                    background-image: url("+(a.product.imageUrl||"https://dummyimage.com/600x300/AAE.jpg")+");\n                    width: 100px;\n                    height: 100px;\n                  "})]),e("td",{staticClass:"align-middle"},[e("div",[t._v(" "+t._s(a.product.title)+" | "+t._s(t._f("currency")(a.product.price))+" ")])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.qty)+" "+t._s(a.product.unit)+" ")]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currency")(a.total))+" ")]),e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger",on:{click:function(e){return t.removeCartItem(a.id)}}},[e("font-awesome-icon",{attrs:{icon:["far","trash-alt"]}})],1)])])})),0)])]),e("div",{staticClass:"col-md-4 "},[e("div",{staticClass:"sticky-top "},[e("div",{staticClass:"border "},[e("div",{staticClass:"h2 text-center bg-light py-3"},[t._v("訂單摘要")]),e("div",{staticClass:"p-3"},[t.cart.total?e("table",{staticClass:"table"},[e("tr",[e("td",[t._v("小計")]),e("td",{staticClass:"text-right"},[t._v("NT"+t._s(t._f("currency")(t.cart.total)))])]),e("tr",[e("td",[t._v("折扣")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(t.cart.total-t.cart.final_total)+" ")])]),e("tr",{staticClass:"h4"},[e("td",[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(" NT"+t._s(t._f("currency")(Math.ceil(t.cart.final_total)))+" ")])])]):t._e()])]),t.cart.carts.length>0?e("router-link",{staticClass:"btn btn-warning w-100 py-3 h2",attrs:{to:"/checkout/order_create"}},[t._v("填寫訂購者資料")]):t._e(),t.cart.carts.length>0?e("div",{staticClass:"input-group mb-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Coupon Code"},domProps:{value:t.code},on:{input:function(a){a.target.composing||(t.code=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:function(a){return t.addCouponCode(t.code)}}},[t._v(" 套用優惠碼 ")])])]):t._e(),t._m(0)],1)])])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-3 text-right text-danger"},[e("div",[t._v("全館五折特價中")]),e("div",[t._v("輸入優惠碼：hope_disease_disappear")])])}],i=e("5530"),r=e("2f62"),n={data:function(){return{code:""}},metaInfo:{title:"購物清單 | PsyStore"},computed:Object(i["a"])({},Object(r["c"])("cart",["cart"])),methods:Object(i["a"])({},Object(r["b"])(["addCouponCode"]),{},Object(r["b"])("cart",["getCart","removeCartItem"])),mounted:function(){var t=this;t.getCart()}},o=n,l=(e("5c5d"),e("2877")),d=Object(l["a"])(o,s,c,!1,null,"7e2809c1",null);a["default"]=d.exports},c94b:function(t,a,e){}}]);
//# sourceMappingURL=chunk-5cfa3043.a90e457c.js.map