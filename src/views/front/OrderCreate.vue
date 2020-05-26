<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-8 text-center" v-if="cart.carts.length === 0">
          購物清單內尚無商品，歡迎繼續
          <router-link class="" :to="{ name: 'ProductList' }"
            ><u>前往採購</u></router-link
          >
        </div>
        <div class="col-md-8" v-else>
          <div class="h2 text-center p-3 bg-primary text-white">
            填寫訂購人資料
          </div>
          <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors }">
                  <label for="email">Email * </label>
                  <input
                    name="Email"
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="form.user.email"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors }">
                  <label for="name">收件人姓名 * </label>
                  <input
                    name="收件人姓名"
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="form.user.name"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors }">
                  <label for="tel">收件人電話 * </label>
                  <input
                    name="收件人電話"
                    type="tel"
                    class="form-control"
                    id="tel"
                    v-model="form.user.tel"
                  />

                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required" v-slot="{ errors }">
                  <label for="address">收件人地址 * </label>
                  <input
                    name="收件人地址"
                    type="text"
                    class="form-control"
                    id="address"
                    v-model="form.user.address"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="message">留言</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  v-model="form.message"
                ></textarea>
              </div>

              <div class="text-right">
                <button
                  type="submit"
                  class="btn btn-secondary w-100 h2 py-3"
                  :class="{'not-allowed': invalid}"
                  :disabled="invalid"
                >
                  建立訂單
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>

        <div class="col-md-4 d-none d-md-block">
          <div class=" mb-3">
            <div class="border ">
              <div class="h2 text-center text-white bg-primary-light py-3">
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
          </div>

          <div>
            <div class="border ">
              <div class="h2 text-center text-white bg-primary-light py-3">
                購物清單
              </div>
              <div class="p-3">
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
                          {{ item.product.title }} ({{ item.qty }}) <br />
                          NT{{ item.total | currency }}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- col-md-4 end -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  metaInfo() {
    return {
      title: '建立訂單 | PsyStore',
    };
  },
  data() {
    return {
      couponCode: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    ...mapGetters('cart', ['cart']),
    cartsLength() {
      const vm = this;
      if (vm.cart.carts) return vm.cart.carts.length;
      return undefined;
    },
  },
  methods: {
    ...mapActions(['addCouponCode', 'setIsLoading']),
    ...mapActions('cart', ['getCart', 'addtoCart', 'removeCartItem']),
    ...mapActions('order', ['createOrder', 'setOrderStep']),
    onSubmit() {
      const vm = this;
      vm.setIsLoading(true);
      vm.createOrder(vm.form).then((res) => {
        vm.setIsLoading(false);
        vm.$router.push(`/checkout/order_paying/${res.data.orderId}`);
      });
    },
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
    vm.setOrderStep('create');
  },
};
</script>

<style lang="scss" scoped>
.table th,
.table td {
  border: 0;
}
</style>
