<template>
  <div id="productCard" class="bg-white mx-2 my-2 px-2 py-2 overflow-hidden shadow-lg" style="width: 25vh">
    <div class="overflow-hidden flex-row">
      <a href="#">
        <img
          alt="Placeholder"
          class="w-full"
          :src="product.url"
        />
      </a>

      <div class="flex-row items-center justify-center leading-tight">
        <div class="bg-black mb-2">
          <span class=" text-xs text-gray-200 font-extralight">{{ product.Category.name }}</span>
        </div>
        <div>
        <p class="text-sm font-semibold text-black">
            {{ product.name }}
        </p>
        </div>
        <div class="mt-2">
          <p class="text-xs font-light text-gray-400">IDR{{product.price}}</p>
        </div>
        <div class="mt-2">
          <button @click.prevent="addCart" class="bg-transparent text-black rounded-sm p-2 font-light text-xs outline-none focus:outline-none">add to cart.</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addCart () {
      if (localStorage.access_token && localStorage.user) {
        this.$store.dispatch('addCart', {
          ProductId: this.product.id,
          amount: 1,
          totalPrice: +this.product.price
        }).catch(err => {
          err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
          this.$swal({
            icon: 'warning',
            text: err.response.data.message
          })
        })
      } else {
        this.$store.commit('toggleLogin', !this.showLogin)
      }
    }
  }
}
</script>

<style>

</style>
