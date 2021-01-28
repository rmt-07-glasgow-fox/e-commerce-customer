<template>
<nav class="navbar bg-white card shadow" style="display: block;">
  <div class="row">
    <div class="col-11">
      <a @click.prevent="goToHome" class="navbar-brand pb-4 mt-2" href="#">E-Commerce</a>
      <router-link class="text ml-2" style="font-size: 17px;" to="/products">Products </router-link>
      <router-link class="text ml-2" style="font-size: 17px;" to="/cart">Cart  <font-awesome-icon icon="shopping-cart" /></router-link>
      <router-link class="text ml-2" style="font-size: 17px;" to="/cart">Wishlist  <font-awesome-icon icon="heart" /></router-link>
    </div>
    <div class="col-1 mt-3">
      <a v-if="isLogin" class="text" style="font-size: 17px;" @click.prevent="logout" href="">Logout</a>
      <a v-else class="text" style="font-size: 17px;" @click.prevent="login" href="">Login</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.$swal.fire({
        icon: 'success',
        title: 'Success',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        this.$router.push('/login')
      })
    },
    goToHome () {
      this.$router.push('/')
    }
  },
  computed: {
    isLogin () {
      if (localStorage.access_token) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: Graphik;
  src: url('../assets/GraphikRegular.otf') format("opentype");
}

a {
  color: black !important;
  font-family: Graphik;
}
</style>
