<template>
  <div class="row">
    <div class="card m-1 bg-light shadow" style="width: 16rem;" v-for="product in products" :key="product.id">
      <img :src="product.image_url" class="card-img-top" :alt="product.name" height="240px">
      <div class="card-body p-3">
        <h5 class="card-title text-center fw-bold">{{ product.name }}</h5>
        <p class="card-text mt-4 ml-2">Price: {{ formatRp(product.price) }}</p>
        <p class="card-text ml-2">Stock: {{ product.stock }}</p>
        <div class="text-center">
          <a href="#" class="btn btn-success text-center" @click.prevent="addToCart(product.id, product.stock)">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eCommerceAPI from '../api/eCommerce'
import Swal from 'sweetalert2'
import formatRp from '../helpers/formatRp'

export default {
  name: 'ProductsCard.vue',
  props: ['product'],
  methods: {
    addToCart (productId, productStock) {
      Swal.fire({
        title: 'How many items?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Quantity',
        inputAttributes: {
          min: 1,
          max: 25,
          step: 1
        },
        inputValue: 1
      })
        .then(data => {
          if (productStock < data.value) {
            return data
          } else if (data.isConfirmed) {
            return eCommerceAPI.post(`/cart/${localStorage.id}`, { productId, quantity: data.value }, {
              headers: { access_token: localStorage.access_token }
            })
          } else {
            return data
          }
        })
        .then(data => {
          if (data.status) {
            this.$store.dispatch('fetchCart', localStorage.id)
            Swal.fire('Item added to cart')
          } else if (productStock < data.value) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'We don\'t have enough stock'
            })
          }
        })
        .catch(err => {
          console.log(err, 'err addToCart')
          Swal.fire('Item already added to cart, open cart to set quantity')
        })
    },
    formatRp (value) {
      return formatRp(value)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
