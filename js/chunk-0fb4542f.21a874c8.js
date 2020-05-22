(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fb4542f"],{"0cbc":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("table",{staticClass:"table mt-5"},[t._m(0),e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("th",[t._v(t._s(t._f("date")(a.create_at)))]),e("td",[t._v(t._s(a.user.email))]),e("td",t._l(a.products,(function(a){return e("div",{key:a.id},[t._v(" "+t._s(a.product.title)+": "+t._s(a.product.num)+" "+t._s(a.product.unit)+" ")])})),0),e("td",{class:{"text-light":!a.is_paid}},[t._v(" "+t._s(a.is_paid?"已付款":"未付款")+" ")]),e("td",[e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(a)}}},[t._v(" 編輯 ")])])])})),0)]),e("Pagination",{attrs:{pagination:t.pagination},on:{"change-page":t.getOrdersA}}),e("div",{staticClass:"modal fade modal-lg",attrs:{tabindex:"-1",role:"dialog",id:"orderModal"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",[t._v("訂單 "+t._s(t.tempOrder.id))]),e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.is_paid,expression:"tempOrder.is_paid"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"defaultCheck1"},domProps:{checked:Array.isArray(t.tempOrder.is_paid)?t._i(t.tempOrder.is_paid,null)>-1:t.tempOrder.is_paid},on:{change:function(a){var e=t.tempOrder.is_paid,i=a.target,r=!!i.checked;if(Array.isArray(e)){var n=null,s=t._i(e,n);i.checked?s<0&&t.$set(t.tempOrder,"is_paid",e.concat([n])):s>-1&&t.$set(t.tempOrder,"is_paid",e.slice(0,s).concat(e.slice(s+1)))}else t.$set(t.tempOrder,"is_paid",r)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v(" 是否付款 ")])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateOrder}},[t._v(" 確認 ")])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("訂單時間")]),e("th",{attrs:{scope:"col"}},[t._v("買家資訊")]),e("th",{attrs:{scope:"col"}},[t._v("訂單商品")]),e("th",{attrs:{scope:"col"}},[t._v("是否付款")]),e("th",{attrs:{scope:"col"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title bg-dark"},[t._v("修改訂單")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(e("99af"),e("5530")),s=e("1157"),o=e.n(s),c=e("1799"),l={metaInfo:function(){return{title:"後台訂單管理 | PsyStore"}},components:{Pagination:c["a"]},data:function(){return{orders:{},tempOrder:{},pagination:{}}},methods:{getOrdersA:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/admin/orders?page=").concat(t);a.$store.commit("SET_ISLOADING",!0),a.$http.get(e).then((function(t){return t.data})).then((function(t){a.orders=t.orders,a.pagination=t.pagination,a.$store.commit("SET_ISLOADING",!1)}))},updateOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/api/api_hexvue","/admin/order/").concat(t.tempOrder.id),e={data:t.tempOrder};t.$store.commit("SET_ISLOADING",!0),t.$http.put(a,e).then((function(){o()("#orderModal").modal("hide"),t.getOrdersA(),t.$store.commit("SET_ISLOADING",!1)}))},openModal:function(t){var a=this;a.tempOrder=Object(n["a"])({},t),o()("#orderModal").modal("show")}},created:function(){var t=this;t.getOrdersA()}},d=l,p=e("2877"),u=Object(p["a"])(d,i,r,!1,null,null,null);a["default"]=u.exports},1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1==t.pagination.current_page},on:{click:function(a){return a.preventDefault(),t.changePage(t.pagination.current_page-1)}}},[t._m(0)]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page==a},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[e("a",{staticClass:"page-link ",attrs:{href:"#"}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pagination.current_page==t.pagination.total_pages},on:{click:function(a){return a.preventDefault(),t.changePage(t.pagination.current_page+1)}}},[t._m(1)])],2)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])}],n={props:{pagination:{type:Object,required:!0}},data:function(){return{}},methods:{changePage:function(t){var a=this;a.$emit("change-page",t)}}},s=n,o=(e("5eaf"),e("2877")),c=Object(o["a"])(s,i,r,!1,null,null,null);a["a"]=c.exports},3890:function(t,a,e){},"5eaf":function(t,a,e){"use strict";var i=e("3890"),r=e.n(i);r.a}}]);
//# sourceMappingURL=chunk-0fb4542f.21a874c8.js.map