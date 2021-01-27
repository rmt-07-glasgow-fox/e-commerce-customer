<template>
  <div class="col-12 overflow-auto mb-5">
    <b>Transaction at {{ getDate }}</b>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody class="text-left">
        <tr
        v-for="(detail, idx) in history"
        :key="idx"
        >
          <th scope="row">{{idx + 1}}</th>
          <td><a class="text-success" @click="getdetail(detail[0])">{{detail[1]}}</a></td>
          <td>Rp. {{Number(detail[3]).toLocaleString()}},-</td>
          <td>{{detail[2]}}</td>
          <td>Rp. {{(Number(detail[2]) * Number(detail[3])).toLocaleString()}},-</td>
        </tr>
        <tr>
          <td colspan="4"></td>
          <td>Rp. {{total}},-</td>
        </tr>
      </tbody>
    </table>
    <hr>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CardHistory',
  props: {
    transaction: Object
  },
  computed: {
    history () {
      const raw = this.transaction.history
      const array = raw.split('\n')
      const output = []
      for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const item = element.split('/s')
        output.push(item)
      }
      return output
    },
    total () {
      let output = 0
      for (let i = 0; i < this.history.length; i++) {
        const element = this.history[i]
        output += Number(element[2]) * Number(element[3])
      }
      return output.toLocaleString()
    },
    getDate () {
      return moment(this.transaction.updatedAt).format('Do MMMM YYYY, h:mm:ss a')
    }
  },
  methods: {
    getdetail (payload) {
      const id = payload
      this.$store.dispatch('GETPRODUCTBYID', { id })
      this.$router.push('/product/' + id).catch(() => { })
    }
  }
}
</script>
<style>
a {
  cursor: pointer;
}
</style>
