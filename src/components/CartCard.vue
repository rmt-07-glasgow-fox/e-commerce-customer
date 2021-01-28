<template>
<div>
    <div class="row mb-4">
      <div class="col-md-5 col-lg-3 col-xl-3">
        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
          <img class="img-fluid w-100"
            :src="carts.Product.image_url">
        </div>
      </div>
      <div class="col-md-7 col-lg-9 col-xl-9">
        <div>
          <div class="d-flex justify-content-between">
            <div>
              <h5>{{carts.Product.name}}</h5>
              <p class="mb-3 text-muted text-uppercase small">Stock: {{carts.Product.stock}}</p>
            </div>
            <div>
              <div class="def-number-input number-input safari_only mb-0 w-100">
                <button  @click="decrement(carts.id, carts.quantity)"
                  class="minus btn btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                </button>
                <p class="d-inline mr-2 ml-2">{{carts.quantity}}</p>
                <button @click="increment(carts.id, carts.quantity)"
                  class="plus btn btn-outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </button>
              </div>
              <small id="passwordHelpBlock" class="form-text text-muted text-center">
                (Note, 1 piece)
              </small>
            </div>
          </div>
          <div class="ml-2 d-flex justify-content-between align-items-center">
            <div>
              <a @click="removeCart(carts.id)" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                  class="fas fa-trash-alt mr-1"></i> Remove item </a>
            </div>
            <p class="mb-0"><span><strong>IDR {{carts.Product.price * carts.quantity}}</strong></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  data () {
    return {
      total: ''
    }
  },
  props: ['carts'],
  computed: {
    price () {
      return this.carts.Product.price * this.carts.quantity
    }
  },
  methods: {
    removeCart (id) {
      return this.$store.dispatch('removeCart', id)
    },
    increment (id, quantity) {
      console.log(id, quantity, '<<<<< decremnt')
      return this.$store.dispatch('incrementQuantity', { id, quantity })
    },
    decrement (id, quantity) {
      console.log(id, quantity, '<<<<< incremnt')
      return this.$store.dispatch('decrementQuantity', { id, quantity })
    }
  },
  created () {
    console.log(this.carts)
  }
}
</script>

<style>
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
