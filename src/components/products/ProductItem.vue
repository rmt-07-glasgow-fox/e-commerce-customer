<template>
  <div>
    Name: {{ product.name }}
    Price: {{ product.price }}
    Qty: {{ product.stock }}
    <button @click="addCart(product.id)" v-if="product.stock > 0">ADD TO CART</button>
    <span v-else>Out Of Stock</span>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addCart (ProductId) {
      localStorage.access_token ? this.$store.dispatch('createCart', { ProductId, quantity: 1 }, true)
        : this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
