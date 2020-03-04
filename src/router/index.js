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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
