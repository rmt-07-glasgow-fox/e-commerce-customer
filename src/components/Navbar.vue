<template>
  <div class="navbar navbar-light bg-white">
    <div class="container d-flex justify-content-between">
    <router-link to="/" class="navbar-brand d-flex align-items-center">
        <strong>Home</strong>
    </router-link>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" v-if="this.$store.state.isLogin === false" href="#" @click.prevent="toLogin">Login</a>
        </li>
    </ul>
    <div class="ml-auto">
        <button class="mr-5" @click.prevent="showCart" v-if="this.$store.state.isLogin === true"><i class="fas fa-shopping-cart"></i>  Cart</button>
        <button  @click.prevent="logout" v-if="this.$store.state.isLogin === true"><i class="fas fa-sign-out-alt"></i>  Logout</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    showCart () {
      this.$router.push('/cart')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('changeIsLogin', false)
      this.$router.push('/login')
    },
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
