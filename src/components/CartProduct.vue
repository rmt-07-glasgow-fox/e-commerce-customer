<template>
  <div id="cartProducts">
    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col-sm-3">
          <div class="card" style="width: 18rem;" v-for="products in product" :key="products.id">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ products.name }}</h5>
              <p class="card-text">{{ products.price }}</p>
              <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created () {
    this.$store.dispatch('fetchProduct')
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  computed: {
    ...mapState([
      'product'
    ])
  }
}
</script>

<style>

</style>
