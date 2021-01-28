<template>
  <div class="banner">
    <img :src="banners[count].imgUrl"/>
    <div id="btn-control">
      <button
       @click.prevent="prev">prev</button>
      <button
       @click.prevent="next">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banners',
  data () {
    return {
      count: 1
    }
  },
  methods: {
    setupBanner () {
      this.$store.dispatch('fetchBanners')
    },
    next () {
      if (this.count !== this.banners.length) this.count += 1
    },
    prev () {
      if (this.count !== 1) this.count -= 1
    }
  },
  created () {
    this.setupBanner()
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style scoped>
#btn-control {
  text-align: center;
}

button {
  border-radius: 5px;
  padding: 0px;
  width: 50px;
  font-size: 14px;
}

.banner {
  margin: 0px;
  padding: 0px;
}

img {
  width: 280px;
  height: 530px;
}
</style>
