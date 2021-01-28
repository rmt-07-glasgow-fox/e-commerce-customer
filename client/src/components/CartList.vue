<template>
  <tr>
    <td>{{ i }} </td>
    <td>{{ cart.Product.name }} </td>
    <td>
      <a @click.prevent="minItem(cart.id)" href="#"><i class="fas fa-minus-circle"></i></a>
      {{ cart.quantity }}
      <a @click.prevent="addItem(cart.id)" href="#"><i class="fas fa-plus-circle"></i></a>
    </td>
    <td>Rp. {{ rupiah }},- </td>
    <td><a class="delete" @click.prevent="deleteItem(cart.id)" href="#"><i class="far fa-trash-alt"></i></a></td>
  </tr>
</template>

<script>
export default {
  name: 'CartList',
  props: ['cart', 'i'],
  methods: {
    deleteItem (id) {
      this.$store.dispatch('deleteItem', id)
    },
    minItem (id) {
      this.$store.dispatch('minItem', id)
    },
    addItem (id) {
      this.$store.dispatch('addItem', id)
    }
  },
  computed: {
    rupiah () {
      return (this.cart.Product.price).toLocaleString('id-ID')
    }
  }
}
</script>

<style>
.delete {
  color: red;
}
</style>
