<template>
  <div class="mt-5">
  <div class="container">
    <div class="row">
      <div class="col-8">
        <h1>Cart</h1>
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col-auto d-none d-lg-block">
              <img src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              style="object-fit:cover"
              height="200" alt="" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">test</strong>
              <h5 class="mb-0">nama</h5>
              <div class="mb-1 text-muted">harga</div>
              <p class="card-text mb-auto">Stock: pcs</p>

              <div class="d-flex justify-content-between">
              <div class="btn-group btn-group-sm" role="group" aria-label="Button group">
                <button type="button" class="btn btn-outline-secondary">-</button>
                <input style="width:50px" type="text" name=""  id="">
                <button type="button" class="btn btn-outline-secondary">+</button>
              </div>
                <button class="btn btn-danger mx-1" @click.prevent="deleteProduct(product.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        <p>halo</p>
      </div>
      <div class="col-4">
        <div class="row p-3 border-start rounded overflow-hidden flex-md-row mb-4 shadow-sm">
          <h2>Cart summary</h2>
          <h6>Number of items: 10</h6>
          <h6>Total price: Rp 1.000.000,00</h6>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  created () {
    this.$store.dispatch('getCartItems')
  }

}
</script>

<style>

</style>
