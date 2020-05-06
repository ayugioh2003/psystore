<template>
  <div>
    <!-- Navbar -->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <router-link to="/" exact class="navbar-brand">PsyStore</router-link>

        <div
          class="dropdown order-lg-1 pl-4 pr-1"
          v-if="cart.carts"
          style="z-index: 99999;"
        >
          <button
            class="btn"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <font-awesome-icon icon="shopping-cart" />
            {{ cart.carts.length }}
          </button>

          <div
            v-if="cart.carts.length == 0"
            class="dropdown-menu p-3 dropdown-menu-right "
            style="min-width: 400px"
          >
            尚未選購商品。歡迎繼續採購 ~
          </div>

          <div
            v-if="cart.carts.length > 0"
            class="dropdown-menu p-3 dropdown-menu-right "
            style="min-width: 400px"
            aria-labelledby="dropdownMenu2"
          >
            <div class="h2 text-center mb-4">購物車清單</div>
            <form>
              <div class="table-responsive-md">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">商品</th>
                      <th scope="col">數量</th>
                      <th scope="col">金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in cart.carts" :key="item.id">
                      <td class="text-danger">
                        <button
                          class="btn btn-outline-danger btn-sm"
                          @click.prevent="removeCartItem(item.id)"
                        >
                          <font-awesome-icon :icon="['far', 'trash-alt']" />
                        </button>
                      </td>
                      <td>{{ item.product.title }}</td>
                      <td class="text-right">
                        {{ item.qty }} {{ item.product.unit }}
                      </td>
                      <td class="text-right">
                        {{ item.product.price }}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="4">
                        <div class="text-right text-success h5">
                          小計 NT{{ cart.total | currency }}
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </form>

            <router-link to="/cart" class="btn btn-primary w-100">
              <font-awesome-icon icon="shopping-cart" /> 結帳去
            </router-link>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item px-4">
              <router-link to="/" class="nav-link">首頁</router-link>
            </li>
            <li class="nav-item px-4">
              <router-link to="/products" class="nav-link">商品</router-link>
            </li>
            <li class="nav-item px-4">
              <router-link to="/orders" class="nav-link">訂單</router-link>
            </li>
            <li class="nav-item px-4">
              <router-link to="/login" class="nav-link">登入</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- Content -->
    <router-view />

    <!-- subscribe -->
    <section class="bg-primary py-md-4 ">
      <div class="container px-70">
        <div class="row">
          <div class="col-md-6 py-3 py-md-0 d-flex align-items-center">
            <span class="text-white h4">訂閱起來！</span>
          </div>

          <div class="col-md-6 pb-3 pb-md-0">
            <div class="input-group input-group-lg round-0">
              <div class="input-group-prepend">
                <span class="input-group-text rounded-0 bg-white border-0 ">
                  <font-awesome-icon
                    icon="envelope"
                    class="text-primary"
                  ></font-awesome-icon>
                </span>
              </div>
              <input
                type="email"
                class="sub-input form-control border-0"
                aria-label="Amount (to the nearest dollar)"
              />
              <div class="input-group-append ">
                <button
                  class="input-group-text rounded-0 bg-accent d-inline-block"
                >
                  <font-awesome-icon icon="arrow-right"></font-awesome-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- subscribe END -->

    <!-- footer -->
    <footer class="bg-third py-4 container text-primary">
      <div class="d-flex flex-column justify-content-between">
        <div>
          <div>01-234-5678</div>
          <div>psystore@email.com</div>
          <div>100 桃園市龜山區心理路 520 號新惦店</div>
        </div>
      </div>

      <div class="row justify-content-between mb-3"></div>
      <div class="row justify-content-between align-items-end">
        <div class="col-md-6 social-lists order-2 order-md-1">
          <a href="#" class="h2 mr-2">
            <font-awesome-icon
              :icon="['fab', 'instagram-square']"
            ></font-awesome-icon>
          </a>
          <a href="#" class="h2">
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
            ></font-awesome-icon>
          </a>
        </div>
        <div class="col-md-6 text-md-right mb-3 mb-md-0 order-1 order-md-2">
          © 2020 PsyStore* All Rights Reserved
        </div>
      </div>
    </footer>
    <!-- footer END -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['cart']),
  },
  methods: {
    ...mapActions('cart', [
      'getCart',
      'removeCartItem',
      'removeCartItemNoLoading',
    ]),
    // removeCartItem(id) {
    //   this.removeCartItemNoLoading(id);
    // },
  },
  mounted() {
    this.getCart();
    console.log(this.cart);
  },
};
</script>

<style lang="scss">
html,
body {
  scroll-behavior: smooth;
}

.banner {
  height: 40vh;
  @include media-breakpoint-down(sm) {
    height: 20vh;
  }
}
</style>
