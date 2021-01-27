<template>
  <div class="col-2">
    <div class="card mx-auto my-2 shadow-lg bg-primary bg-gradient" style="width: 12rem">
      <img
        :src="baseURL + product.image_url"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body card-body text-light">
        <h6 class="card-title">{{product.name}}</h6>
        <p class="card-text">Price : {{product.price}}</p>
        <p class="card-text">Stock : {{product.stock}}</p>
        <button @click="addCart(product.id)" class="btn btn-warning bg-gradient btn-block shadow-lg"><b-icon icon="cart-plus-fill"/> Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    async addCart (ProductId) {
      console.log('>>> addCart ', ProductId)
      this.$store.dispatch('addCart', ProductId)
    }
  },
  props: ['product'],
  computed: { ...mapState(['baseURL']) }
}
</script>

<style scoped>
.card, button, img {
  border-radius: 20px;
}
</style>
