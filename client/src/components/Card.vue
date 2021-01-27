<template>
  <div class="product-list card mb-3 mx-2 shadow-sm border-0" style="width: 14.2rem;">
    <img :src="product.image_url" class="card-img-top" style="height: 14rem;object-fit: cover;" alt="...">
    <div class="card-body fs-6 p-2 text-start">
      <small class="fw-bold text-capitalize lh-1">{{ product.name }}</small><br>
      <small class="fw-bold text-warning">Rp. {{ product.price }}</small><br>
      <small class="text-muted">In Stock: {{ product.stock }}</small><br>
      <button @click="addCart(product.id)" class="btn btn-info text-white w-100">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Card',
  props: ['product'],
  methods: {
    addCart (id) {
      if (this.isLogin) {
        this.$store.dispatch('addCart', {
          productId: id,
          quantity: 1
        })
      } else {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  }
}
</script>

<style>
.card:hover {
  cursor: pointer;
}

</style>
