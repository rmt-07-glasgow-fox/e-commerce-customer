<template>
  <div>
    <a href="/" @click.prevent="$emit('filterCategory', target.id)">{{ target.tag }}</a>
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
