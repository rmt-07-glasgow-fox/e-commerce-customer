<template>
  <tr>
    <th scope="row">{{ n }}</th>
    <td class="product d-flex justify-content-even"><img :src="cart.Product.image_url"> {{ cart.Product.name }}</td>
    <td>
      <a href="" @click.prevent="decrease(cart.id)"><i class="bi bi-dash-circle"></i></a>
      <input type="text" :value="cart.quantity" disabled>
      <a href="" @click.prevent="increase(cart.id)"><i class="bi bi-plus-circle"></i></a>
    </td>
    <td>{{'Rp ' + (cart.Product.price * cart.quantity).toLocaleString('id-ID')}}</td>
    <td><a href="" @click.prevent="deleteCart(cart.id)"><i class="bi bi-trash"></i></a></td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'CartContent',
  props: ['cart', 'n'],
  methods: {
    deleteCart (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteCart', id)
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          )
        }
      })
    },
    increase (id) {
      this.$store.dispatch('increaseQuantity', id)
    },
    decrease (id) {
      this.$store.dispatch('decreaseQuantity', id)
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style scoped>
.table {
  display: flex;
  justify-content: space-around;
}
img {
  width: 30px;
  height: 30px;
}
.product img {
  margin-right: 40px;
}
input {
  width: 50px;
  margin: 0 10px;
  text-align: center;
}
a {
  color: black;
}
</style>
