<template>
  <div class="container mt-4">
    <div class="row row-cols-1 row-cols-md-4 g-4" v-if="products.length !== 0">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"/>
    </div>
    <div v-else >
      <div style="width: 100%; height: 650px; overflow: hidden">
        <img src="https://cdn.dribbble.com/users/1010436/screenshots/13921028/dribble_shot_62_4x.jpg" style="width: 100%;" class="mx-auto d-block" alt="">
      </div>
      <router-link to="/products" class="btn btn-primary mt-5 mx-auto d-block w-25">Start Shopping</router-link>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  name: 'WishlistPage',
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    fetchUserProducts () {
      this.$store.dispatch('fetchUserProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products.filter(prod => {
        const userProducts = this.$store.state.userProducts

        for (let i = 0; i < userProducts.length; i++) {
          if (prod.id === userProducts[i].ProductId && userProducts[i].wishlist) {
            return prod
          }
        }
      })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.fetchProducts()
      this.fetchUserProducts()
    }
  }
}
</script>

<style>

</style>
