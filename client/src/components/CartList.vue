<template>
  <div class="container">
    <div class="flex flex-col justify-content-center ml-20">
      <Cart
        v-for="cart in carts"
        :key="cart.id"
        :cart="cart"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cart from './Cart'
export default {
  name: 'CartList',
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  components: {
    Cart
  },
  computed: {
    ...mapState([
      'carts'
    ])
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style>

</style>
