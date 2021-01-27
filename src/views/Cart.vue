<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Cart</h1>
          <div class="row">
            <div
              class="card mb-3 mr-3"
              style="max-width: 540px;"
              v-for="(product, idx) in carts"
              :key="idx">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="product.Product.image_url" class="card-img" :alt="product.Product.title">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ product.Product.name }}</h5>
                    <p class="card-text">Amount: {{ product.amount }}</p>
                    <p class="card-text">Price: {{ product.Product.price }}</p>
                    <input type="number" v-model="product.amount" name="amount" id="amount">
                    <p class="card-text"><small class="text-muted">{{ product.createdAt }}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex flex-column">
          <h1>Total Price</h1>
          {{ this.maskPrice() }}
          <button class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    maskPrice () {
      return `Rp. ${this.totalPrice.toLocaleString('id', 'ID')}`
    }
  },
  created () {
    this.fetchCarts()
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      let totalProducts
      if (this.carts) {
        totalProducts = this.$store.state.carts.map(product => {
          return product.amount * product.Product.price
        })
      }
      return (totalProducts.reduce((a, b) => {
        return a + b
      }, 0))
    }
  }
}
</script>

<style scoped>
input {
  max-width: 50px;
}
</style>
