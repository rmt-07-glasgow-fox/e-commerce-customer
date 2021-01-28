<template>
  <div class="d-flex justify-content-center">
    <div class="col-7">
      <div class="row bg-light">
        <div class="col-6 left">
          <div>
            <i class="fab fa-battle-net"></i>
            <div class="brand">R-COMMERCE</div>
          </div>
        </div>
        <div class="col-6 my-2">
          <div class="p-4">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .row{
    padding: 0 !important;
  }
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fab{
    font-size: 9em;
  }
  .brand{
    font-size: 2em;
    font-weight: 1000;
  }
</style>
