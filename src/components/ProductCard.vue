<template>
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 22rem;">
        <img :src="productList.image_url" style="height: 200px; object-fit: cover;" class="img-fluid card-img-top" alt="...">
        <button class="btn whislist rounded-circle"><i class="far fa-heart fa-lg"></i></button>
        <div class="card-body text-left">
          <h5 class="card-title">{{productList.name}}</h5>
          <p class="card-text">{{productList.price}}</p>
          <p class="card-text">{{productList.stock}}</p>
        </div>
        <button v-bind:class="stock" @click="idProduct(productList.id, productList.stock)">Add to Cart</button>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductCard',
  props: ['productList'],
  methods: {
    idProduct (id, stock) {
      this.cartList.filter(el => {
        if (el.id === id) {
          this.$store.dispatch('incrementQuantity', { id: id, quantity: el.quantity })
        }
      })
      if (!localStorage.getItem('access_token')) {
        Swal.fire('Please Login First')
        this.$router.push('/login')
      } else if (stock === 0) {
        Swal.fire('Stock Habis')
      } else {
        Swal.fire('Success add to cart')
        this.$store.dispatch('addCart', id)
      }
    }
  },
  computed: {
    cartList () {
      return this.$store.state.carts
    },
    product () {
      return this.$store.state.product
    },
    stock: (stck) => {
      if (stck === 0) {
        return 'btn btn-outline-primary disbled'
      } else {
        return 'btn btn-outline-primary'
      }
    }
  },
  created () {
  }
}
</script>

<style>
  .whislist:hover {
    color: red;
  }
  .whislist {
    margin: 0;
    right: 5px;
    top: 10px;
    position: absolute;
  }
</style>
