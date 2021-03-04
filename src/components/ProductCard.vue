<template>
  <div class="col-3 mb-4 d-flex justify-content-center">
      <div class="card" style="width: 17rem;">
          <img :src="product.image_url" height="250px">
          <div class="card-body">
            <strong><h5 class="card-title my-2">{{ product.name }}</h5></strong>
            <p class="card-text my-2">Price: Rp. {{ product.price }}</p>
            <p class="card-text my-2">Stock: {{ product.stock }} </p>
            <a href="#" @click.prevent="addCart(product.id)"><i class="fas fa-shopping-cart fa-lg mr-4 mt-2"></i>Add to cart</a>
            <!-- <button @click.prevent="addCart(product.id)" type="button" class="btn btn-primary w-100">
                <i class="fas fa-shopping-cart fa-lg mr-4 mt-2"></i>
                Button
              </button> -->
            <!-- <a href="#" @click.prevent="addCart(product.id)"><i class="bi bi-cart3">Add </i></a> -->
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addCart (id) {
      this.$store.dispatch('addCart', id)
    }
  }
}
</script>

<style>

</style>
