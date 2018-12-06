import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'daysOfRum',
    component: () => import('@/modules/daysOfRum/DaysOfRum')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/account/Login')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/modules/account/Register')
  }, {
    path: '/logout',
    name: 'logout',
    component: () => import('@/modules/account/Logout')
  }, {
    path: '/admin',
    name: 'admin',
    component: () => import('@/modules/admin/Admin')
  }]
})
