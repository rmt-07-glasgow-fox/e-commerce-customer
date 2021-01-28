<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand ml-5" href="#">MyShopp</a>
        <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{'custom': $route.name === 'HomePage'}" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link"  :class="{'custom': $route.name === 'ProductsPage'}">Products</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link to="/wishlist" class="nav-link"  :class="{'custom': $route.name === 'WishlistPage'}">Wishlist</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link to="/history" class="nav-link" :class="{'custom': $route.name === 'HistoryPage'}">History</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link to="/cart" class="nav-link" :class="{'custom': $route.name === 'CartPage'}">Cart <span v-if="cartCount !== 0" class="cart bg-primary px-2 py-1 rounded-circle text-white">{{ cartCount }}</span> </router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link to="/auth" class="nav-link" href="#">Login</router-link>
            </li>
            <li class="nav-item"
              v-else>
              <a class="nav-link" href="#"
                @click.prevent="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('setCartCount', 0)
      this.$store.commit('setIsLoggedIn', false)
      this.$store.commit('insertUserProducts', [])
      this.$router.push('/auth')
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('setIsLoggedIn', true)
      this.$store.dispatch('fetchUserProducts', 'pending')
    }
  }
}
</script>

<style>
  .cart {
    width: 500px !important;
    height: 34px !important;
    box-sizing: border-box !important;
  }
  .custom {
    border-bottom: 1px solid black
  }
</style>
