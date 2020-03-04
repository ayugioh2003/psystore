import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCoffee, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

library.add(faCoffee, faKey, faUser, faGooglePlus); // font awesome
library.add(faGooglePlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);

axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios); // axios

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
