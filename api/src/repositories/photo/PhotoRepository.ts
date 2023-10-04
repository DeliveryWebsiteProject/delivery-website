export interface PhotoRepository {
  add: (path: string) => Promise<void>
}