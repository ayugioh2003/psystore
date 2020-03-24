<template>
  <div>
    <h1 class="mt-3 mb-4">測試產品頁面</h1>
    <!-- 後台測試產品頁面 -->
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 mb-3"
          v-for="item in products"
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
              <button class="btn btn-outline-danger">加到購物車</button>
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
    return {};
  },
  computed: {
    ...mapGetters({
      products: 'product/products',
      pagination: 'product/pagination',
    }),
  },
  methods: {
    ...mapActions({
      getProducts: 'product/getProducts',
    }),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss"></style>
