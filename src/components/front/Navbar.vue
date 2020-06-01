<template>
  <header class="bg-white border-bottom">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <!-- Mobile toggle button -->
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

        <!-- Logo -->
        <router-link to="/" exact class="navbar-brand m-0">
          <img
            src="@/assets/logo.png"
            width="240"
            height="60"
            alt="psystore, make mind stronger"
          />
        </router-link>

        <!-- Cart Dropdown -->
        <div
          class="dropdown order-lg-1 pl-md-4 pr-md-1"
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
            <font-awesome-icon
              icon="shopping-cart"
              class="d-none d-lg-inline"
            />
            <font-awesome-icon
              icon="shopping-cart"
              class="d-inline d-lg-none"
              size="lg"
            />
            {{ cart.carts.length ? cart.carts.length : '' }}
          </button>

          <div
            v-if="cart.carts.length == 0"
            class="dropdown-menu p-3 dropdown-menu-right"
            style="min-width: 400px"
          >
            <router-link
              class="btn btn-primary btn-block"
              :to="{
                name: 'ProductList',
                params: { category: '所有商品' },
              }"
              >尚未選購商品。歡迎繼續採購 ~</router-link
            >
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
                      <th scope="col" width="70" class="text-center">
                        數量
                      </th>
                      <th scope="col">單價</th>
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
                      <td class="text-center">
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
                        <div class="text-right h5">
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

        <!-- Toggle Lists -->
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item px-4">
              <router-link
                to="/"
                class="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >首頁</router-link
              >
            </li>
            <li class="nav-item px-4">
              <router-link
                to="/products"
                class="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >商品</router-link
              >
            </li>
            <li class="nav-item px-4">
              <router-link
                to="/coupons"
                class="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >酷碰</router-link
              >
            </li>
            <li class="nav-item px-4">
              <router-link
                to="/orders"
                class="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >訂單</router-link
              >
            </li>
            <li class="nav-item px-4">
              <router-link
                to="/login"
                class="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >登入</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('cart', ['cart']),
  },
  methods: {
    ...mapActions('cart', [
      'getCart',
      'removeCartItem',
      'removeCartItemNoLoading',
    ]),
  },
  mounted() {
    const vm = this;
    vm.getCart();
  },
};
</script>

<style lang="scss">
.navbar {
  img {
    width: 240px;
    height: 60px;

    @include media-breakpoint-down(md) {
      width: 180px;
      height: 45px;
    }
  }
}
</style>
