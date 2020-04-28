<template>
  <div>
    <div class="container">次目錄 {{ routeId }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    routeId() {
      return this.$route.params.id;
    },
  },
};
</script>
