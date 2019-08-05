<template>
  <div class="home">

    <button class="btn" @click="UserProfile">Profile</button>
    <button class="btn btn-danger" @click="logout">Logout</button>
    <Search class="m-2"></Search>
    <SearchedDrinks></SearchedDrinks>
    <div v-for="s in search" :key="s.idDrink">
      <h3 @click="viewDrink(s)">{{s.strDrink}}</h3>
      <img :src="s.strDrinkThumb">
      <button class="btn btn-success" @click='addFavorite(s)'>Save to Favorites</button>


    </div>
  </div>
</template>


<script>
  import Search from '../components/SearchComponent.vue'
  // import SearchResults from '../components/SearchResultsComponent.vue'
  import SearchedDrinks from '../components/SearchedDrinks.vue'
  import router from '../router'

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
    methods: {
      UserProfile() {
        router.push({ name: 'UserProfile' })
      },
      viewDrink(s) {
        this.$router.push({ name: "ActiveDrink", params: { drinkId: s.idDrink } })

      },
      addFavorite(drink) {
        // debugger
        let newDrink = {
          name: drink.strDrink,
          drinkId: drink.idDrink,
          image: drink.strDrinkThumb,
          userId: this.$store.state.user._id

        }
        this.$store.dispatch('addFavorite', newDrink)
      },
      logout() {
        this.$store.dispatch('logout')
      }
    },
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