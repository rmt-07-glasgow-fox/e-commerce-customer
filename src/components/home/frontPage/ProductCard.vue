<template>
  <div id="ProductCard">
    <div class="container-fluid" style="padding: 0">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- card -->
        <div
          v-for="Product in fetchHomeProducts"
          :key="Product.id"
          class="col-12 col-sm-6 col-md-6 col-lg-3"
        >
          <div class="card h-100" style="border-radius: 1rem">
            <img
              :src="Product.image_url"
              class="card-img-top card-img-size"
              style="
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
              "
            />
            <div class="card-body">
              <p
                class="card-text text-muted"
                style="font-weight: 600; margin-bottom: 8px"
              >
                {{ Product.Category.name }}
              </p>
              <h5
                class="card-title"
                style="
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color: #e55c3e;
                "
              >
                {{ Product.name }}
              </h5>
              <p class="card-text" style="font-weight: 600; margin-bottom: 4px">
                {{ formatPrice(Product) }}
              </p>
              <p class="card-text" style="font-weight: 600; margin-bottom: 8px">
                {{ formatStock(Product) }}
              </p>

              <button
                class="btn btn-outline-primary w-100"
                style="border-radius: 2.4rem; marign-bottom: 4px"
              >
                <shopping-cart-icon
                  size="1x"
                  style="margin-bottom: 2px; margin-right: 4px"
                ></shopping-cart-icon>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <!-- card// -->
      </div>
    </div>
  </div>
</template>

<script>
import { ShoppingCartIcon } from 'vue-feather-icons'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductCard',
  components: {
    ShoppingCartIcon
  },
  methods: {
    formatPrice (product) {
      if (product.price) return `Rp. ${product.price.toLocaleString('id')}`

      return 'Free'
    },
    formatStock (product) {
      if (product.stock) return product.stock + ' left'

      return 'Sold'
    }
  },
  computed: {
    ...mapGetters([
      'fetchHomeProducts'
    ])
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.card-img-size {
  height: 45vh;
  max-width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 766) {
  .card-img-size {
    height: 500vh;
  }
}
@media screen and (max-width: 960px) {
  .card-img-size {
    height: 35vh;
  }
}
</style>
