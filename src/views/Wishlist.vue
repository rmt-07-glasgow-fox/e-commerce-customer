<template>
  <div>
    <NavSide/>
    <WishlistPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavSide from '@/components/NavSide.vue'
import WishlistPage from '@/components/WishlistPage.vue'

export default {
  name: 'Wishlist',
  components: {
    NavSide,
    WishlistPage
  }
}
</script>
