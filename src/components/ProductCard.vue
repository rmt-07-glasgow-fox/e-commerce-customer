<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="product.image_url"
      img-alt="Image"
      img-top
      tag="article"
      style="width: 200px; height: 450px; "
      class="mb-2 m-2"
    >
      <b-card-text >
        <p>Rp. {{ new Intl.NumberFormat('id-ID').format(product.price) }}</p>
        <p>stock: {{ product.stock}}</p>
      </b-card-text>

      <b-button id="show-btn" @click="showModal" variant="primary" v-if="loggedin === true">Add to cart</b-button>
      <b-button id="show-btn" @click="showModalLogin" variant="primary" v-if="loggedin === false">Add to cart</b-button>
    </b-card>
    <div>
      <b-modal ref="my-modal" hide-footer title="add to cart" >
        <div class="d-block text-center" style="color: #2c3e50;">
          <h2><b>{{ product.name }}</b></h2>
          <div class="image mb-3 mt-4">
            <img :src="product.image_url" style="width: 300px; border: 2px; border-radius: 10px" class="m-4">
          </div>
          <form class="d-flex justify-content-center" @submit.prevent="addCart">
            <input type="number" :max="product.stock" min="1" v-model="quantity">
            <p class="m-2">stock: {{ product.stock}}</p>
            <b-button type="submit" variant="primary" size="sm">Add to cart</b-button>
          </form>
          <div class="mt-3 container d-flex justify-content-center">
            <p class="mr-5">Subtotal:</p>
            <p><b>Rp. {{ new Intl.NumberFormat('id-ID').format(product.price) }}</b></p>
          </div>
        </div>
        <b-button class="mt-3" variant="danger" block @click="hideModal">Cancel</b-button>
      </b-modal>
      <b-modal ref="modal-login" hide-footer title="add to cart" >
        <div class="d-block text-center" style="color: #2c3e50;">
          <h5>you must login first. login <router-link to="/login">here!</router-link></h5>
        </div>
        <b-button class="mt-3" variant="danger" block @click="hideModalLogin">close</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductCard',
  data () {
    return {
      quantity: ''
    }
  },
  props: ['product', 'cart'],
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    showModalLogin () {
      this.$refs['modal-login'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    hideModalLogin () {
      this.$refs['modal-login'].hide()
    },
    addCart () {
      const payload = {
        productId: this.product.id,
        cartId: this.cart.id,
        quantity: this.quantity
      }
      console.log(this.quantity)
      console.log(this.cart)
      this.$store.dispatch('addCart', payload)
      this.$refs['my-modal'].hide()
      this.$router.push('/carts')
      this.$store.dispatch('getCartProduct')
    }
  },
  computed: {
    ...mapState([
      'loggedin'
    ])
  },
  created () {
    this.$store.dispatch('readCart')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.image {
  background-color: #42b983;
  border-radius: 8px;
}

b-card {
  text-overflow: ellipsis;
}

</style>
