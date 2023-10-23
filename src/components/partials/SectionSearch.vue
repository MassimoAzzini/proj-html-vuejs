<script>
export default {
  name: 'SectionSearch'

}
</script>

<template>
  <section>
    <div class="container">
      <div class="search-bar d-flex justify-content-around my-5">
        <input type="text" placeholder="Keywords">
        <input type="text" placeholder="Location">
        <select class="form-select" aria-label="Default select example">
          <option selected value="">All Categories</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select" aria-label="Default select example">
          <option selected>Brand</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select" aria-label="Default select example">
          <option selected>Fuel Type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select" aria-label="Default select example">
          <option selected>Transmission</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select" aria-label="Default select example">
          <option selected>Status</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button>Search</button>
      </div>


      <div class="row">
        <div class="col-2 d-flex flex-column align-items-center card-category">
          <img class="w-100" src="/src/assets/search/cabrio.jpg" alt="">
          <span class="category">Cabrio</span>
          <span class="match">3 Listings</span>
        </div>
      </div>
    </div>

  </section>
  
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {

  .search-bar {
    * {
      font-size: 0.9rem;
      text-align: center;
      color: $first-color;
      width: calc(100% / 9);
      height: 60px;
      border: 1px solid $first-color;

    }

    input {
      border-radius: 5px;
      border: 1px solid $first-color;
    }

    button {
      color: $third-color;
      background-color: $first-color;
      border-radius: 5px;
    }
  }

  .card-category {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    .category {
      font-size: 1.1rem;
    }

    .match {
      color: $second-color;
    }
  }
}

</style>