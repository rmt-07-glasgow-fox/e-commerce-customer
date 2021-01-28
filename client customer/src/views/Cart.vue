<template>
<div class="full">
  <NavbarCart></NavbarCart>
  <h1 v-if="carts.length === 0">Add some items to your cart!</h1>
  <div class="container" v-else>
    <section>
      <div class="row">
          <div class="col-lg-8">
              <!-- Card -->
              <div class="mb-3">
                  <div class="pt-4 wish-list">
                  <h5 class="mb-4">Cart (<span>{{ carts.length }}</span> items)</h5>
                  <CartCard
                  v-for="cart in carts"
                  :key="cart.id"
                  :cart="cart"
                  >
                  </CartCard>
                  </div>
              </div>
          </div>

          <div class="col-lg-4">
              <CheckoutCard></CheckoutCard>
          </div>

      </div>
    </section>
  </div><br><br>
</div>
</template>

<script>
import NavbarCart from '../components/NavbarCart.vue'
import CartCard from '../components/CartCard.vue'
import CheckoutCard from '../components/CheckoutCard.vue'

export default {
  name: 'Cart',
  components: {
    NavbarCart,
    CartCard,
    CheckoutCard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
    .container {
        background-color: khaki;
        margin-top: 50px;
    }

    h5 {
      text-align: center;
    }

    h1 {
      text-align: center;
      margin-top: 50px;
    }
</style>
