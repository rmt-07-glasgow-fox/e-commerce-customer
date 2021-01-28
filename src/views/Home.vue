<template>
  <div class="home">
    <div class="container mt-5" v-show="$store.state.page === 'home'">
      <div class="row row-cols-3">
        <Products v-for="product in $store.state.products" :key="product.id" :product="product"  />
      </div>
    </div>
    <!-- <div class="container mt-2" v-show="$store.state.page === 'cart'" >
        <h1>MY CART</h1>
        <div class="row row-cols-4">
            <Cart v-for="cart in this.$store.state.carts" :key="cart.id" :cart="cart" />
        </div>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '../components/Products'

export default {
  data () {
    return {
      page: this.$store.state.page
    }
  },
  name: 'Home',
  components: {
    Products
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
