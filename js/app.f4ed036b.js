(function(e){function t(t){for(var a,c,u=t[0],i=t[1],s=t[2],d=0,h=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(h.length)h.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-069fd280":"4612b3f4","chunk-06ae5c3b":"8a65d49d","chunk-111b16bd":"d53e25b4","chunk-22af00d8":"8caeec94","chunk-22af119c":"bc7523d3","chunk-2b09fa6c":"0bbf3544","chunk-2d0a50ee":"0a3b5640","chunk-2d0b33c2":"c1e819ee","chunk-2d0de750":"23822373","chunk-2d22c48a":"48733135","chunk-2d22d746":"633b1efc","chunk-49627246":"64bd2b37","chunk-4f9f5832":"cd1db5ae","chunk-54187a86":"6d1fb7be","chunk-66402f6b":"c1e14b10","chunk-68c85ad5":"9ed30073","chunk-7457cd93":"0ace60b3","chunk-79520fe4":"7e0f2c3f","chunk-af29c2d8":"5cd32c19","chunk-e602e058":"1231578d","chunk-f4970692":"334d2893"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-069fd280":1,"chunk-06ae5c3b":1,"chunk-111b16bd":1,"chunk-49627246":1,"chunk-4f9f5832":1,"chunk-54187a86":1,"chunk-66402f6b":1,"chunk-7457cd93":1,"chunk-79520fe4":1,"chunk-af29c2d8":1,"chunk-e602e058":1,"chunk-f4970692":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-069fd280":"fe12f428","chunk-06ae5c3b":"441528e8","chunk-111b16bd":"441528e8","chunk-22af00d8":"31d6cfe0","chunk-22af119c":"31d6cfe0","chunk-2b09fa6c":"31d6cfe0","chunk-2d0a50ee":"31d6cfe0","chunk-2d0b33c2":"31d6cfe0","chunk-2d0de750":"31d6cfe0","chunk-2d22c48a":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-49627246":"441528e8","chunk-4f9f5832":"c04b23cc","chunk-54187a86":"33468984","chunk-66402f6b":"c84986ca","chunk-68c85ad5":"31d6cfe0","chunk-7457cd93":"00fe3909","chunk-79520fe4":"441528e8","chunk-af29c2d8":"441528e8","chunk-e602e058":"d72e2176","chunk-f4970692":"40109411"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){s=h[u],d=s.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],f.parentNode.removeChild(f),n(r)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var h=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",h.name="ChunkLoadError",h.type=a,h.request=c,n[1](h)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4a2f":function(e,t,n){"use strict";var a=n("b1d9"),c=n.n(a);c.a},5387:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("4160"),n("b0c0"),n("b64b"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=n("58ca"),o=n("ecee"),r=n("ad3d"),u=n("c074"),i=n("b702"),s=n("f2d1"),d=n("bc3a"),h=n.n(d),f=n("a7fe"),p=n.n(f),l=(n("4989"),n("9062")),m=n.n(l),g=(n("e40d"),n("7bb1")),b=n("4c93"),v=n("60d4"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AlertMessage"),n("Loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),n("router-view")],1)},E=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-alert"},e._l(e.messages,(function(t,a){return n("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+t.status},[e._v(" "+e._s(t.message)+" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return e.removeMessage(a)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])})),0)},_=[],O=n("5530"),T=n("2f62"),A={data:function(){return{}},computed:Object(O["a"])({},Object(T["c"])({messages:"alertMessage/messages"})),methods:Object(O["a"])({},Object(T["b"])({removeMessage:"alertMessage/removeMessage",updateMessage:"alertMessage/updateMessage"})),created:function(){}},I=A,y=(n("4a2f"),n("2877")),G=Object(y["a"])(I,S,_,!1,null,null,null),M=G.exports,x={components:{AlertMessage:M},computed:{isLoading:function(){var e=this;return e.$store.state.isLoading}}},C=x,L=(n("5c0b"),Object(y["a"])(C,k,E,!1,null,null,null)),D=L.exports,P=(n("d3b7"),n("8c4f"));a["a"].use(P["a"]);var N=[{path:"/",component:function(){return n.e("chunk-66402f6b").then(n.bind(null,"0b36"))},children:[{path:"/",name:"Home",metaInfo:{title:"首頁"},meta:{title:"首頁"},component:function(){return n.e("chunk-7457cd93").then(n.bind(null,"bb51"))}},{path:"/products",redirect:{name:"ProductList",params:{category:"所有商品"}},meta:{title:"商品清單"},component:function(){return n.e("chunk-68c85ad5").then(n.bind(null,"96fc"))}},{path:"/products/:category",name:"ProductList",meta:{title:"商品清單"},component:function(){return n.e("chunk-68c85ad5").then(n.bind(null,"96fc"))}},{path:"/product/:id",name:"productDetail",meta:{title:"商品"},component:function(){return n.e("chunk-2b09fa6c").then(n.bind(null,"d2f1"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-e602e058").then(n.bind(null,"b789"))},meta:{title:"購物清單"}},{path:"/checkout",component:function(){return n.e("chunk-54187a86").then(n.bind(null,"b738"))},children:[{path:"order_create",name:"OrderCreate",component:function(){return n.e("chunk-4f9f5832").then(n.bind(null,"aaff"))},meta:{title:"建立訂單"}},{path:"order_paying/:id",name:"OrderPaying",component:function(){return n.e("chunk-22af119c").then(n.bind(null,"a422"))},meta:{title:"金流付款"}},{path:"order_paid/:id",name:"OrderPaid",component:function(){return n.e("chunk-22af00d8").then(n.bind(null,"a699"))},meta:{title:"結帳成功"}}]},{path:"orders",name:"Orders",component:function(){return n.e("chunk-af29c2d8").then(n.bind(null,"159d"))},meta:{title:"訂單列表"}},{path:"/coupons",name:"Coupons",component:function(){return n.e("chunk-2d22c48a").then(n.bind(null,"f329"))},meta:{title:"酷碰清單"}},{path:"login",name:"Login",component:function(){return n.e("chunk-069fd280").then(n.bind(null,"a55b"))},meta:{title:"登入頁面"}},{path:"about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},meta:{title:"關於我們"}},{path:"copyright",name:"Copyright",component:function(){return n.e("chunk-2d0b33c2").then(n.bind(null,"2806"))},meta:{title:"版權聲明"}}]},{path:"/admin",component:function(){return n.e("chunk-f4970692").then(n.bind(null,"fa61"))},redirect:"/admin/products",children:[{path:"products",name:"BackProducts",component:function(){return n.e("chunk-111b16bd").then(n.bind(null,"aa75"))},meta:{requiresAuth:!0}},{path:"orders",name:"BackOrders",component:function(){return n.e("chunk-49627246").then(n.bind(null,"f10b"))},meta:{requiresAuth:!0}},{path:"coupons",name:"BackCoupons",component:function(){return n.e("chunk-06ae5c3b").then(n.bind(null,"e8f3"))},meta:{requiresAuth:!0}}]},{path:"/",component:function(){return n.e("chunk-f4970692").then(n.bind(null,"fa61"))},children:[{path:"shopping",name:"BackShopping",component:function(){return n.e("chunk-79520fe4").then(n.bind(null,"7721"))}},{path:"back_order_checkout/:id",name:"BackOrderCheckout",component:function(){return n.e("chunk-2d0a50ee").then(n.bind(null,"08a1"))}}]},{path:"/refresh",name:"refresh",component:function(){return n.e("chunk-2d0de750").then(n.bind(null,"8673"))}}],w=new P["a"]({routes:N,linkExactActiveClass:"active"}),R=w,j=(n("99af"),n("c740"),n("d81d"),n("a434"),{namespaced:!0,state:{product:{},products:[],pagination:{},favorites:[]},getters:{product:function(e){return e.product},products:function(e){return e.products},pagination:function(e){return e.pagination},favorites:function(e){return e.favorites}},mutations:{GET_PRODUCT:function(e,t){e.product=t},GET_PRODUCTS:function(e,t){e.products=t},GET_PAGINATION:function(e,t){e.pagination=t},SET_FAVORITES:function(e,t){e.favorites=t}},actions:{getProduct:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/product/").concat(t);return e.commit("SET_ISLOADING",!0,{root:!0}),h.a.get(n).then((function(t){e.commit("GET_PRODUCT",t.data.product),e.commit("SET_ISLOADING",!1,{root:!0})}))},getProducts:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/products?page=").concat(t);return e.commit("SET_ISLOADING",!0,{root:!0}),h.a.get(n).then((function(t){e.commit("GET_PRODUCTS",t.data.products),e.commit("GET_PAGINATION",t.data.pagination),e.commit("SET_ISLOADING",!1,{root:!0})}))},getProductsAll:function(e){var t="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/products/all");return e.commit("SET_ISLOADING",!0,{root:!0}),h.a.get(t).then((function(t){e.commit("GET_PRODUCTS",t.data.products),e.commit("SET_ISLOADING",!1,{root:!0})}))},getFavorites:function(e){var t=JSON.parse(localStorage.getItem("favorites"))||[];e.commit("SET_FAVORITES",t)},addToFavorites:function(e,t){var n=e.state.favorites;n.push(t),localStorage.setItem("favorites",JSON.stringify(n)),e.commit("SET_FAVORITES",n),e.dispatch("getFavorites")},removeFavoritesItem:function(e,t){var n=e.state.favorites,a=n.findIndex((function(e){return e.id===t.id}));n.splice(a,1),localStorage.setItem("favorites",JSON.stringify(n)),e.commit("SET_FAVORITES",n),e.dispatch("getFavorites")}}}),F={namespaced:!0,state:{cart:[]},getters:{cart:function(e){return e.cart}},mutations:{GET_CART:function(e,t){e.cart=t}},actions:{getCart:function(e){var t="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart");return h.a.get(t).then((function(t){e.commit("GET_CART",t.data.data)}))},addtoCart:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart");return h.a.post(n,{data:t}).then((function(t){return e.dispatch("getCart"),t}))},removeCartItem:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart/").concat(t);return e.commit("SET_ISLOADING",!0,{root:!0}),h.a.delete(n).then((function(t){return e.commit("SET_ISLOADING",!1,{root:!0}),e.dispatch("getCart"),e.dispatch("alertMessage/updateMessage",{message:t.data.message,status:t.data.success?"success":"warning"},{root:!0}),t}))},removeCartItemNoLoading:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart/").concat(t);return h.a.delete(n).then((function(t){return e.dispatch("getCart"),e.dispatch("alertMessage/updateMessage",{message:t.data.message,status:t.data.success?"success":"warning"},{root:!0}),t}))}}},V={namespaced:!0,state:{messages:[]},getters:{messages:function(e){return e.messages}},mutations:{UPDATE_MESSAGE:function(e,t){e.messages.push(t)},REMOVE_MESSAGE:function(e,t){e.messages.splice(t,1)}},actions:{updateMessage:function(e,t){var n=t.message,a=t.status,c=void 0===a?"warning":a,o=Math.floor(new Date/1e3);e.commit("UPDATE_MESSAGE",{message:n,status:c,timestamp:o}),e.dispatch("removeMessageWithTiming",o)},removeMessage:function(e,t){e.commit("REMOVE_MESSAGE",t)},removeMessageWithTiming:function(e,t){setTimeout((function(){e.state.messages.forEach((function(n,a){n.timestamp===t&&e.commit("REMOVE_MESSAGE",a)}))}),5e3)}}},B={namespaced:!0,state:{order:{},orders:{},orderStep:"create",pagination:{}},getters:{order:function(e){return e.order},orders:function(e){return e.orders},orderStep:function(e){return e.orderStep},pagination:function(e){return e.pagination}},mutations:{GET_ORDER:function(e,t){e.order=t},GET_ORDERS:function(e,t){e.orders=t},SET_ORDER_STEP:function(e,t){e.orderStep=t},GET_PAGINATION:function(e,t){e.pagination=t}},actions:{createOrder:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/order");return h.a.post(n,{data:t}).then((function(e){return e}))},getOrder:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/order/").concat(t);return e.commit("GET_ORDER",{}),h.a.get(n).then((function(t){return e.commit("GET_ORDER",t.data.order),t}))},getOrders:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/orders?page=").concat(t);return h.a.get(n).then((function(t){return e.commit("GET_ORDERS",t.data.orders),e.commit("GET_PAGINATION",t.data.pagination),t}))},payOrder:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/pay/").concat(t);return e.dispatch("setIsLoading",!0,{root:!0}),h.a.post(n).then((function(n){return e.dispatch("getOrder",t),e.dispatch("alertMessage/updateMessage",{message:n.data.message,status:n.data.success?"success":"warning"},{root:!0}),e.dispatch("setIsLoading",!1,{root:!0}),n}))},setOrderStep:function(e,t){e.commit("SET_ORDER_STEP",t)}}};a["a"].use(T["a"]);var U=new T["a"].Store({state:{isLoading:!1},mutations:{SET_ISLOADING:function(e,t){e.isLoading=t}},actions:{setIsLoading:function(e,t){e.commit("SET_ISLOADING",t)},addCouponCode:function(e,t){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/coupon");return e.commit("SET_ISLOADING",!0),h.a.post(n,{data:{code:t}}).then((function(t){return e.dispatch("cart/getCart",null,{root:!0}),e.commit("SET_ISLOADING",!1),e.dispatch("alertMessage/updateMessage",{message:t.data.message,status:t.data.success?"success":"warning"}),t}))}},modules:{product:j,cart:F,alertMessage:V,order:B}});n("ac1f"),n("25f0"),n("5319");function $(e){var t=e.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,(function(e,t,n){return t+n.replace(/\d{3}/g,",$&")}));return"$".concat(t)}var q=n("a4fc");a["a"].config.productionTip=!1,o["c"].add(u["c"],u["f"],u["l"],u["j"],u["g"],u["k"],u["h"],u["i"],i["b"],u["b"],u["d"],u["a"],u["e"],i["a"]),o["c"].add(s["b"],s["c"],s["a"]),a["a"].component("font-awesome-icon",r["a"]),h.a.defaults.withCredentials=!0,a["a"].use(p.a,h.a),Object.keys(b).forEach((function(e){Object(g["c"])(e,b[e])})),Object(g["d"])("zh_TW",v),a["a"].component("ValidationObserver",g["a"]),a["a"].component("ValidationProvider",g["b"]),a["a"].filter("currency",$),a["a"].filter("date",q["a"]),a["a"].component("Loading",m.a),a["a"].use(c["a"]),new a["a"]({router:R,store:U,render:function(e){return e(D)}}).$mount("#app"),R.beforeEach((function(e,t,n){if(e.meta.requiresAuth){var a="".concat("https://vue-course-api.hexschool.io","/api/user/check");h.a.post(a).then((function(e){return e.data.success})).then((function(e){e?n():"Login"!==t.name&&R.push("/login")}))}else n()}))},"5c0b":function(e,t,n){"use strict";var a=n("5387"),c=n.n(a);c.a},a4fc:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("99af"),n("4d90");function a(e){var t=new Date(1e3*e),n="".concat(t.getDate()).padStart(2,"0"),a="".concat(t.getMonth()+1).padStart(2,"0"),c=t.getFullYear();return"".concat(c,"-").concat(a,"-").concat(n)}},b1d9:function(e,t,n){}});
//# sourceMappingURL=app.f4ed036b.js.map