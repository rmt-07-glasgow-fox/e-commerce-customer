<template>
  <div class="container mt-5">
    <table class="table  table-hover">
      <thead class="table-warning">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Subtotal</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <cart-item
          v-for="item in cart"
          :key="item.ProductId"
          :item="item"></cart-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartItem from './CartItem'

export default {
  name: 'CartList',
  components: {
    CartItem
  },
  computed: mapState(['cart']),
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>

</style>
