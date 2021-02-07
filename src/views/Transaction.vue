<template>
  <div>
    <NavSide/>
    <TransactionPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavSide from '@/components/NavSide.vue'
import TransactionPage from '@/components/TransactionPage.vue'

export default {
  name: 'Transaction',
  components: {
    NavSide,
    TransactionPage
  }
}
</script>
