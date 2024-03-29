import { Item } from '@/models'
import service from '@/services/service'

export default {
  async getItems(): Promise<Item[] | undefined> {
    return service.get<Item[]>('/items');
  },

  async getItemsByUser(userId: string): Promise<Item[] | undefined> {
    return service.get<Item[]>(`/items/user/${userId}`);
  },

  async getItemById(id: string): Promise<Item | undefined> {
    return service.get<Item>(`/items/${id}`)
  },

  async addItem(data: Item): Promise<Item | undefined> {
    return service.post<Item>('/items', data)
  },

  async updateItem(data: Item): Promise<Item | undefined> {
    return service.put<Item>(`/items/${data.id}`, data)
  },

  async deleteItem(id: string): Promise<Item | undefined> {
    return service.delete<Item>(`/items/${id}`)
  },
}