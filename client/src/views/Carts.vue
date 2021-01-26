<template>
  <div class="p-5 d-flex justify-content-center">
    <div class="px-3">
      <!-- Carts -->
      <div v-for="cart in carts" :key="cart.id" class="card mb-3" style="width: 640px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img  class="p-3" :src="cart.Product.image_url" alt="...">
          </div>
          <div class="col-md-8 text-start">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ cart.Product.name }}</h5>
              <span class="card-text text-muted">Stock: {{ cart.Product.stock }} pcs</span><br>
              <span class="card-text fs-6 text-warning fw-bold">Price: Rp. {{ cart.Product.price }}</span><br>
              <div class="mt-2">
                <span class="bg-light rounded py-2 px-3 fw-bold">-</span>
                <span class="mx-3">{{ cart.quantity }}</span>
                <span class="bg-light rounded py-2 px-3 fw-bold">+</span>
                <span class="remove">
                  <svg class="svg-icon mx-1 text-muted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="col-sm-12 px-3 text-start" style="width: 500px;">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title fw-bold">Total Payment</h5>
            <hr>
            <div v-for="cart in carts" :key="cart.id" class="d-flex justify-content-between text-muted">
              <div>
                <span>
                  {{ cart.Product.name }}
                  <small>({{ cart.quantity }} pcs)</small>
                </span>
              </div>
              <div>
                <span>Rp. {{ totalPrice(cart.Product.price, cart.quantity )}}</span>
              </div>
            </div>
            <hr>
            <div class="d-flex justify-content-between fw-bold">
              <div>
                <span>Total</span>
              </div>
              <div>
                <span>Rp. {{ totalPayment }}</span>
              </div>
            </div>
            <button class="btn btn-success w-100 mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Carts',
  computed: {
    ...mapState([
      'carts'
    ]),
    totalPayment () {
      let total = 0
      this.carts.forEach(el => {
        total += el.quantity * el.Product.price
      })
      return total
    }
  },
  methods: {
    totalPrice (price, qty) {
      const total = price * qty
      return total
    }
  }
}
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
}
.svg-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.remove {
  margin-left: 1rem;
}
</style>
