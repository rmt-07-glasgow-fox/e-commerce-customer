<template>
  <div>
    <a href="/" @click.prevent="">{{ target.tag }}</a>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['target']
}
</script>

<style>

</style>
