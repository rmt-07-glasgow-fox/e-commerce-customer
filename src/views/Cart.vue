<template>
<div>
  <navbar/>
  <div class="row" style="margin-left: 20px;">
    <!--Grid column-->
    <div class="col-lg-8">
      <!-- Card -->
      <div class="mb-3">
        <div class="pt-4 wish-list">
          <h5 class="mb-4">Cart:</h5>
          <div class="row mb-4">
            <div class="col-md-7 col-lg-9 col-xl-9">
              <cart-body
              v-for="cart in carts"
              :key="cart.id"
              :cart="cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CartBody from '../components/CartBody.vue'
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartBody
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchCart()
  },
  computed: {
    ...mapState([
      'carts'
    ])
  }
}
</script>

<style>

</style>
