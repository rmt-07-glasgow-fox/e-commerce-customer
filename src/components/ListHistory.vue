<template>
<tr>
  <td scope="row">{{ date }}</td>
    <td>{{ item.Product.name }}</td>
    <td>{{ item.quantity }}</td>
    <td>$ {{ item.quantity*item.Product.price }}</td>
    <td>Paid</td>
</tr>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ListHistory',
  props: ['item'],
  data () {
    return {
      date: moment(this.item.updatedAt).format('LLL')
    }
  }
}
</script>

<style>

</style>
