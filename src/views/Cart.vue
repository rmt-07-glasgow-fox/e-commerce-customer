<template>
    <div>
        <navbar-login></navbar-login>
        <br><br><br>
        <div class="row">
        <div class="container mt-5 col-sm-8">
          <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Item Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in dataCart" :key="index">
              <th class="align-middle">{{index+1}}</th>
              <td class="align-middle">
                {{product.Product.name}}
                <p> <b>Description :</b> </p>
                {{product.Product.description}}
              </td>
              <td class="align-middle">
                <button class="btn btn-danger btn-sm col-2" :disabled='product.quantity===1' v-on:click="minusCart(product.ProductId)"> - </button>
                <input type="text" :value="product.quantity" disabled class="col-2" style="text-align:center">
                <button class="btn btn-primary btn-sm col-2" v-on:click="plusCart(product.ProductId)"> + </button>
                <br>
                <br>
                <button class="btn btn-outline-danger btn-sm col-6" v-on:click="destroyCart(product.id)"> Delete </button>
              </td>
              <td class="align-middle">Rp. {{ product.totalprice.toLocaleString('id-ID') }}</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div class="container mt-5 col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total : <b>Rp. {{ totalList.toLocaleString('id-ID') }}</b> </h5>
              <p class="card-text">We Apreciate your time and we want you to proceed immediately, so just checkout this</p>
              <button class="btn btn-primary" v-on:click="checkOut">Check Out</button>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import NavbarLogin from '../components/NavbarLogin.vue'

export default {
  components: { NavbarLogin },
  name: 'Cart',
  data () {
    return {
      activity: 0
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    minusCart (id) {
      this.$store.dispatch('minusCart', id)
      this.activity++
    },
    plusCart (id) {
      this.$store.dispatch('plusCart', id)
      this.activity++
    },
    totalList () {
      this.$store.dispatch('totalShop')
    },
    destroyCart (payload) {
      console.log(payload)
      this.$store.dispatch('destroyCart', payload)
    },
    checkOut () {
      this.$store.dispatch('checkOut')
    },
    cekStatus () {
      this.$store.dispatch('cekStatus')
    }
  },
  created () {
    this.fetchCart()
    this.cekStatus()
    this.$store.dispatch('totalShop')
  },
  watch: {
    activity (payload) {
      if (this.activity === 1) {
        this.activity = 0
        this.fetchCart()
      }
    }
  },
  computed: {
    ...mapState(['dataCart', 'totalList', 'status'])
  }
}
</script>

<style>

</style>
