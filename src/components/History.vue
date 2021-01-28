<template>
    <div class="d-flex mb-3 card shadow-sm w-75 flex-row">
        <div class="img-container d-flex align-items-center justify-content-center p-2 bg-light">
          <img class="card-img-top img-thumbnail" :src="history.image_url" alt="Card image cap">
        </div>
        <div class="card-body text-left">
            <span style="font-size:28px;">{{history.productName}}</span> <br>
            {{history.quantity}} <i class="bi-x"></i> Rp {{price}}<br>
            Total : Rp {{total}} <br>
            <span style="font-size:12px;" class="text-secondary">{{date}}</span> <br>

        </div>
    </div>
</template>

<script>
// import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  props: [
    'history'
  ],
  methods: {
    priceIDR (number) {
      return number.toLocaleString('id-ID', { currency: 'IDR' })
    }
  },
  computed: {
    price () {
      return this.priceIDR(this.history.price)
    },
    total () {
      return this.priceIDR(this.history.price * this.history.quantity)
    },
    date () {
      const date = new Date(this.history.createdAt)
      const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
    }
  }
}
</script>

<style scoped>
  img{
    height: inherit;
    width: auto;
  }
  .img-container{
    width: 200px;
    overflow: hidden;
  }
  .card{
    height: 10em;
  }
  .card-body{
    line-height: 180%;
    font-weight: bolder;
    font-size: 18px;
  }
  .img-thumbnail{
    border: 0;
  }
  .btn.btn-quantity{
    width: 30px;
    height: 30px;
    padding: 0;
  }
</style>
