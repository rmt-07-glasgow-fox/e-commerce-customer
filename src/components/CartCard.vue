<template>
<div>
  <div class="card p-2 m-3 flex flex-row shadow-md rounded" style="width: 600px">
    <div>
    <img class="" :src="cart.Product.image_url" onerror="this.onerror=null;this.src='https://place-hold.it/300x500';" style="height: 228px; width: 155px;" >
    </div>
    <div class="p-5 flex flex-col justify-center ">
        <h4 class="text-gray-900 font-medium">{{ cart.Product.name }}</h4>
        <div class="flex flex-row py-3">
        <a href="" @click.prevent="decrease(cart.Product.id)">
          <img src="../assets/minus.png" style="width: 25px; margin-right: 20px" alt="">
        </a>
        <p class="text-gray-700 font-light text-sm"> {{cart.quantity}}</p>
        <a href="" @click.prevent="increase(cart.Product.id)">
          <img src="../assets/plus.png" style="width: 25px; margin-left: 20px" alt="">
        </a>
        <!-- tambahin harga satuan sama sub total -->
        </div>
        <p class="text-gray-500 font-light text-xs">Price: Rp {{ formatRp(cart.Product.price)}} x {{ cart.quantity }} = <span class="text-black text-sm"> Rp {{ formatRp(cart.Product.price * cart.quantity) }}</span></p>
        <a @click.prevent="removeItem(cart.Product.id)" href="" class="py-3 text-red-300 hover:text-red-400 font-light text-sm">Remove item from cart</a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'CartCard',
  props: ['cart'],
  components: {},
  data () {
    return {
    }
  },
  methods: {
    formatRp (value) {
      return value.toLocaleString('id-ID')
    },
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
    },
    decrease (id) {
      this.$store.dispatch('decrease', id)
    },
    increase (id) {
      this.$store.dispatch('increase', id)
    },
    removeItem (id) {
      this.$store.dispatch('removeItem', id)
    }
  }
}
</script>
