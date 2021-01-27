<template>
  <div class="col-3" style="margin-bottom: 12px">
    <div class="card">
      <img class="card-img-top" style="height: 53%" :src="product.image_url" alt="Card image cap">
      <div class="card-body" style="text-align: left">
        <h5 class="card-title" style="text-align: center">{{ product.name }}</h5>
        <p class="card-text">Price: <span style="float: right">Rp {{ product.price }}</span></p>
        <p class="card-text">Stock: <span style="float: right">{{ product.stock }}</span></p>
        <button v-if="role == 'admin'" @click="toEditForm(product.id)" class="btn btn-dark">Edit</button>
        <button v-if="role == 'admin'" @click="destroyProduct(product.id)" class="btn btn-dark" style="float: right">Delete</button>
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
    }
  }
}
</script>

<style>

</style>
