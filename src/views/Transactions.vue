<template>
   <div class="transaction-container">
    <Navbar/>
    <div class="container">
    <div style="margin-top: 20px">
      <h4 style="font-weight:bold; padding-bottom: 26px; padding-top:20px">Your History Transaction</h4>
    </div>
      <p style="color: red;"></p>
      <div class="row" style="margin-top: -15px">
      <TransCard
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
      />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TransCard from '../components/TransCard'

export default {
  name: 'Transactions',
  components: {
    Navbar,
    Footer,
    TransCard
  },
  create () {
    this.$store.dispatch('fetchTrans')
  },
  methods: {
    transactions () {
      return this.$store.state.transactions
    },
    err () {
      return this.$store.state.err
    }
  }
}
</script>

<style>

</style>
