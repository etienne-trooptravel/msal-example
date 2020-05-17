import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    route: null
  },

  mutations: {
    setUser (state, payload) {
      console.log(`USER: `, payload);
      state.user = payload
    },

    setRoute (state, payload) {
      console.log(`ROUTE`, payload);
      state.route = payload
    }

  },

  actions: {
  },

  modules: {
  }
})
