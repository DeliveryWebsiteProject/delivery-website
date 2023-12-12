import { Messages } from '@/models'
import service from "@/services/service";

export default {
  async getMessages(): Promise<Messages | undefined> {
    return service.get<Messages>('/messages');
  },

  async createMessages(data: Messages): Promise<Messages | undefined> {
    return service.post<Messages>(`/messages`, data)
  },

  async updateMessages(data: Messages): Promise<Messages | undefined> {
    return service.put<Messages>(`/messages`, data)
  },

  async sendWelcomeMessage(userId: string): Promise<void> {
    return service.post<void>(`/messages/${userId}`, {})
  }
}