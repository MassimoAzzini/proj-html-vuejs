<script>
import { store } from '../../data/store.js'

export default {
  name: 'CardSearch',

  data() {
    return {
      store
      
    }
  },

  props: {
    category: String
  },
  
  methods: {
    getImage(image){
      return new URL(`../../assets/search/`+ image, import.meta.url).href;
    },
    
    countCategory(type){
      let counter = 0
      
      for(let i = 0; i < store.modelCars.length; i++){
        
        if (store.modelCars[i].category == type){
          counter ++
        }
      }

      return counter
    },
        
  }

}
  



</script>


<template>
  <div class="col-2 d-flex flex-column align-items-center card-category">
    <img class="w-100" :src="getImage(category.replace(' ', '') +'.jpg')" alt="">
    <span class="category">{{category}}</span>
    <span class="match"> {{this.countCategory(category)}} Listings</span>
  </div>
</template>



<style lang="scss" scoped>

</style>