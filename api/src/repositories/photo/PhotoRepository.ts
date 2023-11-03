import { Photo } from "../../models/Photo";

export interface PhotoRepository {
  add: (path: string) => Promise<Photo>
  update: (id: string, path: string) => Promise<Photo>
  delete: (photo: Photo) => Promise<void>
  getPhotoById(id: string): Promise<Photo | undefined>
}