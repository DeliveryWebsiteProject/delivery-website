import User from "@/models/user";
import service from "./service";

export default {
  async login(cpf: string, password: string): Promise<User | undefined> {
    return service.post<User>('/auth', { cpf, password });
  }
} 