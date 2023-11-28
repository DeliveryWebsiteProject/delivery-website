export enum State {
  PENDING,
  ACCEPTED,
  CANCELED,
  DELIVERED
}

interface Item {
  id: string,
  ref_pizza: string,
  quantity: number,
  state: State,
}

export default Item