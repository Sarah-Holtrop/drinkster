<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
  export default {
    name: "App"
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;

  }

  .home {
    background-image: url('https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2017/05/59240064682c4_5924001331ee1_801124285.jpg');
    height: 100vh;
    width: 100vw;
  }

  .UserProfile {
    background-image: url('https://thinknowresearch.com/wp-content/uploads/2019/04/Premium-Alcohol.jpg');
    height: cover;
    width: 100vw;
    background-size: cover;
    color: white;
  }
</style>