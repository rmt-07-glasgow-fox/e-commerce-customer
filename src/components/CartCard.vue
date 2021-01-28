<template>
  <div class="cartCard">
    <div class="card cart-card">
      <img class="card-img-top cart-img" :src="cart.Product.image_url" alt="Card image cap">
      <div class="card-body cart-text p-1">
        <h5 class="mb-0 ml-2 card-title text-left">{{cart.Product.name}}<button @click="removeCarts(cart.id)" class="p-0 pl-1 pr-1 mt-3 up-left btn btn-sm btn-outline-danger text-dark border-warning"><small><i class='fas fa-ban' style='font-size:10px;color:red'></i> Remove from cart</small></button></h5>
        <div>
          <small>Stock : {{cart.Product.stock}}</small>
        </div>
        <p class="card-text text-left">
          <button @click="minusCart(cart.id)" class="mr-2 btn btn-sm border-danger btn-outline-danger">-</button>
          {{cart.quantity}}
          <button @click="plusCart (cart.Product.id)" class="ml-2 mr-2 btn btn-sm btn-outline-success border-success">+</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'CartCard',
  props: ['cart'],
  methods: {
    removeCarts (cartId) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can revert this Action',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it~'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('removeCarts', cartId)
            .then(({ data }) => {
              Swal.fire({
                icon: 'success',
                title: 'Success !',
                text: 'This item has Removed from Your Cart'
              })
              this.$store.dispatch('fetchCarts')
            })
            .catch((err) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
              console.log(err)
            })
        }
      })
    },
    plusCart (productId) {
      this.$store.dispatch('addToCarts', productId)
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
          console.log(err)
        })
    },
    minusCart (cartId) {
      this.$store.dispatch('minusCart', cartId)
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
          console.log(err)
        })
    }
  }
}
</script>
