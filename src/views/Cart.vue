<template>
  <div>
    <h1>Your Cart</h1>
    <div v-show="!products.length">
      <div>
        <i>Your cart is empty!</i>
      </div>
      <div>
        <router-link to="/">Go shopping</router-link>
      </div>
    </div>
    <table class="table is-striped" v-show="products.length">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
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
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td><b>{{ total }}</b></td>
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
