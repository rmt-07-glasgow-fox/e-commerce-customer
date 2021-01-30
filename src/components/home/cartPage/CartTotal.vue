<template>
  <div id="CartTotal" class="text-center mb-4">
    <hr />
    <h1 style="font-weight: 300" class="mb-4">
      Total :
      <b style="font-weight: 600" class="text-primary">{{ formatPrice() }}</b>
    </h1>

    <button
      class="btn btn-primary btn-lg"
      style="border-radius: 2.4em"
      v-if="fetchTotalPrice > 0"
      @click="checkoutCart()"
    >
      Checkout
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartTotal',
  methods: {
    formatPrice () {
      return `Rp. ${this.fetchTotalPrice.toLocaleString('id')}`
    },
    checkoutCart () {
      // console.log(this.fetchCarts)
      for (let i = 0; i < this.fetchCarts.length; i++) {
        this.$store.dispatch('checkoutCart', this.fetchCarts[i].id)
      }
    }
  },
  computed: {
    ...mapGetters([
      'fetchTotalPrice',
      'fetchCarts'
    ])
  },
  created () {
    this.$store.dispatch('fetchCarts')
  }
}
</script>
