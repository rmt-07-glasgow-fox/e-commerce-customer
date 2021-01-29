<template>
  <div class="flex-home">
    <div class="all-category"
     v-if="page === 'products'">
      <h4>Category</h4>
      <a href="/" @click.prevent="category_id = -1">All-categories</a>
      <category
       @filterCategory="filterCategory"
       v-for="category in categories"
       :key="category.id" :target="category"/>
    </div>
    <div class="scroll">
      <div class="all-product"
       v-if="page === 'products'">
        <product-card
         @toProductDetails="toProductDetails"
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
      category_id: -1
    }
  },
  methods: {
    setupProducts () {
      this.$store.dispatch('fetchProduct')
    },
    setupTemplate () {
      this.$store.dispatch('fetchCategories')
      this.$store.dispatch('fetchBanners')
    },
    filterCategory (id) {
      this.category_id = id - 1
    },
    toProductDetails (id) {
      console.log(id)
      this.$store.commit('assignPage', 'details')
    }
  },
  created () {
    this.setupProducts()
    this.setupTemplate()
  },
  computed: {
    products () {
      if (this.category_id < 0) return this.$store.state.products
      else return this.$store.state.products.filter(product => +product.CategoryId === +this.category_id)
    },
    categories () {
      return this.$store.state.categories
    },
    banners () {
      return this.$store.state.banners
    },
    page () {
      return this.$store.state.page
    }
  },
  mounted () {
    this.$store.commit('assignPage', 'products')
  }
}
</script>

<style scoped>
.scroll {
  overflow-y: scroll;
  height: 500px;
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
