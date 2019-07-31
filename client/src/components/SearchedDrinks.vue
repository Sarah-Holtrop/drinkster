<template>
  <div class="activeDrink">


  </div>
</template>


<script>
  export default {
    name: 'activeDrink',
    data() {
      return {}
    },
    computed: {
      activeDrink() {
        return this.$store.state.queryDrinks
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>