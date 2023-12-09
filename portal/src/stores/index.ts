import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'
import { usePizzaStore } from '@/stores/pizza'
import { useCartStore } from '@/stores/cart'
import { useCartItemStore } from '@/stores/item'
import { useSettingsStore } from './settings'

export const installStores = () => {
  useSessionStore().fetch(),
    usePizzaStore().fetch(),
    useSettingsStore().fetch(),
    useCartStore().fetchCart(),
    useCartItemStore().fetchCartItems(),
    useCartItemStore().fetchCartItemsWrapper()
}

export {
  useSessionStore,
  usePizzaStore,
  useUserStore,
  useCartStore,
  useCartItemStore,
  useSettingsStore,
}