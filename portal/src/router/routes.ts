import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Basileus Pizza Artesanal',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'Sobre a Basileus',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
     component: () => import('@/views/CardapioView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue'),
    children: [
      {
        path: '',
        name: 'Entrar',
        component: () => import('@/views/login/LoginPage.vue'),
      },
      {
        path: '/signup',
        name: 'Cadastro',
        component: () => import('@/views/login/SignupView.vue'),
      }
    ]
  },

  // Deixar como último
  {
    path: '/:catchAll(.*)*',
    name: 'Página não encontrada',
    component: () => import('@/views/ErrorNotFound.vue')
  }
]

export default routes