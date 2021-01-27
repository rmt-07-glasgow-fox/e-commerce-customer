<template>
  <div>
    Name: {{ product.name }}
    Price: {{ product.price }}
    <button @click="addCart(product.id)">ADD TO CART</button>
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
