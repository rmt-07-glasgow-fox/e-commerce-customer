<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="cart.Product.image_url" style="width: 180px; height: 200px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ cart.Product.name }}</h5>
          <p class="card-text" style="font-weight:bolder">Price: {{ currency(cart.Product.price) }}</p>
          <div>
          </div>
          <button class="btn btn-primary btn-sm" @click.prevent="minAmt"><i class="fa fa-minus-square" style="font-size:15px;"></i></button>
          {{ cart.quantity }}
          <button class="btn btn-primary btn-sm" @click.prevent="plusAmt"><i class="fa fa-plus-square" style="font-size:15px;"></i></button>
          <a href=""><i style="color: red; margin-left: 50px" class="fa fa-trash" @click.prevent="deleteCart"></i></a>
        </div>
          <p class="mt-4"><span><strong id="summary">Total Price: Rp. {{ currency(cart.quantity * cart.Product.price) }}</strong></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'CartBody',
  props: ['cart'],
  methods: {
    minAmt () {
      const newQuantity = this.cart.quantity - 1

      if (newQuantity < 1) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Order must have a quantity to proceed'
        })
      } else {
        // console.log(newQuantity)
        const obj = {
          ProductId: this.cart.ProductId,
          quantity: newQuantity
        }
        this.$store.dispatch('patchQuantity', obj)
          .then(data => {
            this.$store.dispatch('fetchCart')
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    plusAmt () {
      const newQuantity = this.cart.quantity + 1
      if (newQuantity > this.cart.Product.stock) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "You can't put order more than stock"
        })
      } else {
        // console.log(newQuantity)
        const obj = {
          ProductId: this.cart.ProductId,
          quantity: newQuantity
        }
        this.$store.dispatch('patchQuantity', obj)
          .then(data => {
            this.$store.dispatch('fetchCart')
          })
          .catch(err => {
            console.log(err)
          })
      }
      const obj = {
        ProductId: this.cart.ProductId,
        quantity: newQuantity
      }
      this.$store.dispatch('patchQuantity', obj)
        .then(data => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    currency (value) {
      return value.toLocaleString('id-ID')
    },
    deleteCart () {
      const ProductId = this.cart.ProductId
      // console.log(ProductId)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteCart', ProductId)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  }
}
</script>

<style>

</style>
