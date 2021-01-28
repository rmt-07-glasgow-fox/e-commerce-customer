<template>
  <div>
    <div class="card m-3" style="width: 12rem;">
      <img :src="product.image_url" class="card-img-top" alt="...">
      <div class="card-body">
        <div style="height: 60px;">
          <h6 class="card-title"><b>{{product.name}}</b></h6>
        </div>
        <p class="card-text">Rp {{product.price.toLocaleString('id-ID')}}</p>
        <p class="card-text">In stocks: {{product.stock}}</p>
        <div class="btn btn-primary" @click.prevent="addToCart">Add to cart</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductCards',
  props: ['product'],
  methods: {
    addToCart () {
      const payload = {
        ProductId: +this.product.id,
        quantity: 1
      }
      this.$store.dispatch('addToCart', payload)
    }
  }
}
</script>

<style>

</style>
