<template>
  <div>
    <div
      class="bg-cover banner"
      style="background-image: url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80);
      "
    ></div>

    <div class="container">
      <h2 class="my-5 text-center">訂單列表</h2>
      <div class="table-responsive">
        <table class="table" v-if="orders">
          <thead>
            <tr>
              <th scope="col" style="min-width: 120px">訂單時間</th>
              <th scope="col">訂單編號</th>
              <th scope="col" style="min-width: 300px;">訂單商品</th>
              <th scope="col" style="min-width: 130px">是否付款</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.create_at | date }}</td>
              <td>{{ order.id }}</td>
              <td>
                <div v-for="item in order.products" :key="item.id">
                  {{ item.product.title }} * {{ item.qty
                  }}{{ item.product.unit }}
                </div>
              </td>
              <td>
                <div v-if="order.is_paid" class="text-success">已經付款</div>
                <div v-else>
                  <router-link
                    :to="{
                      name: 'OrderPaying',
                      params: { id: order.id },
                    }"
                    class="btn btn-danger"
                    >前往付款</router-link
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container">
      <Pagination
        :pagination="pagination"
        @change-page="getOrders"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  metaInfo() {
    return {
      title: '訂單列表 | PsyStore',
    };
  },
  components: {
    Pagination,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('order', ['orders', 'pagination']),
  },
  methods: {
    ...mapActions(['setIsLoading']),
    getOrders(page = 1) {
      const vm = this;
      vm.setIsLoading(true);
      vm.$store.dispatch('order/getOrders', page).then(() => {
        vm.setIsLoading(false);
      });
    },
  },
  mounted() {
    const vm = this;
    vm.getOrders(1);
  },
};
</script>

<style></style>
