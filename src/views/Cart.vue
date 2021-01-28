<template>
  <div class="container-fluid" id="container">
    <div class="row no-gutter h-100">
      <div class="col-md-8 col-lg-8 bg-primary p-5">
        <CardCart v-for="(cart, index) in carts" :key="index" :cart="cart" />
      </div>
      <div class="col-md-8 col-lg-4 p-5">
        <form>
          <h1>Total payment :</h1>
          <h1>{{ toRupiah(totalPayment) }}</h1>
          <button class="btn btn-success btn-block my-2">
            <b-icon icon="wallet" /> Checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardCart from '../components/CardCart'

export default {
  methods: {
    toRupiah (number) {
      return number.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
      })
    }
  },
  components: { CardCart },
  computed: { ...mapState(['carts', 'totalPayment']) }
}
</script>

<style scoped>
#container {
  height: 100vh;
}

button {
  border-radius: 20px;
}

</style>
