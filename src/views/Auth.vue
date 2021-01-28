<template>
  <div class="center">
    <router-view/>
  </div>
</template>

<style scoped lang="stylus">
  .hasOpenLoading
    .box-loading
      opacity 0
      transform scale(.7)
  .box-loading
    width 120px
    height 120px
    position relative
    margin 5px
    border-radius 20px
    box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
    overflow hidden
    cursor pointer
    transition all .25s ease
    &:hover
      transform translate(0,-5px)
      box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
    >>>.vs-loading
      padding 0px
</style>
