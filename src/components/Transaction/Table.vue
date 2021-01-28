<template>
  <tbody>
    <tr >
      <th id="middle" scope="row">{{ cart.id }}</th>
      <td class="w-25">
        <img
          :src="cart.image_url"
          class="img-fluid img-thumbnail"
          :alt="cart.name"
          id="image-table"
          @click="showImage"
        />
      </td>
      <td id="middle">{{ cart.name }}</td>
      <td id="middle">{{ cart.description }}</td>
      <td id="middle">
        {{
          cart.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </td>
      <td id="middle">{{ cart.Cart.quantity }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'Table',
  props: ['cart']
}
</script>

<style>

</style>
