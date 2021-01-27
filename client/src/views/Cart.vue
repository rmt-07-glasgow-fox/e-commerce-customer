<template>
  <div class="cart">
    <div class="container center">
      <h1>My Cart</h1>
      <table class="table table-striped">
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <CartList
            v-for="(cart, i) in carts"
            :key="i"
            :cart="cart"
            :i="i+1"
          />
          <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>Rp. {{ totalBayar }},-</td>
            <td><button type="button" class="btn btn-sm btn-warning"><i class="fas fa-dollar-sign"></i> Checkout</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartList
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchCart()
  },
  computed: {
    ...mapState([
      'carts',
      'totalBayar'
    ])
  }
}
</script>

<style>
.center {
  text-align: center;
}
</style>
