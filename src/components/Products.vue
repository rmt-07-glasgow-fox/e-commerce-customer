<template>
  <div class="col-3" style="margin-bottom: 12px">
    <div class="card">
      <img class="card-img-top" style="height: 53%; object-fit: contain" :src="product.image_url" alt="Card image cap">
      <div class="card-body" style="text-align: left">
        <h5 class="card-title" style="text-align: center">{{ product.name }}</h5>
        <p class="card-text">Price: <span style="float: right">Rp {{ product.price }}</span></p>
        <p class="card-text">Stock: <span style="float: right">{{ product.stock }}</span></p>
        <button v-if="role == 'admin'" @click="toEditForm(product.id)" class="btn btn-success">Edit</button>
        <button v-if="role == 'admin'" @click="destroyProduct(product.id)" class="btn btn-success" style="float: right">Delete</button>
        <button v-if="role == 'customer'" @click="checkCart(product.id)" class="btn btn-success">Add To Cart</button>
        <button v-if="role == 'customer'" @click="checkWishlist(product.id)" class="btn btn-success" style="float: right"><i class="fa fa-heart"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'Product',
  data () {
    return {
      email: localStorage.email,
      role: localStorage.role
      // isInCart: localStorage.getItem(`isInCart-${this.product.id}`)
    }
  },
  props: ['product', 'changePage'],
  methods: {
    toEditForm (id) {
      this.$store.dispatch('getProductDetail', id)
    },
    destroyProduct (id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          return this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkCart (id) {
      axios({
        method: 'GET',
        url: `/carts/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          if (data.message === 'not in cart') {
            return axios({
              method: 'POST',
              url: '/carts',
              headers: {
                access_token: localStorage.getItem('access_token')
              },
              data: {
                ProductId: id
              }
            })
              .then(({ data }) => {
                this.$store.dispatch('fetchCarts')
                this.changePage('cartList')
              })
              .catch(err => {
                console.log(err)
              })
          } else {
            // console.log(data)
            if (data.quantity < this.product.stock) {
              console.log('masuk axios edit')
              return axios({
                method: 'PUT',
                url: `/carts/${id}`,
                headers: {
                  access_token: localStorage.getItem('access_token')
                },
                data: {
                  quantity: data.quantity + 1,
                  totalPrice: data.quantity * this.product.price
                }
              })
                .then(({ data }) => {
                  console.log('masuk then')
                  this.$store.dispatch('fetchCarts')
                })
                .catch(err => {
                  console.log(err)
                })
            } else {
              console.log('quantity cannot exceed stock')
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkWishlist (id) {
      axios({
        method: 'GET',
        url: `/wishlist/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          if (data.message === 'not in wishlist') {
            return axios({
              method: 'POST',
              url: '/wishlist',
              headers: {
                access_token: localStorage.getItem('access_token')
              },
              data: {
                ProductId: id
              }
            })
              .then(({ data }) => {
                this.$store.dispatch('fetchWishlist')
                this.changePage('wishList')
              })
              .catch(err => {
                console.log(err)
              })
          } else {
            console.log('already in wishlist')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
