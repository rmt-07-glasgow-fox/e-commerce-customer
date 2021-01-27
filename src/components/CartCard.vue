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
          <img src="https://www.flaticon.com/svg/vstatic/svg/1828/1828708.svg?token=exp=1611724804~hmac=f274c67cf67e27a0223ae56b0c74e6c5" style="width: 25px; margin-right: 20px" alt="">
        </a>
        <p class="text-gray-700 font-light text-sm"> {{cart.quantity}}</p>
        <a href="" @click.prevent="increase(cart.Product.id)">
          <img src="https://www.flaticon.com/svg/vstatic/svg/1828/1828753.svg?token=exp=1611725035~hmac=4d3bd2e8fef1b41bc10db0b2aff81739" style="width: 25px; margin-left: 20px" alt="">
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
