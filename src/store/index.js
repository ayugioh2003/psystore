import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    products: [],
  },
  mutations: {
    SET_ISLOADING(state, status) {
      state.isLoading = status;
    },
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getProducts(context, page = 1) {
      const API = `${process.env.VUE_APP_API}/products?page=${page}`;
      return axios.get(API).then((res) => {
        console.log(res);
        context.commit('GET_PRODUCTS', res.data.products);
      });
    },
  },
  modules: {},
});
