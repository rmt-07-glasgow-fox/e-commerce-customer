<template>
  <div>
    CART ITEM
    ProductId: {{ item.Product && item.Product.id }} -
    name: {{ item.Product && item.Product.name }} -
    Stock: {{ item.Product && item.Product.stock }} -
    <button @click="updateQty(item.id, -1)" :disabled="item.quantity <= 1">-</button>
    quantity: {{ item.quantity }}
    <button @click="updateQty(item.id, 1)" :disabled="item.Product && (item.quantity >= item.Product.stock)">+</button>
    <button @click="deleteCart(item.id)" >REMOVE</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    deleteCart (id) {
      console.log(id)
      this.$store.dispatch('deleteCart', id, true)
    },
    updateQty (id, quantity) {
      this.$store.dispatch('updateQty', { id, quantity }, true)
    }
  }
}
</script>

<style>

</style>
