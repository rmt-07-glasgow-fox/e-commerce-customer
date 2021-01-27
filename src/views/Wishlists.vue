<template>
    <div class="wishlists-container">
    <Navbar/>
    <div class="container">
    <div style="margin-top: 20px">
      <h4 style="font-weight:bold; padding-bottom: 26px; padding-top:20px">Your Wishlists</h4>
    </div>
      <p style="color: red;">{{err}}</p>
      <div class="row" style="margin-top: -15px">
      <WishCard
      v-for="wishlist in wishlists"
      :key="wishlist.id"
      :wishlist="wishlist"
      />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import WishCard from '../components/WishCard'
// @ is an alias to /src

export default {
  name: 'Wishlists',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer,
    WishCard
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchWishlists')
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    },
    err () {
      return this.$store.state.err
    }
  }
}
</script>

<style>

</style>
