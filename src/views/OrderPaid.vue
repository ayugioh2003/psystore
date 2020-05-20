<template>
  <div>
    <CheckoutOrder></CheckoutOrder>
  </div>
</template>

<script>
import CheckoutOrder from '@/components/CheckoutOrder.vue';

export default {
  metaInfo() {
    return {
      title: '結帳成功 | PsyStore',
    };
  },
  data() {
    return {};
  },
  components: {
    CheckoutOrder,
  },
  mounted() {
    const vm = this;
    vm.$store.dispatch('order/setOrderStep', 'paid');
  },
};
</script>
