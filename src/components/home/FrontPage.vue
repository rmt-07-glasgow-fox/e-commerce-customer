<template>
  <div id="FrontPage">
    <div class="container-fluid" style="padding: 0">
      <div class="row row-style">
        <!-- carousel -->
        <carousel />
        <!-- carousel// -->
        <h1 style="margin-bottom: 32px">Our Categories</h1>
        <!-- category-card -->
        <div id="CategoryCard">
          <div class="row">
            <category-card
              v-for="(HomeCategory, i) in fetchHomeCategories"
              :key="HomeCategory.id"
              :HomeCategory="HomeCategory"
              :i="i"
              :isLogin="isLogin"
            />
            <div class="col-6 col-md-3">
              <router-link
                to="/product"
                style="text-decoration: none"
                @click.native="scrollToTop"
              >
                <div
                  class="card bg-danger text-white"
                  style="margin-bottom: 16px"
                >
                  <div class="card-body">
                    <h5 class="card-title">All Games</h5>

                    <p class="card-text text-white" style="font-size: 12px">
                      {{ fetchTotalCategories }} games
                      <chevron-right-icon size="1x"></chevron-right-icon>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- category-card// -->
        <h1 style="margin-top: 12px; margin-bottom: 32px">Our Products</h1>
        <!-- product-card -->
        <div class="container-fluid" style="padding: 0">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <product-card
              v-for="Product in fetchHomeProducts"
              :key="Product.id"
              :Product="Product"
              :isLogin="isLogin"
            />
          </div>
        </div>
        <!-- product-card// -->
        <router-link
          to="/product"
          style="margin: 32px auto; width: 240px"
          @click.native="scrollToTop"
        >
          <button
            class="btn btn-primary"
            style="border-radius: 2.4em; width: 240px"
          >
            See More <chevron-right-icon size="1x"></chevron-right-icon>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './frontPage/Carousel.vue'
import CategoryCard from './frontPage/CategoryCard.vue'
import ProductCard from './frontPage/ProductCard.vue'
import { ChevronRightIcon } from 'vue-feather-icons'
import { mapGetters } from 'vuex'

export default {
  name: 'FrontPage',
  props: ['isLogin'],
  components: {
    Carousel,
    CategoryCard,
    ProductCard,
    ChevronRightIcon
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  },
  computed: {
    ...mapGetters([
      'fetchHomeProducts',
      'fetchHomeCategories',
      'fetchTotalCategories'
    ])
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCategories')
  }
}
</script>

<style scoped>
.card {
  border-radius: 0.8em;
}

.row-style {
  margin: 36px;
}

@media screen and (max-width: 420px) {
  .row-style {
    margin: 36px 12px;
  }
}
</style>
