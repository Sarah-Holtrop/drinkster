<!-- favorited drinks are going to come from our mongoDB 
name
drinkID
drinkImage\
onclick gets the drink

-->

<template>
  <div class="favorites row">
    <div v-for="drink in favorites" class="col-4">
      <p @click="viewDrink(drink)">{{drink.name}}</p>
      <img :src="drink.image" alt="drink photo" style="height: 250px;width: 250px">
      <button @click="deleteOneFavoriteDrink(drink._id)" class="btn btn-outline-danger">DELETE</button>
    </div>
  </div>
</template>


<script>
  export default {
    name: "favorites",
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getFavoriteDrinksByUserId')
    },
    computed: {
      favorites() {
        return this.$store.state.favoriteDrinks
      }
    },
    methods: {
      addFavoriteDrink(newFavoriteDrink) {
      },
      deleteOneFavoriteDrink(id) {
        this.$store.dispatch("deleteOneFavoriteDrink", id)
      },
      viewDrink(drink) {
        // debugger
        this.$router.push({ name: "ActiveDrink", params: { drinkId: drink.drinkId } })

      },
    },
    components: {}
  }
</script>


<style scoped>

</style>