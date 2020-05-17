<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Sample Functions</h3>
    <ul>
      <div v-if="user">
        <div>Welcome {{ user.name }}</div>
        <div v-if="user.profile.jobTitle">Your job title is {{ user.profile.jobTitle }}</div>
        <div><button @click="$msal.signOut()">Log out</button></div>
    </div>
    <div v-else>
      <button @click="$msal.signIn()">Log in</button>
    </div>
      <!-- <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li> -->
    </ul>

  </div>
</template>

<script>
import store from '../store'
import { msalMixin } from 'vue-msal';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mixins: [msalMixin],
  computed: {
    user() {
      let user = null;
      if (this.msal.isAuthenticated) {
        user = {
          ...this.msal.user,
          profile: {}
        }
        if (this.msal.graph && this.msal.graph.profile) {
          user.profile = this.msal.graph.profile
          console.log(`USER Profile: `, user.profile);
        }
        store.commit('setUser', user);
      }
      return user;
    }
  }
  // computed: {
  //   ...mapState(['user'])
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
