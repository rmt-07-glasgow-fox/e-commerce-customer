<template>
  <div class="container">
      <div class="row mb-4">
                <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img class="img-fluid w-100"
                    :src="cart.Material.image_url" alt="Sample">
                    <a href="#!">
                    </a>
                </div>
                </div>
                <div class="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div class="d-flex justify-content-between">
                    <div>
                        <h5>{{ cart.Material.name }}</h5>
                        <p class="mb-2 text-muted text-uppercase small">Category : {{ cart.Material.category }}</p>
                        <p class="mb-2 text-muted text-uppercase small">Price : {{ cart.Material.price }}</p>
                        <p class="mb-2 text-muted text-uppercase small">Stock : {{ cart.Material.stock }}</p>
                    </div>
                    <div>
                        <div class="def-number-input number-input safari_only mb-0 w-100">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="minus decrease"></button>
                        <input class="quantity" min="0" :max="cart.Material.stock" name="quantity" v-model="amount" type="number">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="plus increase"></button>
                        </div>
                    </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3" id="remove-item" @click.prevent="deleteCart(cart.id)"><i
                            class="fas fa-trash-alt mr-0"></i> Remove item </a>
                        <a href="#!" type="button" class="card-link-secondary small text-uppercase" id="wishlist" @click.prevent="addWishlist(cart.Material.id)"><i
                            class="fas fa-heart mr-0"></i> Move to wish list </a>
                    </div>
                    <p class="mb-0"><span><strong id="summary"> Rp. {{ amount * cart.Material.price }}</strong></span></p>
                    </div>
                </div>
                </div>
            </div>
            <hr class="mb-4">
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  data () {
    return {
      amount: this.cart.quantity
    }
  },
  props: ['cart'],
  methods: {
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    },
    addWishlist (id) {
      this.$store.dispatch('addWishlist', id)
    }
  },
  watch: {
    amount (newVal) {
      const amount = newVal
      const payload = {
        id: this.cart.id,
        amount
      }
      this.$store.dispatch('updateAmountCart', payload)
    }
  }
}
</script>

<style scoped>
    #remove-item {
        color: red;
        text-decoration: none;
    }

    #wishlist {
        color: royalblue;
        text-decoration: none;
    }
</style>
