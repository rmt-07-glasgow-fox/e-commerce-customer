<template>
  <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div class="flex w-2/5"> <!-- product -->
      <div class="w-20">
        <img class="h-24" :src="cart.Product.image_url">
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm">{{ cart.Product.name }}</span>
        <a href="" @click.prevent="updateQ" class="text-red-500 text-xs">Update Quantity</a>
        <a href="" @click="deleteCart" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
      </div>
    </div>
    <div class="flex justify-center w-1/5">
      <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>

      <input class="mx-2 border text-center w-8" type="text" v-model="dataProduct.quantity">

      <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>
    </div>

    <span class="text-center w-1/5 font-semibold text-sm">{{ converIdr }}</span>
    <span class="text-center w-1/5 font-semibold text-sm"> {{ generateTotalPrice () }}</span>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Cartlist',
  props: ['cart'],
  data () {
    return {
      dataProduct: {
        cartId: this.cart.id,
        quantity: this.cart.quantity,
        id: this.cart.ProductId
      }
    }
  },
  computed: {
    converIdr () {
      return this.cart.Product.price.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    }
  },
  methods: {
    generateTotalPrice () {
      const total = _.multiply(this.dataProduct.quantity, this.cart.Product.price)
      return total.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    },
    updateQ () {
      this.$store.dispatch('updateCart', this.dataProduct)
    },
    deleteCart () {
      this.$store.dispatch('deleteCart', this.dataProduct)
    }
  }
}
</script>

<style>

</style>
