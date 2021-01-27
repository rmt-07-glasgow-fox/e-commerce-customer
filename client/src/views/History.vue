<template>
  <div class="history">
    <div class="container center">
      <h1>History</h1>
      <table class="table table-striped">
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Date</th>
        </thead>
        <tbody>
          <HistoryList
            v-for="(history, i) in histories"
            :key="i"
            :history="history"
            :i="i+1"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HistoryList from '../components/HistoryList'
import { mapState } from 'vuex'

export default {
  name: 'History',
  components: {
    HistoryList
  },
  methods: {
    fetchHistory () {
      this.$store.dispatch('fetchHistory')
    }
  },
  created () {
    this.fetchHistory()
  },
  computed: {
    ...mapState([
      'histories'
    ])
  }
}
</script>

<style>
.center {
  text-align: center;
}
</style>
