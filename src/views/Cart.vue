<template>
<div>
  <navbar/>
  <div class="container-fluid pt-4 bg">
    <div class="row justify-content-center">
      <div class="col-9">
        <h1>Shopping Cart</h1>
    <div v-for="(product, i) in productCart" :key="product.id" class="row justify-content-center">
      <b-card no-body class="overflow-hidden mb-3" style="max-width: 540px;">
        <b-row no-gutters class="pb-3">
          <b-col md="6">
            <b-card-img :src="product.imageUrl" alt="Image" class="rounded-0 p-2"> {{ product.price }}</b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body class="text text-left" style="font-family: GraphikBold" :title="product.name">
              <b-card-text class="text text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi corrupti placeat odio explicabo.
                <p class="text text-left">Stock: {{ product.stock }}</p>
                <div class="container mt-4">
                  <div class="row justify-content-left mb-3">
                    <div class="col-3">
                      <font-awesome-icon style="cursor: pointer" icon="trash" @click="delCart(i)" />
                    </div>
                    <div class="col-3" v-if="product.stock !== 0">
                      <font-awesome-icon style="cursor: pointer" icon="minus-circle" @click="minus(i)" />
                    </div>
                    <div class="col-3" v-if="product.stock !== 0">
                      <p class="text text-left" style="font-family: GraphikBold; font-size: 17px;">{{ product.qty > product.stock ? product.stock : product.qty }}</p>
                    </div>
                    <div class="col-3" v-if="product.stock !== 0">
                      <font-awesome-icon icon="plus-circle" style="cursor: pointer"  @click="plus(i)" />
                    </div>
                  </div>
                  <p v-if="product.stock !== 0" class="text text-left" style="font-family: GraphikBold;">Total: {{ (product.price * product.qty).toLocaleString() }}</p>
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
      </div>
      <!-- Checkout -->
      <div class="col-2">
        <h1>Checkout</h1>
        <div class="card shadow">
          <div class="card-body">
            <h4>Total Qty {{ total.totalQty }}</h4>
            <hr>
            <h4>Total Price {{ total.totalPrice.toLocaleString() }}</h4>
            <hr>
            <div class="border border-white">
              <button class="btn btn-success w-100" @click.prevent="checkout">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  methods: {
    fetchAllCart () {
      this.$store.dispatch('getAllCart')
    },
    async checkout () {
      const status = []
      for (let i = 0; i < this.productCart.length; i++) {
        try {
          console.log(this.productCart[i].cartId)
          const id = this.productCart[i].cartId
          const response = await this.$store.dispatch('checkout', id)
          console.log(response)
          status.push({
            productName: this.productCart[i].name,
            status: 'Success'
          })
        } catch (error) {
          console.log(error.response.data)
          status.push({
            productName: this.productCart[i].name,
            status: 'Out Of Stock'
          })
        }
      }
      let message = ''
      status.forEach(stat => {
        message += stat.productName + ' ' + stat.status + '\n'
      })
      this.$swal.fire({
        html: '<pre>' + message + '</pre>'
      }).then(() => {
        this.fetchAllCart()
      })
    },
    minus (idx) {
      if (this.productCart[idx].qty !== 1) {
        this.productCart[idx].qty -= 1
        this.updateCart(idx)
      }
    },
    plus (idx) {
      if (this.productCart[idx].qty < this.productCart[idx].stock) {
        this.productCart[idx].qty += 1
        this.updateCart(idx)
      }
    },
    updateCart (idx) {
      const payload = {
        id: this.productCart[idx].cartId,
        qty: this.productCart[idx].qty
      }
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$store.dispatch('updateCart', payload)
      }, 500)
    },
    async delCart (idx) {
      await this.$store.dispatch('deleteCart', this.productCart[idx].cartId)
      this.$swal.fire({
        icon: 'success',
        title: 'Success',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        this.fetchAllCart()
      })
    }
  },
  computed: {
    productCart () {
      return this.$store.state.cart
    },
    total () {
      let totalPrice = 0
      let totalQty = 0
      this.productCart.forEach(product => {
        if (product.stock === 0) product.qty = 0
        totalPrice += product.price * product.qty
      })
      this.productCart.forEach(product => {
        totalQty += product.qty
      })
      return {
        totalPrice,
        totalQty
      }
    }
  },
  created () {
    this.fetchAllCart()
  }
}
</script>

<style>
</style>
