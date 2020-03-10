import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCoffee,
  faKey,
  faUser,
  faStore,
  faListAlt,
  faTicketAlt,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';

import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';
import store from './store';

import currency from './filters/currency';

Vue.config.productionTip = false;

// font awesome
library.add(
  faCoffee,
  faKey,
  faUser,
  faStore,
  faListAlt,
  faTicketAlt,
  faShoppingCart,
);
library.add(faGooglePlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);

axios.defaults.withCredentials = true; // axios
Vue.use(VueAxios, axios);

// filter
Vue.filter('currency', currency);

// Loading
Vue.component('Loading', Loading);

// NEW VUE INSTANCE
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// router
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios
      .post(api)
      .then((data) => data.data.success)
      .then((success) => {
        if (success) {
          console.log('signin check success');
          next();
        } else {
          console.log('signin check fail');
          if (from.name !== 'Login') {
            router.push('/login');
          }
        }
      });
  } else {
    next();
  }
});
