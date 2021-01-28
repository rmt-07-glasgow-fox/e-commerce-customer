<template>
  <div id="sidebar">
    <nav class="sidebar">

      <div class="filter">
        <label class="labelName">Genre :</label><br>
        <select class="form-select" aria-label="Default select example">
          <option selected>All</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Punk">Punk</option>
        </select>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
#sidebar {
  background-color: rgba(255, 255, 255, 0.678);
  width: 15%;
  height: 88vh;
  box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: fixed;
}

.filter {
  text-align: left;
  padding: 20px;
}

.filter .labelName{
  font-size: 19px;
}
/* .sidebar {
  margin-right: 50px;
  margin-left: 50px;
} */
</style>
