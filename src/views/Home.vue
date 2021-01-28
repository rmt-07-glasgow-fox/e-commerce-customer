<template>
<div>
    <navbar/>
    <div class="container-fluid bg pt-3" style="height: auto;">
    <div class="container-fluid" @click="goToProducts">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="480"
      img-height="720"
      style="text-shadow: 1px 1px 2px #333; cursor: pointer;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://site-cdn.huami.com/files/2/2/0/2560x900.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Fitbit Sense"
        text="A smartwatch that helps you stress less and track your heart."
        img-src="https://www.fitbit.com/global/content/dam/fitbit/global/store/marquees/desktop/allproducts-sense.jpg">
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://erp.ngrt.in/theme/default/img/npi/npi-20/apple-watch-series-6.png">
      </b-carousel-slide>
    </b-carousel>
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

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
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
