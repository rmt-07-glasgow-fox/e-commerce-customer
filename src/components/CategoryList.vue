<template>
  <div>
    <a
      @click="filterByCategory('allData')">
      All Products <br/>
    </a>
    <a
      v-for="category in categories"
      :key="category.id"
      @click="filterByCategory(category.name)">
      {{ category.name }} <br/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  data () {
    return {
      category: ''
    }
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    filterByCategory (categoryName) {
      this.category = categoryName
    }
  },
  created () {
    this.fetchCategories()
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  watch: {
    category (newVal) {
      this.$store.commit('SET_CATEGORY_NAME', newVal)
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
  font-weight: bold;
  color: #2c3e50;
}

a:hover {
  color: #42b983;
}
</style>
