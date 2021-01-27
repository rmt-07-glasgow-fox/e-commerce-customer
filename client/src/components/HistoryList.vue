<template>
  <tr>
    <td>{{ i }} </td>
    <td>{{ history.Product.name }} </td>
    <td>{{ history.quantity }} </td>
    <td>Rp. {{ rupiah }},- </td>
    <td>{{ date }} </td>
  </tr>
</template>

<script>
export default {
  name: 'HistoryList',
  props: ['history', 'i'],
  computed: {
    rupiah () {
      return (this.history.quantity * this.history.Product.price).toLocaleString('id-ID')
    },
    date () {
      return new Date(this.history.updatedAt).toDateString()
    }
  }
}
</script>

<style>

</style>
