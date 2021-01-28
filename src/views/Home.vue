<template>
<div>
  <navbar-login></navbar-login>
  <Carousel/>
  <div class="container">
    <div class="row">
      <div v-for="(product, index) in dataProduct" :key="index" class="col-6 col-md-3">
        <div class="card" style="width: 16rem;">
          <br>
          <h5> <b> {{ product.name }} </b> </h5>
          <br>
          <img :src="product.image_url" class="card-img-top" alt="image">
          <div class="card-body">
            <p class="text-start"> <b>Condition :</b> {{ product.condition }}</p>
            <p class="text-start"> <b>Price :</b> Rp. {{ product.price.toLocaleString('id-ID') }}</p>
            <p class="text-start"> <b>Stock :</b> {{ product.stock }}</p>
            <button class="btn btn-primary btn-sm" v-on:click="addToCart(product.id)" v-if="status === true" >Add To Chart</button>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
  <p v-if="status === false"> <b> Please Login first to purchase our collection, we wait you </b> </p>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import NavbarLogin from '../components/NavbarLogin.vue'
import Carousel from '../components/Carousel.vue'

export default {
  components: { Carousel, NavbarLogin },
  name: 'Home',
  data () {
    return {
      activity: 0
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    },
    addToCart (id) {
      this.activity++
      this.$store.dispatch('addToCart', id)
    },
    cekStatus () {
      this.$store.dispatch('cekStatus')
    }
  },
  created () {
    this.fetchData()
    this.cekStatus()
  },
  watch: {
    activity (payload) {
      if (this.activity >= 1) {
        console.log(payload, 'masuk watcher')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Product has been added to cart',
          showConfirmButton: false,
          timer: 1500
        })
        this.historyCart = 0
      }
    }
  },
  computed: {
    ...mapState(['dataProduct', 'status'])
  }
}
</script>

<style scoped>
img {
  width:  100% !important;
  height: 200px;
  object-fit: cover;
}
</style>
