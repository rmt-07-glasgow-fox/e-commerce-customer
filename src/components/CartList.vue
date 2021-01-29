<template>
    <div id="cartList">
        <div class="container mt-3">
            <div class="card">
                <div class="card-body">
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="cart in carts" :key="cart.id">
                                <th>{{ cart.Product.name }}</th>
                                <td></td>
                                <td>{{ cart.Product.price}}</td>
                                <td>
                                  <input v-model="cart.quantity" class="w-25 mr-2" type="number">
                                </td>
                                <td>
                                <a href="#" class="btn btn-primary mr-2" @click.prevent="updateCart(cart.id, cart.quantity)">Update Quantity</a>
                                <a href="#" class="btn btn-danger" @click.prevent="deleteCart(cart.id)">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      quantity: 1
    }
  },
  methods: {
    updateCart (cartId, quantity) {
      const payload = {
        id: cartId,
        quantity: quantity
      }

      this.$store.dispatch('updateCart', payload)
        .then(() => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(() => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err, 'gabisa delete gan!')
        })
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  },
  computed: {
    ...mapState([
      'carts'
    ])
  }
}
</script>

<style>

</style>
