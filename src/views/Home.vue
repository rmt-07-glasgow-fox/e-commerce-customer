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
            <p class="text-start"> <b>Price :</b> {{ product.price }}</p>
            <p class="text-start"> <b>Condition :</b> {{ product.stock }}</p>
            <button class="btn btn-primary btn-sm" v-if="logIn === false" v-on:click="addToChart(product.id)" >Add To Chart</button>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
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
      activity: 0,
      logIn: false
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    },
    addToChart (id) {
      this.activity++
      this.$store.dispatch('addToChart', id)
    }
  },
  created () {
    this.fetchData()
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
    ...mapState(['dataProduct'])
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
