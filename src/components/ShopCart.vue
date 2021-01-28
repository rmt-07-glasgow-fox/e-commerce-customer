<template>
  <div class="w3-main" style="margin-left:340px;margin-right:40px">
    <Header
    :title='title'
    :subtitle='subtitle'/>
    <div class="container mx-auto flex flex-row px-4 mt-20 mb-20">
        <div class="w-1/2 flex justify-center items-center">
                <div v-if="userCart[0]" class="container flex flex-row flex-wrap justify-center items-center" style="height: 500px; overflow-y: scroll;">
                    <CartCard
                    v-for="cart in userCart"
                    :key="cart.id"
                    :cart='cart'
                    />
                </div>
                <div v-if="!userCart[0]">
                  You don't have any checkout item
                </div>
        </div>
    </div>
    <CartSummary v-if="userCart[0]"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/PageContent/Header.vue'
import Footer from '@/components/PageContent/Footer.vue'
import CartCard from '@/components/Shopcart/CartCard.vue'
import CartSummary from '@/components/Shopcart/CartSummary.vue'

export default {
  name: 'ShopCart',
  data () {
    return {
      title: 'Shopping Cart',
      subtitle: 'Your Cart'
    }
  },
  components: {
    Header,
    Footer,
    CartCard,
    CartSummary
  },
  computed: {
    userCart () {
      console.log(this.$store.state)
      console.log(this.$store.state.userData.itemoncart)
      const raw = this.$store.state.userData.itemoncart.filter(el => el.Cart.isBought === false)
      return raw
    }
  },
  methods: {
    getUserData () {
      this.$store.dispatch('getUserData')
    }
  },
  created () {
    this.getUserData()
  }
}
</script>

<style>

</style>
