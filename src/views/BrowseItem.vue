<template>
  <div class="browse-item">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <choose-category/>
        </div>
        <div class="col-9">
          <item-result/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseCategory from '../components/browsing/ChooseCategory.vue'
import ItemResult from '../components/browsing/ItemResult.vue'

export default {
  name: 'BrowseItem',
  components: {
    ChooseCategory,
    ItemResult
  }
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  margin-left: 70px;
}
</style>
