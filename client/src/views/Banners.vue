<template>
    <div>
    <Navbar/>
    <div class="container">
      <div style="margin-top: 20px"><h3 >Banners List: </h3></div>
      <div class="row">
      <BannerCard
      v-for="banner in banners"
      :key="banner.id"
      :banner="banner"
      />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import BannerCard from '../components/BannerCard'
export default {
  name: 'Banners',
  components: {
    Navbar,
    BannerCard
  },
  created () {
    this.$store.dispatch('fetchAllBanner')
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
