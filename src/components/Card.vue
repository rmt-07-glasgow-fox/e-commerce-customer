<template>
  <div class="col-3">
    <div class="card" style="width: 18rem;">
      <img :src="product.image_url" class="card-img-top" alt="..." style="height: 250px;">
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
      </div>
        <p>Price : {{ product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' }) }}</p>
        <p>Stock : {{ product.stock }}</p>
        <button type="button" class="btn btn-success" @click.prevent="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    addToCart () {
      this.$store.dispatch('add', this.product.id)
        .then(data => {
          this.$store.dispatch('fetchProducts')
          this.$store.dispatch('fetchCart')
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
