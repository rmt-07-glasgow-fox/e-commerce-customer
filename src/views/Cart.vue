<template>
  <div>
    <b-row>
      <b-col><carts /></b-col>
      <b-col><checkout-form /></b-col>
    </b-row>
  </div>
</template>

<script>
import Carts from '../components/carts/Carts.vue';
import CheckoutForm from '../components/carts/CheckoutForm.vue';

export default {
  name: 'Cart',
  components: { Carts, CheckoutForm },
};
</script>

<style></style>
