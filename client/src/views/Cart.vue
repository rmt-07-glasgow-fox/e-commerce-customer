<template>
  <div class="cart">
    <div class="container center">
      <h1>My Cart</h1>
      <table v-if="carts.length > 0" class="table table-striped">
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
            <td><button @click.prevent="checkout" type="button" class="btn btn-sm btn-warning"><i class="fas fa-dollar-sign"></i> Checkout</button></td>
          </tr>
        </tbody>
      </table>
      <div v-else>
        <h2>Your Cart is empty, Lets shopping!</h2>
        <img src="https://i.pinimg.com/originals/b8/de/0a/b8de0a75f8c0de506d822c82c4fd2ea3.png" height="300" width="300" class="imagi">
      </div>
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
    },
    checkout () {
      this.$store.dispatch('checkout')
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
.imagi {
  object-fit: cover;
}
</style>
