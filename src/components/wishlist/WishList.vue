<template>
  <div class="">
    <v-row v-if="wishlist.length > 0">
      <WishItem v-for="item in wishlist" :key="item.id" :item="item"/>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center" justify="center">
        NO DATA
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WishItem from '@/components/wishlist/WishItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    WishItem
  },
  computed: {
    ...mapState({
      wishlist: state => state.mWishlist.wishlist
    })
  },
  created () {
    this.$store.dispatch('fetchWishlist', null, true)
  }
}
</script>

<style>

</style>
