<template>
  <tr>
    <th scope="row">{{ n }}</th>
    <td class="product d-flex justify-content-even"><img :src="history.Product.image_url"> {{ history.Product.name }}</td>
    <td>{{ history.quantity }}</td>
    <td>{{'Rp ' + (history.Product.price * history.quantity).toLocaleString('id-ID')}}</td>
    <td>{{ date }}</td>
  </tr>
</template>

<script>
import moment from 'moment'

export default {
  name: 'HistoryContent',
  data () {
    return {
      date: moment(this.history.updatedAt).format('LLL')
    }
  },
  props: ['history', 'n']
}
</script>

<style scoped>
.history {
  margin-top: 70px;
}
img {
  width: 25px;
  height: 25px;
}
.product img {
  margin-right: 40px;
}
</style>
