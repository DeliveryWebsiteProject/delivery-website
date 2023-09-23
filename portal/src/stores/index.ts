import { useSessionStore } from '@/stores/session'

export const installStores = () => {
  useSessionStore().fetch()
}

export default {
  useSessionStore
}