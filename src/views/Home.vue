<template>
<div>
    <navbar/>
    <div class="container-fluid bg pt-3" style="height: auto;">
    <div class="container-fluid" @click="goToProducts">
      <carousel/>
    <video class="mt-2 w-100" autoplay muted loop id="myVideo">
      <source src="../assets/Transform Your Health with Fitbit Sense.mp4" type="video/mp4">
    </video>
  </div>
  </div>
  <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Carousel
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    goToProducts () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>
