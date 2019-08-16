<template>
  <div class="search col-12">
    <form @submit.prevent="search">
      <input type="text" name="search" placeholder="Search Drink Names" v-model="query">
      <button type='submit'>Search</button>
    </form>
    <!-- <SearchResults v-for="results in searchResults"></SearchResults> -->


  </div>
</template>


<script>
  // import SearchResults from "./SearchResultsComponent.vue"
  export default {
    name: 'search',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      // searchResults(){
      //   return this.$store.state.queryDrinks
      // }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.query)
      }
    },
    components: {
      // SearchResults
    }
  }
</script>


<style scoped>

</style>