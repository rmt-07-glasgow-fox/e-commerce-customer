<template>
  <div id="app">
    <div id="nav">
      <router-link id="brand" to="/">MyEcommerce</router-link>
      <router-link to="/cart">My Cart</router-link> |
      <router-link to="/wishlist">Wish List</router-link> |
      <router-link to="/alltransaction">All Transaction</router-link>
      <button class="auth btn-primary"
       v-if="!isLogin" @click.prevent="login">Login</button>
      <button class="auth btn-danger"
       v-else @click.prevent="logout">Logout</button>
    </div>
    <router-view/>
    <div id="footer">Copyright &copy; 2021 by FDR</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.setupIsLogin()
  },
  methods: {
    setupIsLogin () {
      this.$store.dispatch('tryToken')
    },
    login () {
      this.$router.push('/auth')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('assignUser', '')
      this.$store.commit('authenticate')
      if (this.$router.name !== 'Home') this.$router.push('/')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
#footer {
  position: fixed;
  bottom: 0;
  left: 42%;
}

#brand {
  float: left;
}

.auth {
  float: right;
  width: 70px;
  border-radius: 5px;
  margin-top: -3px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 12px;
  background-color: rgb(243, 186, 30);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #793fc5;
}
</style>
