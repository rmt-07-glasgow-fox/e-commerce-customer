<template>
  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    <div class="col-auto d-none d-lg-block">
      <img :src="cartItem.Product.image_url"
      style="object-fit:cover"
      height="200" width="150" alt="" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
    </div>
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">{{ cartItem.Product.Category.name }}</strong>
      <h5 class="mb-0">{{ cartItem.Product.name }}</h5>
      <div class="mb-1 text-muted">{{ new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cartItem.Product.price) }}</div>
      <p class="card-text mb-auto">Stock: {{ cartItem.Product.stock }} pcs</p>

      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group btn-group-sm" role="group" aria-label="Button group">
          <button type="button" class="btn btn-outline-secondary" @click="decreaseAmount">-</button>
          <input class="text-center" min="1" style="width:50px" type="text" v-model="amount">
          <button type="button" class="btn btn-outline-secondary" @click="addAmount">+</button>
        </div>
        <span mx-5 v-text="error" class="text-danger"></span>
        <button class="btn btn-danger mx-1" @click.prevent="deleteCartItem">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItems',
  props: ['cartItem'],
  data () {
    return {
      amount: this.cartItem.amount,
      error: ''
    }
  },
  watch: {
    amount (newAmount, oldAmount) {
      if (newAmount > this.cartItem.Product.stock) {
        this.error = 'Amount can\'t exceed stock'
        this.amount = oldAmount
      } else if (newAmount < 1) {
        this.error = 'Amount must be at least 1'
        this.amount = 1
      } else {
        this.error = ''
        const payload = {
          id: this.cartItem.id,
          ProductId: this.cartItem.ProductId,
          amount: newAmount
        }
        this.$emit('updateAmount', payload)
      }
    }
  },
  methods: {
    addAmount () {
      this.amount = this.amount + 1
    },
    decreaseAmount () {
      this.amount = this.amount - 1
    },
    deleteCartItem () {
      this.$store.dispatch('deleteCartItem', this.cartItem.id)
    }
  }

}
</script>

<style>

</style>
