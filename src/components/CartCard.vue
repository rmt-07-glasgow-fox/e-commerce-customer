<template>
  <div
    class="card mb-3 mr-3"
    style="max-width: 450px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="cart.Product.image_url" class="card-img" :alt="cart.Product.title">
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{{ cart.Product.name }}</h5>
          <p class="card-text">Price: {{ totalPrice }}</p>
          <p class="card-text"><small class="text-muted">{{ masKDate }}</small></p>
          <button @click.prevent="decreaseAmount" class="btn fas fa-minus-square"></button>
            {{ this.cart.amount }}
          <button @click.prevent="increaseAmount" class="btn fas fa-plus-square "></button>
        </div>
      </div>
      <div class="col-md-2">
        <button class="btn btn-outline-danger float-right" @click="deleteCart(cart.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['cart'],
  computed: {
    totalPrice () {
      return `Rp. ${this.cart.amount * this.cart.Product.price.toLocaleString('id', 'ID')}`
    },
    masKDate () {
      const currentDate = new Date(this.cart.createdAt)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      return `${currentDate.getDay()} - ${months[currentDate.getMonth()]} - ${currentDate.getFullYear()}`
    }
  },
  methods: {
    deleteCart (id) {
      this.$store.dispatch('deleteCartById', id)
    },
    decreaseAmount () {
      if (this.cart.amount === 1) {
        this.$store.dispatch('deleteCartById', this.cart.id)
      }
      this.$store.dispatch('handleAddProductToCart', {
        ProductId: this.cart.ProductId,
        amount: -1
      })
    },
    increaseAmount () {
      this.$store.dispatch('handleAddProductToCart', {
        ProductId: this.cart.ProductId,
        amount: 1
      })
    }
  }
}
</script>

<style scoped>

</style>
