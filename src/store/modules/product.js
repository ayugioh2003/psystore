import axios from 'axios';

export default {
  namespaced: true,
  state: {
    products: [],
    pagination: {},
  },
  getters: {
    products: (state) => state.products,
    pagination: (state) => state.pagination,
  },
  mutations: {
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    GET_PAGINATION(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    getProducts(context, page = 1) {
      const API = `${process.env.VUE_APP_API}/products?page=${page}`;
      context.commit('SET_ISLOADING', true, { root: true });

      return axios.get(API).then((res) => {
        console.log(res);
        context.commit('GET_PRODUCTS', res.data.products);
        context.commit('GET_PAGINATION', res.data.pagination);
        context.commit('SET_ISLOADING', false, { root: true });
      });
    },
  },
};
