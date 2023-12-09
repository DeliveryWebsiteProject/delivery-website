import { defineStore } from 'pinia'
import { Messages } from '@/models'
import { MessagesService } from '@/services'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: undefined as Messages | undefined
  }),
  getters: {
    getMessages(state) {
      return state.messages
    }
  },
  actions: {
    async create(messages: Messages) {
      return MessagesService.createMessages(messages)
    },
    async update(messages: Messages) {
      return MessagesService.updateMessages(messages)
    },
    async fetch() {
      const messages = await MessagesService.getMessages()

      if (messages) {
        this.messages = messages
      }
    }
  }
})