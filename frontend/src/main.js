import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
Vue.prototype.$appName = 'ropr.se'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
