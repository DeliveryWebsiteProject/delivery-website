export enum State {
  OPEN,
  CLOSE
}

interface Settings {
  days: string,
  begin: string,
  end: string,
  state: State,
  cellphone: string,
  phone: string,
  facebook: string,
  instagram: string,
}

export default Settings