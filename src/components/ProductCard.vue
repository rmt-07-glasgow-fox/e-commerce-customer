<template>
  <div class="card product-card">
    <img class="card-img-top img-product"
     :src="item.image_url">
    <div class="card-body">
      <a href="/"
       @click.prevent="$emit('toProductDetails', item.id)">
        <h4 class="card-title">{{ item.name }}</h4>
      </a>
      <div class="text-card">
        <div>
          <p class="card-text">{{ item.price }} IDR</p>
          <p class="card-text">stock: {{ item.stock }}</p>
          <p>{{ category }}</p>
        </div>
        <img src="../assets/wishlist.png" alt="wishlist" class="wishlist"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['item'],
  data () {
    return {
      category: ''
    }
  },
  created () {
    this.$store.state.categories.forEach(el => {
      if (el.id === this.item.CategoryId + 1) this.category = el.tag
    })
    console.log(this.category)
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

.img-product {
  height: 150px;
  width: 100px;
}

.wishlist {
  height: 50px;
  width: 50px;
  margin-left: 100px;
  filter: invert(1);
}

.text-card {
  display: flex;
  flex-direction: row;
}
</style>
