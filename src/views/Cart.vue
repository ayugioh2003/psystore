<template>
  <div>
    <div
      class="banner bg-cover"
      style="background-image: url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80);
      "
    ></div>
    <div class="container mt-3 mb-3">
      <div class="row position-relative">
        <!-- 購物清單 -->
        <div class="col-md-8">
          <h2 class="bg-light text-center p-3">購物清單確認</h2>

          <table class="table table-cart-list">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <div
                    class="bg-cover"
                    :style="
                      `
                      background-image: url(${item.product.imageUrl || 'https://dummyimage.com/600x300/AAE.jpg'});
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
                <td class="align-middle">{{ item.total | currency }}</td>
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
                <table class="table">
                  <tr>
                    <td>小記</td>
                    <td class="text-right">NT{{ cart.total | currency }}</td>
                  </tr>
                  <tr>
                    <td>折扣</td>
                    <td class="text-right">
                      {{ cart.total - cart.final_total }}
                    </td>
                  </tr>
                  <tr class="h3">
                    <td>總計</td>
                    <td class="text-right">
                      NT{{ cart.final_total | currency }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <a href="#" class="btn btn-warning w-100 py-3 h2">結帳</a>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Coupon Code"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  套用優惠碼
                </button>
              </div>
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
  computed: {
    ...mapGetters('cart', ['cart']),
  },
  methods: {
    ...mapActions('cart', ['getCart', 'removeCartItem']),
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style lang="scss">
.table td {
  border: none;
}
.table-cart-list td {
  border-bottom: 1px solid #dee2e6;
}
</style>
