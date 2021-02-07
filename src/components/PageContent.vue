<template>
  <div class="w3-main" style="margin-left:340px;margin-right:40px">
    <Header
    :title='title'
    :subtitle='subtitle'/>
    <Banner />
    <Stocks />
    <Information/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/PageContent/Header.vue'
import Banner from '@/components/PageContent/Banner.vue'
import Stocks from '@/components/PageContent/Stocks.vue'
import Information from '@/components/PageContent/Information.vue'
import Footer from '@/components/PageContent/Footer.vue'

export default {
  name: 'PageContent',
  data () {
    return {
      title: 'Aircraft for Sale',
      subtitle: 'Showcase'
    }
  },
  components: {
    Header,
    Banner,
    Stocks,
    Information,
    Footer
  }
}
</script>

<style>

</style>
