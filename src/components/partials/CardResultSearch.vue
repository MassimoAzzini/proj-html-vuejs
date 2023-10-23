<script>
export default {
  name: 'CardResultSearch',

  props: {
    carObj: Object,
  }

}
</script>


<template>

  <div class="col-3 p-3 col-cst mb-4">
    <div class="card-cast">
      <img class="w-100" :src="`/src/assets/show/`+ carObj.img" alt="">
      <div class="description">
        <div>
          <span>{{ carObj.brand }}</span>
          <span class="ms-2">{{ carObj.model }}</span>
        </div>
        <span>{{ carObj.category }}</span>
        <div class="d-flex justify-content-between mt-2">
          <span class="actributs">
            <i class="fa-solid fa-dollar-sign"></i> <span>{{ carObj.price }}</span>
            <i class="fa-solid fa-car"></i> <span>{{ carObj.brand }}</span>
            <i class="fa-solid fa-gas-pump"></i> <span>{{ carObj.fuel }}</span>
          </span>
          <span class="heart">
            <i class="fa-solid fa-heart"></i>
          </span>
        </div>

      </div>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>

@use '../../scss/partials/vars' as *;

  .col-cst {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

    .actributs {

      span {
        font-size: 0.9rem;
        margin-right: 10px;
      }

      .heart {
        i {
          color: grey;

        }
      }
    }
  }

</style>