<template>
    <div class="col">
        <div class="card" style="width: 18rem;">
        <img :src="product.image_url" class="card-img-top" alt="...">
            <div class="pt-3 mb-3">
            <p class="card-title">{{product.name}}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: Rp.{{product.price}}</li>
            <li class="list-group-item">Stock: {{product.stock}}</li>
            <li class="list-group-item">Category: {{product.category}}</li>
            </ul>
            <div>
                <button type="button" class="btn btn-success mt-3 mb-3" @click.prevent="addToCart(product.id)">Add To Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addToCart (productId) {
      if (!localStorage.access_token) {
        this.$router.push('/login')
      } else {
        const payload = {
          productId
        }
        console.log(payload)
        this.$store.dispatch('addToCart', payload)
      }
    }
  }
}
</script>

<style>

</style>
