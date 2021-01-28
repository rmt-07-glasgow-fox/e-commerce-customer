<template>
  <div class="relative flex flex-col items-center justify-between col-span-4 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
    <div class="flex w-80 h-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="w-3/5 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')">
      </div>
      <div class="w-2/5 p-2">
        <h1 class="text-gray-900 font-bold text-2xl">Backpack</h1>
        <div class="flex item-center justify-between mt-3">
          <h1 class="text-gray-700 font-bold text-xl">Stock: 15</h1>
        </div>
        <div class="flex item-center mt-2">
          <div>
            <span class="input-number-decrement">Amount: </span>
          <br>
          <input class="input" type="number" value="0" min="1" max="9">
          </div>
        </div>
        <div class="flex item-center justify-between mt-3">
          <h1 class="text-gray-700 font-bold text-xl">IDR. 22000</h1>
        </div>
        <div class="flex item-center justify-between mt-3">
          <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    update () {
      this.$router.push(`/updateProduct/${this.product.id}`)
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
    }
  }
}
</script>
