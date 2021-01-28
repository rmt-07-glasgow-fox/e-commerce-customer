<template>
  <div>
    <div class="img-slider"
      @click.prevent="goToProducts">
    <b-carousel
      id="carousel-fade"
      :interval="4000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;">
      <b-carousel-slide
        v-for="banner in banners"
        :key="banner.id"
        :img-src="banner.image_url"
      ></b-carousel-slide>
    </b-carousel>
    </div>
    <div class="mt-5 ml-5 pl-2">
      <h3>Recommended Products</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-1 mx-auto mb-5"
      style="width: 95%">
      <product-card
        v-for="product in products"
        :product="product"
        :key="product.id">
      </product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  name: 'HomePage',
  components: {
    ProductCard
  },
  computed: {
    banners () {
      return this.$store.state.banners
    },
    products () {
      // const products = this.$store.state.products
      // let ctr = products.length
      // let temp
      // let index

      // while (ctr > 0) {
      //   index = Math.floor(Math.random() * ctr)
      //   ctr--
      //   temp = products[ctr]
      //   products[ctr] = products[index]
      //   products[index] = temp
      // }
      return this.$store.state.randomProducts
    }
  },
  methods: {
    goToProducts () {
      this.$router.push('/products')
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
}
.img-slider:hover {
  cursor: pointer;
}
/*
.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
