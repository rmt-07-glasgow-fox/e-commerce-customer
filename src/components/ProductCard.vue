<template>
  <div class="col-3 card rounded shadow-sm border-0 mx-3" style="box-shadow: 0 0 21px rgba(0,0,0,.27);">
      <div class="card-body p-4"><img :src="product.image_url" alt="" class="img-fluid d-block mx-auto mb-3" height="300px">
          <h5 class="text-dark">{{ product.name }}</h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <h6 class="row medium text-muted mx-auto"><i class="fas fa-boxes mr-2"></i>Stock: {{ product.stock }}</h6>
          <h6 class="row medium text-muted mx-auto"><i class="fas fa-dollar-sign mr-2"></i>Price: {{ rupiahFormat(product.price) }}</h6>
          <a href="#" class="btn btn-secondary mt-2" @click.prevent="addToCart"><i class="fas fa-shopping-cart mr-2"></i>Add to Cart</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    rupiahFormat (number) {
      return number.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })
    },
    addToCart () {
      const obj = {
        id: this.product.id,
        command: 'add'
      }
      this.$store.dispatch('showProductOne', obj)
    }
  }
}
</script>

<style>

body {
    min-height: 100vh;
    background: #fafafa;
}

.social-link {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
}

.social-link:hover, .social-link:focus {
    background: #ddd;
    text-decoration: none;
    color: #555;
}

.progress {
    height: 10px;
}

</style>
