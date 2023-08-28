import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/login/LoginView.vue'
import LoginPage from '@/views/login/LoginPage.vue'
import SignupView from '@/views/login/SignupView.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    children: [
      {
        path: '',
        name: 'Entrar',
        component: LoginView,
      },
      {
        path: '/signup',
        name: 'Cadastro',
        component: SignupView,
      }
    ]
  },
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
