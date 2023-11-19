import Item from "./item";
import Pizza from "./pizza";

interface CartItemWrapper {
  cartItem: Item;
  pizza: Pizza;
}

export default CartItemWrapper;