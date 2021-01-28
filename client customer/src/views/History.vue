<template>
<div class="full">
  <NavbarCart></NavbarCart>
  <h1>Payment History</h1>
  <div class="container">
    <button class="btn btn-lg btn-danger" @click.prevent="deleteHistory">Clear History</button>
  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Payment Date</th>
      <th scope="col">Description</th>
      <th scope="col">Amount Payment</th>
    </tr>
  </thead>
  <tbody>
    <tr
    v-for="(history, idx) in histories"
    :key="idx"
    >
      <th scope="row">{{ idx + 1 }}</th>
      <td>{{ history.createdAt }}</td>
      <td>{{ history.description }}</td>
      <td>Rp. {{ history.amount }}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
import NavbarCart from '../components/NavbarCart'

export default {
  name: 'History',
  components: {
    NavbarCart
  },
  methods: {
    deleteHistory () {
      this.$store.dispatch('deleteHistory')
    }
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  },
  created () {
    this.$store.dispatch('fetchHistories')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 20px;
  }
  .container {
    margin-top: 50px;
    padding-bottom: 100px;
  }

  button {
    float: right;
    margin-bottom: 10px;
  }
</style>
