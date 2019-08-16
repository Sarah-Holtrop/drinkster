<template>
  <div class="modal">
    <div id="editCreatedDrink" class="modal fade" role="dialog">
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
              <label for="ingredients">Drink ingredients (use ';' to seperate ingredients):</label>
              <input type="text" name="ingredients" placeholder="ingredients" v-model="drink.ingredients"><br>
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
</template>


<script>
  export default {
    name: 'modal',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>