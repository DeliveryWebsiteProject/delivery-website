import { Cart } from "../../models"

export default interface CartRepository {
  findAll(): Promise<Cart[]>
  getByUserId(ref_user: string): Promise<Cart[]>
  getByUserIdAndItemId(ref_user: string, ref_item: string): Promise<Cart | undefined>
  add(data: Cart): Promise<Cart>
  countItems(userId: string): Promise<number>
  deleteCart(data: Cart): Promise<Cart>
}