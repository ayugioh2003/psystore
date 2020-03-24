<template>
  <div>
    <h1 class="mt-3 mb-4">測試產品頁面</h1>
    <!-- 後台測試產品頁面 -->
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 mb-3"
          v-for="(item, index) in products"
          :key="item.key"
        >
          <div class="card h-100">
            <img
              class="card-img-top"
              :src="
                item.imageUrl
                  ? item.imageUrl
                  : 'http://fakeimg.pl/500x300/#393?font=lobster'
              "
              alt="Card image cap"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-item-start">
                <h5 class="card-title">{{ item.title }}</h5>
                <div>
                  <span class="badge badge-pill badge-info">
                    {{ item.category }}
                  </span>
                </div>
              </div>
              <p class="card-text text-secondary">
                {{ item.description }}
              </p>
              <div class="d-flex justify-content-between">
                <p class="card-text text-decoration-line-through">
                  <del>原價 {{ item.origin_price }}</del>
                </p>
                <p class="card-text h5 text-right">
                  限時特價 {{ item.price }} 元
                </p>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <button class="btn btn-outline-secondary">查看更多</button>
              <button
                class="btn btn-outline-danger"
                @click="addtoCart({ product_id: item.id, qty: 1 })"
                @click.prevent="status.which_cartbtn_adding = index"
              >
                <font-awesome-icon
                  icon="spinner"
                  spin
                  v-if="
                    status.is_cartbtn_adding &&
                      status.which_cartbtn_adding == index
                  "
                />
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 後台測試產品分頁列 -->
    <Pagination
      :pagination="pagination"
      @change-page="getProducts"
    ></Pagination>

    <!-- 後台測試購物車 -->
    <hr />
    <h2>測試購物車清單</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">品名</th>
          <th scope="col">數量</th>
          <th scope="col">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.id">
          <th></th>
          <td>{{ item.product.title }}</td>
          <td>{{ item.qty }} 個</td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 後台測試結帳表單 -->
    <h2>測試結帳表單</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      status: {
        which_cartbtn_adding: NaN,
        is_cartbtn_adding: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      products: 'product/products',
      pagination: 'product/pagination',
      cart: 'cart/cart',
    }),
  },
  methods: {
    ...mapActions({
      getProducts: 'product/getProducts',
      getCart: 'cart/getCart',
      addtoCart: 'cart/addtoCart',
    }),
    addtoCart(item) {
      const vm = this;
      vm.status.is_cartbtn_adding = true;

      this.$store.dispatch('cart/addtoCart', item).then(() => {
        vm.status.is_cartbtn_adding = false;
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style lang="scss"></style>
