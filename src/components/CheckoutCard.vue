<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Total</h5>
      <p class="card-text">Rp. {{totalCart}}</p>
      <a href="#" class="btn btn-primary">Checkout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutCard',
  props: ['totalCart']
}
</script>

<style>

</style>
