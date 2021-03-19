<template>
  <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div class="flex w-2/5">
      <div class="w-45">
        <img class="h-24" :src="cart.Product.image_url">
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm my-auto">{{ cart.Product.name }}</span>
        <a href="#" @click.prevent="removeCart(cart.id)" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
      </div>
    </div>
    <div class="flex justify-center w-1/5">
      <div><strong>{{ cart.quantity }}</strong><br>
        <input v-model="quantity" class="w-25 mr-2" type="number" min="0">
        <a href="#" @click.prevent="updateCart(cart.id, cart.Product.id)" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Update</a>
      </div>
    </div>
    <span class="text-center w-1/5 font-semibold text-sm">Rp. {{ cart.Product.price }}</span>
    <span class="text-center w-1/5 font-semibold text-sm">Rp. {{ cart.Product.price * cart.quantity }}</span>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['cart'],
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
    },
    updateCart (id, productId) {
      this.$store.dispatch('updateCart', { id, productId, quantity: this.quantity })
      this.quantity = ''
    }
  }
}
</script>

<style>

</style>
