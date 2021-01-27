<template>
  <div class="col-lg-3 mb-3">
    <div class="card" style="width: 15rem; height: 28rem;">
      <img :src="product.image_url" class="card-img-top" alt="Product Picture">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ product.price }}</p>
      </div>
      <div class="card-body">
        <p class="card-text">{{ product.stock }}</p>
      </div>
      <div class="card-body">
        <a href="#" class="btn btn-primary" @click.prevent="add">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      ProductId: this.product.id
    }
  },
  props: ['product'],
  methods: {
    add () {
      this.$store.dispatch('addCart', this.ProductId)
    }
  }
}
</script>

<style scoped>
.card-title {
  text-align: left;
}
.card-body {
  margin: 5px 10px;
  padding: 0;
}
.card-text {
  text-align: left;
}
.btn {
  padding: 5px;
}
</style>
