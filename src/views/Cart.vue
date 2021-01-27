<template>
<div class="container">
  <div id="cart-empty-page" class="container d-flex" v-if="this.cartData.length === 0">
    <img src="https://findliquidation.com/assets/image/empty.png" alt="">
    <h1>Your cart is empty</h1>
  </div>
  <div v-else>
    <div id="main" class="d-flex">
      <table class="table table-striped table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <CartCard
          v-for="(cart,index) in cartData" :key="index"
          :cart="cart"
          :index="index"
          id="cart-card"/>
        </tbody>
      </table>
    </div>
    <div id="total" class="container">
      <h4>Total: {{getTotal()}}</h4>
    </div>
    <button @click.prevent="" disabled class="btn btn-secondary">Checkout</button>
  </div>
</div>
</template>

<script>
import CartCard from '../components/CartCard'
import { mapState } from 'vuex'
export default {
  name: 'Cart',
  components: {
    CartCard
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    checkout () {
      this.$store.dispatch('checkout')
    },
    getTotal () {
      let result = 0
      for (let i = 0; i < this.cartData.length; i++) {
        result += this.cartData[i].Product.price
      }
      return this.convert(result)
    },
    convert (price) {
      return 'Rp. ' + price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    }
  },
  created () {
    this.fetchCart()
  },
  computed: {
    ...mapState([
      'cartData'
    ])
  }
}
</script>

<style scoped>
#total {
  padding-top: 20px;
  justify-content: flex-end;
  display: flex;
  height: 60px;
}
#cart-empty-page {
  flex-direction: column;
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
}
</style>
