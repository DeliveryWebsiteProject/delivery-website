export enum State {
  OPEN,
  CLOSE
}

interface Settings {
  days: string,
  begin: string,
  end: string,
  state: State,
  phone: string,
  instagram: string,
}

export default Settings