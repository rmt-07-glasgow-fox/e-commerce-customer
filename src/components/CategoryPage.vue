<template>
  <div class="mx-auto">
    <div>
      <button type="button" class="list-group-item list-group-item-action" aria-current="true"
        :class="{'active': !category}"
        @click.prevent="changeCategory('')">
        Products
      </button>
      <button type="button" class="list-group-item list-group-item-action"
        v-for="categori in categories"
        :class="{'active': categori.categoryName === category}"
        @click.prevent="filter(categori.categoryName)"
        :key="categori.id">{{ categori.categoryName }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  data () {
    return {
      filterCategory: ''
    }
  },
  watch: {
    filterCategory (newVal) {
      this.$store.commit('changeCategory', newVal)
    }
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    filter (categoryName) {
      this.filterCategory = categoryName
    },
    changeCategory () {
      this.$store.commit('changeCategory', '')
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    category () {
      return this.$store.state.category
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style>
  .ctg-btn {
    color: black ;
  }
</style>
