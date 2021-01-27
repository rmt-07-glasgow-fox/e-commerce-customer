<template>
  <div class="history">
    <div class="container center">
      <h1>History</h1>
      <table v-if="histories.length > 0" class="table table-striped">
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
      <div v-else>
        <h2>Your don't have any history</h2>
        <img src="https://i.pinimg.com/originals/77/75/5e/77755e565ef7ddbff2546231cd8732bf.png" height="300" width="300" class="imagi">
      </div>
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
.imagi {
  object-fit: cover;
}
</style>
