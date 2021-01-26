<template>
  <div>
    <Navbar/>
    <div class="container">
    <div style="margin-top: 20px"><h3 >Products List: </h3></div>
      <p style="color: red;">{{err}}</p>
      <div class="row">
      <Card
      v-for="product in products"
      :key="product.id"
      :product="product"
      />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card'
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Card,
    Navbar
  },
  created () {
    this.$store.dispatch('fetchAllProduct')
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    err () {
      return this.$store.state.err
    }
  }
}
</script>
