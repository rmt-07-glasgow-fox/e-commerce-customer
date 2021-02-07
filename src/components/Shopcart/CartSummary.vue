<template>
  <div class="flex justify-center m-4">
    <div
      class="flex flex-col w-full shadow w-full card p-5 m-10 rounded"
      style="height: 250px"
    >
      <p class="py-3 ml-1">Cart summary:</p>
      <div class="p-4 rounded text-sm">
        <p>
          Total:
          {{
            getTotalPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </p>
      </div>
      <button type="button" class="btn btn-primary" @click="payAll">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartSummary',
  computed: {
    getTotalPrice () {
      const data = this.$store.state.userData.itemoncart.filter(el => el.Cart.isBought === false)
      let total = 0
      data.forEach((element) => {
        total += element.Cart.quantity * element.price
      })
      return total
    }
  },
  methods: {
    payAll () {
      this.$store.dispatch('checkout')
    }
  }
}
</script>

<style>
</style>
