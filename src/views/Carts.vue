<template>
<div>
    <Navbar/>
      <span style="font-size: 3em; color: Tomato;">
    <i class="fas fa-camera"></i>
    </span>
    <div class="container">
      <div style="margin-top: 20px;">
        <h4 style="font-weight:bold; padding-bottom: 26px; padding-top:20px">Your Cart</h4>
      </div>
      <h5
      v-if="checked === true"
      style="font-weight:bold"
      >Checkout your Cart</h5>
      <button
      v-if="checked === true"
      class="btn btn-success"
      @click.prevent="paying"
      style="font-weight:bold">
      Checkout
      </button>
      <p style="color: red; font-weight:bold; padding-top:10px;">{{err}}</p>
      <div class="row" style="margin-top: -15px">
        <CartCard
        v-for="item in carts"
        :key="item.Product.id"
        :item="item"
        />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartCard from '../components/CartCard'

export default {
  name: 'Carts',
  components: {
    Navbar,
    Footer,
    CartCard
  },
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
    console.log(this.filteredList)
  },
  methods: {
    paying () {
      this.$store.dispatch('payedCarts')
    }
  },
  computed: {
    checked () {
      return this.$store.state.checkCarts
    },
    carts () {
      return this.$store.state.carts
    },
    err () {
      return this.$store.state.errorData
    }
  }
}
</script>

<style>

</style>
