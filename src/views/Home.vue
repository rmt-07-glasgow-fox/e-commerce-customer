<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="col-12">
      <div id="HeadHomeBox1" class="col-10">
        <carousel-3d>
          <slide :index="0">
            <img style="height: 270px; width: 800px;" src="../assets/carousel 1.jpg" alt="">
          </slide>
          <slide :index="1">
            <img style="height: 270px; width: 700px;" src="../assets/carousel 2.jpg" alt="">
          </slide>
           <slide :index="2">
            <img style="height: 270px; width: 360px;" src="../assets/carousel 5.png" alt="">
          </slide>
          <slide :index="3">
            <img style="height: 270px; width: 360px;" src="../assets/carousel 6.jpg" alt="">
          </slide>
        </carousel-3d>
      </div>
      <div id="categoryBoxBoard" class="mx-auto">
        <div @click="fetchProductByCategory('fashion')" id="category1" class="categoryBox">
          <img src="../assets/fashion.png">
          <div class="centered"><b>fashion</b></div>
        </div>
        <div @click="fetchProductByCategory('home appliance')" id="category2" class="categoryBox">
          <img src="../assets/home appliance.png">
          <div class="centered"><b>home appliance</b></div>
        </div>
        <div @click="fetchProductByCategory('electronic')" id="electronic" class="categoryBox">
          <img src="../assets/phone.png">
          <div class="centered"><b>electronic</b></div>
        </div>
        <div @click="fetchProductByCategory('food')" class="categoryBox">
          <img src="../assets/food.png">
          <div class="centered"><b>Food</b></div>
        </div>
        <div @click="fetchProductByCategory('other')" id="category5" class="categoryBox">
          <img src="../assets/other.png">
          <div class="centered"><b>other</b></div>
        </div>
        <div @click="fetchProductByCategory('all')" id="category6" class="categoryBox">
          <img src="../assets/all product.png">
          <div class="centered"><b>all product</b></div>
        </div>
      </div>
    </div>
    <AllProduct
      v-if="category === 'all'"
      :Products="allProducts"
    ></AllProduct>
    <FashionProduct
      v-if="category === 'fashion'"
      :Products="filteredCategoryFashion"
    ></FashionProduct>
    <FoodProduct
      v-if="category === 'food'"
      :Products="filteredCategoryFood"
    ></FoodProduct>
    <HomeApplianceProduct
      v-if="category === 'home appliance'"
      :Products="filteredCategoryHomeAppliance"
    ></HomeApplianceProduct>
    <OtherProduct
      v-if="category === 'other'"
      :Products="filteredCategoryOther"
    ></OtherProduct>
    <ElectronicProduct
      v-if="category === 'electronic'"
      :Products="filteredCategoryElectronic"
    ></ElectronicProduct>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel3d, Slide } from 'vue-carousel-3d'
import Navbar from '../components/Navbar'
import AllProduct from '../components/allProduct'
import FashionProduct from '../components/fashionProduct'
import FoodProduct from '../components/foodProduct'
import HomeApplianceProduct from '../components/homeApplianceProduct'
import OtherProduct from '../components/otherProduct'
import ElectronicProduct from '../components/electronicProduct'

export default {
  name: 'Home',
  data () {
    return {
      category: 'all'
    }
  },
  components: {
    Carousel3d,
    Slide,
    Navbar,
    AllProduct,
    FashionProduct,
    FoodProduct,
    HomeApplianceProduct,
    OtherProduct,
    ElectronicProduct
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    fetchProductByCategory (payload) {
      this.category = payload
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.products
    },
    filteredCategoryFashion () {
      return this.allProducts.filter(Product => Product.category === 'fashion')
    },
    filteredCategoryElectronic () {
      return this.allProducts.filter(Product => Product.category === 'elektronik')
    },
    filteredCategoryFood () {
      return this.allProducts.filter(Product => Product.category === 'makanan')
    },
    filteredCategoryHomeAppliance () {
      return this.allProducts.filter(Product => Product.category === 'rumah tangga')
    },
    filteredCategoryOther () {
      return this.allProducts.filter(Product => Product.category === 'other')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>
  #HeadHomeBox1 {
    height: 500px;
    widows: 500px;
    margin-top: 90px;
    margin-left: 13%;
    position: relative;
  }
  #categoryBoxBoard {
    height: 500px;
    width: 1100px;
    background-color: transparent;
    margin-top: -10%;
    display: flex;
    position: relative;
  }
  .categoryBox {
    width: 200px;
    height: 150px;
    background-color: #F7FFF7;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 2px 5px 7px 2px rgba(0, 0, 0, 0.555);
    position: relative;
  }
  .categoryBox:hover {
    transition: 0.5s;
    box-shadow: transparent;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2)
  }
  .categoryBox img {
    margin-top: 15px;
    width: 120px;
    height: 120px;
    opacity: 0.3;
    position: relative;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 35px;
  }
</style>
