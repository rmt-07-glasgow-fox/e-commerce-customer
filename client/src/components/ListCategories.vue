<template>
  <div class="px-5 mt-3">
    <div class="text-start">
      <span class="fs-4 fw-bold px-3">{{ category.name }}</span>
      <span @click="getCategoriesId(category.id)" class="fw-bold text-primary">Lihat Semua</span>
    </div>
    <div class="d-flex justify-content-start flex-wrap p-3">
      <Card
        v-for="product in filterCategory"
        :key="product.id"
        :product="product"
      ></Card>
    </div>
    <hr>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'ListCategories',
  components: {
    Card
  },
  props: ['category'],
  methods: {
    getCategoriesId (id) {
      this.$router.push(`/categories/${id}`)
    }
  },
  computed: {
    filterCategory () {
      return this.category.Products.slice(0, 5)
    }
  }
}
</script>

<style>

</style>
