import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orientation: 'portrait',
    scroll: 0,
    ratings: [],
    years: [],
    activeYear: -1,
    authSettings: null,
    account: {
      user: {
        signedIn: false,
        result: {
          hasResult: false
        }
      },
      register: {
        result: {
          hasResult: false
        }
      }
    },
    administrationError: null
  },
  mutations,
  actions,
  plugins: [plugins]
})
