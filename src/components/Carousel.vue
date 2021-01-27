<template>
  <div>
    <div id="carouselExampleIndicators" data-ride="carousel" class="carousel slide mb-4">
      <div class="carousel-inner">
        <div class="carousel-item active carousel-item-left">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="" class="d-block w-100" style="height: 500px; object-fit: cover;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>

</style>
