<template>
  <div class="home">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchBanners')
  }
}
</script>
