<template>
  <div class="card">
  <div class="row g-0">
    <div class="col-3">
      <img class="rounded" src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg" alt="Image of product" style="max-height: 10rem; object-fit:cover; min-height: 10rem; min-width: 11rem;">
    </div>
    <div class="col-9">
      <div class="card-body pb-1">
        <h6 class="card-title">{{ customerCart.Product.name }}</h6>
        <p class="card-text mb-0">
          Rp{{ customerCart.Product.price }}
        </p>
        <p class="card-text">
          <small>
            In stock ({{ customerCart.Product.stock }} items)
          </small>
        </p>
      </div>
    <form @submit.prevent="updateQuantityProductCart">
      <div class="card-body container pb-0 text-center row g-0">
        <div class="col-3 d-grid">
          <button @click="deleteCustomerCart(customerCart.Product.id)" type="button" class="btn btn-danger btn-sm shadow rounded"><i class="bi bi-bag" style="font-size: 1rem;"></i> Remove</button>
        </div>
        <!-- <div class="col-2 d-grid px-3">
          <button type="button" class="btn btn-primary btn-sm shadow rounded"><i class="bi bi-dash-square" style="font-size: 1rem;"></i></button>
        </div> -->
          <div class="col-5">
            <label for="inputQuantity" class="visually-hidden">Quantity</label>
            <input v-model="customerCart.quantity" type="number" class="form-control" id="inputQuantity" placeholder="Quantity">
          </div>
          <div class="col-2 d-grid px-3">
            <!-- <button type="button" class="btn btn-primary btn-sm shadow rounded"><i class="bi bi-plus-square" style="font-size: 1rem;"></i></button> -->
            <button type="submit" class="btn btn-sm btn-primary shadow rounded"><i class="bi bi-plus-square" style="font-size: 1rem;"></i> Update</button>
          </div>
      </div>
    </form>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['customerCart'],
  data () {
    return {
      defaultImageUrl: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg'
    }
  },
  methods: {
    deleteCustomerCart (idProduct) {
      this.$store.dispatch('deleteCustomerCart', idProduct)
    },
    updateQuantityProductCart () {
      const payload = {
        idProduct: this.customerCart.ProductId,
        quantity: this.customerCart.quantity
      }
      this.$store.dispatch('updateQuantityProductCart', payload)
    }
  }
}
</script>

<style>

</style>
