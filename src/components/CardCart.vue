<template>
  <div class="card mb-3 shadow-lg" style="max-width: 100%">
    <div class="row g-0 p-2">
      <div class="col-md-4">
        <img :src="baseURL + cart.Product.image_url" alt="..." class="card-img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">{{ cart.Product.name }}</h4>
          <h5 class="card-title">Total : {{ cart.totalPrice }}</h5>
          <small class="text-muted">Price : {{ cart.Product.price }}/pcs</small><br>
          <small class="text-muted">Stock : {{ cart.Product.stock }}</small>
          <div class="my-2">
            <form @submit.prevent="updateCart(cart.id)">
              <b>Quantity : </b>
              <button @click="plus" type="button" class="btn btn-sm btn-primary rounded-circle mx-2" > + </button>
              <b> {{ cart.quantity }} </b>
              <button @click="minus" type="button" class="btn btn-sm btn-danger rounded-circle mx-2"> - </button>
              <button type="submit" class="btn btn-warning mx-2"> <b-icon icon="arrow-clockwise" /> update </button>
              <button @click="deleteCart(cart.id)" type="button" class="btn btn-dark"> <b-icon icon="trash-fill" /> delete </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    async deleteCart (id) {
      console.log('>>> cart id', id)
      await this.$store.dispatch('deleteCart', id)
    },
    plus () {
      if (this.cart.quantity < this.cart.Product.stock) {
        this.cart.quantity++
      }
      console.log('plus', this.cart.quantity)
    },
    minus () {
      if (this.cart.quantity > 1) {
        this.cart.quantity--
      }
      console.log('minus', this.cart.quantity)
    },
    async updateCart (id) {
      console.log('>>> update cart id : ', id, this.cart.quantity)
      const body = {
        id: id,
        quantity: this.cart.quantity
      }

      await this.$store.dispatch('updateCart', body)
    }
  },
  props: ['cart'],
  computed: { ...mapState(['baseURL']) }
}
</script>

<style scoped>
.card,
.btn {
  border-radius: 20px;
}
</style>
