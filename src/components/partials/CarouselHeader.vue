<script>
import CardSlider from './CardSlider.vue';
import { store } from '../../data/store';


export default {
  name: 'CarouselHeader',

  data() {
    return {
      store
    }
  },

  components: {
    CardSlider,
  }

}
</script>

<template>

<div id="carouselExampleIndicators" class="carousel slide cst-carosel">
  <div class="carousel-inner">
    <CardSlider
      v-for="slide, index in store.slider"
      :key="slide.id"
      :slide="slide"
      :index="index" />
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
</template>



<style lang="scss" scoped>



.cst-carosel {
  padding-right: 10px;
}




</style>