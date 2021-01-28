<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-custom" style="background-color: #222831;">
    <div class="container-fluid">
      <a class="navbar-brand" style="color: white; font-size: 25px" id="nav-logo"><img src="../../resources/newlogo2019.png" style="width:100px; height:50px"></a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style="color: white;" @click.prevent="goToHome">Home</a>
        </li>
      </ul>
      <a href="" @click.prevent="goToCart"><i class="fa fa-cart-arrow-down" style="font-size: 25px; color: white"></i></a>
      <button class="btn btn-outline-light" style="margin-left:20px" @click.prevent="goToLogin" v-if="logStatus === false">Login</button>
      <button class="btn btn-outline-light" style="margin-left:20px" @click.prevent="goSignOut" v-if="logStatus === true">Sign Out</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToLogin () {
      this.$router.push('/login')
    },
    goToHome () {
      this.$router.push('/')
    },
    goToCart () {
      this.$router.push('/cart')
    },
    goSignOut () {
      localStorage.clear()
      this.$store.dispatch('fetchCart')
      this.isLoggedIn()
      this.$router.push('/')
    },
    isLoggedIn () {
      this.$store.commit('loggedIn')
    }
  },
  created () {
    this.isLoggedIn()
  },
  computed: {
    logStatus () {
      return this.$store.state.loggedIn
    }
  }
}
</script>

<style scoped>

</style>
