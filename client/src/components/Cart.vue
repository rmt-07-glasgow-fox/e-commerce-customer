<template>
  <div v-if="status === true" class="min-w-2xl min-h-xl w-full xl:flex mb-2 ml-20">
    <img class="h-56 lg:h-auto lg:w-56 object-cover w-full" :src="image">
    <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-3 flex flex-row justify-between leading-normal">
      <div class="mb-8 w-70">
        <p class="text-sm text-grey-dark flex items-center mb-2">
          <i class="fas fa-calendar-alt"></i>
             {{ date }}
        </p>
        <div class="text-black font-bold text-xl mb-2 border-b border-grey-200">{{ name }}</div>
        <div class="row">
          <div class="col">
            <form @submit.prevent="adjustQuantity">
              <div class="row">
                <input type="number" class="w-12 mr-8 text-center p-1" :max="stock" v-model="quantity">
                <button type="submit"> Adjust Quantity </button>
              </div>
            </form>
          </div>
          <div class="col mt-2"> <p><strong> ------------ X  {{ kursRupiah }}</strong> /ea.</p></div>
          <div class="col mt-5 mb-3 font-bold"> <h2><strong>Est:</strong> {{ estimatePrice() }}</h2></div>
          <div class="text-sm mt-2 border-t border-grey-200"><p class="text-grey-dark"><strong>{{ quantity }}</strong> / {{ stock }}</p></div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="text-sm m-5">
          <div class="col m-2">
            <button type="button" class="px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-green-300 border border-green-700 rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Checkout</button>
          </div>
          <div class="col m-2">
            <button @click="removeCart" class="px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-yellow-300 border border-yellow-700 rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  props: ['cart'],
  data () {
    return {
      id: this.cart.id,
      status: this.cart.status,
      quantity: this.cart.quantity,
      name: this.cart.Product.name,
      stock: this.cart.Product.stock,
      image: this.cart.Product.image,
      date: new Date().toUTCString().slice(0, 16)
    }
  },
  computed: {
    kursRupiah () {
      const payload = +this.cart.Product.price
      return payload.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    },
    ...mapState([
      'carts'
    ])
  },
  methods: {
    estimatePrice () {
      const est = _.multiply(this.quantity, this.cart.Product.price)
      return est.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    },
    removeCart () {
      const id = this.cart.Product.id
      const payload = { id }
      this.$store.dispatch('removeCart', payload).then(() => {
        this.checkSumCart()
      })
    },
    checkSumCart () {
      console.log(this.carts.length, '<<< before checkCarts')
      if (this.carts.length === 1) {
        console.log(this.carts.length, '<<< after checkCarts')
        this.$router.push('/products')
      } else {
        this.$store.dispatch('fetchCart')
      }
    },
    adjustQuantity () {
      const quantity = this.quantity
      const id = this.cart.Product.id

      if (quantity && quantity > 0) {
        const payload = { quantity, id }
        // console.log('update')
        this.$store.dispatch('adjustQuantity', payload)
      } else {
        // console.log('delete')
        this.removeCart()
      }
    }
  }
}
</script>

<style>

</style>
