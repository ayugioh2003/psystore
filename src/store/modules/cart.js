import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
  },
  getters: {
    cart: (state) => state.cart,
  },
  mutations: {
    GET_CART(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    getCart(context) {
      const API = `${process.env.VUE_APP_API}/cart`;

      return axios.get(API).then((res) => {
        console.log(res);
        context.commit('GET_CART', res.data.data);
      });
    },
    addtoCart(context, payload) {
      const API = `${process.env.VUE_APP_API}/cart`;

      return axios.post(API, { data: payload }).then((res) => {
        console.log(res);
        console.log('提示: 已加入購物車');
        context.dispatch('getCart');
      });
    },
  },
};
