<template>
<div class="make-center">
  <div class="cont-cart">
    <div class="cart-page">
        <table>
          <thead>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Subtotal</th>
          </thead>
          <tbody>
            <tr v-if="listTransaction.length === 0">
              <td> there's no transaction</td>
            </tr>
            <tr v-for="transaction in listTransaction" :key="transaction.id">
            <td>
              <div class="cart-info">
                <img :src="transaction.productImage" alt="">
              <div>
                <p>{{transaction.productName}}</p>
                <small>Price: {{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(transaction.productPrice)}}</small>
              </div>
              </div>
            </td>
            <td><p>{{transaction.quantity}}</p></td>
            <td><p>{{transaction.createdAt}}</p></td>
            <td>{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(transaction.quantity * transaction.productPrice)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'HistoryForm',
  computed: {
    ...mapState('transaction', ['listTransaction'])
  },
  methods: {
    ...mapActions('transaction', ['getAllTransaction'])
  },
  created () {
    this.getAllTransaction()
  }
}
</script>
