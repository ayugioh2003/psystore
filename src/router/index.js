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
        component: () => import('@/views/Home'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login'),
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
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active', // active class for *exact* links.
});

export default router;
