<template>
  <div>
    <h1 class="text-center mb-3 mt-3">Order History</h1>
    <div v-if="!histories.length">
      <h3>No Data</h3>
    </div>
    <div class="container" v-if="histories.length">
      <table class="table mt-3">
        <thead>
          <th>No</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Date</th>
        </thead>
        <tbody>
          <history-list
            v-for="(history, idx) in histories"
            :key="idx"
            :idx="idx"
            :history="history"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HistoryList from '../components/HistoryList.vue'

export default {
  name: 'History',
  components: {
    HistoryList
  },
  methods: {
    fetchHistories () {
      this.$store.dispatch('fetchHistories')
    }
  },
  created () {
    this.fetchHistories()
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
