<template>
  <div class="createdDrink">
    <form @submit.prevent="addCreatedDrink">
      <label for="image">Pesonal Recipe:</label>
      <input type="text" name="image" placeholder="Image url" v-model="newCreatedDrink.img"><br>
      <label for="title">Drink Name:</label>
      <input type="text" name="title" placeholder="Drink Name" v-model="newCreatedDrink.title"><br>
      <label for="description">Drink description:</label>
      <input type="text" name='description' placeholder="decription" v-model="newCreatedDrink.description"><br>
      <label for="ingredients">Drink ingredients (use ';' to seperate ingredients):</label>
      <input type="text" name="ingredients" placeholder="ingredients" v-model="newCreatedDrink.ingredients"><br>
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
        <div>
          <ul v-for="ingredient in drink.ingredients">
            <li>{{ingredient.name}}</li>
          </ul>
        </div>
        <h5>{{drink.instructions}}</h5>
        <button @click="deleteDrinkById(drink._id)" class="btn btn-outline-danger">DELETE</button>
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal"
          :data-target="'#editCreatedDrink'+drink._id">Edit</button>
        <!-- <modal :key="drink._id" :drinkData="drink"></modal> -->
        <div :id="'editCreatedDrink'+drink._id" class="modal fade" role="dialog">
          <div class="modal-dialog">


            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Edit this drink:</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <form @submit="editCreatedDrink(drink)">
                  <label for="image">Pesonal Recipe:</label>
                  <input type="text" name="image" placeholder="Image url" v-model="drink.img"><br>
                  <label for="title">Drink Name:</label>
                  <input type="text" name="title" placeholder="Drink Name" v-model="drink.title"><br>
                  <label for="description">Drink description:</label>
                  <input type="text" name='description' placeholder="decription" v-model="drink.description"><br>
                  <div v-for="(ingredient, index) in drink.ingredients">
                    <label for="ingredients">Ingredient {{index + 1}} </label>
                    <input type="text" name="ingredients" v-model="ingredient.name"><br>
                  </div>
                  <label for="instructions">Instructions:</label>
                  <textarea name="instructions" id="instructions" cols="50" rows="10"
                    v-model="drink.instructions"></textarea>
                  <button class="btn btn-primary" type="submit">Submit</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import EditDrinkComponent from '@/components/EditDrinkComponent.vue'
  export default {
    name: 'createdDrink',
    props: [],
    data() {
      return {
        newCreatedDrink: {
          title: "",
          ingredients: "",
          instructions: "",
          description: "",
          img: ""
        },
        selected: ''
      }
    },
    mounted() {
      // debugger
      this.$store.dispatch('getCreatedDrinksByUserId', this.$store.state.user._id)
    },
    computed: {
      createdDrink() {
        return this.$store.state.createdDrinks
      }
    },
    methods: {
      addCreatedDrink(e) {
        let data = {
          title: this.newCreatedDrink.title,
          ingredients: this.newCreatedDrink.ingredients.split(';').map(i => {
            return { name: i };
          }),
          instructions: this.newCreatedDrink.instructions,
          description: this.newCreatedDrink.description,
          img: this.newCreatedDrink.img
        }
        this.$store.dispatch('addCreatedDrink', data)
        this.newCreatedDrink = {
          title: "",
          ingredients: "",
          instructions: "",
          description: "",
          img: ""
        }
      },
      deleteDrinkById(id) {

        this.$store.dispatch("deleteDrinkById", id)
      },
      //NOTE id or newcreateddrink
      editCreatedDrink(drink) {
        this.$store.dispatch("editCreatedDrink", drink)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>