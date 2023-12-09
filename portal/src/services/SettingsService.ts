import { Settings } from '@/models'
import service from "@/services/service";

export default {
  async getSettings(): Promise<Settings | undefined> {
    return service.get<Settings>('/settings');
  },

  async createSettings(data: Settings): Promise<Settings | undefined> {
    return service.post<Settings>(`/settings`, data)
  },

  async updateSettings(data: Settings): Promise<Settings | undefined> {
    return service.put<Settings>(`/settings`, data)
  },
}