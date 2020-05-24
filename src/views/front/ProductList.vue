<template>
  <div>
    <!-- Banner -->
    <div
      class="banner bg-cover"
      style="  background-image: url(https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80);"
    ></div>

    <!-- Product list -->
    <div class="container mt-5">
      <div class="row ">
        <!-- Product Menu -->
        <div class="col-md-3 mb-5">
          <div class="list-group sticky-top">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="list-group-item list-group-item-action"
              :class="{ active: routeCategory == category }"
              @click="
                () => {
                  routeCategory = category;
                }
              "
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Porduct sub list -->
        <div class="col-md-9">
          <div class="h2 pb-3">{{ routeCategory }}</div>
          <div class="row">
            <!-- product cards -->
            <div
              class="col-md-6 col-lg-4 mb-3 mb-md-5"
              v-for="(item, index) in filterProducts"
              :key="item.id"
            >
              <ProductCard
                :item="item"
                :index="index"
                :imageHeight="250"
              ></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard,
  },
  metaInfo() {
    return {
      title: `${this.$route.params.category}-商品列表 | PsyStore`,
    };
  },
  data() {
    return {
      // routeCategory: '所有商品',
      status: {
        is_cartbtn_adding: false,
        which_cartbtn_adding: 0,
      },
    };
  },
  computed: {
    ...mapGetters('product', ['products', 'pagination', 'favorites']),
    isEnabledProducts() {
      const vm = this;
      return vm.products.filter(function ifIsEnabled(product) {
        return product.is_enabled === 1;
      });
    },
    filterProducts() {
      const vm = this;
      if (vm.routeCategory === '所有商品') {
        return vm.isEnabledProducts;
      }
      if (vm.routeCategory === '我的最愛') {
        return vm.favorites;
      }

      const array = vm.isEnabledProducts.filter(function ifCategory(product) {
        return product.category === vm.routeCategory;
      });
      return array;
    },
    categories() {
      const vm = this;
      let categories = vm.isEnabledProducts.map((product) => product.category);
      categories = [...new Set(categories)];
      categories = ['所有商品', ...categories, '我的最愛'];
      return categories;
    },
    routeCategory: {
      get() {
        const vm = this;
        return vm.$route.params.category || '所有商品';
      },
      set(newValue) {
        const vm = this;
        if (vm.$route.params.category === newValue) return;

        vm.$router.push({
          name: 'ProductList',
          params: {
            category: newValue,
          },
        });
      },
    },
  },
  methods: {
    ...mapActions('product', [
      'getProductsAll',
      'getFavorites',
      'addToFavorites',
      'removeFavoritesItem',
      'isFavorite',
    ]),
    addtoCart(item) {
      const vm = this;
      vm.status.is_cartbtn_adding = true;

      vm.$store.dispatch('cart/addtoCart', item).then((res) => {
        vm.status.is_cartbtn_adding = false;
        vm.$store.dispatch('alertMessage/updateMessage', {
          message: `${res.data.message}`,
          status: res.data.success ? 'success' : 'warning',
        });
      });
    },
    openProductDetail(item) {
      const vm = this;
      vm.$router.push({
        name: 'productDetail',
        params: { id: item.id },
      });
    },
  },
  mounted() {
    const vm = this;
    vm.getProductsAll();
    vm.getFavorites();
  },
};
</script>
