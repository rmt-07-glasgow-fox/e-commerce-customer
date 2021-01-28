<template>
  <div>
    <h3>Checkout Summary</h3>
    <p>Please review your carts before checking out</p>
    <h2><b>Total: {{grandTotal}}</b></h2>
    <div class="row m-3 justify-content-center">
      <CheckoutCard
        v-for="(cart) in carts"
        :key="cart.id"
        :cart="cart"/>
    </div>
    <div class="btn btn-primary" @click.prevent="checkout">Checkout</div>
  </div>
</template>

<script>
import CheckoutCard from '../components/CheckoutCard.vue'

export default {
  name: 'Checkout',
  components: {
    CheckoutCard
  },
  data () {
    return {
      grandTotal: 0
    }
  },
  methods: {
    calculateGrandTotal () {
      this.carts.forEach(element => {
        const total = element.quantity * element.Product.price
        this.grandTotal = this.grandTotal + total
      })
      console.log('calculateGrandTotal()', this.grandTotal)
    },
    checkout () {
      this.$store.dispatch('checkout')
    }
  },
  watch: {},
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  },
  mounted () {
    this.calculateGrandTotal()
  }
}

</script>

<style>

</style>
