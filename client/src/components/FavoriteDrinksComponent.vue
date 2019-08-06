<!-- favorited drinks are going to come from our mongoDB 
name
drinkID
drinkImage\
onclick gets the drink

-->

<template>
  <div class="favorites">
    <p>cheese</p>
    <!-- <h6>{{}}</h6> -->

  </div>
</template>


<script>
  export default {
    name: "favorites",
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getFavoritesByUserId', this.newFavorite.userId)
    },
    computed: {
      favorites() {
        return this.$store.state.favoriteDrinks
      }
    },
    methods: {
      addFavoriteDrink(newFavoriteDrink) {
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>