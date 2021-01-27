<template>
  <div class="container mt-3">
    <table class="table w-75 mx-auto" v-if="paidUserProducts.length > 0">
      <thead class="thead-dark">
        <tr>
          <th class="align-middle"><span class="d-flex justify-content-center">No</span></th>
          <th class="align-middle"><span class="d-flex justify-content-center">Invoice</span></th>
          <th class="align-middle"><span class="d-flex justify-content-center">Transactions</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, key, index) in invoices"
          :key="index">
          <td class="align-middle">{{ index + 1 }}</td>
          <td class="align-middle"><strong>{{ key }}</strong></td>
          <td class="align-middle">
            <table class="w-100 striped table-borderless">
              <tr
                v-for="value in values"
                :key="value.id">
                <td class="w-100">
                  <p class="text-info w-100">{{ value.Product.name }}</p>
                  <pre>{{ value.quantity }} {{ setItem(value.quantity) }} x <strong>{{ setMoneyFormat(value.Product.price) }}</strong> = <strong>{{ setMoneyFormat(value.totalPrice) }}</strong></pre>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="mx-auto mt-5">
      <div style="width: 100%; height: 600px; overflow: hidden">
        <img src=" https://cdn.dribbble.com/users/1057346/screenshots/6306094/asset_1_3x.png" style="width: 100%" class="mx-auto d-block" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage',
  computed: {
    invoices () {
      const userProducts = this.$store.state.paidUserProducts
      const invoicesData = {}

      userProducts.forEach(e => {
        if (invoicesData[e.invoice] === undefined) {
          invoicesData[e.invoice] = []
        }

        invoicesData[e.invoice].push(e)
      })

      delete invoicesData.null
      return invoicesData
    },
    paidUserProducts () {
      return this.$store.state.paidUserProducts
    }
  },
  methods: {
    setMoneyFormat (money) {
      const options1 = { style: 'currency', currency: 'IDR' }
      const numberFormat1 = new Intl.NumberFormat('id-ID', options1)
      return numberFormat1.format(money)
    },
    setItem (number) {
      if (number === 1) return 'item'
      else return 'items'
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
