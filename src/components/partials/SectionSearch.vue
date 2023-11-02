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
      characterFind: '',

      filteredArray: [],
      temporaneyArray: []
    }
  },

  methods: {

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
    },

    findText(){

      console.log(this.characterFind);
      this.filteredArray.forEach(element => {
        if(element.brand.includes(this.characterFind)){
          console.log(this.characterFind);
          this.temporaneyArray.push(element)
        }

        this.filteredArray = this.temporaneyArray,

        this.temporaneyArray = [],
        this.characterFind = ''
      })
    }

    
  },

  mounted() {

    this.filterSearch()

  },
}

</script>

<template>
  <section>
    <div class="container">
      <div class="search-bar d-flex justify-content-around my-4">
        <input @keyup.enter="findText" v-model.trim="this.characterFind" type="text" placeholder="Keywords">
        <input type="text" placeholder="Location">
        <select  v-model="this.categoryValue" class="form-select" aria-label="Default select example">
          <option selected value="">All Categories</option>
          <option v-for="cat, index in store.allCategory" :key="'cat_'+ index" :value="cat">{{ cat }}</option>
        </select>
        <select  v-model="this.brandValue" class="form-select" aria-label="Default select example">
          <option selected value="">Brand</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Seat">Seat</option>
          <option value="Volkswagen">Volkswagen</option>
        </select>
        <select  v-model="this.fuelTypeValue" class="form-select" aria-label="Default select example">
          <option selected value="">Fuel Type</option>
          <option value="Diesel">Diesel</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Electric">Electric</option>
        </select>
        <select  v-model="this.transmissionValue" class="form-select" aria-label="Default select example">
          <option selected value="">Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        <select  v-model="this.statusValue" class="form-select" aria-label="Default select example">
          <option selected value="">Status</option>
          <option value="New">New</option>
          <option value="Km-0">Km-0</option>
          <option value="Used">Used</option>
        </select>
        <button @click="this.filterSearch">Search</button>
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

      <div class="d-flex justify-content-center">
        <button class="btn-cust m-auto">Shaw all car <i class="fa-solid fa-arrow-right"></i></button>

      </div>




      <div class="know-us">
        <div class="row">

          <div class="col-7 position-relative">
            <div class="circle-tag tag-top position-absolute d-flex justify-content-center align-items-center">
              <div class="txt-tag w-75 h-75 d-flex flex-column">
                <span class="text-center">2 4</span>
                <p class="text-center">Years of Experience</p>
              </div>
            </div>
            <img class="w-100" src="\aoutcar-about-1.png" alt="">

            <div class="circle-tag tag-bottom position-absolute d-flex justify-content-center align-items-center">
              <div class="txt-tag w-75 h-75 d-flex flex-column">
                <span class="text-center">2 4 0</span>
                <p class="text-center">Special Expert Team</p>
              </div>
            </div>

          </div>

          <div class="col-5">
            <h2>Want to buy or sell a vehicle?</h2>
            <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dolores nostrum sequi placeat tenetur magnam iure enim, assumenda ipsum! Quod vero, alias sunt possimus consectetur, laudantium asperiores dolores odit illum id, assumenda distinctio fugiat? Minima, corrupti beataee.</p>
            <img class="mb-4" src="\divider.jpg" alt="">

            <div class="d-flex">
              <div class="image">
                <img class="w-100" src="\new-vehicle.jpg" alt="">
              </div>
              <div class="description">
                <h5>Model Vehicles</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi laudantium ab voluptates soluta unde.</p>
              </div>
            </div>

            <div class="d-flex mt-3 mb-2">
              <div class="image">
                <img class="w-100" src="\2h-vehicle.jpg" alt="">
              </div>
              <div class="description">
                <h5>2nd Hand Vehicles</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi laudantium ab voluptates soluta unde.</p>
              </div>
            </div>

            <button class="btn-cust">Get to know us <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        
      </div>

    </div>

  </section>
  
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
  margin-bottom: 150px;

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

  .know-us {
    margin-top: 100px;
    padding: 0 100px;
    font-size: 0.9rem;

    h2 {
      font-weight: bold;
    }

    .circle-tag {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background-color: $first-color;
      color: $third-color;

      .txt-tag{
        font-size: 40px;
        font-weight: bold;

        p {
          font-size: 1.1rem
        }
      }
    }

    .tag-top {
      left: 50px;
      top: 45px;
    }

    .tag-bottom {
      right: 30px;
      bottom: 35px;
    }

    img {
      background-image: url(../../../public/circle-auto-car-1.png);
    }

    .image{
      width: 80px;
      padding-top: 10px;
      margin-right: 10px;
    }

    .description{
      font-size: 0.8rem;

      h5 {
        font-weight: bold;
      }
    }
  }
}

</style>