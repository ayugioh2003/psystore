(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52135674"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var r=i("1d80"),n=i("5899"),a="["+n+"]",s=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),c=function(t){return function(e){var i=String(r(e));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},6062:function(t,e,i){"use strict";var r=i("6d61"),n=i("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},6566:function(t,e,i){"use strict";var r=i("9bf2").f,n=i("7c73"),a=i("e2cc"),s=i("0366"),o=i("19aa"),c=i("2266"),u=i("7dd0"),d=i("2626"),f=i("83ab"),l=i("f183").fastKey,v=i("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,i,u){var d=t((function(t,r){o(t,d,e),p(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[u],t,i)})),v=g(e),h=function(t,e,i){var r,n,a=v(t),s=b(t,e);return s?s.value=i:(a.last=s={index:n=l(e,!0),key:e,value:i,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=s),r&&(r.next=s),f?a.size++:t.size++,"F"!==n&&(a.index[n]=s)),t},b=function(t,e){var i,r=v(t),n=l(e);if("F"!==n)return r.index[n];for(i=r.first;i;i=i.next)if(i.key==e)return i};return a(d.prototype,{clear:function(){var t=this,e=v(t),i=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete i[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,i=v(e),r=b(e,t);if(r){var n=r.next,a=r.previous;delete i.index[r.index],r.removed=!0,a&&(a.next=n),n&&(n.previous=a),i.first==r&&(i.first=n),i.last==r&&(i.last=a),f?i.size--:e.size--}return!!r},forEach:function(t){var e,i=v(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:i.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),a(d.prototype,i?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),f&&r(d.prototype,"size",{get:function(){return v(this).size}}),d},setStrong:function(t,e,i){var r=e+" Iterator",n=g(e),a=g(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,i=t.last;while(i&&i.removed)i=i.previous;return t.target&&(t.last=i=i?i.next:t.state.first)?"keys"==e?{value:i.key,done:!1}:"values"==e?{value:i.value,done:!1}:{value:[i.key,i.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),i?"entries":"values",!i,!0),d(e)}}},"678a":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner bg-cover",staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80)"}}),i("div",{staticClass:"container mt-5"},[i("div",{staticClass:"row "},[i("div",{staticClass:"col-md-3 mb-5"},[i("div",{staticClass:"list-group sticky-top",staticStyle:{top:"100px"}},t._l(t.categories,(function(e){return i("button",{key:e,staticClass:"list-group-item list-group-item-action",class:{active:t.routeCategory==e},attrs:{type:"button"},on:{click:function(){t.routeCategory=e}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"h2 pb-3"},[t._v(t._s(t.routeCategory))]),i("div",{staticClass:"row"},t._l(t.filterProducts,(function(t,e){return i("div",{key:t.id,staticClass:"col-md-6 col-lg-4 mb-3 mb-md-5"},[i("ProductCard",{attrs:{item:t,index:e,imageHeight:250}})],1)})),0)])])])])},n=[],a=(i("99af"),i("4de4"),i("d81d"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("2909")),s=i("5530"),o=i("2f62"),c=i("e915"),u={components:{ProductCard:c["a"]},metaInfo:function(){return{title:"".concat(this.$route.params.category,"-商品列表 | PsyStore")}},data:function(){return{status:{is_cartbtn_adding:!1,which_cartbtn_adding:0}}},computed:Object(s["a"])({},Object(o["c"])("product",["products","pagination","favorites"]),{isEnabledProducts:function(){var t=this;return t.products.filter((function(t){return 1===t.is_enabled}))},filterProducts:function(){var t=this;if("所有商品"===t.routeCategory)return t.isEnabledProducts;if("我的最愛"===t.routeCategory)return t.favorites;var e=t.isEnabledProducts.filter((function(e){return e.category===t.routeCategory}));return e},categories:function(){var t=this,e=t.isEnabledProducts.map((function(t){return t.category}));return e=Object(a["a"])(new Set(e)),e=["所有商品"].concat(Object(a["a"])(e),["我的最愛"]),e},routeCategory:{get:function(){var t=this;return t.$route.params.category||"所有商品"},set:function(t){var e=this;e.$route.params.category!==t&&e.$router.push({name:"ProductList",params:{category:t}})}}}),methods:Object(s["a"])({},Object(o["b"])("product",["getProductsAll","getFavorites","addToFavorites","removeFavoritesItem","isFavorite"]),{addtoCart:function(t){var e=this;e.status.is_cartbtn_adding=!0,e.$store.dispatch("cart/addtoCart",t).then((function(t){e.status.is_cartbtn_adding=!1,e.$store.dispatch("alertMessage/updateMessage",{message:"".concat(t.data.message),status:t.data.success?"success":"warning"})}))},openProductDetail:function(t){var e=this;e.$router.push({name:"productDetail",params:{id:t.id}})}}),mounted:function(){var t=this;t.getProductsAll(),t.getFavorites()}},d=u,f=i("2877"),l=Object(f["a"])(d,r,n,!1,null,null,null);e["default"]=l.exports},"6d61":function(t,e,i){"use strict";var r=i("23e7"),n=i("da84"),a=i("94ca"),s=i("6eeb"),o=i("f183"),c=i("2266"),u=i("19aa"),d=i("861d"),f=i("d039"),l=i("1c7e"),v=i("d44e"),p=i("7156");t.exports=function(t,e,i){var g=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),b=g?"set":"add",m=n[t],y=m&&m.prototype,_=m,x={},C=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:function(t,i){return e.call(this,0===t?0:t,i),this})};if(a(t,"function"!=typeof m||!(h||y.forEach&&!f((function(){(new m).entries().next()})))))_=i.getConstructor(e,t,g,b),o.REQUIRED=!0;else if(a(t,!0)){var w=new _,E=w[b](h?{}:-0,1)!=w,I=f((function(){w.has(1)})),k=l((function(t){new m(t)})),j=!h&&f((function(){var t=new m,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(_=e((function(e,i){u(e,_,t);var r=p(new m,e,_);return void 0!=i&&c(i,r[b],r,g),r})),_.prototype=y,y.constructor=_),(I||j)&&(C("delete"),C("has"),g&&C("get")),(j||E)&&C(b),h&&y.clear&&delete y.clear}return x[t]=_,r({global:!0,forced:_!=m},x),v(_,t),h||i.setStrong(_,t,g),_}},7156:function(t,e,i){var r=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var a,s;return n&&"function"==typeof(a=e.constructor)&&a!==i&&r(s=a.prototype)&&s!==i.prototype&&n(t,s),t}},a505:function(t,e,i){"use strict";var r=i("adad"),n=i.n(r);n.a},a9e3:function(t,e,i){"use strict";var r=i("83ab"),n=i("da84"),a=i("94ca"),s=i("6eeb"),o=i("5135"),c=i("c6b6"),u=i("7156"),d=i("c04e"),f=i("d039"),l=i("7c73"),v=i("241c").f,p=i("06cf").f,g=i("9bf2").f,h=i("58a8").trim,b="Number",m=n[b],y=m.prototype,_=c(l(y))==b,x=function(t){var e,i,r,n,a,s,o,c,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(i=u.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(a=u.slice(2),s=a.length,o=0;o<s;o++)if(c=a.charCodeAt(o),c<48||c>n)return NaN;return parseInt(a,r)}return+u};if(a(b,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var C,w=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof w&&(_?f((function(){y.valueOf.call(i)})):c(i)!=b)?u(new m(x(e)),i,w):x(e)},E=r?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)o(m,C=E[I])&&!o(w,C)&&g(w,C,p(m,C));w.prototype=y,y.constructor=w,s(n,b,w)}},adad:function(t,e,i){},bb2f:function(t,e,i){var r=i("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d81d:function(t,e,i){"use strict";var r=i("23e7"),n=i("b727").map,a=i("1dde"),s=i("ae40"),o=a("map"),c=s("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e915:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card h-100 position-relative"},[i("div",{staticClass:"position-absolute",staticStyle:{right:"0"}},[t.favorites.map((function(t){return t.id})).includes(t.item.id)?i("button",{staticClass:"btn text-danger",on:{click:function(e){return t.removeFavoritesItem(t.item)}}},[i("font-awesome-icon",{attrs:{icon:["fas","heart"],size:"lg"}})],1):t._e(),t.favorites.map((function(t){return t.id})).includes(t.item.id)?t._e():i("button",{staticClass:"btn text-danger",on:{click:function(e){return t.addToFavorites(t.item)}}},[i("font-awesome-icon",{attrs:{icon:["far","heart"],size:"lg"}})],1)]),i("div",{staticClass:"card-image w-100",style:{height:t.imageHeight+"px"},on:{click:function(e){return t.openProductDetail(t.item)}}},[i("img",{staticClass:"w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center"},attrs:{src:t.item.imageUrl||"https://dummyimage.com/600x300/AAE.jpg",alt:t.item.content}})]),i("div",{staticClass:"card-body",on:{click:function(e){return t.openProductDetail(t.item)}}},[i("div",{staticClass:"d-flex justify-content-between align-item-start"},[i("h5",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),i("div",[i("span",{staticClass:"badge badge-pill badge-primary-light"},[t._v(" "+t._s(t.item.category)+" ")])])]),i("p",{staticClass:"card-text text-primary-light"},[t._v(" "+t._s(t.item.description)+" ")]),i("div",{staticClass:"d-flex justify-content-between"},[i("p",{staticClass:"card-text text-decoration-line-through"},[i("del",[t._v("原價 "+t._s(t.item.origin_price))])]),i("p",{staticClass:"card-text h5 text-right text-danger"},[t._v(" 特價 "+t._s(t.item.price)+" 元 ")])])]),i("div",{staticClass:"card-footer d-flex justify-content-between"},[i("button",{staticClass:"btn btn-outline-primary-light",on:{click:function(e){return t.openProductDetail(t.item)}}},[t._v(" 查看更多 ")]),i("button",{staticClass:"btn btn-primary",class:{"not-allowed":t.status.is_cartbtn_adding},attrs:{disabled:t.status.is_cartbtn_adding},on:{click:[function(e){return t.addtoCart({product_id:t.item.id,qty:1})},function(e){e.preventDefault(),t.status.which_cartbtn_adding=t.index}]}},[t.status.is_cartbtn_adding&&t.status.which_cartbtn_adding==t.index?i("font-awesome-icon",{attrs:{icon:"spinner",spin:""}}):t._e(),t._v(" 加到購物車 ")],1)])])},n=[],a=(i("a9e3"),i("5530")),s=i("2f62"),o={props:{item:Object,index:Number,imageHeight:Number},data:function(){return{status:{is_cartbtn_adding:!1,which_cartbtn_adding:0}}},computed:Object(a["a"])({},Object(s["c"])("product",["favorites"])),methods:Object(a["a"])({},Object(s["b"])("product",["addToFavorites","removeFavoritesItem","isFavorite"]),{addtoCart:function(t){var e=this;e.status.is_cartbtn_adding=!0,e.$store.dispatch("cart/addtoCart",t).then((function(t){e.status.is_cartbtn_adding=!1,e.$store.dispatch("alertMessage/updateMessage",{message:"".concat(t.data.message),status:t.data.success?"success":"warning"})}))},openProductDetail:function(t){var e=this;e.$router.push({name:"productDetail",params:{id:t.id}})}})},c=o,u=(i("a505"),i("2877")),d=Object(u["a"])(c,r,n,!1,null,"3412ff10",null);e["a"]=d.exports},f183:function(t,e,i){var r=i("d012"),n=i("861d"),a=i("5135"),s=i("9bf2").f,o=i("90e3"),c=i("bb2f"),u=o("meta"),d=0,f=Object.isExtensible||function(){return!0},l=function(t){s(t,u,{value:{objectID:"O"+ ++d,weakData:{}}})},v=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,u)){if(!f(t))return"F";if(!e)return"E";l(t)}return t[u].objectID},p=function(t,e){if(!a(t,u)){if(!f(t))return!0;if(!e)return!1;l(t)}return t[u].weakData},g=function(t){return c&&h.REQUIRED&&f(t)&&!a(t,u)&&l(t),t},h=t.exports={REQUIRED:!1,fastKey:v,getWeakData:p,onFreeze:g};r[u]=!0}}]);
//# sourceMappingURL=chunk-52135674.234a8213.js.map