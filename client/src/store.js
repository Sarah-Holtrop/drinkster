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

let ourApi = Axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true
})

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

// let api = Axios.create({
//   baseURL: base + "api/",
//   timeout: 3000,
//   withCredentials: true
// })

export default new Vuex.Store({
  state: {
    user: {},
    queryDrinks: {},
    activeDrink: {},
    favoriteDrinks: [],
    createdDrinks: {},



    // savedDrinks: {}
  },
  mutations: {
    setQueryDrinks(state, data) {
      state.queryDrinks = data
    },
    setUser(state, data) {
      state.user = data
    },
    setActiveDrink(state, data) {
      state.activeDrink = data
    },
    setFavoritedDrinks(state, data) {
      state.favoriteDrinks = data
    },
    setCreatedDrinks(state, data) {
      state.createdDrinks = data
    },
    resetState(state) {
      state.user = {}
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
        router.push({ name: "home" })
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
        console.log(res.data.drinks)
        commit("setQueryDrinks", res.data.drinks)
        // res.send(res.data)
      } catch (err) { console.error(err) }
    },
    // async getQueryDrinks({ dispatch, commit }) {
    //   try {
    //     let res = 
    //   }
    // }
    async getDrinkById({ dispatch, commit }, payload) {
      try {
        let res = await api.get('/lookup.php?i=' + payload.drinkId)
        commit('setActiveDrink', res.data.drinks)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addFavorite({ dispatch, commit }, payload) {
      try {
        let res = await ourApi.post('favoritedDrinks/', payload)
        console.log("res", res)
        console.log("payload", payload)
        dispatch('getFavoriteDrinksByUserId')
      } catch (error) {
        console.error(error)

      }
    },
    async getFavoriteDrinksByUserId({ dispatch, commit }) {
      try {
        let res = await ourApi.get('favoritedDrinks/')
        commit('setFavoritedDrinks', res.data)
      } catch (error) {
        console.error(error)

      }
    },
    async addCreatedDrink({ dispatch, commit }, payload) {
      try {
        // debugger
        let res = await ourApi.post('createdDrinks/', payload)
        dispatch('getCreatedDrinksByUserId')
      } catch (error) {
        console.error(error)
      }
    },

    async getCreatedDrinksByUserId({ dispatch, commit }) {
      try {
        // NOTE you don't need to send the userId if you are only going to get the createdDrinks by the user whose currenlty logged in because the server knows who is logged in on that session
        let res = await ourApi.get('createdDrinks/')
        commit('setCreatedDrinks', res.data)

      } catch (error) {
        console.error(error)
      }
    },
    async deleteDrinkById({ dispatch, commit }, payload) {
      try {
        // debugger
        let data = await ourApi.delete('createdDrinks/' + payload)
        dispatch('getCreatedDrinksByUserId')
      } catch (error) {
        console.error(error)
      }
    }
  }
})
