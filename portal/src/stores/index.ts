import { useSessionStore } from '@/stores/session'
import { useUserStore } from '@/stores/user'
import { usePizzaStore } from '@/stores/pizza'
import { useCartStore } from '@/stores/cart'
import { useCartItemStore } from '@/stores/item'

export const installStores = () => {
  useSessionStore().fetch(),
    usePizzaStore().fetch(),
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
}