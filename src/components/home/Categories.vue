<template>
  <b-container>
    <div class="p-4">
      <h1 class="mb-4">Category</h1>
      <b-list-group>
        <b-list-group-item
          @click.prevent="filterProducts(0)"
          :class="{ active: filterActive === 0 }"
          href="#"
          >All</b-list-group-item
        >
        <b-list-group-item
          @click.prevent="filterProducts(category.id)"
          href="#"
          v-for="(category, i) in categories"
          :key="i"
          :class="{ active: category.id === filterActive }"
          >{{ category.name }}</b-list-group-item
        >
      </b-list-group>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      filterActive: 0,
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
  methods: {
    filterProducts(id) {
      this.filterActive = id;
      this.$store.dispatch('filterProducts', id);
    },
  },
};
</script>

<style></style>
