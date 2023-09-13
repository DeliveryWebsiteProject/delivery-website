import { defineStore } from 'pinia'
import jwt from '@/plugins/jwt'
import { User } from '@/models'
import { Role } from '@/models/user'
import UserService from '@/services/UserService'

export const useSessionStore = defineStore('session', {
  state: () => ({
    token: localStorage.getItem('token') ?? '',
    actualUser: undefined as User | undefined,
  }),
  getters: {
    getToken(state) {
      return state.token
    },
    getActualUser(state) {
      return state.actualUser
    },
    isAdmin(state) {
      return state.actualUser?.role === Role.ADMIN
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
    async updateActualUser() {
      const userId = jwt.decode(this.token).payload.id

      this.actualUser = await UserService.getUserById(userId)
    }
  }
})