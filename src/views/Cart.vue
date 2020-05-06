<template>
  <div>
    <div
      class="banner bg-cover"
      style="background-image: url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80);
      "
    ></div>
    <div class="container my-5">
      <div class="row position-relative">
        <!-- 購物清單 -->
        <div class="col-md-8">
          <h2 class="bg-light text-center p-3">購物清單確認</h2>

          <div class="text-center" v-if="cart.carts.length === 0">
            購物清單內尚無商品，歡迎繼續
            <router-link class="" :to="{ name: 'ProductList' }"
              ><u>前往採購</u></router-link
            >
          </div>

          <table class="table table-cart-list">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <div
                    class="bg-cover"
                    :style="
                      `
                      background-image: url(${item.product.imageUrl ||
                        'https://dummyimage.com/600x300/AAE.jpg'});
                      width: 100px;
                      height: 100px;
                    `
                    "
                  ></div>
                </td>
                <td class="align-middle">
                  <div>
                    {{ item.product.title }} |
                    {{ item.product.price | currency }}
                  </div>
                </td>
                <td class="align-middle">
                  {{ item.qty }}
                  {{ item.product.unit }}
                </td>
                <td class="align-middle text-right">
                  {{ item.total | currency }}
                </td>
                <td class="align-middle">
                  <button
                    class="btn btn-outline-danger"
                    @click="removeCartItem(item.id)"
                  >
                    <font-awesome-icon :icon="['far', 'trash-alt']" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 訂單摘要 -->
        <div class="col-md-4 ">
          <div class="sticky-top ">
            <div class="border ">
              <div class="h2 text-center bg-light py-3">訂單摘要</div>
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
              class="btn btn-warning w-100 py-3 h2"
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
                  class="btn btn-outline-secondary"
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
              <div>輸入優惠碼：hope_disease_disappear</div>
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
    ...mapGetters('cart', ['cart']),
  },
  methods: {
    ...mapActions(['addCouponCode']),
    ...mapActions('cart', ['getCart', 'removeCartItem']),
  },
  mounted() {
    this.getCart();
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
