<template>
<div>
  <Navbar/>
  <body class="bg-gray-100 container">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{{ generateTotalItems () }} Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <Cartlist
          v-for='cart in carts'
            :key='cart.id'
            :cart='cart'
        />

        <a @click="backToProduct" href="" class="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg  class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5"
           v-for='cart in carts'
            :key='cart.id'
            :cart='cart'>
          <span class="font-semibold text-sm uppercase">{{ cart.Product.name }}</span>
          <span class="font-semibold text-sm">{{ (cart.Product.price * cart.quantity).toLocaleString('en-ID', { style: 'currency', currency: 'IDR' }) }}</span>
        </div>

        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{{ getTotalSummary () }}</span>
          </div>
          <button @click="checkout" class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
</body>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cartlist from '@/components/Cartlist.vue'

export default {
  name: 'Cart',
  components: {
    Navbar,
    Cartlist
  },
  methods: {
    backToProduct () {
      this.$router.push('/products')
    },
    generateTotalItems () {
      return this.carts.length
    },
    getTotalSummary () {
      let totalCart = 0
      this.carts.forEach(el => {
        totalCart += (el.Product.price * el.quantity)
      })
      return totalCart.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    },
    checkout () {
      this.carts.forEach(cart => {
        cart.status = true
      })
      console.log('kena hit')
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
