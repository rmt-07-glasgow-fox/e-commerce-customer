<template>
  <div>
    <b-modal
      :id="'product-detail-' + product.id"
      header-bg-variant="dark"
      header-text-variant="light"
      size="xl"
      :title="product.name"
      centered
      no-btn
    >
      <b-card class="mb-3 p-4">
        <b-row>
          <b-col>
            <b-img
              v-bind="mainProps"
              :src="product.image_url"
              @error="imageLoadError"
              col
            ></b-img>
          </b-col>
          <b-col>
            <b-card-text col>
              <h2>Description</h2>
              <p style="white-space: pre-line">{{ product.description }}</p>
              <transaction-box class="mt-4" :product="product"/>
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>

      <template #modal-footer="{ close }">
        <b-button size="xl" variant="secondary" @click="close()">
          CLOSE
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import TransactionBox from './TransactionBox'
export default {
  name: 'ProductDetail',
  components: {
    TransactionBox
  },
  data () {
    return {
      defaultImg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png',
      mainProps: {
        width: 500
      }
    }
  },
  methods: {
    imageLoadError () {
      this.product.image_url = this.defaultImg
    }
  },
  computed: {
    checkStock () {
      if (this.product.stock === 0) return 'Out of stock'
      return this.product.stock + ' items'
    },
    money () {
      const options1 = { style: 'currency', currency: 'IDR' }
      const numberFormat1 = new Intl.NumberFormat('id-ID', options1)
      const number = numberFormat1.format(this.product.price)
      return number.substring(0, (number.length - 3))
    }
  },
  props: ['product']
}
</script>

<style>

</style>
