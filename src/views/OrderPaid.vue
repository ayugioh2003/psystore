<template>
  <div>
    <CheckoutOrder></CheckoutOrder>
  </div>
</template>

<script>
import CheckoutOrder from '@/components/CheckoutOrder.vue';

export default {
  components: {
    CheckoutOrder,
  },
  mounted() {
    const vm = this;
    vm.$store.dispatch('order/setOrderStep', 'paid');
  },
};
</script>
