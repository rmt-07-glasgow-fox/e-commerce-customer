<template>
    <div id="checkoutCard" class="flex justify-between items-center pt-6 mt-6 border-t">
      <div class="flex items-center">
        <img :src="cart.Product.url" width="80">
          <div class="flex flex-col ml-6">
            <span class="text-md font-medium w-auto">{{ cart.Product.name }}</span>
          </div>
      </div>
      <div class="flex justify-center items-center">
          <div class="pr-8 flex">
            <span @click="minusCart" role="button" class="font-semibold">-</span>
            <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-10 rounded text-sm px-2 mx-2" min="1"
            readonly="readonly"
            :value="cart.amount">
            <span @click="plusCart" role="button" class="font-semibold">+</span>
          </div>
          <div class="pr-8"> <span class="text-xs font-medium">IDR{{cart.totalPrice}}</span> </div>
          <div><font-awesome-icon icon="trash" role="button" @click.prevent="deleteCart"/></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutCard',
  props: ['cart'],
  methods: {
    plusCart () {
      if (this.cart.amount < this.cart.Product.stock) {
        this.cart.amount += 1
        this.cart.totalPrice += +this.cart.Product.price
        this.$store.dispatch('putCart', {
          id: this.cart.id,
          data: {
            amount: this.cart.amount,
            totalPrice: this.cart.totalPrice
          }
        }).catch(err => {
          err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
          this.$swal({
            icon: 'warning',
            text: err.response.data.message
          })
        })
      }
    },
    minusCart () {
      if (this.cart.amount > 1) {
        this.cart.amount -= 1
        this.cart.totalPrice -= +this.cart.Product.price
        this.$store.dispatch('putCart', {
          id: this.cart.id,
          data: {
            amount: this.cart.amount,
            totalPrice: this.cart.totalPrice
          }
        }).catch(err => {
          err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
          this.$swal({
            icon: 'warning',
            text: err.response.data.message
          })
        })
      }
    },
    deleteCart () {
      this.$store.dispatch('deleteCart', this.cart.id).catch(err => {
        err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      })
    }
  }
}
</script>

<style>

</style>
