<template>
  <div class="container mb-4">
    <div class="row">
      <img class="col-3 border p-3 my-2 mx-auto" style="border-radius: 5px;" :src="cart.Product.image_url">
      <div class="col-8 p-3 mx-auto my-2">
        <h2 class="text-dark">{{ cart.Product.name }}</h2>
        <h5 class="large text-muted font-italic row ml-3 my-3">Amounts:</h5>
        <div class="d-flex" style="width: 8em; height: 2em;">
          <button
          @click.prevent="update('decrement')"
          class="quantity-left-minus btn btn-danger btn-number mx-auto my-auto">
            <span class="glyphicon glyphicon-minus">-</span>
          </button>
          <h6 class="row mx-auto my-auto">{{ cart.quantity }}</h6>
          <button
          @click.prevent="update('increment')"
          class="quantity-right-plus btn btn-success btn-number mx-auto my-auto">
            <span class="glyphicon glyphicon-plus">+</span>
          </button>
        </div>
        <p class="medium text-muted row ml-3 my-3">Price: {{ rupiahFormat(cart.Product.price) }} X {{ cart.quantity }} =<span>{{ rupiahFormat(cart.Product.price * cart.quantity) }}</span></p>
        <a href="" class="row ml-3 medium text-danger" @click.prevent="deleteCartProduct"><i class="fas fa-trash-alt mr-2 text-danger"></i>Remove product from Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartProduct',
  props: ['cart'],
  methods: {
    rupiahFormat (number) {
      return number.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })
    },
    update (command) {
      const obj = {
        id: this.cart.Product.id,
        cartId: this.cart.id,
        quantity: this.cart.quantity,
        command,
        type: 'editCart'
      }
      this.$store.dispatch('showProductOne', obj)
    },
    deleteCartProduct () {
      this.$store.dispatch('deleteCartProduct', this.cart.id)
    }
  }
}
</script>

<style>

</style>
