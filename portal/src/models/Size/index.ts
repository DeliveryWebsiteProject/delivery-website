export default class Sizes {
  static SMALL = new Sizes('Pequeno', 2)
  static MEDIUM = new Sizes('Médio', 4)
  static LARGE = new Sizes('Grande', 6)

  constructor(public readonly value: string, public readonly peoples: number) {}

  toString() {
    return this.value
  }

  static changeSize(selected: Sizes, increasing: boolean): Sizes {
    const values = Object.values(Sizes)

    const selectedIndex = values.indexOf(selected)

    if (selectedIndex === values.length - 1 && increasing) {
      selected = values[0]
    } else if (selectedIndex === 0 && !increasing) {
      selected = values[values.length - 1]
    } else if (increasing) {
      selected = values[selectedIndex + 1]
    } else {
      selected = values[selectedIndex - 1]
    }

    return selected
  }
}
