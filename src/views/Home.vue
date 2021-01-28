<template>
  <div class="gardara-home">
    <carousel/>
    <promo-top/>
    <banner-top/>
    <promo-bottom/>
    <banner-bottom/>
  </div>
</template>

<script>
import BannerBottom from '../components/welcome/BannerBottom.vue'
import BannerTop from '../components/welcome/BannerTop.vue'
import Carousel from '../components/welcome/Carousel'
import PromoBottom from '../components/welcome/PromoBottom.vue'
import PromoTop from '../components/welcome/PromoTop.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    PromoTop,
    BannerTop,
    PromoBottom,
    BannerBottom
  }
}
</script>
