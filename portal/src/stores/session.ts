import { defineStore } from 'pinia'
import jwt from '@/plugins/jwt'

export const useSessionStore = defineStore('session', {
  state: () => ({
    token: localStorage.getItem('token') ?? '',
  }),
  getters: {
    getToken(state) {
      return state.token
    }
  },
  actions: {
    setToken(token: string) {
      localStorage.setItem('token', token)

      this.token = token
    },
    clearSession() {
      localStorage.removeItem('token')

      this.token = ''
    },
    // setActualUser() {
    // const userId = jwt.decode(this.token).payload.id

    // this.actualUser = await
    // }
  }
})