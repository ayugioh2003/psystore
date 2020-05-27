import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    tempQty: 0,
    tempIndex: undefined,
  },
  getters: {
    cart: (state) => state.cart,
    tempQty: (state) => state.tempQty,
    tempIndex: (state) => state.tempIndex,
  },
  mutations: {
    GET_CART(state, payload) {
      state.cart = payload;
    },
    SET_TEMP_QTY(state, value) {
      let temp = state.tempQty + value;
      if (value === 0) temp = 0;
      state.tempQty = temp;
      return state.tempQty;
    },
    SET_TEMP_INDEX(state, value) {
      state.tempIndex = value;
      return state.tempIndex;
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
      const productId = payload.product_id;
      const { carts } = context.state.cart;
      const sameCarts = [
        ...carts.filter((item) => productId === item.product_id),
      ];
      const sameCartsQty = sameCarts.reduce((pre, cur) => pre + cur.qty, 0);

      if (sameCarts.length >= 1) {
        for (let i = 0; i < sameCarts.length; i += 1) {
          const item = sameCarts[i];
          context.dispatch('removeCartItemNoAlert', item.id);
        }
      }

      return axios
        .post(API, {
          data: { product_id: productId, qty: payload.qty + sameCartsQty },
        })
        .then((res) => {
          context.dispatch('getCart');
          return res;
        });
    },
    updateCart(context, payload) {
      const API = `${process.env.VUE_APP_API}/cart`;
      const productId = payload.product_id;
      const { carts } = context.state.cart;
      const sameCarts = [
        ...carts.filter((item) => productId === item.product_id),
      ];
      const sameCartsQty = sameCarts.reduce((pre, cur) => pre + cur.qty, 0);

      if (sameCarts.length >= 1) {
        for (let i = 0; i < sameCarts.length; i += 1) {
          const item = sameCarts[i];
          context.dispatch('removeCartItemNoAlert', item.id);
        }
      }

      context.dispatch('setIsLoading', true, { root: true });
      return axios
        .post(API, {
          data: { product_id: productId, qty: payload.qty + sameCartsQty },
        })
        .then(async (res) => {
          await context.commit('SET_TEMP_QTY', 0);
          await context.commit('SET_TEMP_INDEX', undefined);
          await context.dispatch('getCart');
          return res;
        })
        .then(async () => {
          await context.dispatch('setIsLoading', false, { root: true });
          await context.dispatch(
            'alertMessage/updateMessage',
            {
              message: '數量更新成功',
              status: 'success',
            },
            { root: true },
          );
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
    removeCartItemNoAlert(context, id) {
      const API = `${process.env.VUE_APP_API}/cart/${id}`;
      return axios.delete(API).then((res) => {
        context.dispatch('getCart');
        return res;
      });
    },
    addTempQty({ commit }, index) {
      commit('SET_TEMP_QTY', +1); // 暫時增加的數量
      commit('SET_TEMP_INDEX', index); // 操作那一個 cart
    },
    subTempQty({ commit }, index) {
      commit('SET_TEMP_QTY', -1);
      commit('SET_TEMP_INDEX', index);
    },
  },
};
