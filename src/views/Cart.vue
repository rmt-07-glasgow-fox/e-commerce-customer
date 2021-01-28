<template>
  <div class="row">
    <div class="col-md-5 cart-list">
      <div class="list-group">
        <CartCard
      v-for="item in cartItems"
      :key="item.id"
      :cartItem="item"
      class="list-group-item"
      />
      </div>
    </div>
    <div class="col-md-5">
      <h1>total checkout</h1>
      <h3>Total Price = {{ getTotalPrice }}</h3>
      <button class="btn btn-primary">Checkout</button>
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
  computed: {
    cartItems () {
      return this.$store.state.carts
    },
    getTotalPrice () {
      let output = 'Rp.'
      output = output + this.$store.state.totalPrice.toLocaleString('id-ID')
      return output
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style scoped>
  .cart-list {
    margin-left: 15px;
  }
</style>
