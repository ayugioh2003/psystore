import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'FrontStage',
    component: () => import('@/components/FrontStage.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        metaInfo: {
          title: '首頁',
        },
        meta: {
          title: '首頁',
        },
        component: () => import('@/views/Home'),
      },
      {
        path: '/products',
        // name: 'ProductList',
        redirect: {
          name: 'ProductList',
          params: {
            category: '所有商品',
          },
        },
        meta: {
          title: '商品清單',
        },

        component: () => import('@/views/ProductList'),
      },
      {
        path: '/products/:category',
        name: 'ProductList',
        meta: {
          title: '商品清單',
        },

        component: () => import('@/views/ProductList'),
      },

      {
        path: '/product/:id',
        name: 'productDetail',
        meta: {
          title: '商品',
        },
        component: () => import('@/views/Product'),
        // meta: { requiresAuth: true },
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/Cart'),
        meta: {
          title: '購物清單',
        },

        // meta: { requiresAuth: true },
      },
      {
        path: '/checkout',
        // name: 'Checkout',
        component: () => import('@/components/Checkout'),
        children: [
          {
            path: 'order_create',
            name: 'OrderCreate',
            component: () => import('@/views/OrderCreate'),
            meta: {
              title: '建立訂單',
            },

            // meta: { requiresAuth: true },
          },
          {
            path: 'order_paying/:id',
            name: 'OrderPaying',
            component: () => import('@/views/OrderPaying'),
            meta: {
              title: '金流付款',
            },

            // meta: { requiresAuth: true },
          },
          {
            path: 'order_paid/:id',
            name: 'OrderPaid',
            component: () => import('@/views/OrderPaid'),
            meta: {
              title: '結帳成功',
            },

            // meta: { requiresAuth: true },
          },
        ],
        // meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/Orders'),
        meta: {
          title: '訂單列表',
        },

        // meta: { requiresAuth: true },
      },
      {
        path: '/coupons',
        name: 'Coupons',
        component: () => import('@/views/Coupons.vue'),
        meta: {
          title: '酷碰清單',
        },

        // meta: { requiresAuth: true },
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login'),
        meta: {
          title: '登入頁面',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
          title: '關於我們',
        },
      },
      {
        path: 'copyright',
        name: 'Copyright',
        component: () => import('@/views/Copyright.vue'),
        meta: {
          title: '版權聲明',
        },
      },
    ],
  },
  {
    path: '/admin',
    // name: 'BackStage',
    component: () => import('@/components/BackStage'),
    redirect: '/admin/products',
    children: [
      {
        path: 'products',
        name: 'BackProducts',
        component: () => import('@/views/BackProducts'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'BackOrders',
        component: () => import('@/views/BackOrders'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'BackCoupons',
        component: () => import('@/views/BackCoupons'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    // name: 'BackStage',
    component: () => import('@/components/BackStage'),
    children: [
      {
        path: 'shopping',
        name: 'BackShopping',
        component: () => import('@/views/BackShopping'),
        // meta: { requiresAuth: true },
      },
      {
        path: 'back_order_checkout/:id',
        name: 'BackOrderCheckout',
        component: () => import('@/views/BackOrderCheckout'),
        // meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/refresh',
    name: 'refresh',
    component: () => import('@/components/Refresh'),
    // 目录更改为你自己的refresh.vue的目录
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active', // active class for *exact* links.
});

export default router;
