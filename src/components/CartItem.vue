<template>
  <tr>
    <th scope="row">{{ item.Product.id }}</th>
    <td>{{ item.Product.name }}</td>
    <td style="max-width: 250px;">{{ item.Product.description }}</td>
    <td>{{ item.Product.category }}</td>
    <td>
      <img v-if="item.Product.image_url.length > 0" alt="Product Image" :src="item.Product.image_url" />
      <img v-else class="mx-auto" alt="Product image" src="../assets/empty-image.png" />
    </td>
    <td> {{ formatPrice(item.Product.price) }}
    </td>
    <td>
      <input @input="debouncedEditProduct" v-model="item.quantity" min="1" :max="item.Product.stock" name="quantity" type="number"/>
      out of {{ item.Product.stock }}
    </td>
    <td>{{ formatPrice(subtotal) }}</td>
    <td class="px-3">
      <div class="row">
        <button class="btn btn-danger mx-auto" @click.prevent="deleteProduct">
          <font-awesome-icon icon="trash-alt" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import { debounce } from 'debounce'

export default {
  name: 'ProductRow',
  props: ['item'],
  methods: {
    formatPrice (price) {
      return price.toLocaleString('id', {
        style: 'currency',
        currency: 'IDR'
      })
    },
    deleteProduct () {
      this.$store.dispatch('removeFromCart', this.item.ProductId)
    },
    editProduct () {
      this.$store.dispatch('updateCartProduct', {
        ProductId: this.item.ProductId,
        quantity: this.item.quantity
      })
    },
    debouncedEditProduct: debounce(function () {
      this.editProduct()
    }, 1500)
  },
  computed: {
    subtotal () {
      return this.item.quantity * this.item.Product.price
    }
  }
}
</script>

<style scoped>
img {
  max-width: 200px;
  max-height: 160px;
}

td {
  max-width: 250px
}

button {
  width: 40px;
}
</style>
