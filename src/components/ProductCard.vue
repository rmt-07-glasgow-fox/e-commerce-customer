<template>
  <div class="col-md-4">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col-auto d-none d-lg-block">
        <img :src="product.image_url"
        style="object-fit:cover"
        class=""
        width="100%" height="350" alt="" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <!-- <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> -->
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary fs-6">{{ product.Category.name }}</strong>
        <h5 class="mb-0 fs-4">{{ product.name }}</h5>
        <div class="mb-2 text-muted">{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price) }}</div>
        <p class="card-text mb-auto">{{ product.stock }} pcs available</p>
        <div class="btn-group btn-group-sm mt-4" role="group" aria-label="Basic outlined example">
          <button @click.prevent="addToCart" v-if="product.stock" type="button" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
            Add to Cart
          </button>
          <button @click.prevent="addToCart" v-if="!product.stock" type="button" class="btn btn-primary disabled">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none"/><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
            Out of stock
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart () {
      const payload = {
        ProductId: this.product.id,
        amount: 1
      }
      // console.log(payload, 'ini yang mau ditambah')
      this.$store.dispatch('addToCart', payload)
    }
  }

}
</script>

<style>

</style>
