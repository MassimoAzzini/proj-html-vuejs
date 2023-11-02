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
      store,
      categoryValue: '',
      brandValue: '',
      fuelTypeValue: '',
      transmissionValue: '',
      statusValue: '',

      filteredArray: store.modelCars,
      temporaneyArray: []
    }
  },

  methods: {
    // filterSearchCategory(){
    //   this.filteredArray = []

    //   store.modelCars.forEach(element => {
    //     if (this.categoryValue == element.category){
    //       this.filteredArray.push(element)
    //     }else if(this.categoryValue == ''){
    //       this.filteredArray = store.modelCars
    //     }
    //   })
    // },

    // filterSearchBrand(){
    //   this.filteredArray = []

    //   store.modelCars.forEach(element => {
    //     if (this.brandValue == element.brand){
    //       this.filteredArray.push(element)
    //     }else if(this.brandValue == ''){
    //       this.filteredArray = store.modelCars
    //     }
    //   })
    // },

    // filterSearchFuel(){
    //   this.filteredArray = []

    //   store.modelCars.forEach(element => {
    //     if (this.fuelTypeValue == element.fuel){
    //       this.filteredArray.push(element)
    //     }else if(this.fuelTypeValue == ''){
    //       this.filteredArray = store.modelCars
    //     }
    //   })
    // },

    // filterSearchTransmission(){
    //   this.filteredArray = []

    //   store.modelCars.forEach(element => {
    //     if (this.transmissionValue == element.transmission){
    //       this.filteredArray.push(element)
    //     }else if(this.transmissionValue == ''){
    //       this.filteredArray = store.modelCars
    //     }
    //   })
    // },

    // filterSearchStatus(){
    //   this.filteredArray = []

    //   store.modelCars.forEach(element => {
    //     if (this.statusValue == element.status){
    //       this.filteredArray.push(element)
    //     }else if(this.statusValue == ''){
    //       this.filteredArray = store.modelCars
    //     }
    //   })
    // },

    filterSearch(){
      this.filteredArray = []

      store.modelCars.forEach(element => {
        if (this.categoryValue == element.category){
          this.filteredArray.push(element)
        }else if(this.categoryValue == ''){
          this.filteredArray = store.modelCars
        }
      }),


      
      this.filteredArray.forEach(element => {
        if (this.brandValue == element.brand){
          this.temporaneyArray.push(element)
        }else if(this.brandValue == ''){
          this.temporaneyArray = this.filteredArray
        }
      }),
      this.filteredArray = this.temporaneyArray,

      this.temporaneyArray = []

      
      
      this.filteredArray.forEach(element => {
        if (this.fuelTypeValue == element.fuel){
          this.temporaneyArray.push(element)
        }else if(this.fuelTypeValue == ''){
          this.temporaneyArray = this.filteredArray
        }
      }),
      this.filteredArray = this.temporaneyArray,

      this.temporaneyArray = []


      this.filteredArray.forEach(element => {
        if (this.transmissionValue == element.transmission){
          this.temporaneyArray.push(element)
        }else if(this.transmissionValue == ''){
          this.temporaneyArray = this.filteredArray
        }
      }),

      this.filteredArray = this.temporaneyArray,

      this.temporaneyArray = []
      

      this.filteredArray.forEach(element => {
        if (this.statusValue == element.status){
          this.temporaneyArray.push(element)
        }else if(this.statusValue == ''){
          this.temporaneyArray = this.filteredArray
        }
      })

      this.filteredArray = this.temporaneyArray,

      this.temporaneyArray = []
    }
    
  },

  mounted() {

    this.filterSearch()


    console.log(this.filteredArray);
  },
  

}
</script>

<template>
  <section>
    <div class="container">
      <div class="search-bar d-flex justify-content-around my-4">
        <input type="text" placeholder="Keywords">
        <input type="text" placeholder="Location">
        <select @change="this.filterSearch" v-model="this.categoryValue" class="form-select" aria-label="Default select example">
          <option selected value="">All Categories</option>
          <option v-for="cat, index in store.allCategory" :key="'cat_'+ index" :value="cat">{{ cat }}</option>
        </select>
        <select @change="this.filterSearch" v-model="this.brandValue" class="form-select" aria-label="Default select example">
          <option selected value="">Brand</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Seat">Seat</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>
        <select @change="this.filterSearch" v-model="this.fuelTypeValue" class="form-select" aria-label="Default select example">
          <option selected value="">Fuel Type</option>
          <option value="Diesel">Diesel</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electric">Electric</option>
        </select>
        <select @change="this.filterSearch" v-model="this.transmissionValue" class="form-select" aria-label="Default select example">
          <option selected value="">Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        <select @change="this.filterSearch" v-model="this.statusValue" class="form-select" aria-label="Default select example">
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
          <CardResultSearch v-for="carObj in this.filteredArray" :key="carObj.id" :carObj="carObj" />
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