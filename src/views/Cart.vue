<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="card">
            <div class="card-header">My Cart</div>
            <div class="card-body">
              <CartCard v-for="cart in carts" :key="cart.id" :cart="cart"></CartCard>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-title">checkout</div>
            <div class="card-body">total : {{ totalPrice }}</div>
            <div class="card-footer">
              <button class="btn btn-primary" @click.prevent="doCheckOut" :disabled="carts.length === 0">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard'

export default {
  name: 'Cart',
  components: {
    CartCard
  },
  created () {
    this.$store.dispatch('fetchCart')
  },
  computed: {
    totalPrice () {
      return this.$store.state.totalPrice
    },
    carts () {
      return this.$store.state.carts
    }
  },
  methods: {
    doCheckOut () {
      this.$store.dispatch('checkout')
    }
  }
}
</script>

<style>

</style>
