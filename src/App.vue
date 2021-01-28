<template>
  <div id="app">
    <div id="nav" class="text-white">
      <h1>TOKOque</h1>
      <router-link to="/products"><img src="https://img.icons8.com/clouds/60/000000/t-shirt.png"/></router-link>
      <router-link v-if="!user" style="text-decoration:none" to="/login"> Login </router-link>
      <router-link v-if="!user" style="text-decoration:none" to="/register">Sign Up </router-link>
      <router-link to="/cart" ><img src="https://img.icons8.com/clouds/60/000000/shopping-cart.png"/></router-link>
      <div v-if="user">
        <button class="btn btn-danger" @click="logout">logout</button>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: localStorage.getItem('access_token')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/products')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #000000;
}

#nav a {
  font-weight: bold;
  color: #e6e6e6;
}

#nav a.router-link-exact-active {
  color: #ff80bf;
}
</style>
