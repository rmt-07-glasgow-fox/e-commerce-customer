<template>
  <div>History</div>
</template>

<script>
export default {
  name: 'HistoryPage',
  computed: {
    invoices () {
      const userProducts = this.$store.state.userProducts
      const invoicesData = {}

      userProducts.forEach(e => {
        if (invoicesData[e.invoice] === undefined) {
          invoicesData[e.invoice] = []
        }

        invoicesData[e.invoice].push(e)
      })

      delete invoicesData.null
      return invoicesData
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchUserProducts')
    }
  }
}
</script>

<style>

</style>
