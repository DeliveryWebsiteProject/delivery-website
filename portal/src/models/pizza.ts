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
  ref_photo?: string,
  path?: string,
  name: string,
  price: Number,
  category: Category,
  state: State,
  // ingredients?: Ingredient[],
}

export default Pizza