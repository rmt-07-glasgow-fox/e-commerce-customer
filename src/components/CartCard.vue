<template>
  <div class="card m-2 col-8" style="width: 12rem;">
    <div class="row">
      <div><img class="m-3" :src="cart.Product.image_url" alt="Card image cap" width="150" height="150"></div>
      <div class="card-body" style="">
        <!-- DISPLAY FORM -->
        <div class="">
          <h4>{{cart.Product.name}}</h4>
          <p class="card-text"><b>Rp {{total.toLocaleString('id-ID')}}</b></p>
          <p class="text-danger" v-if="quantity > cart.Product.stock">Quantity exceeds stock</p>
          <p class="card-text">Quantity:
            <input type="number" size="10px" min="1" v-model="quantity">
            (max: {{cart.Product.stock}})</p>
          <div>
            <a href="" class="btn-sm btn-danger" @click.prevent="removeCart(cart.id)">Remove from cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'CartCard',
  props: ['cart'],
  data () {
    return {
      ProductId: +this.cart.Product.id,
      quantity: +this.cart.quantity,
      total: +this.cart.quantity * this.cart.Product.price
    }
  },
  methods: {
    removeCart (id) {
      console.log('removeCart ID=', id)
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, remove it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('removeCartAxios', id)
          Swal.fire(
            'Removed!'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled'
          )
        }
      })
    }
  },
  watch: {
    quantity () {
      console.log('Quantity has changed:', this.quantity)
      this.total = +this.quantity * this.cart.Product.price
      const payload = {
        ProductId: +this.ProductId,
        quantity: +this.quantity
      }
      this.$store.dispatch('addToCart', payload)
      // this.$store.dispatch('fetchCarts')
    }
  }
}
</script>

<style>
</style>
