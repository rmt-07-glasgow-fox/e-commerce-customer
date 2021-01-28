<template>
  <div class="col-6 col-md-3">
    <router-link
      to="/product"
      style="text-decoration: none"
      @click.native="scrollToTop"
    >
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

</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons'

export default {
  name: 'CategoryCard',
  props: ['HomeCategory', 'i'],
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
  }
}
</script>

<style scoped>
.card {
  border-radius: 0.8em;
}
</style>
