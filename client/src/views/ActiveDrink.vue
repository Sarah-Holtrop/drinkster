<template>
  <div class="ActiveDrink container-fluid">
    <div v-for="drink in activeDrink">
      <router-link to='/'>Home</router-link>
      <p>{{drink.strDrink}}</p>
      <img :src="drink.strDrinkThumb" alt="cocktail img">
      <div class="row pt-3 mt-3 border border-dark rounded">
        <div class="col-6 justify-content-end d-flex">
          <ul>
            <p><b>{{drink.strIngredient1}}</b> {{drink.strMeasure1}}</p>
            <p><b>{{drink.strIngredient3}}</b> {{drink.strMeasure3}}</p>
            <p><b>{{drink.strIngredient5}}</b> {{drink.strMeasure5}}</p>
            <p><b>{{drink.strIngredient7}}</b> {{drink.strMeasure7}}</p>
            <p><b>{{drink.strIngredient9}}</b> {{drink.strMeasure9}}</p>
            <p><b>{{drink.strIngredient11}}</b> {{drink.strMeasure11}}</p>
            <p><b>{{drink.strIngredient13}}</b> {{drink.strMeasure13}}</p>
            <p><b>{{drink.strIngredient15}}</b> {{drink.strMeasure15}}</p>
          </ul>
        </div>
        <div class="col-6 justify-content-start d-flex">
          <ul>
            <p><b>{{drink.strIngredient2}}</b> {{drink.strMeasure2}}</p>
            <p><b>{{drink.strIngredient4}}</b> {{drink.strMeasure4}}</p>
            <p><b>{{drink.strIngredient6}}</b> {{drink.strMeasure6}}</p>
            <p><b>{{drink.strIngredient8}}</b> {{drink.strMeasure8}}</p>
            <p><b>{{drink.strIngredient10}}</b> {{drink.strMeasure10}}</p>
            <p><b>{{drink.strIngredient12}}</b> {{drink.strMeasure12}}</p>
            <p><b>{{drink.strIngredient14}}</b> {{drink.strMeasure14}}</p>
          </ul>
        </div>
      </div>
      <p><b>Type of Glass:</b> {{drink.strGlass}}</p>
      <div class="row justify-content-center">
        <h4 class="px-3"><b>Instructions</b></h4>
      </div>
      <div class="row justify-content-center">
        <p>{{drink.strInstructions}}</p>
      </div>
    </div>


  </div>
</template>

<!-- TODO figure out where the active car is stored and where we call it to get set into ActiveDrink in store so we can pull it into the ActiveDrink.vue -->
<script>
  export default {
    name: 'ActiveDrink',
    data() {
      return {

      }
    },
    mounted() {
      let data = {
        drinkId: this.$route.params.drinkId
      }
      this.$store.dispatch('getDrinkById', data)
    },
    computed: {
      activeDrink() {
        return this.$store.state.activeDrink
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>
  img {
    height: 400px;
    width: 400px;
  }
</style>