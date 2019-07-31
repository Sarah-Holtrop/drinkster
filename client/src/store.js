import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { STATES } from 'mongoose';

Vue.use(Vuex)
//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

let api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

let searchurl = 'search.php?s='

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
