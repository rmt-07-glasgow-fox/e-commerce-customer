<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: grey;">
        <div class="container">
            <a class="navbar-brand" href="#" style="margin-left: 15px;" @click="goToHome">E-Commerce</a>
        </div>
        <img src="../assets/icon/cart.png" alt="cart-icon" style="height: 35px; margin-right: 20px;" @click="goToCart">
        <h3 style="margin-right: 20px;">{{ cart.length }}</h3>
        <button type="button" class="btn btn-danger" style="margin-right: 30px;" @click="logout">Logout</button>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    goToCart () {
      this.$router.push('/cart')
    },
    goToHome () {
      this.$router.push('/')
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>

<style>

</style>
