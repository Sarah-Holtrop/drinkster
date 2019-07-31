<template>
  <div class="home">
    <Search></Search>

  </div>
</template>


<script>
  import Search from '../components/SearchComponent.vue'
  import SearchResults from '../components/SearchResultsComponent.vue'
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
      Search
    }
  }
</script>


<style scoped>

</style>