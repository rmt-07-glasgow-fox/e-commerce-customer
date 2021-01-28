<template>
  <div
    class="max-w-xs min w-xs bg-white shadow-lg rounded-lg overflow-hidden my-1 mx-1">

    <div class="px-2 py-3 h-30">
      <h3 class="text-gray-900 font-bold text-xl uppercase">{{ product.name }}</h3>
    </div>
    <div class="px-4 py-2 h-10">
      <h3 class="text-gray-600 text-md font-semibold text-green-500 mt-1">In-Stock ( {{ product.stock }} Pcs. )</h3>
    </div>
    <img class="h-56 w-full object-cover mt-2" :src="product.image_url">
    <div class="flex items-center justify-between px-2 py-2 bg-gray-900">
      <h4 class="text-gray-200 font-bold text-md">{{ kursRupiah }}</h4>
      <button
        @click="addToCart"
        class="px-1 py-1 bg-white-500 text-sm text-red-600 font-semibold rounded"><i class="fas fa-cart-plus"></i>  Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['product'],
  methods: {
    addToCart () {
      const payload = { id: this.product.id }
      console.log(payload)
      this.$store.dispatch('addToCart', payload)
    }
  },
  computed: {
    kursRupiah () {
      const payload = +this.product.price
      return payload.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>

</style>
