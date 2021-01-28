<template>
<div>
  <Navbar></Navbar>
  <div class="jumbotron text-center">
    <h3>Checkout History</h3>
  </div>
  <div class="container mt-5">
    <div class="col-lg-12">
      <div class="card wish-list mb-3">
        <div class="card-body">
          <h5 class="mb-4">Checkout(<span>{{checkouts.length}}</span> items)</h5>
            <HistoryCard v-for="checkout in checkouts" :key="checkout.id" :checkout="checkout"></HistoryCard>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HistoryCard from '../components/HistoryCard'
import Navbar from '../components/Navbar'
export default {
  name: 'Checkout',
  components: {
    HistoryCard,
    Navbar
  },
  computed: {
    checkouts () {
      return this.$store.state.checkouts
    }
  },
  created () {
    this.$store.dispatch('fetchCheckout')
  }
}
</script>

<style>

</style>
