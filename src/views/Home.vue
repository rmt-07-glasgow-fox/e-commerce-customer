<template>
  <div class="home">
    <Navbar/>
    <Carousel/>
    <div id="cartProducts">
    <div class="container-fluid mt-4 mb-5" v-for="product in products" :key="product.id">
      <div class="row">
        <div class="col-sm-3">
          <div class="card" style="width: 18rem;">
            <img src="https://images.unsplash.com/photo-1596171810878-888894ed5b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.price }}</p>
              <a href="#" class="btn btn-primary" @click.prevent="addCart(product.id)">Add To Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel
  },
  methods: {
    addCart (id) {
      this.$store.dispatch('addCart', id)
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>
