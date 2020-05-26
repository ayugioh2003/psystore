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
    <div
      class="card-image w-100"
      :style="{ height: `${imageHeight}px` }"
      @click="openProductDetail(item)"
    >
      <img
        :src="item.imageUrl || 'https://dummyimage.com/600x300/AAE.jpg'"
        class="w-100 h-100"
        style="object-fit: cover; object-position: center;"
        :alt="item.content"
      />
    </div>
    <div class="card-body" @click="openProductDetail(item)">
      <div class="d-flex justify-content-between align-item-start">
        <h5 class="card-title">{{ item.title }}</h5>
        <div>
          <span class="badge badge-pill badge-primary-light">
            {{ item.category }}
          </span>
        </div>
      </div>
      <p class="card-text text-primary-light">
        {{ item.description }}
      </p>
      <div class="d-flex justify-content-between">
        <p class="card-text text-decoration-line-through">
          <del>原價 {{ item.origin_price }}</del>
        </p>
        <p class="card-text h5 text-right text-danger">
          特價 {{ item.price }} 元
        </p>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <button
        class="btn btn-outline-primary-light"
        @click="openProductDetail(item)"
      >
        查看更多
      </button>
      <button
        class="btn btn-primary"
        :class="{ 'not-allowed': status.is_cartbtn_adding}"
        :disabled="status.is_cartbtn_adding"
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
    imageHeight: Number,
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
};
</script>

<style lang="scss" scoped>
.card {
  transition: all 0.5s;
  &:hover {
    box-shadow: 2px 2px 5px 1px $primary-light;
    transform: translateY(-3px);
  }

  &-image:hover {
    cursor: pointer;
  }
  &-body:hover {
    cursor: pointer;
  }
}
</style>
