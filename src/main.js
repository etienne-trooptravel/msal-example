import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import msal from 'vue-msal'

Vue.config.productionTip = false

Vue.use(msal, {
    auth: {
      clientId: '3f9b0475-0293-462a-9273-48eafbdc2d44',
      redirectUri: 'https://vue-msal-example.firebaseapp.com/',
      requireAuthOnInitialize: true
    }
});

new Vue({
  router,
  store,
  created() {
    if (!this.$msal.isAuthenticated()) {
        this.$msal.signIn();
    }
  },
  render: h => h(App)
}).$mount('#app')
