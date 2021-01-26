<template>
  <div>
    <Slider/>
    <div class="mt-5 d-flex justify-content-around flex-wrap">
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </div>
  </div>
</template>

<script>
import Slider from './Slider.vue'
import ItemCard from './ItemCard.vue'

export default {
  name: 'ItemList',
  components: {
    ItemCard,
    Slider
  }
}
</script>

<style>

</style>
