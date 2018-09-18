import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orientation: 'portrait'
  },
  mutations: {
    orientation (state, payload) {
      console.log(payload)
      state.orientation = payload
    }
  },
  actions: {

  }
})
