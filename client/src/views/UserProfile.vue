<template>
  <div class="UserProfile">
    <router-link to='/'>Home</router-link>

    <h1>Good morning UserProfile</h1>
    <p>Welcome to Drinkster {{user.name}}!!</p>
    <h3>Favorites: </h3>
    <Favorites></Favorites>
    <h3>Created: </h3>
    <Created></Created>

  </div>
</template>


<script>
  import router from '../router'
  import Favorites from '../components/FavoriteDrinksComponent.vue'
  import Created from '../components/CreatedDrinksComponent.vue'

  export default {
    name: 'UserProfile',
    data() {
      return {}
    },
    computed: {
      user() {
        return this.$store.state.user
      }

    },
    methods: {

    },
    components: {
      Favorites,
      Created
    }
  }
</script>


<style scoped>

</style>