<template>
  <div class="home">
    <Search class="mb-2"></Search>
    <SearchedDrinks></SearchedDrinks>
    <div v-for="s in search" :key="s.idDrink">
      <img :src="s.strDrinkThumb">
      <h3 @click>{{s.strDrink}}</h3>


    </div>
  </div>
</template>


<script>
  import Search from '../components/SearchComponent.vue'
  // import SearchResults from '../components/SearchResultsComponent.vue'
  import SearchedDrinks from '../components/SearchedDrinks.vue'
  export default {
    name: 'home',
    data() {
      return {}
    },
    computed: {
      search() {
        return this.$store.state.queryDrinks
      },
    },
    methods: {},
    components: {
      Search,
      SearchedDrinks
    }
  }
</script>


<style scoped>
  img {
    height: 350px;
    width: 350px;
  }
</style>