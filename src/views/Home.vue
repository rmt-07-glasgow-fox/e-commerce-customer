<template>
  <div id="home" class="container-fluid d-flex border">
    <div id="sidebar" class="container">
      <Sidebar/>
    </div>
    <div id="main" class="container-fluid">
      <ProductCard
      v-for="(product,index) in products" :key="index"
      :product="product"
      id="product-card"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style scoped>
#home {
  flex-direction: row;
  justify-content: space-evenly;
}
#sidebar {
  display: flex;
  width: 15%;
}

#main {
  display: flex;
  width: 75%;
  flex-direction: row;
  flex-wrap: wrap;
}
#product-card {
  width: 15rem;
  margin: 20px 50px;
}
</style>
