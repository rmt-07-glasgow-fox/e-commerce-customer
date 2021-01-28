<template>
  <div class="row">
    <div class="col-12">
      <h3 class="text-success">Transaction History</h3>
      <hr>
      <h4 v-if="transactions.length === 0">You Don't Have Any Transaction</h4>
    </div>
    <CardHistory
    v-for="transaction in transactions"
    :key="transaction.id"
    :transaction="transaction"
    />
  </div>
</template>

<script>
import CardHistory from '../components/CardHistory'
export default {
  name: 'History',
  components: {
    CardHistory
  },
  computed: {
    transactions () {
      return this.$store.state.history
    }
  }
}
</script>
