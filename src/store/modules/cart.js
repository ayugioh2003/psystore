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
        // console.log('購物車項目', res);
      });
    },
    addtoCart(context, payload) {
      const API = `${process.env.VUE_APP_API}/cart`;
      return axios.post(API, { data: payload }).then((res) => {
        // console.log('Cart Detail', res);
        context.dispatch('getCart');
        return res;
      });
    },
    removeCartItem(context, id) {
      const API = `${process.env.VUE_APP_API}/cart/${id}`;

      context.commit('SET_ISLOADING', true, { root: true });
      return axios.delete(API).then((res) => {
        // console.log('刪除購物車項目結果', res);
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
        // console.log('刪除購物車項目結果', res);
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
