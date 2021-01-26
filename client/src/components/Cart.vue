<template>
  <div class="mt-5 d-flex justify-content-around flex-wrap">
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <CartCard/>
  </div>
</template>

<script>
import CartCard from './CartCard.vue'

export default {
  name: 'Cart',
  components: {
    CartCard
  }
}
</script>

<style>

</style>
