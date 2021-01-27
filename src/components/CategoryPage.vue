<template>
  <div class="mx-auto">
    <div>
      <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
        Categories
      </button>
      <button type="button" class="list-group-item list-group-item-action"
        v-for="category in categories"
        :key="category.id">{{ category.categoryName }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style>

</style>
