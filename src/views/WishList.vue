<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col" v-if="getWishlists.length == 0"><h1>Your Wishlist is empty, Let's Shoping!!!</h1></div>
        <div class="col-3 p-4" v-for="product in getWishlists" :key="product.id">
          <div class="card" style="width:200px">
            <img class="card-img-top" :src="product.imageUrl" style="width:198px; height:198px;" alt="Card image">
            <div class="card-body">
              <h3 class="card-title">{{product.name}}</h3>
              <p class="card-text">Price {{product.price}}</p>
              <p class="card-text">Stock {{product.stock}}</p>
              <div class="dropdown-divider"></div>
              <button class="btn btn-primary" v-if="role == 'customer'" data-toggle="modal" data-target="#modalEdit" @click="findOne(product.id)">
                <span class="glyphicon glyphicon-shopping-cart"> Cart</span>
              </button>
              <div class="dropdown-divider"></div>
              <button class="btn btn-primary" v-if="role == 'customer'">
                <span class="glyphicon glyphicon-trash" @click="destroyWishlist(product.id)"> Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div style="margin-top: 30px;" class="modal" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-bottom" role="document">
        <div class="modal-content">
          <div class="modal-header">

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
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addToCart()">
              <span class="glyphicon glyphicon-shopping-cart"> Cart_List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishList',
  data () {
    return {
      product: {
        id: '',
        name: '',
        imageUrl: '',
        price: '',
        stock: '',
        category: ''
      },
      qty: 1
    }
  },
  methods: {
    destroyWishlist (ProductId) {
      const payload = {
        ProductId,
        accesstoken: localStorage.getItem('accesstoken')
      }
      this.$store.dispatch('destroyWishlist', payload)
    },
    addToCart () {
      const payload = {
        ProductId: this.product.id,
        qty: this.qty,
        currentPrice: this.product.price,
        accesstoken: localStorage.getItem('accesstoken')
      }
      this.$store.dispatch('addToCart', payload)
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
    clear () {
      this.product.id = ''
      this.product.name = ''
      this.product.imageUrl = ''
      this.product.price = ''
      this.product.stock = ''
      this.product.category = ''
      this.qty = 1
    },
    findOne (id) {
      this.clear()
      const data = {
        product: id,
        accesstoken: this.getAccesstoken
      }
      this.$store.dispatch('findOne', data)
    }
  },
  computed: {
    getWishlists () {
      return this.$store.state.wishlists
    },
    role () {
      return this.$store.state.role
    },
    getProduct () {
      return this.$store.state.product
    }
  },
  created: function () {
    if (localStorage.getItem('accesstoken')) {
      this.$store.dispatch('checktoken', localStorage.getItem('accesstoken'))
      this.$store.dispatch('findWishlist', localStorage.getItem('accesstoken'))
    } else {
      this.$router.push('/login')
    }
  },
  watch: {
    getProduct: function () {
      this.product = this.getProduct
    }
  }
}
</script>

<style>

</style>
