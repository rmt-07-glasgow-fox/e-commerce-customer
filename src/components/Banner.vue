<template>
  <div>
    <img style="width: 100vw; height: 350px;" :src="banner.image_url">
  </div>
</template>

<script>

export default {
  name: 'Banner',
  props: ['banner'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
