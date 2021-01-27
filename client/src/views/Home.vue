<template>
  <div style="position: relative;">
    <Navbar/>
    <div class="container carou">
      <div class="carousel slide" data-bs-ride="carousel" id="quote-carousel">
      <div class="carousel-inner" >
        <BannerCarousel
        v-for="(banner, id) in banners"
        :key="id"
        :id="id"
        :banner="banner"
        />
      </div>
        <a class="carousel-control-prev" href="#quote-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#quote-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
    <div class="container" >
    <div style="margin-top: 20px"><h3 >Products List: </h3></div>
      <p style="color: aliceblue;">{{notif}}</p>
      <p style="color: red;">{{err}}</p>
      <div class="row" >
      <Card
      v-for="product in products"
      :key="product.id"
      :product="product"
      />
      </div>
    </div><br><br><br><br><br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import BannerCarousel from '../components/BannerCarousel'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Card,
    Navbar,
    BannerCarousel,
    Footer
  },
  created () {
    this.$store.dispatch('fetchAllProduct')
    this.$store.dispatch('fetchAllBanner')
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    err () {
      return this.$store.state.err
    },
    notif () {
      return this.$store.state.notif
    },
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>
