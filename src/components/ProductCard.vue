<template>
  <div class="relative flex flex-col items-center justify-between col-span-4 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
    <div class="flex w-80 h-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="w-80 bg-cover">
        <img class="card-img-top" :src="product.image_url">
      </div>
      <div class="w-80 p-2">
        <h1 class="text-gray-900 font-bold text-2xl">{{ product.name }}</h1>
        <div class="flex item-center justify-between mt-3">
          <h1 class="text-gray-700 font-bold text-xl">Stock: {{ product.stock }}</h1>
        </div>
        <div class="flex item-center mt-2">
          <div>
            <span class="input-number-decrement">Amount: </span>
          <br>
          <input v-model="addToCart.amount" class="input" type="number" placeholder="1" min="1" max="100">
          </div>
        </div>
        <div class="flex item-center justify-between mt-3">
          <h1 class="text-gray-700 font-bold text-xl">IDR. {{ product.price }}</h1>
        </div>
        <div class="flex item-center justify-between mt-3">
          <button @click="addCart" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      addToCart: {
        amount: '',
        id: this.product.id
      }
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('addCart', this.addToCart)
    }
  }
}
</script>

<style scoped>
img{
  height: 228px;
  width: 156px;
}
</style>
