<template>
  <div class="container">
    <div class="row" v-if="pendingUserProducts.length !== 0">
      <div class="col col-md-8">
        <cart-card
          v-for="pendingUserProduct in pendingUserProducts"
          :pendingUserProduct="pendingUserProduct"
          :key="pendingUserProduct.id"></cart-card>
      </div>
      <div class="col col-md-4 mt-4">
        <div class="border p-4">
          <h5><strong>Order Summary</strong></h5>
          <div class="d-flex justify-content-between"
            v-for="pendingUserProduct in pendingUserProducts"
            :key="pendingUserProduct.id">
            <p style="font-size: 15px">{{ money(pendingUserProduct.Product.price) }} x {{ pendingUserProduct.quantity }}</p>
            <p style="font-size: 15px"><strong>{{ money(pendingUserProduct.totalPrice) }}</strong></p>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <p style="font-size: 15px">Total Payment ({{ pendingUserProducts.length }} items)</p>
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
      const pendingUserProducts = this.pendingUserProducts
      const invoice = (Math.floor(Math.random() * 100000000000000000)).toString()

      for (let i = 0; i < pendingUserProducts.length; i++) {
        this.$store.dispatch('updateCart', {
          product: { id: pendingUserProducts[i].ProductId },
          quantity: 0,
          totalPrice: 0,
          paymentStatus: 'paid',
          invoice
        })
        this.$store.dispatch('updateStock', {
          id: pendingUserProducts[i].Product.id,
          stock: pendingUserProducts[i].Product.stock - pendingUserProducts[i].quantity
        })
      }
    }
  },
  computed: {
    pendingUserProducts () {
      return this.$store.state.pendingUserProducts
    },
    totalPrice () {
      const pendingUserProducts = this.$store.state.pendingUserProducts
      let sum = 0
      pendingUserProducts.forEach(e => {
        sum += e.totalPrice
      })

      return sum
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchUserProducts')
    }
  }
}
</script>

<style>

</style>
