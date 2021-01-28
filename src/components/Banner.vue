<template>
  <div>
    <section class="sticky z-20 py-8 px-4">
      <carousel class="relative" :per-page="1" :autoplay="true" :autoplayTimeout="5000">
        <slide
        v-for="banner in banners"
        :key="banner.id"
        class="relative inset-0 h-auto flex justify-center">
          <img :src="banner.url" class="m-2 h-auto w-1/2 object-fit-cover">
        </slide>
      </carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['banners']
}
</script>

<style>

</style>
