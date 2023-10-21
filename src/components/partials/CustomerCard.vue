<script>

export default {
  name: 'CustomerCard',


  props: {
    customer: Object,
  }

}
</script>


<template>
  <div class="col-3">
    <div class="card px-4 py-5 d-flex flex-column align-items-center">
      <span class="position-absolute"><i class="fa-solid fa-quote-right"></i></span>
      <p class="text-center">{{ customer.text }}</p>
      <img class="mt-3 mb-5" :src="`/src/assets/testimonial/` + customer.photo" alt="">
      <span>{{ customer.name }}</span>
    </div>
  </div>

  
</template>



<style lang="scss" scoped>

@use '../../scss/partials/vars' as *;

.card {

  span.position-absolute {
    font-size: 85px;
    color: $first-color;
    opacity: 0.1;
    transform: rotate(10deg);
  }

  img{
    width: 100px;

  }
}


</style>