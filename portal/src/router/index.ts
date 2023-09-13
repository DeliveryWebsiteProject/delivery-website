import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useSessionStore } from '@/stores/session'
import jwt from '@/plugins/jwt'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const session = useSessionStore()

  document.title = to.name as string

  const isTokenValid = jwt.isTokenValid(session.token)

  if (to.matched.some((record) => record.meta.auth)) {
    !isTokenValid ? next({ path: '/login' }) : next()
  } else {
    next()
  }
})

export default router
