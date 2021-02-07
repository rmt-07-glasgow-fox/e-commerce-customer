<template>
  <div class="w3-main" style="margin-left:340px;margin-right:40px">
  <Header
    :title='title'
    :subtitle='subtitle'/>
    <div class="container">
        <WishCard
        v-for="wishlist in userWishlist"
        :key="wishlist.id"
        :wishlist='wishlist'
        />
    </div>
  <Footer/>
  </div>

</template>

<script>
import Header from '@/components/PageContent/Header.vue'
import Footer from '@/components/PageContent/Footer.vue'
import WishCard from '@/components/Wishlist/WishCard.vue'

export default {
  name: 'WishlistPage',
  data () {
    return {
      title: 'Wishlisted Item',
      subtitle: 'Your Wishlist'
    }
  },
  computed: {
    userWishlist () {
      return this.$store.state.userData.itemonwishlist
    }
  },
  components: {
    Header,
    Footer,
    WishCard
  },
  methods: {
    getuserData () {
      this.$store.dispatch('getUserData')
    }
  },
  created () {
    this.getuserData()
  }
}
</script>

<style>
.container {
  width: 80%;
  margin: 0 auto;
  display :flex;
  justify-content:space-evenly;
  flex-wrap:wrap;
}
</style>
