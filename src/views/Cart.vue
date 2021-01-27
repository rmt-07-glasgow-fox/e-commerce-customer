<template>
  <div>
    <b-row>
      <b-col><carts /></b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import Carts from '../components/carts/Carts.vue';

export default {
  name: 'Cart',
  components: { Carts },
};
</script>

<style></style>
