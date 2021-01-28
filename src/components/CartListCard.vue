<template>
  <div class="container">
    <b-card  class="mb-3" style="width: 800px; margin: auto;">
      <div>
        <img :src="cartOne.Product.image_url" class="float-left">
      </div>
      <b-card-text style="text-align: left;">
        <h3><b>{{ cartOne.Product.name }}</b></h3>
        <h4>subtotal: Rp. {{ new Intl.NumberFormat('id-ID').format(cartOne.Product.price * cartOne.quantity) }}</h4>
        <h5>quantity: {{ cartOne.quantity }} </h5>
        <p>stock: {{ cartOne.Product.stock }} </p>
        <b-button v-b-toggle.my-collapse variant="primary" size="sm">update quantity</b-button>
        <b-button variant="danger" size="sm" @click="removeCartProduct">remove</b-button>
        <b-collapse id="my-collapse">
          <b-card title="Collapsible card">
            <form @submit.prevent="updateCartProduct">
              <input type="number" :max="cartOne.Product.stock" min="1" v-model="quantity">
              <b-button type="submit" variant="primary" size="sm">Ok</b-button>
            </form>
          </b-card>
        </b-collapse>
      </b-card-text>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'CartListCard',
  props: ['cartOne'],
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    updateCartProduct () {
      const payload = {
        cartId: this.cartOne.CartId,
        productId: this.cartOne.ProductId,
        quantity: this.quantity
      }
      console.log(payload)
      this.$store.dispatch('updateCartProduct', payload)
    },
    removeCartProduct () {
      const payload = {
        cartId: this.cartOne.CartId,
        productId: this.cartOne.ProductId
      }
      this.$store.dispatch('removeCartProduct', payload)
    }
  }
}
</script>

<style scoped>
img {
width: 250px;
margin-right: 20px;

}
</style>
