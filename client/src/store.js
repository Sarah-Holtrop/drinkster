import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import AuthService from './AuthService'

Vue.use(Vuex)
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

let api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

let searchurl = 'search.php?s='

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    queryDrinks: {}
    // savedDrinks: {}
  },
  mutations: {
    setQueryDrinks(state, data) {
      state.queryDrinks = data

    }

  },
  actions: {
    async search({ dispatch, commit }, query) {
      try {
        let res = await api.get(searchurl + query)
        console.log(res.data)
        commit("setQueryDrinks", res.data)
      } catch (err) { console.error(err) }
    }
  }
})
