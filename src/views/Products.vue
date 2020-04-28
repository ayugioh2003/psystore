<template>
  <div>
    <!-- Banner -->
    <div class="banner bg-cover"></div>
    <!-- Product list -->
    <div class="container">
      <h2 class="text-center">商品列表</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url(https://images.unsplash.com/photo-1493932484895-752d1471eab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80);
  height: 40vh;
  @include media-breakpoint-down(sm) {
    height: 20vh;
  }
}
</style>
