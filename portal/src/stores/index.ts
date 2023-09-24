import { useSessionStore } from '@/stores/session'
import { usePizzaStore } from '@/stores/pizza'

export const installStores = () => {
  useSessionStore().fetch(),
    usePizzaStore().fetch()
}

export default {
  useSessionStore,
  usePizzaStore
}