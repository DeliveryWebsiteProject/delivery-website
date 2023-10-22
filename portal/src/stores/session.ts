import { defineStore } from 'pinia'
import jwt from '@/plugins/jwt'
import { User } from '@/models'
import { Role } from '@/models/user'
import SessionService from '@/services/SessionService'

export const useSessionStore = defineStore('session', {
  state: () => ({
    token: '',
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
    },
    isLogged(state) {
      return !!state.token
    }
  },
  actions: {
    async login(cpf: string, password: string, callback: (error?: any) => any): Promise<void> {
      SessionService.login(cpf, password)
        .then(async (result) => {
          this.setToken(result?.token ?? '')
          await this.updateActualUser()
          callback();
        })
        .catch((error) => {
          callback(error);
        })
    },
    setToken(token: string) {
      localStorage.setItem('token', token)

      this.token = token
    },
    clearSession() {
      localStorage.removeItem('token')

      this.token = ''
    },
    async updateActualUser() {
      this.actualUser = jwt.decode(this.token).payload as User
    },
    async fetch(user?: User) {
      if (user) {
        this.setToken(user?.token ?? '')
        await this.updateActualUser()
      } else {
        const token = localStorage.getItem('token');

        if (token) {
          this.token = token
          await this.updateActualUser()
        }
      }
    },
  }
})