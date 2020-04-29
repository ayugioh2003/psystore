import axios from 'axios';

export default {
  namespaced: true,
  state: {
    product: {},
    products: [],
    pagination: {},
  },
  getters: {
    product: (state) => state.product,
    products: (state) => state.products,
    pagination: (state) => state.pagination,
  },
  mutations: {
    GET_PRODUCT(state, payload) {
      state.product = payload;
    },
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    GET_PAGINATION(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    getProduct(context, id) {
      const API = `${process.env.VUE_APP_API}/product/${id}`;
      context.commit('SET_ISLOADING', true, { root: true });

      return axios.get(API).then((res) => {
        console.log('Product', res);
        context.commit('GET_PRODUCT', res.data.product);
        context.commit('SET_ISLOADING', false, { root: true });
      });
    },
    getProducts(context, page = 1) {
      const API = `${process.env.VUE_APP_API}/products?page=${page}`;
      context.commit('SET_ISLOADING', true, { root: true });

      return axios.get(API).then((res) => {
        console.log('Products', res);
        context.commit('GET_PRODUCTS', res.data.products);
        context.commit('GET_PAGINATION', res.data.pagination);
        context.commit('SET_ISLOADING', false, { root: true });
      });
    },
    getProductsAll(context) {
      const API = `${process.env.VUE_APP_API}/products/all`;
      context.commit('SET_ISLOADING', true, { root: true });

      return axios.get(API).then((res) => {
        console.log('ProductsAll', res);
        context.commit('GET_PRODUCTS', res.data.products);
        // context.commit('GET_PAGINATION', res.data.pagination);
        context.commit('SET_ISLOADING', false, { root: true });
      });
    },
  },
};
