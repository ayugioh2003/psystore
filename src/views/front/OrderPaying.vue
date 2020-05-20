<template>
  <div>
    <CheckoutOrder></CheckoutOrder>
  </div>
</template>

<script>
import CheckoutOrder from '@/components/front/CheckoutOrder.vue';

export default {
  metaInfo() {
    return {
      title: '金流付款 | PsyStore',
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
    vm.$store.dispatch('order/setOrderStep', 'paying');
  },
};
</script>
