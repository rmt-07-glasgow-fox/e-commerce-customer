<template>
  <div>
    Halos
    <!-- navbar -->
    <Navbar/>
    <div class="container mx-auto flex flex-row px-4 mt-20 mb-20">
    <div class="w-1/2 flex justify-center items-center">
      <!-- content -->
      <div class="">
        <h1 class="ml-5 pb-5 text-purple-800 font-bold">MY CART:</h1><!-- left -->
        <div class="container flex flex-row flex-wrap justify-center items-center" style="height: 500px; overflow-y: scroll;">
          <CartCard
          v-for="cart in carts"
          :key="cart.id"
          :cart="cart"/>
        </div>
      </div>
      </div>
      <!-- right -->
      <div class="w-1/2 flex justify-center m-5"> <!-- right -->
          <div class="w-full card p-5 m-10 flex flex-col w-full shadow bg-purple-100 rounded" style="height: 250px">
            <p class="py-3 ml-1 text-purple-800 font-bold">Cart summary: </p>
            <div class="bg-purple-200 p-4 text-gray-700 rounded text-sm">
            <p>Total:  Rp {{ getSum(carts) }}</p>
            </div>
            <button @click.prevent="checkout" type="submit" class="bg-blue-400 w-full rounded-lg py-2 mt-4 shadow-lg text-white font-semibold  text-medium hover:bg-blue-500">CHECK OUT</button>
          </div>
      </div>
      <!-- right -->
    </div>
    <Footer/>
  </div>
</template>

<script>
import CartCard from '@/components/CartCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'MyCart',
  components: {
    CartCard,
    Navbar,
    Footer
  },
  methods: {
    getSum (carts) {
      let totalPrice = 0
      for (let i = 0; i < carts.length; i++) {
        if (carts[i].status) {
          const temp = carts[i].quantity * carts[i].Product.price
          totalPrice += temp
        }
      }
      return totalPrice.toLocaleString('id-ID')
    }
  },
  created () {
    this.$store.dispatch('fetchAllCarts')
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}

</script>
