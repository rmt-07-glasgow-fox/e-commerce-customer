<template>
<div>
  <div class="card p-2 m-3 shadow-md rounded">
    <img class="" :src="product.image_url" onerror="this.onerror=null;this.src='https://place-hold.it/300x500';" style="height: 400px; width: 267px;" >
    <div class="p-2">
      <h4 class="text-purple-900 font-medium">{{ product.name }}</h4>
      <p class="text-gray-700 font-light text-xs">Rp {{ formatRp(product.price) }}</p>
      <p class="text-gray-700 font-light text-xs">Stok: {{ product.stock }}</p>
      <p href="#" class="text-gray-700 font-light text-xs">Category: {{ product.category }}</p>
    </div>
    <a href="#" @click.prevent="addToCart(product.id)">
    <div class="w-full p-1 text-center bg-purple-400 rounded text-white font-light text-sm hover:text-purple-600 hover:bg-purple-200">
      Add to cart
    </div>
    </a>
  </div>
</div>
</template>

<script>

export default {
  name: 'Card',
  props: ['product'],
  components: {},
  data () {
    return {
    }
  },
  methods: {
    formatRp (value) {
      return value.toLocaleString('id-ID')
    },
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    }
  }
}
</script>
