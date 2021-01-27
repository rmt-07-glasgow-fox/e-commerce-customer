<template>
  <div id="CategoryCard">
    <div class="row">
      <div
        class="col-6 col-md-3"
        v-for="(HomeCategory, i) in fetchHomeCategories"
        :key="HomeCategory.id"
      >
        <router-link to="/category" style="text-decoration: none">
          <div :class="colorCategory[i]" style="margin-bottom: 16px">
            <div class="card-body">
              <h5 class="card-title">{{ HomeCategory.name }}</h5>
              <a
                href=""
                :class="textColorCategory[i]"
                style="text-decoration: none"
              >
                <p class="card-text" style="font-size: 12px">
                  {{ HomeCategory.Products.length }} games

                  <chevron-right-icon size="1x"></chevron-right-icon>
                </p>
              </a>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-6 col-md-3">
        <router-link to="/category" style="text-decoration: none">
          <div class="card bg-danger text-white" style="margin-bottom: 16px">
            <div class="card-body">
              <h5 class="card-title">Show All</h5>

              <p class="card-text text-white" style="font-size: 12px">
                {{ fetchTotalCategories   }} Categories
                <chevron-right-icon size="1x"></chevron-right-icon>
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons'
import { mapGetters } from 'vuex'

export default {
  name: 'CategoryCard',
  data () {
    return {
      colorCategory: [
        'card bg-primary text-white',
        'card bg-success text-white',
        'card bg-warning text-dark'
      ],
      textColorCategory: [
        'text-white',
        'text-white',
        'text-dark'
      ]
    }
  },
  components: {
    ChevronRightIcon
  },
  computed: {
    ...mapGetters([
      'fetchHomeCategories',
      'fetchTotalCategories'
    ])
  },
  created () {
    this.$store.dispatch('fetchCategories')
  }
}
</script>

<style scoped>
.card {
  border-radius: 0.8em;
}
</style>
