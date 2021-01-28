<template>
  <tr>
    <td class="text-start">
      <img :src="transaction.Product.image_url" width="100px">
      {{ transaction.Product.name }}
    </td>
    <td>{{ purchaseDate }}</td>
    <td>{{ price }}</td>
    <td>{{ transaction.quantity }}</td>
    <td>{{ totalPrice }}</td>
  </tr>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['transaction'],
  computed: {
    price () {
      return this.transaction.Product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })
    },
    purchaseDate () {
      const date = new Date(this.transaction.updatedAt)
      return date.toLocaleString('id-ID')
    },
    totalPrice () {
      const total = this.transaction.Product.price * this.transaction.quantity
      return total.toLocaleString('id', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>

</style>
