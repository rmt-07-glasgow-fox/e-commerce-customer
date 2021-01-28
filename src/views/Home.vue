<template>
  <div class="home">
    <Navbar/>
    <div class="container">
    <div style="margin-top: 20px"><h4 style="font-weight:bold">New Brand Product</h4></div>
      <p style="color: red;">{{err}}</p>
      <div class="row" style="margin-top: -15px">
      <Card
      v-for="product in products"
      :key="product.id"
      :product="product"
      />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer,
    Card
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      if (this.$store.state.filterName) {
        return this.$store.state.products.filter(data => {
          return data.name.toLowerCase().includes(this.$store.state.filterName.toLowerCase())
        })
      } else {
        return this.$store.state.products
      }
    },
    err () {
      return this.$store.state.err
    }
  }
}
</script>

<style>

</style>
