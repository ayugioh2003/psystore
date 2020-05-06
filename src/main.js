import Vue from 'vue';
import VueMeta from 'vue-meta';
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
  faSpinner,
  faArrowRight,
  faEnvelope,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faGooglePlus,
  faInstagramSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';
import store from './store';

import currency from './filters/currency';
import date from './filters/date';

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
  faSpinner,
  faTrashAlt,
  faArrowRight,
  faEnvelope,
  faAngleDoubleDown,
);
library.add(faGooglePlus, faInstagramSquare, faFacebookSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);

axios.defaults.withCredentials = true; // axios
Vue.use(VueAxios, axios);

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// filter
Vue.filter('currency', currency);
Vue.filter('date', date);

// Loading
Vue.component('Loading', Loading);

// vue-meta
Vue.use(VueMeta);

// NEW VUE INSTANCE
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// router
// function setMeta(to) {
//   const defaultTitle = 'PsyStore';

//   if (to.name === 'ProductList') {
//     window.document.title = `${to.params.category}-${to.meta.title} | ${defaultTitle}`;
//   } else if (to.meta.title) {
//     window.document.title = `${to.meta.title} | ${defaultTitle}`;
//   } else {
//     window.document.title = defaultTitle;
//   }
//   console.log(to);
// }

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios
      .post(api)
      .then((data) => data.data.success)
      .then((success) => {
        if (success) {
          console.log('signin check success');
          // setMeta(to);
          next();
        } else {
          console.log('signin check fail');
          if (from.name !== 'Login') {
            // setMeta(to);
            router.push('/login');
          }
        }
      });
  } else {
    // setMeta(to);
    next();
  }
});
