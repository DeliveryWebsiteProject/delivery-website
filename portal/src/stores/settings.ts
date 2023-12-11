import { defineStore } from 'pinia'
import { Settings } from '@/models'
import { State } from '@/models/settings'
import { SettingsService } from '@/services'
import helper from '@/helper'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: undefined as Settings | undefined
  }),
  getters: {
    getSettings(state) {
      return state.settings
    }
  },
  actions: {
    async create(settings: Settings) {
      return SettingsService.createSettings(settings)
    },
    async update(settings: Settings) {
      return SettingsService.updateSettings(settings)
    },
    async fetch() {
      const settings = await SettingsService.getSettings()

      if (settings) {
        const now = new Date()

        const begin = helper.convertTime(settings.begin)
        const end = helper.convertTime(settings.end)

        settings.state = (now >= begin && now <= end) ? State.OPEN : State.CLOSE

        this.settings = settings
      } else {
        const newSettings: Settings = {
          days: '5, 6',
          begin: '19:00',
          end: '22:00',
          state: 0,
          cellphone: '',
          phone: '',
          facebook: '',
          instagram: ''
        }

        this.settings = newSettings

        await this.create(newSettings)
      }
    }
  }
})