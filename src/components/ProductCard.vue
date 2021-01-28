<template>
      <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
        <!-- Block2 -->
        <div class="block2">
          <div class="block2-pic hov-img0">
            <img :src="product.image_url" alt="IMG-PRODUCT" />
          </div>

          <div class="block2-txt flex-w flex-t p-t-14">
            <div class="block2-txt-child1 flex-col-l ">
              <a class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                {{ product.name }}
              </a>
              <span class="stext-105 cl3">
              Rp. {{ product.price.toLocaleString() }}
              </span>
              <span class="stext-105 cl3">
              Stock : {{ product.stock }}
              </span>
            </div>
            <!-- buat nambah wish list -->
            <div class="block2-txt-child2 flex-r p-t-3">
              <a
                href="#"
                class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
              >
                <i @click.prevent="addCart" class="fa fa-cart-plus fa-2x" style="color: black"></i>
              </a>
            </div>
            <div class="block2-txt-child2 flex-r p-t-3">
              <a
                href="#"
                class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
              >
                <img
                  class="icon-heart1 dis-block trans-04"
                  src="images/icons/icon-heart-01.png"
                  alt="ICON"
                />
                <img
                  class="icon-heart2 dis-block trans-04 ab-t-l"
                  src="images/icons/icon-heart-02.png"
                  alt="ICON"
                />
              </a>
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
      const data = {
        ProductId: this.product.id
      }
      if (localStorage.access_token) {
        this.$store.dispatch('addCart', data)
      } else {
        this.$router.push('/Login')
      }
    }
  }
}
</script>
<style scoped>
</style>
