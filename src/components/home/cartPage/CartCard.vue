<template>
  <div id="CartCard">
    <div class="container-fluid" style="padding: 0">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- card -->
        <div
          v-for="Cart in fetchCarts"
          :key="Cart.id"
          class="col-12 col-sm-6 col-md-6 col-lg-3"
        >
          <div class="card h-100" style="border-radius: 1rem">
            <img
              :src="Cart.Product.image_url"
              class="card-img-top card-img-size"
              style="
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
              "
            />
            <div class="card-body">
              <h5
                class="card-title"
                style="
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color: #e55c3e;
                "
              >
                {{ Cart.Product.name }}
              </h5>
              <p class="card-text" style="font-weight: 600; margin-bottom: 4px">
                {{ priceFormatter(Cart) }}
              </p>
              <p class="card-text" style="font-weight: 600; margin-bottom: 8px">
                {{ stockFormatter(Cart) }}
              </p>

              <div
                class="btn-group mb-3"
                role="group"
                aria-label="Basic outlined example"
              >
                <button
                  type="button"
                  class="btn btn-light"
                  @click="decreCart(Cart.id)"
                >
                  <minus-icon size="1x"></minus-icon>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary text-dark"
                  style="border: 0"
                  disabled
                >
                  {{ Cart.quantity }}
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  @click="increCart(Cart.id)"
                >
                  <plus-icon size="1x"></plus-icon>
                </button>
              </div>
              <button
                class="btn btn-outline-danger"
                style="border-radius: 2.4em"
                @click="deleteCart(Cart.id)"
              >
                <shopping-cart-icon
                  size="1x"
                  style="margin-bottom: 2px; margin-right: 4px"
                ></shopping-cart-icon>
                Remove from cart
              </button>
            </div>
          </div>
          <!-- card// -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PlusIcon, MinusIcon, ShoppingCartIcon } from 'vue-feather-icons'
import { mapGetters } from 'vuex'

export default {
  name: 'CartCard',
  components: {
    PlusIcon,
    MinusIcon,
    ShoppingCartIcon
  },
  methods: {
    priceFormatter (payload) {
      if (payload.Product.Price === 0) return 'Free'

      return `Rp. ${payload.Product.price.toLocaleString('id')}`
    },
    stockFormatter (payload) {
      return `${payload.Product.stock} left`
    },
    increCart (id) {
      this.$store.dispatch('increCart', id)
    },
    decreCart (id) {
      this.$store.dispatch('decreCart', id)
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    }
  },
  computed: {
    ...mapGetters([
      'fetchCarts'
    ])
  },
  created () {
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style scoped>
.card-img-size {
  max-height: 32.8vh;
  width: 100%;
  object-fit: cover;
}
</style>
