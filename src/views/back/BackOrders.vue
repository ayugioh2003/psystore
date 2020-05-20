<template>
  <div>
    <!-- Table -->
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">訂單時間</th>
          <th scope="col">買家資訊</th>
          <th scope="col">訂單商品</th>
          <th scope="col">是否付款</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <th>{{ order.create_at | date }}</th>
          <td>{{ order.user.email }}</td>
          <td>
            <div v-for="item in order.products" :key="item.id">
              {{ item.product.title }}: {{ item.product.num }}
              {{ item.product.unit }}
            </div>
          </td>
          <td :class="{ 'text-light': !order.is_paid }">
            {{ order.is_paid ? '已付款' : '未付款' }}
          </td>
          <td>
            <button class="btn btn-primary" @click="openModal(order)">
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pagination="pagination" @change-page="getOrdersA"></Pagination>
    <!-- modal -->
    <div
      class="modal fade modal-lg"
      tabindex="-1"
      role="dialog"
      id="orderModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title bg-dark">修改訂單</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>訂單 {{ tempOrder.id }}</div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="defaultCheck1"
                v-model="tempOrder.is_paid"
              />
              <label class="form-check-label" for="defaultCheck1">
                是否付款
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateOrder">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';

export default {
  metaInfo() {
    return {
      title: '後台訂單管理 | PsyStore',
    };
  },

  components: {
    Pagination,
  },
  data() {
    return {
      orders: {},
      tempOrder: {},
      pagination: {},
    };
  },
  methods: {
    getOrdersA(page = 1) {
      const vm = this;
      const API = `${process.env.VUE_APP_API}/admin/orders?page=${page}`;
      vm.$store.commit('SET_ISLOADING', true);

      vm.$http
        .get(API)
        .then((res) => res.data)
        .then((data) => {
          vm.orders = data.orders;
          vm.pagination = data.pagination;
          vm.$store.commit('SET_ISLOADING', false);
        });
    },
    updateOrder() {
      const vm = this;
      const API = `${process.env.VUE_APP_API}/admin/order/${vm.tempOrder.id}`;
      const order = { data: vm.tempOrder };
      vm.$store.commit('SET_ISLOADING', true);

      vm.$http.put(API, order).then((res) => {
        console.log(res);
        $('#orderModal').modal('hide');
        vm.getOrdersA();
        vm.$store.commit('SET_ISLOADING', false);
      });
    },
    openModal(order) {
      const vm = this;
      vm.tempOrder = { ...order };
      $('#orderModal').modal('show');
    },
  },
  created() {
    const vm = this;
    vm.getOrdersA();
  },
};
</script>
