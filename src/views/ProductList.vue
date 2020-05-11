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
              <ProductCard :item="item" :index="index"></ProductCard>
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
      return this.products.filter(function ifIsEnabled(product) {
        return product.is_enabled === 1;
      });
    },
    filterProducts() {
      const vm = this;
      if (this.routeCategory === '所有商品') {
        return vm.isEnabledProducts;
        // return this.products;
      }

      if (this.routeCategory === '我的最愛') {
        return vm.favorites;
        // return this.products;
      }

      const array = vm.isEnabledProducts.filter(function ifCategory(product) {
        return product.category === vm.routeCategory;
      });
      return array;
    },
    categories() {
      let categories = this.isEnabledProducts.map(
        (product) => product.category,
      );
      categories = [...new Set(categories)];
      console.log(categories);
      categories = ['所有商品', ...categories, '我的最愛'];
      console.log(categories);
      return categories;
    },
    routeCategory: {
      get() {
        return this.$route.params.category || '所有商品';
      },
      set(newValue) {
        if (this.$route.params.category === newValue) return;
        console.log('change category');
        this.$router.push({
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
      'getProducts',
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
        console.log('after');

        console.log(res.data.message);
        this.$store.dispatch('alertMessage/updateMessage', {
          message: `${res.data.message}`,
          status: res.data.success ? 'success' : 'warning',
        });
      });
    },
    openProductDetail(item) {
      this.$router.push({
        name: 'productDetail',
        params: { id: item.id },
      });
    },
  },
  mounted() {
    this.getProductsAll();
    console.log(this.$route.params.category);

    this.getFavorites();
  },
};
</script>

<style lang="scss" scoped></style>
