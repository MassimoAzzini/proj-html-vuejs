<script>

export default {
  name: 'CardResent',


  props: {
    car: Object,
  }

}
</script>


<template>

  <div class="col-3 px-4">
    <div class="card p-4 text-center">
      <div class="image">
        <img class="w-100" :src="`/src/assets/resent/` + car.image" alt="">
      </div>
      <span>{{ car.data }} - Auto Car</span>
      <div class="description">
        <h5 class="my-3">{{ car.title }}</h5>
        <div class="container-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius debitis sapiente consectetur minus fuga odio quia maxime eaque porro?</p>
        </div>
        <button>More</button>

      </div>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>

@use '../../scss/partials/vars' as *;
  .card {
    font-size: 0.8rem;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    border: none;
    
    h5 {
      font-weight: bold;
    }

    .container-description {
      margin-bottom: 30px;

      
      p {
        overflow: hidden;
        text-align: start;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: " [...] ";
        
      }
    }


    button {
      color: $third-color;
      background-color: $first-color;
      border: none;
      padding: 15px 40px;
    }


  }


</style>