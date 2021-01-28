<template>
  <tr>
    <td>{{ idx + 1 }}</td>
    <td>{{ history.Product.name }}</td>
    <td>{{ history.amount }} </td>
    <td>{{ maskPrice }}</td>
    <td>{{ masKDate }}</td>
  </tr>
</template>

<script>
export default {
  name: 'HistoryList',
  props: ['history', 'idx'],
  computed: {
    totalProductPrice () {
      return this.history.amount * this.history.Product.price
    },
    maskPrice () {
      return `Rp. ${this.totalProductPrice.toLocaleString('id', 'ID')}`
    },
    masKDate () {
      const currentDate = new Date(this.history.updatedAt)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      return `${currentDate.getDay()} - ${months[currentDate.getMonth()]} - ${currentDate.getFullYear()}`
    }
  }
}
</script>

<style>

</style>
