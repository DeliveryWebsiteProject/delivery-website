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
  photo: string,
  state: State,
  // ingredients?: Ingredient[],
}

export default Pizza