<template>
  <table class="table">
  <tbody>
    <tr>
      <td><img :src="cart.Product.image_url"></td>
      <td>{{ cart.Product.name }}</td>
      <td>
        <button @click="decreament(cart.id)" class="btn btn-success"> - </button>
        {{ cart.quantity }}
        <button @click="increament(cart.id)" class="btn btn-success"> + </button>
        </td>
      <td>{{ cart.cost }}</td>
      <td>
        <button @click="deleteCart(cart.id)" id="del" class="del btn btn-danger"> DEL </button>
      </td>
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
        cost: this.cart.cost,
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
      if (quantity < 1) {
        return this.$store.dispatch('deleteCart', id)
      } else {
        this.$store.commit('increment')
        return this.$store.dispatch('editQuantity', payload)
      }
    },
    increament (id) {
      const payload = {
        id,
        quantity: this.data.quantity++
      }
      this.$store.commit('decrement')
      return this.$store.dispatch('editQuantity', payload)
    },
    deleteCart (id) {
      return this.$store.dispatch('deleteCart', id)
    }
  }
}
</script>

<style scoped>
  .previous {
    background-color: #f1f1f1;
    color: black;
  }

  .next {
    background-color: #4CAF50;
    color: white;
  }

  #del {
    border-radius: 90%;
    padding: 1px 10px;
  }

  .btn {
    border-radius: 50%;
    padding: 1px 10px;
  }

  img {
    width: 100px;
  }

  td {
    padding: 0%;
    margin: 0;
  }
</style>
