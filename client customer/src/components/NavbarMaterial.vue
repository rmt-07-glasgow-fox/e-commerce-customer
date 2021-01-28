<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button class="btn btn-sg btn-success" @click.prevent="toCart">MY CART</button>
        <button class="btn btn-sg btn-primary" @click.prevent="toWishlist">WISHLIST</button>
        <button class="btn btn-sg btn-secondary" @click.prevent="toHistory">HISTORY</button>
      </li>
      <li class="category-option">
        <label for="category-label">Category : </label>
        <select name="category" id="category" v-model="category">
          <option value="all" selected>All</option>
          <option value="kayu">Kayu</option>
          <option value="besi">Besi</option>
          <option value="baja">Baja</option>
          <option value="semen">Semen</option>
          <option value="keramik">Keramik</option>
          <option value="genteng">Genteng</option>
          <option value="batu">Batu</option>
          <option value="bata">Bata</option>
          <option value="pasir">Pasir</option>
        </select>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-danger my-2 my-sm-0" @click.prevent="logout">LOGOUT</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarMaterial',
  data () {
    return {
      category: ''
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    toCart () {
      this.$router.push('/cart')
    },
    toWishlist () {
      this.$router.push('/wishlist')
    },
    toHistory () {
      this.$router.push('/history')
    }
  },
  watch: {
    category (newVal) {
      const category = newVal.toLowerCase()
      this.$store.commit('insertCategory', category)
    }
  }
}
</script>

<style scoped>
button {
    margin-left: 10px;
    margin-right: 10px;
}

.category-option {
  padding-top: 8px;
  padding-left: 10px;
}

</style>
