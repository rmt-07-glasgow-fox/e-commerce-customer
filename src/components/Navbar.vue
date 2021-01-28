<template>
  <v-app-bar
    color="white"
    fixed
    light
  >
    <!-- <v-toolbar-title router :to="{ name: 'Home' }">Commerce -->
      <!-- <button text :to="{ name: 'Home' }">E-Commerce</button> -->
    <!-- </v-toolbar-title> -->
      <v-app-bar-nav-icon :to="{ name: 'Home' }" plain>
        <v-icon class="accent--text">mdi-home</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-h6 accent--text">
        <span>E-Commerce</span>
      </v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="What state are you from?"
      solo-inverted
      :append-icon="'mdi-magnify'"
    ></v-autocomplete>
    <!-- <v-spacer></v-spacer> -->

    <v-badge
      bordered
      color="error"
      overlap
      :content="cart ? cart.length : ''"
    >
      <v-btn fab icon x-small :to="{ name: 'Cart' }">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-badge>
    <v-badge
      bordered
      color="error"
      overlap
      :content="wishlist ? wishlist.length : ''"
    >
    <v-btn fab icon x-small :to="{ name: 'Wishlist' }">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    </v-badge>

    <div v-if="!isLogin">
      <v-btn class="text-caption pa-0 ma-0" text plain color="grey" :to="{ name: 'Register' }">
        Register
      </v-btn>
      |
      <v-btn class="text-caption pa-0 ma-0" text plain color="grey" :to="{ name: 'Login' }">
        Login
      </v-btn>
    </div>
    <ProfileMenu v-if="isLogin"/>
  </v-app-bar>
</template>

<script>
import ProfileMenu from '@/components/ProfileMenu.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ProfileMenu
  },
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null
    }
  },
  methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.productName.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    ...mapState({
      cart: state => state.mCart.cart,
      wishlist: state => state.mWishlist.wishlist,
      products: state => state.mProducts.products
    }),
    productName () {
      const names = []
      this.products.map(el => {
        names.push(el.name)
      })
      return names
    }
  },
  created () {
    localStorage.access_token &&
    this.$store.dispatch('fetchCart', null, true)
    localStorage.access_token &&
    this.$store.dispatch('fetchWishlist', null, true)
    localStorage.access_token &&
    this.$store.dispatch('fetchAllProducts', null, true)
  }
}
</script>

<style>

</style>
