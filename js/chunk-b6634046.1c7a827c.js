(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6634046"],{"80a3":function(t,e,a){"use strict";var r=a("8be1"),s=a.n(r);s.a},"8be1":function(t,e,a){},e28c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container my-5"},[a("div",{staticClass:"row"},[0===t.cart.carts.length?a("div",{staticClass:"col-md-8 text-center"},[t._v(" 購物清單內尚無商品，歡迎繼續 "),a("router-link",{attrs:{to:{name:"ProductList"}}},[a("u",[t._v("前往採購")])])],1):a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"h2 text-center p-3 bg-primary text-white"},[t._v(" 填寫訂購人資料 ")]),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"email"}},[t._v("Email * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{name:"Email",type:"email",id:"email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"name"}},[t._v("收件人姓名 * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",attrs:{name:"收件人姓名",type:"text",id:"name"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"tel"}},[t._v("收件人電話 * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{name:"收件人電話",type:"tel",id:"tel"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("label",{attrs:{for:"address"}},[t._v("收件人地址 * ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{name:"收件人地址",type:"text",id:"address"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-secondary w-100 h2 py-3",class:{"not-allowed":r},attrs:{type:"submit",disabled:r}},[t._v(" 建立訂單 ")])])])]}}])})],1),a("div",{staticClass:"col-md-4 d-none d-md-block"},[a("div",{staticClass:" mb-3"},[a("div",{staticClass:"border "},[a("div",{staticClass:"h2 text-center text-white bg-primary-light py-3"},[t._v(" 訂單摘要 ")]),a("div",{staticClass:"p-3"},[t.cart.total?a("table",{staticClass:"table"},[a("tr",[a("td",[t._v("小計")]),a("td",{staticClass:"text-right"},[t._v("NT"+t._s(t._f("currency")(t.cart.total)))])]),a("tr",[a("td",[t._v("折扣")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t.cart.total-t.cart.final_total)+" ")])]),a("tr",{staticClass:"h4"},[a("td",[t._v("總計")]),a("td",{staticClass:"text-right"},[t._v(" NT"+t._s(t._f("currency")(Math.ceil(t.cart.final_total)))+" ")])])]):t._e()])])]),a("div",[a("div",{staticClass:"border "},[a("div",{staticClass:"h2 text-center text-white bg-primary-light py-3"},[t._v(" 購物清單 ")]),a("div",{staticClass:"p-3"},[a("table",{staticClass:"table table-cart-list"},[a("tbody",t._l(t.cart.carts,(function(e){return a("tr",{key:e.id},[a("td",[a("div",{staticClass:"bg-cover",style:"\n                    background-image: url("+(e.product.imageUrl||"https://dummyimage.com/600x300/AAE.jpg")+");\n                    width: 100px;\n                    height: 100px;\n                  "})]),a("td",{staticClass:"align-middle"},[a("div",[t._v(" "+t._s(e.product.title)+" ("+t._s(e.qty)+") "),a("br"),t._v(" NT"+t._s(t._f("currency")(e.total))+" ")])])])})),0)])])])])])])])])},s=[],o=a("5530"),i=a("2f62"),n={metaInfo:function(){return{title:"建立訂單 | PsyStore"}},data:function(){return{couponCode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:Object(o["a"])({},Object(i["c"])("cart",["cart"]),{cartsLength:function(){var t=this;if(t.cart.carts)return t.cart.carts.length}}),methods:Object(o["a"])({},Object(i["b"])(["addCouponCode","setIsLoading"]),{},Object(i["b"])("cart",["getCart","addtoCart","removeCartItem"]),{},Object(i["b"])("order",["createOrder","setOrderStep"]),{onSubmit:function(){var t=this;t.setIsLoading(!0),t.createOrder(t.form).then((function(e){t.setIsLoading(!1),t.$router.push("/checkout/order_paying/".concat(e.data.orderId))}))},cartZeroHandler:function(t){var e=this;0===t&&(e.$router.push({name:"ProductList",params:{category:"所有商品"}}),e.$store.dispatch("alertMessage/updateMessage",{message:"購物清單為空，重新導回商品頁面",status:"warning"}))}}),watch:{cartsLength:function(t){var e=this;e.cartZeroHandler(t)}},mounted:function(){var t=this;t.getCart().then(t.cartZeroHandler(t.cartsLength)),t.setOrderStep("create")}},l=n,c=(a("80a3"),a("2877")),d=Object(c["a"])(l,r,s,!1,null,"7319eaa0",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-b6634046.1c7a827c.js.map