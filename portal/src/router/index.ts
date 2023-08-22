import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NewHomeView from '@/views/NewHomeView.vue'
import LoginView from '@/views/LoginView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: NewHomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

export default router
