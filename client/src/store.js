import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

let api = Axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

let searchurl = 'search.php?s='

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

// let api = Axios.create({
//   baseURL: base + "api/",
//   timeout: 3000,
//   withCredentials: true
// })

export default new Vuex.Store({
  state: {
    user: {},
    queryDrinks: {}
    // savedDrinks: {}
  },
  mutations: {
    setQueryDrinks(state, data) {
      state.queryDrinks = data
    },
    setUser(state, data) {
      state.user = data
    }

  },
  actions: {
    //#region -- Auth stuff --

    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "Home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "Home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion
    async search({ dispatch, commit }, query) {
      try {
        let res = await api.get(searchurl + query)
        console.log(res.data)
        commit("setQueryDrinks", res.data)
        // res.send(res.data)
      } catch (err) { console.error(err) }
    },
    // async getQueryDrinks({ dispatch, commit }) {
    //   try {
    //     // let res = 
    //   }
    // }
  }
})
