<template>
  <div class="px-5">
    <div v-if="transactions.length < 1">
      <div class="fs-3">History empty</div>
      <button class="btn btn-outline-success" @click="$router.push('/')">Buy Now</button>
    </div>
    <table class="table" v-else>
      <tr>
        <th class="text-start" width="40%">Product</th>
        <th>Purchase Date</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Total</th>
      </tr>
      <history-card
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </table>
  </div>
</template>

<script>
import HistoryCard from '../components/HistoryCard.vue'
export default {
  components: { HistoryCard },
  name: 'History',
  computed: {
    transactions () {
      return this.$store.state.transactions
    }
  },
  methods: {
    fetchTransaction () {
      if (localStorage.access_token) this.$store.dispatch('fetchTransaction')
    }
  },
  created () {
    this.fetchTransaction()
  },
  beforeRouteEnter (to, from, next) {
    if (to.path === '/history' && !localStorage.access_token) next({ name: 'Login' })
    else next()
  }
}
</script>

<style scoped>
  tr{
    border-bottom: 1px solid #e3e3e3;
  }
</style>
