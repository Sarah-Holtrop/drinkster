<template>
  <div class="home ">
    <div class="container-fluid">
      <div class="row">
        <button class="btn btn-primary offset-sm-5 col-sm-1" @click="UserProfile">Profile</button>
        <button class="btn btn-danger col-sm-1" @click="logout">Logout</button>
      </div>

      <Search class="m-2 row justify-content-center"></Search>
      <SearchedDrinks></SearchedDrinks>

      <randomDrink></randomDrink>



      <div class="row justify-content-center">
        <div v-for="s in search" :key="s.idDrink" class="col-sm-3 m-1 p-1 border rounded border-dark">
          <h5 @click="viewDrink(s)">{{s.strDrink}}</h5>
          <img class="border border-dark rounded" :src="s.strDrinkThumb"><br>
          <button class="btn btn-success mt-2" @click='addFavorite(s)'><i class="fas fa-heart fave-heart"></i></button>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
  import Search from '../components/SearchComponent.vue'
  // import SearchResults from '../components/SearchResultsComponent.vue'
  import SearchedDrinks from '../components/SearchedDrinks.vue'
  import router from '../router'
  import randomDrink from '../components/RandomDrinkComponent.vue'

  export default {
    name: 'home',
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getRandomDrink')
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
      SearchedDrinks,
      randomDrink
    }
  }
</script>


<style scoped>
  img {
    height: 150px;
    width: 150px;
  }

  .fave-heart:hover {
    color: red;
  }
</style>