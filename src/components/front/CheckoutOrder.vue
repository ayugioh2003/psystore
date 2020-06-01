<template>
  <div>
    <div class="container my-5">
      <h2 class="text-center mb-3">訂單明細</h2>

      <div class="row justify-content-center">
        <div class="col-md-6">
          <table class="table" v-if="order.user">
            <tbody>
              <tr>
                <td>訂單編號</td>
                <td>{{ order.id }}</td>
              </tr>
              <tr>
                <td>訂購資料</td>
                <td>
                  <div>姓名：{{ order.user.name }}</div>
                  <div>信箱：{{ order.user.email }}</div>
                  <div>電話：{{ order.user.tel }}</div>
                  <div>地址：{{ order.user.address }}</div>
                </td>
              </tr>
              <tr>
                <td>訂購項目</td>
                <td>
                  <div v-for="item in order.products" :key="item.id">
                    {{ item.product.title }} * {{ item.qty }}
                    {{ item.product.unit }}
                  </div>
                </td>
              </tr>
              <tr>
                <td>結帳金額</td>
                <td>{{ order.total }} 元</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>付款狀態</td>
                <td>
                  <div v-if="order.is_paid" class="text-success">付款成功</div>
                  <div v-else class="text-danger">
                    尚未付款
                  </div>
                </td>
              </tr>
              <tr v-if="!order.is_paid">
                <td colspan="2" class="pt-3">
                  <button class="btn btn-secondary btn-lg btn-block" @click="payOrder">
                    前往付款
                  </button>
                </td>
              </tr>
              <tr v-else>
                <td colspan="2" class="pt-3">
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
