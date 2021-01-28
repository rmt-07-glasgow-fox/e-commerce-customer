<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-if="banners.length > 0"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="360"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="(banner, i) in banners" :key="i">
        <template #img>
          <img
            class="d-block img-height w-100"
            width="1024"
            height="360"
            :src="banner.image_url"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    banners() {
      return this.$store.getters.banners;
    },
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.img-height {
  height: 360px;
}
</style>
