<script>
import SectionSearch from './partials/SectionSearch.vue';
import SectionTeam from './partials/SectionTeam.vue';
import SectionResent from './partials/SectionResent.vue';

export default {
  name: 'Main',
  components: {
    SectionSearch,
    SectionTeam,
    SectionResent
    
  }

}
</script>


<template>  
  <SectionSearch />
  <SectionTeam />
  <SectionResent />
</template>



<style lang="scss" scoped>

</style>