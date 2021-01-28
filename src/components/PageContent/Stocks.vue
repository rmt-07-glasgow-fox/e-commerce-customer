<template>
  <div class="w3-container" id="Stocks" style="margin-top: 75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Get Your Own Now.</b></h1>
    <div class="row">
      <Card
        v-for="product in listProducts"
        :key="product.id"
        :product='product'
        />
    </div>
  </div>
</template>

<script>
import Card from '@/components/PageContent/Card.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Stocks',
  components: {
    // Table,
    Card
  },
  watch: {
    category (newVal) {
      this.$store.commit('changeCategory', newVal)
    }
  },
  data () {
    return {
      category: 'Choose an option'
    }
  },
  methods: {
    fetchAll () {
      this.$store.dispatch('getProducts')
    },
    fetchCategory () {
      this.$store.dispatch('getCategories')
    },
    addAircraft () {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5']
      })
        .queue([
          {
            title: 'Name Or Type',
            text: 'Name or type of aircraft'
          },
          {
            title: 'Equipment',
            text: 'Equipment of aircraft'
          },
          {
            title: 'Price',
            text: 'Price of aircraft in USD'
          },
          {
            title: 'Stock',
            text: 'Stock of aircraft'
          },
          {
            title: 'Image',
            text: 'Image url of aircraft'
          }
        ])
        .then((result) => {
          if (result.value) {
            this.$store.dispatch('addProduct', result.value)
            this.fetchAll()
            this.fetchCategory()
          }
        })
    },
    getUserData () {
      this.$store.dispatch('getUserData')
    }
  },
  computed: {
    listProducts () {
      const raw = this.$store.getters.filterCategory.filter(el => el.stock !== 0)
      return raw
    },
    categories () {
      return this.$store.state.categories
    },
    uploadedImage () {
      return this.$store.state.uploadedImage
    }
  },
  created () {
    this.fetchAll()
    this.getUserData()
    this.fetchCategory()
  },
  updated () {
  },
  mounted () {
  }
}
</script>

<style scoped>
#table {
  display: block;
  height: 800px;
  overflow-y: scroll;
  text-align: center;
  scrollbar-width: thin
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #f46336;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display:none;
}
/* Custom Select */
.select {
  position:relative;
  float: right;
  display: flex;
  width: 14em;
  height: 3em;
  line-height: 3;
  background: #fff;
  overflow: hidden;
  border-radius: .25em;
}

select {
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #F44336;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}

</style>>
