<template>
  <div>
    <div class="navbar navbar-light bg-info">
      <div>
        <router-link to="/"
        class="btn btn-outline-secondary ml-3"><i class="fas fa-home mr-2"></i>Home</router-link>
        <router-link
        to="/login"
        class="btn btn-outline-secondary ml-3"
        ><i class="fas fa-sign-in-alt mr-2"></i>Login</router-link>
      </div>
    </div>
    <carousel />
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  components: { Carousel },
  name: 'HomeNotLogged'
}
</script>

<style scoped>

</style>
