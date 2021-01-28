<template>
  <div class="px-5 mt-3">
    <!-- <div class="text-start">
      <span class="fs-4 fw-bold px-3">{{ category.name }}</span>
    </div> -->
    <div class="d-flex justify-content-start flex-wrap p-3">
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'ListProducts',
  components: {
    Card
  },
  props: ['products']
}
</script>

<style>

</style>
