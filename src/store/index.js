import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

import product from '@/store/modules/product';
import cart from '@/store/modules/cart';
import alertMessage from '@/store/modules/alertMessage';
import Axios from 'axios';

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
  actions: {
    addCouponCode(context, code) {
      const API = `${process.env.VUE_APP_API}/coupon`;
      context.commit('SET_ISLOADING', true);

      return Axios.post(API, {
        data: {
          code,
        },
      }).then((res) => {
        console.log('添加酷朋結果', res);
        context.dispatch('cart/getCart', null, { root: true });
        context.commit('SET_ISLOADING', false);
        context.dispatch('alertMessage/updateMessage', {
          message: res.data.message,
          status: res.data.success ? 'success' : 'warning',
        });
        return res;
      });
    },
  },
  modules: {
    product,
    cart,
    alertMessage,
  },
});
