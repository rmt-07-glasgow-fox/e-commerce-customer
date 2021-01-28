<template>
<div>
  <Navbar />
  <CartForm />
  <Footer />
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartForm from '../components/CartForm'

export default {
  name: 'Cart',
  components: {
    Navbar,
    Footer,
    CartForm
  }
}
</script>

<style>

</style>
