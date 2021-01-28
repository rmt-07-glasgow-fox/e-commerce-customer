<template>
  <div style="min-height: 80vh">
    <h1>Your Cart</h1>
    <div v-show="!products.length">
      <div>
        <i>Your cart is empty!</i>
      </div>
      <div>
        <router-link to="/">Go shopping</router-link>
      </div>
    </div>
    <table class="table" v-show="products.length">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in products" :key="i">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button v-on:click.prevent='minProduct(product.id)' class="btn btn-outline-success btn-sm">-</button>
            {{ product.Quantity}}
            <button v-on:click.prevent='addProduct(product.id)' class="btn btn-outline-success btn-sm">+</button>
          </td>
          <td>
            <button v-on:click.prevent='removeProduct(product.id)' class="btn btn-outline-danger btn-sm">Remove</button>
          </td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td></td>
          <td><b>{{ total }}</b></td>
        </tr>
        <tr>
          <td><b></b></td>
          <td></td>
          <td></td>
          <td>
           <button v-on:click.prevent="checkout(total)" class="btn btn-outline-primary btn-sm">Checkout</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    minProduct (id) {
      this.$store.dispatch('minProduct', id)
      this.$store.dispatch('filterCart')
    },
    addProduct (id) {
      this.$store.dispatch('addProduct', id)
      this.$store.dispatch('filterCart')
    },
    removeProduct (id) {
      console.log('masuk methods')
      this.$store.dispatch('removeProduct', id)
      this.$store.dispatch('filterCart')
    },
    checkout (total) {
      console.log(total)
      this.$store.dispatch('checkout', total)
    }
  },
  computed: {
    products () {
      return this.$store.state.filteredCart
    },
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.Quantity
      }, 0)
    }
  },
  created () {
    this.$store.dispatch('filterCart')
  }
}
</script>

<style>

</style>
