import axios from 'axios';

export default {
  namespaced: true,
  state: {
    order: {},
  },
  getters: {
    order: (state) => state.order,
  },
  mutations: {
    GET_ORDER(state, payload) {
      state.order = payload;
    },
  },
  actions: {
    createOrder(context, form) {
      const API = `${process.env.VUE_APP_API}/order`;

      return axios.post(API, { data: form }).then((res) => {
        console.log('訂單結帳結果', res);
        return res;
      });
    },
    getOrder(context, orderId) {
      const API = `${process.env.VUE_APP_API}/order/${orderId}`;
      context.commit('GET_ORDER', {});

      axios.get(API).then((res) => {
        console.log('取得訂單資料', res);
        context.commit('GET_ORDER', res.data.order);
        return res;
      });
    },
  },
};
