<template>
  <div>
    <div
      class="banner bg-cover"
      style="background-image: url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80);
      "
    ></div>
    <div class="container my-5" v-if="cart.carts">
      <div class="row position-relative">
        <!-- 購物清單 -->
        <div class="col-md-8">
          <h2 class="bg-primary text-white text-center p-3">購物清單確認</h2>

          <div class="text-center" v-if="cart.carts.length === 0">
            購物清單內尚無商品，歡迎繼續
            <router-link
              class=""
              :to="{
                name: 'ProductList',
                params: {
                  category: '所有商品',
                },
              }"
              ><u>前往採購</u></router-link
            >
          </div>

          <table class="table table-cart-list">
            <tbody>
              <tr v-for="(item, index) in cart.carts" :key="item.id">
                <td>
                  <div class="row">
                    <!-- Col 1 Pic -->
                    <div class="col-12 col-md-3">
                      <div
                        class="bg-cover"
                        :style="
                          `
                              background-image: url(${item.product.imageUrl ||
                                'https://dummyimage.com/600x300/AAE.jpg'});
                              width: 100%;
                              padding-top: 100%;
                            `
                        "
                      ></div>
                    </div>
                    <!-- Col 2 title | price, qty input, delete button-->
                    <div class="col-12 col-md-9 mt-3 mt-md-0 mb-5 mb-md-0">
                      <div>{{ item.product.title }}</div>
                      <div class="d-flex mt-3 align-items-center">
                        <!-- Price -->
                        <div class="text-primary-light">
                          總價 {{ item.total | currency }}
                        </div>
                        <!-- Input, Button -->
                        <div class="d-flex ml-auto">
                          <div class="input-group mr-3" style="width: 130px">
                            <div class="input-group-prepend" id="button-addon1">
                              <button
                                type="button"
                                class="btn btn-outline-primary-light"
                                :class="{
                                  'not-allowed':
                                    item.qty <= 1 || item.qty + tempQty <= 1,
                                }"
                                :disabled="
                                  item.qty <= 1 || item.qty + tempQty <= 1
                                "
                                v-debounce:500ms="
                                  updateCart({
                                    product_id: item.product_id,
                                    qty: item.qty,
                                  })
                                "
                                debounce-events="click"
                                @click="subTempQty(index)"
                              >
                                <font-awesome-icon :icon="['fas', 'minus']" />
                              </button>
                            </div>

                            <div
                              type="text"
                              class="form-control text-center not-allowed"
                              style="width:90px"
                            >
                              <span v-if="tempIndex === index">
                                {{ item.qty + tempQty }}</span
                              >
                              <span v-else>{{ item.qty }}</span>
                            </div>
                            <div class="input-group-append" id="button-addon2">
                              <button
                                class="btn btn-outline-primary-light"
                                type="button"
                                v-debounce:500ms="
                                  updateCart({
                                    product_id: item.product_id,
                                    qty: item.qty,
                                  })
                                "
                                debounce-events="click"
                                @click="addTempQty(index)"
                              >
                                <font-awesome-icon :icon="['fas', 'plus']" />
                              </button>
                            </div>
                          </div>
                          <button
                            class="btn btn-outline-danger"
                            @click="removeCartItem(item.id)"
                          >
                            <font-awesome-icon :icon="['far', 'trash-alt']" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- Col 2 End -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 訂單摘要 -->
        <div class="col-md-4 ">
          <div class="sticky-top ">
            <div class="border ">
              <div class="h2 text-center bg-primary-light text-white py-3">
                訂單摘要
              </div>
              <div class="p-3">
                <table class="table" v-if="cart.total">
                  <tr>
                    <td>小計</td>
                    <td class="text-right">NT{{ cart.total | currency }}</td>
                  </tr>
                  <tr>
                    <td>折扣</td>
                    <td class="text-right">
                      {{ cart.total - cart.final_total }}
                    </td>
                  </tr>
                  <tr class="h4">
                    <td>總計</td>
                    <td class="text-right">
                      NT{{ Math.ceil(cart.final_total) | currency }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <router-link
              v-if="cart.carts.length > 0"
              to="/checkout/order_create"
              class="btn btn-secondary w-100 py-3 h2"
              >填寫訂購者資料</router-link
            >
            <div class="input-group mb-1" v-if="cart.carts.length > 0">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Coupon Code"
                v-model="code"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-primary-light"
                  type="button"
                  id="button-addon2"
                  @click="addCouponCode(code)"
                >
                  套用優惠碼
                </button>
              </div>
            </div>
            <div class="mb-3 text-right text-danger">
              <div>全館五折特價中</div>
              <div>輸入優惠碼：TaiwanCanHelp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      code: '',
    };
  },
  metaInfo: {
    title: '購物清單 | PsyStore',
  },
  computed: {
    ...mapGetters('cart', ['cart', 'tempQty', 'tempIndex']),
    cartsLength() {
      const vm = this;
      if (vm.cart.carts) return vm.cart.carts.length;
      return undefined;
    },
  },
  methods: {
    ...mapActions(['addCouponCode']),
    ...mapActions('cart', [
      'getCart',
      'removeCartItem',
      'updateCart',
      'addTempQty',
      'subTempQty',
    ]),
    cartZeroHandler(length) {
      const vm = this;
      if (length === 0) {
        vm.$router.push({
          name: 'ProductList',
          params: {
            category: '所有商品',
          },
        });
        vm.$store.dispatch('alertMessage/updateMessage', {
          message: '購物清單為空，重新導回商品頁面',
          status: 'warning',
        });
      }
    },
    updateCart(payload) {
      const vm = this;
      return () => {
        vm.$store.dispatch('cart/updateCart', {
          product_id: payload.product_id,
          qty: vm.tempQty,
        });
      };
    },
  },
  watch: {
    cartsLength(val) {
      const vm = this;
      vm.cartZeroHandler(val);
    },
  },
  mounted() {
    const vm = this;
    vm.getCart().then(vm.cartZeroHandler(vm.cartsLength));
  },
};
</script>

<style lang="scss" scoped>
.table td {
  border: none;
}
.table-cart-list td {
  border-bottom: 1px solid #dee2e6;
}
</style>
