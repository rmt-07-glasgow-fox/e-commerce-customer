<template>
  <tr>
    <th scope="row" class="pt-3">{{ idx + 1 }}</th>
    <td class="pt-4 px-0">
      <div class="d-flex justify-content-center" @click="statusChange(cart.id)">
        <input class="" type="checkbox" v-model="patch.status">
      </div>
    </td>
    <td class="pt-3">{{ cart.Product.name }}</td>
    <td class="pt-3 text-end pe-5">{{ formatRp(cart.Product.price) }}</td>
    <td>
      <div class="input-group">
        <input type="number" class="form-control text-center" v-model="cart.quantity" placeholder="item-quantity" aria-label="item-quantity" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="patchCart(cart.id)">Change</button>
      </div>

    </td>
    <td class="pt-3 px-0">
      <div class="d-flex justify-content-center" @click="deleteFromCart(cart.id)">
        <img :src="cancelIcon" alt="cancel" height="20px" width="20px">
      </div>
    </td>
  </tr>
</template>

<script>
import formatRp from '../helpers/formatRp'
import eCommerceAPI from '../api/eCommerce'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  name: 'CartList',
  props: ['cart', 'idx'],
  data () {
    return {
      cancelIcon: require('../assets/cancel-x.png'),
      patch: {
        status: this.cart.status,
        quantity: this.cart.quantity
      }
    }
  },
  methods: {
    formatRp (value) {
      return formatRp(value)
    },
    deleteFromCart (cartId) {
      eCommerceAPI.delete(`/cart/${cartId}`, {
        headers: { access_token: localStorage.access_token }
      })
        .then(data => {
          this.$store.dispatch('fetchCart', localStorage.id)
          Toast.fire({
            icon: 'success',
            title: 'Item removed from cart'
          })
        })
        .catch(err => {
          console.log(err, 'error deleteFromCart')
        })
    },
    statusChange (cartId) {
      if (this.cart.status) {
        this.cart.status = false
        this.patchCart(cartId)
      } else {
        this.cart.status = true
        this.patchCart(cartId)
      }
    },
    patchCart (cartId) {
      if (this.cart.Product.stock >= this.cart.quantity) {
        const obj = {
          status: this.cart.status,
          quantity: this.cart.quantity
        }
        eCommerceAPI.patch(`/cart/${cartId}`, obj, {
          headers: { access_token: localStorage.access_token }
        })
          .then(data => {
            this.$emit('updateTotalPrice')
            Toast.fire({
              icon: 'success',
              title: 'Item updated'
            })
          })
          .catch(err => {
            console.log(err, 'error patchCart')
          })
      } else {
        this.cart.quantity = this.cart.Product.stock
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'We don\'t have enough stock'
        })
      }
    }
  }
}
</script>
