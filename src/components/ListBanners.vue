<template>
    <Slide>
      <img class="d-block w-100" :src="banner.imageUrl" alt="First slide">
    </Slide>
</template>

<script>
import { Slide } from 'vue-carousel'
export default {
  name: 'ListBanners',
  props: ['banner'],
  components: {
    Slide
  }
}
</script>

<style>

</style>
