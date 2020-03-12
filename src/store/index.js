import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    SET_ISLOADING(state, status) {
      state.isLoading = status;
    },
  },
  actions: {},
  modules: {},
});
