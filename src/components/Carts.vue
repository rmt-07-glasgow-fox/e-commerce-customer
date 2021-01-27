<template>
  <div class="card mb-3" style="width: 100%; height: 220px">
    <div class="row" style="height: 100%">
      <div class="col-md-4" style="height: 100%">
        <img :src="cart.Product.image_url" class="card-img" alt="edfdf" style="height: 100%; width: 100%; object-fit: contain">
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <h2 class="card-title">{{ cart.Product.name }}</h2>
          <p class="card-text" style="text-align: left">Price: <span style="float: right">Rp {{ cart.Product.price }}</span></p>
          <p class="card-text" style="text-align: left">Quantity: <span style="float: right">{{ cart.quantity }}</span></p>
          <p class="card-text" style="text-align: left">Total Price: <span style="float: right">Rp {{ getTotalPrice() }}</span></p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-body text-bold">
          <p>Change Quantity</p>
          <form action="#">
            <input type="number" v-model="newQuantity"><br><br>
            <button @click.prevent="updateCart(cart.id)" class="btn btn-success">Confirm</button>
          </form>
          <button @click.prevent="destroyCart(cart.id)" class="btn btn-danger" style="float: right"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'
export default {
  name: 'Cart',
  props: ['cart'],
  data () {
    return {
      newQuantity: this.cart.quantity
    }
  },
  methods: {
    getTotalPrice () {
      const totalPrice = this.cart.quantity * this.cart.Product.price
      return totalPrice
    },
    destroyCart (id) {
      axios({
        method: 'DELETE',
        url: `/carts/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (id) {
      if (this.newQuantity <= this.cart.Product.stock) {
        axios({
          method: 'PUT',
          url: `/carts/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            quantity: this.newQuantity,
            totalPrice: this.getTotalPrice()
          }
        })
          .then(({ data }) => {
            this.$store.dispatch('fetchCarts')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log('quantity cannot exceed stock')
      }
    }
  }
}
</script>

<style>

</style>
