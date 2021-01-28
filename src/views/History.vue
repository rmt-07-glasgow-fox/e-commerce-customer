<template>
  <div id="history">
    <div class="container-fluid">
      <Navbar />

      <div class="content">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th>Checked Out At</th>
            </tr>
          </thead>
          <tbody>
            <HistoryContent
              v-for="(history, n) in histories"
              :key="history.id"
              :history="history"
              :n="n + 1"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HistoryContent from '@/components/HistoryContent.vue'

export default {
  name: 'History',
  components: {
    Navbar,
    HistoryContent
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  },
  created () {
    this.$store.dispatch('fetchHistories')
  }

}
</script>

<style scoped>
.content {
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
}
</style>
