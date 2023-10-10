import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Basileus Pizza Artesanal',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/about',
    name: 'Sobre a Basileus',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: () => import('@/views/CardapioView.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/profile',
    name: 'Perfil',
    component: () => import('@/views/ProfileView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginPage.vue'),
    meta: {
      auth: false
    },
    children: [
      {
        path: '',
        name: 'Entrar',
        component: () => import('@/views/login/LoginView.vue'),
      },
      {
        path: '/signup',
        name: 'Cadastro',
        component: () => import('@/views/login/SignupView.vue'),
      }
    ]
  },
  {
    path: '/admin',
    name: 'Administrador',
    component: () => import('@/views/AdminView.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: '/admin/pizzas',
        name: 'Pizzas',
        component: () => import('@/components/admin/PizzaAdmin.vue')
      }
    ]
  },

  {
    path: '/speciale-mes',
    name: 'Especial do Mês',
    component: () => import('@/views/HomeView.vue'), 
    meta: {
      auth: false
    }
  },

  // Deixar como último
  {
    path: '/:catchAll(.*)*',
    name: 'Página não encontrada',
    component: () => import('@/views/ErrorNotFound.vue'),
    meta: {
      auth: false
    }
  }
]

export default routes