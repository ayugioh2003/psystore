<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <!-- 管理 -->
      <h6 class="sidebar-heading  px-3 mt-4 mb-1 text-muted">
        <span>管理工具</span>
        <a
          class="d-flex align-items-center text-muted"
          href="#"
          aria-label="Add a new report"
        >
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/admin/products" class="nav-link">
            <font-awesome-icon icon="store" /> 商品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/orders" class="nav-link"
            ><font-awesome-icon icon="list-alt" /> 訂單列表</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/admin/coupons" class="nav-link"
            ><font-awesome-icon icon="ticket-alt" /> 酷朋列表</router-link
          >
        </li>
      </ul>
      <!-- 模擬 -->
      <h6 class="sidebar-heading  px-3 mt-4 mb-1 text-muted">
        <span>模擬功能</span>
        <a
          class="d-flex align-items-center text-muted"
          href="#"
          aria-label="Add a new report"
        >
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/shopping" class="nav-link">
            <font-awesome-icon icon="shopping-cart" /> 購物測試</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports (position: sticky) {
  .sidebar-sticky {
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
