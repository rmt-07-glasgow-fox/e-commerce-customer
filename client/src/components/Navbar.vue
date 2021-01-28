<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://image.flaticon.com/icons/png/512/25/25174.png" alt="" width="25" height="24" class="d-inline-block align-top">
      -Commerce
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link btn btn-outline-secondary btn-sm" href="#" @click.prevent="toMyCart" v-if="$route.name == 'Home'  || $route.name == 'Wishlist'" style="border:none;">My Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-outline-secondary btn-sm" href="#" @click.prevent="toWishlist" v-if="$route.name == 'Home'  || $route.name == 'MyCart'" style="border:none;">Wishlists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-outline-secondary btn-sm" href="#" @click.prevent="toProducts" v-if="$route.name == 'MyCart'  || $route.name == 'Wishlist'" style="border:none;">Products</a>
        </li>
      </ul>
    </div>
          <a class="nav-link btn btn-outline-secondary btn-sm" href="#" @click.prevent="logout" style="border:none;">Logout</a>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$store.commit('errHandling', '')
      this.$store.commit('notifHandling', '')
    },
    toMyCart () {
      this.$router.push('/mycart')
      this.$store.commit('errHandling', '')
      this.$store.commit('notifHandling', '')
    },
    toProducts () {
      this.$router.push('/')
      this.$store.commit('errHandling', '')
      this.$store.commit('notifHandling', '')
    },
    toBanners () {
      this.$router.push('/banners')
      this.$store.commit('errHandling', '')
      this.$store.commit('notifHandling', '')
    },
    toWishlist () {
      this.$router.push('/wishlists')
      this.$store.commit('errHandling', '')
      this.$store.commit('notifHandling', '')
    }
  }
}
</script>

<style>

</style>
