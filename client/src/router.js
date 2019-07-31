import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import Login from './views/Login.vue'
//@ts-ignore
// import Recipes from './views/Recipes.vue'
import User from './views/User.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/'
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
