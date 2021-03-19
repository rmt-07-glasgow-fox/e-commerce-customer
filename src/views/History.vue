<template>
  <div class="bg-gray-100">
  <div class="container mx-auto">
    <div class="bg-white px-10 py-10">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
            <h2 class="text-2xl font-semibold leading-tight">Transaction History</h2>
        </div>
        <a href="#" @click.prevent="goToHome" class="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                      class="py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Product Detail
                  </th>
                  <th
                      class="py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Quantity
                  </th>
                  <th
                      class="py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total Price
                  </th>
                  <th
                      class="py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Checkout Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <HistoryCard v-for="transaction in transactions" :key="transaction.id" :transaction="transaction"/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import HistoryCard from '../components/HistoryCard'
export default {
  name: 'History',
  components: { HistoryCard },
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  },
  computed: {
    transactions () {
      return this.$store.state.transactions
    }
  },
  created () {
    this.$store.dispatch('fetchHistory')
  }
}
</script>

<style>

</style>
