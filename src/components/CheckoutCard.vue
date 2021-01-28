<template>
        <!-- loop this card -->
      <div class="card mb-3 col-10 mx-2 p-3" style="width: 95%; background-color: black;">
        <div class="row g-0">
          <div class="col-md-9 p-0">
            <div class="card-body" style="text-align: start;">
              <h5 class="card-title text-light">Grand Total price:</h5>
              <p class="card-text text-light m-0 mb-2">{{ rupiahFormat(countSum()) }}</p>
              <button @click.prevent="sendReceipt" class="btn btn-primary btn-sm">CheckOut</button>
              <button @click.prevent="deleteAllOrder" class="btn btn-danger btn-sm mx-2">
                <i class="fa fa-trash"> Delete all Order in my Cart</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- loop this card -->
</template>

<script>
export default {
  name: 'CheckoutCard',
  props: ['allOrderState'],
  data () {
    return {
      count: ''
    }
  },
  methods: {
    countSum () {
      let sum = 0
      for (let i = 0; i < this.allOrderState.length; i++) {
        const price = this.allOrderState[i].Product.price
        const count = this.allOrderState[i].count
        sum += count * price
      }
      this.$store.commit('changeSum', sum)
      return sum
    },
    deleteAllOrder () {
      this.$store.dispatch('deleteAllOrder')
    },
    rupiahFormat (value) {
      return 'Rp. ' + value.toLocaleString()
    },
    sendReceipt () {
      const payload = {
        totalPrice: this.countSum()
      }
      this.$store.dispatch('sendReceipt', payload)
    }
  }
}
</script>

<style>
.smallText {
  font-size: smaller;
}
</style>
