import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'FrontStage',
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
    name: 'BackStage',
    component: () => import('@/components/BackStage'),
    children: [
      {
        path: 'products',
        name: 'BackProducts',
        components: () => import('@/views/BackProducts'),
      },
    ],
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
