<template>
  <div class="container">
    <h3>Keep Shopping</h3>
    <Carts
      v-for="cart in carts"
      :key="cart.id"
      :cart="cart"
    />
  </div>
</template>

<script>
import Carts from '../components/carts'
export default {
  components: {
    Carts
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>

<style>

</style>
