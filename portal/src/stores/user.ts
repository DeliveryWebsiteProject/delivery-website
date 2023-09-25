import { defineStore } from 'pinia'
import { User } from '@/models'
import { UserService } from '@/services'

export const useUserStore = defineStore('user', {
  state: () => ({}),
  getters: {},
  actions: {
    async addUser(user: User) {
      return UserService.addUser(user)
    },
    async editUser(user: User) {
      return UserService.updateUser(user)
    },
    async deleteUser(user: User) {
      if (user && user.id) {
        await UserService.deleteUser(user.id)
      }
    },
  }
})