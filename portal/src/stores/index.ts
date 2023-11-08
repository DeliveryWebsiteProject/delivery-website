import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'
import { usePizzaStore } from '@/stores/pizza'
import { useIngredientStore } from '@/stores/ingredient'
import { usePizzaMappingStore } from '@/stores/pizzaMapping'

export const installStores = () => {
  useSessionStore().fetch(),
    usePizzaStore().fetch(),
    useIngredientStore().fetch(),
    usePizzaMappingStore().fetch()
}

export {
  useSessionStore,
  usePizzaStore,
  useUserStore,
  useIngredientStore,
  usePizzaMappingStore,
}