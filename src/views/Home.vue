<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created () {
    this.$store.dispatch('getAllProducts')
    this.$store.dispatch('getAllBanners')
  },
  computed: { ...mapState(['products', 'banners']) }
}
</script>
