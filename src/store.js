import { createStore } from 'vuex'

const authStore = {
  state: () => ({
    user: {
      loggedIn: false,
      data: null
    }
  }),
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  getters : {
    user(state){
      return state.user
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  },
}

export default createStore({
  modules: {
    auth: authStore,
  }
});