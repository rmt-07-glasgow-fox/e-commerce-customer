<template>
  <div class="container mt-2">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner ">
        <!-- <BannerList v-for="banner in banners" :key="banner.id" :banner="banner"/> -->
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="https://i.pinimg.com/originals/48/66/7c/48667c72b239251dab2f233401abcb4f.jpg" class="d-block w-100 img-carousel" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="https://i.pinimg.com/originals/b7/60/65/b76065c978317292b1ecde58fc2b6939.jpg" class="d-block w-100 img-carousel" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="https://www.saladplate.com/media/wysiwyg/sourcing_festival/country/Jetro/banner_v5.png" class="d-block w-100 img-carousel" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import BannerList from './BannerList'

export default {
  name: 'Banner',
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    }
  },
  components: {
    // BannerList
  },
  created () {
    this.fetchBanner()
  },
  computed: {
    ...mapState([
      'banners'
    ])
  }
}
</script>

<style>
/* img {
  object-fit: cover;
} */
.gambar {
  height: 40%;
}
.img-carousel{
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 0%;

}
</style>
