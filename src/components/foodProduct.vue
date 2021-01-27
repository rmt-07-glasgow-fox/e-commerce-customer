<template>
  <div>
      <div id="productCardBox" class="col-10" style="margin-left:8%; margin-top: -20%; margin-bottom: 50px;">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <ProductCard
          v-for="Product in Products"
          :key="Product.id"
          :Product="Product"
          ></ProductCard>
        </div>
      </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard
  },
  props: ['Products']
}
</script>

<style>

</style>
