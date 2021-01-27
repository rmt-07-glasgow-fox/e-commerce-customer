<template>
  <div>
    <Navbar/>
    <ProductCard
      v-for="product in getProducts" :key="product.id"
      v-bind:product="product"
    />
  </div>
</template>

<script>

// @ is an alias to /src
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCategories')
  },
  computed: {
    getProducts () {
      const category = this.$route.params.category
      const products = this.$store.state.products

      if (category) {
        return products.filter((p) => p.category === category)
      } else {
        return products
      }
    }
  }
}
</script>
