<template>
  <div class="container-fluid" id="container">
    <div class="row no-gutter h-100">
      <div class="col-md-8 col-lg-8 bg-primary p-5">
        <CardCart
        v-for="(cart, index) in carts"
        :key="index"
        :cart="cart"
        />
      </div>
      <div class="col-md-8 col-lg-4 p-5">
        <form>
          <h1>Total : </h1>
          <button class="btn btn-primary">Checkout</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardCart from '../components/CardCart'

export default {
  components: { CardCart },
  computed: {...mapState(['carts'])}
}
</script>

<style scoped>

#container {
  height: 100vh;
}

</style>
