import axios from 'axios';

export default {
  namespaced: true,
  state: {
    order: {},
    orders: {},
    orderStep: 'create',
    pagination: {},
  },
  getters: {
    order: (state) => state.order,
    orders: (state) => state.orders,
    orderStep: (state) => state.orderStep,
    pagination: (state) => state.pagination,
  },
  mutations: {
    GET_ORDER(state, payload) {
      state.order = payload;
    },
    GET_ORDERS(state, payload) {
      state.orders = payload;
    },
    SET_ORDER_STEP(state, payload) {
      state.orderStep = payload;
    },
    GET_PAGINATION(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    createOrder(context, form) {
      const API = `${process.env.VUE_APP_API}/order`;
      return axios.post(API, { data: form }).then((res) => res);
    },
    getOrder(context, orderId) {
      const API = `${process.env.VUE_APP_API}/order/${orderId}`;
      context.commit('GET_ORDER', {});

      return axios.get(API).then((res) => {
        context.commit('GET_ORDER', res.data.order);
        return res;
      });
    },
    getOrders(context, page) {
      const API = `${process.env.VUE_APP_API}/orders?page=${page}`;

      return axios.get(API).then((res) => {
        context.commit('GET_ORDERS', res.data.orders);
        context.commit('GET_PAGINATION', res.data.pagination);
        return res;
      });
    },
    payOrder(context, orderId) {
      const API = `${process.env.VUE_APP_API}/pay/${orderId}`;
      context.dispatch('setIsLoading', true, { root: true });

      return axios.post(API).then((res) => {
        context.dispatch('getOrder', orderId);
        context.dispatch(
          'alertMessage/updateMessage',
          {
            message: res.data.message,
            status: res.data.success ? 'success' : 'warning',
          },
          { root: true },
        );
        context.dispatch('setIsLoading', false, { root: true });

        return res;
      });
    },
    setOrderStep(context, step) {
      context.commit('SET_ORDER_STEP', step);
    },
  },
};
