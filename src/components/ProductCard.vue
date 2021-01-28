<template>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
    <vs-card id="productCard">
      <template #title>
        <h3>{{ product.name }}</h3>
        <p>{{ price }}</p>
        <small>stock: {{ product.stock }}</small>
      </template>
      <template #img>
        <img :src="`${product.image_url}`" alt="">
      </template>
      <template #text>
        <p>
        </p>
      </template>
      <template #interactions>
        <vs-button
          @click.prevent="addCart(product.id)"
          color="rgb(59,222,200)"
          gradient
          icon>
          <i class='bx bx-cart'></i>
        </vs-button>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
      </template>
    </vs-card>
  </vs-col>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      isAuth: false
    }
  },
  methods: {
    addCart (ProdId) {
      if (this.isAuth) {
        this.$store.dispatch('addCart', ProdId)
      } else {
        this.$router.replace('/auth/login')
      }
    },
    checkAuth () {
      localStorage.getItem('access_token') ? this.isAuth = true : this.isAuth = false
      console.log(this.isAuth)
    }
  },
  created () {
    this.checkAuth()
  },
  computed: {
    price () {
      // eslint-disable-next-line
      return 'IDR ' + this.product.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.')
    }
  }
}
</script>

<style>
  #productCard {
    margin: 20px 0px 20px 0px;
  }
</style>
