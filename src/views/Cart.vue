<template>
  <div class="h-screen bg-white">
    <div class="py-12">
      <div class="mx-auto bg-white shadow-lg max-w-5xl">
        <div class="flex">
          <div class="w-full p-4 px-5 py-5">
            <div>
              <div class="p-5">
                <h1 class="text-xl font-semibold">shopping bag.</h1>
                <checkout-card
                v-for="cart in carts"
                :key="cart.id"
                :cart="cart"></checkout-card>
                <div
                  class="flex justify-between items-center mt-6 pt-6 border-t"
                >
                  <div class="flex items-center">
                    <span role="button" @click.prevent="backShopping" class="text-md font-medium text-gray-500"
                      >continue shopping</span
                    >
                  </div>
                  <div>
                      <button
                      @click.prevent="checkout"
                      class="bg-black text-white font-semibold text-sm p-2 rounded">checkout</button>
                  </div>
                  <div class="flex justify-center items-end">
                    <span class="text-sm font-medium text-gray-400 mr-3"
                      >subtotal :</span
                    >
                    <span class="font-semibold text-gray-800">IDR {{totalPayment}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutCard from '../components/CheckoutCard.vue'
export default {
  components: { CheckoutCard },
  name: 'Cart',
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPayment () {
      return this.$store.state.totalPayment
    }
  },
  created () {
    this.$store.dispatch('getCarts')
  },
  methods: {
    backShopping () {
      this.$router.push('/')
    },
    checkout () {
      this.$store.dispatch('patchCart')
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if (!localStorage.access_token && !localStorage.user) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style>
</style>
