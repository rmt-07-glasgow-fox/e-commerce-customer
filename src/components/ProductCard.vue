<template>
  <div class="col" style="width: 17rem;">
    <div class="card shadow rounded">
      <img :src="product.image_url || defaultImageUrl" style="max-height: 10rem; object-fit: cover; min-height: 10rem;" class="card-img-top" alt="Image of product">
      <div class="card-body pb-1">
        <h6 class="card-title">{{ product.name }}</h6>
        <p class="card-text mb-0">
          Rp{{ product.price }}
        </p>
        <p class="card-text">
          <small>
            In stock ({{ product.stock }} items)
          </small>
        </p>
      </div>
      <div class="card-body text-center d-grid pt-1">
        <button @click="addProductToCart(product.id)" type="button" class="btn btn-primary btn-sm shadow rounded">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      defaultImageUrl: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg'
    }
  },
  methods: {
    addProductToCart (idProduct) {
      this.$store.dispatch('addProductToCart', idProduct)
    }
  }
}
</script>

<style>

</style>
