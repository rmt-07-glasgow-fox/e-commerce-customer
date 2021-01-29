<template>
  <div class="container-fluit p-5">
    <div class="row">
      <div class="col" v-if="carts.length == 0"><h1>Your shopping cart is empty, Let's Shoping!!!</h1></div>
      <div class="col" v-if="carts.length > 0">
        <table class="table table-hover">
          <tbody>
            <tr class="clickable-row" v-for="cart in carts" :key="cart.id">
              <td><img class="card-img-top" :src="cart.imageUrl" style="width:198px; height:198px;" alt="Card image"
                  data-toggle="modal" data-target="#modalEdit" @click="findOne(cart.id, cart.CartList.qty, cart.CartList.CartId)"></td>
              <td>
                <div class="col ml-2">
                  <h4 align="left">Name {{ cart.name }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Price {{ cart.price }}</h4>
                  <!-- <div class="dropdown-divider"></div>
                  <h4 align="left">Stock {{ cart.stock }}</h4> -->
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Qty {{ cart.CartList.qty }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Total {{ (cart.CartList.qty * cart.price) }}</h4>
                </div>
              </td>
              <td>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalEdit" @click="findOne(cart.id, cart.CartList.qty, cart.CartList.CartId)">
                  <span class="glyphicon glyphicon-shopping-cart"> Edit_Cart_List</span>
                </button>
                <hr>
                <button class="btn btn-primary" @click="destroy(cart.CartList.ProductId, cart.CartList.CartId)">
                  <span class="glyphicon glyphicon-trash"> Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
          <button class="btn btn-primary w-100" @click="destroyCart(carts[0].CartList.CartId)">
            <span class="glyphicon glyphicon-trash"> Delete_Cart</span>
          </button>
      </div>
      <div class="col bg-dark m-5" v-if="carts.length > 0">
        <div class="p-5 m-5 bg-light">
          <h4>TOTAL {{ total }}</h4>
          <hr>
          <button class="btn btn-primary">
            <span class="glyphicon glyphicon-usd" @click="checkout(carts[0].CartList.CartId)"> Checkout</span>
          </button>
        </div>
      </div>
    </div>
    <!--  -->
    <div style="margin-top: 30px;" class="modal" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-bottom" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!--  -->
          </div>
            <div class="modal-body">
              <img class="card-img-top" :src="product.imageUrl" style="width:198px; height:198px;" alt="Card image">
              <div class="card-body">
                <h3 class="card-title">{{ product.name }}</h3>
                <p class="card-text">Price {{ product.price }}</p>
                <p class="card-text">Stock {{ product.stock }}</p>
              </div>

              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary" style="width: 40px;" @click="minus()">
                  <span class="glyphicon glyphicon-minus"></span>
                </button>
                <input class="form-control border-0" style="width: 40px;" v-model="qty"/>
                <button type="button" class="btn btn-primary" style="width: 40px;" @click="plus()">
                  <span class="glyphicon glyphicon-plus"></span>
                </button>
              </div>
            </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              <span class="glyphicon glyphicon-remove"> Cancel</span>
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateCart()">
              <span class="glyphicon glyphicon-floppy-disk"> Save_Change</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      product: {
        id: '',
        name: '',
        imageUrl: '',
        price: '',
        stock: ''
      },
      qty: 1,
      cartId: '',
      total: 0
    }
  },
  computed: {
    carts () {
      return this.$store.state.cartlist
    },
    getProduct () {
      return this.$store.state.product
    }
  },
  methods: {
    updateCart () {
      const payload = {
        CartId: this.cartId,
        ProductId: this.product.id,
        qty: this.qty,
        currentPrice: this.product.price,
        accesstoken: localStorage.getItem('accesstoken')
      }
      this.$store.dispatch('updateCart', payload)
    },
    plus () {
      if (this.qty < this.product.stock) {
        this.qty++
      }
    },
    minus () {
      if (this.qty > 1) {
        this.qty--
      }
    },
    findOne (id, qty, cartId) {
      this.qty = qty
      this.cartId = cartId
      this.clear()
      const data = {
        product: id,
        accesstoken: this.getAccesstoken
      }
      this.$store.dispatch('findOne', data)
    },
    clear () {
      this.product.id = ''
      this.product.name = ''
      this.product.imageUrl = ''
      this.product.price = ''
      this.product.stock = ''
      this.product.category = ''
    },
    destroy (ProductId, CartId) {
      const payload = {
        CartId,
        ProductId,
        accesstoken: localStorage.getItem('accesstoken')
      }
      this.$store.dispatch('destroy', payload)
    },
    destroyCart (CartId) {
      const payload = {
        CartId,
        accesstoken: localStorage.getItem('accesstoken')
      }
      this.$store.dispatch('destroyCart', payload)
    },
    checkout (CartId) {
      const payload = {
        CartId,
        accesstoken: localStorage.getItem('accesstoken')
      }
      this.$store.dispatch('checkout', payload)
    }
  },
  created: function () {
    if (localStorage.getItem('accesstoken')) {
      this.$store.dispatch('checktoken', localStorage.getItem('accesstoken'))
      this.$store.dispatch('findUnpaid', localStorage.getItem('accesstoken'))
    }
  },
  watch: {
    carts: function () {
      this.total = 0
      this.carts.forEach(e => {
        this.total += (+e.price * +e.CartList.qty)
      })
    },
    getProduct: function () {
      this.product = this.getProduct
    }
  }
}
</script>
