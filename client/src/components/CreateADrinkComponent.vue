<template>
  <div class="createdDrink">
    <form @submit.prevent="addCreatedDrink">
      <label for="image">Pesonal Recipe:</label>
      <input type="text" name="image" placeholder="Image url" v-model="newCreatedDrink.img"><br>
      <label for="title">Drink Name:</label>
      <input type="text" name="title" placeholder="Drink Name" v-model="newCreatedDrink.title"><br>
      <label for="description">Drink description:</label>
      <input type="text" name='description' placeholder="decription" v-model="newCreatedDrink.description"><br>
      <label for="ingredients">Drink ingredients:</label>
      <input type="text" name="ingredients" placeholder="ingredients/amount" v-model="newCreatedDrink.ingredients"><br>
      <label for="instructions">Instructions:</label>
      <textarea name="instructions" id="instructions" cols="50" rows="10"
        v-model="newCreatedDrink.instructions"></textarea>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    <div class="row">
      <div v-for="drink in createdDrink" class="col-4 border border-dark">
        <img :src="drink.img">
        <h3>{{drink.title}}</h3>
        <h5>{{drink.description}}</h5>
        <h4>{{drink.ingredients}}</h4>
        <h5>{{drink.instructions}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'createdDrink',
    // props:[]?
    data() {
      return {
        newCreatedDrink: {
          title: "",
          ingredients: [""],
          instructions: "",
          description: "",
          img: "",
          userId: this.$store.state.user._id
        },
        selected: ''
      }
    },
    mounted() {
      // debugger
      this.$store.dispatch('getCreatedDrinksByUserId', this.newCreatedDrink.userId)
    },
    computed: {
      createdDrink() {
        return this.$store.state.createdDrinks
      }
    },
    methods: {
      addCreatedDrink(newCreatedDrink) {
        this.$store.dispatch('addCreatedDrink', this.newCreatedDrink)
      },

    },
    components: {}
  }
</script>


<style scoped>

</style>