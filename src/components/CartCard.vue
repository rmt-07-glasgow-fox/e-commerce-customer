<template>
  <tr>
    <td class="text-start">
      <img :src="cart.Product.image_url" width="100px">
      {{ cart.Product.name }}
    </td>
    <td>{{ price }}</td>
    <td>
      <div>
        <div class="qty">
          <button class="btn btn-sm btn-outline-secondary" @click="quantity--"><i class="fas fa-minus"></i></button>
          <input type="text" class="btn btn-sm btn-outline-secondary" v-model="quantity" disabled>
          <button class="btn btn-sm btn-outline-secondary" @click="quantity++"><i class="fas fa-plus"></i></button>
        </div>
        <div class="qty">stock: {{ cart.Product.stock }}</div>
      </div>
    </td>
    <td>{{ totalPrice }}</td>
    <td><button class="btn btn-sm btn-outline-danger" @click="deleteCart">Delete</button></td>
  </tr>
</template>

<script>
// const debounce = (fn, delay) => {
//   let timeoutID
//   return function (...args) {
//     if (timeoutID) {
//       clearTimeout(timeoutID)
//     }
//     timeoutID = setTimeout(() => {
//       fn(...args)
//     }, delay)
//   }
// }
import { debounce } from 'vue-debounce'

export default {
  name: 'CartCard',
  props: ['cart'],
  watch: {
    quantity: debounce(function (val) {
      if (val > this.cart.Product.stock) val = this.cart.Product.stock
      else if (val < 0) val = 0
      this.quantity = val

      this.$store.dispatch('updateQuantity', { id: this.cart.id, quantity: val })
    }, 200)
  },
  data () {
    return {
      quantity: ''
    }
  },
  computed: {
    price () {
      return this.cart.Product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })
    },
    totalPrice () {
      const total = this.cart.Product.price * this.cart.quantity
      return total.toLocaleString('id', { style: 'currency', currency: 'IDR' })
    }
  },
  methods: {
    deleteCart () {
      this.$store.dispatch('deleteCart', this.cart.id)
    }
  },
  created () {
    this.quantity = this.cart.quantity
  }
}
</script>

<style scoped>
  input{
    text-align: center;
    background-color: transparent;
    width: 70px;
  }
</style>
