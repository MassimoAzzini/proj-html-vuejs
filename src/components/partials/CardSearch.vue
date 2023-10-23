<script>
export default {
  name: 'CardSearch',

  props: {
    category: String
  },

}
</script>


<template>
  <div class="col-2 d-flex flex-column align-items-center card-category">
    <img class="w-100" :src="'/src/assets/search/'+ category.replace(' ', '') +'.jpg'" alt="">
    <span class="category">{{category}}</span>
    <span class="match">3 Listings</span>
  </div>
</template>



<style lang="scss" scoped>

</style>