<template>
<div class="make-center">
  <div class="cont-cart">
    <div class="cart-page">
        <table>
          <thead>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </thead>
          <tbody>
              <tr v-if="listCart === null || !listCart.product">
              <td> there's no item in cart</td>
            </tr>
            <tr v-else v-for="cart in listCart.product" :key="cart.id">
            <td>
              <div class="cart-info">
                <img :src="cart.image_url" alt="">
              <div>
                <p>{{cart.name}}</p>
                <small>Price: {{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cart.price)}}</small>
                <a href="javascript:void(0)" @click="removeFromCart(cart.ProductCart.id)"> Remove</a>
              </div>
              </div>
            </td>
            <td><input type="number"
            @change.prevent="listenChange(cart.id, cart.stock, cart.ProductCart.quantity, $event.target.value)"
            :value="cart.ProductCart.quantity">
            </td>
            <td>{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cart.ProductCart.totalPrice)}}</td>
            </tr>
          </tbody>
        </table>
        <div class="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td v-if="listCart" >{{isNaN(listCart.totalPayment) === null  ? 0 : new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(listCart.totalPayment) }}</td>
            </tr>
          </table>
        </div>
      <a class="button" @click.prevent="checkout" style="margin-top: 100px;margin-left:730px" href="javascript:void(0)"> Checkout</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'CartForm',
  data () {
    return {
      totalItem: 0,
      listenValue: 0
    }
  },
  computed: {
    ...mapState('cart', ['listCart'])
  },
  methods: {
    ...mapActions('cart', ['getAllCart', 'removeItemCart', 'addItemCart']),
    ...mapActions('transaction', ['checkoutCart']),
    removeFromCart (id) {
      this.removeItemCart(id)
    },
    listenChange (productId, stock, myQuantity, quantity) {
      this.addItemCart({ productId, quantity: +quantity })
    },
    checkout () {
      this.checkoutCart()
    }
  },
  created () {
    this.getAllCart()
  }
}
</script>
