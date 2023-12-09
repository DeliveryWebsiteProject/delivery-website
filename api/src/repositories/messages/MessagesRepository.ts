import { Messages } from "../../models"

export default interface MessagesRepository {
  getMessages(): Promise<Messages[]>
  create(data: Messages): Promise<Messages>
  update(data: Messages): Promise<Messages>
}