import { defineStore } from 'pinia'
import { User } from '@/models'
import { Role, State } from '@/models/user'
import { UserService } from '@/services'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    selectedUser: undefined as User | undefined
  }),
  getters: {
    getUsers(state) {
      return state.users
    },
    getSelectedUser(state) {
      return state.selectedUser
    },
  },
  actions: {
    async addUser(user: User) {
      return UserService.addUser(user)
    },
    async editUser(user: User) {
      return UserService.updateUser(user)
    },
    async editUserRole() {
      const user = this.selectedUser

      if (user) {
        user.role = user.role === Role.USER ? Role.ADMIN : Role.USER

        await this.editUser(user)
      }
    },
    async editUserState() {
      const user = this.selectedUser

      if (user) {
        user.state = user.state === State.ACTIVE ? State.INACTIVE : State.ACTIVE

        await this.editUser(user)
      }
    },
    async deleteUser(user: User) {
      if (user && user.id) {
        await UserService.deleteUser(user.id)
      }
    },
    setSelectedUser(user: User) {
      this.selectedUser = user
    },
    clearSelectedUser() {
      this.selectedUser = undefined
    },
    async fetchUser() {
      const users = await UserService.getUsers()

      if (users) {
        this.users = users
      }
    }
  }
})