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
    path: '/checkout',
    name: 'Finalizar pedido',
    component: () => import('@/views/CheckoutView.vue'),
    meta: {
      auth: true
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
        path: '/admin/settings',
        name: 'Geral',
        component: () => import('@/components/admin/SettingsAdmin.vue')
      },
      {
        path: '/admin/orders',
        name: 'Pedidos',
        component: () => import('@/components/admin/OrderAdmin.vue')
      },
      {
        path: '/admin/pizzas',
        name: 'Pizzas',
        component: () => import('@/components/admin/PizzaAdmin.vue')
      },
      {
        path: '/admin/users',
        name: 'Usuários',
        component: () => import('@/components/admin/UserAdmin.vue')
      },
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