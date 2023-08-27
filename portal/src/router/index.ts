import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Basileus Pizza Artesanal',
    component: HomeView
  },
  {
    path: '/about',
    name: 'Sobre a Basileus',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name as string

  next()
})

export default router
