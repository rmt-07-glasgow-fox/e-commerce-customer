<template>
  <div class="w3-main" style="margin-left:340px;margin-right:40px">
  <Header
    :title='title'
    :subtitle='subtitle'/>
  <Item/>
  <Footer/>
  </div>

</template>

<script>
import Header from '@/components/PageContent/Header.vue'
import Footer from '@/components/PageContent/Footer.vue'
import Item from '@/components/Transaction/Item.vue'

export default {
  name: 'TransactionPage',
  data () {
    return {
      title: 'Transaction History',
      subtitle: '-----------------------'
    }
  },
  components: {
    Header,
    Footer,
    Item
  },
  methods: {
    getuserData () {
      this.$store.dispatch('getUserData')
    }
  },
  created () {
    this.getuserData()
  }
}
</script>

<style>

</style>
