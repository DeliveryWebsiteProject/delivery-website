import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'
import { usePizzaStore } from '@/stores/pizza'
import { useIngredientStore } from '@/stores/ingredient'

export const installStores = () => {
  useSessionStore().fetch(),
    usePizzaStore().fetch(),
    useIngredientStore().fetch()
}

export {
  useSessionStore,
  usePizzaStore,
  useUserStore,
  useIngredientStore,
}