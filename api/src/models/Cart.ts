import { RowDataPacket } from "mysql2"

interface Cart extends RowDataPacket {
  ref_user: string,
  ref_item: string,
}

export default Cart
