import { Photo } from "../../models/Photo";

export interface PhotoRepository {
  add: (path: string) => Promise<Photo>
  getPhotoById(id: string): Promise<Photo | undefined>
}