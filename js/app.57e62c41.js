(function(t){function e(e){for(var a,r,u=e[0],i=e[1],s=e[2],d=0,p=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);h&&h(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},c={app:0},o=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-02f4b07a":"4f9650d1","chunk-0a605124":"0f887763","chunk-0fb4542f":"65ed91eb","chunk-2c454fcf":"9ade5b6d","chunk-2d0da736":"3a6a0959","chunk-2d0f0a00":"874ab034","chunk-2d210fda":"0ad4fb91","chunk-2d21db8d":"fc191a01","chunk-30357887":"3c7ca84a","chunk-48b2bb24":"55ad3e3c","chunk-49415eae":"5513f473","chunk-4dce1ed4":"f3f0c9d8","chunk-51ea9b75":"9d776e5c","chunk-51ee27a5":"25821fdf","chunk-52135674":"234a8213","chunk-6a62af99":"93b97747","chunk-746c91a4":"2172c91c","chunk-77cfb4cc":"7796993b","chunk-b6634046":"1c7a827c","chunk-f8152910":"d1c5fcea"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-02f4b07a":1,"chunk-0a605124":1,"chunk-0fb4542f":1,"chunk-2c454fcf":1,"chunk-30357887":1,"chunk-48b2bb24":1,"chunk-49415eae":1,"chunk-4dce1ed4":1,"chunk-52135674":1,"chunk-6a62af99":1,"chunk-746c91a4":1,"chunk-77cfb4cc":1,"chunk-b6634046":1,"chunk-f8152910":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-02f4b07a":"d61f9efa","chunk-0a605124":"441528e8","chunk-0fb4542f":"441528e8","chunk-2c454fcf":"f9245bb2","chunk-2d0da736":"31d6cfe0","chunk-2d0f0a00":"31d6cfe0","chunk-2d210fda":"31d6cfe0","chunk-2d21db8d":"31d6cfe0","chunk-30357887":"083fea32","chunk-48b2bb24":"cb049d53","chunk-49415eae":"441528e8","chunk-4dce1ed4":"2a30e0f9","chunk-51ea9b75":"31d6cfe0","chunk-51ee27a5":"31d6cfe0","chunk-52135674":"d61f9efa","chunk-6a62af99":"441528e8","chunk-746c91a4":"4780b13d","chunk-77cfb4cc":"1fb23d3f","chunk-b6634046":"19e8526b","chunk-f8152910":"441528e8"}[t]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===c))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],d=s.getAttribute("data-href");if(d===a||d===c)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],h.parentNode.removeChild(h),n(o)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var p=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}c[t]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var h=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4073:function(t,e,n){},5203:function(t,e,n){"use strict";var a=n("4073"),r=n.n(a);r.a},5387:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("4160"),n("b0c0"),n("b64b"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("58ca"),c=n("d1d6"),o=n.n(c),u=n("ecee"),i=n("ad3d"),s=n("c074"),d=n("b702"),p=n("f2d1"),h=n("bc3a"),f=n.n(h),m=n("a7fe"),l=n.n(m),g=(n("4989"),n("9062")),v=n.n(g),b=(n("e40d"),n("7bb1")),k=n("4c93"),E=n("60d4"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AlertMessage"),n("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("router-view")],1)},T=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,a){return n("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},O=[],I=n("5530"),y=n("2f62"),x={data:function(){return{}},computed:Object(I["a"])({},Object(y["c"])({messages:"alertMessage/messages"})),methods:Object(I["a"])({},Object(y["b"])({removeMessage:"alertMessage/removeMessage",updateMessage:"alertMessage/updateMessage"}))},A=x,M=(n("5203"),n("2877")),C=Object(M["a"])(A,S,O,!1,null,null,null),P=C.exports,G={components:{AlertMessage:P},data:function(){return{}},computed:{isLoading:function(){var t=this;return t.$store.state.isLoading}}},w=G,D=(n("5c0b"),Object(M["a"])(w,_,T,!1,null,null,null)),L=D.exports,N=(n("d3b7"),n("8c4f"));a["a"].use(N["a"]);var R=[{path:"/",component:function(){return n.e("chunk-4dce1ed4").then(n.bind(null,"ae58"))},children:[{path:"/",name:"Home",metaInfo:{title:"首頁"},meta:{title:"首頁"},component:function(){return n.e("chunk-48b2bb24").then(n.bind(null,"ec5a"))}},{path:"/products",redirect:{name:"ProductList",params:{category:"所有商品"}},meta:{title:"商品清單"},component:function(){return n.e("chunk-52135674").then(n.bind(null,"678a"))}},{path:"/products/:category",name:"ProductList",meta:{title:"商品清單"},component:function(){return n.e("chunk-52135674").then(n.bind(null,"678a"))}},{path:"/product/:id",name:"productDetail",meta:{title:"商品"},component:function(){return n.e("chunk-02f4b07a").then(n.bind(null,"658f"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-77cfb4cc").then(n.bind(null,"62b3"))},meta:{title:"購物清單"}},{path:"/checkout",component:function(){return n.e("chunk-30357887").then(n.bind(null,"f4b2"))},children:[{path:"order_create",name:"OrderCreate",component:function(){return n.e("chunk-b6634046").then(n.bind(null,"e28c"))},meta:{title:"建立訂單"}},{path:"order_paying/:id",name:"OrderPaying",component:function(){return n.e("chunk-51ea9b75").then(n.bind(null,"0635"))},meta:{title:"金流付款"}},{path:"order_paid/:id",name:"OrderPaid",component:function(){return n.e("chunk-51ee27a5").then(n.bind(null,"8011"))},meta:{title:"結帳成功"}}]},{path:"orders",name:"Orders",component:function(){return n.e("chunk-0a605124").then(n.bind(null,"b5df"))},meta:{title:"訂單列表"}},{path:"/coupons",name:"Coupons",component:function(){return n.e("chunk-2d210fda").then(n.bind(null,"b9f3"))},meta:{title:"酷碰清單"}},{path:"login",name:"Login",component:function(){return n.e("chunk-2c454fcf").then(n.bind(null,"ac5b"))},meta:{title:"登入頁面"}},{path:"about",name:"About",component:function(){return n.e("chunk-2d0f0a00").then(n.bind(null,"9cbb"))},meta:{title:"關於我們"}},{path:"copyright",name:"Copyright",component:function(){return n.e("chunk-2d21db8d").then(n.bind(null,"d308"))},meta:{title:"版權聲明"}}]},{path:"/admin",component:function(){return n.e("chunk-746c91a4").then(n.bind(null,"a76a"))},redirect:"/admin/products",children:[{path:"products",name:"BackProducts",component:function(){return n.e("chunk-f8152910").then(n.bind(null,"5305"))},meta:{requiresAuth:!0}},{path:"orders",name:"BackOrders",component:function(){return n.e("chunk-0fb4542f").then(n.bind(null,"0cbc"))},meta:{requiresAuth:!0}},{path:"coupons",name:"BackCoupons",component:function(){return n.e("chunk-6a62af99").then(n.bind(null,"a3c3"))},meta:{requiresAuth:!0}}]},{path:"/",component:function(){return n.e("chunk-746c91a4").then(n.bind(null,"a76a"))},children:[{path:"shopping",name:"BackShopping",component:function(){return n.e("chunk-49415eae").then(n.bind(null,"b639"))}},{path:"back_order_checkout/:id",name:"BackOrderCheckout",component:function(){return n.e("chunk-2d0da736").then(n.bind(null,"6c3f"))}}]}],j=new N["a"]({routes:R,linkExactActiveClass:"active"}),q=j,Q=(n("99af"),n("c740"),n("a434"),{namespaced:!0,state:{product:{},products:[],pagination:{},favorites:[]},getters:{product:function(t){return t.product},products:function(t){return t.products},pagination:function(t){return t.pagination},favorites:function(t){return t.favorites}},mutations:{GET_PRODUCT:function(t,e){t.product=e},GET_PRODUCTS:function(t,e){t.products=e},GET_PAGINATION:function(t,e){t.pagination=e},SET_FAVORITES:function(t,e){t.favorites=e}},actions:{getProduct:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/product/").concat(e);return t.commit("SET_ISLOADING",!0,{root:!0}),f.a.get(n).then((function(e){t.commit("GET_PRODUCT",e.data.product),t.commit("SET_ISLOADING",!1,{root:!0})}))},getProducts:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/products?page=").concat(e);return t.commit("SET_ISLOADING",!0,{root:!0}),f.a.get(n).then((function(e){t.commit("GET_PRODUCTS",e.data.products),t.commit("GET_PAGINATION",e.data.pagination),t.commit("SET_ISLOADING",!1,{root:!0})}))},getProductsAll:function(t){var e="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/products/all");return t.commit("SET_ISLOADING",!0,{root:!0}),f.a.get(e).then((function(e){t.commit("GET_PRODUCTS",e.data.products),t.commit("SET_ISLOADING",!1,{root:!0})}))},getFavorites:function(t){var e=JSON.parse(localStorage.getItem("favorites"))||[];t.commit("SET_FAVORITES",e)},addToFavorites:function(t,e){var n=t.state.favorites;n.push(e),localStorage.setItem("favorites",JSON.stringify(n)),t.commit("SET_FAVORITES",n),t.dispatch("getFavorites")},removeFavoritesItem:function(t,e){var n=t.state.favorites,a=n.findIndex((function(t){return t.id===e.id}));n.splice(a,1),localStorage.setItem("favorites",JSON.stringify(n)),t.commit("SET_FAVORITES",n),t.dispatch("getFavorites")}}}),F=(n("13d5"),n("96cf"),n("1da1")),V=n("2909"),$={namespaced:!0,state:{cart:[],tempQty:0,tempIndex:void 0},getters:{cart:function(t){return t.cart},tempQty:function(t){return t.tempQty},tempIndex:function(t){return t.tempIndex}},mutations:{GET_CART:function(t,e){t.cart=e},SET_TEMP_QTY:function(t,e){var n=t.tempQty+e;return 0===e&&(n=0),t.tempQty=n,t.tempQty},SET_TEMP_INDEX:function(t,e){return t.tempIndex=e,t.tempIndex}},actions:{getCart:function(t){var e="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart");return f.a.get(e).then((function(e){t.commit("GET_CART",e.data.data)}))},addtoCart:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart"),a=e.product_id,r=t.state.cart.carts,c=Object(V["a"])(r.filter((function(t){return a===t.product_id}))),o=c.reduce((function(t,e){return t+e.qty}),0);if(c.length>=1)for(var u=0;u<c.length;u+=1){var i=c[u];t.dispatch("removeCartItemNoAlert",i.id)}return f.a.post(n,{data:{product_id:a,qty:e.qty+o}}).then((function(e){return t.dispatch("getCart"),e}))},updateCart:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart"),a=e.product_id,r=t.state.cart.carts,c=Object(V["a"])(r.filter((function(t){return a===t.product_id}))),o=c.reduce((function(t,e){return t+e.qty}),0);if(c.length>=1)for(var u=0;u<c.length;u+=1){var i=c[u];t.dispatch("removeCartItemNoAlert",i.id)}return t.dispatch("setIsLoading",!0,{root:!0}),f.a.post(n,{data:{product_id:a,qty:e.qty+o}}).then(function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.commit("SET_TEMP_QTY",0);case 2:return e.next=4,t.commit("SET_TEMP_INDEX",void 0);case 4:return e.next=6,t.dispatch("getCart");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(Object(F["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch("setIsLoading",!1,{root:!0});case 2:return e.next=4,t.dispatch("alertMessage/updateMessage",{message:"數量更新成功",status:"success"},{root:!0});case 4:case"end":return e.stop()}}),e)}))))},removeCartItem:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart/").concat(e);return t.commit("SET_ISLOADING",!0,{root:!0}),f.a.delete(n).then((function(e){return t.commit("SET_ISLOADING",!1,{root:!0}),t.dispatch("getCart"),t.dispatch("alertMessage/updateMessage",{message:e.data.message,status:e.data.success?"success":"warning"},{root:!0}),e}))},removeCartItemNoLoading:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart/").concat(e);return f.a.delete(n).then((function(e){return t.dispatch("getCart"),t.dispatch("alertMessage/updateMessage",{message:e.data.message,status:e.data.success?"success":"warning"},{root:!0}),e}))},removeCartItemNoAlert:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/cart/").concat(e);return f.a.delete(n).then((function(e){return t.dispatch("getCart"),e}))},addTempQty:function(t,e){var n=t.commit;n("SET_TEMP_QTY",1),n("SET_TEMP_INDEX",e)},subTempQty:function(t,e){var n=t.commit;n("SET_TEMP_QTY",-1),n("SET_TEMP_INDEX",e)}}},B={namespaced:!0,state:{messages:[]},getters:{messages:function(t){return t.messages}},mutations:{UPDATE_MESSAGE:function(t,e){t.messages.push(e)},REMOVE_MESSAGE:function(t,e){t.messages.splice(e,1)}},actions:{updateMessage:function(t,e){var n=e.message,a=e.status,r=void 0===a?"warning":a,c=Math.floor(new Date/1e3);t.commit("UPDATE_MESSAGE",{message:n,status:r,timestamp:c}),t.dispatch("removeMessageWithTiming",c)},removeMessage:function(t,e){t.commit("REMOVE_MESSAGE",e)},removeMessageWithTiming:function(t,e){setTimeout((function(){t.state.messages.forEach((function(n,a){n.timestamp===e&&t.commit("REMOVE_MESSAGE",a)}))}),5e3)}}},U={namespaced:!0,state:{order:{},orders:{},orderStep:"create",pagination:{}},getters:{order:function(t){return t.order},orders:function(t){return t.orders},orderStep:function(t){return t.orderStep},pagination:function(t){return t.pagination}},mutations:{GET_ORDER:function(t,e){t.order=e},GET_ORDERS:function(t,e){t.orders=e},SET_ORDER_STEP:function(t,e){t.orderStep=e},GET_PAGINATION:function(t,e){t.pagination=e}},actions:{createOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/order");return f.a.post(n,{data:e}).then((function(t){return t}))},getOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/order/").concat(e);return t.commit("GET_ORDER",{}),f.a.get(n).then((function(e){return t.commit("GET_ORDER",e.data.order),e}))},getOrders:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/orders?page=").concat(e);return f.a.get(n).then((function(e){return t.commit("GET_ORDERS",e.data.orders),t.commit("GET_PAGINATION",e.data.pagination),e}))},payOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/pay/").concat(e);return t.dispatch("setIsLoading",!0,{root:!0}),f.a.post(n).then((function(n){return t.dispatch("getOrder",e),t.dispatch("alertMessage/updateMessage",{message:n.data.message,status:n.data.success?"success":"warning"},{root:!0}),t.dispatch("setIsLoading",!1,{root:!0}),n}))},setOrderStep:function(t,e){t.commit("SET_ORDER_STEP",e)}}};a["a"].use(y["a"]);var J=new y["a"].Store({state:{isLoading:!1},mutations:{SET_ISLOADING:function(t,e){t.isLoading=e}},actions:{setIsLoading:function(t,e){t.commit("SET_ISLOADING",e)},addCouponCode:function(t,e){var n="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/coupon");return t.commit("SET_ISLOADING",!0),f.a.post(n,{data:{code:e}}).then((function(e){return t.dispatch("cart/getCart",null,{root:!0}),t.commit("SET_ISLOADING",!1),t.dispatch("alertMessage/updateMessage",{message:e.data.message,status:e.data.success?"success":"warning"}),e}))}},modules:{product:Q,cart:$,alertMessage:B,order:U}});n("ac1f"),n("25f0"),n("5319");function Y(t){var e=t.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,(function(t,e,n){return e+n.replace(/\d{3}/g,",$&")}));return"$".concat(e)}var X=n("a4fc");function W(t,e){var n=!("ProductList"===t.name&&"ProductList"===e.name);n&&window.scrollTo({top:0,behavior:"auto"})}a["a"].config.productionTip=!1,u["c"].add(s["d"],s["g"],s["o"],s["m"],s["h"],s["n"],s["k"],s["l"],d["c"],s["b"],s["e"],s["a"],s["f"],d["b"],d["a"],s["j"],s["i"],s["c"]),u["c"].add(p["b"],p["c"],p["a"]),a["a"].component("font-awesome-icon",i["a"]),f.a.defaults.withCredentials=!0,a["a"].use(l.a,f.a),Object.keys(k).forEach((function(t){Object(b["c"])(t,k[t])})),Object(b["d"])("zh_TW",E),a["a"].component("ValidationObserver",b["a"]),a["a"].component("ValidationProvider",b["b"]),a["a"].filter("currency",Y),a["a"].filter("date",X["a"]),a["a"].component("Loading",v.a),a["a"].use(r["a"]),a["a"].use(o.a,{defaultTime:"1000ms"}),new a["a"]({router:q,store:J,render:function(t){return t(L)}}).$mount("#app"),q.beforeEach((function(t,e,n){if(t.meta.requiresAuth){var r="".concat("https://vue-course-api.hexschool.io","/api/user/check");f.a.post(r).then((function(t){return t.data.success})).then((function(t){t?n():(q.push("/login"),a["a"].$store.dispatch("alertMessage/updateMessage",{message:"登入後才能進入此頁",status:"hint"}))}))}else W(t,e),n()}))},"5c0b":function(t,e,n){"use strict";var a=n("5387"),r=n.n(a);r.a},a4fc:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("99af"),n("4d90");function a(t){var e=new Date(1e3*t),n="".concat(e.getDate()).padStart(2,"0"),a="".concat(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return"".concat(r,"-").concat(a,"-").concat(n)}}});
//# sourceMappingURL=app.57e62c41.js.map