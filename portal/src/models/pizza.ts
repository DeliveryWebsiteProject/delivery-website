// import Ingredient from "./Ingredient"

export enum Category {
  SALTY,
  SWEET
}

export enum State {
  ACTIVE,
  INACTIVE
}

interface Pizza {
  id?: string,
  name: string,
  price: Number,
  category: Category,
  state: State,
  // ingredients?: Ingredient[],
  photo: string,
}

export default Pizza