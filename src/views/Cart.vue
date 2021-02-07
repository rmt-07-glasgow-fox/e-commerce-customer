<template>
  <div>
    <NavSide/>
    <ShopCart/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavSide from '@/components/NavSide.vue'
import ShopCart from '@/components/ShopCart.vue'

export default {
  name: 'Cart',
  components: {
    NavSide,
    ShopCart
  }
}
</script>
