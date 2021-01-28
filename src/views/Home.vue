<template>
  <div>
    <navbar/>
    <jumbotron/>
    <div class="container-fluid mt-5" style="color: #493323;">
      <div class="row ml-5">
        <div class="col-md">
          <div class="container-fluid">
            <h3>Product Overview:</h3>
            <div class="row row-cols-1 row-cols-md-5 g-4 pt-4">
              <product-card
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    Jumbotron,
    ProductCard
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  created () {
    this.fetchProduct()
  }
}
</script>
