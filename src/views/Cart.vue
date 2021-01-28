<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="mb-3">
            <div class="pt-4">
              <h5 class="mb-4">Cart (<span>{{ carts.length }}</span> items)</h5>
              <ListCarts
              v-for="cart in carts" :key="cart.id"
              :cart='cart'
              />
              <hr class="mb-4">
              <p class="text-dark mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                items to your cart does not mean booking them.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="mb-3">
            <div class="pt-4">
              <h5 class="mb-3">The total amount of</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Temporary amount
                  <span>${{ totalPrice }}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Free</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span><strong>${{ totalPrice }}</strong></span>
                </li>
              </ul>
              <button type="button" class="btn btn-dark btn-block" @click="checkout">go to checkout</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import ListCarts from '../components/ListCarts.vue'
export default {
  components: {
    ListCarts
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout')
      this.$store.dispatch('countTotal')
      this.$store.dispatch('fetchCart')
    }
  },
  computed: {
    carts () {
      return this.$store.getters.unpaidItems
    },
    totalPrice () {
      return this.$store.state.totalPrice
    }
  },
  created () {
    this.$store.dispatch('countTotal')
    this.$store.dispatch('fetchCart')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
</script>

<style>
</style>
