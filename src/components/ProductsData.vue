<template>
  <div class="col-3">
    <div class="card" style="margin: 10px 10px">
      <img
        :src="product.image_url"
        class="card-img-top"
      />
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <h5>Rp {{product.price}}</h5>
        <p>stock: {{product.stock}}</p>
        <div>
        <button style="margin: 5px 5px;" class="btn btn-success" @click="goCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductData',
  props: ['product'],
  methods: {
    goCart () {
      if (localStorage.getItem('access_token')) {
        this.$store.dispatch('addCart', this.product.id)
      } else {
        this.$router.push('/login')
      }
    }
  }
}

</script>

<style>
</style>
