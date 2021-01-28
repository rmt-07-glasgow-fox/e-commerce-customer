<template>
  <div class="home mt-2">
    <br>
    <label>Category</label><br>
    <select class="mdb-select md-form" v-model="category">
      <option value="All">All</option>
      <option v-for="(option, i) in options" :key="i" :value="option">{{ option }}</option>
    </select>
    <Product :category="category"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  data () {
    return {
      options: ['Fasion', 'Sport', 'Hobby', 'Drink', 'Food', 'Snack'],
      category: 'All'
    }
  },
  components: {
    Product
  },
  methods: {
    findAll () {
      this.$store.dispatch('findAll')
    }
  },
  computed: {
    getAccesstoken () {
      return this.$store.state.accesstoken
    }
  },
  created: function () {
    this.findAll()
    if (localStorage.getItem('accesstoken')) {
      this.$store.dispatch('checktoken', localStorage.getItem('accesstoken'))
    }
  }
}
</script>
