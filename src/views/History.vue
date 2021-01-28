<template>
<div class="container my-5">
  <h1>Purchase History</h1>
  <table class="table">
      <thead class="thead-dark">
          <tr>
          <th scope="col">Date</th>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
          </tr>
      </thead>
      <tbody>
          <ListHistory
          v-for="item in paidItems" :key="item.id"
          :item='item'>
          </ListHistory>
      </tbody>
  </table>
</div>
</template>

<script>
import ListHistory from '../components/ListHistory'
export default {
  name: 'History',
  components: {
    ListHistory
  },
  computed: {
    paidItems () {
      return this.$store.getters.paidItems
    },
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
