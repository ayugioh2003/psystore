<template>
  <div>
    <div class="container my-5">
      <h2 class="text-center mb-3">訂單明細</h2>

      <div class="row justify-content-center">
        <div class="col-lg-8">
          <table class="table" v-if="order.user">
            <tbody>
              <tr>
                <td class="row">
                  <div class="col-md-2 mb-1 mb-md-0">訂單編號</div>
                  <div class="col-md-10 text-nowrap">{{ order.id }}</div>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-md-2 mb-1 mb-md-0">訂購資料</div>
                  <div class="d-none d-md-block col-md-10">
                    <div>姓名：{{ order.user.name }}</div>
                    <div>信箱：{{ order.user.email }}</div>
                    <div>電話：{{ order.user.tel }}</div>
                    <div>地址：{{ order.user.address }}</div>
                  </div>
                  <ul class="d-block d-md-none col-md-10 ml-4">
                    <li>姓名：{{ order.user.name }}</li>
                    <li>信箱：{{ order.user.email }}</li>
                    <li>電話：{{ order.user.tel }}</li>
                    <li>地址：{{ order.user.address }}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-md-2 mb-1 mb-md-0">訂購項目</div>
                  <div class="d-none d-md-block col-md-10">
                    <div v-for="item in order.products" :key="item.id">
                      {{ item.product.title }} * {{ item.qty }}
                      {{ item.product.unit }}
                    </div>
                  </div>
                  <ul class="d-block d-md-none col-md-10 ml-4">
                    <li v-for="item in order.products" :key="item.id">
                      {{ item.product.title }} * {{ item.qty }}
                      {{ item.product.unit }}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td class="row">
                  <div class="col-md-2">結帳金額</div>
                  <div class="col-md-10">{{ order.total }} 元</div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="row">
                  <div class="col-md-2">付款狀態</div>
                  <div class="col-md-10">
                    <div v-if="order.is_paid" class="text-success">
                      付款成功
                    </div>
                    <div v-else class="text-danger">
                      尚未付款
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-if="!order.is_paid">
                <td class="pt-3">
                  <button
                    class="btn btn-secondary btn-lg btn-block"
                    @click="payOrder"
                  >
                    前往付款
                  </button>
                </td>
              </tr>
              <tr v-else>
                <td class="pt-3">
                  <router-link
                    to="/products"
                    class="btn btn-secondary btn-lg btn-block"
                  >
                    繼續購物</router-link
                  >
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('order', ['order']),
  },
  methods: {
    ...mapActions('cart', ['getCart']),
    ...mapActions('order', ['setOrderStep', 'getOrder', 'payOrder']),
    payOrder() {
      const vm = this;
      const { id } = vm.$route.params;

      vm.$store.dispatch('order/payOrder', id).then(() => {
        vm.setOrderStep('paid');
        vm.$router.push({ name: 'OrderPaid' });
      });
    },
  },
  mounted() {
    const vm = this;
    vm.$store.dispatch('setIsLoading', true, { root: true });
    vm.getCart().then(() => {
      vm.getOrder(vm.$route.params.id).then(() => {
        const isPaidPage = vm.$route.name === 'OrderPaid';

        if (!isPaidPage && vm.order.is_paid) {
          vm.$router.push({ name: 'OrderPaid' });
        }
        if (isPaidPage && !vm.order.is_paid) {
          vm.$router.push({ name: 'OrderPaying' });
        }

        vm.$store.dispatch('setIsLoading', false, { root: true });
      });
    });
  },
};
</script>
