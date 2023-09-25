import { User } from '@/models'
import service from "@/services/service";

export default {
  async getUserById(data: string): Promise<User | undefined> {
    return service.get<User>(`/users/${data}`);
  },

  async getUsers(): Promise<User[] | undefined> {
    return service.get<User[]>('/users');
  },

  async addUser(data: User): Promise<User | undefined> {
    return service.post<User>('/users', data);
  },

  async updateUser(data: User): Promise<User | undefined> {
    return service.put<User>(`/users/${data.id}`, data)
  },

  async deleteUser(data: string): Promise<User | undefined> {
    return service.delete<User>(`/users/${data}`)
  }
} 