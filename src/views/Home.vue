<template>
  <div class="home">
    <Navbar/>
    <div class="container">
    <div style="margin-top: 20px"><h4 style="font-weight:bold"> Product List</h4></div>
      <p style="color: red;">{{err}}</p>
      <div class="row" style="margin-top: -15px">
      <Card
      v-for="product in products"
      :key="product.id"
      :product="product"
      />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Card from '../components/Card.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer,
    Card
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    err () {
      return this.$store.state.err
    }
  }
}
</script>

<style>
/* * {box-sizing: border-box;}

.container {
  display: block;
  margin:auto; */
  /* text-align: left; */
  /* border-radius: 5px;
  padding: 20px;
  width: 80%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
} */
</style>
