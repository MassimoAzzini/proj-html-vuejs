<script>
import SectionSearch from './partials/SectionSearch.vue';
import SectionCustomer from './partials/SectionCustomer.vue';
import SectionResent from './partials/SectionResent.vue';

export default {
  name: 'Main',
  components: {
    SectionSearch,
    SectionCustomer,
    SectionResent
    
  }

}
</script>


<template>  
  <SectionSearch />
  <SectionCustomer />
  <SectionResent />
</template>



<style lang="scss" scoped>

</style>