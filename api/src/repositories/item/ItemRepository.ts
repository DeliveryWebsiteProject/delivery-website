import { Item } from "../../models"

export interface ItemRepository {
  findAll(): Promise<Item[]>
  getById(id: string): Promise<Item>
  getByUserId(userId: string): Promise<Item[]>
  add(data: Item): Promise<Item>
  update(id: string, data: Item): Promise<Item>
  delete(id: string): Promise<void>
}