<template>
  <!-- Sidebar/menu -->
  <nav
    class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
    style="z-index: 3; width: 300px; font-weight: bold"
    id="mySidebar"
  >
    <br />
    <div class="w3-container" id="title">
      <h3 class="w3-padding-64">
        <b>Used<br />Aircraft</b>
      </h3>
    </div>
    <div class="w3-bar-block">
      <a
        @click="toHome"
        class="w3-bar-item w3-button w3-hover-white"
        ><i class="lni lni-home"></i> | Home</a
      >
      <a
        @click="toWishlist"
        class="w3-bar-item w3-button w3-hover-white"
        ><i class="lni lni-bookmark"></i> | Wishlist</a
      >
      <a
        @click="toCart"
        class="w3-bar-item w3-button w3-hover-white"
        ><i class="lni lni-cart-full"></i> | Shopping Cart  </a
      >
      <a
        @click="toHistory"
        class="w3-bar-item w3-button w3-hover-white"
        ><i class="lni lni-investment"></i> | Transaction </a
      >
      <a
        @click="logout"
        class="w3-bar-item w3-button w3-hover-white"
        ><i class="lni lni-exit"></i> | Logout</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavSide',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    toHome () {
      this.$store.dispatch('route', 'Home')
    },
    toHistory () {
      this.$store.dispatch('route', 'transaction')
    },
    toCart () {
      this.$store.dispatch('route', 'cart')
    },
    toWishlist () {
      this.$store.dispatch('route', 'wishlist')
    }
  }
}
</script>

<style scoped>
.numberCircle {
    border-radius: 10%;
    width: 1px;
    height: 1px;
    padding: 2px;
    background: white;
    color: #F44336;
    text-align: right;

}
</style>>
