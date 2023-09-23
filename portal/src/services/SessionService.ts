import { User } from '@/models'
import service from "@/services/service";

export default {
  async login(cpf: string, password: string): Promise<User | undefined> {
    return service.post<User>('/auth', { cpf, password });
  }
} 