<script>
import CardResent from './CardResent.vue';
import { store } from '/src/data/store';

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
      <img src="/thumbs-up.png" alt="">
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

    img {
      width: 100px;
    }

  }
}


</style>