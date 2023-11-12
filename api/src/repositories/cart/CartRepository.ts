import { Cart } from "../../models"

export default interface CartRepository {
  findAll(): Promise<Cart[]>
  getByUserId(ref_user: string): Promise<Cart[]>
  add(data: Cart): Promise<Cart>
  hasItemMapping(ingredientId: string): Promise<boolean>
}