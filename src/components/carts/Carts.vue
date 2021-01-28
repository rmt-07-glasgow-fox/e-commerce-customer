<template>
  <b-container class="mt-5">
    <b-row class="main-div">
      <h1>Carts</h1>
      <b-col v-for="(cart, index) in carts" :key="index">
        <cart-item :index="index" :cart="cart" />
      </b-col>
    </b-row>
    <b-row v-if="carts.length === 0" class="text-center ml-5 mb-5">
      <img src="https://images.thefepi.com/file/empty-cart.png" alt="..." class="img-thumbnail" />
    </b-row>
  </b-container>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
  name: 'Carts',
  components: { CartItem },
  computed: {
    carts() {
      return this.$store.getters.carts;
    },
  },
};
</script>

<style></style>
