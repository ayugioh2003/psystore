<template>
  <div>
    <h1 class="mt-3 mb-4">測試產品頁面</h1>
    <!-- 後台測試產品頁面 -->
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 mb-3"
          v-for="item in products"
          :key="item.key"
        >
          <div class="card">
            <img
              class="card-img-top"
              src="http://fakeimg.pl/500x300/#393?font=lobster"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 後台測試購物車 -->
    <hr />
    <h2>測試購物車清單</h2>

    <!-- 後台測試結帳表單 -->
    <h2>測試結帳表單</h2>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch('getProducts', 1).then(() => {
      console.log(this.$store.state.products);
    });
  },
};
</script>

<style lang="scss"></style>
