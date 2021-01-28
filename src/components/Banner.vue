<template>
  <v-carousel
    v-if="banners.length > 0"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="banner in banners"
      :key="banner.id"
      :src="banner.image_url"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('fetchBanners', null)
  },
  computed: {
    ...mapState([
      'banners'
    ])
  }
}
</script>

<style>

</style>
