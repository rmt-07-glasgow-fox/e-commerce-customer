<template>
  <div class="container">
    <table class="table">
      <thead>
        <th>No</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Date</th>
      </thead>
      <tbody>
        <HistoryRow v-for="(history, index) in histories" :key="index" :history="history" :index="index"></HistoryRow>
      </tbody>
    </table>
  </div>
</template>

<script>
import HistoryRow from '../components/HistoryRow'
export default {
  name: 'History',
  components: {
    HistoryRow
  },
  created () {
    this.$store.dispatch('fetchHistories')
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  }
}
</script>

<style>

</style>
