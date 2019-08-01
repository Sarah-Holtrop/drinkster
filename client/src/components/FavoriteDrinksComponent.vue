<template>
  <div class="favorites">
    <p>cheese</p>
    <h6>{{}}</h6>

  </div>
</template>


<script>
  export default {
    name: "favorites",
    data() {
      return {}
    },
    computed: {
      favorites() {
        return this.$store.state.favoriteDrinks
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>