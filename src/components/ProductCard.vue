<template>
  <div class="card h-100 position-relative">
    <div class="position-absolute" style="right: 0">
      <!-- 移出最愛 -->
      <button
        class="btn text-danger"
        @click="removeFavoritesItem(item)"
        v-if="favorites.map((product) => product.id).includes(item.id)"
      >
        <font-awesome-icon :icon="['fas', 'heart']" size="lg" />
      </button>
      <!-- 加到最愛 -->
      <button
        class="btn text-danger"
        @click="addToFavorites(item)"
        v-if="!favorites.map((product) => product.id).includes(item.id)"
      >
        <font-awesome-icon :icon="['far', 'heart']" size="lg" />
      </button>
    </div>
    <img
      :src="item.imageUrl || 'https://dummyimage.com/600x300/AAE.jpg'"
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
        <p class="card-text h5 text-right">限時特價 {{ item.price }} 元</p>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <button
        class="btn btn-outline-secondary"
        @click="openProductDetail(item)"
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
            status.is_cartbtn_adding && status.which_cartbtn_adding == index
          "
        />
        加到購物車
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    item: Object,
    index: Number,
  },
  data() {
    return {
      status: {
        is_cartbtn_adding: false,
        which_cartbtn_adding: 0,
      },
    };
  },
  computed: {
    ...mapGetters('product', ['favorites']),
  },
  methods: {
    ...mapActions('product', [
      'addToFavorites',
      'removeFavoritesItem',
      'isFavorite',
    ]),
    addtoCart(item) {
      const vm = this;
      vm.status.is_cartbtn_adding = true;

      vm.$store.dispatch('cart/addtoCart', item).then((res) => {
        vm.status.is_cartbtn_adding = false;
        // console.log('after');
        // console.log(res.data.message);
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
      vm.$router.push('/refresh');
    },
  },
};
</script>
