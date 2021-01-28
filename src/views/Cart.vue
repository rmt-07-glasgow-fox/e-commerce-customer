<template>
  <div>
    <navbar/>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-7" style="background-color: red;">
          <cart-card v-for="(item, i) in cart" :key="i" :item="item"/>
        </div>
        <div class="col-3">

        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, CartCard },
  name: 'Cart',
  created () {
    this.$store.dispatch('fetchCart')
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>

<style>

</style>
