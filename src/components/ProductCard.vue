<template>
    <div class="card md-col-3 p-2 m-2 shadow rounded">
      <div class="img-container d-flex align-items-center justify-content-center">
        <img class="card-img-top" :src="product.image_url" alt="Card image cap">
      </div>
      <div class="card-body bold">
        <h5 class="card-title">{{product.name}} </h5>
        <table class="text-left" >
          <tr>
            <td>Rp {{price}}</td>
          </tr>
          <tr>
            <td>stock ({{product.stock}} items)</td>
          </tr>
        </table><br>
        <button class="btn btn-primary" @click="addToCart(product.id)">Add to Cart</button>
      </div>
    </div>
</template>

<script>
import priceIDR from '../helpers/priceIDR'
import { mapActions } from 'vuex'
export default {
  props: [
    'product'
  ],
  methods: {
    ...mapActions([
      'addToCart'
    ])
  },
  computed: {
    price () {
      return priceIDR(this.product.price)
    }
  }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  .img-container{
    width: 100%;
    height: 180px;
    overflow: hidden;
  }
  .card{
    max-width: 15em;
  }
  .bold{
    font-weight: bold !important;
  }
</style>
