<template>
  <div class="container pt-3">
      <div class="row">
        <div class="col-sm-8 text-left">
          <h3 class="text-success">Cart</h3>
          <hr>
          <h4 v-if="carts.length === 0">Your Cart is Empty.</h4>
          <div class="row align-self-center" v-if="carts && carts.length > 0">
            <CardCart
            v-for="cart in carts"
            :key="cart.id"
            :product="cart"
            />
          </div>
        </div>
        <div class="col-sm-4">
          <h3 class="text-success">Sub Total</h3>
          <hr>
          <div class="text-center">
            <button class="btn btn-outline-danger" :disabled="SubTotal === 0" @click="clearCart">Clear Cart</button>
          </div>
          <hr>
          <div class="text-center m-3 p-3 shadow">
            <h2>Rp. {{ SubTotalView }}</h2>
            <button class="btn btn-outline-primary" :disabled="SubTotal === 0" @click="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import CardCart from '../components/CardCart'
export default {
  name: 'Cart',
  components: {
    CardCart
  },
  data () {
    return {
      subtotal: 0
    }
  },
  computed: {
    carts () {
      return this.$store.getters.carts
    },
    SubTotal () {
      let output = 0
      if (this.carts) {
        for (let i = 0; i < this.carts.length; i++) {
          const element = this.carts[i]
          output += element.Cart.total
        }
      }
      return output
    },
    SubTotalView () {
      return Number(this.SubTotal).toLocaleString()
    }
  },
  methods: {
    checkout () {
      const id = this.$store.state.cart.id
      this.$store.dispatch('CHECKOUT', { id })
    },
    clearCart () {
      const id = this.$store.state.cart.id
      this.$store.dispatch('CLEARCART', { id })
    }
  }
}
</script>
