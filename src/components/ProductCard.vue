<template>
  <div class="col-md-3" id="card">
    <img class="card-img-top" :src="product.img_url" height="250px">
    <div class="card-body">
      <h4>{{ product.name }}</h4>
      <h6>price: {{ getPrice }} </h6>
      <h6>Stock: {{ product.stock }}</h6>
      <div>
        <button @click="createCart" class="btn-primary">Add to Cart</button>
        <button v-if="getRole == 'admin'" class="btn-danger"><img src="../assets/delete 2.png" height="20px"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [
    'product'
  ],
  methods: {
    createCart () {
      const cartItems = this.$store.state.carts
      let alreadyAdded = false
      let cartQty = ''
      cartItems.forEach(item => {
        if (item.ProductId === this.product.id) {
          alreadyAdded = true
          cartQty = item.quantity
        }
      })
      if (alreadyAdded) {
        if (cartQty < this.product.stock) {
          this.$store.dispatch('addCartQty', { id: this.product.id, quantity: 1 })
        } else {
          console.log('no stock left')
        }
      } else {
        this.$store.dispatch('createCart', { id: this.product.id })
      }
    }
  },
  computed: {
    getPrice () {
      let price = 'Rp.'
      price = price + this.product.price.toLocaleString('id-ID')
      return price
    },
    getRole () {
      return this.$store.state.role
    }
  }
}
</script>

<style>
  #card {
    padding: 0px;
    margin: 5px 10px;
  }

  button {
    background: transparent;
    border-radius: 5px;
    border: 1px solid black;
  }
</style>
