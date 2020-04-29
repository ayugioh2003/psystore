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

        <router-link to="/cart" class="nav-link order-lg-1 pl-4 pr-1">
          <font-awesome-icon icon="shopping-cart" size="lg" />
        </router-link>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item px-4">
              <router-link to="/" class="nav-link">首頁</router-link>
            </li>
            <li class="nav-item px-4">
              <router-link to="/product" class="nav-link">商品</router-link>
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

<style lang="scss">
html,
body {
  scroll-behavior: smooth;
}
</style>
