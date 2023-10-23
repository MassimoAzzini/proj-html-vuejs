<script>
export default {
  name: 'SectionSearch'

}
</script>

<template>
  <section>
    <div class="container">
      <div class="search-bar d-flex justify-content-around my-5">
        <input type="text" placeholder="Location">
        <input type="text" placeholder="Location">
        <input type="text" placeholder="Location">
        <input type="text" placeholder="Location">
        <input type="text" placeholder="Location">
        <input type="text" placeholder="Location">
        <input type="text" placeholder="Location">
        <button>Search</button>
      </div>
    </div>

  </section>
  
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {

  .search-bar {
    * {
      width: calc(100% / 9);
      height: 40px;
    }

    button {
      background-color: $first-color;
      
    }
  }
}

</style>