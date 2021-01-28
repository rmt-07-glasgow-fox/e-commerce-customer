<template>
  <div>
    <Navbar/>
    <section class="py-20 bg-white">
    <div class="container max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight text-center">Our Special Brew</h2>
        <p class="mt-2 text-lg text-center text-gray-600">Check out our list of "special" coffee below.</p>
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          <ProductCard/>
        </div>
    </div>
</section>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductCard
  }
}
</script>
