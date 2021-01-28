<template>
  <div class="carts">
    <Navbar />
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-6 overflow-auto p-3 bg-content p-0">
          <CartCard v-for="cart in carts" :key="cart.id" :cart="cart" />
        </div>
        <div class="col-6">
          <h1 class="mt-4 mb-4 text-left">Your Carts :</h1>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Price @</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="cart.id" class="tr-table">
                <th scope="row" class="font-table p-1"><span>{{index+1}}</span></th>
                <td class="font-table p-1">{{cart.Product.name}}</td>
                <td class="font-table p-1">@ {{cart.Product.price}}</td>
                <td class="font-table p-1 td-table">{{cart.quantity}}<button @click="removeCarts(cart.id)" class="p-0 button-table btn btn-sm"><i class='fas fa-ban' style='font-size:20px;color:red'></i></button></td>
              </tr>
            </tbody>
          </table>
          <h1><span class="ml-1 badge badge-light"><span class="text-success">Total : </span>{{totalPrice}} </span></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartCard from '../components/CartCard'
import Swal from 'sweetalert2'
export default {
  name: 'Carts',
  components: {
    Navbar,
    CartCard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      return this.$store.state.totalPrice
    }
  },
  methods: {
    getCarts () {
      this.$store.dispatch('fetchCarts')
    },
    removeCarts (cartId) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can revert this Action',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it~'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('removeCarts', cartId)
            .then(({ data }) => {
              Swal.fire({
                icon: 'success',
                title: 'Success !',
                text: 'This item has Removed from Your Cart'
              })
              this.$store.dispatch('fetchCarts')
            })
            .catch((err) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
              console.log(err)
            })
        }
      })
    }
  },
  created () {
    this.getCarts()
  }
}
</script>

<style>
</style>
