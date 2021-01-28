<template>
  <div class="home">
    <div class="container">
      <div class="row d-flex justify-content-around">
        <products
          v-for="product in productsData"
          :key="product.id"
          :product="product"
        />
        <br>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '../components/Products.vue'

export default {
  name: 'Home',
  components: {
    Products
  },
  created () {
    this.$store.dispatch('featchReadAll')
  },
  computed: {
    productsData () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
  .row{
    margin: auto;
  }
  .home{
    margin-bottom: 50px;
    padding: 40px;
    background-color: orangered;
  }
</style>
