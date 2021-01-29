<template>
  <div id="cart">
    <Navbar/>
    <CartList/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartList from '../components/CartList'

export default {
  components: {
    CartList,
    Navbar
  }
}
</script>

<style>

</style>
