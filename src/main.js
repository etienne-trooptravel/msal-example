import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import msal from 'vue-msal'

Vue.config.productionTip = false

Vue.use(msal, {
    auth: {
      clientId: '3f9b0475-0293-462a-9273-48eafbdc2d44',
      tenantId: '62065239-3278-4fc0-9754-fb53d27cddb6',
      redirectUri: 'https://vue-msal-example.firebaseapp.com/',
      // redirectUri: 'http://localhost:8080/',
      // requireAuthOnInitialize: true,
      onAuthentication(ctx, error, response) {
        console.log(`CTX: `, ctx),
        console.log(`ERROR: `, error),
        console.log(`RESPONSE: `, response)
      }
    },
    request: {
      scopes: [
        "user.read",
        "user.read.all",
        "profile"
      ]
    },
    graph: {
      callAfterInit: true,
      onResponse(ctx, response) {
        console.log(`GRAPH CTX: `, ctx),
        console.log(`GRAPH RESPONSE: `, response)
      }
    },
    cache: {
      // cacheLocation: "sessionStorage" - more secure but lacs SSO accross tabs
      cacheLocation: "localStorage"
    }
    // framework: {
    //   globalMixin: true
    // }
});

// api://vue-msal-example.firebaseapp.com/3f9b0475-0293-462a-9273-48eafbdc2d44

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
