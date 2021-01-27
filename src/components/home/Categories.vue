<template>
  <b-container>
    <div class="p-4">
      <h1 class="mb-4">Category</h1>
      <b-list-group>
        <b-list-group-item href="#">All</b-list-group-item>
        <b-list-group-item href="#" v-for="(category, i) in categories" :key="i">{{
          category.name
        }}</b-list-group-item>
      </b-list-group>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Categories',
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>

<style></style>
