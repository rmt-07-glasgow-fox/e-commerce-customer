<template>
  <div id="app">
    <Navbar class="heightmin"/>
    <router-view class="minheightbody" />
    <Footer class="heightmin"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  created () {
    this.$store.dispatch('GETBANNERS')
    this.$store.dispatch('GETPRODUCTS')
    this.$store.dispatch('GETCATEGORIES')

    // ! need auth
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('GETUSER')
      this.$store.dispatch('GETCART')
      this.$store.dispatch('GETHISTORY')
      this.$store.dispatch('GETWISHLISTS')
    }
  }
}
</script>

<style>
.heightmin {
  min-height: 1vh;
}
.minheightbody {
  min-height: 80vh;
}
</style>
