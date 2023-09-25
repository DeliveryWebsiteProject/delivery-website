import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'
import { usePizzaStore } from '@/stores/pizza'

export const installStores = () => {
  useSessionStore().fetch(),
    usePizzaStore().fetch()
}

export {
  useSessionStore,
  usePizzaStore,
  useUserStore,
}