<template>
  <div class="row mb-4">
    <div class="col-md-5 col-lg-3 col-xl-3">
      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
        <img class="img-fluid w-100"
          :src="item.Product.imageUrl" alt="Sample">
      </div>
    </div>
    <div class="col-md-7 col-lg-9 col-xl-9">
      <div>
        <div class="d-flex justify-content-between">
          <div>
            <h5>{{ item.Product.name }}</h5>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button class="btn btn-link small text-uppercase mr-3" @click="deleteWishlist(item.id)"> Remove item </button>
            <button class="btn btn-link small text-uppercase" @click="addCart(item.Product.id, item.id)"> Move to cart </button>
          </div>
          <p class="mb-0"><span><strong id="summary">${{ item.Product.price }}</strong></span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListWishlist',
  props: ['item'],
  methods: {
    deleteWishlist (id) {
      this.$store.dispatch('deleteWishlist', id)
    },
    addCart (productId, wishlistId) {
      this.$store.dispatch('addCart', productId)
      this.deleteWishlist(wishlistId)
    }
  }

}
</script>

<style>

</style>
