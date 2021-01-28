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

      <b-button id="show-btn" @click="addCart" variant="primary" v-if="loggedin === true">Add to cart</b-button>
      <b-button id="show-btn" @click="showModalLogin" variant="primary" v-if="loggedin === false">Add to cart</b-button>
    </b-card>
    <div>
      <b-modal ref="my-modal" hide-footer title="add to cart" >
        <div class="d-block text-center" style="color: #2c3e50;">
          <h2><b>Add to cart success!</b></h2>
        </div>
        <b-button class="mt-3" variant="primary" @click="hideModal">Ok</b-button>
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
import swal from 'sweetalert'

export default {
  name: 'ProductCard',
  data () {
    return {
      quantity: ''
    }
  },
  props: ['product', 'cart'],
  methods: {
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
      // this.$refs['my-modal'].show()
      swal('Success!', 'Your product has been added to your cart!', 'success')
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
