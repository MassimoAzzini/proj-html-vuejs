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

    // countCategory(type){
    //   store.modelCars.forEach( => {
        
    //   });

    // }
  }


}
</script>


<template>
  <div class="col-2 d-flex flex-column align-items-center card-category">
    <img class="w-100" :src="getImage(category.replace(' ', '') +'.jpg')" alt="">
    <span class="category">{{category}}</span>
    <span class="match"> ?? Listings</span>
  </div>
</template>



<style lang="scss" scoped>

</style>