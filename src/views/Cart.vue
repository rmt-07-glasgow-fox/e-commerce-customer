<template>
  <div>
    <h1>Your Cart</h1>
    <div class="row">
      <div class="col-8">
        <div class="row m-3 justify-content-center">
          <CartCard
            v-for="(cart) in carts"
            :key="cart.id"
            :cart="cart"/>
        </div>
      </div>
      <div class="col-4 justify-content-center">
        <!-- <div
          v-for="(item, index) in priceArr"
          :key="index">
          <b>{{priceArr[index][0]}}: {{priceArr[index][1]}}</b>
        </div> -->
        <!-- <h2><b>Total: {{grandTotal}}</b></h2> -->
        <router-link to="/checkout" class="btn btn-primary">Proceed to Checkout</router-link>
        <!-- <div class="btn btn-primary" @click.prevent="test">Test Show Total</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'

export default {
  name: 'Cart',
  components: {
    CartCard
  },
  data () {
    return {
      priceArr: [],
      grandTotal: 0
    }
  },
  methods: {
    calculateGrandTotal () {
      console.log('calculateGrandTotal()')
      this.carts.forEach(element => {
        const total = element.quantity * element.Product.price
        this.grandTotal = this.grandTotal + total
      })
    }
  },
  watch: {
    carts () {
      console.log('Carts has changed:', this.carts)
      this.grandTotal = 0
      // this.calculateGrandTotal()
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
    // this.calculateGrandTotal()
  }
}

</script>

<style>

</style>
