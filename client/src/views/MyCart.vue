<template>
  <div style="position: relative;">
    <Navbar/>
    <div class="container" >
      <div style="margin-top: 20px"><h3>Your Cart: </h3></div>
      <p style="color: red;">{{err}}</p>
      <div class="row" >
        <CartCard
        v-for="item in carts"
        :key="item.Product.id"
        :item="item"
        />
      </div>
    </div><br><br><br><br>
    <Footer/>
  </div>
</template>

<script>
import CartCard from '../components/CartCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  name: 'MyCart',
  components: {
    CartCard,
    Navbar,
    Footer
  },
  created () {
    this.$store.dispatch('fetchAllCart')
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    err () {
      return this.$store.state.err
    }
  }
}
</script>

<style>

</style>
