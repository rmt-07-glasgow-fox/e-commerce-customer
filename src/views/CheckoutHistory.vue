<template>
  <div>
    <h3>Checkout History</h3>
    <div class="row m-3 justify-content-center">
      <HistoryCard
        v-for="(cart) in historyCarts"
        :key="cart.id"
        :cart="cart"/>
    </div>
  </div>
</template>

<script>
import HistoryCard from '../components/HistoryCard.vue'

export default {
  name: 'CheckoutHistory',
  components: {
    HistoryCard
  },
  methods: {},
  watch: {},
  computed: {
    historyCarts () {
      return this.$store.state.historyCarts
    }
  },
  created () {
    this.$store.dispatch('fetchHistoryCarts')
  }
}

</script>

<style>

</style>
