<template>
  <div class="flex-home">
    <div class="all-category">
      <h4>Category</h4>
      <category
       v-for="category in categories"
       :key="category.id" :target="category"/>
    </div>
    <div class="scroll">
      <div class="all-product"
      v-if="page === 'products'">
        <product-card
        v-for="product in products"
        :key="product.id" :item="product"/>
      </div>
      <product-details
      v-else/>
    </div>
    <banners class="flex-end"/>
  </div>
</template>

<script>
import Banners from '../components/Banners.vue'
import Category from '../components/Category.vue'
import ProductCard from '../components/ProductCard.vue'
import ProductDetails from '../components/ProductDetails.vue'

export default {
  components: { ProductCard, ProductDetails, Category, Banners },
  name: 'Home',
  data () {
    return {
      page: 'products'
    }
  },
  methods: {
    setupProducts () {
      this.$store.dispatch('fetchProduct')
    },
    setupTemplate () {
      this.$store.dispatch('fetchCategories')
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.setupProducts()
    this.setupTemplate()
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    categories () {
      return this.$store.state.categories
    },
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style scoped>
.scroll {
  overflow-y: scroll;
  max-height: 500px;
  width: 65%;
}

.flex-home {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 40px;
  text-align: left;
}

.flex-end {
  position: fixed;
  right: 5px;
  top: 10%;
}

.all-category {
  flex-direction: column;
}

.all-product {
  margin-left: 100px;
}
</style>
