import { User } from '@/models'
import service from "./service";

export default {
  async create(data: User): Promise<User | undefined> {
    return service.post<User>('/users/create', data);
  }
} 