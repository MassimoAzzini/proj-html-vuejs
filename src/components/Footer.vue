<script>
import { store } from '../data/store';

export default {
  name: 'Footer',

  data() {
    return {
      store,
    }
  },

}
</script>


<template>
  <footer>
    <div class="container">
      <div class="row">

        <div class="col-3">
          <div class="logo">
            <img src="" alt="">
          </div>
          <div class="address">
            <span>
              <i class="fa-regular fa-phone-volume"></i>
            </span>
            <span>
              {{ store.autoCar.phone }}
            </span>
          </div>
        </div>

        <div class="col-5">

        </div>

        <div class="col-2">

        </div>

        <div class="col-2">

        </div>

      </div>


    </div>
  </footer>
  
</template>



<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

footer {
  color: $third-color;
  background-color: $background-color;
}

img {
  color: red !important;
}


</style>