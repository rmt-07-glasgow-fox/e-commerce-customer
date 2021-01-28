<template>
  <div class="row mb-4">
    <div class="col-md-5 col-lg-3 col-xl-3">
      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
        <img class="img-fluid w-100"
          :src="cart.Product.imageUrl" alt="Sample">
      </div>
    </div>
    <div class="col-md-7 col-lg-9 col-xl-9">
      <div>
        <div class="d-flex justify-content-between">
          <div>
            <h5>{{ cart.Product.name }}</h5>
          </div>
          <div>
            <div class="def-number-input number-input safari_only mb-0 w-100">
              <button
                class="mx-1 btn-dark" @click="decreaseQty(cart.quantity, cart.id)" :disabled="cart.quantity == 1">-</button>
              <input type="number" class="quantity w-50" min="1" name="quantity" v-model="cart.quantity">
              <button
                class="mx-1 btn-dark" @click="increaseQty(cart.quantity, cart.id)">+</button>
            </div>
            <small id="passwordHelpBlock" class="form-text text-muted text-center">
              (Note, stock available: {{cart.Product.stock }} piece)
            </small>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-link small text-uppercase mr-3" @click="deleteCart(cart.id)"> Remove item </button>
            <button class="btn btn-link small text-uppercase" @click="addWishlist(cart.Product.id, cart.id)"> Move to wish list </button>
          </div>
          <p class="mb-0"><span>{{ cart.quantity }} x $ {{ cart.Product.price }}</span></p>
          <p class="mb-0"><span><strong id="summary">${{ cart.quantity*cart.Product.price }}</strong></span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCarts',
  props: ['cart'],
  methods: {
    increaseQty (quantity, id) {
      quantity++
      this.$store.dispatch('editQuantity', { quantity, id })
    },
    decreaseQty (quantity, id) {
      quantity--
      this.$store.dispatch('editQuantity', { quantity, id })
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    },
    addWishlist (productId, cartId) {
      this.$store.dispatch('removeCart', { cartId, productId })
    }
  }
}
</script>

<style>

</style>
