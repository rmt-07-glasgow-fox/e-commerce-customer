<template>
  <div>
    <div class="container-fluid banner">
      <div class="row">
        <div class="col-12 text-center align-self-center">
          <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :loop="true" :autoplayTimeout="10000" v-if="activebanner">
            <slide class="slide"
            v-for="banner in activebanner"
            :key="banner.id"
            :style="'background-image: url('+ banner.image_url +')'"
            />
          </carousel>
          <b-skeleton-img no-aspect height="50vh" v-else></b-skeleton-img>
        </div>
      </div>
    </div>
    <div class="container pt-3">
      <div class="row">
        <div class="col-sm-2 text-left">
          <h3 class="text-success">Category</h3>
          <hr>
          <div v-if="categories">
            <div
            v-for="category in categories"
            :key="category.id">
            <input type="checkbox" :id="category.name" :value="category.id" v-model="filteredCategories">
            <label class="pl-3" :for="category.name"><i :class="'fas fa-' + category.image + ' text-success mr-1'"></i> {{ category.name }}</label>
            </div>
          </div>
          <b-skeleton-img v-else no-aspect height="150px"></b-skeleton-img>
        </div>
        <div class="col-sm-10">
            <h3 class="text-success">Products</h3>
            <hr>
          <div class="container" v-if="filteredProduct">
            <div class="row">
              <CardProduct
              v-for="product in filteredProduct"
              :key="product.id"
              :product="product"
              />
            </div>
          </div>
          <b-skeleton-img v-else no-aspect height="150px"></b-skeleton-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '../components/CardProduct'
export default {
  name: 'Home',
  components: {
    CardProduct
  },
  computed: {
    activebanner () {
      return this.$store.getters.activebanner
    },
    categories () {
      return this.$store.state.categories
    },
    filteredCategories: {
      get () {
        return this.$store.state.filteredCategories
      },
      set (value) {
        this.$store.commit('FILTERINGCATEGORIES', value)
      }
    },
    filteredProduct () {
      return this.$store.getters.filteredProduct
    }
  }
}
</script>

<style>
.slide {
  height: 50vh;
  padding: 0 !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
