<template>
  <div>
    <div class="card mb-1">
      <div class="row">
        <div class="col-4">
          <img :src="cart.Product.image_url" alt="">
        </div>
        <div class="col-8">
          <div class="card-title text-end m-1"><button type="button" class="btn-close" aria-label="Close" @click.prevent="doDeleteCart"></button></div>
          <ul class="text-start mb-3">
            <li>{{ cart.Product.name }}</li>
            <li>{{ cart.Product.price * cart.quantity }}</li>
          </ul>
          <div class="text-end m-1">
            <button class="btn" @click.prevent="changeQuantitiy(-1)"><b-icon-file-minus></b-icon-file-minus></button>
            {{ cart.quantity }}
            <button class="btn" @click.prevent="changeQuantitiy(1)"><b-icon-file-plus></b-icon-file-plus></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['cart'],
  methods: {
    changeQuantitiy (number) {
      const payload = {
        productId: this.cart.Product.id,
        quantity: number
      }
      this.$store.dispatch('changeQuantity', payload)
    },
    doDeleteCart () {
      this.$store.dispatch('deleteCart', { cartId: this.cart.id })
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
</style>
