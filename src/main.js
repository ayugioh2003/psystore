import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

library.add(faCoffee, faKey, faUser, faGooglePlus); // font awesome
library.add(faGooglePlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);

axios.defaults.withCredentials = true; // axios
Vue.use(VueAxios, axios);

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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
