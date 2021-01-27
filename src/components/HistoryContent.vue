<template>
  <tr>
    <th scope="row">{{ n }}</th>
    <td class="product d-flex justify-content-even"><img :src="cart.Product.image_url"> {{ cart.Product.name }}</td>
    <td>
      <a href="" @click.prevent="decrease(cart.id)"><i class="bi bi-dash-circle"></i></a>
      <input type="text" v-model="quantity" disabled>
      <a href="" @click.prevent="increase(cart.id)"><i class="bi bi-plus-circle"></i></a>
    </td>
    <td>{{ cart.Product.price * cart.quantity }}</td>
    <td><a href="" @click.prevent="deleteCart(cart.id)"><i class="bi bi-trash"></i></a></td>
  </tr>
</template>

<script>
export default {
  name: 'HistoryContent'

}
</script>

<style scoped>
.history {
  margin-top: 70px;
}
img {
  width: 25px;
  height: 25px;
}
.product img {
  margin-right: 40px;
}
</style>
