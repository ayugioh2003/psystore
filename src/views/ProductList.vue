<template>
  <div>
    <!-- Banner -->
    <div class="banner bg-cover"></div>

    <!-- Product list -->
    <div class="container pt-5">
      <div class="row ">
        <!-- Product Menu -->
        <div class="col-3 ">
          <div class="list-group sticky-top">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="list-group-item list-group-item-action"
              :class="{ active: status.category_now == category }"
              @click="
                () => {
                  status.category_now = category;
                }
              "
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Porduct sub list -->
        <div class="col-9">
          <div class="h2 pb-3">所有商品</div>
          <div class="row">
            <!-- product cards -->
            <div
              class="col-md-4 mb-3 mb-md-5 "
              v-for="item in filterProducts"
              :key="item.id"
            >
              <div class="card h-100">
                <img
                  :src="
                    item.imageUrl || 'https://dummyimage.com/600x300/AAE.jpg'
                  "
                  class="card-img-top"
                  alt="..."
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
                  <button
                    class="btn btn-outline-secondary"
                    @click="openProductModal(item)"
                  >
                    查看更多
                  </button>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      status: {
        category_now: '所有商品',
        is_cartbtn_adding: false,
        which_cartbtn_adding: 0,
      },
    };
  },
  computed: {
    ...mapGetters('product', ['products', 'pagination']),
    filterProducts() {
      const vm = this;
      if (this.status.category_now === '所有商品') {
        return this.products;
      }

      const array = this.products.filter(function(product) {
        return product.category === vm.status.category_now;
      });
      return array;
    },
    categories() {
      let categories = this.products.map((product) => product.category);
      categories = [...new Set(categories)];
      console.log(categories);
      categories = ['所有商品', ...categories];
      console.log(categories);
      return categories;
    },
  },
  methods: {
    ...mapActions('product', ['getProducts', 'getProductsAll']),
  },
  mounted() {
    this.getProductsAll();
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url(https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80);
  height: 40vh;
  @include media-breakpoint-down(sm) {
    height: 20vh;
  }
}
</style>
