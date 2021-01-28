<template>
    <div class="container-xl bg-light shadow rounded">
      <div class="row row-cols-2 rounded g-4 pb-4 px-3" style="min-height: 70vh; background-color: lightslategray;">
        <div class="col-8 overflow-auto container" style="max-height: 85vh;">
            <div class="d-grid gap-2">
              <!-- card -->
              <CartCard
              v-for="customerCart in customerCarts"
              :key="customerCart.id"
              :customerCart="customerCart"
              />
            </div>
        </div>
        <div class="col-4">
          <div class="card shadow">
            <div class="card-header">
              <h5>Summary</h5>
            </div>
            <div class="card-body overflow-auto" style="max-height: 56vh; min-height: 30vh;">
            <!-- total -->
            </div>
            <div class="card-footer text-center">
              <h5 class="card-title">Total</h5>
              <p class="card-text mb-0">
                <strong>Rp50.000.000,00</strong>
              </p>
            </div>
            <div class="card-body text-center pt-1">
              <button type="button" class="btn btn-danger shadow rounded">Cancel</button>
              <button type="button" class="btn btn-primary shadow rounded">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import CartCard from '@/components/CartCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'CartList',
  methods: {
    fetchCustomerCarts () {
      this.$store.dispatch('fetchCustomerCarts')
    }
  },
  created () {
    this.fetchCustomerCarts()
  },
  computed: {
    ...mapState([
      'customerCarts'
    ])
  },
  components: {
    CartCard
  }
}
</script>

<style>

</style>
