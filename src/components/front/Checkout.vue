<template>
  <div>
    <div
      class="bg-cover banner"
      style="background-image: url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80);
      "
    >
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div
            class="col-md-2 bg-white text-center border py-2 mx-2 my-2"
            :class="{ active: orderStep == 'create' }"
          >
            1 建立訂單
          </div>
          <div
            class="col-md-2 bg-white text-center border py-2 mx-2 my-2"
            :class="{ active: orderStep == 'paying' }"
          >
            2 金流付款
          </div>
          <div
            class="col-md-2 bg-white text-center border py-2 mx-2 my-2"
            :class="{ active: orderStep == 'paid' }"
          >
            3 結帳成功
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('order', ['orderStep']),
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: 40vh;
  @include media-breakpoint-down(sm) {
    height: auto;
    padding: 3rem;
  }
}

.active {
  background-color: $secondary !important;
}
.table td {
  border: none;
}
</style>
