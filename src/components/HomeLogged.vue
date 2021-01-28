<template>
  <div>
    <div class="navbar navbar-light bg-info">
      <div>
        <router-link to="/"
        class="btn btn-outline-secondary ml-3"><i class="fas fa-home mr-2"></i>Home</router-link>
        <router-link to="/cart"
        class="btn btn-outline-secondary ml-3"><i class="fas fa-shopping-cart mr-2"></i>Cart</router-link>
        <button
        class="btn btn-outline-secondary ml-3"
        @click.prevent="logout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</button>
      </div>
    </div>
    <carousel />
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  components: { Carousel },
  name: 'HomeLogged',
  methods: {
    logout () {
      this.$store.dispatch('logoutUser')
    }
  }
}
</script>

<style>

</style>
