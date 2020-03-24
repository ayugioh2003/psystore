import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    products: (state) => state.products,
  },
  mutations: {
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getProducts(context, page = 1) {
      const API = `${process.env.VUE_APP_API}/products?page=${page}`;
      context.commit('SET_ISLOADING', true, { root: true });

      return axios.get(API).then((res) => {
        console.log(res);
        context.commit('GET_PRODUCTS', res.data.products);
        context.commit('SET_ISLOADING', false, { root: true });
      });
    },
  },
};
