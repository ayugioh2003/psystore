<template>
  <div class="row mt-5" v-if="order.create_at">
    <div class="col-8 mx-auto">
      <!-- check order {{ $route.params.id }} -->
      <!-- 訂單產品資料 -->
      <table class="table mb-3">
        <thead>
          <tr>
            <th scope="col">品名</th>
            <th scope="col">數量</th>
            <th scope="col">單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <th>{{ item.product.title }}</th>
            <td>{{ item.qty }} {{ item.product.unit }}</td>
            <td class="text-right">{{ item.product.price }}</td>
          </tr>
          <tr>
            <td colspan="2" class="text-right">總計</td>
            <td class="text-right">{{ order.total }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 訂單買家資料 -->
      <table class="table">
        <tbody>
          <tr>
            <th scope="row" width="110">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th scope="row">姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th scope="row">收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th scope="row">收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th scope="row">付款狀態</th>
            <td>
              <span class="text-danger" v-if="!order.is_paid">未付款</span>
              <span class="text-success" v-else>已付款</span>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 付款按鈕 -->
      <div class="text-right">
        <button
          class="btn btn-danger btn-sm"
          v-if="!order.is_paid"
          @click="payOrder($route.params.id)"
        >
          確認付款去
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  metaInfo() {
    return {
      title: '後台結帳測試 | PsyStore',
    };
  },

  computed: {
    ...mapGetters('order', ['order']),
  },
  methods: {
    ...mapActions('order', ['getOrder', 'payOrder']),
  },
  created() {
    const vm = this;
    vm.getOrder(vm.$route.params.id);
  },
};
</script>
