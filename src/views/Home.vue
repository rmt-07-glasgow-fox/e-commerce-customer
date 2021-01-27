<template>
  <div>
    <b-row>
      <b-col>
        <slider />
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols="3">
        <categories />
      </b-col>
      <b-col>
        <products />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Slider from '../components/home/Slider.vue';
import Categories from '../components/home/Categories.vue';
import Products from '../components/home/Products.vue';

export default {
  name: 'Home',
  components: { Slider, Categories, Products },
};
</script>

<style></style>
