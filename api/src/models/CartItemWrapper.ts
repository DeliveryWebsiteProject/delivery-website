import { RowDataPacket } from "mysql2";
import Item from "./Item";
import Pizza from "./Pizza";

interface CartItemWrapper extends RowDataPacket {
  cartItem: Item;
  pizza: Pizza;
}

export default CartItemWrapper;