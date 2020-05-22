import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/components/front/FrontStage.vue'),
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
        component: () => import('@/views/front/Home'),
      },
      {
        path: '/products',
        redirect: {
          name: 'ProductList',
          params: {
            category: '所有商品',
          },
        },
        meta: {
          title: '商品清單',
        },

        component: () => import('@/views/front/ProductList'),
      },
      {
        path: '/products/:category',
        name: 'ProductList',
        meta: {
          title: '商品清單',
        },
        component: () => import('@/views/front/ProductList'),
      },

      {
        path: '/product/:id',
        name: 'productDetail',
        meta: {
          title: '商品',
        },
        component: () => import('@/views/front/Product'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/front/Cart'),
        meta: {
          title: '購物清單',
        },
      },
      {
        path: '/checkout',
        component: () => import('@/components/front/Checkout'),
        children: [
          {
            path: 'order_create',
            name: 'OrderCreate',
            component: () => import('@/views/front/OrderCreate'),
            meta: {
              title: '建立訂單',
            },
          },
          {
            path: 'order_paying/:id',
            name: 'OrderPaying',
            component: () => import('@/views/front/OrderPaying'),
            meta: {
              title: '金流付款',
            },
          },
          {
            path: 'order_paid/:id',
            name: 'OrderPaid',
            component: () => import('@/views/front/OrderPaid'),
            meta: {
              title: '結帳成功',
            },
          },
        ],
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/front/Orders'),
        meta: {
          title: '訂單列表',
        },
      },
      {
        path: '/coupons',
        name: 'Coupons',
        component: () => import('@/views/front/Coupons.vue'),
        meta: {
          title: '酷碰清單',
        },
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/front/Login'),
        meta: {
          title: '登入頁面',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
        meta: {
          title: '關於我們',
        },
      },
      {
        path: 'copyright',
        name: 'Copyright',
        component: () => import('@/views/front/Copyright.vue'),
        meta: {
          title: '版權聲明',
        },
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/components/back/BackStage'),
    redirect: '/admin/products',
    children: [
      {
        path: 'products',
        name: 'BackProducts',
        component: () => import('@/views/back/BackProducts'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'BackOrders',
        component: () => import('@/views/back/BackOrders'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'BackCoupons',
        component: () => import('@/views/back/BackCoupons'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/components/back/BackStage'),
    children: [
      {
        path: 'shopping',
        name: 'BackShopping',
        component: () => import('@/views/back/BackShopping'),
      },
      {
        path: 'back_order_checkout/:id',
        name: 'BackOrderCheckout',
        component: () => import('@/views/back/BackOrderCheckout'),
      },
    ],
  },
  {
    path: '/refresh',
    name: 'refresh',
    component: () => import('@/components/Refresh'),
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active', // active class for *exact* links.
});

export default router;
