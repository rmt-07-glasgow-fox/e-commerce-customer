<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12">
        <product-cards/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCards from '@/components/ProductCards.vue'

export default {
  name: 'Home',
  components: {
    ProductCards
  }
}
</script>
