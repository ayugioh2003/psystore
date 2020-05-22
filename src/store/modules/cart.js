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
        context.commit('GET_CART', res.data.data);
      });
    },
    addtoCart(context, payload) {
      const API = `${process.env.VUE_APP_API}/cart`;
      return axios.post(API, { data: payload }).then((res) => {
        context.dispatch('getCart');
        return res;
      });
    },
    removeCartItem(context, id) {
      const API = `${process.env.VUE_APP_API}/cart/${id}`;

      context.commit('SET_ISLOADING', true, { root: true });
      return axios.delete(API).then((res) => {
        context.commit('SET_ISLOADING', false, { root: true });
        context.dispatch('getCart');
        context.dispatch(
          'alertMessage/updateMessage',
          {
            message: res.data.message,
            status: res.data.success ? 'success' : 'warning',
          },
          { root: true },
        );
        return res;
      });
    },
    removeCartItemNoLoading(context, id) {
      const API = `${process.env.VUE_APP_API}/cart/${id}`;

      return axios.delete(API).then((res) => {
        context.dispatch('getCart');
        context.dispatch(
          'alertMessage/updateMessage',
          {
            message: res.data.message,
            status: res.data.success ? 'success' : 'warning',
          },
          { root: true },
        );
        return res;
      });
    },
  },
};
