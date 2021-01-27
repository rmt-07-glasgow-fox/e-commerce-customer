<template>
  <div class="container">
    <div class="row" v-if="userProducts.length !== 0">
      <div class="col col-md-8">
        <cart-card
          v-for="userProduct in userProducts"
          :userProduct="userProduct"
          :key="userProduct.id"></cart-card>
      </div>
      <div class="col col-md-4 mt-4">
        <div class="border p-4">
          <h5><strong>Order Summary</strong></h5>
          <div class="d-flex justify-content-between"
            v-for="userProduct in userProducts"
            :key="userProduct.id">
            <p style="font-size: 15px">{{ money(userProduct.Product.price) }} x {{ userProduct.quantity }}</p>
            <p style="font-size: 15px"><strong>{{ money(userProduct.totalPrice) }}</strong></p>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <p style="font-size: 15px">Total Payment ({{ userProducts.length }} items)</p>
            <p style="font-size: 15px"><strong>{{money(totalPrice)}}</strong></p>
          </div>
          <button class="btn btn-primary w-100 mt-4"
            @click.prevent="payNow">Pay Now</button>
        </div>
      </div>
    </div>
    <div v-else class="mx-auto mt-5">
      <div style="width: 100%; height: 600px; overflow: hidden">
        <img src="https://cdn.dribbble.com/users/1010436/screenshots/11302442/media/2a3ea72748e92c00a972259ee9550416.jpg" style="width: 100%" class="mx-auto d-block" alt="">
      </div>
      <router-link to="/products" class="btn btn-primary mt-5 mx-auto d-block w-25">Start Shopping</router-link>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard'
export default {
  name: 'CartPage',
  components: {
    CartCard
  },
  methods: {
    money (price) {
      const options1 = { style: 'currency', currency: 'IDR' }
      const numberFormat1 = new Intl.NumberFormat('id-ID', options1)
      const string = numberFormat1.format(price)
      return string.substring(0, string.length - 3)
    },
    payNow () {
      const userProducts = this.userProducts
      const invoice = (Math.floor(Math.random() * 100000000000000000)).toString()

      for (let i = 0; i < userProducts.length; i++) {
        this.$store.dispatch('updateCart', {
          product: { id: userProducts[i].ProductId },
          quantity: 0,
          totalPrice: 0,
          paymentStatus: 'paid',
          invoice
        })
        this.$store.dispatch('updateStock', {
          id: userProducts[i].Product.id,
          stock: userProducts[i].Product.stock - userProducts[i].quantity
        })
      }
    }
  },
  computed: {
    userProducts () {
      return this.$store.state.userProducts
    },
    totalPrice () {
      const userProducts = this.$store.state.userProducts
      let sum = 0
      userProducts.forEach(e => {
        sum += e.totalPrice
      })

      return sum
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchUserProducts', 'pending')
    }
  }
}
</script>

<style>

</style>
