<template>
  <div>
    <div>
      <Navbar />
    </div>
    <br><br><br><br>
    <div class="container">
        <div>
          <section class="bg0 p-t-23 p-b-130">
          <div>
            <div class="p-b-10">
              <h3 class="ltext-103 cl5">
                Product Overview
              </h3>
            </div>
            <!-- category button -->
            <div class="flex-w flex-sb-m p-b-52">
              <div class="flex-w flex-l-m filter-tope-group m-tb-10">
                <button
                  class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                >
                  All Products
                </button>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-5 g-4 pt-">
              <div id="product-card" class="container">
              <div class="row isotope-grid">
            <ProductCard v-for="product in products" :key="product.id" :product="product"/>
              </div>
              </div>
          </div>
          </section>
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
<style scoped>

</style>
