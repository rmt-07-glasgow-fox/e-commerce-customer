<template>
  <div>
    <Navbar/>
    <div class="container">
      <div style="margin-top: 20px"><h3 >Your Wishlists: </h3></div>
      <p style="color: red;">{{err}}</p>
      <div class="row">
        <WishCard
        v-for="wish in wishlists"
        :key="wish.Product.id"
        :wish="wish"
        />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import WishCard from '../components/WishCard'
import Footer from '../components/Footer'
export default {
  name: 'Wishlist',
  components: {
    Navbar,
    WishCard,
    Footer
  },
  created () {
    this.$store.dispatch('fetchAllWish')
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
