<script>
import { store } from '../../data/store';
import CardSearch from './CardSearch.vue';
import CardResultSearch from './CardResultSearch.vue';

export default {
  name: 'SectionSearch',

  components: {
    CardSearch,
    CardResultSearch
  },

  data() {
    return {
      store
    }
  },
  

}
</script>

<template>
  <section>
    <div class="container">
      <div class="search-bar d-flex justify-content-around my-4">
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


      <div class="row mb-4">
        <CardSearch
          v-for="category, index in store.allCategory"
          :key="'cat_'+ index"
          :category="category" />
      </div>

      <div class="container-result-cards">
        <div class="row">
          <CardResultSearch v-for="carObj in store.modelCars" :key="carObj.id" :carObj="carObj" />
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
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
    .category {
      font-size: 1.1rem;
    }

    .match {
      color: $second-color;
    }
  }
}

</style>