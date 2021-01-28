<template>
  <div class="home">
    <router-view />
    <div class="container">
      <product-list />
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { ProductList }
}
</script>

<style scoped>

</style>
