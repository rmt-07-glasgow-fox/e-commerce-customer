<template>
  <div>
    <div>
      <Navbar />
    </div>
    <br>
    <div>
      <form class="bg0 p-t-75 p-b-85">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div class="m-l-25 m-r--38 m-lr-0-xl">
                <div class="wrap-table-shopping-cart">
                  <table class="table-shopping-cart">
                    <tr class="table_head">
                      <th class="column-1">Product</th>
                      <th class="column-2"></th>
                      <th class="column-3">Price</th>
                      <th class="column-4">Quantity</th>
                      <th class="column-5">Total</th>
                      <th class="column-6"></th>
                    </tr>
                    <CartCard v-for="cart in carts" :key="cart.id" :cart="cart" />
                  </table>
                </div>
                <div
                  class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm"
                >
                  <div
                    class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10"
                  >
                    Update Cart
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
              <div
                class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm"
              >
                <h4 class="mtext-109 cl2 p-b-30">
                  Cart Totals
                </h4>

                <div class="flex-w flex-t p-t-27 p-b-33">
                  <div class="size-208">
                    <span class="mtext-101 cl2">
                      Total:
                    </span>
                  </div>

                  <div class="size-209 p-t-1">
                    <span class="mtext-110 cl2">
                      Rp. {{totalPrice.toLocaleString()}}
                    </span>
                  </div>
                </div>

                <button
                  class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import CartCard from '../components/CartCard.vue'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartCard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      return this.$store.state.totalPrice
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>
