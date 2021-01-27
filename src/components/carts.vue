<template>
  <table class="table">
  <tbody>
    <tr>
      <td>{{ cart.Product.name }}</td>
      <td>
        <button @click="decreament(cart.id)" class="btn btn-success"> - </button>
        {{ cart.quantity }}
        <button @click="increament(cart.id)" class="btn btn-success"> + </button>
        </td>
      <td>{{ cart.cost}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'Carts',
  props: ['cart'],
  data () {
    return {
      data: {
        quantity: this.cart.quantity
      }
    }
  },
  methods: {
    decreament (id) {
      const quantity = this.data.quantity--
      const payload = {
        id,
        quantity
      }
      return this.$store.dispatch('editQuantity', payload)
    },
    increament (id) {
      const payload = {
        id,
        quantity: this.data.quantity++
      }
      return this.$store.dispatch('editQuantity', payload)
    }
  }
}
</script>

<style scoped>
  a:hover {
    background-color: #ddd;
    color: black;
  }

  .previous {
    background-color: #f1f1f1;
    color: black;
  }

  .next {
    background-color: #4CAF50;
    color: white;
  }

  .btn {
    border-radius: 50%;
    padding: 1px 10px;
  }
</style>
