<script>
export default {
  name: 'CardSlider',

  props: {
    slide: Object,
  }
}

</script>

<template>

  <div class="carousel-item active position-relative">
    <img :src="`/src/assets/slider/`+ slide.image" class="d-block w-100" alt="">
    <div class="text-img position-absolute z-1">
      <h1>{{ slide.title }}</h1>
      <p class="mb-4">{{ slide.text }}</p>
      <span class=" ms-5">Learn More <i class="fa-solid fa-arrow-right"></i></span>
    </div>
  </div>

</template>



<style lang="scss" scoped>

@use '/src/scss/partials/vars.scss' as *;


.text-img {
  width: 530px;
  color: $third-color;
  top: 50%;
  transform: translateY(-50%);
  left: 260px;
  font-weight: bold;

  h1 {
    font-size: 60px;
    font-weight: bold;
  }
}


</style>