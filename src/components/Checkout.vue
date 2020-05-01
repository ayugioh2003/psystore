<template>
  <div>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div
          class="col-md-2 text-center border py-2 mx-2 my-2"
          :class="{ active: orderStep == 'create' }"
        >
          1 建立訂單
        </div>
        <div
          class="col-md-2 text-center border py-2 mx-2 my-2"
          :class="{ active: orderStep == 'paying' }"
        >
          2 金流付款
        </div>
        <div
          class="col-md-2 text-center border py-2 mx-2 my-2"
          :class="{ active: orderStep == 'paid' }"
        >
          3 結帳成功
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('order', ['orderStep']),
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: $warning;
}
</style>
