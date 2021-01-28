<template>
  <div>
    <navbar/>
    <div class="row" style="margin: 0">
      <div class="col col-md-12" style="padding: 0">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'MainPage',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
