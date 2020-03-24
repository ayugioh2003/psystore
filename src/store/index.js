import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

import product from '@/store/modules/product';
import cart from '@/store/modules/cart';
import alertMessage from '@/store/modules/alertMessage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    SET_ISLOADING(state, status) {
      state.isLoading = status;
    },
  },
  actions: {},
  modules: {
    product,
    cart,
    alertMessage,
  },
});
