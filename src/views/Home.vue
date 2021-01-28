<template>
  <div class="flex-row w-screen">
    <Banner :banners="banners"></Banner>
    <div class="container w-screen my-20 mx-auto flex">
      <div>
        <ul class="mt-2">
          <li class="font-semibold my-6">categories.</li>
          <li class="my-3 text-sm" role="button" @click="filterProducts('')">all.</li>
          <li
          v-for="category in categories"
          :key="category.id"
          :value="category.name"
          @click="filterProducts(category.name)"
          role="button" class="my-3 text-sm lowercase">{{ category.name }}.</li>
        </ul>
      </div>
      <div class="container flex flex-wrap justify-items-center justify-center">
        <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        ></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Banner from '../components/Banner.vue'

export default {
  components: { ProductCard, Banner },
  name: 'Home',
  computed: {
    banners () {
      return this.$store.state.banners
    },
    products () {
      return this.$store.getters.filteredByCategory
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getBanners')
    this.$store.dispatch('getCategories')
  },
  methods: {
    filterProducts (payload) {
      this.$store.commit('changeCategory', payload)
    }
  },
  beforeRouteLeave (to, from, next) {
    if (!localStorage.access_token && !localStorage.user) {
      this.$store.commit('toggleLogin', true)
    } else {
      next()
    }
  }
}
</script>
