import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firestore.js'

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

    logAction () {
      console.log(`LOG STATE`, this.state);
      if (this.state.user) {
        db.collection("logs").doc(this.state.user.accountIdentifier).set(
          {
            user: this.state.user,
            route: this.state.route
          },{ merge: true });
      }
    }

  },

  modules: {
  }
})
