<template>
  <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="480"
      img-height="720"
      style="text-shadow: 1px 1px 2px #333; cursor: pointer;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://site-cdn.huami.com/files/2/2/0/2560x900.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Fitbit Sense"
        text="A smartwatch that helps you stress less and track your heart."
        img-src="https://www.fitbit.com/global/content/dam/fitbit/global/store/marquees/desktop/allproducts-sense.jpg">
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://erp.ngrt.in/theme/default/img/npi/npi-20/apple-watch-series-6.png">
      </b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {

}
</script>

<style>

</style>
