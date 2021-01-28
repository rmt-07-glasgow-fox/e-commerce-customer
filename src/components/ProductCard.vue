<template>
  <div class="col">
    <div class="card h-100">
      <img :src="product.image_url" class="card-img-top" style="width: auto; max-height:250px">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Rp. {{ currency(product.price) }}</p>
        <p class="card-text">Stock: {{ product.stock }}</p>
      </div>
      <div class="card-footer">
      <button class="btn btn-danger" style="width: 100%" @click.prevent="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
    </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart () {
      const ProductId = this.product.id
      // console.log(ProductId)
      if (!localStorage.access_token) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You must login first'
        })
      } else {
        this.$store.dispatch('addCart', ProductId)
          .then(data => {
            Swal.fire({
              icon: 'success',
              title: 'Added to Cart',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    currency (value) {
      return value.toLocaleString('id-ID')
    }
  }
}
</script>

<style>

</style>
