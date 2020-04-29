<template>
  <div>
    <!-- Banner -->
    <div class="banner bg-cover"></div>

    <!-- Product detail -->
    <div class="container mt-5 mb-5">
      <!-- Product detail -->
      <div class="row">
        <!-- Product picture -->
        <div class="col-md-5 ">
          <img
            :src="product.imageUrl || 'https://dummyimage.com/600x300/AAE.jpg'"
            class="card-img-top"
            alt="..."
          />
        </div>
        <!-- Product data -->
        <div class="col-md-7">
          <!-- title -->
          <div class="d-flex product-head bg-light p-3 mb-3 mt-3 mt-md-0">
            <div class="mr-3">
              <span class="badge badge-pill badge-info">
                {{ product.category }}
              </span>
            </div>
            <h5 class="card-title m-0">{{ product.title }}</h5>
          </div>
          <!-- data -->
          <div class="p-3">
            <div class="d-flex">
              <div class="text-decoration-line-through mr-3">
                <del>原價 {{ product.origin_price }}</del>
              </div>
              <div class="h5 text-success">限時特價 {{ product.price }} 元</div>
            </div>
            <div class="text-right mb-5">
              小計 {{ product.price * productQty }} 元
            </div>
            <div class="form-group">
              <select class="form-control" v-model="productQty">
                <option value="0" disabled selected>請選擇數量</option>
                <option :value="num" v-for="num in 10" :key="num">
                  選購 {{ num }} {{ product.unit }}
                </option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-primary w-100"
              :class="{ disabled: productQty === 0 }"
              @click="addtoCart({ product_id: product.id, qty: productQty })"
            >
              <font-awesome-icon
                icon="spinner"
                spin
                v-if="status.is_cartbtn_adding"
              />
              加到購物車
            </button>
          </div>
        </div>
      </div>
      <!-- Product content -->
      <div class="row" v-if="product.description && product.content">
        <div class="col-12"><hr /></div>
        <div class="col-md-8 mx-auto">
          <div v-if="product.description" class="mb-4">
            <h5>產品描述</h5>
            <p class="card-text ">
              {{ product.description }}
            </p>
          </div>
          <div v-if="product.content">
            <h5>說明內容</h5>
            <p class="card-text ">
              {{ product.content }}
            </p>
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
      productQty: 0,
      status: {
        is_cartbtn_adding: false,
      },
    };
  },
  computed: {
    ...mapGetters('product', ['product']),
    routeId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions('product', ['getProduct']),
    addtoCart(item) {
      const vm = this;
      this.status.is_cartbtn_adding = true;

      vm.$store.dispatch('cart/addtoCart', item).then((res) => {
        vm.status.is_cartbtn_adding = false;
        console.log('message', res.data.message);

        this.$store.dispatch('alertMessage/updateMessage', {
          message: `${res.data.message}`,
          status: res.data.success ? 'success' : 'warning',
        });
      });
    },
    // ...mapActions('cart', ['addtoCart']),
  },
  mounted() {
    this.getProduct(this.routeId);
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
