<template>
  <div>
    CART ITEM
    id: {{ item.id }}
    name: {{ item.Product && item.Product.name }}
    quantity: {{ item.quantity }}
    <button @click="deleteCart(item.id)">REMOVE</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    deleteCart (id) {
      console.log(id)
      this.$store.dispatch('deleteCart', id, true)
    }
  }
}
</script>

<style>

</style>
