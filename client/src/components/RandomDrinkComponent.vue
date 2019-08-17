<template>
  <div class="randomDrink">
    <div class="row justify-content-center">
      <div class="col-4 justify-content-center" v-for="r in randomDrink">
        <h3>{{r.strDrink}}</h3>
        <img @click="viewDrink(r)" class="border border-dark rounded" :src="r.strDrinkThumb"
          style="height: 150px;width: 150px">
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'randomDrink',
    data() {
      return {}
    },
    // mounted: {

    // },
    computed: {
      randomDrink() {
        return this.$store.state.randomDrink
      }
    },
    methods: {
      viewDrink(r) {
        this.$router.push({ name: "ActiveDrink", params: { drinkId: r.idDrink } })
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>