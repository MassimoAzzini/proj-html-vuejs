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
          <option v-for="cat, index in store.allCategory" :key="'cat_'+ index" :value="cat">{{ cat }}</option>
        </select>
        <select v-model="store.brand" class="form-select" aria-label="Default select example">
          <option selected value="">Brand</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Seat">Seat</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>
        <select v-model="store.fuelType" class="form-select" aria-label="Default select example">
          <option selected value="">Fuel Type</option>
          <option value="Diesel">Diesel</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electric">Electric</option>
        </select>
        <select v-model="store.transmission" class="form-select" aria-label="Default select example">
          <option selected value="">Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        <select v-model="store.status" class="form-select" aria-label="Default select example">
          <option selected value="">Status</option>
          <option value="New">New</option>
          <option value="Km-0">Km-0</option>
          <option value="Used">Used</option>
        </select>
        <button>Search</button>
      </div>


      <div class="row mb-4">
        <CardSearch
          v-for="category, index in store.allCategory"
          :key="'category_'+ index"
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