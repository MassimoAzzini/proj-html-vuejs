<script>
import CustomerCard from './CustomerCard.vue';
import { store } from '/src/data/store';

export default {
  name: 'SectionTeam',
  components: {
    CustomerCard,
  },
  data() {
    return {
      store,
    }
  },


}
</script>


<template>
  <section>
    <div class="container d-flex flex-column align-items-center">

      <img src="/src/assets/thumbs-up-stars.png" alt="">

      <h1 class="mt-4 mb-3">What Are Our Customers Saying?</h1>

      <span class="mb-5">Opinions from our happy customers.</span>

      <div class="row">

        <CustomerCard
          v-for="customer in store.CustomerAutoCar"
          :key="customer.name"
          :customer="customer" />
      </div>

      <div class="mt-5 d-flex">
        <div class="black stripe"> </div>
        <div class="gray stripe"> </div>
      </div>

    </div>

  </section>
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

section {
  background-image: url(../../assets/slider/comment-bg-autocar.jpg);
  color: $third-color;
  padding-top: 85px;
  padding-bottom: 100px;

  h1 {
    font-weight: bold;
  }


  img {
    width: 75px;
  }

  .stripe {
    height: 7px;
    border-radius: 3px;
  }

  .stripe.black {
    width: 115px;
    background-color: $first-color;
  }

  .stripe.gray {
    width: 60px;
    background-color: $second-color;
    margin-left: 10px;
  }

}



</style>