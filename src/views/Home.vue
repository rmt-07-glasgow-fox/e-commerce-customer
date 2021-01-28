<template>
  <div class="home">
    <Navbar/>

    <div class="container-fluid content">
      <Sidebar/>
      <div class="row">
        <Banner/>
        <div class="col-lg d-flex flex-wrap justify-content-start align-items-center product">
          <Product
            v-for="product in products.data"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Banner from '@/components/Banner.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Banner,
    Product
  },
  methods: {
    allProducts () {
      this.$store.dispatch('getAllProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.allProducts()
  }
}
</script>

<style scoped>
.content {
  margin-top: 70px;
}
.product {
  margin-top: 10px;
}
.row {
  /* margin-top: px; */
  width: 85%;
  float: right;
}
</style>
