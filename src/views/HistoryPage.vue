<template>
  <div>
    <Navbar></Navbar>
      <button @click.prevent="home" id="backHomeBtn">Home</button>
      <h1 style="margin-top:20px; font-family: 'Pacifico', cursive;">My History</h1>
      <div id="cartCardBox" class="col-10" style="margin-left:8%; margin-top: 5%; margin-bottom: 50px;">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <HistoryCard
          v-for="History in histories"
          :key="History.id"
          :History="History"
          ></HistoryCard>
        </div>
      </div>
  </div>
</template>

<script>
import HistoryCard from '../components/HistoryCard'
import Navbar from '../components/Navbar'

export default {
  data () {
    return {
    }
  },
  components: {
    HistoryCard,
    Navbar
  },
  methods: {
    fetchHistory () {
      this.$store.dispatch('fetchHistory')
    },
    home () {
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    histories () {
      return this.$store.state.histories
    },
    totalPrice () {
      let price = 0
      for (let i = 0; i < this.allCarts.length; i++) {
        price += (this.allCarts[i].Product.price * this.allCarts[i].total)
      }
      return price
    }
  },
  created () {
    this.fetchHistory()
  }
}
</script>

<style>
  #backHomeBtn {
    margin-top: 80px;
    outline: none;
    border: 0;
    width: 100px;
    height: 40px;
    transition: 0.5s;
  }
  #backHomeBtn:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
  }
</style>
