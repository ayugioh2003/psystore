<template>
  <div id="app">
    <AlertMessage></AlertMessage>
    <Loading :active.sync="isLoading"></Loading>
    <router-view />
  </div>
</template>

<script>
import AlertMessage from '@/components/AlertMessage.vue';

export default {
  components: {
    AlertMessage,
  },
  data() {
    return {};
  },
  computed: {
    isLoading() {
      const vm = this;
      return vm.$store.state.isLoading;
    },
  },
};
</script>

<style lang="scss">
@import './assets/all';
</style>
