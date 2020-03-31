import axios from 'axios';

export default {
  namespaced: true,

  actions: {
    createOrder(context, form) {
      const API = `${process.env.VUE_APP_API}/order`;

      return axios.post(API, { data: form }).then((res) => {
        console.log('訂單結帳結果', res);
      });
    },
  },
};
