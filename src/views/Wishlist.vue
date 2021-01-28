<template>
<div>
  <Navbar />
  <WishlistForm />
  <Footer />
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WishlistForm from '../components/WishlistForm'

export default {
  name: 'Wishlist',
  components: {
    Navbar,
    Footer,
    WishlistForm
  }
}
</script>

<style>

</style>
