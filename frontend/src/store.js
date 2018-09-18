import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'

let plugins = []
if (process.env.NODE_ENV !== 'production') {
  plugins.push(logger({
    collapsed: false,
    filter (mutation, stateBefore, stateAfter) {
      return true
    },
    transformer (state) {
      return state
    },
    mutationTransformer (mutation) {
      return `${mutation.type} - ${mutation.payload}`
    }
  }))
}

Vue.use(Vuex)

export const MUTATIONS = {
  ORIENTATION: 'm_orientation',
  SCROLL: 'm_scroll'
}

export const ACTIONS = {

}

export default new Vuex.Store({
  state: {
    orientation: 'portrait',
    scroll: 0
  },
  mutations: {
    [MUTATIONS.ORIENTATION] (state, payload) {
      state.orientation = payload
    },
    [MUTATIONS.SCROLL] (state, payload) {
      state.scroll = payload
    }
  },
  actions: {

  },
  plugins: plugins
})
