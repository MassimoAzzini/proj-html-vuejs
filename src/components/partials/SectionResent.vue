<script>
import CardResent from './CardResent.vue';
import { store } from '../../data/store';

export default {
  name: 'SectionResent',
  components: {
    CardResent,
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
    <div class="container d-flex flex-column align-items-center">
      <div class="bg-circle">
        <img class="w-100" src="/src/assets/thumbs-up.png" alt="">
      </div>
      <h1 class="my-3">Resent Articles</h1>
      <span class="mb-4">Useful information about car.</span>
      <div class="row">
        <CardResent
          v-for="car in store.resentArticles"
          :key="car.id"
          :car="car"
          />
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
  padding-top: 60px;
  padding-bottom: 110px;

  .container {

    .bg-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

  }
}


</style>