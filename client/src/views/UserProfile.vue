<template>
  <div class="UserProfile">
    <router-link to='/'>Home</router-link>

    <h1>Good morning UserProfile</h1>
    <p>Welcome to Drinkster {{user.name}}!!</p>

  </div>
</template>


<script>
  import router from '../router'

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
    components: {}
  }
</script>


<style scoped>

</style>